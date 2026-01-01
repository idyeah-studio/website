# R-60: Documentation & Guidelines

# Recipe #60: Documentation & Guidelines

Category: Systems & Components  |  ⏱️ 35-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're documenting components for team adoption - creating usage guidelines, anatomy breakdowns, variant explanations, dos and don'ts, code examples, and accessibility notes so designers and developers can use your design system correctly and consistently. Your current components lack documentation, teams use components incorrectly, or you need to scale design system adoption across multiple teams.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many teams build comprehensive component libraries but fail to document them - components exist in Figma but no one knows when to use Primary vs Secondary buttons, designers misuse components (wrong variants for wrong contexts), no anatomy documentation (what parts make up a component), missing usage guidelines (when to use, when NOT to use), no dos/don'ts examples (visual guides showing correct/incorrect usage), developers lack implementation specs (props, states, accessibility), or documentation is scattered across Slack/Notion/Figma comments. Teams waste time asking "which button variant should I use?", create inconsistent experiences (same component used differently across features), struggle with onboarding (new designers don't know component library), or abandon design system entirely (too confusing without docs). You need systematic component documentation - clear structure (anatomy, variants, usage, examples), concrete dos/don'ts with visuals, accessibility guidelines, code specs for developers, and centralized location (Storybook, Notion, or Figma).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will deliver complete component documentation structure: component overview and anatomy breakdowns, variant explanations with hierarchy (Primary > Secondary > Tertiary), usage guidelines (when to use/NOT use), visual dos and don'ts examples with screenshots and explanations, design specifications (sizing, colors, spacing, responsive behavior), code examples with props and accessibility attributes, related component cross-references, and a full Button documentation example showing all sections in practice - transforming undocumented component libraries into well-documented, adoption-ready design systems.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Design System Documentation Specialist focusing on component guidelines, usage patterns, and adoption enablement.

I'm creating documentation for my [Component Library] with [Component Count] components to enable [Team Size] designers and developers to use the system correctly.

[OPTIONAL: Attach component examples that need documentation]

Documentation requirements:
- Components to document: [e.g., Buttons, Inputs, Cards, Modals, Navigation, Data tables]
- Team audience: [e.g., 10 designers + 15 developers, Junior to senior levels, Multiple product teams]
- Documentation format: [e.g., Storybook, Notion, Figma community file, Google Docs]
- Detail level: [e.g., Comprehensive for core components, Brief for simple components]
- Platform: [e.g., Web React, React Native, Multi-platform]

Current documentation problems:
- [Problem 1: e.g., No documentation exists - components in Figma but zero usage guidelines]
- [Problem 2: e.g., Teams misuse components - Primary button used for destructive actions]
- [Problem 3: e.g., No variant explanations - designers don't know when to use outlined vs filled]
- [Problem 4: e.g., Missing dos/don'ts - no visual examples of correct/incorrect usage]
- [Problem 5: e.g., Developers lack specs - no props, states, or accessibility guidance]

Team context: [Documentation needs, technical skills, adoption blockers, onboarding frequency]

Please provide:
1. Documentation structure (what sections to include for each component)
2. Component anatomy (breaking down parts and their purpose)
3. Variant documentation (explaining when to use each variant)
4. Usage guidelines (when to use, when NOT to use - critical!)
5. Dos and don'ts (concrete visual examples with explanations)
6. Code examples (props, implementation, accessibility)
7. Accessibility guidelines (keyboard navigation, ARIA, screen readers)
8. Live example: Complete Button documentation (showing all sections in practice)

Consider: [Constraints - e.g., Must be maintainable, Searchable, Accessible to all skill levels, Updated regularly, Clear examples]
```

💡 What to customize:

- [Component Library] = Your design system name
- [Component Count] = How many components to document
- [Team Size] = Designers + developers using system
- [Components to document] = Which components need docs
- [Documentation format] = Where docs will live
- [Problems 1-5] = Current documentation gaps
- Attach components needing documentation
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Design System Documentation Specialist focusing on component guidelines, usage patterns, and adoption enablement.

I'm creating documentation for my SaaS Design System with 50 components to enable 8 designers and 12 developers across 3 product teams to use the system correctly.

[User would attach Button, Input, Card component examples]

Documentation requirements:
- Components to document:
  - Core: Buttons (5 variants), Inputs (8 types), Cards (4 layouts)
  - Navigation: Header, Sidebar, Tabs, Breadcrumbs
  - Data: Tables, Charts, Lists, Empty states
  - Feedback: Modals, Toasts, Alerts, Loading states
  - Forms: Text inputs, Dropdowns, Checkboxes, Radio buttons
  - Total: 50 components, prioritize top 10 most-used
- Team audience:
  - 8 designers (2 junior, 5 mid, 1 senior)
  - 12 developers (React, 3 junior, 7 mid, 2 senior)
  - 3 product teams (Dashboard, Marketing, Mobile web)
  - High turnover (2-3 new hires per quarter, need good onboarding)
- Documentation format:
  - Primary: Storybook (live component playground)
  - Secondary: Notion (written guidelines, when to use)
  - Tertiary: Figma (component descriptions, linked from library)
- Detail level:
  - Comprehensive: Buttons, Inputs, Cards (most-used, most questions)
  - Standard: Navigation, Data, Feedback components
  - Brief: Simple components (Divider, Spacer, Badge)
- Platform: Web (React + TypeScript)

Current documentation problems:
- Zero documentation exists - 50 components in Figma library, beautiful and systematic, but ZERO usage guidelines, designers wing it, inconsistent usage everywhere
- Teams constantly misuse components - Primary button (blue) used for Delete action (should be Danger red), Secondary button used for primary actions, Tertiary button used randomly, no one knows the hierarchy
- No variant explanations - Button has 5 variants (Primary, Secondary, Tertiary, Danger, Ghost) but no explanation when to use each, designers pick randomly based on "looks nice"
- Missing dos/don'ts visual examples - no concrete examples showing "✅ Do this: Use Primary for main action" vs "❌ Don't: Use Primary for destructive delete", people learn by mistakes
- Developers lack implementation specs - no props documentation (size?, disabled?, loading?, onClick?), no accessibility guidance (aria-label?, keyboard nav?), developers implement inconsistently
- Questions in Slack constantly - "Which button should I use for submit?" asked 10+ times, "How do I make button full-width?" asked 5+ times, documentation would eliminate 80% of questions
- New designers take 2 weeks to learn system - no onboarding docs, they explore Figma library randomly, trial and error, slow ramp-up

Team context:
- Need documentation to scale (can't answer same questions repeatedly)
- Storybook already set up (need to add written docs)
- Designers prefer visual examples (screenshots, dos/don'ts)
- Developers need code examples (props, TypeScript interfaces)
- Accessibility important (must meet WCAG AA, document it)

Please provide:
1. Documentation structure (what sections to include for each component)
2. Component anatomy (breaking down parts and their purpose)
3. Variant documentation (explaining when to use each variant)
4. Usage guidelines (when to use, when NOT to use - critical!)
5. Dos and don'ts (concrete visual examples with explanations)
6. Code examples (props, implementation, accessibility)
7. Accessibility guidelines (keyboard navigation, ARIA, screen readers)
8. Live example: Complete Button documentation (showing all sections in practice)

Consider: Storybook + Notion format. Visual examples critical (designers learn visually). Clear variant hierarchy (Primary > Secondary > Tertiary). Dos/don'ts with screenshots. Props documentation for developers. Accessibility specs (keyboard, ARIA). Searchable and maintainable. Updated when components change.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Dos/don'ts are gold: Visual examples showing ✅ correct vs ❌ incorrect usage eliminate 80% of questions
✦ Common mistake: Documentation without examples - abstract guidelines don't help, show concrete screenshots
✦ Best with: Claude (excellent at structured documentation), ChatGPT (good for code examples)
✦ Remix it: "Create complete documentation for Card component - anatomy, variants, usage, dos/don'ts with examples"
✦ Pro move: Ask "Generate documentation template for all components - reusable structure with sections"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Document Button component completely - anatomy, 5 variants, usage guidelines, dos/don'ts, code examples, accessibility"
- "Create dos and don'ts visual guide - 10 examples showing correct vs incorrect component usage"
- "Write usage guidelines - when to use Primary vs Secondary vs Tertiary buttons with real examples"
- "Generate accessibility documentation - keyboard navigation, ARIA attributes, screen reader support for all components"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![60_Example_Output.png](60_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)
→ Recipe #49: [Design Component Variants in Figma](R-49%20Design%20Component%20Variants%202d767ccc6bef8061a641c8db579cd3b7.md)
→ Recipe #55: [Create Pattern Libraries](R-55%20Create%20Pattern%20Libraries%202d767ccc6bef8074b299ef0842d21259.md)

</aside>