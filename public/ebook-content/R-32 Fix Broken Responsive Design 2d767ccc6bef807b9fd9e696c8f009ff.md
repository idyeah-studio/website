# R-32: Fix Broken Responsive Design

# Recipe #32: Fix Broken Responsive Design

Category: UI & Visuals  |  ⏱️ 30-35 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're redesigning an interface that breaks on mobile, tablet, or different screen sizes - elements overlap, text is unreadable, navigation is inaccessible, or users must pinch-zoom to use basic features. The design only works on the designer's 1440px monitor.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications are designed desktop-first without considering smaller screens, or they use naive "just make everything smaller" responsive approaches. On mobile, multi-column layouts crush content into narrow strips, navigation menus push content off-screen, data tables become horizontally scrollable nightmares, and touch targets are too small for fingers. Fixed-width designs force horizontal scrolling. Media queries break at arbitrary widths. The same interface that works beautifully at 1440px becomes unusable at 375px. You need a thoughtful responsive strategy that adapts layouts, prioritizes content, and optimizes interactions for each screen size.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a breakpoint strategy with fluid transitions (mobile 375-767px single column, tablet 768-1023px simplified, desktop 1024px+ full features), layout adaptation patterns transforming grids and navigation for each screen size with content reordering and progressive disclosure, touch optimization with minimum 44x44px targets and thumb-friendly zones, mobile solutions for data tables (card views, priority columns, expandable rows), typography and spacing that scale appropriately without shrinking body text below 16px, and a comprehensive testing strategy covering real devices, iOS/Android differences, orientations, and performance on mobile networks. Optionally includes responsive layout mockups at each breakpoint.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Responsive Design Specialist focusing on multi-device experiences and adaptive layouts.

I'm fixing responsive design for a [Product Type] that currently breaks on mobile and tablet.

[OPTIONAL: Attach screenshots showing broken responsive behavior at different widths]

Responsive requirements:
- Target screen sizes: [e.g., Mobile 375px-428px, Tablet 768px-1024px, Desktop 1440px+]
- Primary device usage: [e.g., 60% desktop, 30% mobile, 10% tablet]
- Content types: [e.g., Data tables, Forms, Navigation, Cards, Images, Charts]
- User tasks on mobile: [e.g., Quick lookups, Data entry, Reading, Browsing]

Current responsive problems:
- [Problem 1: e.g., Desktop 4-column layout crushes to 4 tiny columns on mobile - unreadable]
- [Problem 2: e.g., Navigation menu designed for hover doesn't work on touch devices]
- [Problem 3: e.g., Data table with 8 columns forces horizontal scrolling on mobile]
- [Problem 4: e.g., Fixed 1200px width causes horizontal scroll on tablets]
- [Problem 5: e.g., Button touch targets are 32px - too small for thumbs (need 44px minimum)]

User context: [Mobile usage scenarios, typical tasks on different devices, accessibility needs]

Please provide:
1. Breakpoint strategy (when and how layouts change)
2. Layout adaptation patterns (multi-column to single column, etc.)
3. Navigation transformation (desktop nav to mobile nav)
4. Content prioritization (what to show/hide on mobile)
5. Touch optimization (target sizes, gestures, spacing)
6. Data table mobile solutions
7. Typography and spacing scaling
8. Testing strategy for responsive design

Consider: [Constraints - e.g., Must maintain feature parity across devices, can't hide critical content, performance on mobile networks, iOS and Android differences]
```

💡 What to customize:

- [Product Type] = Dashboard, E-commerce site, Admin panel, Content site, Data app
- [Target screen sizes] = Your specific breakpoints
- [Primary device usage] = Analytics on device distribution
- [Content types] = What needs to be responsive
- [User tasks on mobile] = What mobile users actually do
- [Problems 1-5] = Specific responsive breakage points
- Upload screenshots showing broken responsive layouts at different widths
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Responsive Design Specialist focusing on multi-device experiences and adaptive layouts.

I'm fixing responsive design for a SaaS Analytics Dashboard that currently breaks on mobile and tablet, despite 40% mobile traffic.

[User would attach responsive screenshots here]

Responsive requirements:
- Target screen sizes:
  - Mobile: 375px-428px (iPhone SE to iPhone Pro Max)
  - Tablet: 768px-1024px (iPad portrait to landscape)
  - Desktop: 1280px-1920px (laptop to large monitor)
- Primary device usage:
  - Desktop: 60% (primary work environment, deep analysis)
  - Mobile: 30% (quick checks, on-the-go monitoring)
  - Tablet: 10% (presentations, meetings, casual browsing)
- Content types:
  - Dashboard with 6 metric cards (2x3 grid on desktop)
  - Line charts and bar charts (wide visualizations)
  - Data table with 8 columns (transaction history)
  - Top navigation with 7 menu items
  - Filter sidebar with 12 filter options
  - Forms for settings and configuration
- User tasks on mobile:
  - Check key metrics quickly (revenue, users, conversions)
  - View trend charts (weekly/monthly performance)
  - Respond to alerts and notifications
  - Quick data lookups (find specific transaction)
  - NOT doing: Detailed analysis, bulk data exports, complex filtering

Current responsive problems:
- Desktop 2x3 card grid (6 metric cards) shrinks to 2 columns on mobile - cards are 160px wide, numbers cramped and hard to read
- Top navigation with 7 items (Dashboard, Analytics, Reports, Customers, Settings, Help, Profile) doesn't collapse - items overlap at 768px and below
- Data table with 8 columns (Date, Transaction ID, Customer, Amount, Status, Category, Notes, Actions) forces horizontal scroll on mobile - users must swipe back and forth to see all data
- Filter sidebar is 280px fixed width - takes up entire screen on 375px mobile, pushing content off-screen
- Charts designed for 1200px width squish to 375px - labels overlap, data points too small to tap
- Form inputs are 36px height with 12px padding - too small for thumb tapping (need 44px minimum)
- Spacing uses fixed 24px padding everywhere - wastes space on mobile, could be 16px
- Font sizes don't scale - 14px body text is tiny on mobile (hard to read without zooming)

User context: Sales team checks dashboard on phones during client meetings. Managers review weekly metrics on tablets. Analysts do deep work on desktop. Mobile users primarily check top-level metrics, not detailed data. 3G/4G network common on mobile - performance matters. Mix of iOS and Android users.

Please provide:
1. Breakpoint strategy (when and how layouts change)
2. Layout adaptation patterns (multi-column to single column, etc.)
3. Navigation transformation (desktop nav to mobile nav)
4. Content prioritization (what to show/hide on mobile)
5. Touch optimization (target sizes, gestures, spacing)
6. Data table mobile solutions
7. Typography and spacing scaling
8. Testing strategy for responsive design

Consider: Must maintain access to all features on mobile (can't hide critical functionality). Performance on slow mobile networks. Charts must remain usable even when small. Can't require horizontal scrolling for primary content. iOS Safari and Android Chrome have different behaviors.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Mobile first, enhance up: Start designing for mobile, add complexity for larger screens - easier than cramming desktop into mobile
✦ Common mistake: Hiding critical features on mobile - everything should be accessible, just reorganized
✦ Best with: Claude (excellent at layout transformation strategies), ChatGPT (good for breakpoint recommendations)
✦ Remix it: "Design the tablet-optimized experience - it's not just between mobile and desktop"
✦ Pro move: Ask "Create the responsive testing checklist - all scenarios to test at each breakpoint"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

Try these next:

- "Design the mobile data table - transform 8-column table into mobile-friendly card view"
- "How should charts and visualizations adapt for mobile screens while remaining useful?"
- "Create the responsive navigation system - desktop top nav to mobile bottom tabs"
- "What's the strategy for landscape mobile (667x375) vs. portrait (375x667)?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![32_Example_Output.png](32_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #09: [Move Desktop to Mobile](R-09%20Move%20Desktop%20to%20Mobile%202d667ccc6bef806bb6becb18abb33dfe.md)
→ Recipe #20: [Audit Your Page Balance](R-20%20Audit%20Your%20Page%20Balance%202d667ccc6bef80a1b822db98adf1829c.md)
→ Recipe #24: [Fix Hard-to-Read Text](R-24%20Fix%20Hard-to-Read%20Text%202d767ccc6bef804e8924e15be9db459f.md)
→ Recipe #34: [Polish Your Input Fields](R-34%20Polish%20Your%20Input%20Fields%202d767ccc6bef806aa554c4a058472a9b.md)

</aside>