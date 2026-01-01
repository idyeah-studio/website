# R-35: Design Better Dropdowns

# Recipe #35: Design Better Dropdowns

Category: UI & Visuals  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning dropdown menus and select fields that are confusing, hard to use, or break on mobile - tiny native selects, long unsearchable lists, unclear selected values, or dropdowns that don't work well with touch. Users struggle to find options or make selections.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have poorly designed dropdowns - using native <select> elements that look different on every platform, long lists of 100+ countries with no search, multi-select that's confusing, mobile dropdowns that are tiny and hard to tap, no visual feedback when selecting, unclear what's currently selected, and choosing dropdowns when radio buttons or autocomplete would be better. Users scroll through 200 timezone options or miss their selection because options are alphabetical instead of logical. You need dropdown patterns that are discoverable, searchable, mobile-friendly, and use the right component for the job.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide guidance on when to use dropdowns versus alternatives (radio buttons for 2-5 options, autocomplete for 50+ options, segmented controls for toggles), single and multi-select patterns with clear visual states and selection indicators, search and filtering strategies for long lists (20+ options) with smart ordering and categorization, mobile-optimized patterns including bottom sheets and native pickers with 48px touch targets, comprehensive visual state design (closed, hover, open, selected, disabled), keyboard navigation supporting arrow keys and type-to-jump, and long list strategies including virtual scrolling, popular items first, and lazy loading. Optionally includes dropdown component specifications.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UI Component Designer specializing in dropdown menus, select fields, and picker patterns.

I'm designing dropdown components for a [Product Type] that need to be easy to use across devices.

[OPTIONAL: Attach screenshots showing current dropdown implementations]

Dropdown requirements:
- Dropdown types needed: [e.g., Single-select, Multi-select, Autocomplete, Country picker, Date picker]
- Option list sizes: [e.g., 3-5 options, 10-20 options, 50+ options, 200+ countries]
- Use contexts: [e.g., Forms, Filters, Settings, Navigation]
- Device usage: [e.g., 60% desktop, 40% mobile]

Current dropdown problems:
- [Problem 1: e.g., Using native <select> - looks different on iOS, Android, Windows, Mac]
- [Problem 2: e.g., Country dropdown has 195 countries with no search - scroll hell]
- [Problem 3: e.g., Selected value not clearly visible - looks like placeholder]
- [Problem 4: e.g., Multi-select with checkboxes but no clear indication of how many selected]
- [Problem 5: e.g., Dropdown opens upward on mobile, gets cut off by viewport]

User context: [How users interact with dropdowns, common selections, frustration points]

Please provide:
1. When to use dropdown vs. alternatives (radio, autocomplete, segmented control)
2. Single-select dropdown patterns
3. Multi-select dropdown patterns
4. Search and filter within dropdowns
5. Mobile-optimized dropdown patterns
6. Visual states (closed, open, selected, disabled)
7. Keyboard navigation and accessibility
8. Long option list strategies

Consider: [Constraints - e.g., Must work on mobile, accessibility requirements, international users, right-to-left languages, slow networks]
```

💡 What to customize:

- [Product Type] = E-commerce, SaaS app, Booking system, Admin panel, Form builder
- [Dropdown types] = Types of selection patterns you need
- [Option list sizes] = How many options in your dropdowns
- [Use contexts] = Where dropdowns appear
- [Problems 1-5] = Current dropdown issues
- Upload screenshots showing current dropdown designs
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UI Component Designer specializing in dropdown menus, select fields, and picker patterns.

I'm designing dropdown components for a Travel Booking Platform that need to handle complex selections like destinations, dates, travelers, and filters.

[User would attach dropdown screenshots here]

Dropdown requirements:
- Dropdown types needed:
  - Destination picker (airports, cities - 5,000+ options)
  - Date range picker (check-in to check-out)
  - Traveler selector (adults, children, infants with +/- controls)
  - Class selection (Economy, Premium, Business, First - 4 options)
  - Filter dropdowns (price range, amenities, 10-30 options each)
  - Multi-select filters (amenities: WiFi, Pool, Parking, etc.)
- Option list sizes:
  - Small: 3-5 options (travel class, traveler types)
  - Medium: 10-30 options (filter categories)
  - Large: 500+ options (cities)
  - Huge: 5,000+ options (all airports worldwide)
- Use contexts:
  - Search form (destination, dates, travelers - hero section)
  - Filter sidebar (price, amenities, ratings)
  - Checkout form (country, payment method)
  - Account settings (language, currency, notifications)
- Device usage: 55% mobile (growing), 45% desktop

Current dropdown problems:
- Using native <select> for destination - looks different on every device, iOS shows full-screen picker, Android shows bottom sheet, desktop shows tiny menu - inconsistent experience
- Airport/city dropdown has 5,000+ options with no search or filtering - users scroll forever trying to find "San Francisco" or type "SFO" but nothing happens
- Selected destination shows as "Select destination" placeholder even after selection - users can't see what they picked
- Multi-select amenities (WiFi, Pool, Gym, Parking, etc.) uses checkboxes but shows "5 selected" with no easy way to see which 5 or remove individual items
- Date picker dropdown opens upward on mobile when near bottom of screen - gets cut off by viewport, dates not visible
- Traveler selector shows "2 Adults, 1 Child" but clicking it shows confusing form - not clear how to add/remove travelers
- Country dropdown (195 countries) is alphabetical - US users scroll to bottom, no popular countries at top
- Dropdowns on mobile are tiny with 36px height - hard to tap, especially for destination search
- No keyboard shortcuts - can't type to jump to option, no arrow key navigation

User context: Users are booking travel quickly, often on phones while commuting. Destination search is most important - users know where they want to go ("New York" or "JFK"). Date selection happens after destination. Users frequently change traveler count (adding children, infants). Mobile users have large thumbs and small screens. International users expect their country at top of list. Accessibility important - screen reader users and keyboard-only users need full access.

Please provide:
1. When to use dropdown vs. alternatives (radio, autocomplete, segmented control)
2. Single-select dropdown patterns
3. Multi-select dropdown patterns
4. Search and filter within dropdowns
5. Mobile-optimized dropdown patterns
6. Visual states (closed, open, selected, disabled)
7. Keyboard navigation and accessibility
8. Long option list strategies

Consider: Search is critical for 1,000+ options. Mobile needs different pattern than desktop (bottom sheet vs. overlay). Must show selected values clearly. Multi-select needs easy review/removal. Date ranges need calendar view. Travelers need +/- steppers. Must work for screen readers. Fast loading for large lists (virtualization). RTL language support for Arabic/Hebrew users.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Search for 20+ options: If dropdown has more than 20 items, add search - users shouldn't scroll
✦ Common mistake: Using dropdown for 3-5 options - radio buttons are usually better (all visible)
✦ Best with: Claude (excellent at component pattern decisions), ChatGPT (good for mobile optimization)
✦ Remix it: "Design the country selector - smart ordering with popular countries, search, flags"
✦ Pro move: Ask "Create the dropdown decision tree - flowchart for choosing right selection pattern"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

Try these next:

- "Design the autocomplete pattern - search with suggestions, recent items, keyboard navigation"
- "Create the mobile bottom sheet pattern - native-feeling selection on iOS and Android"
- "How should multi-select chips work - displaying selected items, removing individual selections?"
- "Design the cascading dropdown - country → state → city selection with dependencies"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![35_Example_Output.png](35_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**
→ Recipe #34: [Polish Your Input Fields](R-34%20Polish%20Your%20Input%20Fields%202d767ccc6bef806aa554c4a058472a9b.md)
→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)

</aside>