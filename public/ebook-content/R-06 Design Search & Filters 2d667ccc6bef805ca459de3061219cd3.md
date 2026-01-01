# R-06: Design Search & Filters

# Recipe #6: Design Search & Filters

Category: Wireframing & IA  |  ⏱️ 30-35 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're designing search and filter interfaces for apps with large datasets (1,000+ items) - need to structure faceted search, determine filter priority, design active filter UI, and handle edge cases like zero results. Users need to narrow down options efficiently.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have poorly structured search and filter systems - too many filter options overwhelming users, no clear filter hierarchy, active filters hidden or unclear, no way to quickly clear all filters, inconsistent filter types (checkboxes, dropdowns, sliders mixed randomly), and terrible "no results" states that just say "0 results" without helping users. Users apply filters but can't see what's active, get zero results and give up, or face 50 filter options with no organization. You need a structured approach to faceted search with clear filter hierarchy, visible active filters, and helpful zero-results states.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a prioritized list of 5 key filters (e.g., Location, Price, Bedrooms) with detailed structural sidebar layout showing primary filters expanded and secondary collapsed. You'll get active filter UI patterns (removable chips with "clear all"), filter type recommendations (sliders for ranges, checkboxes for multi-select, radio for single choice), sorting options with default, helpful "No Results" states with suggestions and similar items, mobile-optimized bottom sheet design with apply button, and filter logic guidance (OR within categories, AND between) with real-time result counts and filter dependencies.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Information Architect specializing in search interfaces, faceted navigation, and filter systems.

I am redesigning the [Search Results View] for an app with [Number]+ items. Create a structural layout for a 'Faceted Search' sidebar.

[OPTIONAL: Attach screenshots of current search/filter interface or competitor examples]

Search and filter requirements:
- Content being searched: [e.g., Products, Properties, Jobs, Articles, Files]
- Dataset size: [e.g., 1,000 items, 10,000 items, 100,000+ items]
- User search patterns: [e.g., Browse by category, Filter by attributes, Price-focused, Location-based]
- Filter types needed: [e.g., Category, Price range, Location, Date, Rating, Attributes]

Please provide:
1. List the 5 most important filters (prioritized by user needs)
2. Structural layout for faceted search sidebar
3. UI pattern for 'Active Filters' (e.g., chips or tags)
4. Filter type recommendations (checkbox, dropdown, slider, etc.)
5. Sorting options and default sort
6. "No Results Found" wireframe with helpful suggestions
7. Mobile filter pattern
8. Filter logic (AND vs OR, filter dependencies)

Consider: [Constraints - e.g., Must work on mobile, large dataset performance, filter counts in real-time, save filter combinations]
```

💡 What to customize:

- [Search Results View] = Product listings, Property search, Job board, Content library
- [Number] = Size of your dataset
- [Content type] = What users are searching for
- [Filter types] = Available filter criteria
- Upload current search/filter interface or examples
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Information Architect specializing in search interfaces, faceted navigation, and filter systems.

I am redesigning the Property Search Results for a Real Estate app with 15,000+ property listings. Create a structural layout for a 'Faceted Search' sidebar.

[User would attach search interface screenshots here]

Search and filter requirements:
- Content being searched: 
  - Residential properties (houses, apartments, condos)
  - Rental and sale listings
  - 15,000+ active listings across 50+ cities
- Dataset size: 15,000 active listings, growing 200-300 per month
- User search patterns:
  - 70% start with location (city or neighborhood)
  - 60% filter by price range first
  - 50% filter by number of bedrooms/bathrooms
  - 40% use property type filter (house, apartment, condo)
  - 30% filter by amenities (parking, pool, gym)
  - Most users apply 3-5 filters total
- Filter types needed:
  - Location (city, neighborhood, radius)
  - Price range (min-max slider)
  - Property type (house, apartment, condo, townhouse)
  - Bedrooms (1, 2, 3, 4, 5+)
  - Bathrooms (1, 1.5, 2, 2.5, 3+)
  - Square footage range
  - Amenities (parking, pool, gym, pet-friendly, etc.)
  - Listing type (sale, rent)
  - Date listed (last 24h, last week, last month)
  - Virtual tour available (yes/no)

Current problems:
- 20+ filters displayed equally - overwhelming, no hierarchy
- Active filters hidden - users don't know what's applied
- "0 results" just shows empty page - no help or suggestions
- Mobile has no filters - users can't narrow search on phone
- Filters don't show result counts - users apply filters that yield zero results

Please provide:
1. List the 5 most important filters (prioritized by user needs)
2. Structural layout for faceted search sidebar
3. UI pattern for 'Active Filters' (e.g., chips or tags)
4. Filter type recommendations (checkbox, dropdown, slider, etc.)
5. Sorting options and default sort
6. "No Results Found" wireframe with helpful suggestions
7. Mobile filter pattern
8. Filter logic (AND vs OR, filter dependencies)

Consider: Must prioritize location and price (most used). Show result counts per filter option. Mobile users need quick access to top 5 filters. "No results" should suggest loosening filters. Save search functionality for repeat users. Performance with 15K+ items.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Don't forget "No Results Found": It's an opportunity to suggest related items and help users adjust filters
✦ Common mistake: Hiding active filters - users forget what they applied, always show chips at top
✦ Best with: Claude (excellent at information architecture), ChatGPT (good for filter hierarchy)
✦ Remix it: "Design the saved search feature - let users save filter combinations and get alerts for new matches"
✦ Pro move: Ask "Create the filter analytics dashboard - track which filters are most used, which combinations yield zero results"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the mobile filter bottom sheet - how to present 20+ filters on small screens"
- "Create the filter result count system - show how many results each filter option will yield"
- "How should filter dependencies work - when selecting 'Rent' changes available price ranges?"
- "Design the saved search feature - save filter combinations, get alerts for new matches"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![6_Example_Output.png](6_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**
→ Recipe #38: [Build Smart Search Bars](R-38%20Build%20Smart%20Search%20Bars%202d767ccc6bef808691d8cc363e24cc2d.md)
→ Recipe #40: [Design Better Modals](R-40%20Design%20Better%20Modals%202d767ccc6bef800d9012d412a0122f53.md)
→ Recipe #48: [Design Smart Defaults](R-48%20Design%20Smart%20Defaults%202d767ccc6bef80729793db8459ae5170.md)

</aside>