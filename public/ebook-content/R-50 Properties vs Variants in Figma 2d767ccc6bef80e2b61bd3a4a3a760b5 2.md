# R-50: Properties vs. Variants in Figma

# Recipe #50: Properties vs. Variants in Figma

Category: Systems & Components  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're creating Figma components and need to decide which property type to use - Boolean (True/False toggle), Variant (multiple options), Instance Swap (nested components), or Text (dynamic content). The wrong choice creates confusing, hard-to-use components, while the right choice makes components intuitive and maintainable.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers struggle with property type decisions - using Variant properties for simple True/False choices (creating "Icon: True | False" instead of a clean Boolean toggle), creating separate components when Instance Swap would be better, or using Text properties when variants would provide better consistency. This leads to confusing component libraries where designers don't know which property to use, components with 8+ variant options when 3 Booleans would be clearer, or rigid components that can't handle needed flexibility. Teams waste time debating property structure, create inconsistent patterns across components, or build unusable components that designers avoid. You need clear decision frameworks for choosing the right property type based on the number of options, how designers will use them, and maintaining scalability.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a clear decision framework based on number of options (2 options = Boolean, 3-6 options = Variant, 7+ or swappable = Instance Swap, dynamic content = Text), detailed use cases for each property type with examples (Boolean for show/hide toggles, Variant for visual styles and states, Instance Swap for swappable icons and nested components avoiding component explosion, Text for user-entered labels and counts), common mistakes to avoid (using Variant for True/False, creating separate components instead of Instance Swap, inconsistent property types across components), effective property combination patterns showing how to use multiple types together, and a visual decision tree flowchart with quick reference table. Optionally includes visual examples showing each property type in use.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Figma Component Architecture Specialist focusing on property types, component flexibility, and decision frameworks.

I'm designing component property structure for a [Product Type] design system to help [Team Size] designers understand when to use Boolean vs. Variant vs. Instance Swap vs. Text properties.

[OPTIONAL: Attach Figma component examples showing current property confusion]

Property decision requirements:
- Component types: [e.g., Buttons, Inputs, Cards, Icons, Modals]
- Common variations: [e.g., With/without icon, Multiple styles, Swappable elements, Dynamic text]
- Team skill level: [e.g., Junior designers unfamiliar with properties, Mixed, Expert Figma users]
- Complexity tolerance: [e.g., Simple (3 properties max), Moderate (5 properties), Complex (7+ properties)]
- Use patterns: [e.g., Quick toggles preferred, Dropdown selections, Visual browsing]

Current property confusion:
- [Problem 1: e.g., Using Variant for True/False - "Icon: True | False" instead of Boolean]
- [Problem 2: e.g., Can't swap icons - need Instance Swap but using variants]
- [Problem 3: e.g., Text properties missing - designers manually change text on every instance]
- [Problem 4: e.g., Too many variant options - 8 options when 3 Booleans clearer]
- [Problem 5: e.g., Inconsistent property types - Button uses Boolean, Input uses Variant for same concept]

Team context: [Designer Figma knowledge, common use cases, component complexity needs]

Please provide:
1. Decision framework (when to use each property type)
2. Boolean property use cases (True/False toggles, examples)
3. Variant property use cases (3+ options, examples)
4. Instance Swap use cases (nested swappable components, examples)
5. Text property use cases (dynamic content, examples)
6. Common mistakes to avoid (wrong property type choices)
7. Property combinations (when to use multiple types together)
8. Visual decision tree (flowchart for choosing property type)

Consider: [Constraints - e.g., Keep components simple for junior designers, Performance with many properties, Consistency across component library]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard
- [Team Size] = Designers using the system
- [Component types] = What components need properties
- [Common variations] = Types of flexibility needed
- [Team skill level] = Figma expertise
- [Problems 1-5] = Current property confusion
- Attach Figma examples of property confusion
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Figma Component Architecture Specialist focusing on property types, component flexibility, and decision frameworks.

I'm designing component property structure for a SaaS Project Management Tool design system to help 8 designers (mixed skill levels) understand when to use Boolean vs. Variant vs. Instance Swap vs. Text properties.

[User would attach Figma component examples here]

Property decision requirements:
- Component types:
  - Buttons (with/without icons, multiple styles)
  - Inputs (with/without labels, icons, error states)
  - Cards (task cards, project cards, with/without images)
  - Badges (status, priority, counts)
  - Avatars (with/without status indicators)
  - Icons (swappable, different sizes)
- Common variations:
  - With/without icon (Boolean or Variant?)
  - Multiple visual styles (Primary, Secondary, Tertiary - Variant)
  - Swappable icons (Instance Swap)
  - Dynamic labels (Text property)
  - Optional elements (show/hide badge, avatar, etc.)
- Team skill level:
  - 3 junior designers (6 months Figma, basic component knowledge)
  - 4 mid-level designers (2 years Figma, understand variants)
  - 1 senior designer (expert, builds components)
  - Need simple, intuitive components
- Complexity tolerance:
  - Simple components: 3 properties max
  - Medium components: 5 properties max
  - Complex components: 7 properties absolute max
  - Designers prefer toggles over dropdowns
- Use patterns:
  - Designers prefer visual toggles (Boolean checkboxes)
  - Dropdown selections okay for 3-5 options (Variant)
  - Hate typing text (use Text properties sparingly)
  - Want to swap icons easily (Instance Swap)

Current property confusion:
- Using Variant property for True/False choices - Button has "Icon: True | False" variant dropdown instead of clean "Has icon ☐" Boolean toggle - confusing and clunky
- Can't swap icons in icon buttons - created IconButtonEdit, IconButtonDelete, IconButtonSave as separate components instead of using Instance Swap to swap any icon
- No Text properties on badges - designers manually change "3" to "12" on every badge instance, breaking component link - should use Text property
- Card component has 8 variant options for features - "WithImage: True/False, WithBadge: True/False, WithAvatar: True/False" creating 8 combinations - should use 3 Boolean toggles instead
- Inconsistent property types across components - Button uses Boolean "Has icon", Input uses Variant "Icon: None | Left | Right" for same concept - should standardize
- Avatar has "Status: Online/Offline/Away/Busy" variant but designers want to hide status entirely - need Boolean "Show status" + Variant "Status type"
- Input label property is Variant "Label: Show | Hide" - should be Boolean

Team context:
- Junior designers confused by Variant dropdowns with True/False
- Everyone prefers Boolean checkboxes (more intuitive)
- Icon swapping is major pain point (many icon buttons)
- Badge counts need to be dynamic (Text property)
- Want consistency: same concept = same property type across all components

Please provide:
1. Decision framework (when to use each property type)
2. Boolean property use cases (True/False toggles, examples)
3. Variant property use cases (3+ options, examples)
4. Instance Swap use cases (nested swappable components, examples)
5. Text property use cases (dynamic content, examples)
6. Common mistakes to avoid (wrong property type choices)
7. Property combinations (when to use multiple types together)
8. Visual decision tree (flowchart for choosing property type)

Consider: Keep it simple for junior designers. Prefer Boolean over Variant for 2 options. Use Instance Swap for icons. Text properties for dynamic content. Standardize property types across components. Maximum 5 properties per component.
```

</aside>

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ 2 options = Boolean always: If it's True/False, Yes/No, Show/Hide → use Boolean, not Variant
✦ Common mistake: Variant dropdown for binary choice - "Icon: True | False" is clunky, use "Has icon: ☐"
✦ Best with: Claude (excellent at decision frameworks), ChatGPT (good for property architecture)
✦ Remix it: "Design the icon swap system - using Instance Swap to handle 200+ icons in one component"
✦ Pro move: Ask "Audit my components - find Variant properties that should be Boolean, calculate simplification"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the property naming standards - consistent names across all components (Has icon, Show label, etc.)"
- "Design the decision flowchart - visual guide for choosing Boolean vs Variant vs Instance Swap"
- "How to convert existing components - migrating from Variant True/False to Boolean properties"
- "Build the property combination patterns - which property types work well together"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![50_Example_Output.png](50_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)
→ Recipe #48: [Design Smart Defaults](R-48%20Design%20Smart%20Defaults%202d767ccc6bef80729793db8459ae5170.md)
→ Recipe #49: [Design Component Variants in Figma](R-49%20Design%20Component%20Variants%202d767ccc6bef8061a641c8db579cd3b7.md)
→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)

</aside>