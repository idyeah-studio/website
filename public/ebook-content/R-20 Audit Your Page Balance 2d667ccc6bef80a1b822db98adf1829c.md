# R-20: Audit Your Page Balance

# Recipe #20: Audit Your Page Balance

Category: Wireframing & IA  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning a page that feels "off" - too crowded, too empty, visually unbalanced, or lacks clear hierarchy. Users struggle to know where to look first, important content gets lost, or the page feels overwhelming despite having reasonable amounts of information.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications suffer from poor visual balance - cramming too much into the viewport, leaving awkward empty spaces, inconsistent spacing that creates visual chaos, or treating all content with equal weight so nothing stands out. Designers add elements over time without considering the overall composition, resulting in pages that feel cluttered or aimless. Users can't quickly scan for what they need, and the interface lacks professional polish. You need to systematically audit and rebalance the page's visual weight, spacing, and hierarchy.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a visual weight analysis identifying competing focal points and attention flow patterns, a clear hierarchy system distinguishing primary, secondary, and tertiary content with size, weight, color, and position techniques, spacing recommendations with a consistent scale (8px base unit and multiples) applied at component and section levels including negative space strategy and grid systems, focal point strategy defining where the eye should land first with visual flow paths (F-pattern, Z-pattern) and attention guidance, content grouping recommendations using proximity, visual containers, and whitespace to show relationships, balance techniques covering symmetrical vs. asymmetrical layouts with visual weight distribution and grid alignment principles, density optimization advice on what to remove, hide, expand, or emphasize with progressive disclosure opportunities, and before/after comparison showing the improvements. Optionally includes annotated wireframes showing the rebalanced page composition.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Visual Design Expert specializing in layout composition and information hierarchy.

I'm auditing the visual balance of a [Page Type] that currently feels [Problem Description].

[OPTIONAL: Attach screenshot of current page design]

Page characteristics:
- Content elements: [e.g., Header, navigation, hero section, 3 content cards, sidebar, footer]
- Information density: [e.g., Dense with lots of data, Sparse with minimal content]
- Visual weight issues: [e.g., Everything same size, too much bold text, no clear focal point]
- Spacing problems: [e.g., Inconsistent margins, cramped sections, awkward gaps]
- Hierarchy issues: [e.g., Can't tell what's primary vs secondary vs tertiary]

Current visual problems:
- [Problem 1: e.g., Header takes 40% of screen, pushing content below fold]
- [Problem 2: e.g., All text same size - headings blend with body copy]
- [Problem 3: e.g., Sidebar and main content visually compete for attention]
- [Problem 4: e.g., Whitespace distributed randomly - some areas cramped, others empty]
- [Problem 5: e.g., CTAs buried in visual noise]

User feedback: [e.g., "Feels cluttered", "Can't find the main action", "Looks unprofessional"]

Please provide:
1. Visual weight distribution analysis (what dominates, what's invisible)
2. Hierarchy recommendations (primary, secondary, tertiary content)
3. Spacing system (margins, padding, gutters, breathing room)
4. Focal point strategy (where should eye go first)
5. Content grouping and relationship
6. Visual balance techniques (symmetry, asymmetry, grid alignment)
7. Density optimization (when to add/remove content)
8. Before/after composition comparison

Consider: [Constraints - e.g., Must fit above fold, responsive design needs, accessibility requirements, brand guidelines]
```

💡 What to customize:

- [Page Type] = Dashboard, Landing page, Product page, Settings page, Form page, Content page
- [Problem Description] = Too cluttered, too sparse, unbalanced, chaotic, boring
- [Content elements] = What's actually on the page
- [Information density] = How much content you're working with
- [Visual problems 1-5] = Specific balance issues
- Upload screenshot of current page for detailed analysis
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Visual Design Expert specializing in layout composition and information hierarchy.

I'm auditing the visual balance of a SaaS Product Dashboard that currently feels cluttered and overwhelming despite having reasonable amounts of information.

[User would attach screenshot here]

Page characteristics:
- Content elements:
  - Fixed header (80px tall) with logo, navigation (7 items), search bar, notifications, profile
  - Left sidebar (280px wide) with 15 menu items
  - Main content area with: Page title, 4 stat cards, 2 charts (line chart, pie chart), data table (10 rows), activity feed sidebar (250px)
  - Footer with links and legal text
- Information density: High - showing metrics, charts, table, and activity all on one screen
- Visual weight issues: Everything demands attention - bold stats, colorful charts, red notification badges, flashing "New" labels
- Spacing problems: Inconsistent - 8px between some elements, 24px between others, 40px in random places, cards touching edges
- Hierarchy issues: Page title same size as stat card numbers, chart titles compete with data, table headers blend with rows

Current visual problems:
- Header + sidebar consume 360px of width on 1440px screen, leaving only 1080px for content (cramped)
- Four stat cards in a row - each screaming for attention with large numbers, icons, and trend arrows
- Charts placed side-by-side with no breathing room - pie chart colors bleed into line chart
- Data table has alternating row colors, bold headers, icon columns, and red/green status badges - visual chaos
- Activity feed sidebar on right creates three-column layout that fragments attention
- Everything above the fold - nothing "breathes", no visual rest areas
- CTA buttons ("Export Data", "View Details", "Refresh") scattered across page with no hierarchy

User feedback: 
- "I don't know where to look first"
- "Feels like everything is shouting at me"
- "Can't focus on one thing - too overwhelming"
- "Looks amateurish despite good data"

Please provide:
1. Visual weight distribution analysis (what dominates, what's invisible)
2. Hierarchy recommendations (primary, secondary, tertiary content)
3. Spacing system (margins, padding, gutters, breathing room)
4. Focal point strategy (where should eye go first)
5. Content grouping and relationship
6. Visual balance techniques (symmetry, asymmetry, grid alignment)
7. Density optimization (when to add/remove content)
8. Before/after composition comparison

Consider: Users primarily check stats and charts - that's the main value. Table and activity feed are secondary. Must work on 1440px and 1920px screens. Dashboard is checked 5-10 times per day for quick status - not detailed analysis. Mobile version exists separately, this is desktop-focused.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Squint test: Blur your eyes and look at the page - what stands out? That's your actual hierarchy
✦ Common mistake: Using bold/color/size equally everywhere - hierarchy needs contrast to work
✦ Best with: Claude (excellent at analyzing complex layouts), ChatGPT (good for visual hierarchy principles)
✦ Remix it: "Audit the mobile version - how does balance change on 375px width?"
✦ Pro move: Ask "Create a visual weight checklist I can use to audit any page design"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the responsive breakpoints - how should this balance shift at 1024px, 768px, and 375px?"
- "Create a spacing scale system for this design - define the 8px base unit and all multiples"
- "What happens when new content is added? Design the 'adding 5th stat card' scenario"
- "Generate accessibility audit - does the visual hierarchy match the semantic/keyboard navigation order?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![20_Example_Output.png](20_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #01: [Plan Your Page Layout](R-01%20Plan%20Your%20Page%20Layout%202d667ccc6bef8044941beb6a5c872b37.md)
→ Recipe #02: [Fix Cluttered Data Views](R-02%20Fix%20Cluttered%20Data%20Views%202d667ccc6bef80cb97c4fcafda955f11.md)
→ Recipe #05: [Rank Dashboard Information](R-05%20Rank%20Dashboard%20Information%202d667ccc6bef80d2ac13f0eb7bcf0b17.md)
→ Recipe #28: [Remove Visual Clutter](R-28%20Remove%20Visual%20Clutter%202d767ccc6bef806ea5dbd329ca407ba1.md)

</aside>