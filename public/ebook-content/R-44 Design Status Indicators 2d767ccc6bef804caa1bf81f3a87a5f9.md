# R-44: Design Status Indicators

# Recipe #44: Design Status Indicators

Category: UI & Visuals  |  ⏱️ 20-25 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're designing status communication systems - badges showing item states, pills for categories, tags for filtering, or labels indicating priority. Current status indicators are inconsistent, unclear, or users can't quickly distinguish between different states.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have poorly designed status indicators - using too many colors (rainbow of badges with no meaning), inconsistent styling (some rounded, some square, some filled, some outlined), unclear labels ("Status: 1" - what does 1 mean?), color-only indicators that fail for colorblind users, and no visual hierarchy between critical and minor statuses. Users can't quickly scan for urgent items, mistake "Pending" for "Approved," or ignore status badges because they all look the same. You need status indicators that are instantly recognizable, accessible, consistently styled, and communicate urgency appropriately.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide status indicator type recommendations (filled pills for critical states, outlined for secondary, soft for neutral) with semantic color systems (red for critical failures, orange for warnings, green for success, blue for in-progress, gray for neutral), icon plus text combinations ensuring colorblind accessibility, status hierarchy specifications with varying sizes and weights for different urgency levels, mobile-optimized compact patterns using dots or abbreviated text, and complete accessibility guidance including 4.5:1 contrast ratios and ARIA labels. Optionally includes status indicator component library with all variations.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UI Component Designer specializing in status communication, badges, and visual indicators.

I'm designing status indicator systems for a [Product Type] to communicate [Status Types] clearly and consistently.

[OPTIONAL: Attach screenshots showing current status indicators or competitor examples]

Status indicator requirements:
- Status types: [e.g., Order status, Task status, User status, Payment status, Approval workflow]
- Number of states: [e.g., 3 states, 5 states, 10+ states]
- Urgency levels: [e.g., Critical, Warning, Success, Neutral, Info]
- Use contexts: [e.g., Tables, Cards, Lists, Dashboards, Mobile]
- User needs: [e.g., Quick scanning, Filter by status, At-a-glance priority]

Current status indicator problems:
- [Problem 1: e.g., 10 different colored badges - can't remember what each color means]
- [Problem 2: e.g., "Status: 2" shown as number - unclear what state 2 represents]
- [Problem 3: e.g., Color-only indicators (red/green) - colorblind users can't distinguish]
- [Problem 4: e.g., Inconsistent styling - some pills, some badges, some text-only]
- [Problem 5: e.g., "Pending" and "Approved" look identical - no visual hierarchy]

User context: [How users scan for status, importance of quick recognition, filtering needs]

Please provide:
1. Status indicator types (badges, pills, tags, labels)
2. Visual styling (colors, shapes, borders, filled vs. outlined)
3. Color system for status (semantic color usage)
4. Icon + text combinations
5. Status hierarchy (critical vs. minor)
6. Accessibility considerations (colorblind-safe)
7. Mobile status patterns (compact display)
8. Interactive states (hover, selected, disabled)

Consider: [Constraints - e.g., Must work for colorblind users, limited space in tables, need to scale from 3 to 20 statuses, real-time status updates]
```

💡 What to customize:

- [Product Type] = E-commerce orders, Project management, Support tickets, CRM, Admin panel
- [Status Types] = What statuses you need to communicate
- [Number of states] = How many different statuses
- [Use contexts] = Where status appears
- [Problems 1-5] = Current status indicator issues
- Upload screenshots showing current status indicators
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UI Component Designer specializing in status communication, badges, and visual indicators.

I'm designing status indicator systems for an E-commerce Order Management Dashboard to communicate order status, payment status, and fulfillment status clearly at a glance.

[User would attach status indicator screenshots here]

Status indicator requirements:
- Status types:
  - Order status: Pending, Confirmed, Processing, Shipped, Delivered, Cancelled, Returned
  - Payment status: Unpaid, Paid, Refunded, Failed, Partial
  - Fulfillment status: Unfulfilled, Partially fulfilled, Fulfilled
  - Priority: Low, Medium, High, Urgent
- Number of states: 
  - 7 order statuses (most important)
  - 5 payment statuses
  - 3 fulfillment statuses
  - 4 priority levels
  - 19 total states to communicate
- Urgency levels:
  - Critical: Failed payment, Urgent priority, Cancelled orders
  - Warning: Pending actions, Partial fulfillment, Medium priority
  - Success: Delivered, Paid, Fulfilled
  - Neutral: Processing, Confirmed
  - Info: Low priority, Unfulfilled (normal state)
- Use contexts:
  - Order table (100+ rows, 5 status columns)
  - Order detail cards (larger badges, more prominent)
  - Mobile list view (compact, scannable)
  - Dashboard widgets (quick overview)
  - Filters (clickable status tags)
- User needs:
  - Quick scan for failed payments (critical)
  - Filter orders by status (clickable)
  - At-a-glance priority recognition
  - Distinguish similar states (Pending vs. Processing)

Current status indicator problems:
- Using 10+ different colors for statuses - rainbow of badges, no semantic meaning (purple, pink, teal, orange, lime green) - users can't remember what each color means
- Payment status shown as number: "Status: 2" - completely unclear what state 2 represents (is it paid? failed? pending?)
- Color-only indicators - red for "Failed", green for "Delivered" - 8% of male users are red-green colorblind and cannot distinguish
- Inconsistent styling across dashboard - order status uses filled pills, payment uses outlined badges, priority uses text-only, fulfillment uses squares - visual chaos
- "Pending" (yellow) and "Processing" (orange) look too similar when scanning 100-row table - hard to distinguish quickly
- All statuses same size/weight - "Failed Payment" (critical) looks identical to "Low Priority" (minor) - no visual hierarchy
- Mobile view shows full text "Partially Fulfilled" - too long, wraps to 2 lines, breaks layout

User context: Customer service reps scan 100+ orders daily looking for issues. Failed payments need immediate attention (critical). Orders stuck in "Pending" for 3+ days need follow-up. Users filter by status frequently - badges must be clickable. Colorblind users (8-10% of staff) need icon support. Mobile users checking orders quickly - need compact indicators. Real-time status updates (orders change state while viewing).

Please provide:
1. Status indicator types (badges, pills, tags, labels)
2. Visual styling (colors, shapes, borders, filled vs. outlined)
3. Color system for status (semantic color usage)
4. Icon + text combinations
5. Status hierarchy (critical vs. minor)
6. Accessibility considerations (colorblind-safe)
7. Mobile status patterns (compact display)
8. Interactive states (hover, selected, disabled)

Consider: Must work for colorblind users (icons required). Need semantic color system (red=critical, green=success). Consistency across all status types. Compact for table cells. Clickable for filtering. Scannable in lists of 100+ items. Real-time updates need smooth transitions.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Icon + text, never color alone: Red ✕ "Failed" works for colorblind users, red circle doesn't
✦ Common mistake: Rainbow of colors with no meaning - use semantic colors (red=bad, green=good, blue=active)
✦ Best with: Claude (excellent at color systems), ChatGPT (good for icon selection)
✦ Remix it: "Design the real-time status update - smooth transition animations when status changes"
✦ Pro move: Ask "Create the status indicator library - all status types with colors, icons, sizes documented"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the status filter system - clickable status badges that filter table results"
- "Create the compact status display - how to show 3+ statuses in a small table cell"
- "How should status indicators animate - smooth transitions when order status changes in real-time?"
- "Design the status legend - help users understand what each status means and color represents"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![44_Example_Output.png](44_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #22: [Check Your Color Contrast](R-22%20Check%20Your%20Color%20Contrast%202d667ccc6bef8030822cc761e4959070.md)
→ Recipe #25: [Pick Your Icon Styles](R-25%20Pick%20Your%20Icon%20Styles%202d767ccc6bef809cbd6bc7ee914bebdf.md)
→ Recipe #41: [Design Alerts](R-41%20Design%20Alerts%202d767ccc6bef80cfb82fd8f83c76b743.md)

</aside>