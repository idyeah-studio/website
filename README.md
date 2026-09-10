# idyeah.studio

Static website for IDYeah Studio. No build step, framework, or package manager.

- `index.html` + `assets/idyeah/`: the homepage ("Simple takes someone."), its styles, scripts, fonts, and images. Light theme by default; the floating toggle stores an explicit choice in localStorage (`idyeah-theme`).
- `a-to-z.html`: the A–Z editorial page, served extensionless as `/a-to-z` via Vercel clean URLs.
- `off-idyeah.html` + `off-idyeah/`: the latest strip and numbered permanent reading pages, with an off idyeah header and a short caption above the artwork. The first strip uses the existing credited artwork without changes. Shared styles and interactions live in `assets/idyeah/off-idyeah.css` and `off-idyeah.js`.
- `mosaix/`: client prototype, served at `mosaix.idyeah.studio` via the host route in `vercel.json` (noindex).
- `vercel.json`: clean URLs, host dispatch, and indexing headers. Hosted on Vercel; `main` deploys production.
- `ms72751530.txt`: Microsoft domain verification. Do not remove.

Retired work is preserved on branches: `archive/sap-microsite`, `explore/freeway-stage1`, and git history (old version galleries, media).

Preview locally: `python3 scripts/preview.py --port 8772`. This standard-library server supports the extensionless HTML links used on Vercel. Host dispatch still only works on Vercel.

Off idyeah opens directly on the latest artwork. Its numbered page (`/off-idyeah/001`) is the canonical URL for search and sharing. Share controls are tucked below the artwork; downloads preserve the embedded credit. Social preview metadata is present; platform previews must be checked after publishing. To add a strip, copy its credited artwork, add a numbered reading page with its own canonical URL/metadata/transcript, update the latest page, and add the numbered URL to the sitemap. Keep numbered permalinks, captions brief, and the homepage link small.
