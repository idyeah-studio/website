# R-10: Modals vs. Side Panels

# Recipe #10: Modals vs. Side Panels

Category: Wireframing & IA  |  ⏱️ 20-25 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning interfaces that use overlays (modals, dialogs, side panels, drawers) and need to decide which pattern fits each use case. The current application uses modals for everything - or worse, inconsistently mixes patterns with no clear logic.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Legacy applications often default to modals for every overlay, regardless of use case. This creates problems: modals that should be side panels force users to lose context, side panels used where modals should be allow users to ignore critical decisions, and inconsistent patterns confuse users about what to expect. You need a decision framework to choose the right overlay pattern based on user task, content type, and interaction model.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a decision framework matrix distinguishing modals (blocking actions, critical decisions), side panels (reference content, context preservation), drawers (navigation, filters), popovers (quick actions), and bottom sheets (mobile). You'll get specific use case recommendations with rationale for each scenario, interaction patterns covering entry/exit animations and save/cancel behavior, accessibility specifications including focus traps and keyboard navigation, and mobile adaptations with full-screen modals versus bottom sheets. Optional visual comparison shows all overlay patterns with examples.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Designer specializing in UI patterns and information architecture.

I'm redesigning the overlay patterns for a [Product Type] and need to systematically decide when to use modals vs. side panels vs. other overlay patterns.

[OPTIONAL: Attach screenshots of current overlay usage]

Current overlay situations:
- Use case 1: [e.g., Editing user profile - currently a modal]
- Use case 2: [e.g., Viewing document details - currently a modal]
- Use case 3: [e.g., Creating new item with 15 fields - currently a modal]
- Use case 4: [e.g., Quick actions menu - currently a dropdown]
- Use case 5: [e.g., Notification center - currently a modal]

For each use case, consider:
- Task complexity: [Simple action vs. multi-step process]
- Context preservation: [Does user need to see underlying content?]
- Content length: [Short form vs. long scrolling content]
- User workflow: [Quick task vs. focused work]

Please provide:
1. Decision framework (when to use modal vs. side panel vs. drawer vs. popover)
2. Specific recommendation for each use case with rationale
3. Interaction patterns for each overlay type (open, close, save, discard)
4. Accessibility considerations
5. Mobile adaptations for each pattern

Consider: [Constraints - e.g., Must work on mobile, some users on small screens, need keyboard navigation]
```

💡 What to customize:

- [Product Type] = SaaS app, E-commerce site, Admin panel, CRM, Project management tool
- [Use cases 1-5] = Your actual overlay scenarios with current pattern used
- [Task complexity] = How complex each interaction is
- [Context preservation] = Whether users need to see/reference underlying content
- Upload screenshots showing current overlay implementations
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Designer specializing in UI patterns and information architecture.

I'm redesigning the overlay patterns for a CRM Platform and need to systematically decide when to use modals vs. side panels vs. other overlay patterns.

[User would attach screenshots here]

Current overlay situations:
- Use case 1: Creating new contact (8 fields: name, email, phone, company, title, tags, notes, source) - currently a centered modal that blocks full screen
- Use case 2: Viewing contact details (long scrolling profile with history, notes, deals, emails, calls) - currently a modal that users complain "loses my place in the list"
- Use case 3: Quick edit contact phone number - currently requires opening full edit modal with all 8 fields
- Use case 4: Bulk actions on selected contacts (export, tag, assign owner, delete) - currently a small modal
- Use case 5: Filters for contact list (12 filter options) - currently a left side panel that covers the list

For each use case, consider:
- Task complexity: Use case 1 & 2 are complex, use case 3 is simple, use case 4 is medium, use case 5 is ongoing
- Context preservation: Use case 2 & 5 need to see contact list, others don't
- Content length: Use case 2 is very long (scrolling), use case 5 is medium, others are short
- User workflow: Use case 3 is quick edit, use case 5 is iterative filtering, others are focused tasks

Please provide:
1. Decision framework (when to use modal vs. side panel vs. drawer vs. popover)
2. Specific recommendation for each use case with rationale
3. Interaction patterns for each overlay type (open, close, save, discard)
4. Accessibility considerations
5. Mobile adaptations for each pattern

Consider: Sales reps access CRM on laptops (1366px+) and tablets. They often multitask - need to reference contact details while updating deals. Quick actions should feel fast, not heavyweight. Mobile users primarily view contacts, rarely create/edit.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Context is king: If users need to see underlying content, it's probably a side panel, not a modal
✦ Common mistake: Using modals for everything because "it's simpler to code" - wrong pattern choice hurts UX
✦ Best with: Claude (excellent at pattern decision frameworks), ChatGPT (good for specific pattern recommendations)
✦ Remix it: "Now design the transition: when a side panel needs to become a modal mid-task"
✦ Pro move: Ask "Create a component naming convention that makes the pattern choice obvious to developers"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the 'unsaved changes' warning for each overlay type - when to show, how to handle"
- "How should nested overlays work? Can a modal open from a side panel?"
- "Create animation specs for each overlay type - duration, easing, direction"
- "What's the mobile strategy when desktop uses 3 different overlay patterns?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![10_Example_Output.png](10_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**
→ Recipe #40: [Design Better Modals](R-40%20Design%20Better%20Modals%202d767ccc6bef800d9012d412a0122f53.md)
→ Recipe #14: [Design Step-by-Step Wizards](R-14%20Design%20Step-by-Step%20Wizards%202d667ccc6bef80ce9486d0ade6250204.md)
→ Recipe #37: [Design Better Tooltips](R-37%20Design%20Better%20Tooltips%202d767ccc6bef804ea807db188f871c58.md)

</aside>