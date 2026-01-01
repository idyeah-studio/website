# R-56: Build Color Palettes

# Recipe #56: Build Color Palettes

Category: Systems & Components  |  ⏱️ 30-35 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're building a color system from scratch or extending an existing palette - creating brand colors, typography colors, status colors (success, warning, error, info), and data visualization colors for charts and graphs. You need systematic color token structure, AI-powered palette extensions for charts (8-12 distinct colors), and colorblind-safe options without starting from zero.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many teams struggle with color systems - starting with 50 random colors with no structure, inconsistent naming (primary-blue, blue-main, button-color-blue all mean the same thing), no semantic tokens (hard-coding hex values everywhere), missing data-viz colors (charts use random colors, not colorblind-safe), or brand colors that don't work for charts (2 brand colors, but charts need 8-12 distinct colors). Teams waste time picking colors manually, create inaccessible color combinations, rebuild color systems when rebranding, or have no systematic approach to extending palettes. You need a minimal starting palette (brand, typography, status colors), systematic token structure (primitive vs. semantic), AI-powered extension for data-viz (generate 8-12 chart colors that are distinct and colorblind-safe), and basic accessibility guidelines (contrast ratios, colorblind testing).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will deliver a complete color system: minimal core palette (1 brand + 4 status + typography colors), 9-shade scales for each color, three-tier token structure (primitive/semantic/component), AI-generated 12-color data-viz palette (colorblind-safe), contrast guidelines (WCAG AA), and systematic naming conventions - transforming ad-hoc color picking into a maintainable, accessible, scalable color system.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Color System Specialist focusing on systematic color palettes, design tokens, and AI-powered palette extensions for data visualization.

I'm building a color system for a [Product Type] starting with minimal core colors (brand, typography, status) and extending to data-viz colors using AI.

[OPTIONAL: Attach brand colors or current color palette]

Color system requirements:
- Core palette needs: [e.g., 1-2 brand colors, typography colors, 4 status colors (success, warning, error, info)]
- Color scales: [e.g., 9-shade scales (50-900) for each color, 5-shade scales for simplicity]
- Data-viz needs: [e.g., 8-12 distinct colors for charts, colorblind-safe, works on light backgrounds]
- Token structure: [e.g., Primitive tokens (blue-500), Semantic tokens (color-primary, color-success)]
- Platform: [e.g., Web (hex/RGB), Mobile (hex), Design tools (Figma variables)]

Current color problems:
- [Problem 1: e.g., 50 random colors with no structure - blue-1, blue-2, blue-light, primary-blue]
- [Problem 2: e.g., No data-viz colors - charts use random colors, not accessible or distinct]
- [Problem 3: e.g., Hard-coded hex values everywhere - #3B82F6 repeated 100+ times, hard to update]
- [Problem 4: e.g., Colors not colorblind-safe - red/green charts fail for 8% of users]
- [Problem 5: e.g., No systematic naming - inconsistent token names across designers]

Team context: [Designer color system knowledge, brand guidelines, accessibility requirements]

Please provide:
1. Minimal core palette (brand, typography, status colors - structure and naming)
2. Color token structure (primitive vs. semantic tokens, naming conventions)
3. Color scales (creating 9-shade scales from single brand color)
4. AI-powered data-viz palette extension (prompt to generate 8-12 chart colors)
5. Colorblind-safe strategies (testing and validation)
6. Basic accessibility guidelines (contrast ratios, text vs. background)
7. Token naming conventions (consistent, scalable naming)
8. Color system maintenance (updating, versioning, documentation)

Consider: [Constraints - e.g., Must work with existing brand colors, Need 8-12 chart colors, Colorblind-safe required, Simple token structure for team adoption]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Analytics tool
- [Core palette needs] = What colors you need
- [Color scales] = 5-shade or 9-shade scales
- [Data-viz needs] = How many chart colors
- [Token structure] = Token naming approach
- [Problems 1-5] = Current color issues
- Attach existing brand colors
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Color System Specialist focusing on systematic color palettes, design tokens, and AI-powered palette extensions for data visualization.

I'm building a color system for a SaaS Analytics Dashboard starting with minimal core colors (1 brand color blue, typography grays, 4 status colors) and extending to 12 data-viz colors using AI.

[User would attach brand blue color: #3B82F6]

Color system requirements:
- Core palette needs:
  - 1 brand color: Blue #3B82F6 (primary brand color)
  - Typography colors: Black, dark gray, medium gray, light gray (text hierarchy)
  - 4 status colors: Success (green), Warning (amber), Error (red), Info (blue)
  - Neutral grays: 9-shade scale for backgrounds, borders, surfaces
- Color scales:
  - 9-shade scales (50, 100, 200, 300, 400, 500, 600, 700, 800, 900)
  - 500 = base color (brand blue #3B82F6)
  - Lighter shades (50-400) for backgrounds, hover states
  - Darker shades (600-900) for text, active states
- Data-viz needs:
  - 12 distinct colors for charts (bar charts, line charts, pie charts)
  - Must be distinguishable from each other
  - Colorblind-safe (works for deuteranopia, protanopia - red/green colorblindness)
  - Works on white backgrounds (sufficient contrast)
  - Avoid red + green adjacent (colorblind issue)
- Token structure:
  - Primitive tokens: blue-500, green-600, gray-200 (literal color values)
  - Semantic tokens: color-primary, color-success, color-text-body (purpose-based)
  - Component tokens: button-bg-primary, input-border-default (component-specific)
- Platform: Web (hex values), Figma (Figma variables/styles)

Current color problems:
- 50+ random colors with no structure - blue-1, blue-2, blue-light, blue-lighter, primary-blue, button-blue, link-blue, brand-blue all similar blues, no systematic scale, impossible to maintain
- No data-viz colors defined - designers pick random colors for charts (#FF5733, #8B4513, #2E7D32), not distinct enough (similar blues/greens), not colorblind-safe (red/green adjacent in pie charts)
- Hard-coded hex everywhere - #3B82F6 appears 200+ times in designs, rebranding requires find/replace 200 instances, error-prone, no centralized tokens
- Colors fail colorblind tests - pie chart with red/green slices indistinguishable for 8% of users (deuteranopia), line chart with 5 lines (3 look identical to colorblind users)
- Inconsistent token naming - some use "primary", others use "brand", others use "main", some use "blue-500", designers confused which to use
- No semantic layer - directly using primitive tokens (blue-500) in designs, changing brand color requires updating 100+ instances manually
- Status colors inconsistent - success is green-500 in some places, green-600 in others, warning is orange in some, amber in others

Team context:
- 8 designers building analytics dashboards with 20+ charts
- Current workflow: Pick colors manually from color picker, no system = inconsistent
- Want workflow: Use predefined color tokens, extend with AI for data-viz = consistent
- Brand color: Blue #3B82F6 (cannot change, company branding)
- Accessibility: Must meet WCAG AA (4.5:1 contrast for text)
- Charts: Need 12 distinct colors (some dashboards show 12 data series)
- Colorblind users: 8% of users have red/green colorblindness (deuteranopia/protanopia)

Please provide:
1. Minimal core palette (brand, typography, status colors - structure and naming)
2. Color token structure (primitive vs. semantic tokens, naming conventions)
3. Color scales (creating 9-shade scales from single brand color)
4. AI-powered data-viz palette extension (prompt to generate 8-12 chart colors)
5. Colorblind-safe strategies (testing and validation)
6. Basic accessibility guidelines (contrast ratios, text vs. background)
7. Token naming conventions (consistent, scalable naming)
8. Color system maintenance (updating, versioning, documentation)

Consider: Start with 1 brand blue. Generate 9-shade scale. Add 4 status colors (green, amber, red, blue). Use AI to generate 12 distinct data-viz colors (colorblind-safe). Create semantic token layer. Must meet WCAG AA for text. Colorblind-safe charts critical.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Start minimal: 1 brand color + 4 status colors + grays is enough - extend with shades and data-viz colors
✦ Common mistake: Creating 50 random colors - use systematic scales (9 shades) and semantic tokens instead
✦ Best with: Claude or ChatGPT (excellent at generating colorblind-safe data-viz palettes)
✦ Remix it: "Generate 12 data-viz colors that are colorblind-safe and work with my brand blue #3B82F6"
✦ Pro move: Ask "Test my color palette for colorblind-safety - simulate deuteranopia and protanopia"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Generate a 9-shade scale from my brand color #3B82F6 - lightest to darkest"
- "Create 12 colorblind-safe data-viz colors for charts - avoid red/green adjacent, works on white"
- "Design the semantic token system - map primitive tokens to purpose-based names"
- "Check my color contrast - which colors meet WCAG AA for text on white backgrounds?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![56_Example_Output.png](56_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)
→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)
→ Recipe #54: [Create Flexible Chart Components](R-54%20Flexible%20Chart%20Components%202d767ccc6bef80c5b226e720fef24fa2.md)

</aside>