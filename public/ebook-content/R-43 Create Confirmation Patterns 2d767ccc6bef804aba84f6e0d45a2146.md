# R-43: Create Confirmation Patterns

# Recipe #43: Create Confirmation Patterns

Category: UI & Visuals  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning feedback patterns for completed actions - users perform tasks but don't know if they succeeded, can't undo mistakes, or miss success confirmations. Current confirmations are missing, too subtle, or require extra clicks to dismiss.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications provide poor action feedback - no confirmation after critical actions (did my payment go through?), generic "Success!" messages with no context, no undo option after destructive actions, success messages that disappear too quickly to read, or blocking modals for simple confirmations. Users delete items accidentally with no recovery, complete tasks without satisfying feedback, or click "Save" multiple times unsure if it worked. You need confirmation patterns that are noticeable but not disruptive, provide specific feedback, enable undo for mistakes, and celebrate meaningful achievements.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide confirmation type recommendations matched to action criticality (inline auto-save indicators for frequent edits, toasts with 10-second undo for reversible destructive actions, modals for high-stakes team-affecting decisions), specific success message content avoiding generic "Success!" in favor of contextual feedback, comprehensive undo/recovery patterns including bulk undo and 30-day trash recovery, timing specifications (4-6s standard toast, 10s undo toast with progress bar), visual celebration patterns for achievements with animations and haptic feedback, error recovery with retry options and offline action queuing, mobile-optimized patterns with haptic feedback and swipe actions, and complete accessibility including ARIA live regions and keyboard shortcuts. Optionally includes confirmation pattern specifications.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Interaction Designer specializing in feedback patterns, confirmations, and user confidence building.

I'm designing confirmation patterns for a [Product Type] to give users confidence their actions succeeded and allow recovery from mistakes.

[OPTIONAL: Attach screenshots showing current confirmation patterns or lack thereof]

Confirmation requirements:
- Action types: [e.g., Save changes, Delete items, Send messages, Complete tasks, Make payments]
- Action criticality: [e.g., Reversible vs. irreversible, High-stakes vs. low-stakes]
- Action frequency: [e.g., Multiple times per minute, Few times per session, Rare]
- User context: [e.g., Focused work, Quick actions, Critical workflows]
- Device usage: [e.g., 60% desktop, 40% mobile]

Current confirmation problems:
- [Problem 1: e.g., No confirmation after saving - users unsure if changes were saved]
- [Problem 2: e.g., Delete has no undo - accidental deletes lose work permanently]
- [Problem 3: e.g., Success toast disappears in 1 second - users miss confirmation]
- [Problem 4: e.g., Generic "Success!" - doesn't say what succeeded]
- [Problem 5: e.g., Modal for every action - "File saved. Click OK to continue" is disruptive]

User context: [What actions need confirmation, risk of errors, importance of undo]

Please provide:
1. Confirmation type recommendations (toast, banner, inline, modal, page-level)
2. Success message content (specific vs. generic)
3. Undo/recovery patterns
4. Timing and persistence (auto-dismiss vs. manual)
5. Visual celebration for achievements
6. Error recovery after failed actions
7. Mobile confirmation patterns
8. Accessibility for confirmations

Consider: [Constraints - e.g., Must allow undo for deletes, can't block workflow, different confirmation levels for different actions, offline action confirmation]
```

💡 What to customize:

- [Product Type] = E-commerce, Project management, Email client, Banking app, Social platform
- [Action types] = What users do in your app
- [Action criticality] = Reversible vs. permanent
- [Action frequency] = How often actions occur
- [Problems 1-5] = Current confirmation issues
- Upload screenshots showing current confirmations
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Interaction Designer specializing in feedback patterns, confirmations, and user confidence building.

I'm designing confirmation patterns for a Task Management Application to give users confidence their actions succeeded and allow recovery from mistakes.

[User would attach confirmation screenshots here]

Confirmation requirements:
- Action types:
  - Create task (frequent - 20+ times per day)
  - Complete task (frequent - 10-20 times per day)
  - Delete task (occasional - 2-5 times per day)
  - Edit task details (frequent - 30+ times per day)
  - Assign task to team member (occasional - 5-10 times per day)
  - Upload file attachment (occasional)
  - Move task to different project (occasional)
  - Archive completed project (rare - once per month)
- Action criticality:
  - High-stakes: Delete task (permanent), Archive project (affects team)
  - Medium-stakes: Assign task (affects others), Move task (changes context)
  - Low-stakes: Complete task (reversible), Edit details (reversible)
- Action frequency:
  - Edits: 50-100 times per session (very frequent)
  - Task completion: 10-20 times per session
  - Deletes: 2-5 times per session
  - Project archive: Rare (monthly)
- User context:
  - Fast-paced work - users completing many tasks quickly
  - Mistakes happen - accidental deletes, wrong assignments
  - Confidence critical - "Did my edit save?" anxiety
  - Mobile users: Quick task completions on the go
- Device usage: 60% desktop, 40% mobile

Current confirmation problems:
- No confirmation after editing task - users type changes, click away, unsure if auto-save worked or changes were lost
- Delete task has no undo - clicking delete permanently removes task with all comments, attachments, history - accidental deletes lose hours of work
- Task completion shows generic toast "Success!" that disappears in 1 second - users marking 10 tasks complete miss which tasks were marked
- Every action shows blocking modal: "Task saved. Click OK to continue." - disrupts flow when editing 50+ tasks per session
- Archive project (affecting 10 team members) has same confirmation as completing single task - no indication of impact
- File upload shows no progress or success feedback - users upload 5 files, don't know if all succeeded
- Mobile task completion has no feedback - tap checkmark, nothing happens visually (did it work?)

User context: Power users complete 50+ tasks daily in rapid succession. Accidental deletes happen 2-3 times per week (expensive mistake). Auto-save creates uncertainty - "Did it save?" Users want satisfying feedback when completing tasks (dopamine hit). Mobile users need quick visual confirmation. Team actions (assign, archive) affect others - need clear communication. Offline work common - need confirmation when actions sync.

Please provide:
1. Confirmation type recommendations (toast, banner, inline, modal, page-level)
2. Success message content (specific vs. generic)
3. Undo/recovery patterns
4. Timing and persistence (auto-dismiss vs. manual)
5. Visual celebration for achievements
6. Error recovery after failed actions
7. Mobile confirmation patterns
8. Accessibility for confirmations

Consider: Frequent actions (edits) need subtle confirmation. Destructive actions (delete) need undo option. Task completion should feel rewarding. Can't block workflow with modals. Mobile needs visible feedback. Offline actions need to confirm when synced. Different confirmation weight for different criticality.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Undo beats confirmation: For reversible actions, allow undo instead of asking "Are you sure?" first
✦ Common mistake: Generic "Success!" - always specify what succeeded ("Task 'Homepage' completed")
✦ Best with: Claude (excellent at undo patterns), ChatGPT (good for celebration micro-interactions)
✦ Remix it: "Design the undo history - show last 10 actions with one-click undo for each"
✦ Pro move: Ask "Create the offline action queue - show pending actions, confirm when synced"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the undo toast system - how long to show, progress bar, keyboard shortcuts"
- "Create celebration animations for milestones - task completion, project shipped, team goals"
- "How should bulk actions confirm - 'Delete 50 tasks' with undo vs. confirmation modal?"
- "Design the auto-save indicator - subtle feedback that changes were saved without disrupting flow"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![43_Example_Output.png](43_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #27: [Design Smooth Interactions](R-27%20Design%20Smooth%20Interactions%202d767ccc6bef80979ab0f6fc70dc611e.md)
→ Recipe #40: [Design Better Modals](R-40%20Design%20Better%20Modals%202d767ccc6bef800d9012d412a0122f53.md)
→ Recipe #41: [Design Alerts](R-41%20Design%20Alerts%202d767ccc6bef80cfb82fd8f83c76b743.md)
→ Recipe #42: [Improve Onboarding Flows](R-42%20Improve%20Onboarding%20Flows%202d767ccc6bef80f2b6b2c8839d98fe10.md)

</aside>