# R-21: Turn Brand into UI Styles

# Recipe #21: Turn Brand into UI Styles

Category: UI & Visuals  |  ⏱️ 30-35 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning an application's visual layer to align with updated brand guidelines, or you're creating a new UI design system from existing brand assets. The current interface doesn't reflect the brand identity, uses inconsistent colors/fonts, or feels disconnected from marketing materials.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have brand guidelines (logo, colors, typography) but struggle to translate them into functional UI components. Brand colors designed for print don't work on screens, the brand font isn't optimized for interfaces, and tone-of-voice guidelines don't translate to button labels. The result: UIs that either ignore the brand entirely or apply brand elements incorrectly (like using the brand accent color for every button). You need to bridge brand identity and UI functionality.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide an adapted color system with accessibility-compliant adjustments (primary/secondary colors, 8-10 neutral shades, semantic colors for success/error/warning/info, and UI state colors for hover/active/disabled/focus), a complete typography system defining when to use brand fonts versus fallbacks with a full type scale (H1-H6, body, captions) and responsive rules, component styling principles for buttons, inputs, cards, and navigation that reflect brand personality, iconography guidelines matching brand aesthetic with usage rules for illustrations versus functional icons, a spacing system with defined base units and scales aligned with brand feel, tone of voice translation showing how brand personality applies to button labels, error messages, and microcopy, and accessibility recommendations including contrast fixes and minimum sizes. Optionally includes visual style guide examples showing branded components.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UI Design System Specialist who bridges brand identity and interface design.

I'm translating brand guidelines into a UI design system for a [Product Type].

[OPTIONAL: Attach brand guidelines PDF, logo files, or existing brand assets]

Brand assets available:
- Brand colors: [e.g., Primary blue #0066CC, Secondary coral #FF6B6B, Neutral grays]
- Typography: [e.g., Headline font: Montserrat Bold, Body: Inter Regular]
- Logo and iconography: [Description of logo style and any existing icons]
- Brand voice/tone: [e.g., Professional but approachable, Bold and confident, Friendly and casual]
- Visual style: [e.g., Rounded corners, Minimal shadows, Illustrated icons]

Current UI problems:
- [Problem 1: e.g., Brand blue is too vibrant for extended screen use]
- [Problem 2: e.g., Brand headline font is decorative, unreadable at small sizes]
- [Problem 3: e.g., No guidance on how to use brand colors for UI states (hover, disabled, error)]
- [Problem 4: e.g., Marketing uses illustrations, but unclear how to use in product UI]
- [Problem 5: e.g., Brand voice is "bold" but UI copy feels generic]

Please provide:
1. Color system adaptation (primary, secondary, neutrals, semantic colors, UI states)
2. Typography scale for UI (heading sizes, body text, captions, using brand fonts appropriately)
3. Component styling principles (buttons, inputs, cards reflecting brand)
4. Iconography direction (style, weight, usage guidelines)
5. Spacing and layout principles aligned with brand
6. Tone of voice translation to UI copy
7. Accessibility considerations (contrast ratios, readability)
8. Brand application examples (common components styled)

Consider: [Constraints - e.g., Must meet WCAG AA standards, brand colors may need adjustment, some brand fonts not web-optimized]
```

💡 What to customize:

- [Product Type] = SaaS platform, Mobile app, E-commerce site, Enterprise software, Consumer app
- [Brand colors] = Your actual brand color palette
- [Typography] = Your brand fonts
- [Brand voice/tone] = Your brand personality
- [Visual style] = Your brand's visual characteristics
- [Problems 1-5] = Specific brand-to-UI translation challenges
- Upload brand guidelines, style guide, or marketing materials for AI to analyze
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UI Design System Specialist who bridges brand identity and interface design.

I'm translating brand guidelines into a UI design system for a Health & Wellness Mobile App.

[User would attach brand guidelines PDF here]

Brand assets available:
- Brand colors:
  - Primary: Sage Green #7DAA92 (calming, nature-inspired)
  - Secondary: Warm Terracotta #E07A5F (energetic accent)
  - Neutral: Cream #F4F1DE (warm backgrounds)
  - Dark: Charcoal #3D405B (text)
- Typography:
  - Headlines: Playfair Display (serif, elegant, used in marketing)
  - Body: Poppins (sans-serif, friendly, rounded)
- Logo and iconography: Hand-drawn style illustrations, organic shapes, soft rounded corners
- Brand voice/tone: Warm and encouraging, empathetic but not clinical, holistic wellness focus
- Visual style: Organic, flowing layouts, nature photography, soft shadows, rounded corners (16px), gentle gradients

Current UI problems:
- Sage green primary color (#7DAA92) fails WCAG contrast on white backgrounds - can't use for primary buttons
- Playfair Display (serif headline font) looks beautiful in marketing but unreadable at small sizes in UI
- Brand uses hand-drawn illustrations extensively, but unclear how to incorporate into functional UI (buttons, forms, data displays)
- Cream background (#F4F1DE) creates readability issues for long-form content
- Brand voice is "warm and encouraging" but current UI button labels are generic ("Submit", "Click here", "OK")
- No color defined for error states, success states, or interactive states (hover, pressed, disabled)
- Brand guidelines show 3 colors, but UI needs semantic colors (info, warning, error, success)

User context: Health-conscious individuals (25-45 years old) tracking wellness habits. App used daily for meditation, exercise logging, mood tracking. Users expect calming, stress-free experience that reflects holistic wellness values.

Please provide:
1. Color system adaptation (primary, secondary, neutrals, semantic colors, UI states)
2. Typography scale for UI (heading sizes, body text, captions, using brand fonts appropriately)
3. Component styling principles (buttons, inputs, cards reflecting brand)
4. Iconography direction (style, weight, usage guidelines)
5. Spacing and layout principles aligned with brand
6. Tone of voice translation to UI copy
7. Accessibility considerations (contrast ratios, readability)
8. Brand application examples (common components styled)

Consider: Must meet WCAG AA contrast standards. Mobile-first design. Users interact in low-light environments (morning/evening meditation). Performance matters - heavy illustrations could slow app. Need both light and dark mode support.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Brand colors aren't always UI colors: Be ready to adjust saturation/lightness for accessibility
✦ Common mistake: Using decorative brand fonts for body text - reserve them for headlines only
✦ Best with: Claude (excellent at nuanced brand translation), ChatGPT (good for color system generation)
✦ Remix it: "Now create the dark mode version - how do brand colors adapt for dark backgrounds?"
✦ Pro move: Ask "Generate the Figma color styles JSON with all brand colors and UI variants"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the illustration usage guidelines - when to use brand illustrations vs. functional icons"
- "Design the error state color that doesn't exist in brand palette but feels on-brand"
- "How should brand photography integrate with UI - hero images, backgrounds, or avatars?"
- "Generate component naming conventions that reflect brand personality (e.g., 'nurture-button' vs 'primary-button')"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![21_Example_Output.png](21_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #22: [Check Your Color Contrast](R-22%20Check%20Your%20Color%20Contrast%202d667ccc6bef8030822cc761e4959070.md)
→ Recipe #26: [Add Depth and Shadows](R-26%20Add%20Depth%20and%20Shadows%202d767ccc6bef8025a4aff26e74f609ab.md)
→ Recipe #29: [Create Your Unique Hook](R-29%20Create%20Your%20Unique%20Hook%202d767ccc6bef8070ab71c1326164ae2f.md)

</aside>