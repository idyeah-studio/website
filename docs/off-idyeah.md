# Publishing an off idyeah strip

Strips are published by hand. (The old `publish_strips.py` script and its
`content/strips.json` manifest were retired in Nov 2026. They wrote the pre-magazine
page design.) For a new strip numbered `NNN`, where `PPP` is the previous one:

1. **Artwork.** Encode the final PNG as
   `assets/idyeah/off-idyeah/NNN.webp` with
   `cwebp -q 90 -m 6 source.png -o assets/idyeah/off-idyeah/NNN.webp`.
   Strips are 1122 × 1402.
2. **Strip page.** Copy `magazine/off-PPP.html` to `magazine/off-NNN.html`.
   - Replace every `PPP` with `NNN`.
   - Swap in the new caption. It appears in the `<h1>`, `og:description` and
     `twitter:description`.
   - Swap in the image alt text and the transcript paragraphs. Keep the final
     "Credit: …" line.
   - Point "‹ Previous" at `/off-idyeah/PPP` and leave the third nav slot
     as an empty `<span></span>`.
3. **Previous strip.** In `magazine/off-PPP.html`, replace that empty
   `<span></span>` with `<a href="/off-idyeah/NNN">Next ›</a>`.
4. **Archive.** In `magazine/off-idyeah.html`, add a new `archive-card` at the
   start of `.archive-grid` and update "The complete collection / 001–NNN".
5. **Latest strip card.** In `magazine/index.html` and `magazine/inside.html`,
   update the `contents-off` block: the number, link, image and alt text.
6. **Routes.**
   - `scripts/public-pages.json`: add `"/off-idyeah/NNN": "/magazine/off-NNN.html"`.
   - `vercel.json`: add a 308 from `/magazine/off-NNN(?:\\.html)?` to
     `/off-idyeah/NNN`.
   - `sitemap.xml`: add the `/off-idyeah/NNN` URL and bump the
     `/off-idyeah` lastmod.
   - `scripts/preview.py`: add `'off-NNN'` to the page list.
7. **Public copies.** Copy each changed `magazine/` page to its clean route:
   - `off-idyeah/NNN.html` and `off-idyeah/PPP.html`
   - `off-idyeah.html`
   - `index.html` and `inside.html`

   Then run `node scripts/search-metadata.cjs` (it adds the search
   metadata) and `node scripts/search-metadata.cjs --check`.
8. **Verify.**
   - Run `node --test scripts/magazine.test.cjs` and `git diff --check`.
   - In the preview, open `/off-idyeah/NNN`, the archive and `/inside` on
     desktop and phone. Check that the Transcript button opens.

House rules: exactly one red detail per strip, captions verbatim, no em dashes.
