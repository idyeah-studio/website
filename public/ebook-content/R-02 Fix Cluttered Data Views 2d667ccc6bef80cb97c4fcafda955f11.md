# R-02: Fix Cluttered Data Views

# Recipe #2: Fix Cluttered Data Views

Category: Wireframing & IA  |  ⏱️ 20-25 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning a data-heavy screen (tables, lists, dashboards) that feels overwhelming. Users complain they can't find what they need, and the interface is cramped with too much information competing for attention.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Legacy applications often accumulate features over time, resulting in cluttered interfaces with 20+ columns in tables, competing CTAs, and no clear visual hierarchy. Users are overwhelmed and miss critical information. You need to declutter without losing functionality that power users depend on.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide:

- Column prioritization strategy (which data to show by default vs. hide)
- Visual hierarchy recommendations (size, weight, color usage)
- Progressive disclosure patterns (expandable rows, detail panels, filters)
- Action consolidation suggestions (dropdown menus, contextual actions)
- Before/after structure comparison
- Optional: ASCII wireframe or layout description
</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Architect specializing in data-heavy applications.

I'm redesigning a [Screen Type] that currently feels cluttered and overwhelming.

[OPTIONAL: Attach screenshot of existing screen]

Current problems:
- [Problem 1: e.g., Too many columns, no prioritization]
- [Problem 2: e.g., Actions are hidden or unclear]
- [Problem 3: e.g., Poor visual hierarchy]

User context: [Who uses this and what's their main goal]

Please suggest:
1. Information hierarchy - what to show/hide/group
2. Progressive disclosure strategy
3. Visual organization improvements
4. Action placement recommendations

Consider: [Any constraints - e.g., power users need all data accessible]
```

💡 What to customize:

- [Screen Type] = Data table, Dashboard, List view, Analytics page
- [Problem 1-3] = Specific pain points from user feedback
- [User context] = Power users, Analysts, Managers, etc.
- [Constraints] = Must preserve certain features, mobile requirements
- Upload a screenshot of the existing cluttered screen for best results
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Architect specializing in data-heavy applications.

I'm redesigning a Customer Support Ticket Dashboard that currently feels cluttered and overwhelming.

[User would attach screenshot here]

Current problems:
- 15 columns in the table - users can't scan efficiently
- Multiple action buttons on every row create visual noise
- Status badges, priority flags, and timestamps compete for attention
- Critical metrics are buried alongside nice-to-have data

User context: Support agents need to quickly identify high-priority tickets and take action. They scan 50-100 tickets per day.

Please suggest:
1. Information hierarchy - what to show/hide/group
2. Progressive disclosure strategy  
3. Visual organization improvements
4. Action placement recommendations

Consider: Power users occasionally need access to all 15 data points, but most agents only use 5-6 regularly.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Always include a screenshot: AI provides 10x better recommendations when it can see the actual clutter
✦ Common mistake: Asking "make it cleaner" without context - specify user goals and constraints
✦ Best with: Claude (excels at analyzing complex layouts and trade-offs), ChatGPT o1 (for multi-stakeholder needs)
✦ Remix it: "Show me 3 different approaches: minimal (5 columns), balanced (8 columns), power-user (12 columns)"
✦ Pro move: Upload before screenshot, then ask "Generate an after state based on your recommendations"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create a progressive disclosure spec: what shows on hover, click, and expand"
- "How would this work on mobile with the same data requirements?"
- "Generate a priority matrix for these 15 data points based on user frequency"
- "What micro-interactions would help users scan this faster?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![2_Example_Output.png](2_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #06: [Design Search & Filters](R-06%20Design%20Search%20&%20Filters%202d667ccc6bef805ca459de3061219cd3.md)
→ Recipe #13: [Fix Messy Settings Pages](R-13%20Fix%20Messy%20Settings%20Pages%202d667ccc6bef80a7a976db712071bdce.md)
→ Recipe #17: [Design Comparison Tables](R-17%20Design%20Comparison%20Tables%202d667ccc6bef80b2b6b4d90575a87d67.md)

</aside>