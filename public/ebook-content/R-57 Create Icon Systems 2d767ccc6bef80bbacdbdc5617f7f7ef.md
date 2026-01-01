# R-57: Create Icon Systems

# Recipe #57: Create Icon Systems

Category: Systems & Components  |  ⏱️ 30-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're building or organizing an icon library - creating consistent icons for UI (navigation, actions, status indicators), choosing icon styles (outlined, filled, rounded, sharp), establishing sizing standards (16px, 24px, 32px), and organizing icons for easy discovery. Your current icons are inconsistent, scattered across files, or lack systematic approach to style and usage.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many teams struggle with icon systems - mixing different icon styles (some outlined, some filled, some from different libraries creating visual chaos), inconsistent sizing (18px, 20px, 22px, 24px icons randomly mixed), no naming conventions (save-icon, icon-save, disk-save all mean the same thing), icons scattered across files (designers can't find existing icons, create duplicates), or no usage guidelines (when to use outlined vs. filled, which size for which context). Teams waste time searching for icons, create visual inconsistency mixing styles, struggle with icon organization (200+ icons with no categories), or build icons from scratch when icon libraries exist. You need a systematic icon library - consistent visual style (single style or intentional multi-style system), standard sizing (16px, 24px, 32px grid-aligned), clear naming conventions (verb-noun format: edit-pencil, delete-trash), organized categories (navigation, actions, objects, status), and usage guidelines (when to use each style/size).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will deliver a complete icon system: consistent style guidelines (outlined/filled, 2px stroke, rounded corners), standard sizing (16/20/24/32/48px grid-aligned), systematic naming conventions (category-object-descriptor format), organized Figma library by category, usage guidelines per context, icon creation process with grid system, recommended icon libraries (Heroicons, Lucide, Phosphor), and maintenance workflows - transforming scattered inconsistent icons into a searchable, scalable, maintainable icon system.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Icon System Specialist focusing on icon style consistency, sizing standards, naming conventions, and library organization.

I'm building an icon system for a [Product Type] with [Icon Count] icons covering [Icon Categories] with consistent style and systematic organization.

[OPTIONAL: Attach current icon set or examples of icon inconsistencies]

Icon system requirements:
- Icon style: [e.g., Outlined only, Filled only, Both outlined + filled variants, Rounded, Sharp]
- Icon sizes: [e.g., 16px, 20px, 24px, 32px, 48px - which sizes needed]
- Icon categories: [e.g., Navigation, Actions, Objects, Status, Social, Files, Communication]
- Icon count: [e.g., Starting with 50 essential icons, Need 200+ icons, Existing 100 inconsistent icons]
- Platform: [e.g., Web (SVG), Mobile (vector), Multi-platform]

Current icon problems:
- [Problem 1: e.g., Mixed styles - some outlined, some filled, some from Material, some from Feather]
- [Problem 2: e.g., Inconsistent sizing - 18px, 20px, 22px, 24px mixed randomly]
- [Problem 3: e.g., No naming system - save-icon, icon-save, disk-save all different names]
- [Problem 4: e.g., Icons scattered - 20 Figma files, designers can't find existing icons]
- [Problem 5: e.g., No usage guidelines - designers don't know when to use outlined vs. filled]

Team context: [Designer icon needs, icon usage frequency, search vs. browse behavior]

Please provide:
1. Icon style guidelines (outlined, filled, rounded, sharp - choosing and maintaining consistency)
2. Icon sizing system (standard sizes, grid alignment, optical adjustments)
3. Icon naming conventions (consistent format, searchable, scalable)
4. Icon organization (categories, hierarchy, Figma library structure)
5. Icon usage guidelines (when to use which style, size, context)
6. Icon creation process (grid system, stroke width, corner radius, consistency checks)
7. Icon sources (icon libraries to use, when to create custom, licensing)
8. Icon library maintenance (adding icons, versioning, deprecation)

Consider: [Constraints - e.g., Must match brand style, Need 200+ icons quickly, Accessibility (icon + label), Consistent with design system]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Enterprise software
- [Icon Count] = How many icons needed
- [Icon Categories] = What types of icons
- [Icon style] = Outlined, filled, rounded, sharp
- [Icon sizes] = Which sizes to support
- [Problems 1-5] = Current icon issues
- Attach inconsistent icon examples
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Icon System Specialist focusing on icon style consistency, sizing standards, naming conventions, and library organization.

I'm building an icon system for a SaaS Project Management Tool with 150+ icons covering navigation, actions, objects, status, and communication with consistent outlined style and systematic organization.

[User would attach current mixed icon examples]

Icon system requirements:
- Icon style:
  - Primary: Outlined style (2px stroke, rounded corners)
  - Secondary: Filled variants for selected/active states (optional)
  - Consistent stroke width: 2px across all icons
  - Corner radius: 2px rounded (not sharp, not fully rounded)
  - Visual weight: Medium (balanced, not too thin or heavy)
- Icon sizes:
  - 16px: Small UI elements (buttons, inputs, compact tables)
  - 20px: Standard UI (navigation, toolbars, lists) - most common
  - 24px: Large UI (primary actions, cards, headers)
  - 32px: Feature icons (empty states, onboarding, illustrations)
  - 48px: Large illustrations (error pages, welcome screens)
- Icon categories:
  - Navigation: Home, dashboard, projects, tasks, settings, search (20 icons)
  - Actions: Edit, delete, add, save, share, download, upload (40 icons)
  - Objects: File, folder, calendar, user, team, document, image (30 icons)
  - Status: Success, warning, error, info, pending, completed (15 icons)
  - Communication: Comment, mention, notification, message, email (15 icons)
  - Social: GitHub, Twitter, LinkedIn, Slack, Google (10 icons)
  - Files: PDF, Word, Excel, Image, Video, Zip (10 icons)
  - Arrows & Navigation: Left, right, up, down, chevron, caret (15 icons)
- Icon count:
  - Phase 1: 50 essential icons (most frequently used)
  - Phase 2: Expand to 150+ icons (comprehensive coverage)
  - Current: 80 inconsistent icons scattered across files
- Platform: Web (React), exported as SVG, implemented as React components

Current icon problems:
- Mixed icon styles everywhere - 30 icons from Material Icons (filled), 25 from Feather (outlined thin), 15 from Heroicons (outlined), 10 custom (inconsistent stroke widths) - visual chaos, no cohesion
- Inconsistent sizing - some icons 18px, some 20px, some 22px, some 24px, mixed in same UI, not grid-aligned, optical size varies (some icons look bigger despite same pixel size)
- No naming conventions - same icon called: save-icon, icon-save, disk-save, floppy-disk, save-button-icon - designers can't find icons, create duplicates
- Icons scattered across 15 Figma files - no central icon library, each designer has own icon file, 20+ duplicate icons exist, impossible to maintain consistency
- No usage guidelines - designers don't know: when to use outlined vs. filled (mix randomly), which size for buttons vs. navigation (inconsistent), how to align icons with text (optical alignment issues)
- Custom icons don't match library style - designers create custom icons when can't find in library, custom icons have different stroke width (1px, 2px, 3px), different corner radius, don't match system
- No filled variants for active states - navigation uses outlined icons, no way to show selected/active tab, designers create ad-hoc solutions (background color, different icon entirely)

Team context:
- 8 designers need consistent icon system
- Current workflow: Search 15 files, can't find icon, create new one OR grab from random icon library = inconsistency
- Want workflow: Search centralized icon library by name/category, drag icon, optionally swap to filled variant = consistency
- Most common icons: Edit (used 100+ times), Delete (80+), Add (70+), Save (50+), Share (40+)
- Icon + label required for accessibility (icons alone not sufficient)
- Icons must work at 16px (small) and scale to 48px (large) without quality loss

Please provide:
1. Icon style guidelines (outlined, filled, rounded, sharp - choosing and maintaining consistency)
2. Icon sizing system (standard sizes, grid alignment, optical adjustments)
3. Icon naming conventions (consistent format, searchable, scalable)
4. Icon organization (categories, hierarchy, Figma library structure)
5. Icon usage guidelines (when to use which style, size, context)
6. Icon creation process (grid system, stroke width, corner radius, consistency checks)
7. Icon sources (icon libraries to use, when to create custom, licensing)
8. Icon library maintenance (adding icons, versioning, deprecation)

Consider: Outlined primary style. 2px stroke, 2px corner radius. Standard sizes: 16, 20, 24, 32, 48px. Centralized Figma library. Naming: {action/object}-{descriptor} format. Categories for organization. Usage guidelines (size per context). Filled variants for active states. Must work with existing Heroicons library (similar style). Accessibility (icon + label always).
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Consistency is everything: Single icon library (Heroicons), consistent stroke (2px), consistent corners (2px rounded) - not mixed sources
✦ Common mistake: Mixing icon libraries - Material + Feather + custom creates visual chaos
✦ Best with: Claude or ChatGPT (excellent at systematic organization and naming conventions)
✦ Remix it: "Organize my 80 scattered icons into categories with consistent naming - navigation, actions, objects, status"
✦ Pro move: Ask "Audit my icon usage - find most-used icons, duplicates, and style inconsistencies"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the icon naming system - consistent format for 150+ icons across 8 categories"
- "Design the icon grid system - 16px, 20px, 24px sizing with proper optical alignment"
- "How to organize Figma icon library - pages, categories, naming, search optimization"
- "Build icon usage guidelines - when to use which size, outlined vs filled, icon + label requirements"
</aside>

---

<aside>
💎

EXAMPLE OUTPUT

![57_Example_Output.png](57_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)
→ Recipe #49: [Design Component Variants in Figma](R-49%20Design%20Component%20Variants%202d767ccc6bef8061a641c8db579cd3b7.md)
→ Recipe #25: [Pick Your Icon Styles](R-25%20Pick%20Your%20Icon%20Styles%202d767ccc6bef809cbd6bc7ee914bebdf.md)

</aside>