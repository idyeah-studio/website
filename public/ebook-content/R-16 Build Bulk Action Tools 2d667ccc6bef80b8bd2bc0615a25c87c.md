# R-16: Build Bulk Action Tools

# Recipe #16: Build Bulk Action Tools

Category: Wireframing & IA  |  ⏱️ 20-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning an interface where users need to perform actions on multiple items (emails, files, contacts, tasks, products) but currently must act on items one-by-one. Users complain about tedious repetitive actions and ask for "select all" functionality.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications often lack bulk action capabilities, forcing users to repeat the same action dozens or hundreds of times. Even when bulk actions exist, they're poorly designed - unclear selection states, hidden bulk action menus, no undo for destructive actions, or confusing "select all" that only selects the current page. Power users waste hours on repetitive tasks that should take seconds. You need to design intuitive, powerful bulk action patterns that feel safe and efficient.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide selection mechanisms including individual checkboxes, select all with current page versus all items distinction, shift-click range selection, and smart selection by criteria, selection feedback with visual highlighting and count indicators, bulk action UI patterns such as floating action bars, toolbars, dropdown menus, and context menus, destructive action safeguards featuring confirmation dialogs, preview, and undo capabilities, performance strategies with progress indicators and batch processing for large operations, selection persistence across pagination and filter changes, keyboard shortcuts for power users including select all and range selection, and mobile adaptation with long-press selection mode and bottom sheet actions. Optional wireframe showing bulk action UI states.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Designer specializing in data-heavy interfaces and bulk operations.

I'm designing bulk action functionality for a [Interface Type] where users need to perform actions on multiple [Item Type] at once.

[OPTIONAL: Attach screenshot of current interface showing item list]

Bulk action requirements:
- Items users work with: [e.g., Files, Contacts, Emails, Tasks, Products, Orders]
- Available bulk actions: [e.g., Delete, Archive, Tag, Move to folder, Assign to user, Export, Change status]
- Typical use cases: [e.g., "Delete 50 spam emails", "Tag 200 contacts as 'Conference leads'", "Move 30 files to archive folder"]
- Item count range: [e.g., Users typically have 100-10,000 items, act on 10-500 at once]

Current problems:
- [Problem 1: e.g., No bulk actions exist - users must click each item individually]
- [Problem 2: e.g., Select all only selects current page (20 items), not all 500 matching items]
- [Problem 3: e.g., Bulk delete has no confirmation - users accidentally delete important items]
- [Problem 4: e.g., Can't see which items are selected when scrolling long lists]

User context: [Who performs bulk actions, how often, what workflows]

Please provide:
1. Selection mechanism (checkboxes, shift-click, select all, smart selection)
2. Selection feedback (how to show what's selected, count indicator)
3. Bulk action UI pattern (toolbar, dropdown, context menu, floating action bar)
4. Destructive action safeguards (confirmation, undo, preview)
5. Performance considerations (handling large selections)
6. Selection persistence (across pages, filters, searches)
7. Keyboard shortcuts for power users
8. Mobile bulk action adaptation

Consider: [Constraints - e.g., Must handle selections of 1000+ items, some actions take time to process, mixed item types with different available actions]
```

💡 What to customize:

- [Interface Type] = Email client, File manager, CRM, E-commerce admin, Task manager, Content management system
- [Item Type] = What users are selecting (files, emails, contacts, etc.)
- [Available bulk actions] = List all possible bulk actions
- [Typical use cases] = Real user workflows requiring bulk actions
- [Item count range] = Scale of data users work with
- [Problems 1-4] = Current bulk action pain points
- Upload screenshot of current interface for specific recommendations
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Designer specializing in data-heavy interfaces and bulk operations.

I'm designing bulk action functionality for a Customer Support Ticket System where agents need to perform actions on multiple support tickets at once.

[User would attach screenshot here]

Bulk action requirements:
- Items users work with: Support tickets (each with ID, subject, customer, status, priority, assigned agent, tags)
- Available bulk actions: 
  - Assign to agent (dropdown with team member list)
  - Change status (Open, In Progress, Waiting, Resolved, Closed)
  - Change priority (Low, Normal, High, Urgent)
  - Add tags (multi-select from tag library)
  - Merge tickets (combine related tickets)
  - Export to CSV
  - Archive
  - Delete (destructive - admin only)
- Typical use cases:
  - "Assign all 25 urgent tickets from VIP customers to senior agent"
  - "Archive 200+ resolved tickets from last month"
  - "Tag 50 billing-related tickets for reporting"
  - "Change status of 15 tickets to 'Waiting on Customer'"
- Item count range: Agents see 50-500 tickets daily, frequently act on 10-100 at once

Current problems:
- No bulk actions at all - agents must open each ticket individually, change status, save, go back, repeat 50 times
- Users try to use checkboxes (which exist) but can't find bulk action menu afterward
- "Select all" checkbox in header is unclear - does it select all 500 tickets or just the 25 on current page?
- When users apply filters ("show only urgent tickets"), select all, then change filter, they lose their selection
- No visual feedback when items are selected - checkbox checked but no highlight or count
- Destructive actions (delete, archive) have no confirmation - accidents happen frequently

User context: Support agents handle 20-50 tickets per day. They frequently need to triage batches of tickets (assign to team, update status). Senior agents clean up old tickets weekly (bulk archive). Power users want keyboard shortcuts. 30% of agents use tablets for ticket triage.

Please provide:
1. Selection mechanism (checkboxes, shift-click, select all, smart selection)
2. Selection feedback (how to show what's selected, count indicator)
3. Bulk action UI pattern (toolbar, dropdown, context menu, floating action bar)
4. Destructive action safeguards (confirmation, undo, preview)
5. Performance considerations (handling large selections)
6. Selection persistence (across pages, filters, searches)
7. Keyboard shortcuts for power users
8. Mobile bulk action adaptation

Consider: Some actions are role-restricted (only managers can delete). Agents often work across multiple pages/filters while maintaining selection. Bulk assign needs agent availability info. Large bulk operations (archiving 500 tickets) may take 10+ seconds. Undo is critical for accidental bulk actions.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Make selection obvious: Highlight selected rows, show count, make it impossible to miss what's selected
✦ Common mistake: "Select all" that only selects current page - clarify with "Select all 500 items" option
✦ Best with: Claude (excellent at complex selection logic and edge cases), ChatGPT (good for UI patterns)
✦ Remix it: "Design the smart selection: 'Select all urgent tickets from VIP customers assigned to me'"
✦ Pro move: Ask "Create the undo system - how do we safely reverse bulk delete of 200 items?"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the confirmation dialog for bulk delete - what info to show to prevent accidents?"
- "How should bulk actions work when user has mixed permissions (can edit some items, not others)?"
- "Create the progress indicator for slow bulk operations - how to show which items are processed?"
- "What happens if bulk action fails on some items but succeeds on others? Design the error handling."
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![16_Example_Output.png](16_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #02: [Fix Cluttered Data Views](R-02%20Fix%20Cluttered%20Data%20Views%202d667ccc6bef80cb97c4fcafda955f11.md)
→ Recipe #06: [Design Search & Filters](R-06%20Design%20Search%20&%20Filters%202d667ccc6bef805ca459de3061219cd3.md)
→ Recipe #11: [Right-Click Menus](R-11%20Right-Click%20Menus%202d667ccc6bef80cb98c8cde92785b136.md)
→ Recipe #17: [Design Comparison Tables](R-17%20Design%20Comparison%20Tables%202d667ccc6bef80b2b6b4d90575a87d67.md)

</aside>