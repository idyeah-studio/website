# R-64: Design Accessible Components

# Recipe #64: Design Accessible Components

Category: Bonus — Accessibility  |  ⏱️ 35-45 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're designing components that need to be accessible to users with disabilities - ensuring WCAG 2.1 AA compliance, supporting keyboard navigation, optimizing for screen readers, meeting color contrast requirements, or testing with assistive technologies. Your current components fail accessibility audits, exclude users with disabilities, or don't work with keyboard-only navigation or screen readers.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers ignore accessibility or treat it as an afterthought - designing components that only work with a mouse (keyboard users can't navigate), using insufficient color contrast (text unreadable for low vision users), missing focus indicators (keyboard users lose track of position), relying only on color to convey meaning (colorblind users miss information), forgetting screen reader users (buttons with no labels, images with no alt text), or creating tiny touch targets (motor disability users can't tap accurately). Teams ship inaccessible products that exclude 15-20% of users, face legal risks (ADA lawsuits), fail WCAG audits, or require expensive retrofitting. You need systematic accessible design - WCAG 2.1 AA compliance (contrast ratios, text sizes, touch targets), keyboard navigation (tab order, focus management, shortcuts), screen reader optimization (ARIA labels, semantic HTML, live regions), visible focus indicators (3px rings, high contrast), accessible color palettes (colorblind-safe, pattern + color), and testing with assistive tech (VoiceOver, NVDA, JAWS, keyboard-only).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide WCAG 2.1 AA compliance guidelines (contrast ratios, text sizes, touch targets), keyboard navigation patterns (tab order, focus management, shortcuts), screen reader optimization (ARIA labels, roles, live regions), accessible color strategies (colorblind-safe palettes, pattern + color redundancy), component-specific patterns for buttons, forms, modals, tables, and testing methods using VoiceOver, NVDA, keyboard-only, and automated tools. You'll get actionable checklists and code examples to make your components fully accessible.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Accessibility Specialist focusing on WCAG 2.1 AA compliance, assistive technology compatibility, and inclusive component design.

I'm designing accessible components for [Product/Component Library] to meet [Accessibility Standards] by ensuring [Key Requirements] work for users with [Disability Types] using assistive technologies.

[OPTIONAL: Attach current components with accessibility issues]

Accessibility requirements:
- Components to make accessible: [e.g., Buttons, Forms, Modals, Navigation, Data tables, Charts]
- WCAG level: [e.g., AA required (legal compliance), AAA desired (best practice)]
- Key user needs: [e.g., Keyboard-only navigation, Screen reader users, Low vision, Colorblind, Motor disabilities]
- Assistive tech support: [e.g., Screen readers (VoiceOver, NVDA, JAWS), Keyboard only, Voice control, Switch control]
- Testing capabilities: [e.g., Can test with VoiceOver, Have NVDA, Manual keyboard testing only]

Current accessibility problems:
- [Problem 1: e.g., No keyboard navigation - can't tab through UI, no focus indicators visible]
- [Problem 2: e.g., Insufficient contrast - text is gray #999 on white, fails 4.5:1 ratio]
- [Problem 3: e.g., Missing ARIA labels - icon buttons have no text, screen readers announce "button" with no context]
- [Problem 4: e.g., Color-only meaning - red/green status, colorblind users can't distinguish]
- [Problem 5: e.g., Small touch targets - buttons are 32px, below 44px minimum for motor disabilities]

Team context: [Accessibility knowledge level, legal requirements, budget for testing tools, timeline]

Please provide:
1. WCAG 2.1 AA requirements (contrast ratios, text sizes, touch targets, semantic HTML)
2. Keyboard navigation patterns (tab order, focus management, shortcuts, focus traps, skip links)
3. Screen reader optimization (ARIA labels, roles, live regions, semantic HTML, announcements)
4. Focus indicator design (visible rings, high contrast, custom styling, states)
5. Accessible color strategies (contrast ratios, colorblind palettes, pattern + color redundancy)
6. Touch target sizing (44px minimum, spacing, mobile considerations)
7. Component-specific patterns (accessible buttons, forms, modals, navigation, tables)
8. Testing methods (VoiceOver, NVDA, JAWS, keyboard-only, automated tools)

Consider: [Constraints - e.g., Must meet AA compliance, Legal requirement, Limited testing tools, Retrofit existing components]
```

💡 What to customize:

- [Product/Component Library] = What you're making accessible
- [Accessibility Standards] = WCAG AA, AAA, or specific requirements
- [Key Requirements] = Navigation, screen readers, contrast, etc.
- [Disability Types] = Visual, motor, hearing, cognitive
- [Components to make accessible] = Which components need work
- [Problems 1-5] = Current accessibility issues
- Attach components with accessibility problems
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Accessibility Specialist focusing on WCAG 2.1 AA compliance, assistive technology compatibility, and inclusive component design.

I'm designing accessible components for our SaaS Design System (25 components) to meet WCAG 2.1 AA compliance (legal requirement) by ensuring keyboard navigation, screen reader support, color contrast, and touch targets work for users with visual disabilities, motor disabilities, and colorblindness using screen readers (VoiceOver, NVDA), keyboard-only navigation, and mobile touch.

[User would attach current component library with accessibility issues - buttons, forms, modals, data tables]

Accessibility requirements:
- Components to make accessible:
  - Buttons (Primary, Secondary, Icon buttons, Button groups)
  - Form inputs (Text fields, Dropdowns, Checkboxes, Radio buttons, Toggles)
  - Modals and dialogs (Confirmation modals, Forms in modals, Focus traps)
  - Navigation (Header nav, Sidebar nav, Breadcrumbs, Tabs)
  - Data tables (Sortable columns, Row selection, Pagination)
  - Notifications (Toasts, Alerts, Error messages)
  - Cards (Clickable cards, Card grids, Interactive elements)
- WCAG level:
  - AA required (legal compliance for enterprise customers)
  - AAA desired where feasible (best practice, competitive advantage)
- Key user needs:
  - Keyboard-only navigation (can't use mouse - motor disabilities, power users)
  - Screen reader users (blind or low vision - VoiceOver on Mac/iOS, NVDA/JAWS on Windows)
  - Low vision users (need high contrast, larger text, zoom to 200%)
  - Colorblind users (8% of men, 0.5% of women - can't distinguish red/green)
  - Motor disabilities (can't click small targets, need 44px minimum, need large click areas)
  - Mobile users (touch-only, need large tap targets, can't hover)
- Assistive tech support:
  - Screen readers: VoiceOver (Mac/iOS), NVDA (Windows free), JAWS (Windows enterprise)
  - Keyboard only: Tab, Shift+Tab, Enter, Space, Arrow keys, Escape
  - Voice control: Dragon NaturallySpeaking, Voice Control (iOS)
  - Switch control: Single-button navigation for severe motor disabilities
- Testing capabilities:
  - Can test: VoiceOver on Mac (built-in), NVDA on Windows (free download)
  - Can test: Keyboard-only navigation (unplug mouse)
  - Tools available: axe DevTools (browser extension, free), Lighthouse (Chrome built-in)
  - Cannot test: JAWS (expensive $1000+ license), Physical switch devices

Current accessibility problems:
- No keyboard navigation support - Users can't tab through UI, buttons not keyboard-focusable, no visible focus indicators when tabbing, keyboard users completely blocked from using product, received complaint from enterprise customer whose employee uses keyboard-only
- Insufficient color contrast - Text is #767676 gray on white background (3.2:1 ratio, fails WCAG AA 4.5:1), secondary buttons use #999999 text (even worse contrast), low vision users report "can't read the text", automated accessibility audit flagged 47 contrast violations
- Missing ARIA labels on icon buttons - Icon-only buttons (Delete, Edit, Download, Close) have no text labels, screen reader announces "button" with no context, blind user in usability test couldn't understand what buttons do, had to guess or ask sighted person
- Color-only status indicators - Success = green, Error = red, Warning = yellow, no icons or patterns, 8% of male users (colorblind) can't distinguish red/green status, support tickets "can't tell if task succeeded or failed"
- Small touch targets on mobile - Buttons are 36px tall, checkboxes 20px, below WCAG 44px minimum, mobile users with motor disabilities report "can't tap the right button, keep tapping wrong thing", especially bad for elderly users
- Modals trap focus incorrectly - When modal opens, focus doesn't move to modal, keyboard users stuck behind modal, can tab to elements underneath, Escape key doesn't close modal, have to reload page to escape
- Form validation not announced - Error messages appear visually but screen reader not notified, blind users submit form, errors appear, but they don't know because screen reader silent, no ARIA live regions
- Data tables not keyboard navigable - Can't sort columns with keyboard, can't select rows, screen readers don't announce table structure (headers, row/column counts), totally unusable for blind users

Team context:
- Accessibility knowledge: Beginner (team knows it's important but limited experience, no accessibility expert on team)
- Legal requirement: WCAG 2.1 AA compliance required for enterprise sales (in contracts)
- Audit: Failed third-party accessibility audit (enterprise customer requirement), have 3 months to remediate
- Budget: $5,000 for tools/training (can buy JAWS license if needed, training courses, consulting)
- Timeline: 3 months to achieve AA compliance (aggressive but necessary for enterprise deal)
- Testing: Can test with VoiceOver (Mac) and NVDA (Windows), have axe DevTools
- Team size: 3 designers, 5 developers, all need accessibility training

Please provide:
1. WCAG 2.1 AA requirements (contrast ratios, text sizes, touch targets, semantic HTML)
2. Keyboard navigation patterns (tab order, focus management, shortcuts, focus traps, skip links)
3. Screen reader optimization (ARIA labels, roles, live regions, semantic HTML, announcements)
4. Focus indicator design (visible rings, high contrast, custom styling, states)
5. Accessible color strategies (contrast ratios, colorblind palettes, pattern + color redundancy)
6. Touch target sizing (44px minimum, spacing, mobile considerations)
7. Component-specific patterns (accessible buttons, forms, modals, navigation, tables)
8. Testing methods (VoiceOver, NVDA, JAWS, keyboard-only, automated tools)

Consider: WCAG 2.1 AA compliance required (legal). 3-month deadline (enterprise deal). Team has limited accessibility experience (need training). Can test with VoiceOver, NVDA, axe DevTools. 25 components to fix. Must support keyboard-only, screen readers, colorblind users, motor disabilities. Mobile-friendly (44px touch targets).
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Never remove outlines: Removing focus indicators (outline: none) without replacing them is an accessibility violation
✦ Common mistake: Using color alone to convey meaning - always add icons, patterns, or text for colorblind users
✦ Best with: Claude (excellent at WCAG compliance details, ARIA patterns), ChatGPT (good for code examples)
✦ Remix it: "Make this button accessible - keyboard navigation, screen reader label, 44px touch target, visible focus ring"
✦ Pro move: Ask "Audit my component for WCAG 2.1 AA compliance - check contrast, keyboard access, ARIA labels, touch targets"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Make these buttons accessible - add ARIA labels for icon buttons, 44px height, visible focus indicators, keyboard support"
- "Fix form accessibility - associate labels with inputs, add ARIA attributes, error announcements, proper validation"
- "Create accessible modal - focus trap, ARIA roles, keyboard navigation, Escape to close, focus management"
- "Audit color contrast for WCAG AA - check all text and UI components, provide compliant color alternatives"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![64_Example_Output.png](64_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**
→ Recipe #62: [Plan and Run Usability Tests](R-62%20Plan%20and%20Run%20Usability%20Tests%2037867ccc6bef83a9aefe011022174a00.md)
→ Recipe #07: [Find Hidden User Dead-Ends](R-07%20Find%20Hidden%20User%20Dead-Ends%202d667ccc6bef806b890bc2048285b3fa.md)
→ Recipe #42: [Improve Onboarding Flows](R-42%20Improve%20Onboarding%20Flows%202d767ccc6bef80f2b6b2c8839d98fe10.md)

</aside>