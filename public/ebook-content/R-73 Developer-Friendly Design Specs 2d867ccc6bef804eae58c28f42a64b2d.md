# R-73: Developer-Friendly Design Specs

# Recipe #73: Developer-Friendly Design Specs

Category: Bonus — Hand-off  |  ⏱️ 35-45 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're handing off designs to developers, preparing Figma files for development, documenting component specifications, annotating interactions and animations, or bridging the design-development gap. Your current handoffs are unclear, developers ask many questions, implementations don't match designs, or you spend hours explaining specs in meetings.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create poor design specs - vague annotations ("make it look good"), missing interaction details (no hover/focus/disabled states), unclear spacing (developers guess padding values), no component documentation (props/variants unclear), inconsistent naming (layer names don't match code), missing edge cases (empty states, errors, loading), or relying on verbal explanations (specs disappear after handoff call). Teams build products that don't match designs, waste time in back-and-forth Slack messages, hold endless clarification meetings, or ship inconsistent implementations. You need systematic design specs - clear annotations (spacing, sizing, colors with exact values), complete state documentation (default/hover/focus/active/disabled/loading/error), interaction specifications (animations, transitions, timing), component APIs (props, variants, behavior), organized Figma files (Dev Mode ready, clean layers, proper naming), edge case coverage (responsive, empty, error, loading states), and async-friendly documentation (specs developers can reference independently).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide Figma Dev Mode setup (enable Dev Mode, mark ready for dev, organize sections, clean layer naming), complete component specifications (all states including hover/focus/disabled/loading/error, props/variants, exact values with design tokens), interaction and animation specs (transition timing, easing functions, triggers), spacing and layout documentation (padding, gaps, Auto Layout settings, responsive breakpoints), typography and color specs (text styles, color tokens, accessibility notes), edge case documentation (empty states, loading, errors, long content, small screens), annotation guidance (measurements, token references, complex logic explanations), and handoff best practices (naming conventions, file organization, async-friendly documentation). You'll get systematic approaches to create clear, complete design specs that developers can implement independently.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Design-to-Development Handoff Specialist focusing on clear specifications, Figma Dev Mode, component documentation, and effective designer-developer collaboration.

I'm creating design specs for [Project/Feature] to hand off to [Developer Team] by documenting [Components/Screens] with [Specification Details] while optimizing for [Handoff Goals] and avoiding [Common Spec Problems].

[OPTIONAL: Attach Figma designs needing specs or examples of unclear handoffs]

Design spec requirements:
- Project type: [e.g., New feature, Component library, Full product, Design system, Redesign]
- Developer team: [e.g., Frontend developers (React), Mobile developers (iOS/Android), Full-stack team]
- Handoff scope: [e.g., Individual components, Full screens, Interaction flows, Design system]
- Tech stack: [e.g., React, Vue, React Native, SwiftUI, HTML/CSS, Tailwind]
- Timeline: [e.g., Async handoff (developers work independently), Live handoff (design review meeting), Iterative (ongoing collaboration)]

Current handoff problems:
- [Problem 1: e.g., Vague specs - annotations say "add some spacing" without exact values, developers guess]
- [Problem 2: e.g., Missing states - only default state shown, no hover/focus/disabled/error/loading states]
- [Problem 3: e.g., Unclear interactions - no animation specs, transition timing, or behavior documentation]
- [Problem 4: e.g., Poor Figma organization - messy layers, inconsistent naming, developers can't find components]
- [Problem 5: e.g., No edge cases - missing empty states, error states, responsive behavior, long content]

Team context: [Design-dev relationship, handoff frequency, developer Figma access, documentation tools]

Please provide:
1. Figma Dev Mode setup (enable Dev Mode, mark ready for dev, organize sections, clean layers)
2. Component specifications (states, props/variants, sizing, spacing, exact values with design tokens)
3. Interaction and animation specs (hover/focus/active, transitions, timing, easing, triggers)
4. Spacing and layout documentation (padding, gaps, Auto Layout settings, responsive behavior)
5. Typography and color specs (text styles, color tokens, semantic naming, accessibility notes)
6. Edge case documentation (empty states, errors, loading, long content, small screens)
7. Annotations and comments (callouts for complex logic, design decisions, implementation notes)
8. Handoff best practices (naming conventions, organized files, async-friendly documentation)

Consider: [Constraints - e.g., Async handoff (no live meetings), Junior developers (need detailed specs), Remote team (different time zones)]
```

💡 What to customize:

- [Project/Feature] = What you're handing off
- [Developer Team] = Who's implementing
- [Components/Screens] = What needs specs
- [Specification Details] = States, spacing, interactions
- [Handoff Goals] = Clarity, independence, accuracy
- [Common Spec Problems] = Current issues
- [Problems 1-5] = Specific handoff problems
- Attach Figma files with spec issues
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Design-to-Development Handoff Specialist focusing on clear specifications, Figma Dev Mode, component documentation, and effective designer-developer collaboration.

I'm creating design specs for a Dashboard Redesign (analytics dashboard with charts, tables, filters, and real-time data) to hand off to a remote frontend development team (3 React developers, 2 junior, 1 mid-level, in different time zones) by documenting 15 new components (cards, data tables, filter panels, chart components) and 8 key screens with complete component states (default/hover/focus/active/disabled/loading/error), exact spacing values (using design tokens), interaction animations (transition timing, easing functions), responsive behavior (desktop/tablet/mobile breakpoints), and edge cases (empty states, loading states, error states, long data) while optimizing for async handoff (developers work independently without live meetings), junior developer clarity (detailed specs, no assumptions), and accurate implementation (matches designs exactly, minimal revisions) and avoiding vague annotations, missing interaction details, unclear responsive behavior, forgotten edge cases, and relying on Slack explanations.

[User would attach Figma dashboard designs - components without specs, unclear states, missing annotations]

Design spec requirements:
- Project type: Dashboard redesign (analytics product, 20+ screens, data-heavy)
- Developer team:
  - 3 React developers (2 junior with 1 year experience, 1 mid-level with 3 years)
  - Remote team (US, Europe, Asia - different time zones, async work)
  - Tech stack: React, TypeScript, Tailwind CSS, Recharts (for charts)
  - Figma access: Yes (developers use Figma Dev Mode for specs)
- Handoff scope:
  - 15 new components (buttons, cards, data tables, filters, charts, modals)
  - 8 key screens (main dashboard, analytics detail, user management, settings)
  - Interaction flows (filtering data, drill-down navigation, real-time updates)
- Tech stack: React, TypeScript, Tailwind CSS (design tokens map to Tailwind classes)
- Timeline:
  - Async handoff (no live handoff meetings, developers reference Figma independently)
  - 2-week sprint cycles (design complete, developers implement over 2 weeks)
  - Iterative (ongoing design refinements during development)

Current handoff problems:
- Vague spacing specs - Annotations say "add some padding" or "space things out nicely" without exact pixel values, developers guess (some use 12px, others 16px, others 20px), visual inconsistency in implemented product, back-and-forth Slack: "How much padding did you want here?", wastes 2-3 hours per week in clarification messages
- Missing component states - Designed default button state only, no hover/focus/active/disabled states shown, developers implement generic browser defaults (ugly blue outline on focus), doesn't match brand, discovered in QA (too late), have to redesign states retroactively, delays sprint
- No interaction or animation specs - Designed dropdown menu, no spec for how it opens (fade? slide? instant?), no transition timing, developers implement instant show/hide (looks jarring, not polished), wanted smooth 200ms ease-out transition, have to revise post-implementation
- Poor Figma layer organization - Layers named "Rectangle 47", "Group 23", "Frame 891" (meaningless), developers can't find components in Figma, spend 10 minutes hunting for "that blue button", messy frames (components scattered, no organization), developers frustrated, ask "Where's the error state for the card?"
- Missing edge cases - Designed data table with 20 rows of data (looks great), never designed empty state (no data), never designed error state (API failure), never designed loading state (skeleton screen), developers ask "What should empty table look like?", have to design on the fly (delays sprint), shipped with generic "No data" text (not brand-aligned)
- No responsive specs - Designed desktop only (1440px), no tablet (768px) or mobile (375px) specs, developers guess how to adapt layout, cards stack weird on mobile, navigation breaks on tablet, have to redesign responsive after seeing broken implementation
- Unclear design token usage - Figma uses design tokens (Primary Color, Spacing-4), but annotations don't reference them, say "use this blue" without specifying it's {Brand/Primary}, developers hardcode #3B82F6 instead of using theme token, can't switch themes later, token system wasted

Team context:
- Design-dev relationship: Good (devs trust designer), but async (rarely in live meetings together)
- Handoff frequency: Every 2 weeks (per sprint)
- Developer Figma access: Yes (all devs have Figma accounts, use Dev Mode for specs)
- Documentation: Figma only (no separate spec docs, everything in Figma annotations)
- Developers' pain points: "Not enough detail", "Missing states", "Unclear interactions", "Can't find components"
- Designer's pain point: Spending 5+ hours/week answering Slack questions about specs

Please provide:
1. Figma Dev Mode setup (enable Dev Mode, mark ready for dev, organize sections, clean layers)
2. Component specifications (states, props/variants, sizing, spacing, exact values with design tokens)
3. Interaction and animation specs (hover/focus/active, transitions, timing, easing, triggers)
4. Spacing and layout documentation (padding, gaps, Auto Layout settings, responsive behavior)
5. Typography and color specs (text styles, color tokens, semantic naming, accessibility notes)
6. Edge case documentation (empty states, errors, loading, long content, small screens)
7. Annotations and comments (callouts for complex logic, design decisions, implementation notes)
8. Handoff best practices (naming conventions, organized files, async-friendly documentation)

Consider: Async handoff (no live meetings, specs must be complete). Junior developers (need detailed guidance). Remote team (time zones, Slack async). React/Tailwind (token names should match). Data-heavy (empty/error/loading states critical). 15 components + 8 screens (large scope, needs organization). Vague specs history (must be precise).
```

</aside>

---

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Show all states: Don't just design default - developers need hover, focus, active, disabled, loading, error states
✦ Common mistake: Vague spacing ("add some padding") - always use exact values with design tokens
✦ Best with: Claude (excellent at systematic specs, thorough documentation), ChatGPT (good for checklist generation)
✦ Remix it: "Create design specs for this component - all states, exact spacing with tokens, interactions, edge cases"
✦ Pro move: Ask "Audit my Figma file for dev handoff readiness - check layer names, missing states, vague specs"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Document button component specs - all states (default/hover/focus/active/disabled), exact padding, transitions"
- "Create data table specs - empty state, loading (skeleton), error state, responsive behavior, interactions"
- "Specify modal animation - open/close transitions, timing (200ms), easing, backdrop fade, focus management"
- "Organize Figma file for dev handoff - clean layers, mark ready for dev, add annotations, edge cases"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![73_Example_Output.png](73_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #74: [Generate HTML & CSS from Figma](R-74%20Generate%20HTML%20&%20CSS%20from%20Figma%202d867ccc6bef80a28208fba9fe6e39da.md)
→ Recipe #72: [Design Tokens in Figma](R-72%20Design%20Tokens%20in%20Figma%202d867ccc6bef80839ee7ec3aaadb1649.md)

</aside>