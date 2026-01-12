# R-04: Design Multi-Step Flows

# Recipe #4: Design Multi-Step Flows

Category: Wireframing & IA  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning a complex process that requires multiple steps - onboarding, checkout, form submissions, account setup, or data imports. Users are dropping off mid-flow or getting confused about where they are in the process.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Multi-step processes in legacy applications often grew organically - a step added here, a field inserted there. The result: unclear progress indicators, inconsistent step lengths, no way to go back and edit, or worse - users lose their work. You need to redesign the flow to reduce friction, prevent abandonment, and handle edge cases like errors, saving drafts, and skipping optional steps.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide:

- Recommended step structure (how to group and sequence information)
- Progress indicator design (linear, stepped, percentage, or custom)
- Navigation strategy (back button behavior, edit previous steps, save and resume)
- Validation approach (inline, per-step, or final review)
- Error prevention tactics
- Mobile optimization recommendations
- Edge case handling (skipping steps, partial completion, session timeout)
- Optional: Flow diagram or step-by-step wireframe description
</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Flow Designer specializing in multi-step processes.

I'm redesigning a [Process Type] that currently has [Number] steps and users are experiencing [Main Problem].

[OPTIONAL: Attach screenshots of current flow or flowchart]

Current flow issues:
- [Issue 1: e.g., Users don't know how many steps remain]
- [Issue 2: e.g., Can't go back to edit previous steps]
- [Issue 3: e.g., Form validation only shows errors at the end]

User context: [Who completes this flow and under what circumstances]

Please suggest:
1. Optimal number of steps and how to group information
2. Progress indication strategy
3. Navigation patterns (back, skip, save draft)
4. Error handling and validation approach
5. Mobile considerations

Consider: [Constraints - e.g., Must collect 20 fields, legal requirements, optional vs. required steps]
```

💡 What to customize:

- [Process Type] = Onboarding, Checkout, Application form, Setup wizard, Data import
- [Number] = Your current step count
- [Main Problem] = Drop-off rates, confusion, errors, abandonment at specific step
- [Issue 1-3] = Specific pain points from analytics or user feedback
- Upload screenshots of current flow or user journey map for better analysis
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Flow Designer specializing in multi-step processes.

I'm redesigning a Patient Appointment Booking flow that currently has 7 steps and users are abandoning at step 4 (insurance information).

[User would attach screenshots here]

Current flow issues:
- Users don't know they need insurance info until step 4, then abandon to find their card
- No way to save progress and come back later
- Step 3 (selecting doctor) takes 2 minutes, but if they go back to change date/time, they lose their doctor selection
- Mobile users complain the flow feels endless

User context: Patients booking medical appointments, often while multitasking or on mobile. They need to select appointment type, date, time, doctor, provide personal info, and insurance details. 60% are on mobile.

Please suggest:
1. Optimal number of steps and how to group information
2. Progress indication strategy
3. Navigation patterns (back, skip, save draft)
4. Error handling and validation approach
5. Mobile considerations

Consider: Insurance is optional for self-pay patients. Doctor selection requires seeing photos and bios. Legal requirement to collect certain personal info. Average completion time should be under 5 minutes.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Provide drop-off data: If you know where users abandon, mention it - AI will focus solutions there
✦ Common mistake: Asking "how many steps should this be?" without listing what data you need to collect
✦ Best with: Claude (excels at analyzing complex flows and edge cases), ChatGPT o1 (for flows with multiple user paths)
✦ Remix it: "Now show me a progressive disclosure version where it feels like 2 steps but collects the same data"
✦ Pro move: Follow up with "Create micro-copy for each step that explains why we need this info"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the 'Review & Confirm' final step that lets users edit any previous answer"
- "What happens if a user closes the browser at step 3? Design the 'resume flow' experience"
- "Create a mobile-first version of this flow optimized for thumb-friendly interaction"
- "How would this work as a conversational UI (one question at a time) instead of forms?"
</aside>

---

<aside>
💎

EXAMPLE OUTPUT

![4_Example_Output.png](4_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #01: [Plan Your Page Layout](R-01%20Plan%20Your%20Page%20Layout%202d667ccc6bef8044941beb6a5c872b37.md)
→ Recipe #8: [Create Clear Path-Finding](R-08%20Create%20Clear%20Path%20Finding%202d667ccc6bef80f7a748e543ab0cfc40.md)
→ Recipe #14: [Design Step-by-Step Wizards](R-14%20Design%20Step-by-Step%20Wizards%202d667ccc6bef80ce9486d0ade6250204.md)
→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)

</aside>