#!/usr/bin/env python3
"""Stamp mutable asset URLs with content hashes so browser/CDN caches
can never pair new HTML with stale assets (the "four needles" flash).

Rewrites ?v= on references to the assets listed below in every root and
off-idyeah HTML page. The stamp is the first 10 hex chars of the file's
SHA-256, so it changes exactly when the content changes. Run from the
repo root before committing any change to these assets:

    python3 scripts/stamp_assets.py
"""
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Assets whose URLs carry a content stamp. Fingerprint-stable files
# (favicons, fonts, logos) keep bare URLs on purpose.
ASSETS = [
    "assets/idyeah/site.css",
    "assets/idyeah/site.js",
    "assets/idyeah/analytics.js",
    "assets/idyeah/needle-light.webp",
    "assets/idyeah/needle-dark.webp",
    "assets/idyeah/footer-needle-light.webp",
    "assets/idyeah/footer-needle-dark.webp",
]

PAGES = sorted(
    [*ROOT.glob("*.html"), *ROOT.glob("off-idyeah/*.html")]
)


def main() -> int:
    stamps = {}
    for rel in ASSETS:
        path = ROOT / rel
        if not path.exists():
            print(f"skip (missing): {rel}")
            continue
        stamps[rel] = hashlib.sha256(path.read_bytes()).hexdigest()[:10]

    changed_pages = 0
    for page in PAGES:
        html = page.read_text(encoding="utf-8")
        original = html
        for rel, stamp in stamps.items():
            # match /assets/... or assets/... with optional existing ?v=...
            pattern = re.compile(
                r"(/?)" + re.escape(rel) + r"(\?v=[0-9a-zA-Z]+)?"
            )
            html = pattern.sub(lambda m: f"{m.group(1)}{rel}?v={stamp}", html)
        if html != original:
            page.write_text(html, encoding="utf-8")
            changed_pages += 1
            print(f"stamped: {page.relative_to(ROOT)}")
    print(f"{changed_pages} page(s) updated; stamps: "
          + ", ".join(f"{Path(k).name}={v}" for k, v in stamps.items()))
    return 0


if __name__ == "__main__":
    sys.exit(main())
