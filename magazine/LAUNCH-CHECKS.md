# Magazine publication pass

Branch: codex/magazine-website. No deployment or root-site replacement performed.

## Journey
Cover → Inside → Practice → Mosaix → Rialty → Ionate → SimComm → Stealth → Person → keya → Alchemy → Crit iOS → Crit Figma → Wabi → Cover.

Each folded front uses the current page paper color. The reverse uses ivory or vermilion; the exposed corner previews the next page's background. Geometry remains the approved cylindrical bend.

## Publication configuration
The 13 main magazine documents have index/follow, unique descriptions and titles, canonical clean URLs under /magazine, Open Graph and Twitter metadata, and a shared cover image. They are included in the existing sitemap. Older composition studies remain noindex. Existing live homepage remains in place until deployment/migration is separately requested.

## Mobile and accessibility
Portrait windows up to 1024px show orientation guidance and make the content inert. Rotation restores focus and content. Phones retain the landscape composition, with pinch zoom allowed. This is an orientation gate, not an OS-level orientation lock. Landscape-only is an intentional accessibility limitation; this is not a claim of WCAG conformance.

Skip links, visible keyboard focus, dialog return focus, Escape dismissal, reduced-motion overrides, and direct navigation for reduced-motion page turns are included. A physical iPhone/Safari and Android/Chrome smoke test is still needed before production rollout; desktop viewport checks cannot establish device-specific browser behavior.

## Assets
Originals retained. Pages use WebP for the Alchemy cover, Vishal seated photo, and keya glass backdrop. MIRA uses an optimized H.264 MP4 with faststart, loaded only on opening the film viewer.

## Repeatable checks
Run `node --test scripts/magazine.test.cjs` and `git diff --check`.
The preview server sends no-store so CSS updates do not require repeated refreshes.

## Browser checks completed
- Clicked the complete ordered page-turn loop back to Cover.
- Checked all main spread bounds at 1200 × 630 and 844 × 390; corrected compact Practice overlap.
- Verified portrait guidance at 390 × 844 and restoration on landscape.
- Verified Mosaix enlargement closes on Escape and restores opener focus.
- Measured all 12 right-side folios: 53.4 px from right, 21.4 px from bottom at 1200 × 630 (shared 4.45vw / 3.4vh datum).
- No browser console errors observed during the page sweep.
- Inspected a frame of the optimized MIRA video for legibility.

Asset reductions: Alchemy cover 92%, keya backdrop 95%, portrait 72%, MIRA video 95%.
