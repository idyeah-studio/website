# R-72: Design Tokens in Figma

# Recipe #72: Design Tokens in Figma

Category: Bonus — Figma  |  ⏱️ 35-45 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're building a design system in Figma, creating reusable design tokens (Figma Variables), managing colors/typography/spacing systematically, supporting light/dark mode themes, or preparing designs for developer handoff. Your current Figma file has hardcoded values, inconsistent colors, no systematic spacing, difficult theme switching, or poor designer-developer handoff.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create messy Figma files - hardcoding hex values everywhere (#3B82F6 used 200 times), inconsistent spacing (12px here, 14px there, no system), no design tokens (can't switch themes, every color change is manual find-replace), poor naming (color-1, color-2, blue-dark-2 meaningless to developers), mixing primitive and semantic tokens (button uses "Blue 500" instead of "Primary"), or no light/dark mode support (separate files for each theme, nightmare to maintain). Teams waste hours manually updating colors, can't quickly test dark mode, hand off designs with vague "make it blue" specs, or build products with visual inconsistencies. You need systematic design tokens - primitive tokens (foundational values: Blue 500, Spacing 4, Font Size 16), semantic tokens (purpose-based: Primary Color, Button Padding, Body Text), Figma Variables (color, number, string, boolean variables), mode support (light/dark themes, brand variants), token hierarchies (primitives → semantic → component-specific), and developer-friendly naming (follows code conventions, clear purpose).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide token hierarchy (primitives → semantic → component tokens, three-tier organization), color token systems (primitive palettes, semantic tokens for Surface/Text/Border/Brand with light/dark modes), typography tokens (font size scales, weights, line heights, semantic text styles), spacing tokens (4px/8px-based scales, semantic Padding/Gap), semantic naming conventions (developer-friendly Category/Property/Variant patterns), light/dark mode implementation (Figma Variable modes, color variants, theme switching), token organization in Figma (collections, groups, scoping, documentation), and developer handoff guidance (JSON export, code naming alignment, Style Dictionary integration). You'll get systematic approaches to build maintainable, scalable design token systems.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Design Systems Specialist focusing on design tokens, Figma Variables, semantic naming, and systematic design at scale.

I'm creating design tokens in Figma for [Product/Design System] to systematize [Design Attributes] by building [Token Types] while supporting [Themes/Modes] and optimizing for [Team Needs].

[OPTIONAL: Attach current Figma files with hardcoded values or existing token structure]

Design token requirements:
- Product type: [e.g., Design system, Component library, Product design, Multi-brand system]
- Team size: [e.g., Solo designer, Small team (2-5), Large team (10+), Multiple product teams]
- Token scope: [e.g., Colors only, Full system (color/type/spacing), Multi-brand, Component-specific tokens]
- Themes needed: [e.g., Light/dark mode, Brand variants, Accessibility themes, Seasonal themes]
- Developer handoff: [e.g., Design tokens export to code, Figma API integration, Manual specs]

Current token problems:
- [Problem 1: e.g., Hardcoded values - #3B82F6 used 500 times, can't update globally, manual find-replace]
- [Problem 2: e.g., No semantic tokens - buttons use "Blue 500" not "Primary", unclear purpose]
- [Problem 3: e.g., Inconsistent spacing - 12px, 14px, 16px, 18px random gaps, no system]
- [Problem 4: e.g., No theme support - separate files for light/dark, double maintenance, sync nightmare]
- [Problem 5: e.g., Poor naming - color-1, gray-dark-2, blue-thing meaningless to developers]

Team context: [Figma expertise, design system maturity, developer collaboration, token export needs]

Please provide:
1. Token hierarchy and structure (primitives vs semantic vs component tokens, organization)
2. Color tokens in Figma (primitive colors, semantic colors, surface/text/border tokens, modes for themes)
3. Typography tokens (font families, sizes, weights, line heights, semantic text styles)
4. Spacing tokens (spacing scale, semantic spacing, layout tokens, component-specific padding/gaps)
5. Semantic naming conventions (purpose-based names, developer-friendly, clear hierarchy)
6. Light/dark mode implementation (using Figma modes, color token variants, switching themes)
7. Token organization in Figma (collections, groups, naming patterns, documentation)
8. Developer handoff (token export, naming conventions match code, JSON/CSS output)

Consider: [Constraints - e.g., Large team (consistency critical), Multi-brand support, Developer handoff to React/CSS, Accessibility requirements]
```

💡 What to customize:

- [Product/Design System] = What you're creating tokens for
- [Design Attributes] = Colors, spacing, typography, etc.
- [Token Types] = Primitives, semantic, component tokens
- [Themes/Modes] = Light/dark, brand variants
- [Team Needs] = Scale, handoff, consistency
- [Problems 1-5] = Current token issues
- Attach Figma files with hardcoded values
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Design Systems Specialist focusing on design tokens, Figma Variables, semantic naming, and systematic design at scale.

I'm creating design tokens in Figma for a SaaS Design System (project management tool used by 50,000+ users, 15-person design/dev team) to systematize colors, typography, spacing, and component properties by building primitive tokens (color palette, spacing scale, type scale), semantic tokens (purpose-based: primary/secondary/error colors, body/heading text, component padding), and component-specific tokens (button sizes, card spacing, form field heights) while supporting light mode and dark mode themes and optimizing for designer consistency, developer handoff (React component library), and multi-product usage (3 related products sharing design system).

[User would attach current Figma files - components with hardcoded values, inconsistent colors, no systematic tokens]

Design token requirements:
- Product type: SaaS design system (component library shared across 3 products)
- Team size: Large team (8 designers, 15 developers, growing to 25 total)
- Token scope: Full design system (colors, typography, spacing, elevation, border radius, component-specific)
- Themes needed:
  - Light mode (primary theme, most users)
  - Dark mode (30% of users prefer, accessibility)
  - High contrast mode (accessibility, WCAG AAA goal)
  - Future: Potential brand variants (white-label for enterprise customers)
- Developer handoff:
  - Export tokens to JSON (Style Dictionary to generate CSS variables, React theme tokens)
  - Figma Variables → code sync
  - Developers expect semantic naming matching their component props

Current token problems:
- Hardcoded hex values everywhere - Primary blue #3B82F6 hardcoded in 347 components/instances, want to test new brand color (blue → purple) but would require manually updating hundreds of layers, took 8 hours last time we tried, missed 50+ instances, visual inconsistencies, no single source of truth
- No semantic tokens - Buttons use primitive "Blue 500" fill directly, developers don't know which blue is "primary" vs "accent" vs "link", components break when we change palette (Blue 500 → Purple 500 doesn't update button automatically because not semantically named), unclear purpose of each color
- Inconsistent spacing - Components use random spacing values: 12px, 14px, 15px, 16px, 18px, 20px, 22px, 24px gaps with no system, developers implement with different values, visual inconsistency across products, want systematic 4px/8px-based scale but currently chaos
- No theme support for dark mode - Built dark mode by duplicating entire component library into separate Figma file "Components - Dark", nightmare to maintain (update button → must manually update light AND dark versions), sync issues (forgot to update dark, shipped inconsistent), want single source with mode switching
- Poor naming convention - Color variables named "color-primary-1", "gray-darker", "blue-thing", "text-color-2" meaningless to developers, doesn't match code (code uses "primary", "secondary", "error"), handoff friction (designers say "use color-primary-1", devs ask "what's that in our theme?"), no clear hierarchy
- Component token chaos - Button padding hardcoded differently everywhere (some buttons 12px 24px, others 16px 32px, others 14px 28px for same size variant), card spacing inconsistent (16px vs 20px vs 24px for same card type), form fields different heights (36px, 40px, 44px for "medium" size), no component-level token system
- Developer handoff friction - Designers spec "use Blue 500" but developers need semantic "primary" color, token names don't match (Figma: "Text/Primary", code: "textPrimary"), manual translation required, slow and error-prone

Team context:
- Figma expertise: Advanced (team uses components, variants, Auto Layout extensively)
- Design system: Mature (2 years old, 200+ components, used across 3 products)
- Scale: 15-person team, will grow to 25 designers/developers
- Current workflow: Designers design in Figma → hand off specs → developers manually translate to code tokens
- Goal: Figma Variables → automated export to JSON → Style Dictionary → CSS/React tokens (single source of truth)
- Developer stack: React with CSS-in-JS (styled-components), use design tokens extensively
- Timeline: 2 months to implement full token system (leadership priority for consistency)

Please provide:
1. Token hierarchy and structure (primitives vs semantic vs component tokens, organization)
2. Color tokens in Figma (primitive colors, semantic colors, surface/text/border tokens, modes for themes)
3. Typography tokens (font families, sizes, weights, line heights, semantic text styles)
4. Spacing tokens (spacing scale, semantic spacing, layout tokens, component-specific padding/gaps)
5. Semantic naming conventions (purpose-based names, developer-friendly, clear hierarchy)
6. Light/dark mode implementation (using Figma modes, color token variants, switching themes)
7. Token organization in Figma (collections, groups, naming patterns, documentation)
8. Developer handoff (token export, naming conventions match code, JSON/CSS output)

Consider: Large team (15 people, consistency critical). Multi-product (3 products share system). Light/dark mode required. Developer handoff (React, CSS-in-JS, automated export). Component library (200+ components). Mature system (refactoring from hardcoded to tokens). Future white-label (multi-brand potential).
```

</aside>

---

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Three-tier system: Primitives (Blue 500) → Semantic (Primary Color) → Component (Button Background) - never skip semantic layer
✦ Common mistake: Using primitive tokens directly in components - always use semantic tokens for flexibility
✦ Best with: Claude (excellent at systematic token structures, naming conventions), ChatGPT (good for Figma Variable examples)
✦ Remix it: "Create design token system in Figma - primitive colors, semantic tokens, spacing scale, light/dark modes"
✦ Pro move: Ask "Audit my Figma token structure - check naming, hierarchy, mode support, developer handoff readiness"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create color token system - primitive palette (50-900), semantic tokens (Surface/Text/Border), light/dark modes"
- "Design spacing token scale - 4px/8px-based (0-96px), semantic spacing (Padding/Gap), component-specific tokens"
- "Set up typography tokens - font size scale, weights, line heights, semantic text styles (H1-Body-Caption)"
- "Design token naming convention - semantic not technical, developer-friendly, hierarchical (Category/Property/Variant)"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![](72_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #73: [Developer-Friendly Design Specs](R-73%20Developer-Friendly%20Design%20Specs%202d867ccc6bef804eae58c28f42a64b2d.md)
→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)
→ Recipe #56: [Build Color Palettes](R-56%20Build%20Color%20Palettes%202d767ccc6bef80268ce9ff601c08a13e.md)
→ Recipe #22: [Check Your Color Contrast](R-22%20Check%20Your%20Color%20Contrast%202d667ccc6bef8030822cc761e4959070.md)

</aside>