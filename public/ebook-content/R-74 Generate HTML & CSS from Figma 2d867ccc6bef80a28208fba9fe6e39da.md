# R-74: Generate HTML & CSS from Figma

# Recipe #74: Generate HTML & CSS from Figma

Category: Bonus — Hand-off  |  ⏱️ 35-45 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're exporting HTML/CSS code from Figma designs, using Figma's Dev Mode code generation, preparing designs for front-end implementation, converting static mockups to responsive code, or optimizing Figma files for clean code output. Your current Figma exports produce messy code, absolute positioning everywhere, inline styles instead of classes, or unusable HTML that requires complete rewriting.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create Figma designs that export terrible code - absolute positioned divs everywhere (not responsive, breaks on different screen sizes), inline styles with hardcoded hex values (can't theme, no CSS variables), messy nested divs (div soup, unclear structure), no semantic HTML (all divs, no header/nav/main/section tags), inconsistent spacing (random pixel values not from design tokens), or missing responsive behavior (fixed widths, doesn't adapt). Teams export Figma code that developers immediately delete and rewrite from scratch, wasting hours translating designs to proper semantic HTML/CSS, or shipping non-responsive layouts that break on mobile. You need Figma files optimized for code generation - proper Auto Layout (converts to flexbox/grid naturally), design token usage (exports as CSS variables), semantic naming (components named after HTML elements), responsive constraints (fill container, hug contents), clean component structure (logical hierarchy, minimal nesting), and developer-friendly output (readable code, proper classes, semantic HTML hints).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide Figma Auto Layout optimization (flexbox/grid output, direction, spacing, hug/fill constraints for responsive code), design token integration (Figma Variables → CSS custom properties, spacing tokens → rem units), semantic component naming (hints for <button>, <header>, <nav> tags), responsive design techniques (constraints, min/max widths, breakpoint variants), Dev Mode code generation guidance (inspect, copy CSS, HTML structure), plugin recommendations (Anima, Locofy, [Builder.io](http://Builder.io) for full exports), code optimization strategies (reduce nesting, reusable classes, avoid absolute positioning), and export best practices (prepare files, test outputs, iterative refinement). You'll get systematic approaches to create Figma designs that export clean, semantic, responsive HTML/CSS code.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Figma-to-Code Specialist focusing on HTML/CSS generation, Dev Mode code export, Auto Layout optimization, and creating developer-ready Figma files.

I'm generating HTML/CSS code from Figma designs for [Project Type] to export [Components/Screens] using [Code Generation Method] while optimizing for [Code Quality Goals] and avoiding [Common Code Export Problems].

[OPTIONAL: Attach Figma files with code export issues or examples of messy generated code]

HTML/CSS generation requirements:
- Project type: [e.g., Landing page, Component library, Marketing site, Web app, Email template]
- Code output: [e.g., Vanilla HTML/CSS, Tailwind CSS, CSS-in-JS, React components, Vue components]
- Figma structure: [e.g., Auto Layout components, Variants, Design tokens, Component library]
- Responsive needs: [e.g., Mobile-first, Desktop-first, Fluid responsive, Fixed breakpoints]
- Developer handoff: [e.g., Copy code from Dev Mode, Export with plugins, Figma-to-code API]

Current code export problems:
- [Problem 1: e.g., Absolute positioning - exports position:absolute everywhere, not responsive, breaks layout]
- [Problem 2: e.g., Inline styles - hardcoded #3B82F6, no CSS classes, can't reuse or theme]
- [Problem 3: e.g., Div soup - 20 nested divs for simple button, messy HTML, hard to read]
- [Problem 4: e.g., No semantic HTML - all divs, no <header>, <nav>, <main>, <section> tags]
- [Problem 5: e.g., Fixed widths - width:1440px hardcoded, doesn't adapt to screen sizes, not responsive]

Team context: [Developer skill level, CSS framework (Tailwind/Bootstrap), code standards, handoff workflow]

Please provide:
1. Figma Auto Layout for clean code (flexbox/grid output, direction, alignment, spacing, hug/fill)
2. Design tokens to CSS variables (color tokens → CSS vars, spacing tokens → rem units)
3. Component naming for semantic HTML (Button → <button>, Card → <article>, semantic hints)
4. Responsive design in Figma (constraints, min/max widths, fill container, breakpoint frames)
5. Dev Mode code generation (inspect, copy CSS, HTML structure, code snippets)
6. Plugins for code export (Anima, Locofy, [Builder.io](http://Builder.io), HTML Generator, use cases)
7. Clean code optimization (reduce nesting, reusable classes, avoid absolute positioning)
8. Code export best practices (prepare Figma files, test outputs, refine for developers)

Consider: [Constraints - e.g., Tailwind CSS output needed, Mobile-first responsive, Email HTML (limited CSS), Semantic HTML critical]
```

💡 What to customize:

- [Project Type] = Landing page, components, etc.
- [Components/Screens] = What you're exporting
- [Code Generation Method] = Dev Mode, plugins, API
- [Code Quality Goals] = Clean, semantic, responsive
- [Common Code Export Problems] = Current issues
- [Problems 1-5] = Specific code export problems
- Attach Figma files with code issues
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Figma-to-Code Specialist focusing on HTML/CSS generation, Dev Mode code export, Auto Layout optimization, and creating developer-ready Figma files.

I'm generating HTML/CSS code from Figma designs for a Marketing Website (landing pages, product pages, pricing page, 15+ pages total) to export hero sections, feature cards, pricing tables, testimonials, and CTAs using Figma Dev Mode (primary method) and Anima plugin (for full page exports) while optimizing for clean semantic HTML, Tailwind CSS classes, mobile-first responsive design, minimal nesting (max 3 levels deep), and CSS variables from design tokens and avoiding absolute positioning, inline styles with hardcoded values, excessive div nesting, non-responsive fixed widths, and div-only HTML (need semantic tags).

[User would attach Figma marketing site designs - components with poor Auto Layout, hardcoded values, messy structure]

HTML/CSS generation requirements:
- Project type: Marketing website (15+ landing pages, component-heavy, conversion-focused)
- Code output:
  - Tailwind CSS (primary framework, utility-first)
  - Semantic HTML5 (<header>, <nav>, <main>, <section>, <article>)
  - CSS variables for theming (light/dark mode support)
  - Mobile-first responsive (375px → 1440px)
- Figma structure:
  - Component library (50+ components with variants)
  - Auto Layout extensively (all components use Auto Layout)
  - Design tokens (colors, spacing, typography as Figma Variables)
  - Variants for responsive (Desktop, Tablet, Mobile versions)
- Responsive needs:
  - Mobile-first (design mobile, scale up)
  - Breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)
  - Fluid typography (clamp() for smooth scaling)
  - Images responsive (srcset, object-fit)
- Developer handoff:
  - Developers copy code from Figma Dev Mode (primary workflow)
  - Anima plugin for rapid prototyping (full page HTML exports for stakeholder demos)
  - Tailwind config synced with Figma tokens

Current code export problems:
- Absolute positioning everywhere - Figma exports components with position:absolute, top:120px, left:450px (breaks when screen size changes), not responsive at all, developers have to rewrite with flexbox/grid from scratch, wastes 2-3 hours per component converting to proper layout, defeats purpose of code export
- Inline styles with hardcoded hex - Exports background:#3B82F6; color:#FFFFFF; instead of using design tokens/CSS variables, can't theme (light/dark mode impossible), can't change brand color globally, hardcoded values scattered everywhere, no Tailwind classes (exports inline styles even though using Tailwind), developers manually convert to utilities
- Excessive div nesting - Simple card component exports as 8 nested divs (div > div > div > div > div...), hard to read HTML, unnecessary wrapper divs everywhere, bloated code (300 lines for what should be 50), developers spend time cleaning up div soup, prefer semantic clean HTML
- No semantic HTML tags - Everything exported as <div>, no <header>, <nav>, <main>, <section>, <article>, <button> tags, bad for SEO (search engines can't understand structure), bad for accessibility (screen readers confused), have to manually convert divs to semantic tags post-export
- Fixed widths not responsive - Components export with width:1440px; hardcoded (desktop width), doesn't shrink on mobile (overflows, horizontal scroll), no media queries generated, no responsive classes (Tailwind's sm:, md:, lg:), developers have to add responsive behavior manually, exports ignore Figma constraints (fill container doesn't convert properly)
- Poor Auto Layout translation - Figma Auto Layout (Vertical, Gap 16px, Padding 24px) should export as clean flexbox, instead exports nested absolute positioned divs with magic numbers (margin-top:16px, margin-top:32px, margin-top:48px random), doesn't respect Auto Layout structure, gap doesn't convert to CSS gap property
- Inconsistent spacing values - Exports margin:23px, padding:17px, gap:14px (random values not from design tokens), should use Spacing-4 (16px), Spacing-5 (20px), Spacing-6 (24px) from token system, exported code doesn't reference CSS variables, hardcoded everywhere

Team context:
- Developer skill level: Mid-level (can clean up exported code, but prefer cleaner starting point)
- CSS framework: Tailwind CSS (all components should use Tailwind utilities where possible)
- Code standards: Semantic HTML required (not all divs), BEM naming for custom CSS, max 3 levels nesting
- Handoff workflow: Designers share Figma Dev Mode links, developers inspect and copy code snippets
- Pain points: "Exported code is a starting point but needs 70% rewrite", "Absolute positioning makes it unusable"
- Goal: Reduce developer cleanup time from 3 hours to 30 minutes per component

Please provide:
1. Figma Auto Layout for clean code (flexbox/grid output, direction, alignment, spacing, hug/fill)
2. Design tokens to CSS variables (color tokens → CSS vars, spacing tokens → rem units)
3. Component naming for semantic HTML (Button → <button>, Card → <article>, semantic hints)
4. Responsive design in Figma (constraints, min/max widths, fill container, breakpoint frames)
5. Dev Mode code generation (inspect, copy CSS, HTML structure, code snippets)
6. Plugins for code export (Anima, Locofy, Builder.io, HTML Generator, use cases)
7. Clean code optimization (reduce nesting, reusable classes, avoid absolute positioning)
8. Code export best practices (prepare Figma files, test outputs, refine for developers)

Consider: Tailwind CSS output (utility classes preferred). Mobile-first responsive (375px start). Semantic HTML critical (SEO, accessibility). Design tokens → CSS variables. Auto Layout → flexbox (not absolute). Component library (50+ components, consistency critical). Marketing site (conversion-focused, performance matters).
```

</aside>

---

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Auto Layout is key: Use Auto Layout on every component - it exports as clean flexbox, not absolute positioning
✦ Common mistake: Dragging frames freely creates position:absolute - always use Auto Layout for responsive code
✦ Best with: Claude (excellent at Figma optimization strategies, code quality), ChatGPT (good for CSS examples)
✦ Remix it: "Optimize this Figma component for code export - Auto Layout, design tokens, semantic naming, responsive"
✦ Pro move: Ask "Audit my Figma file for clean code export - check Auto Layout usage, nesting, absolute positioning"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Optimize button component for HTML/CSS export - Auto Layout, design tokens, semantic <button> tag, Tailwind classes"
- "Convert this Figma card to responsive flexbox - Auto Layout settings, fill container, gap/padding with tokens"
- "Prepare hero section for code export - Auto Layout, semantic HTML structure, responsive constraints, clean nesting"
- "Generate Tailwind CSS from Figma - design tokens to Tailwind config, utility classes, responsive breakpoints"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![74_Example_Output.png](74_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #75: [Developer Prototypes with Figma AI](R-75%20Developer%20Prototypes%20with%20Figma%20AI%202d867ccc6bef809585e0e8256265034f.md)
→ Recipe #73: [Developer-Friendly Design Specs](R-73%20Developer-Friendly%20Design%20Specs%202d867ccc6bef804eae58c28f42a64b2d.md)
→ Recipe #72: [Design Tokens in Figma](R-72%20Design%20Tokens%20in%20Figma%202d867ccc6bef80839ee7ec3aaadb1649.md)
→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)

</aside>