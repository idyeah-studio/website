# R-09: Move Desktop to Mobile

# Recipe #9: Move Desktop to Mobile

Category: Wireframing & IA  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning a desktop-first application for mobile devices. The existing desktop UI has complex layouts, multiple columns, hover states, and dense information that doesn't translate well to small screens. You need a strategy to adapt the experience without removing critical functionality.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Legacy applications were built for desktop and treat mobile as an afterthought - often just shrinking everything down or hiding features behind hamburger menus. Desktop layouts with sidebars, data tables, multi-column grids, and hover interactions break on mobile. Users complain features are "missing" or "unusable" on phones. Your redesign must maintain functionality while respecting mobile constraints: smaller screens, touch targets, thumb reach zones, and no hover states.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a mobile layout structure with single column and collapsible sections, navigation pattern recommendations (bottom vs. top), and content stacking strategy. You'll get a feature adaptation plan prioritizing primary actions for visibility and secondary actions behind menus, interaction pattern replacements for hover states (touch gestures, tap-and-hold, modal sheets), data display strategies for tables and lists (horizontal scroll, cards, expandables), touch target specifications (44px minimum, thumb-reach zones, spacing), and progressive enhancement approach balancing mobile-first features with desktop additions. Optional side-by-side wireframes show the complete adaptation.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Mobile UX Designer specializing in responsive design and mobile adaptation.

I'm adapting a [Desktop Screen Type] to mobile and need to maintain functionality while respecting mobile constraints.

[OPTIONAL: Attach screenshot of desktop version]

Desktop screen characteristics:
- Layout: [e.g., Sidebar + main content + right panel, 3-column grid]
- Key features: [List important features/actions]
- Interactive elements: [e.g., Hover menus, drag-and-drop, multi-select]
- Data density: [e.g., Table with 12 columns, Dashboard with 15 metrics]

Mobile constraints:
- Screen width: [e.g., 375px - 428px typical]
- Primary users: [e.g., 60% of traffic on mobile]
- Use cases: [What users do on mobile vs desktop]

User context: [How mobile usage differs from desktop usage]

Please suggest:
1. Layout adaptation strategy (what stays, what moves, what changes)
2. Navigation pattern for mobile (tab bar, hamburger, hybrid)
3. Content prioritization (what to show first on mobile)
4. Touch interaction replacements for hover states
5. Data table/complex UI mobile alternatives
6. Thumb-reach zone optimization
7. Progressive enhancement approach

Consider: [Constraints - e.g., Must maintain feature parity, some features more important on mobile, performance on slower connections]
```

💡 What to customize:

- [Desktop Screen Type] = Dashboard, Data table, Settings page, Multi-column layout, Admin panel
- [Layout] = Your current desktop structure
- [Key features] = Critical functionality that must work on mobile
- [Interactive elements] = Desktop-specific interactions to adapt
- [Data density] = How much information is shown
- [Use cases] = How mobile usage differs from desktop
- Upload screenshot of desktop version for specific adaptation recommendations
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Mobile UX Designer specializing in responsive design and mobile adaptation.

I'm adapting a Project Dashboard Screen to mobile and need to maintain functionality while respecting mobile constraints.

[User would attach screenshot of desktop dashboard here]

Desktop screen characteristics:
- Layout: Left sidebar (240px) with project list, main area (800px) with task board (4 columns), right panel (200px) with team members and activity feed
- Key features: Create task, assign to team, drag tasks between columns, filter by assignee, view task details, comment on tasks
- Interactive elements: Drag-and-drop task cards, hover to preview task, right-click context menus, multi-select for bulk actions
- Data density: 4-column kanban board showing 20+ task cards, team panel showing 8 members with avatars, activity feed showing 10 recent updates

Mobile constraints:
- Screen width: 375px - 428px typical (iPhone/Android)
- Primary users: 45% of daily active users on mobile
- Use cases: Mobile users primarily check status, add quick tasks, and comment - they rarely reorganize boards or do bulk actions

User context: Team members check project status throughout the day on mobile while away from desk. They need quick access to their assigned tasks and ability to update status. Deep project planning happens on desktop.

Please suggest:
1. Layout adaptation strategy (what stays, what moves, what changes)
2. Navigation pattern for mobile (tab bar, hamburger, hybrid)
3. Content prioritization (what to show first on mobile)
4. Touch interaction replacements for hover states
5. Data table/complex UI mobile alternatives
6. Thumb-reach zone optimization
7. Progressive enhancement approach

Consider: Drag-and-drop is critical for desktop users but difficult on mobile - need alternative. Must show all 4 kanban columns but fit in 375px width. Team panel and activity feed are important but secondary on mobile. Task creation must be fast (one tap).
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Mobile is not just "smaller desktop": Different use cases mean different priorities - ask AI to recommend mobile-specific features
✦ Common mistake: Hiding everything in hamburger menus - critical actions should be visible and thumb-reachable
✦ Best with: Claude (excellent at prioritization and trade-off analysis), ChatGPT (good for interaction pattern suggestions)
✦ Remix it: "Now show me the tablet (768px) version - what's different from mobile and desktop?"
✦ Pro move: Ask "Design the offline/low-bandwidth experience for mobile - what works without full internet?"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create a gesture guide for mobile users: swipe left = delete, swipe right = archive, etc."
- "Design the mobile-specific quick actions - what can users do with one tap from home screen?"
- "How should this adapt for landscape orientation on mobile?"
- "Generate a component priority matrix: which desktop components translate 1:1, which need redesign, which get removed?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![9_Example_Output.png](9_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #01: [Plan Your Page Layout](R-01%20Plan%20Your%20Page%20Layout%202d667ccc6bef8044941beb6a5c872b37.md)
→ Recipe #04: [Design Multi-Step Flows](R-04%20Design%20Multi-Step%20Flows%202d667ccc6bef806f9f3be9cdaefa9a9e.md)
→ Recipe #08: [Create Clear Path-Finding](R-08%20Create%20Clear%20Path%20Finding%202d667ccc6bef80f7a748e543ab0cfc40.md)

</aside>