# R-52: Design Multi-State Components

# Recipe #52: Design Multi-State Components

Category: Systems & Components  |  ⏱️ 35-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're building interactive components that need to show different states - hover effects, pressed states, focus rings, disabled states, loading indicators, and error states. Your current components only show the default state, making prototypes unrealistic and leaving developers to guess how interactions should look.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create components with only the default state - a button that looks the same whether you hover, click, or it's disabled. This leads to static mockups that don't reflect real interactions, developers implementing inconsistent hover effects across the product, no focus states for keyboard navigation (accessibility issue), disabled states that look clickable, and loading states added as afterthoughts. Teams struggle with realistic prototypes (can't demo hover effects), inconsistent interactions (every developer implements hover differently), accessibility failures (no keyboard focus indicators), and unclear specifications (handoff documents don't show all states). You need systematic multi-state components - every interactive element has hover, pressed, focused, disabled, loading, and error states defined, connected with Figma's interactive components, and documented for consistent implementation.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide essential state type definitions (Default, Hover, Pressed, Focused, Disabled, Loading, Error, Success) with specific visual design specifications including colors, transitions, and timing for each state, step-by-step interactive component setup in Figma connecting states with interactions and keyboard navigation, state variant organization strategies with recommended property structures, comprehensive accessibility considerations covering WCAG-compliant focus rings with 3:1 contrast and screen reader ARIA attributes, platform-specific state guidance distinguishing desktop mouse/keyboard interactions from mobile touch patterns, animation and transition specifications with timing recommendations (100-150ms for hover, 200-300ms for loading, instant for focus), and complete documentation templates including state specification tables with hex codes and CSS pseudo-class examples for developer handoff. Optionally includes interactive component examples with all states connected.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Interaction Design Specialist focusing on component states, interactive prototypes, and state-based design systems.

I'm designing multi-state components for a [Product Type] to ensure every interactive element has complete state coverage for prototypes and developer handoff.

[OPTIONAL: Attach Figma components showing incomplete state coverage]

Multi-state requirements:
- Component types: [e.g., Buttons, Inputs, Cards, Links, Toggles, Checkboxes]
- Required states: [e.g., Default, Hover, Pressed, Focused, Disabled, Loading, Error, Success]
- Interaction patterns: [e.g., Click, Hover, Keyboard navigation, Touch]
- Platform: [e.g., Web (mouse + keyboard), Mobile (touch), Desktop app]
- Accessibility needs: [e.g., WCAG AA compliance, Keyboard navigation, Screen readers]

Current state problems:
- [Problem 1: e.g., Components only have default state - no hover, pressed, or disabled]
- [Problem 2: e.g., No focus states - keyboard users can't see where they are]
- [Problem 3: e.g., Disabled buttons look clickable - same appearance as enabled]
- [Problem 4: e.g., No loading states - users don't know button is processing]
- [Problem 5: e.g., Error states missing - inputs don't show validation errors]

Team context: [Designer interaction design knowledge, prototype fidelity needs, developer handoff process]

Please provide:
1. Essential state types (hover, pressed, focused, disabled, loading, error)
2. State design specifications (visual changes for each state)
3. Interactive component setup (connecting states in Figma)
4. State variant organization (State property with all options)
5. Accessibility considerations (focus rings, color contrast, indicators)
6. Platform-specific states (mouse hover vs. touch, keyboard focus)
7. Animation and transitions (state change timing, easing)
8. Documentation for handoff (state specifications for developers)

Consider: [Constraints - e.g., Must support keyboard navigation, Touch targets 44x44px, Color contrast WCAG AA, Consistent across all components]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Enterprise software
- [Component types] = What needs states
- [Required states] = Which states to include
- [Interaction patterns] = How users interact
- [Platform] = Web, mobile, desktop
- [Problems 1-5] = Current state coverage issues
- Attach components missing states
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Interaction Design Specialist focusing on component states, interactive prototypes, and state-based design systems.

I'm designing multi-state components for a SaaS Project Management Tool to ensure every interactive element has complete state coverage for prototypes and developer handoff.

[User would attach Figma components with incomplete states]

Multi-state requirements:
- Component types:
  - Buttons (primary, secondary, tertiary, danger, icon)
  - Inputs (text, email, password, textarea, search)
  - Cards (task cards, project cards - clickable/selectable)
  - Links (text links, navigation links)
  - Toggles and checkboxes (form controls)
  - Dropdowns and selects
  - Badges and pills (sometimes clickable)
- Required states:
  - Default (resting, inactive state)
  - Hover (mouse over)
  - Pressed/Active (mouse down, currently clicked)
  - Focused (keyboard focus, tab navigation)
  - Disabled (inactive, cannot interact)
  - Loading (processing, waiting for response)
  - Error (validation failed, action failed)
  - Success (action completed successfully)
- Interaction patterns:
  - Mouse: Click, hover, drag
  - Keyboard: Tab (focus), Enter/Space (activate), Arrow keys (navigate)
  - Touch: Tap, long-press, swipe (mobile - 35% of users)
- Platform: Web responsive (desktop + mobile web)
- Accessibility needs:
  - WCAG AA compliance (color contrast 4.5:1)
  - Keyboard navigation (all interactive elements focusable)
  - Focus indicators (visible focus rings)
  - Screen reader support (state announced)
  - Touch targets 44x44px minimum (mobile)

Current state problems:
- Components only have default state - Button component shows only default blue button, no hover (slightly darker?), no pressed (even darker?), no disabled (grayed out?) - developers implementing inconsistently, 5 different hover effects across product
- No focus states anywhere - keyboard users (15% of users, accessibility requirement) Tab through interface with no visual indication where they are, fails WCAG 2.1 Level AA, legal compliance issue
- Disabled buttons look identical to enabled - Button disabled still blue, still looks clickable, users click and nothing happens (frustrating), no visual feedback that it's disabled
- No loading states - Submit button clicked, no indication processing is happening, users click 3-4 times thinking it didn't work, duplicate submissions, need spinner or "Saving..." text
- Input error states missing - Email input with invalid email shows no error, no red border, no error message, users don't know what's wrong, form submission fails silently
- Hover on mobile? - Desktop designs have hover states, mobile has no hover (finger touch), need pressed/active state instead, confusion about mobile interactions
- Success states as afterthought - After successful action, no confirmation, button returns to default immediately, users unsure if action worked

Team context:
- 8 designers, varied interaction design experience
- Building high-fidelity prototypes for user testing (need realistic interactions)
- Developers need exact specifications (what happens on hover, press, focus)
- Accessibility audit failed due to missing focus states (compliance issue)
- Mobile users complain buttons don't feel responsive (no visual feedback on tap)
- Current prototypes are static (can't test hover/focus interactions)

Please provide:
1. Essential state types (hover, pressed, focused, disabled, loading, error)
2. State design specifications (visual changes for each state)
3. Interactive component setup (connecting states in Figma)
4. State variant organization (State property with all options)
5. Accessibility considerations (focus rings, color contrast, indicators)
6. Platform-specific states (mouse hover vs. touch, keyboard focus)
7. Animation and transitions (state change timing, easing)
8. Documentation for handoff (state specifications for developers)

Consider: Must cover all 8 states (default, hover, pressed, focused, disabled, loading, error, success). WCAG AA focus indicators required. Mobile needs pressed state not hover. Consistent state behavior across all components. Prototype needs to demonstrate interactions. Developers need clear specifications with hex codes, timing, easing.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Focus rings are non-negotiable: Keyboard users need visible focus indicators - required for WCAG AA compliance
✦ Common mistake: Only designing default state - every interactive component needs hover, pressed, focused, disabled at minimum
✦ Best with: Claude (excellent at state specifications), ChatGPT (good for interaction patterns)
✦ Remix it: "Design the loading state system - spinners, skeleton screens, progress indicators across all components"
✦ Pro move: Ask "Audit my components for missing states - find components without hover, focus, or disabled states"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the focus ring system - consistent focus indicators across all interactive components"
- "Design the error state patterns - validation errors, failed actions, helpful error messages"
- "How to animate state transitions - timing, easing, Smart Animate in Figma prototypes"
- "Build the loading state library - spinners, skeleton screens, progress bars for all components"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![52_Example_Output.png](52_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #49: [Design Component Variants in Figma](R-49%20Design%20Component%20Variants%202d767ccc6bef8061a641c8db579cd3b7.md)
→ Recipe #51: [Build Responsive Components in Figma](R-51%20Build%20Responsive%20Components%202d767ccc6bef8015b2effc042a7b2cbe.md)
→ Recipe #27: [Design Smooth Interactions](R-27%20Design%20Smooth%20Interactions%202d767ccc6bef80979ab0f6fc70dc611e.md)
→ Recipe #43: [Create Confirmation Patterns](R-43%20Create%20Confirmation%20Patterns%202d767ccc6bef804aba84f6e0d45a2146.md)

</aside>