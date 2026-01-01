# R-36: Update Your Card Designs

# Recipe #36: Update Your Card Designs

Category: UI & Visuals  |  ⏱️ 20-25 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're redesigning card-based layouts that feel cluttered, inconsistent, or hard to scan - cards with too much information, poor visual hierarchy, unclear CTAs, or layouts that break on different screen sizes. Users struggle to find what they need or take action.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications use cards poorly - cramming too much content into each card, inconsistent spacing and alignment, unclear what's clickable vs. static, cards of wildly different heights creating awkward grids, poor mobile responsiveness, weak visual hierarchy where everything looks equally important, and actions buried or unclear. Users see walls of cards but can't quickly scan for what matters. Cards that look good with sample data break with real content (long titles, missing images). You need card designs that prioritize content, guide attention, scale gracefully, and make actions obvious.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide card content hierarchy prioritizing primary information (title, image, rating, price) over secondary and tertiary details with clear visual structure and spacing systems, card sizing and responsive grid layouts (3-column desktop, 2-column tablet, 1-column mobile) with fixed heights to prevent gaps, interaction patterns covering hover states, clickable areas, and action placement, image handling with enforced aspect ratios and fallbacks, metadata design using icons and text with truncation strategies, mobile adaptations simplifying content and optimizing for touch, and complete accessibility guidance including semantic HTML, keyboard navigation, and ARIA labels. Optionally includes card component specifications with variations.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UI Component Designer specializing in card-based layouts and content organization.

I'm designing card components for a [Product Type] that need to display [Content Type] clearly and effectively.

[OPTIONAL: Attach screenshots showing current card designs]

Card requirements:
- Card content: [e.g., Product listings, User profiles, Article previews, Dashboard widgets, File thumbnails]
- Information density: [e.g., Minimal (title + image), Moderate (title + description + metadata), Dense (multiple data points)]
- Card contexts: [e.g., Grid layouts, Lists, Dashboards, Feeds]
- Interaction patterns: [e.g., Entire card clickable, Multiple actions per card, Expandable details]
- Device usage: [e.g., 60% desktop, 40% mobile]

Current card problems:
- [Problem 1: e.g., Cards have 8+ pieces of info - overwhelming, can't scan quickly]
- [Problem 2: e.g., Primary CTA buried at bottom - users miss it]
- [Problem 3: e.g., Cards are different heights - creates awkward gaps in grid]
- [Problem 4: e.g., Entire card clickable but also has buttons - confusion about what happens on click]
- [Problem 5: e.g., Cards don't adapt to mobile - 3-column grid becomes tiny on 375px]

User context: [How users interact with cards, what they're looking for, typical workflows]

Please provide:
1. Card content hierarchy (what to prioritize, what to de-emphasize)
2. Visual structure and spacing
3. Card sizing and grid layouts
4. Interaction patterns (clickable cards, hover states, actions)
5. Image and media handling
6. Metadata and secondary information
7. Mobile card adaptations
8. Accessibility considerations

Consider: [Constraints - e.g., Variable content length, missing images, real-time updates, must work in different grid densities]
```

💡 What to customize:

- [Product Type] = E-commerce site, Content platform, Dashboard, Social feed, Portfolio
- [Content Type] = What cards display
- [Information density] = How much info per card
- [Card contexts] = Where cards appear
- [Interaction patterns] = How users interact
- [Problems 1-5] = Current card design issues
- Upload screenshots showing current card designs
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UI Component Designer specializing in card-based layouts and content organization.

I'm designing card components for an Online Course Platform that need to display course information clearly and drive enrollments.

[User would attach card screenshots here]

Card requirements:
- Card content:
  - Course title and subtitle
  - Instructor name and photo
  - Course thumbnail/cover image
  - Rating (stars + count)
  - Difficulty level (Beginner, Intermediate, Advanced)
  - Duration (hours of content)
  - Price or "Free"
  - Number of students enrolled
  - Category tags
  - Short description (1-2 sentences)
  - CTA button "Enroll Now" or "View Details"
- Information density: Moderate to high - need to show enough to help decision-making without overwhelming
- Card contexts:
  - Homepage grid (featured courses, 3 columns on desktop)
  - Category pages (4 columns, 20-30 courses)
  - Search results (variable count)
  - "My Courses" dashboard (enrolled courses)
  - Related courses sidebar (2 columns or stacked)
- Interaction patterns:
  - Entire card clickable to course details page
  - Separate "Enroll Now" button for direct enrollment
  - Heart icon to save to wishlist
  - Hover shows quick preview or more info
  - Mobile: tap card to view details
- Device usage: 50% desktop, 35% mobile, 15% tablet

Current card problems:
- Cards cram 10+ pieces of information - title, subtitle, instructor name + photo, rating, student count, duration, difficulty badge, price, category tags, description (2 lines), AND two buttons - visually overwhelming, can't quickly scan
- "Enroll Now" primary CTA is at bottom of card - users scroll past important info, many miss it entirely
- Cards have variable heights (some courses have 2-line titles, others 4-line) - creates awkward gaps in 3-column grid, looks broken
- Entire card is clickable BUT also has "Enroll Now" and "Save" buttons - users confused whether clicking card image enrolls them or goes to details
- Course thumbnail images are different aspect ratios (some 16:9, some square, some vertical) - cards look inconsistent
- 3-column desktop grid becomes 1 column on mobile (375px) - huge cards waste vertical space, users scroll forever
- Rating stars are tiny (12px) - hard to see quality at a glance
- Price text is same size as metadata (14px) - doesn't stand out enough for purchase decision
- Hover state only darkens background slightly - not clear cards are interactive

User context: Users browse 20-50 courses before enrolling. Quick scanning is critical - users need to see rating, price, and difficulty immediately. Mobile users browse on commute (glancing quickly). Desktop users compare multiple courses side-by-side. Enrolled students return to "My Courses" daily - need different card design for enrolled vs. browsing. Trust signals matter (rating, student count, instructor credibility).

Please provide:
1. Card content hierarchy (what to prioritize, what to de-emphasize)
2. Visual structure and spacing
3. Card sizing and grid layouts
4. Interaction patterns (clickable cards, hover states, actions)
5. Image and media handling
6. Metadata and secondary information
7. Mobile card adaptations
8. Accessibility considerations

Consider: Variable content length (some titles 30 chars, others 100 chars). Some courses free, others $299. Missing instructor photos for some courses. Real-time enrollment count updates. Must work in 2, 3, 4 column grids. Accessibility for screen readers and keyboard navigation. Course images must maintain consistent aspect ratio.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Fixed heights prevent grid gaps: All cards same height (with content truncation) creates cleaner grids
✦ Common mistake: Making entire card AND buttons clickable - confuses users, choose one interaction pattern
✦ Best with: Claude (excellent at content hierarchy), ChatGPT (good for interaction patterns)
✦ Remix it: "Design the card hover state - what additional info to reveal without overwhelming"
✦ Pro move: Ask "Create the card loading skeleton - placeholder while content loads"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the card variations - how cards adapt for list view vs. grid view vs. compact view"
- "Create the card action patterns - where to place primary CTA, secondary actions, overflow menu"
- "How should cards handle missing data - no image, no rating, no instructor photo?"
- "Design the mobile card swipe actions - swipe gestures for save, archive, delete"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![36_Example_Output.png](36_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #05: [Rank Dashboard Information](R-05%20Rank%20Dashboard%20Information%202d667ccc6bef80d2ac13f0eb7bcf0b17.md)
→ Recipe #20: [Audit Your Page Balance](R-20%20Audit%20Your%20Page%20Balance%202d667ccc6bef80a1b822db98adf1829c.md)
→ Recipe #28: [Remove Visual Clutter](R-28%20Remove%20Visual%20Clutter%202d767ccc6bef806ea5dbd329ca407ba1.md)

</aside>