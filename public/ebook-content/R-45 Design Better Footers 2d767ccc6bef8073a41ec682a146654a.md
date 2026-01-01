# R-45: Design Better Footers

# Recipe #45: Design Better Footers

Category: UI & Visuals  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning website footers that are cluttered, hard to navigate, or missing important information - footers with 50+ links in tiny text, inconsistent styling, or users can't find contact info, legal pages, or social links. The footer is an afterthought instead of a useful navigation tool.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many websites have poorly designed footers - cramming every possible link into tiny text, inconsistent column widths creating visual chaos, burying important information (contact, support) among 100 other links, using 10px gray text on gray backgrounds (unreadable), no clear hierarchy between important and minor links, duplicate navigation from the header, or footers that take up entire screen on mobile. Users scroll to footer looking for contact info and can't find it, abandon forms because they can't find privacy policy, or ignore footer completely because it's overwhelming. You need footers that organize information clearly, prioritize important links, and help users find what they need quickly.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide footer structure recommendations (4-column desktop layout scaling to stacked mobile with pre-footer newsletter and sub-footer legal sections), content prioritization guidance keeping link counts under 30 while prominently featuring contact info and support in column 1, column organization grouping related links (Product, Resources, Company) with clear visual hierarchy using proper sizing and WCAG AA contrast, essential element specifications for contact, legal, social, and newsletter placement, mobile-optimized patterns (stacked sections or simplified views avoiding accordion nightmares), and complete accessibility considerations including 4.5:1 contrast ratios and keyboard navigation. Optionally includes footer mockups for desktop and mobile.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Information Architect specializing in footer design, navigation hierarchy, and content organization.

I'm designing a footer for a [Website Type] to organize [Footer Content] and help users find [Key Information] easily.

[OPTIONAL: Attach screenshots of current footer or competitor examples]

Footer requirements:
- Website type: [e.g., E-commerce, SaaS product, Marketing site, Blog, Corporate]
- Key information: [e.g., Contact, Support, Legal, Social, Newsletter, Product links]
- Link volume: [e.g., 10-20 links, 30-50 links, 100+ links]
- User needs: [e.g., Find contact info, Access legal pages, Subscribe to newsletter, Follow social media]
- Device usage: [e.g., 60% desktop, 40% mobile]

Current footer problems:
- [Problem 1: e.g., 80 links in footer - overwhelming, can't scan]
- [Problem 2: e.g., Contact info buried in column 4 of 6 - hard to find]
- [Problem 3: e.g., 10px gray text on light gray background - unreadable]
- [Problem 4: e.g., 6 equal-width columns on desktop become accordion nightmare on mobile]
- [Problem 5: e.g., Duplicate header navigation - footer just repeats same links]

User context: [Why users visit footer, what they're looking for, urgency level]

Please provide:
1. Footer structure and layout (columns, sections, hierarchy)
2. Content prioritization (what to include, what to exclude)
3. Column organization (grouping related links)
4. Visual hierarchy (sizing, spacing, emphasis)
5. Essential elements (contact, legal, social, newsletter)
6. Mobile footer patterns (accordion, stacked, simplified)
7. Footer navigation vs. header navigation
8. Accessibility considerations

Consider: [Constraints - e.g., Must include 50+ legal links, multiple languages, contact info must be prominent, mobile-first audience]
```

💡 What to customize:

- [Website Type] = E-commerce store, SaaS landing page, Corporate site, Blog, Documentation
- [Footer Content] = What needs to be in footer
- [Key Information] = What users look for most
- [Link volume] = How many links to organize
- [Problems 1-5] = Current footer issues
- Upload current footer or examples
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Information Architect specializing in footer design, navigation hierarchy, and content organization.

I'm designing a footer for a SaaS Product Website to organize product info, resources, legal pages, and company links while making contact information easy to find.

[User would attach footer screenshots here]

Footer requirements:
- Website type: SaaS product marketing site (B2B, project management tool)
- Key information:
  - Contact sales (high priority - leads)
  - Support/Help center (high priority - existing customers)
  - Legal pages (required - privacy, terms, security)
  - Social media links (medium priority - community)
  - Newsletter signup (medium priority - marketing)
  - Product features (low priority - already in header)
  - Company info (low priority - about, careers, press)
- Link volume: 45-60 total links across all categories
- User needs:
  - New visitors: Contact sales, pricing, features
  - Existing customers: Support, login, help docs
  - Researchers: Legal pages, security info, case studies
  - Job seekers: Careers page
  - Press: Media kit, press releases
- Device usage: 55% desktop, 35% mobile, 10% tablet

Current footer problems:
- 80+ links crammed into footer - 8 columns of tiny text, completely overwhelming, users can't scan
- Contact sales buried in column 6 next to "Media Kit" and "Press Releases" - most important CTA hidden among low-priority links
- 10px light gray text (#CCCCCC) on white background - fails WCAG contrast (1.6:1), elderly users and low-vision users can't read
- Desktop has 8 equal-width columns, mobile collapses to 8 accordion sections - users tap through 8 dropdowns looking for contact info (nightmare)
- Footer duplicates entire header navigation - Products, Solutions, Pricing, Resources all repeated, plus 50 additional links
- No visual hierarchy - "Contact Sales" (critical CTA) same size as "Cookie Policy" (required legal link)
- Newsletter signup box is tiny with 11px placeholder text - users don't notice it
- Social media icons scattered - LinkedIn in column 2, Twitter in column 5, Instagram in column 7 (inconsistent)

User context: Potential customers (40% of footer visitors) scrolling to footer looking for contact info or pricing. Existing customers (30%) need support/help center link. Researchers (20%) checking legal compliance (GDPR, SOC2). Job seekers (10%) looking for careers. Mobile users frustrated with 8-accordion footer. Footer is last-resort navigation - users couldn't find what they need in header/body.

Please provide:
1. Footer structure and layout (columns, sections, hierarchy)
2. Content prioritization (what to include, what to exclude)
3. Column organization (grouping related links)
4. Visual hierarchy (sizing, spacing, emphasis)
5. Essential elements (contact, legal, social, newsletter)
6. Mobile footer patterns (accordion, stacked, simplified)
7. Footer navigation vs. header navigation
8. Accessibility considerations

Consider: Contact sales must be prominent (revenue driver). Support link critical for customer retention. Legal pages required but low priority. Don't duplicate header nav. Mobile-first - 35% of users. WCAG AA compliance (4.5:1 contrast). Keep link count under 30 if possible.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Contact info in column 1: Don't bury contact in column 6 - put it left side, first column, always visible
✦ Common mistake: Duplicating header nav - footer is for secondary/utility links, not repeating primary nav
✦ Best with: Claude (excellent at information architecture), ChatGPT (good for content prioritization)
✦ Remix it: "Design the mega footer - organizing 100+ links for large enterprises with multiple products"
✦ Pro move: Ask "Create the footer analytics report - which links are clicked most, optimize based on data"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the newsletter signup section - pre-footer email capture with value proposition"
- "Create the mobile footer strategy - simplified vs. accordion vs. fully stacked"
- "How should multi-language footers work - language selector, translated links, international contact info?"
- "Design the footer for dark mode - ensuring readability and proper contrast on dark backgrounds"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![45_Example_Output.png](45_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #06: [Design Search & Filters](R-06%20Design%20Search%20&%20Filters%202d667ccc6bef805ca459de3061219cd3.md)
→ Recipe #13: [Fix Messy Settings Pages](R-13%20Fix%20Messy%20Settings%20Pages%202d667ccc6bef80a7a976db712071bdce.md)
→ Recipe #39: [Iterate Your Hero Sections](R-39%20Iterate%20Your%20Hero%20Sections%202d767ccc6bef80a294e9c663923f0a75.md)

</aside>