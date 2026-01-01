# R-46: Build a Design System Foundation

# Recipe #46: Build a Design System Foundation

Category: Systems & Components  |  ⏱️ 40-50 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're building a design system from scratch or formalizing an ad-hoc component collection - your product has grown beyond simple prototypes, multiple designers are creating inconsistent interfaces, developers are duplicating CSS, or you're scaling to multiple products/platforms. You need systematic foundations for consistency at scale.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many teams struggle with design systems - starting with components before foundations (building buttons before defining color tokens), no naming conventions (colors called "blue-ish", "darker-blue", "button-blue"), inconsistent spacing (using 12px, 15px, 18px, 22px randomly), documentation that goes stale immediately, or design systems that become rigid and block innovation. Teams build 47 button variants because there's no clear system, designers can't find existing components, developers hard-code values instead of using tokens, and the "design system" becomes a dumping ground of unused components. You need foundations - design tokens, clear naming, living documentation, and governance that enables speed without chaos.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide hierarchical design token structure (primitive, semantic, and component tokens for colors, spacing, typography, shadows), systematic naming conventions using consistent formats (color-{purpose}, space-{number}, font-{element}), component hierarchy recommendations (3-tier foundations/components/patterns or Atomic Design), living documentation approach with auto-generated and curated content using tools like Storybook or Zeroheight, governance model covering contribution processes, approval criteria, roles, and semantic versioning, complete tech stack guidance (Figma with tokens plugin, React with Style Dictionary, testing setup), phased adoption strategy starting with quick wins (5 core components in 4-6 weeks proving value before expansion), and prioritized MVP scope deferring complex components to later phases. Optionally includes design system roadmap and maturity model.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Design Systems Architect specializing in foundations, tokens, naming conventions, and documentation.

I'm building a design system foundation for a [Product/Company Type] with [Team Size] to enable [Goal: consistency, speed, scalability].

[OPTIONAL: Attach screenshots of current components, style guide, or documentation]

Design system requirements:
- Product maturity: [e.g., Early startup, Growth stage, Enterprise, Multiple products]
- Team size: [e.g., 2 designers, 5 designers + 10 developers, 20+ designers across teams]
- Platform scope: [e.g., Web only, Web + mobile, Web + iOS + Android, Multi-platform]
- Current state: [e.g., No system, Ad-hoc components, Style guide exists, Legacy system to replace]
- Goal: [e.g., Consistency across products, Speed up design/dev, Rebrand, Scale to new platforms]

Current problems:
- [Problem 1: e.g., Colors hard-coded as hex values - no tokens, can't update brand colors]
- [Problem 2: e.g., 15 button variants with no naming system - "primary-blue", "main-cta", "submit-btn"]
- [Problem 3: e.g., Spacing uses random values - 12px, 15px, 18px, 22px, 27px, no scale]
- [Problem 4: e.g., Documentation is static Figma file - goes stale, hard to find components]
- [Problem 5: e.g., No governance - anyone adds components, system becomes bloated]

Team context: [Designer/developer ratio, technical skills, tools used, adoption challenges]

Please provide:
1. Design token structure (colors, spacing, typography, shadows, etc.)
2. Naming conventions (semantic vs. literal, scales, categories)
3. Component hierarchy (atoms, molecules, organisms OR alternative)
4. Documentation approach (format, structure, maintenance)
5. Governance model (who contributes, approval process, versioning)
6. Tools and tech stack (Figma, Storybook, code, etc.)
7. Adoption strategy (getting team buy-in)
8. Starting scope (what to build first, what to defer)

Consider: [Constraints - e.g., Small team, limited time, need quick wins, legacy code to support, multi-brand products]
```

💡 What to customize:

- [Product/Company Type] = SaaS, E-commerce, Enterprise software, Mobile app, Multi-product company
- [Team Size] = Designers + developers working on system
- [Platform scope] = Web, mobile, desktop, all platforms
- [Current state] = Where you're starting from
- [Goal] = What you're trying to achieve
- [Problems 1-5] = Current inconsistencies or pain points
- Upload current components or style guide
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Design Systems Architect specializing in foundations, tokens, naming conventions, and documentation.

I'm building a design system foundation for a Growth-Stage SaaS Company (project management tool) with 8 designers and 25 developers to enable consistency across 3 products and speed up development.

[User would attach component screenshots or Figma file here]

Design system requirements:
- Product maturity: 
  - Growth stage (Series B)
  - 3 products: Main app, Mobile app, Marketing site
  - Rapid feature development (2-week sprints)
  - Recent rebrand (new colors, typography)
- Team size:
  - 8 product designers (2 on each product + 2 on design system)
  - 25 frontend developers (React web, React Native mobile)
  - 3 brand designers (marketing)
  - Distributed team (3 time zones)
- Platform scope:
  - Web app (React, primary platform)
  - Mobile app (React Native, iOS + Android)
  - Marketing site (Next.js)
  - Future: Desktop app (Electron)
- Current state:
  - Ad-hoc component library in Figma (200+ components, poorly organized)
  - Shared React components (inconsistent, no documentation)
  - Style guide PDF (2 years old, outdated after rebrand)
  - Developers copy-paste components, modify locally
- Goal:
  - Consistency across 3 products (currently look like different companies)
  - Speed up design-to-dev (currently 3 weeks per feature)
  - Enable rebrand rollout (new colors, typography need systematic update)
  - Scale to 4th product launching in 6 months

Current problems:
- Colors hard-coded everywhere - using hex values (#3B82F6, #2563EB, #1D4ED8) for "blue", no tokens - rebrand requires finding/replacing 500+ instances
- 47 button variants across products - no naming system or clear purpose: "primary-blue", "main-action", "submit-btn", "cta-button", "default-primary", "blue-filled" - which to use when?
- Spacing completely random - designers use 12px, 15px, 18px, 22px, 27px, 34px with no scale - developers eyeball spacing creating pixel-perfect inconsistencies
- Documentation is 80-page Figma file "Component Library v3.2" - impossible to navigate, goes stale after 2 weeks, no search, designers give up and create new components
- No governance - any designer can add components to Figma library, now have 200+ components with 40% unused - bloated and confusing

Team context: 
- Designers use Figma (expert level)
- Developers use React/React Native (advanced)
- No design system experience on team
- Tried design system 2 years ago, failed (too rigid, no adoption)
- Skeptical developers: "Design systems slow us down"
- Need quick wins to prove value
- Limited dedicated time (2 designers at 50% capacity)

Please provide:
1. Design token structure (colors, spacing, typography, shadows, etc.)
2. Naming conventions (semantic vs. literal, scales, categories)
3. Component hierarchy (atoms, molecules, organisms OR alternative)
4. Documentation approach (format, structure, maintenance)
5. Governance model (who contributes, approval process, versioning)
6. Tools and tech stack (Figma, Storybook, code, etc.)
7. Adoption strategy (getting team buy-in)
8. Starting scope (what to build first, what to defer)

Consider: Limited time (2 designers at 50%). Need quick wins (prove value in 1-2 months). Multi-platform (web + mobile). Rebrand rollout urgent (new colors needed everywhere). Skeptical team (previous system failed). Can't block feature work (system must accelerate, not slow down).
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Tokens before components: Define color/spacing tokens first - building buttons before foundations leads to chaos
✦ Common mistake: Starting with 50 components - build 5 well-documented components, prove value, then expand
✦ Best with: Claude (excellent at systematic thinking), ChatGPT (good for naming conventions)
✦ Remix it: "Design the design system governance - contribution process, approval criteria, versioning"
✦ Pro move: Ask "Create the design system adoption metrics - measure usage, track consistency, prove ROI"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the token naming system - color scales, semantic naming, component-specific tokens"
- "Create the design system contribution process - how team members propose and add components"
- "How to migrate existing products to design system - phased approach, deprecation strategy"
- "Build the design system documentation - structure, templates, maintenance plan"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![46_Example_Output.png](46_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #22: [Check Your Color Contrast](R-22%20Check%20Your%20Color%20Contrast%202d667ccc6bef8030822cc761e4959070.md)
→ Recipe #58: [Build Typography Systems](R-58%20Build%20Typography%20Systems%202d767ccc6bef80a697f8df65451a5b47.md)
→ Recipe #44: [Design Status Indicators](R-44%20Design%20Status%20Indicators%202d767ccc6bef804caa1bf81f3a87a5f9.md)

</aside>