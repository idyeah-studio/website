# R-05: Rank Dashboard Information

# Recipe #5: Rank Dashboard Information

Category: Wireframing & IA  |  ⏱️ 25-30 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're redesigning a dashboard or overview screen where everything feels equally important - or worse, the most critical metrics are buried. Users complain they can't quickly see what matters most, and the screen feels like visual noise.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Dashboards in existing applications suffer from "everything is important" syndrome. Every stakeholder added their metric, every team requested their widget, and now users face 15+ cards with no hierarchy. The CEO's KPI sits next to a rarely-used report. Users waste time scanning for what they actually need, and important alerts get lost in the clutter.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide:

- Metric prioritization tier system (critical, important, contextual, nice-to-have)
- Visual hierarchy recommendations (hero metrics, standard cards, compact views)
- Layout strategy (F-pattern, Z-pattern, or grid with emphasis)
- Size and placement guidance for each metric tier
- Color and emphasis system for status/alerts
- Progressive disclosure approach for detailed data
- Customization strategy for different user needs
- Optional: Dashboard layout wireframe with annotations
</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Data Dashboard UX Specialist.

I'm redesigning a [Dashboard Type] that currently displays [Number] metrics/widgets with no clear priority.

[OPTIONAL: Attach screenshot of current dashboard]

Current situation:
- Metrics shown: [List key metrics, e.g., Revenue, Users, Conversions, Tasks, etc.]
- User complaint: [e.g., "Can't quickly see if we're hitting targets"]
- All metrics currently have: [e.g., Same size cards, same visual weight]

User context: [Who views this dashboard, how often, and what decisions they make from it]

Please suggest:
1. Priority ranking framework for these metrics
2. Visual hierarchy strategy (sizing, placement, emphasis)
3. Layout structure that guides the eye to what matters
4. How to handle secondary/tertiary information
5. Alert and status indication approach

Consider: [Constraints - e.g., Must show all metrics somewhere, different user roles need different priorities]
```

💡 What to customize:

- [Dashboard Type] = Analytics dashboard, Sales dashboard, Project overview, Admin panel, Customer support metrics
- [Number] = Current count of metrics/widgets
- [Metrics shown] = List your actual data points
- [User complaint] = Real feedback or analytics insights
- Upload screenshot of current dashboard to get specific hierarchy recommendations
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Data Dashboard UX Specialist.

I'm redesigning a SaaS Customer Success Dashboard that currently displays 12 metrics with no clear priority.

[User would attach screenshot here]

Current situation:
- Metrics shown: MRR, Churn Rate, Active Users, Trial Conversions, Support Tickets, NPS Score, Feature Adoption, Login Frequency, Payment Success Rate, Onboarding Completion, Health Score, Engagement Time
- User complaint: "I open the dashboard 5 times a day and have to hunt for churn rate every time"
- All metrics currently have: Equal-sized cards in a 4-column grid, same styling, no differentiation

User context: Customer Success Managers check this dashboard 3-5 times daily to spot at-risk accounts and prioritize outreach. Primary decisions: which accounts need attention today, are we hitting monthly targets, what trends need investigation. They care most about Churn Rate, Health Score, and MRR.

Please suggest:
1. Priority ranking framework for these metrics
2. Visual hierarchy strategy (sizing, placement, emphasis)
3. Layout structure that guides the eye to what matters
4. How to handle secondary/tertiary information
5. Alert and status indication approach

Consider: Dashboard must work on laptop screens (1366px+). Some metrics need hourly updates, others weekly. Power users want to customize priority, but default view should guide new users.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Include usage data: If you know which metrics users check most, share it - it trumps stakeholder opinions
✦ Common mistake: Asking "which metrics are most important?" without user context - the AI needs to understand user goals
✦ Best with: Claude (excellent at balancing multiple priorities and trade-offs), ChatGPT (good for visual hierarchy patterns)
✦ Remix it: "Show me 3 versions: Executive view (3 metrics), Manager view (7 metrics), Analyst view (all 12)"
✦ Pro move: Follow up with "Design empty states and error states for when metrics fail to load"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create a color coding system for metric status (good, warning, critical) that's accessible"
- "How should this dashboard adapt to mobile where I can only show 2-3 metrics at once?"
- "Design drill-down interactions: what happens when I click on the MRR card?"
- "Generate comparison view: this month vs. last month with clear visual indicators"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![5_Example_Output.png](5_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #02: [Fix Cluttered Data Views](R-02%20Fix%20Cluttered%20Data%20Views%202d667ccc6bef80cb97c4fcafda955f11.md)
→ Recipe #33: [Design Clear Data Charts](R-33%20Design%20Clear%20Data%20Charts%202d767ccc6bef808a9279dcff30fecd7f.md)
→ Recipe #18: [Build Notification Hubs](R-18%20Build%20Notification%20Hubs%202d667ccc6bef8045b369c44f1bba516e.md)
→ Recipe #20: [Audit Your Page Balance](R-20%20Audit%20Your%20Page%20Balance%202d667ccc6bef80a1b822db98adf1829c.md)

</aside>