# R-40: Design Better Modals

# Recipe #40: Design Better Modals

Category: UI & Visuals  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning modal dialogs that feel intrusive, confusing, or hard to dismiss - modals that interrupt workflows, have unclear actions, trap users, or don't work well on mobile. Users struggle to complete tasks or accidentally close modals losing their work.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have poorly designed modals - appearing without warning and interrupting workflows, unclear what action to take (which button is primary?), no way to close without choosing an action, destructive actions (delete) not clearly differentiated from safe actions, modals too large covering entire screen, no ability to close by clicking outside or pressing Escape, and mobile modals that are full-screen nightmares. Users lose unsaved work when accidentally closing, can't figure out how to dismiss confirmation dialogs, or get trapped in modal flows. You need modals that communicate purpose clearly, make primary actions obvious, provide multiple ways to close, and adapt gracefully to mobile.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide guidance on when to use modals versus alternatives like inline editing or dedicated pages, modal sizing specifications (small 400-500px, medium 600-700px, large 800-900px) with responsive positioning, action button hierarchy with RED buttons for destructive actions and clear primary/secondary distinctions, multiple close mechanisms (X button, Cancel, backdrop click, Escape key), mobile-optimized bottom sheet patterns with swipe-to-dismiss, complete accessibility requirements including focus trap and ARIA attributes, content guidelines with action-oriented titles explaining consequences, and smooth entry/exit animations. Optionally includes modal component specifications and states.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UI Pattern Designer specializing in modal dialogs, overlays, and user flow interruptions.

I'm designing modal patterns for a [Product Type] to handle [Modal Purpose] without frustrating users.

[OPTIONAL: Attach screenshots showing current modal designs]

Modal requirements:
- Modal purposes: [e.g., Confirmations, Forms, Previews, Alerts, Multi-step flows]
- Content complexity: [e.g., Simple yes/no, Data entry forms, Complex wizards]
- Frequency: [e.g., Rare critical actions, Common workflows, Occasional confirmations]
- User context: [e.g., In middle of task, Quick action needed, Decision required]
- Device usage: [e.g., 60% desktop, 40% mobile]

Current modal problems:
- [Problem 1: e.g., Modal appears suddenly interrupting workflow - no warning or context]
- [Problem 2: e.g., Two buttons "OK" and "Cancel" - unclear which is primary action]
- [Problem 3: e.g., Can't close modal by clicking backdrop - forces button choice]
- [Problem 4: e.g., Delete confirmation looks identical to save confirmation - dangerous]
- [Problem 5: e.g., Modal is full-screen on mobile - feels like new page, disorienting]

User context: [When modals appear, what users are doing, urgency level]

Please provide:
1. When to use modals vs. alternatives (inline, new page, drawer)
2. Modal sizing and positioning
3. Action button hierarchy (primary, secondary, destructive)
4. Close mechanisms (X, Cancel, backdrop, Escape)
5. Backdrop/overlay design
6. Mobile modal patterns
7. Accessibility requirements (focus trap, keyboard nav)
8. Content and messaging guidelines

Consider: [Constraints - e.g., Must preserve user input on accidental close, destructive actions need extra protection, mobile users need easy dismissal, keyboard users need full access]
```

💡 What to customize:

- [Product Type] = Admin panel, E-commerce, Banking app, Social platform, Productivity tool
- [Modal Purpose] = What modals are used for
- [Content complexity] = Simple to complex modal content
- [Frequency] = How often users see modals
- [Problems 1-5] = Current modal design issues
- Upload screenshots showing current modal designs
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UI Pattern Designer specializing in modal dialogs, overlays, and user flow interruptions.

I'm designing modal patterns for a Project Management Application to handle confirmations, forms, and destructive actions without frustrating users.

[User would attach modal screenshots here]

Modal requirements:
- Modal purposes:
  - Delete confirmations (tasks, projects, comments - permanent)
  - Edit forms (task details, project settings)
  - Share dialogs (invite team members, share links)
  - Alerts/warnings (storage limit, payment failed)
  - Multi-step wizards (project setup, import data)
  - Preview/details (task details, file preview)
- Content complexity:
  - Simple: Yes/no confirmations (2 buttons)
  - Moderate: Forms with 5-8 fields
  - Complex: Multi-step wizards (3-5 steps)
- Frequency:
  - Delete confirmations: 5-10 times per session
  - Edit forms: 20-30 times per session
  - Alerts: Rare (once per week)
  - Share dialogs: 2-3 times per session
- User context: 
  - Often in middle of focused work (editing tasks)
  - Quick actions needed (mark complete, assign)
  - Critical decisions (delete project with 50 tasks)
- Device usage: 65% desktop, 35% mobile/tablet

Current modal problems:
- Modals appear instantly without animation - suddenly covers work, jarring and disorienting
- Delete confirmation has "Delete" and "Cancel" buttons same size/color - users accidentally delete (no visual warning it's destructive)
- No way to close modal by clicking outside/backdrop - must click "Cancel" button, feels trapped
- Task edit modal is 800px wide covering 70% of screen on laptop - can't see context of what you're editing
- Mobile modals are full-screen sheets - look like new page, users forget they're in modal, hit back button and lose work
- Delete project confirmation says "Are you sure?" - doesn't explain consequences (50 tasks, 10 team members will lose access)
- No Escape key support - keyboard users must Tab to Cancel button
- When user accidentally closes modal with unsaved changes, all input is lost - no "are you sure?" warning

User context: Users delete items 10-20 times per day (old tasks, duplicate items). Accidental deletes happen 2-3 times per week (expensive - work lost). Edit forms used constantly - any friction multiplies. Mobile users manage tasks on the go - need quick access. Power users use keyboard heavily - Escape should close, Enter should submit. Some modals appear during async operations (sharing while uploading) - must not block other work.

Please provide:
1. When to use modals vs. alternatives (inline, new page, drawer)
2. Modal sizing and positioning
3. Action button hierarchy (primary, secondary, destructive)
4. Close mechanisms (X, Cancel, backdrop, Escape)
5. Backdrop/overlay design
6. Mobile modal patterns
7. Accessibility requirements (focus trap, keyboard nav)
8. Content and messaging guidelines

Consider: Destructive actions (delete) need clear visual warning. Unsaved changes should warn before closing. Mobile modals should feel like dialogs not pages. Multiple ways to close (X, Cancel, Escape, backdrop). Primary action visually obvious. Large modals shouldn't cover entire screen. Animation for context. Keyboard navigation essential.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Destructive actions need RED buttons: Color-code delete/remove actions - visual warning prevents accidents
✦ Common mistake: No way to close except clicking button - always provide X, Escape, and backdrop click
✦ Best with: Claude (excellent at modal UX patterns), ChatGPT (good for accessibility requirements)
✦ Remix it: "Design the unsaved changes warning - modal warns before closing with user data"
✦ Pro move: Ask "Create the modal state system - all modal types with proper sizing, buttons, messaging"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the destructive action confirmation - how to warn users before permanent deletes"
- "Create the mobile bottom sheet pattern - native-feeling modals for touch devices"
- "How should modals handle unsaved changes - warn before closing, auto-save, or discard?"
- "Design the multi-step modal wizard - progress indicator, navigation, validation"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![40_Example_Output.png](40_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #27: [Design Smooth Interactions](R-27%20Design%20Smooth%20Interactions%202d767ccc6bef80979ab0f6fc70dc611e.md)
→ Recipe #34: [Polish Your Input Fields](R-34%20Polish%20Your%20Input%20Fields%202d767ccc6bef806aa554c4a058472a9b.md)
→ Recipe #37: [Design Better Tooltips](R-37%20Design%20Better%20Tooltips%202d767ccc6bef804ea807db188f871c58.md)

</aside>