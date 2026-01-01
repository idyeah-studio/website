# R-53: Flexible Data Tables

# Recipe #53: Flexible Data Tables

Category: Systems & Components  |  ⏱️ 45-60 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're building data table components that need to handle diverse content types (text, numbers, badges, actions, icons), different row configurations (single-line, multi-line, expandable), and essential table features (search, filters, sorting, bulk actions, pagination). Your current tables are rigid, require rebuilding for each use case, or lack the flexibility to handle varying data structures.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create inflexible table components - building separate tables for every data type (UserTable, TaskTable, ProjectTable = dozens of variants), cells that can't adapt to different content types, no systematic row/cell architecture, tables that break when content is too long, or missing essential features like sorting, filtering, bulk selection, and pagination. Teams waste time rebuilding tables for each new feature, struggle with inconsistent table patterns across the product, can't handle edge cases (empty states, loading, errors, long text), and create tables that work in design but break in development. You need a flexible table system built from composable parts - Row components with single-line/multi-line variants containing Cell components with content-type variants (text, number, status, action, badge, icon, etc.), optional Column components for structure, plus search/filter, bulk actions, sorting, and pagination patterns. This component architecture scales to any data type without rebuilding.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide hierarchical component architecture (Table → Row → Cell → Column) with Row variants for single-line, multi-line, and expanded states plus hover/selected interactions, Cell component variants for 10+ content types (Text, Number, Date, Status, Action, Badge, Icon, Image, Link, Checkbox) with alignment and truncation specs, Column structure defining width strategies (fixed, flexible, min/max, percentage) with sorting and resize capabilities, complete table features including search, filters, sorting indicators, bulk actions bar, pagination controls, column visibility toggles, and density options, comprehensive state patterns covering empty, loading, error, and no-results scenarios, responsive strategies for desktop full-table, tablet horizontal-scroll or priority-columns, and mobile stacked-cards or scroll approaches, and detailed edge case handling for long text truncation, missing data display, overflow action menus, wide tables with sticky columns, and large datasets with virtual scrolling. Optionally includes visual examples showing Row with different Cell variants and fully-featured table.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Data Visualization Component Specialist focusing on flexible table systems, component architecture, and scalable data display patterns.

I'm designing a flexible data table system for a [Product Type] that can handle [Data Types] without creating separate tables for each use case.

[OPTIONAL: Attach current rigid table components or examples]

Data table requirements:
- Data types to display: [e.g., Users, Tasks, Projects, Orders, Transactions, Customers]
- Content types in cells: [e.g., Text, Numbers, Dates, Badges, Actions, Icons, Images, Links]
- Row variations: [e.g., Single-line, Multi-line, Expandable, Selectable, Draggable]
- Table features needed: [e.g., Search, Filters, Sorting, Bulk actions, Pagination, Export]
- Data volume: [e.g., 10-100 rows, 100-1000 rows, 1000+ rows with virtual scrolling]
- Responsive needs: [e.g., Desktop only, Mobile horizontal scroll, Mobile stacked cards]

Current table problems:
- [Problem 1: e.g., Separate UserTable, TaskTable, ProjectTable - 15 table variants, unmaintainable]
- [Problem 2: e.g., Cells can't adapt - text cell doesn't handle numbers, badges, or icons]
- [Problem 3: e.g., No row/cell architecture - building tables from scratch each time]
- [Problem 4: e.g., Long text breaks layout - no truncation or multi-line handling]
- [Problem 5: e.g., Missing features - no search, sorting, bulk select, pagination]

Team context: [Designer data viz experience, table complexity needs, development constraints]

Please provide:
1. Component architecture (Row → Cell → Column hierarchy)
2. Row component variants (single-line, multi-line, expanded, selected, hover)
3. Cell component variants (text, number, status, action, badge, icon, image, link, checkbox)
4. Column component structure (header, width, alignment, sorting)
5. Table features (search, filters, sorting, bulk actions, pagination)
6. State patterns (empty, loading, error, no results)
7. Responsive strategies (mobile horizontal scroll, stacked cards, priority columns)
8. Edge case handling (long text, missing data, overflow actions)

Consider: [Constraints - e.g., Must scale to 1000+ rows, Mobile support required, Accessibility (keyboard navigation, screen readers), Consistent with design system]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Dashboard, Admin panel, CRM, Analytics tool
- [Data Types] = What data you're displaying
- [Content types] = What goes in cells
- [Row variations] = Different row types needed
- [Table features] = Which features to include
- [Problems 1-5] = Current table inflexibility issues
- Attach rigid table examples
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Data Visualization Component Specialist focusing on flexible table systems, component architecture, and scalable data display patterns.

I'm designing a flexible data table system for a SaaS Project Management Tool that can handle Tasks, Projects, Users, and Activity logs without creating separate tables for each use case.

[User would attach current rigid table components]

Data table requirements:
- Data types to display:
  - Tasks: Title, assignee, due date, priority, status, actions
  - Projects: Name, team members, progress, deadline, status
  - Users: Name, role, email, last active, actions
  - Activity: User, action, timestamp, details
  - Reports: Metric, value, change, trend
- Content types in cells:
  - Text: Task titles, names, descriptions (varying lengths)
  - Numbers: Counts, percentages, IDs
  - Dates: Due dates, timestamps, date ranges
  - Badges: Status (To Do, In Progress, Done), Priority (High, Medium, Low)
  - Actions: Edit, Delete, Share buttons/icons
  - Icons: Type indicators, flags, warnings
  - Images: Avatars, thumbnails
  - Links: Clickable names, external links
  - Checkboxes: Row selection, task completion
- Row variations:
  - Single-line: Standard row, 48-56px height, one line of text
  - Multi-line: Expanded row, 72-96px height, wrapped text
  - Expandable: Row with expand/collapse for details
  - Selectable: Checkbox on left, selected state
  - Hover: Hover state, action buttons appear
  - Draggable: Drag handle for reordering (optional)
- Table features needed:
  - Search: Global search across all columns
  - Filters: Filter by status, priority, assignee, date range
  - Sorting: Click column header to sort (ascending/descending)
  - Bulk actions: Select multiple rows, "Delete selected", "Change status"
  - Pagination: 20, 50, 100 rows per page with page numbers
  - Export: Export to CSV, PDF
  - Column visibility: Show/hide columns
  - Density: Compact, Standard, Comfortable row heights
- Data volume:
  - Typical: 50-200 rows per table
  - Maximum: 1000+ rows (use virtual scrolling or pagination)
  - Columns: 4-10 visible columns, 15+ total columns
- Responsive needs:
  - Desktop: Full table (1280px+)
  - Tablet: Horizontal scroll or hide low-priority columns (768-1024px)
  - Mobile: Stacked card view or horizontal scroll (320-767px)

Current table problems:
- Separate table for each data type - TaskTable, ProjectTable, UserTable, ActivityTable built as separate components, 15 table variants total, changing header styling requires updating 15 tables, unmaintainable nightmare
- Cells can't adapt to content types - Text cell component doesn't handle numbers (wrong alignment), can't show badges (fixed text only), can't include actions (buttons break layout), building cell-by-cell manually for each table
- No systematic row/cell architecture - Designers building tables as flat frames, no reusable Row or Cell components, every table designed from scratch, inconsistent cell padding/spacing/alignment
- Long text breaks layout - Task title "Implement advanced search functionality with filters and real-time results" overflows cell, breaks alignment with other rows, no truncation strategy, no multi-line option
- Missing table features - No search bar, no filters, no column sorting indicators, no bulk selection checkboxes, no pagination controls, static table only
- Row states incomplete - Only default row shown, no hover state (actions hidden), no selected state (bulk actions), no expandable rows (can't show task details), no loading skeleton
- Column structure undefined - No Column component, column widths hardcoded (200px, 150px, 300px), can't resize columns, no min/max width constraints, breaks responsive
- No empty/loading/error states - Empty table just shows headers with blank space, no "No tasks found" message, no loading skeleton when fetching data, no error state when API fails

Team context:
- 8 designers need to create 20+ different tables (tasks, projects, users, files, comments, activity, reports, settings)
- Current workflow: Copy existing table, manually adjust cells, recreate features = 2-3 hours per table
- Want component system: Drag Row component, swap Cell variants, configure columns = 15 minutes per table
- Developers need consistent table structure (React Table, Tanstack Table libraries expect row/cell architecture)
- Tables must handle edge cases (0 rows, 1000+ rows, very long text, missing data)
- Accessibility required (keyboard navigation, screen reader row/cell announcements, focus management)

Please provide:
1. Component architecture (Row → Cell → Column hierarchy)
2. Row component variants (single-line, multi-line, expanded, selected, hover)
3. Cell component variants (text, number, status, action, badge, icon, image, link, checkbox)
4. Column component structure (header, width, alignment, sorting)
5. Table features (search, filters, sorting, bulk actions, pagination)
6. State patterns (empty, loading, error, no results)
7. Responsive strategies (mobile horizontal scroll, stacked cards, priority columns)
8. Edge case handling (long text, missing data, overflow actions)

Consider: Must scale from 10 to 1000+ rows. Reusable across 20+ data types. Cells must handle 10+ content types. Row/Cell/Column component architecture required. Search, filter, sort, bulk actions, pagination essential. Mobile responsive (horizontal scroll or cards). Keyboard accessible. Handles edge cases (empty, loading, errors, long text).
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Row → Cell architecture is key: Build tables from composable Row and Cell components, not flat frames - enables reuse across 20+ data types
✦ Common mistake: Building separate TaskTable, UserTable, ProjectTable - use one flexible table system with Cell variants instead
✦ Best with: Claude (excellent at component architecture), ChatGPT (good for table patterns)
✦ Remix it: "Design the expandable row pattern - click to reveal nested details, subtasks, or comments"
✦ Pro move: Ask "Create the table configuration system - JSON structure defining columns, cell types, and features for any table"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the Cell component library - all 10 cell types (text, number, status, action, badge, icon, image, link, checkbox) with specs"
- "Create the bulk action patterns - select all, select filtered, deselect, action bar with delete/export/assign"
- "How to handle mobile tables - horizontal scroll vs. stacked cards vs. priority columns"
- "Build the advanced filter system - multi-select dropdowns, date ranges, saved filters"
</aside>

---

<aside>
💎

EXAMPLE OUTPUT

![53_Example_Output.png](53_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #49: [Design Component Variants in Figma](R-49%20Design%20Component%20Variants%202d767ccc6bef8061a641c8db579cd3b7.md)
→ Recipe #51: [Build Responsive Components in Figma](R-51%20Build%20Responsive%20Components%202d767ccc6bef8015b2effc042a7b2cbe.md)

</aside>