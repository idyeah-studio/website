# R-54: Flexible Chart Components

# Recipe #54: Flexible Chart Components

Category: Systems & Components  |  ⏱️ 45-60 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're building chart components (bar, line, pie, donut, area) that need to handle varying datasets, different visual styles, interactive states, and responsive behavior. Your current charts are static images, require rebuilding for each dataset, or lack the flexibility to adapt to different contexts and screen sizes.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create rigid, single-use charts - building separate BarChartRevenue, BarChartUsers, BarChartSales (dozens of chart variants for each dataset), charts as flat static images that can't be edited, no systematic chart anatomy (axes, labels, legends, tooltips, gridlines as components), charts that break on mobile or different data ranges, missing interactive states (hover highlights, tooltips, selected data points), and no consideration for accessibility (color-only data representation). Teams waste time recreating charts for every report, struggle with inconsistent chart styling across dashboards, can't handle edge cases (0 data, negative values, very large numbers), and create charts that work in design but can't be implemented. You need a flexible chart component system - chart anatomy broken into reusable parts (axes, bars/lines, labels, legends, tooltips, gridlines), variants for different chart types and styles, data-driven flexibility (handles any dataset), interactive states (hover, selected, empty, loading), responsive behavior (mobile adaptations), and accessibility patterns (not color-only).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide comprehensive chart anatomy breakdown of universal components (container, title, axes, gridlines, data elements, legend, tooltips, data labels) with component hierarchy and reusable sub-components, detailed chart type patterns for bar, line, pie/donut, and area charts showing specific anatomy and variants for each, data representation strategies for making charts data-driven with dynamic axis scaling, handling varying data ranges, number formatting, and data point limits, complete interactive states covering hover highlights, selected states, tooltips, drilldown, plus empty/loading/error state designs, visual styling specifications including accessible color systems for single and multiple data series, typography, spacing, and light/dark mode theming, responsive strategies detailing desktop full-featured charts, tablet medium complexity, and mobile simplified approaches with chart-type-specific adaptations, and comprehensive accessibility patterns implementing color-plus-pattern approaches (not color-only), colorblind-safe palettes, alternative text, keyboard navigation, and screen reader support for WCAG AA compliance. Optionally includes visual examples showing flexible chart system with anatomy and responsive adaptations.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Data Visualization Component Specialist focusing on flexible chart systems, chart anatomy, and scalable data visualization patterns.

I'm designing flexible chart components for a [Product Type] that can handle varying datasets and contexts without creating separate charts for each use case.

[OPTIONAL: Attach current rigid chart designs or static chart images]

Chart requirements:
- Chart types needed: [e.g., Bar, Line, Pie, Donut, Area, Scatter, Combo]
- Data types to visualize: [e.g., Revenue, Users, Tasks, Sales, Performance metrics]
- Chart features: [e.g., Tooltips, Legends, Gridlines, Axes, Data labels, Annotations]
- Interactive states: [e.g., Hover highlights, Selected data points, Tooltips, Drilldown]
- Visual variations: [e.g., Multiple color themes, Light/dark mode, Branded colors]
- Responsive needs: [e.g., Desktop full charts, Mobile simplified, Tablet medium complexity]

Current chart problems:
- [Problem 1: e.g., Separate chart for each dataset - BarChartRevenue, BarChartUsers - 30 chart variants]
- [Problem 2: e.g., Charts are static images - can't update data, must recreate from scratch]
- [Problem 3: e.g., No chart anatomy - axes, bars, labels built as flat frames, not components]
- [Problem 4: e.g., Charts break on mobile - desktop 1200px charts don't fit 320px screens]
- [Problem 5: e.g., No interactive states - no hover tooltips, no selected states, static only]

Team context: [Designer data viz experience, chart complexity needs, development constraints]

Please provide:
1. Chart anatomy breakdown (axes, data elements, labels, legends, tooltips, gridlines)
2. Chart component architecture (reusable parts, variants, flexibility)
3. Chart type patterns (bar, line, pie, donut, area - anatomy for each)
4. Data representation (how to make charts data-driven, handle varying ranges)
5. Interactive states (hover, selected, tooltip, drilldown, empty, loading)
6. Visual styling (colors, spacing, typography, theming)
7. Responsive strategies (mobile simplification, adaptive layouts)
8. Accessibility patterns (color + pattern, not color-only, screen reader support)

Consider: [Constraints - e.g., Must handle 5 to 500 data points, Mobile responsive required, Accessibility WCAG AA, Consistent with design system, Real-time data updates]
```

💡 What to customize:

- [Product Type] = SaaS dashboard, Analytics tool, Admin panel, E-commerce, Mobile app
- [Chart types] = Which charts you need
- [Data types] = What data you're visualizing
- [Chart features] = Which features to include
- [Visual variations] = Different styles needed
- [Problems 1-5] = Current chart inflexibility issues
- Attach rigid chart examples or static images
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Data Visualization Component Specialist focusing on flexible chart systems, chart anatomy, and scalable data visualization patterns.

I'm designing flexible chart components for a SaaS Analytics Dashboard that can handle varying datasets (revenue, users, tasks, engagement) and contexts (overview dashboard, detailed reports, mobile app) without creating separate charts for each use case.

[User would attach current static chart images or rigid chart components]

Chart requirements:
- Chart types needed:
  - Bar chart: Vertical bars, horizontal bars, stacked bars, grouped bars
  - Line chart: Single line, multiple lines, area under line
  - Pie/Donut chart: Full circle, partial circle, with labels
  - Area chart: Single area, stacked areas
  - Combo chart: Bars + line combined
- Data types to visualize:
  - Revenue: Daily/weekly/monthly revenue ($0 to $100K+ range)
  - Users: Active users, new signups, churn (0 to 10,000+ users)
  - Tasks: Completed, in progress, overdue (0 to 1,000+ tasks)
  - Engagement: Page views, session duration, conversion rate (percentages and counts)
  - Performance: Load times, error rates, uptime (milliseconds, percentages)
- Chart features:
  - Tooltips: Hover over data point shows exact value, label, date
  - Legends: Color key for multiple data series
  - Gridlines: Horizontal lines for value reference
  - Axes: X-axis (time/categories), Y-axis (values with labels)
  - Data labels: Show values on bars/points (optional)
  - Annotations: Mark important events, goals, thresholds
  - Zoom/pan: Zoom into time range (optional, advanced)
- Interactive states:
  - Hover: Data point/bar highlights, tooltip appears
  - Selected: Click data point to select, dim others
  - Tooltip: Shows exact values, formatted numbers
  - Drilldown: Click bar to see detailed breakdown (optional)
  - Empty: No data available for time range
  - Loading: Skeleton chart or spinner while loading data
  - Error: Failed to load data, retry option
- Visual variations:
  - Multiple color themes: Blue (default), Green (success), Red (alerts), Purple (brand)
  - Light/dark mode: Light background charts, dark background charts
  - Branded colors: Custom color palette for multi-brand products
  - Density: Compact (small), Standard (medium), Spacious (large)
- Responsive needs:
  - Desktop (1024px+): Full chart, all features, detailed tooltips
  - Tablet (768-1023px): Medium chart, simplified legend, fewer gridlines
  - Mobile (320-767px): Simplified chart, minimal labels, horizontal scroll if needed

Current chart problems:
- Separate chart for each dataset - BarChartRevenue (shows $), BarChartUsers (shows count), BarChartTasks (shows tasks), LineChartEngagement (shows %) - 30+ chart variants total, changing bar color requires updating 30 charts individually, unmaintainable
- Charts are static PNG/SVG images - designer exports chart as image, developers can't update data dynamically, must recreate chart in design for each data change, no real-time updates possible
- No chart anatomy structure - chart built as single flat frame, axes drawn as lines (not components), bars drawn as rectangles (not reusable bar component), labels as text layers (no systematic placement), can't swap parts or reuse
- Charts don't scale responsively - 1200px wide bar chart designed for desktop, breaks on 320px mobile (text overlaps, bars too narrow, unreadable), no mobile variant, horizontal scroll nightmare
- No interactive states defined - charts show only static state, no hover tooltips specified (developers implement inconsistently), no selected state (can't highlight individual bars), no loading skeleton (just blank space while loading)
- Color-only data representation - line chart with 5 lines differentiated only by color (red, blue, green, orange, purple), fails for colorblind users (8% of male users), no patterns or line styles, accessibility failure
- No empty/error states - chart with no data just shows empty axes (confusing), chart that fails to load shows nothing (users think it's loading forever), no "No data for this time range" message
- Fixed data ranges - Y-axis shows 0-100, breaks when data is 0-10,000 (scale wrong), or 0-5 (too much empty space), no dynamic axis scaling

Team context:
- 8 designers creating 50+ charts across dashboards, reports, and mobile app
- Current workflow: Create new chart from scratch for each dataset = 2-3 hours per chart
- Want component system: Swap chart type variant, update data range, configure colors = 15 minutes
- Developers use Chart.js, D3.js, Recharts (React charts) - need specs matching library capabilities
- Charts must update in real-time (live data every 30 seconds)
- Accessibility audit flagged color-only charts (compliance issue)
- Mobile users (40%) complain charts are unreadable

Please provide:
1. Chart anatomy breakdown (axes, data elements, labels, legends, tooltips, gridlines)
2. Chart component architecture (reusable parts, variants, flexibility)
3. Chart type patterns (bar, line, pie, donut, area - anatomy for each)
4. Data representation (how to make charts data-driven, handle varying ranges)
5. Interactive states (hover, selected, tooltip, drilldown, empty, loading)
6. Visual styling (colors, spacing, typography, theming)
7. Responsive strategies (mobile simplification, adaptive layouts)
8. Accessibility patterns (color + pattern, not color-only, screen reader support)

Consider: Must handle 5 to 500 data points. Mobile responsive (40% of users). Accessibility WCAG AA (color + pattern). Real-time data updates. Consistent with design system colors. Dynamic axis scaling. Tooltips on hover. Empty/loading/error states. Light/dark mode support.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Chart anatomy as components: Break charts into axes, data elements, legends, tooltips - reusable across all chart types
✦ Common mistake: Static chart images - build flexible components with variants that adapt to any dataset
✦ Best with: Claude (excellent at component architecture), ChatGPT (good for data visualization patterns)
✦ Remix it: "Design the combo chart pattern - bars + line in single chart showing two metrics with different scales"
✦ Pro move: Ask "Create the chart configuration system - JSON structure defining chart type, data, colors, features for any chart"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the tooltip component - appears on hover, shows formatted values, adapts to chart type"
- "Create the legend component - color key for multiple data series, interactive show/hide, responsive positioning"
- "How to handle edge cases - zero data, negative values, very large numbers, missing data points"
- "Build the empty/loading/error state patterns - skeleton charts, no data messages, retry options"
</aside>

---

<aside>
💎

EXAMPLE OUTPUT

![54_Example_Output.png](54_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #53: [Design Flexible Data Tables](R-53%20Flexible%20Data%20Tables%202d767ccc6bef8020b5e8fea04b8f6efe.md)
→ Recipe #49: [Design Component Variants in Figma](R-49%20Design%20Component%20Variants%202d767ccc6bef8061a641c8db579cd3b7.md)
→ Recipe #51: [Build Responsive Components in Figma](R-51%20Build%20Responsive%20Components%202d767ccc6bef8015b2effc042a7b2cbe.md)

</aside>