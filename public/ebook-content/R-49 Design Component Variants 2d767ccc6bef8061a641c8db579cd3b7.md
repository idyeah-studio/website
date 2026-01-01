# R-49: Design Component Variants

# Recipe #49: Design Component Variants

Category: Systems & Components  |  ⏱️ 30-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're building Figma components that have multiple variations - different styles (primary, secondary), sizes (small, medium, large), or states (default, hover, disabled). Instead of creating 47 separate button components, you need one flexible Button component with variants that handles all cases systematically.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create component chaos - building ButtonPrimary, ButtonSecondary, ButtonPrimaryLarge, ButtonPrimarySmall, ButtonSecondaryLarge, ButtonSecondarySmall as separate components (combinatorial explosion), leading to unmaintainable libraries with hundreds of duplicate components. Or they create components with no variants at all (one rigid button that doesn't adapt). Teams waste time searching through 50 button variations, create duplicates when they can't find the right one, or struggle to maintain consistency when updating colors (change 47 buttons individually). You need variant properties that let you create one Button component with Type (Primary/Secondary), Size (Small/Medium/Large), and State (Default/Hover/Disabled) properties - reducing 18 components to 1 flexible component.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide variant property strategy limiting to 3-4 properties (Type for visual styles, Size for dimensions, State for interactions, Icon for content) with clear naming conventions standardized across components, variant structure guidance organizing combinations logically with default variants for most common cases, Boolean versus Variant property recommendations (Boolean for True/False, Variant for 3+ options), complete interactive state setup (Default, Hover, Pressed, Focused, Disabled, Loading) with Figma interaction connections, nested variant patterns using Instance Swap for flexible icon swapping and variants-within-variants, standardized naming conventions ("Type" not "Style" or "Kind", full words not abbreviations), common variant patterns for Buttons, Inputs, Badges, and Cards with realistic property combinations, and maintenance strategy for adding, deprecating, and versioning variants based on usage analytics. Optionally includes before/after examples showing separate components consolidated into unified variants.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Figma Component Design Specialist focusing on variant properties, component flexibility, and scalable component architecture.

I'm designing component variants for a [Product Type] design system to create flexible [Component Type] that handle [Number] variations without creating [Problem] separate components.

[OPTIONAL: Attach Figma component examples or current component library]

Variant requirements:
- Component types: [e.g., Buttons, Inputs, Cards, Icons, Badges]
- Variation types: [e.g., Visual styles, Sizes, States, Content types]
- Number of variations: [e.g., 3 styles × 3 sizes = 9 combinations, 5 styles × 3 sizes × 4 states = 60]
- Platform: [e.g., Web only, Mobile only, Multi-platform]
- Complexity level: [e.g., Simple (Button), Medium (Input with label), Complex (Form field)]

Current variant problems:
- [Problem 1: e.g., 47 separate button components - ButtonPrimaryLarge, ButtonSecondarySmall, etc.]
- [Problem 2: e.g., No variant properties - can't switch between primary/secondary]
- [Problem 3: e.g., Interactive states missing - no hover, pressed, disabled variants]
- [Problem 4: e.g., Inconsistent variant naming - some use "type", others "style", others "variant"]
- [Problem 5: e.g., Too many variant properties - 8 properties creating 256 combinations]

Team context: [Designer Figma skill level, component usage patterns, maintenance needs]

Please provide:
1. Variant property strategy (which properties to create, types, naming)
2. Variant structure (organizing variant combinations logically)
3. Boolean vs. Variant properties (when to use each)
4. Interactive states (hover, pressed, focused, disabled)
5. Nested variants (variants within variants, instance swap)
6. Variant naming conventions (property names, option names)
7. Common variant patterns (Button, Input, Card examples)
8. Maintenance strategy (adding variants, deprecating, versioning)

Consider: [Constraints - e.g., Keep under 5 variant properties, Must work on mobile, Accessibility states required, Dark mode support]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard
- [Component Type] = What components need variants
- [Number] = How many variations exist
- [Problem] = Component explosion issue (e.g., 47 buttons)
- [Variation types] = What varies (style, size, state)
- [Problems 1-5] = Current variant issues
- Attach Figma component examples
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Figma Component Design Specialist focusing on variant properties, component flexibility, and scalable component architecture.

I'm designing component variants for a SaaS Project Management Tool design system to create flexible Button, Input, and Badge components that handle 60+ variations without creating 200+ separate components.

[User would attach Figma component library here]

Variant requirements:
- Component types:
  - Buttons (primary, secondary, tertiary, danger, icon-only)
  - Inputs (text, email, password, textarea, search, with icons)
  - Badges (status pills, priority indicators, counts)
  - Cards (task cards, project cards, user cards)
  - Icons (with multiple sizes and colors)
- Variation types:
  - Visual styles: Primary, Secondary, Tertiary, Danger
  - Sizes: Small (32px), Medium (44px), Large (52px)
  - States: Default, Hover, Pressed, Focused, Disabled, Loading
  - Content: With icon, Icon-only, With badge
  - Themes: Light mode, Dark mode
- Number of variations:
  - Button: 4 styles × 3 sizes × 6 states = 72 potential combinations
  - Input: 5 types × 3 sizes × 4 states = 60 combinations
  - Badge: 5 types × 2 sizes = 10 combinations
- Platform: Web (React-based)
- Complexity level:
  - Simple: Badge (2 properties)
  - Medium: Button (4 properties)
  - Complex: Input with label, icon, error message (6 properties)

Current variant problems:
- 47 separate button components - ButtonPrimary, ButtonPrimaryLarge, ButtonPrimarySmall, ButtonSecondary, ButtonSecondaryLarge, ButtonIcon, ButtonDanger, etc. - unmaintainable, impossible to update colors consistently
- No variant properties on inputs - created InputText, InputEmail, InputPassword, InputTextLarge, InputEmailSmall as separate components instead of using variants
- Interactive states completely missing - no hover, pressed, or disabled states - designers create static mockups, developers implement states differently (inconsistent)
- Variant naming inconsistent across components - Button uses "Type" property, Input uses "Style", Badge uses "Variant", Card uses "Kind" - should standardize on one term
- Too many variant properties on Card - 8 properties (Type, Size, Image, Header, Footer, Shadow, Border, Padding) creating 256 combinations - overwhelming, most unused
- Boolean properties misused - "HasIcon" as variant property with True/False options instead of using boolean property type
- Nested variants missing - can't swap icons inside icon buttons, can't change badge inside cards

Team context:
- 8 designers, mixed skill levels (3 junior, 4 mid, 1 senior)
- Updating 47 button components takes 2 hours when brand colors change
- Designers don't understand variant properties - avoid using them
- Need simpler system - max 4 variant properties per component
- Interactive prototypes need hover/pressed states
- Dark mode launching in 3 months (need theme support)

Please provide:
1. Variant property strategy (which properties to create, types, naming)
2. Variant structure (organizing variant combinations logically)
3. Boolean vs. Variant properties (when to use each)
4. Interactive states (hover, pressed, focused, disabled)
5. Nested variants (variants within variants, instance swap)
6. Variant naming conventions (property names, option names)
7. Common variant patterns (Button, Input, Card examples)
8. Maintenance strategy (adding variants, deprecating, versioning)

Consider: Limit to 4 variant properties max. Standardize property naming. Must support interactive prototypes (hover, pressed states). Dark mode coming soon. Keep it simple for junior designers. Reduce 47 button components to 1.
```

</aside>

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ 4 properties max: More than 4 variant properties creates combinatorial chaos - keep it simple
✦ Common mistake: Creating ButtonPrimaryLarge, ButtonPrimarySmall as separate components - use 1 Button with Type + Size variants
✦ Best with: Claude (excellent at variant architecture), ChatGPT (good for naming conventions)
✦ Remix it: "Design the interactive component states - connecting hover, pressed, focused with Figma interactions"
✦ Pro move: Ask "Audit my component library - find components that should be variants, calculate reduction"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the Button variant structure - Type, Size, State, Icon properties with all combinations"
- "Create the variant naming system - standardize property and option names across all components"
- "How to convert 47 button components into 1 component with variants - migration strategy"
- "Build the interactive component prototype - connecting Default, Hover, Pressed states with interactions"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![49_Example_Output.png](49_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)
→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)

</aside>