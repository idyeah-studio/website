#!/usr/bin/env python3
"""Regenerate every page that an "off idyeah" strip touches.

One strip used to mean hand-editing five files with a dozen repeated
values. This script makes content/strips.json the single source of truth
and rebuilds the rest from it plus the artwork on disk:

    off-idyeah/NNN.html      one page per strip
    off-idyeah.html          the landing page, cloned from the newest strip
    off-idyeah/archive.html  every strip, newest first
    sitemap.xml              the /off-idyeah/... entries only
    index.html               the footer .tf-strip card and the .off-note line

Content-hash ?v= stamps (sha256, first 12 hex) and the image width/height
attributes are read from the files in assets/idyeah/off-idyeah, so they
can never drift from what is actually served.

Usage:
    python3 scripts/publish_strips.py            regenerate and write
    python3 scripts/publish_strips.py --check    verify, exit 1 on drift
    python3 scripts/publish_strips.py --diff     show a unified diff too

Standard library only, Python 3.8+.
"""

import argparse
import difflib
import hashlib
import json
import re
import struct
import sys
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "content" / "strips.json"
TEMPLATES = Path(__file__).resolve().parent / "templates"

# Shared assets whose ?v= stamp is a content hash. scripts/stamp_assets.py
# owns these across the whole site and uses 10 hex chars; we compute them
# the same way so the two scripts never disagree.
SHARED_STAMP_LEN = 10
# Strip artwork stamps are 12 hex chars (the convention on these pages).
ART_STAMP_LEN = 12


# ---------------------------------------------------------------- helpers


def sha_stamp(path, length):
    return hashlib.sha256(path.read_bytes()).hexdigest()[:length]


def esc(text):
    """Escape for an HTML text node."""
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def esc_attr(text):
    """Escape for a double-quoted HTML attribute."""
    return esc(text).replace('"', "&quot;")


def render(template, values):
    """Fill {{name}} placeholders. Unknown placeholders are an error."""
    def sub(match):
        key = match.group(1)
        if key not in values:
            raise SystemExit("template placeholder {{%s}} has no value" % key)
        return values[key]

    out = re.sub(r"\{\{(\w+)\}\}", sub, template)
    return out


def png_size(data):
    if data[:8] != b"\x89PNG\r\n\x1a\n" or data[12:16] != b"IHDR":
        raise ValueError("not a PNG")
    return struct.unpack(">II", data[16:24])


def webp_size(data):
    if data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        raise ValueError("not a WebP")
    pos = 12
    while pos + 8 <= len(data):
        fourcc = data[pos:pos + 4]
        size = struct.unpack("<I", data[pos + 4:pos + 8])[0]
        body = data[pos + 8:pos + 8 + size]
        if fourcc == b"VP8X":
            w = int.from_bytes(body[4:7], "little") + 1
            h = int.from_bytes(body[7:10], "little") + 1
            return w, h
        if fourcc == b"VP8 ":
            if body[3:6] != b"\x9d\x01\x2a":
                raise ValueError("bad VP8 sync code")
            w = struct.unpack("<H", body[6:8])[0] & 0x3FFF
            h = struct.unpack("<H", body[8:10])[0] & 0x3FFF
            return w, h
        if fourcc == b"VP8L":
            if body[0] != 0x2F:
                raise ValueError("bad VP8L signature")
            bits = struct.unpack("<I", body[1:5])[0]
            return (bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1
        pos += 8 + size + (size & 1)
    raise ValueError("no VP8 chunk found")


def image_size(path):
    data = path.read_bytes()
    return png_size(data) if path.suffix == ".png" else webp_size(data)


# ---------------------------------------------------------------- model


class Build:
    """Everything derived once from the manifest plus the files on disk."""

    def __init__(self):
        manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
        self.site = manifest["site"]
        self.strips = sorted(manifest["strips"], key=lambda s: s["number"])
        if not self.strips:
            raise SystemExit("manifest has no strips")
        self.newest = self.strips[-1]
        self.base = self.site["base_url"]
        self.art_dir = self.site["art_dir"]

        self.shared = {
            "site_css_v": sha_stamp(ROOT / "assets/idyeah/site.css", SHARED_STAMP_LEN),
            "analytics_v": sha_stamp(ROOT / "assets/idyeah/analytics.js", SHARED_STAMP_LEN),
            "off_css_v": self.site["off_css_version"],
            "off_js_v": self.site["off_js_version"],
            "copyright_year": self.site["copyright_year"],
        }
        self.art = {s["number"]: self._artwork(s) for s in self.strips}

    def _artwork(self, strip):
        base = strip["artwork"]
        files = {
            "png": ROOT / self.art_dir / ("%s.png" % base),
            "webp": ROOT / self.art_dir / ("%s.webp" % base),
            "thumb": ROOT / self.art_dir / ("%s-thumb.webp" % base),
        }
        for kind, path in files.items():
            if not path.exists():
                raise SystemExit("missing artwork for No. %s: %s"
                                 % (strip["number"], path.relative_to(ROOT)))
        w, h = image_size(files["png"])
        if image_size(files["webp"]) != (w, h):
            raise SystemExit("No. %s: webp and png dimensions differ" % strip["number"])
        tw, th = image_size(files["thumb"])
        return {
            "png_url": "/%s/%s.png?v=%s" % (self.art_dir, base, sha_stamp(files["png"], ART_STAMP_LEN)),
            "webp_url": "/%s/%s.webp?v=%s" % (self.art_dir, base, sha_stamp(files["webp"], ART_STAMP_LEN)),
            "thumb_url": "/%s/%s-thumb.webp?v=%s" % (self.art_dir, base, sha_stamp(files["thumb"], ART_STAMP_LEN)),
            "w": str(w), "h": str(h), "tw": str(tw), "th": str(th),
        }

    # -- per-strip values ------------------------------------------------

    def path(self, strip):
        return "/off-idyeah/%s" % strip["number"]

    def permalink(self, strip):
        return self.base + self.path(strip)

    def description(self, strip):
        return "%s %s" % (strip["caption"], self.site["credit"])

    def share_alt(self, strip):
        return strip["share_alt"]

    def twitter_alt(self, strip):
        return strip.get("twitter_alt", strip["share_alt"])

    def share_image_url(self, strip):
        return self.base + self.art[strip["number"]]["png_url"]

    def strip_page(self, strip, page_title):
        art = self.art[strip["number"]]
        credit = self.site["credit"]
        alt = "%s Credit: %s" % (strip["alt"], credit)
        transcript = "".join(
            "<p>%s</p>" % esc(p) for p in list(strip["transcript"]) + ["Credit: " + credit]
        )
        permalink = self.permalink(strip)
        values = dict(self.shared)
        values.update({
            "page_title": esc(page_title),
            "og_title": esc_attr("off idyeah. / %s" % strip["number"]),
            "description": esc_attr(self.description(strip)),
            "permalink": esc_attr(permalink),
            "permalink_enc": urllib.parse.quote(permalink, safe=""),
            "path": esc_attr(self.path(strip)),
            "number": esc(strip["number"]),
            "caption": esc(strip["caption"]),
            "alt": esc_attr(alt),
            "transcript": transcript,
            "og_alt": esc_attr(self.share_alt(strip)),
            "twitter_alt": esc_attr(self.twitter_alt(strip)),
            "share_image_url": esc_attr(self.share_image_url(strip)),
            "art_webp": esc_attr(art["webp_url"]),
            "art_png": esc_attr(art["png_url"]),
            "art_w": art["w"],
            "art_h": art["h"],
            "credit": esc(credit),
            "share_text": urllib.parse.quote_plus("off idyeah. " + credit),
        })
        return render(read_template("strip.html"), values)

    def archive_page(self):
        newest = self.newest
        rows = "".join(
            render(read_template("archive-entry.html"), {
                "path": esc_attr(self.path(s)),
                "number": esc(s["number"]),
                "date": esc_attr(s["date"]),
                "date_display": esc_attr(s["date_display"]),
                "thumb": esc_attr(self.art[s["number"]]["thumb_url"]),
                "thumb_w": self.art[s["number"]]["tw"],
                "thumb_h": self.art[s["number"]]["th"],
            })
            for s in reversed(self.strips)
        )
        permalink = "%s/off-idyeah/archive" % self.base
        values = dict(self.shared)
        values.update({
            "page_title": esc(self.site["archive_title"]),
            "description": esc_attr("%s %s" % (self.site["archive_description"], self.site["credit"])),
            "permalink": esc_attr(permalink),
            # Convention: the archive card borrows the newest strip's artwork.
            "share_image_url": esc_attr(self.share_image_url(newest)),
            "share_alt": esc_attr(self.share_alt(newest)),
            "art_w": self.art[newest["number"]]["w"],
            "art_h": self.art[newest["number"]]["h"],
            "rows": rows,
        })
        return render(read_template("archive.html"), values)

    # -- surgical patches ------------------------------------------------

    def patch_sitemap(self, xml):
        newest_date = self.newest["date"]
        block = "".join(
            "  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n  </url>\n"
            % (self.permalink(s), s.get("sitemap_lastmod", s["date"]))
            for s in self.strips
        )
        entry = re.compile(
            r"  <url>\n    <loc>%s/off-idyeah/\d+</loc>\n"
            r"    <lastmod>[^<]*</lastmod>\n  </url>\n" % re.escape(self.base)
        )
        found = list(entry.finditer(xml))
        if found:
            xml = xml[:found[0].start()] + block + xml[found[-1].end():]
        else:
            anchor = xml.index("  <url>\n    <loc>%s/off-idyeah/archive</loc>" % self.base)
            xml = xml[:anchor] + block + xml[anchor:]

        # The site root and the archive both move with the newest strip.
        for loc in ("%s/" % self.base, "%s/off-idyeah/archive" % self.base):
            pattern = re.compile(
                r"(<loc>%s</loc>\n    <lastmod>)[^<]*(</lastmod>)" % re.escape(loc)
            )
            if not pattern.search(xml):
                raise SystemExit("sitemap.xml has no entry for %s" % loc)
            xml = pattern.sub(lambda m: m.group(1) + newest_date + m.group(2), xml)
        return xml

    def patch_index(self, html):
        newest = self.newest
        art = self.art[newest["number"]]
        values = {
            "path": esc_attr(self.path(newest)),
            "number": esc(newest["number"]),
            "caption": esc_attr(newest["caption"]),
            "thumb": esc_attr(art["thumb_url"]),
            "thumb_w": art["tw"],
            "thumb_h": art["th"],
        }
        card = render(read_template("home-strip-card.html"), values)
        note = render(read_template("home-off-note.html"), values).rstrip("\n")

        patches = [
            (re.compile(r'    <a class="tf-strip".*?\n    </a>\n', re.S), card, ".tf-strip card"),
            (re.compile(r'<aside class="off-note".*?</aside>', re.S), note, ".off-note line"),
        ]
        for pattern, replacement, label in patches:
            hits = pattern.findall(html)
            if len(hits) != 1:
                raise SystemExit("index.html: expected exactly one %s, found %d"
                                 % (label, len(hits)))
            html = pattern.sub(lambda m: replacement, html, count=1)
        return html


_TEMPLATE_CACHE = {}


def read_template(name):
    if name not in _TEMPLATE_CACHE:
        _TEMPLATE_CACHE[name] = (TEMPLATES / name).read_text(encoding="utf-8")
    return _TEMPLATE_CACHE[name]


# ---------------------------------------------------------------- driver


def build_outputs():
    """Return {relative path: expected file text} for everything we own."""
    build = Build()
    out = {}
    for strip in build.strips:
        out["off-idyeah/%s.html" % strip["number"]] = build.strip_page(
            strip, "off idyeah. / %s" % strip["number"]
        )
    out["off-idyeah.html"] = build.strip_page(build.newest, build.site["landing_title"])
    out["off-idyeah/archive.html"] = build.archive_page()
    out["sitemap.xml"] = build.patch_sitemap((ROOT / "sitemap.xml").read_text(encoding="utf-8"))
    out["index.html"] = build.patch_index((ROOT / "index.html").read_text(encoding="utf-8"))
    return out


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    parser.add_argument("--check", action="store_true",
                        help="verify the tree matches the manifest; exit 1 on drift")
    parser.add_argument("--diff", action="store_true",
                        help="with --check, print a unified diff of each drifted file")
    args = parser.parse_args()

    outputs = build_outputs()
    drifted = []
    written = []
    for rel, text in sorted(outputs.items()):
        path = ROOT / rel
        current = path.read_text(encoding="utf-8") if path.exists() else None
        if current == text:
            continue
        if args.check:
            drifted.append((rel, current, text))
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text, encoding="utf-8")
            written.append(rel)

    if args.check:
        if not drifted:
            print("ok: %d generated file(s) match content/strips.json" % len(outputs))
            return 0
        print("drift: %d file(s) do not match content/strips.json\n" % len(drifted))
        for rel, current, text in drifted:
            if current is None:
                print("  %s: missing (would be created)" % rel)
                continue
            a, b = current.splitlines(True), text.splitlines(True)
            changed = sum(1 for line in difflib.ndiff(a, b) if line[0] in "+-")
            print("  %s: %d line(s) differ" % (rel, changed))
            if args.diff:
                sys.stdout.writelines(
                    difflib.unified_diff(a, b, "%s (working tree)" % rel,
                                         "%s (generated)" % rel)
                )
                print()
        print("\nRun: python3 scripts/publish_strips.py")
        return 1

    if written:
        for rel in written:
            print("wrote: %s" % rel)
    print("%d of %d generated file(s) changed" % (len(written), len(outputs)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
