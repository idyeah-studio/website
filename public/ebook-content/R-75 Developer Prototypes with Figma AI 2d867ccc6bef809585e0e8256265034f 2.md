# R-75: Developer Prototypes with Figma AI

# Recipe #75: Developer Prototypes with Figma AI

Category: Bonus — Hand-off  |  ⏱️ 35-45 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're using Figma AI (Make) to convert static designs into interactive prototypes for developers—adding clicks, responsive behavior, component states, and navigation flows to static mockups.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Static Figma handoffs leave developers guessing—no interaction specs, no responsive behavior, no component states, no navigation flows. Teams waste days building from scratch or shipping features that don't match design intent. You need Figma AI to generate working prototypes developers can actually reference.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

You'll get Figma AI prompts for: attaching designs with context, specifying interactions (clicks, hovers, forms), defining responsive breakpoints, documenting component states, creating navigation flows, setting animation timing, and iterating for refinement. Output is a clickable, responsive prototype developers can inspect in Dev Mode.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Figma AI Prototype Specialist focusing on converting static designs to responsive interactive prototypes using Figma AI (Make) with effective prompting.

I'm using Figma AI to generate responsive prototypes from [Existing Designs] for [Developer Handoff] by attaching [Static Screens/Components], writing prompts to specify [Interactions], [Responsive Behavior], [Component States], and [Navigation Flows] while optimizing for [Developer Consumption] and avoiding [Common Prototype Problems].

[OPTIONAL: Attach existing static Figma designs]

Figma AI prototype requirements:
- Existing designs: [e.g., Desktop mockups, Mobile screens, Component library]
- Developer handoff goal: [e.g., Working prototype for React, Responsive specs]
- Interactions needed: [e.g., Button clicks, Form submissions, Modal opens]
- Responsive requirements: [e.g., Desktop to mobile, Breakpoints at 768px/375px]
- Component states: [e.g., Default/hover/focus/active/disabled, Loading, Error]

Current prototype problems:
- [Problem 1: e.g., Static screens only—developers guess what's interactive]
- [Problem 2: e.g., No responsive specs—mobile layout undefined]
- [Problem 3: e.g., Missing states—hover/focus/error not shown]

Team context: [Developer tech stack, Figma AI experience, handoff workflow]

Please provide:
1. Attaching designs to Figma AI (select screens, provide context)
2. Interaction prompts (clicks, hovers, forms, navigation, modals)
3. Responsive behavior prompts (breakpoints, layout adaptations)
4. Component state prompts (hover/focus/disabled, validation, loading)
5. Navigation flow prompts (screen transitions, back buttons)
6. Animation and timing prompts (transitions, duration, easing)
7. Developer-ready output (inspect mode, interaction specs)
8. Iteration and refinement (test, adjust prompts, regenerate)

Consider: [Constraints - e.g., React implementation, Mobile-first, Accessibility]
```

💡 **What to customize:**

- [Existing Designs] = Static screens you're converting
- [Developer Handoff] = React, Vue, mobile, etc.
- [Interactions] = Clicks, hovers, navigation
- [Responsive Behavior] = Breakpoints, adaptations
- [Component States] = Hover, focus, error, loading
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Figma AI Prototype Specialist focusing on converting static designs to responsive interactive prototypes.

I'm using Figma AI to generate responsive prototypes from a SaaS Dashboard (8 static desktop screens) for React Developer Handoff by attaching static 1440px mockups, writing prompts to specify button clicks open modals, dropdown filters update charts, table rows navigate to details, sidebar collapses on mobile, and form inputs show validation states.

Figma AI prototype requirements:
- Existing designs: 8 desktop screens (1440px)—Home, Analytics, Reports, Settings
- Developer handoff goal: Working prototype for React implementation
- Interactions needed: "Add Report" opens modal, dropdowns filter charts, table rows clickable
- Responsive requirements: Desktop 1440px → Tablet 768px → Mobile 375px, sidebar becomes hamburger
- Component states: Buttons (hover/focus/disabled/loading), Inputs (focus/error/success)

Current prototype problems:
- Static screens with no interactions—developers ask "what happens when I click this?"
- No responsive variants—mobile layout undefined, developers improvise
- Missing component states—only default shown, hover/focus/error missing

Team context: React/TypeScript/Tailwind, beginner Figma AI experience, Dev Mode handoff

Please provide interaction prompts, responsive behavior, component states, navigation flows, animation timing, and developer-ready output.`
```

</aside>

---

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Be specific about interactions: Don't say "make it interactive"—say "clicking 'Add Report' opens a modal with 200ms fade-in"
✦ Common mistake: Vague responsive prompts—always specify exact breakpoints and layout changes
✦ Best with: Claude (detailed interaction specs), ChatGPT (animation timing examples)
✦ Remix it: "Attach these 5 screens, make navigation work, add responsive (768px/375px), show all button states"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Write Figma AI prompt to make this button interactive—click opens modal, show hover/focus/disabled/loading states"
- "Create responsive prompt for dashboard—sidebar collapses on tablet, becomes hamburger on mobile"
- "Generate navigation flow prompt—home → detail → settings with back button and breadcrumbs"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![75_Example_Output.png](75_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #73: [Developer-Friendly Design Specs](R-73%20Developer-Friendly%20Design%20Specs%202d867ccc6bef804eae58c28f42a64b2d.md)
→ Recipe #74: [Generate HTML & CSS from Figma](R-74%20Generate%20HTML%20&%20CSS%20from%20Figma%202d867ccc6bef80a28208fba9fe6e39da.md)
→ Recipe #72: [Design Tokens in Figma](R-72%20Design%20Tokens%20in%20Figma%202d867ccc6bef80839ee7ec3aaadb1649.md)

</aside>