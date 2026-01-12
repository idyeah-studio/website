# R-01: Plan Your Page Layout

# Recipe #1: Plan Your Page Layout

Category: Wireframing & IA  |  ⏱️ 15-20 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're starting a new design and need to establish the foundational grid system, spacing hierarchy, and content zones before touching any UI elements.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers jump straight into high-fidelity designs without planning the underlying structure. This leads to inconsistent spacing, misaligned elements, and content that doesn't scale across breakpoints. You need a systematic approach to define your layout foundation.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide:

- Grid recommendations (e.g., 12-column, 8pt base unit)
- Visual description of content zones with proportions
- Spacing scale (e.g., 8, 16, 24, 32, 48px)
- Breakpoint suggestions (mobile, tablet, desktop)
- Optional: ASCII wireframe or layout description
</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Architect. I'm designing a [Product Type] for [Target Audience].

I need help planning the page layout structure for [Specific Page Type].

Please provide:
1. Recommended grid system (columns, gutters, margins)
2. Content zone hierarchy (header, main, sidebar, footer)
3. Spacing scale recommendations
4. Responsive breakpoint strategy

Consider: [Any Specific Constraints]
```

💡 What to customize:

- [Product Type] = Dashboard, Marketing site, Mobile app, etc.
- [Target Audience] = Power users, Consumers, Designers, etc.
- [Specific Page Type] = Homepage, Settings page, Data table, etc.
- [Constraints] = Must work on tablet, Heavy data content, etc.
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Architect. I'm designing a SaaS Analytics Dashboard for data analysts.

I need help planning the page layout structure for the main Dashboard Overview page.

Please provide:
1. Recommended grid system (columns, gutters, margins)
2. Content zone hierarchy (header, main, sidebar, footer)
3. Spacing scale recommendations
4. Responsive breakpoint strategy

Consider: The page will display 4-6 metric cards, 2-3 charts, and a data table. Users primarily work on desktop (1440px+) but occasionally on tablets.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Start broad, then narrow: Don't specify exact pixel values in your first prompt—let AI suggest, then refine

✦ Common mistake: Asking for "the best layout" without context—always include your content type and user needs

✦ Best with: Claude (excels at structural thinking), ChatGPT o1 (for complex multi-page systems)

✦ Remix it: Add "Show me how this layout adapts from 375px to 1920px width”

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Convert this layout structure into a Figma Auto Layout specification"
- "What accessibility considerations should I add to this grid system?"
- "Show me how to handle this layout when content varies significantly in length"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![1_Example_Output.png](1_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #04: [Design Multi-Step Flows](R-04%20Design%20Multi-Step%20Flows%202d667ccc6bef806f9f3be9cdaefa9a9e.md)
→ Recipe #09: [Move Desktop to Mobile](R-09%20Move%20Desktop%20to%20Mobile%202d667ccc6bef806bb6becb18abb33dfe.md)

</aside>