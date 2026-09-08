# idyeah.studio

Static website for IDYeah Studio — no build step, framework, or package manager.

- `index.html` + `assets/idyeah/` — the homepage ("Simple takes someone."), its styles, scripts, fonts, and images. Light theme by default; the floating toggle stores an explicit choice in localStorage (`idyeah-theme`).
- `a-to-z.html` — the A–Z editorial page, served extensionless as `/a-to-z` via Vercel clean URLs.
- `mosaix/` — client prototype, served at `mosaix.idyeah.studio` via the host route in `vercel.json` (noindex).
- `vercel.json` — clean URLs, host dispatch, and indexing headers. Hosted on Vercel; `main` deploys production.
- `ms72751530.txt` — Microsoft domain verification. Do not remove.

Retired work is preserved on branches: `archive/sap-microsite`, `explore/freeway-stage1`, and git history (old version galleries, media).

Preview locally: `python3 -m http.server 8771` from the repo root (clean URLs and host dispatch only work on Vercel).
