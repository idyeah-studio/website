# R-48: Design Smart Defaults

# Recipe #48: Design Smart Defaults

Category: Systems & Components  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're setting up Figma components, templates, or design systems and want to speed up designers' workflow - every new design starts from blank components, designers manually configure the same settings repeatedly, or templates are too generic to be useful. Smart defaults can eliminate repetitive work and guide designers toward good practices.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many design systems lack thoughtful defaults - components drop in blank (empty button, no text, no icon, designers fill everything manually), form fields start empty (designers type placeholder text every time), cards have no example content (hard to visualize layout), or templates are completely bare (defeating the purpose of templates). Designers waste time on repetitive setup - typing "Button" in every button, adding "[john@example.com](mailto:john@example.com)" to email inputs, creating lorem ipsum for cards. Poor defaults also lead to inconsistency - some designers use "Submit", others "Save", others "Continue" for the same action. You need smart defaults that provide helpful starting points (realistic example content, common configurations, guided choices) while remaining easy to customize.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide realistic component default content (buttons with "Save Changes" instead of blank, inputs with helpful placeholders like "[you@company.com](mailto:you@company.com)", cards with example data showing task titles and assignees, pre-configured form templates), default variant selections explaining which variants should appear by default and why, component sizing specifications with Auto Layout defaults (hug/fill/fixed, spacing tokens, padding values), pre-structured template layouts for dashboards and forms that start designers 80% done, smart placeholder strategies distinguishing helpful examples from generic text, guidance on when NOT to set defaults (unique content, highly variable cases), and maintenance strategies for updating defaults based on usage data and team feedback. Optionally includes before/after examples showing components with poor versus smart defaults.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Design Systems Specialist focusing on component defaults, starter content, and workflow optimization in Figma.

I'm setting up smart defaults for a [Product Type] design system to help [Team Size] designers work faster and maintain consistency.

[OPTIONAL: Attach Figma component examples or templates]

Default requirements:
- Component types: [e.g., Buttons, Inputs, Cards, Forms, Tables, Modals]
- Common use cases: [e.g., Login forms, Product cards, User profiles, Dashboards]
- Team workflow: [e.g., Start from templates, Drag components from library, Copy existing designs]
- Content needs: [e.g., Realistic examples, Lorem ipsum, Actual product data]
- Flexibility level: [e.g., Quick edits common, Heavily customized, Mostly use as-is]

Current default problems:
- [Problem 1: e.g., Buttons drop in empty - designers type "Button" every time]
- [Problem 2: e.g., Input fields have no placeholder text - designers add manually]
- [Problem 3: e.g., Cards are blank - can't visualize layout with content]
- [Problem 4: e.g., Form templates generic - don't match real use cases]
- [Problem 5: e.g., Modal starts at wrong size - designers resize every time]

Team context: [Designer experience levels, common tasks, speed vs. customization preference]

Please provide:
1. Component default content (text, images, icons, realistic examples)
2. Default variant selections (which variant shows by default)
3. Default component sizing (width, height, padding, responsive settings)
4. Template default structure (pre-configured layouts, common patterns)
5. Smart placeholder strategies (helpful vs. distracting)
6. Auto-layout defaults (hug, fill, fixed, spacing values)
7. When NOT to set defaults (cases where blank is better)
8. Maintenance strategy (updating defaults, versioning)

Consider: [Constraints - e.g., Multi-language products, Various content lengths, Different user roles, Accessibility requirements]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Marketing site
- [Team Size] = Designers using the system
- [Component types] = What components need defaults
- [Common use cases] = Typical design scenarios
- [Content needs] = Real data vs. placeholder
- [Problems 1-5] = Current default issues
- Attach Figma examples or templates
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Design Systems Specialist focusing on component defaults, starter content, and workflow optimization in Figma.

I'm setting up smart defaults for a SaaS Project Management Tool design system to help 8 designers work faster on tasks, projects, and dashboards.

[User would attach Figma component/template examples here]

Default requirements:
- Component types:
  - Buttons (primary, secondary, icon buttons)
  - Inputs (text, email, password, textarea, search)
  - Cards (task cards, project cards, user cards)
  - Forms (login, signup, create task, edit project)
  - Tables (task lists, project lists, user lists)
  - Modals (confirmations, multi-step forms)
  - Navigation (header, sidebar, tabs)
- Common use cases:
  - Task management (80% of designs involve tasks)
  - Project dashboards (status, progress, team members)
  - User profiles and settings
  - Team collaboration (comments, assignments, mentions)
  - Reports and analytics
- Team workflow:
  - Start from component library (60%)
  - Start from templates (30%)
  - Copy existing designs (10%)
  - Designers prefer speed over customization
- Content needs:
  - Realistic task examples ("Design homepage", "Fix login bug")
  - Real user names (not "John Doe")
  - Actual dates and times
  - Believable project names
  - Avoid lorem ipsum (confusing)
- Flexibility level:
  - Quick edits common (change text, swap images)
  - Heavy customization rare (80% use defaults with minor tweaks)
  - Speed prioritized (ship features fast)

Current default problems:
- Buttons drop in completely empty - designers type "Button" placeholder text every single time, then change to actual label - waste of time
- Input fields have no placeholder text or labels - designers manually add "Email address" and "john@example.com" to every email input across hundreds of forms
- Task cards are blank white rectangles - impossible to visualize how layout works with real task titles, assignees, due dates, status - designers create fake content every time
- Login form template is generic - just "Label" and "Input" repeated, doesn't show actual login flow (email, password, remember me, forgot password link, submit button)
- Modals default to 400px width - too small for multi-step forms, designers resize to 600px every time, should default to common size
- Project card has no example data - shows empty state, not helpful for designing dashboard with 20 project cards
- Search input has no search icon - designers add magnifying glass icon every time
- Date pickers show no date - "MM/DD/YYYY" placeholder not helpful, should show example date like "Dec 15, 2024"

Team context:
- 8 designers, mix of junior (3), mid (4), senior (1)
- Fast-paced environment (2-week sprints)
- Designers create 10-20 task cards per day
- Realistic examples help designers visualize layouts
- Want to ship features quickly, not spend time on setup
- Components should "just work" with minimal configuration

Please provide:
1. Component default content (text, images, icons, realistic examples)
2. Default variant selections (which variant shows by default)
3. Default component sizing (width, height, padding, responsive settings)
4. Template default structure (pre-configured layouts, common patterns)
5. Smart placeholder strategies (helpful vs. distracting)
6. Auto-layout defaults (hug, fill, fixed, spacing values)
7. When NOT to set defaults (cases where blank is better)
8. Maintenance strategy (updating defaults, versioning)

Consider: Task-focused product (most designs involve tasks). Designers value speed. Realistic examples better than generic placeholders. Multi-step forms common. Dashboard layouts with 10-20 cards. Mobile responsive (35% mobile users). Accessibility (labels, ARIA).
```

</aside>

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Realistic beats generic: "Design homepage mockup" is more helpful than "Task name" as default text
✦ Common mistake: Blank components - setting good defaults speeds up design 10x
✦ Best with: Claude (excellent at realistic example content), ChatGPT (good for placeholder strategies)
✦ Remix it: "Create the design template library - pre-configured layouts for common screens"
✦ Pro move: Ask "Analyze component usage - which defaults are kept vs. always changed?"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create realistic example content - task names, user names, project titles that feel real"
- "Design the form template library - login, signup, settings, create/edit forms with smart defaults"
- "How to set Auto Layout defaults - spacing, padding, sizing, constraints for every component"
- "Build the placeholder text system - helpful placeholders for all input types"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![48_Example_Output.png](48_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)
→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)
→ Recipe #34: [Polish Your Input Fields](R-34%20Polish%20Your%20Input%20Fields%202d767ccc6bef806aa554c4a058472a9b.md)

</aside>