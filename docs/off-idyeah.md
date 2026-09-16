# Publishing an "off idyeah" strip

A strip touches five files. Hand-editing them meant repeating a dozen values
(number, date, caption, alt text, transcript, three content-hash stamps) and it
drifted once in production. `scripts/publish_strips.py` now generates all of it
from one manifest.

## Source of truth

`content/strips.json` holds everything that varies per strip. Nothing else does.

```
site     shared constants: base URL, credit line, artwork directory,
         copyright year, landing/archive titles, the hand-managed
         off-idyeah.css / off-idyeah.js version strings
strips[] one entry per strip
```

Per-strip fields:

| field | meaning |
| --- | --- |
| `number` | `"004"`, zero-padded, also the URL and the page title |
| `artwork` | basename under `assets/idyeah/off-idyeah/` (usually the same as `number`) |
| `date` | ISO publish date, used by the archive `<time datetime>` and the sitemap |
| `date_display` | how the archive prints it, e.g. `16 Sep 2026` (no leading zero) |
| `sitemap_lastmod` | optional; only when the sitemap deliberately differs from `date` |
| `caption` | the editorial line: `<h1>`, the meta description, the homepage card label |
| `share_alt` | short alt for the og/twitter card image |
| `twitter_alt` | optional; only when twitter's alt deliberately differs from `share_alt` |
| `alt` | the long, literal alt for the strip image |
| `transcript` | one string per panel, in order |

Two things are appended by the template so they are written once, not per strip:
the `Credit: ...` sentence at the end of `alt`, and the final `Credit: ...`
paragraph of the transcript. Both come from `site.credit`. Do not repeat them in
the manifest.

## Publishing

1. Drop the three artwork files into `assets/idyeah/off-idyeah/`:
   `NNN.png`, `NNN.webp` (lossless, pixel-identical to the PNG) and
   `NNN-thumb.webp`. The script reads their real dimensions and hashes, so there
   is nothing to type.
2. Add the strip's entry to the end of `content/strips.json`.
3. Generate:

   ```
   python3 scripts/publish_strips.py
   ```

4. Review the diff. It should touch only the new strip page, the landing, the
   archive, the sitemap's off-idyeah entries and the two homepage fragments.
5. Preview locally, then commit.

To verify without writing anything (useful in a pre-commit hook or CI):

```
python3 scripts/publish_strips.py --check          # exit 1 on drift
python3 scripts/publish_strips.py --check --diff   # and show what differs
```

## What the script owns

Regenerated in full, every run:

- `off-idyeah/NNN.html` for every strip in the manifest
- `off-idyeah.html`, the landing page: the newest strip page with its own
  `<title>` (`off idyeah.`) and a canonical pointing at the newest strip
- `off-idyeah/archive.html`, rows newest first; its og/twitter card follows the
  newest strip, per the existing convention

Patched surgically, leaving everything else untouched:

- `sitemap.xml`: the `/off-idyeah/NNN` entries, plus the `lastmod` on `/` and on
  `/off-idyeah/archive`, which both move with the newest strip. Every other URL
  block is left byte for byte as it was.
- `index.html`: exactly two fragments, the footer `.tf-strip` card and the
  `.off-note` line under "Vishal Mehta." A diff of `index.html` after a run must
  show those two fragments and nothing else.

Content-hash `?v=` stamps for each strip's png/webp/thumb are sha256, first 12
hex, computed from the files on disk. The shared `site.css` and `analytics.js`
stamps are recomputed the same way `scripts/stamp_assets.py` does it (first 10
hex) so the two scripts cannot disagree.

## What stays hand-edited

- Everything in `index.html` other than those two fragments. It is the large
  hand-built "Underpage" homepage and the script will not touch the rest of it.
- `site.css`, `site.js`, `assets/idyeah/off-idyeah.css`, `off-idyeah.js`. The
  off-idyeah css/js version strings are date stamps kept in
  `content/strips.json` under `site`; bump them by hand when you change those
  files.
- Non-strip sitemap entries (`/terms`, `/privacy`, `/a-to-z`).
- Producing the artwork itself, including the lossless webp and the 561px thumb.

## Do not hand-tweak a generated page

`off-idyeah/*.html` and `off-idyeah.html` are output. Editing them is a change
that the next run silently deletes, and `--check` will flag as drift. If the
markup needs to change, change the template in `scripts/templates/` and
regenerate:

```
scripts/templates/strip.html             every strip page and the landing
scripts/templates/archive.html           the archive shell
scripts/templates/archive-entry.html     one archive row
scripts/templates/home-strip-card.html   the homepage footer card
scripts/templates/home-off-note.html     the homepage off-note line
```

Placeholders are `{{name}}`. An unknown placeholder is a hard error, so a typo
fails loudly rather than shipping an empty attribute.

## Known deliberate irregularities encoded in the manifest

These are real differences between the existing hand-made pages. They are kept,
not normalized. Remove the field if you decide the difference was a mistake.

- No. 001 has a `twitter_alt` that differs from its `share_alt`. Strips 002 to
  004 use one string for both.
- No. 001 has `sitemap_lastmod: 2026-09-10` while its publish date is
  `2026-09-09`, because it was touched when 002 shipped.
