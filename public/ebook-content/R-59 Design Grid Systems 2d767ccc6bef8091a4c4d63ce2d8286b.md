# R-59: Design Grid Systems

# Recipe #59: Design Grid Systems

Category: Systems & Components  |  ⏱️ 20-25 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're setting up layout grids for consistent spacing and alignment - establishing column grids (12-column, 8-column, 4-column), defining gutters and margins, creating responsive grids that adapt from mobile to desktop, or organizing content in systematic layouts. Your current layouts lack consistency, spacing is arbitrary, or you need a foundation for responsive design.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers struggle with grid systems - creating layouts with no grid structure (elements placed arbitrarily, inconsistent spacing), inconsistent column counts (some screens 12-column, others 10-column, others freeform), random gutters (16px here, 20px there, 24px somewhere else), no responsive grid strategy (desktop grid doesn't adapt to mobile), or rebuilding grids manually for each screen. Teams waste time aligning elements pixel-by-pixel, create inconsistent spacing across screens, struggle with responsive layouts (how does 12-column desktop become mobile?), or have no systematic approach to layout structure. You need a grid system - standard column grids (12-column for desktop, 4-column for mobile), consistent gutters (20-24px standard), proper margins (page padding), responsive grid behavior (columns collapse predictably), and Figma layout grid setup (reusable grid styles).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will deliver a complete grid system: 12-column desktop, 8-column tablet, 4-column mobile with gutter specifications (24px/20px/16px), margin sizing (48px/32px/16px), responsive collapse strategy showing how layouts adapt across breakpoints, common grid patterns (full-width, centered, sidebar layouts), Figma layout grid setup with reusable styles, column spanning and alignment guidelines, and best practices for when to follow or break the grid - transforming arbitrary layouts into systematic, aligned, responsive grid-based designs.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Layout Grid Specialist focusing on column grids, spacing systems, responsive grid behavior, and systematic layout foundations.

I'm building a grid system for a [Product Type] that works from [Mobile Size] to [Desktop Size] with consistent columns, gutters, and margins.

[OPTIONAL: Attach current layouts showing grid inconsistencies]

Grid system requirements:
- Grid types: [e.g., 12-column desktop, 8-column tablet, 4-column mobile]
- Gutter size: [e.g., 20px, 24px, 32px - spacing between columns]
- Margin size: [e.g., 16px mobile, 24px tablet, 48px desktop - page edges]
- Container width: [e.g., Max 1280px centered, Full-width, Constrained]
- Responsive needs: [e.g., How grid adapts from 320px mobile to 1920px desktop]

Current grid problems:
- [Problem 1: e.g., No grid system - elements placed arbitrarily, inconsistent alignment]
- [Problem 2: e.g., Random column counts - 12-col, 10-col, 8-col mixed across screens]
- [Problem 3: e.g., Inconsistent gutters - 16px, 20px, 24px, 32px randomly mixed]
- [Problem 4: e.g., No responsive grid - don't know how 12-col desktop becomes mobile]
- [Problem 5: e.g., Manual alignment - spending hours pixel-nudging elements]

Team context: [Designer grid knowledge, responsive design needs, platform constraints]

Please provide:
1. Grid system overview (12-column, 8-column, 4-column - when to use each)
2. Column and gutter specifications (column width calculations, gutter sizing)
3. Margin and padding (page margins, container padding, edge spacing)
4. Responsive grid strategy (how columns collapse from desktop to mobile)
5. Common grid patterns (12-col desktop, 8-col tablet, 4-col mobile)
6. Grid setup in Figma (layout grids, column settings, reusable styles)
7. Using grids for layout (spanning columns, offset, alignment)
8. Grid best practices (when to follow grid, when to break it)

Consider: [Constraints - e.g., Must work 320px-1920px, Consistent with design system, Accessibility (readable line lengths), Industry standards]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Marketing site
- [Mobile Size] = Smallest screen (e.g., 320px)
- [Desktop Size] = Largest screen (e.g., 1920px)
- [Grid types] = Column counts needed
- [Gutter size] = Spacing between columns
- [Problems 1-5] = Current grid issues
- Attach layouts with grid problems
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Layout Grid Specialist focusing on column grids, spacing systems, responsive grid behavior, and systematic layout foundations.

I'm building a grid system for a SaaS Dashboard that works from 320px mobile to 1920px desktop with consistent columns, gutters, and margins.

[User would attach layouts showing inconsistent spacing/alignment]

Grid system requirements:
- Grid types:
  - Desktop (1024px+): 12-column grid (most flexible, industry standard)
  - Tablet (768-1023px): 8-column grid (middle ground)
  - Mobile (320-767px): 4-column grid (simple, touch-friendly)
- Gutter size:
  - Desktop: 24px (generous spacing)
  - Tablet: 20px (moderate spacing)
  - Mobile: 16px (compact but readable)
- Margin size (page edge padding):
  - Desktop: 48px (generous page margins)
  - Tablet: 32px (moderate margins)
  - Mobile: 16px (minimal margins, maximize space)
- Container width:
  - Max width: 1280px (optimal reading width, centered)
  - Full-width option: For dashboards, no max-width
  - Fluid: Scales between min and max
- Responsive needs:
  - How 12-column desktop (content spans 6 columns) becomes 4-column mobile (spans 4 columns = full width)
  - Predictable column collapse (2-column → 1-column, 3-column → 1-column)
  - Content reflow (multi-column → single column stack)

Current grid problems:
- No grid system at all - designers place elements by eye, spacing inconsistent (some elements 18px apart, others 23px, others 31px), alignment off by 1-2px everywhere, looks messy
- Random column counts - Dashboard uses 12-column grid, Settings page uses 10-column, Project page freeform (no grid), inconsistent across product
- Inconsistent gutters - Some screens 16px gutters, others 20px, others 24px, some 32px, no standard, spacing feels random
- No responsive strategy - Desktop layout is 12-column, mobile is... guessed? Designers don't know how to adapt grid, rebuild layouts from scratch for mobile
- Manual pixel alignment hell - Spending 30-60 minutes per screen nudging elements 1px left/right to align, no grid to snap to, tedious and error-prone
- Content doesn't span columns systematically - Card randomly sized 287px wide (not aligned to grid), sidebar 243px (arbitrary), should span 3 columns, 4 columns, etc.
- No Figma grid setup - Every designer sets up custom grid per file, settings inconsistent, some 12-col with 20px gutters, some 12-col with 24px gutters

Team context:
- 8 designers need consistent grid foundation
- Designing for web (responsive, 320px-1920px)
- Current workflow: No grid, manual alignment = slow, inconsistent
- Want workflow: Snap to grid, content spans columns = fast, consistent
- Industry standard: 12-column grid (Bootstrap, Material, Tailwind all use 12-col)
- Accessibility: Max-width 1280px for readable line lengths

Please provide:
1. Grid system overview (12-column, 8-column, 4-column - when to use each)
2. Column and gutter specifications (column width calculations, gutter sizing)
3. Margin and padding (page margins, container padding, edge spacing)
4. Responsive grid strategy (how columns collapse from desktop to mobile)
5. Common grid patterns (12-col desktop, 8-col tablet, 4-col mobile)
6. Grid setup in Figma (layout grids, column settings, reusable styles)
7. Using grids for layout (spanning columns, offset, alignment)
8. Grid best practices (when to follow grid, when to break it)

Consider: 12-column desktop (industry standard). 8-column tablet. 4-column mobile. 24px desktop gutters, 16px mobile. 48px desktop margins, 16px mobile. Max-width 1280px centered. Responsive collapse (12-col → 8-col → 4-col). Figma layout grids. Content spans columns (not arbitrary widths).
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ 12-column is standard: Industry default (Bootstrap, Material, Tailwind) - most flexible for layouts
✦ Common mistake: Random column counts (10-col, 14-col) - stick to 12, 8, 4 for consistency
✦ Best with: Claude or ChatGPT (excellent at grid calculations and responsive strategies)
✦ Remix it: "Calculate column widths for 12-column grid at 1280px with 24px gutters and 48px margins"
✦ Pro move: Ask "Design responsive grid system - 12-col desktop, 8-col tablet, 4-col mobile with collapse patterns"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Set up Figma layout grids - 12-column desktop, 8-column tablet, 4-column mobile with specs"
- "Calculate column widths for my container size and gutter/margin settings"
- "Design responsive collapse strategy - how 3-column desktop becomes 1-column mobile"
- "Create grid documentation for developers - column count, gutters, margins, breakpoints"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![59_Example_Output.png](59_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #51: [Build Responsive Components in Figma](R-51%20Build%20Responsive%20Components%202d767ccc6bef8015b2effc042a7b2cbe.md)
→ Recipe #58: [Build Typography Systems](R-58%20Build%20Typography%20Systems%202d767ccc6bef80a697f8df65451a5b47.md)
→ Recipe #36: [Update Your Card Designs](R-36%20Update%20Your%20Card%20Designs%202d767ccc6bef8066ac75cd49763ffa25.md)

</aside>