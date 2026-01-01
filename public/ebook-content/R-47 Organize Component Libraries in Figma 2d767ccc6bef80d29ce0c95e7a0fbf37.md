# R-47: Organize Component Libraries in Figma

# Recipe #47: Organize Component Libraries in Figma

Category: Systems & Components  |  ⏱️ 30-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're building or reorganizing a Figma component library that's grown chaotic - 200+ components with inconsistent naming, no clear organization, designers can't find components, or you're starting a library from scratch and need a systematic approach. Your library needs structure before it becomes unusable.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many design teams have messy Figma libraries - components named inconsistently ("primary button", "btn-primary", "Button - Primary", "MainButton"), no variant structure (47 separate button components instead of 1 with variants), poor organization (everything in one giant page), outdated components designers don't realize are deprecated, or no documentation (designers guess how to use components). Teams waste time searching for components, create duplicates, or abandon the library entirely and design from scratch. You need systematic organization - clear naming conventions, proper variant usage, logical structure, and documentation that makes the library easy to use and maintain.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide component naming conventions using consistent Component/Variant/Property format in PascalCase, variant structure strategy consolidating 47 button variants into single components with Type/Size/State/Icon properties, multi-page library organization with categorized frames (Foundations, Components by type, Patterns, Documentation, Archive), Auto Layout best practices for responsive components with proper spacing and constraints, documentation approach including component descriptions and visual covers, publishing and versioning workflow with deprecation process and semantic versioning, search optimization using keywords and common terms in names and descriptions, and quarterly maintenance workflow with governance and usage tracking. Optionally includes before/after Figma library organization examples.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Figma Design Systems Specialist focusing on component library organization, naming conventions, and variant structure.

I'm organizing a Figma component library for a [Product Type] with [Number] components to make it easy for [Team Size] designers to find and use components consistently.

[OPTIONAL: Attach screenshots of current Figma library or link to Figma file]

Library requirements:
- Component count: [e.g., 50 components, 200+ components, Starting from scratch]
- Component types: [e.g., Buttons, Inputs, Cards, Modals, Navigation, Data viz]
- Team size: [e.g., 3 designers, 10 designers across 3 products, 20+ distributed team]
- Platforms: [e.g., Web only, Web + mobile, iOS + Android separate libraries]
- Maturity: [e.g., Brand new, Existing messy library, Migrating from older system]

Current library problems:
- [Problem 1: e.g., Inconsistent naming - "primary button", "btn-primary", "Button - Primary"]
- [Problem 2: e.g., 47 separate button components - should be 1 component with variants]
- [Problem 3: e.g., No organization - 200 components in single page, impossible to navigate]
- [Problem 4: e.g., No documentation - designers don't know when to use which variant]
- [Problem 5: e.g., Outdated components mixed with current - designers use deprecated versions]

Team context: [Designer skill levels, Figma proficiency, adoption challenges, search vs. browse behavior]

Please provide:
1. Component naming conventions (format, consistency, examples)
2. Variant structure strategy (when to use variants vs. separate components)
3. Library organization (pages, frames, hierarchy, grouping)
4. Auto-layout best practices (responsive components, proper constraints)
5. Documentation approach (descriptions, covers, annotations)
6. Publishing and versioning (updates, deprecation, changelog)
7. Search optimization (naming for findability)
8. Maintenance workflow (audits, cleanup, governance)

Consider: [Constraints - e.g., Large existing library to reorganize, Multiple products, Team in multiple time zones, Need quick wins]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Enterprise software
- [Number] = Component count in library
- [Team Size] = Designers using the library
- [Component types] = What you're organizing
- [Platforms] = Web, mobile, multi-platform
- [Problems 1-5] = Current organization issues
- Attach Figma file link or screenshots
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Figma Design Systems Specialist focusing on component library organization, naming conventions, and variant structure.

I'm organizing a Figma component library for a SaaS Project Management Tool with 180 components to make it easy for 8 designers across 3 product teams to find and use components consistently.

[User would attach Figma library link or screenshots here]

Library requirements:
- Component count: 
  - 180 total components currently
  - Growing by 10-15 per month
  - Mix of atoms (buttons, inputs) and complex (modals, tables)
- Component types:
  - Buttons (primary, secondary, tertiary, icon, etc.)
  - Inputs (text, textarea, select, checkbox, radio, toggle)
  - Cards (basic, with header, with actions, with image)
  - Modals (small, medium, large, multi-step)
  - Navigation (header, sidebar, tabs, breadcrumbs)
  - Tables (data tables, with sorting, pagination)
  - Lists (task lists, contact lists, file lists)
  - Status indicators (badges, pills, progress bars)
  - Notifications (toasts, banners, alerts)
- Team size:
  - 8 product designers (3 teams)
  - 2 design system designers (maintain library)
  - Distributed across 2 time zones
- Platforms: Web only (React-based product)
- Maturity: Existing library (2 years old, grown organically, needs reorganization)

Current library problems:
- Inconsistent naming everywhere - "primary button", "btn-primary", "Button - Primary", "MainButton", "CTA Button" all mean the same thing - no standard format
- 47 button components instead of variants - ButtonPrimaryLarge, ButtonPrimaryMedium, ButtonSecondarySmall, IconButtonEdit, IconButtonDelete = combinatorial explosion, should be 1 Button with variants
- Everything dumped in "Components" page - 180 components in single page alphabetically, takes 5 minutes of scrolling to find anything, designers give up and create new components
- Zero documentation - component names only, no descriptions explaining when to use Button/Primary vs Button/Secondary, designers guess and create inconsistent UIs
- Deprecated components not removed - v1 Button, v2 Button, v3 Button all published, designers accidentally use old versions, looks inconsistent across products
- No Auto Layout on older components - built before Auto Layout existed, fixed widths break when content changes, designers rebuild instead of using library
- Variants used incorrectly - some components have 20 variant properties (overwhelming), others have none (should have variants)
- Search doesn't work - searching "button" returns 47 results, searching "primary" returns buttons + cards + badges, can't find what you need

Team context:
- Designers range from junior (1 year Figma) to senior (expert level)
- Team prefers browsing library visually over searching
- Previous attempt at reorganization failed (too complex, nobody adopted)
- Need quick wins (prove value in 2-4 weeks)
- Can't break existing designs (180 products use library)

Please provide:
1. Component naming conventions (format, consistency, examples)
2. Variant structure strategy (when to use variants vs. separate components)
3. Library organization (pages, frames, hierarchy, grouping)
4. Auto-layout best practices (responsive components, proper constraints)
5. Documentation approach (descriptions, covers, annotations)
6. Publishing and versioning (updates, deprecation, changelog)
7. Search optimization (naming for findability)
8. Maintenance workflow (audits, cleanup, governance)

Consider: Can't break existing designs (detaching not an option). Need gradual migration. Team skeptical (previous reorg failed). Limited time (2 designers at 50%). Must improve search and browse. Remove deprecated without breaking. Adopt Auto Layout incrementally.
```

</aside>

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Naming is navigation: Consistent naming (Button/Primary, Input/Text, Card/Basic) makes library scannable
✦ Common mistake: 47 button variants - use 1 component with Type/Size variant properties instead
✦ Best with: Claude (excellent at systematic organization), ChatGPT (good for naming conventions)
✦ Remix it: "Create the Figma component covers - visual thumbnails showing all variants at a glance"
✦ Pro move: Ask "Audit my Figma library - find duplicates, unused components, inconsistent naming"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the component naming system - format, rules, examples for 50 component types"
- "Design the variant property structure - which properties to use for buttons, inputs, cards"
- "How to migrate messy library - gradual reorganization without breaking existing designs"
- "Build the component documentation template - descriptions, usage, do's and don'ts"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![47_Example_Output.png](47_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)
→ Recipe #13: [Fix Messy Settings Pages](R-13%20Fix%20Messy%20Settings%20Pages%202d667ccc6bef80a7a976db712071bdce.md)
→ Recipe #25: [Pick Your Icon Styles](R-25%20Pick%20Your%20Icon%20Styles%202d767ccc6bef809cbd6bc7ee914bebdf.md)

</aside>