# R-55: Create Pattern Libraries

# Recipe #55: Create Pattern Libraries

Category: Systems & Components  |  ⏱️ 40-45 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're building reusable UI patterns - common compositions like login forms, dashboard layouts, settings pages, data tables, card grids, navigation patterns - that solve recurring design problems. Your team rebuilds the same layouts repeatedly, lacks standardized patterns for common features, or needs to speed up design work with pre-built compositions.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many teams lack pattern libraries - designers rebuild login forms from scratch every time (same username/password/remember me layout created 10+ times), no standardized dashboard patterns (every dashboard looks different, inconsistent layouts), missing common patterns like empty states, error pages, onboarding flows, settings pages, or confirmation dialogs. Teams waste time recreating common layouts, create inconsistent experiences (login looks different in web vs. mobile app), struggle with edge cases (forgot password flow, email verification, multi-step forms), and lack guidance on best practices for common features. You need a pattern library - pre-built, well-designed compositions of components (not individual buttons, but complete login forms, dashboard layouts, settings pages) that capture best practices, handle edge cases, maintain consistency, and speed up design from hours to minutes. Patterns are opinionated combinations of components that solve specific problems.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide comprehensive pattern categories covering forms (login, signup, multi-step wizards, settings), dashboards (task, analytics, team overview), navigation (header, sidebar, mobile menu, tabs, breadcrumbs), data display (list, grid, table, detail views, activity feeds), state patterns (empty, zero results, error pages, loading, success), settings (account, team, notifications, billing), and onboarding (welcome, product tour, first task flows) with detailed anatomy breakdown showing component structure, spacing, and layouts for each pattern, essential pattern variants for simple vs. complex implementations with customization guidance on when to use which variant, comprehensive edge case handling for empty states, loading states, error states, first-time users, permission denied scenarios, and offline mode with specific designs for each, complete pattern documentation templates covering when to use patterns, anatomy, variants, customization points, best practices, accessibility requirements, and visual examples, clear guidance on pattern vs. component decisions explaining when to create a pattern (used 3+ times, standardized structure) vs. using individual components (unique layouts, high flexibility needs), and pattern maintenance strategies including update processes, semantic versioning, deprecation workflows, and usage tracking. Optionally includes visual examples showing pattern library organization across all categories.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Pattern Library Specialist focusing on reusable UI compositions, design patterns, and best practice templates.

I'm creating a pattern library for a [Product Type] to provide pre-built solutions for common design scenarios like [Pattern Types] that speed up design work and maintain consistency.

[OPTIONAL: Attach examples of patterns being recreated repeatedly]

Pattern library requirements:
- Pattern categories: [e.g., Forms, Dashboards, Navigation, Data display, Empty states, Errors, Settings]
- Common scenarios: [e.g., Login/signup, User profiles, Task lists, File management, Reports, Settings pages]
- Complexity level: [e.g., Simple patterns (login form), Medium (dashboard layout), Complex (multi-step wizard)]
- Team size: [e.g., 5 designers who need ready-made patterns, 15 designers across 3 products]
- Customization needs: [e.g., Patterns should be 80% ready, allow 20% customization]

Current pattern problems:
- [Problem 1: e.g., No pattern library - designers rebuild login forms from scratch every time]
- [Problem 2: e.g., Inconsistent patterns - 5 different dashboard layouts across product]
- [Problem 3: e.g., Missing edge cases - patterns don't show forgot password, empty states, errors]
- [Problem 4: e.g., Just components, no compositions - have buttons but no complete forms]
- [Problem 5: e.g., Patterns not documented - no guidance on when to use which pattern]

Team context: [Designer experience levels, common design tasks, speed vs. customization needs]

Please provide:
1. Pattern categories (forms, dashboards, navigation, data display, states, settings)
2. Essential patterns per category (login form, task dashboard, empty states, etc.)
3. Pattern anatomy (what components make up each pattern)
4. Pattern variants (simple vs. complex forms, grid vs. list layouts)
5. Edge case handling (errors, empty states, loading, first-time use)
6. Pattern documentation (when to use, customization points, examples)
7. Pattern vs. component (when to create pattern vs. use individual components)
8. Pattern maintenance (updating patterns, versioning, deprecation)

Consider: [Constraints - e.g., Patterns must work across 3 products, Mobile + desktop versions, Accessibility built-in, Allow customization without breaking pattern]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Enterprise software
- [Pattern Types] = Common design scenarios your team faces
- [Pattern categories] = What types of patterns needed
- [Common scenarios] = Specific use cases
- [Complexity level] = Simple to complex patterns
- [Problems 1-5] = Current pattern issues
- Attach examples of repeated patterns
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Pattern Library Specialist focusing on reusable UI compositions, design patterns, and best practice templates.

I'm creating a pattern library for a SaaS Project Management Tool to provide pre-built solutions for common design scenarios like login/signup flows, task dashboards, settings pages, empty states, and data tables that speed up design work and maintain consistency.

[User would attach examples of patterns being recreated]

Pattern library requirements:
- Pattern categories:
  - Forms: Login, signup, forgot password, multi-step forms, settings forms
  - Dashboards: Task dashboard, project overview, analytics dashboard, team dashboard
  - Navigation: Header nav, sidebar nav, mobile menu, tabs, breadcrumbs
  - Data display: Task lists, project cards, data tables, file lists, activity feeds
  - Empty states: No tasks, no projects, no search results, first-time user
  - Error states: 404 page, 500 error, permission denied, offline mode
  - Settings: Account settings, team settings, notification preferences, billing
  - Onboarding: Welcome flow, product tour, first task, invite team
- Common scenarios:
  - User authentication: Login (email/password + social), signup (with email verification), forgot password (email reset flow), 2FA setup
  - Task management: Create task, edit task, task list (filters, sorting), task details, bulk actions
  - Project views: Project dashboard (overview, progress, team), project list (grid/list), project settings
  - Team collaboration: Invite members, assign tasks, comments, @mentions, notifications
  - Settings & preferences: Profile settings, team settings, notification settings, billing/subscription
  - Reports & analytics: Charts, metrics cards, date range picker, export options
- Complexity level:
  - Simple: Login form (5 elements), empty state (icon + message + CTA)
  - Medium: Task dashboard (header, filters, task list, pagination), settings page (tabs, forms, save button)
  - Complex: Multi-step signup (5 steps with progress), onboarding flow (3-5 screens), project creation wizard
- Team size: 8 designers creating 50+ screens per quarter
- Customization needs:
  - Patterns should be 80% complete (ready to use as-is for most cases)
  - Allow 20% customization (swap content, adjust spacing, add/remove optional elements)
  - Lock core structure (maintain layout, spacing, component relationships)

Current pattern problems:
- No pattern library - designers rebuild login form from scratch every time (username input, password input, "Remember me" checkbox, "Forgot password?" link, "Sign in" button) - same layout created 15+ times across features, wastes 30-60 minutes each time
- Inconsistent patterns across product - 5 different dashboard layouts (some with sidebar filters, some with top filters, some with no filters), 3 different empty state designs (some with illustrations, some text-only, some with CTA buttons), no standardization
- Missing edge cases in patterns - login form exists but forgot password flow missing, signup form exists but email verification step missing, task list exists but empty state missing, no error state patterns
- Only individual components, no compositions - have Button, Input, Card components but no complete "Login Form" pattern, no "Task Dashboard" pattern, designers assemble from scratch
- Patterns not documented - no guidance on when to use grid vs. list layout, when to use modal vs. page for forms, no examples of pattern usage
- Patterns don't handle responsive - desktop patterns exist but mobile versions missing or inconsistent, no guidance on how patterns adapt
- No pattern for common features - every designer creates their own "Settings Page" layout, "Invite Team Modal", "Empty Task List", inconsistent results

Team context:
- 8 designers, mixed experience (2 junior, 5 mid, 1 senior)
- Current workflow: Start from blank canvas, assemble components, recreate layouts = 2-3 hours per screen
- Want pattern workflow: Drag pattern, customize content, minor tweaks = 20-30 minutes per screen
- Common tasks: Login/signup (done 10+ times), dashboards (20+ variations), settings pages (15+ versions), empty states (50+ instances)
- Need speed: Shipping features every 2 weeks, can't spend hours on layouts
- Need consistency: 3 products (web app, mobile app, marketing site) should feel cohesive

Please provide:
1. Pattern categories (forms, dashboards, navigation, data display, states, settings)
2. Essential patterns per category (login form, task dashboard, empty states, etc.)
3. Pattern anatomy (what components make up each pattern)
4. Pattern variants (simple vs. complex forms, grid vs. list layouts)
5. Edge case handling (errors, empty states, loading, first-time use)
6. Pattern documentation (when to use, customization points, examples)
7. Pattern vs. component (when to create pattern vs. use individual components)
8. Pattern maintenance (updating patterns, versioning, deprecation)

Consider: Patterns must work across web + mobile. Speed up design 10x (hours → minutes). Handle edge cases (empty, error, loading). Allow customization without breaking layout. Maintain consistency across 3 products. Accessibility built-in. Documented with examples and guidance.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Patterns are opinionated compositions: Not just components, but complete solutions with layout, spacing, and best practices built-in
✦ Common mistake: Building pattern for every screen - create patterns for repeated scenarios (login, dashboard), not one-offs
✦ Best with: Claude (excellent at pattern organization), ChatGPT (good for pattern documentation)
✦ Remix it: "Create the onboarding pattern library - welcome screen, product tour, first task, team invite flows"
✦ Pro move: Ask "Audit our designs - find screens created 3+ times that should be patterns"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the form pattern library - login, signup, forgot password, multi-step wizard, settings forms"
- "Create the empty state pattern library - no content, zero results, permission denied, offline mode"
- "How to document patterns - when to use, customization points, examples, best practices"
- "Build the dashboard pattern library - task dashboard, analytics, team overview, project view"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![55_Example_Output.png](55_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)
→ Recipe #48: [Design Smart Defaults](R-48%20Design%20Smart%20Defaults%202d767ccc6bef80729793db8459ae5170.md)
→ Recipe #53: [Design Flexible Data Tables](R-53%20Flexible%20Data%20Tables%202d767ccc6bef8020b5e8fea04b8f6efe.md)
→ Recipe #54: [Create Flexible Chart Components](R-54%20Flexible%20Chart%20Components%202d767ccc6bef80c5b226e720fef24fa2.md)

</aside>