# R-03: Organize Your Main Navigation

# Recipe #3: Organize Your Main Navigation

Category: Wireframing & IA  |  ⏱️ 20-25 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning an application with sprawling navigation - too many menu items, unclear groupings, or multiple navigation patterns competing with each other. Users struggle to find features and navigation feels overwhelming.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Applications evolve over time, and navigation often becomes a dumping ground for new features. What started as 5 clean menu items balloons to 20+ options with no clear logic. Teams add secondary navs, mega menus, and sidebars without a cohesive strategy. Users are lost, and stakeholders resist removing "their" menu item.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide:

- Navigation grouping strategy (logical categories for your items)
- Recommended navigation pattern (sidebar vs. top nav vs. hybrid)
- Item prioritization (primary vs. secondary vs. tertiary)
- Labeling improvements for clarity
- Treatment for power user features (settings, admin, advanced tools)
- Mobile navigation recommendations
- Optional: ASCII sitemap or navigation tree
</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Information Architect specializing in navigation systems.

I'm redesigning the main navigation for a [Product Type] that has become cluttered over time.

[OPTIONAL: Attach screenshot of current navigation]

Current situation:
- Number of top-level items: [e.g., 15 items]
- Navigation patterns used: [e.g., Top nav + sidebar + tabs]
- Key user complaint: [e.g., "Can't find settings"]

User context: [Primary user types and their main tasks]

Please suggest:
1. Menu item categorization and grouping strategy
2. Optimal navigation pattern for this use case
3. Priority hierarchy (what stays visible vs. what gets nested)
4. How to handle edge cases and power user features

Consider: [Constraints - e.g., Must support 3 user roles, mobile-first]
```

💡 What to customize:

- [Product Type] = SaaS dashboard, E-commerce site, Mobile app, Admin panel
- [Number of items] = Your actual menu count
- [Navigation patterns] = Top bar, sidebar, hamburger, tabs, breadcrumbs
- [User complaint] = Actual feedback or usability issues
- Upload screenshot of current navigation for targeted recommendations
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Information Architect specializing in navigation systems.

I'm redesigning the main navigation for a Project Management SaaS that has become cluttered over time.

[User would attach screenshot here]

Current situation:
- Number of top-level items: 18 items in sidebar navigation
- Navigation patterns used: Persistent sidebar + top utility nav + in-page tabs
- Key user complaint: "Takes too long to find where to create a new task"

User context: Teams of 5-50 people managing multiple projects. Primary tasks are creating tasks, viewing project status, and collaborating with team members. Power users need access to reports, settings, and integrations.

Please suggest:
1. Menu item categorization and grouping strategy
2. Optimal navigation pattern for this use case
3. Priority hierarchy (what stays visible vs. what gets nested)
4. How to handle edge cases and power user features

Consider: Must work seamlessly on desktop and tablet. Free tier users see 8 items, paid users see 18. Mobile uses separate simplified nav.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Include your full menu list: The more complete your item list, the better the categorization suggestions
✦ Common mistake: Asking for "best practices" without context - every product's navigation needs are different
✦ Best with: Claude (excellent at complex categorization and trade-off analysis), ChatGPT o1 (for multi-role navigation systems)
✦ Remix it: "Show me 3 approaches: minimalist (hide everything), balanced, power-user (everything visible)"
✦ Pro move: After getting recommendations, ask "Create card sorting categories I can test with users"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Generate labels for these categories that are clearer than our current naming"
- "How should this navigation adapt from desktop (1440px) to mobile (375px)?"
- "Create a migration plan - which items to move first without breaking user expectations"
- "Design a search-first navigation alternative for this structure"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![3_Example_Output.png](3_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #01: [Plan Your Page Layout](R-01%20Plan%20Your%20Page%20Layout%202d667ccc6bef8044941beb6a5c872b37.md)
→ Recipe #8: [Create Clear Path-Finding](R-08%20Create%20Clear%20Path%20Finding%202d667ccc6bef80f7a748e543ab0cfc40.md)
→ Recipe #13: [Fix Messy Settings Pages](R-13%20Fix%20Messy%20Settings%20Pages%202d667ccc6bef80a7a976db712071bdce.md)
→ Recipe #19: [Set Up User Permissions](R-19%20Set%20Up%20User%20Permissions%202d667ccc6bef80929d1dd2366cada8e3.md)

</aside>