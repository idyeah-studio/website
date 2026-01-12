# R-22: Check Your Color Contrast

# Recipe #22: Check Your Color Contrast

Category: UI & Visuals  |  ⏱️ 20-25 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're redesigning an interface and need to verify that all text and interactive elements are readable and meet accessibility standards (WCAG). The current design has low-contrast text, unclear button states, or fails accessibility audits.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Designers often choose colors based on aesthetics without checking readability. Light gray text on white backgrounds, pastel buttons with white labels, or beautiful gradients that fail contrast requirements create barriers for users with visual impairments or color blindness. Even users with perfect vision struggle with low-contrast text on bright screens or in sunlight. Existing applications frequently fail WCAG standards, risking legal compliance issues and excluding users. You need to systematically audit and fix color contrast across the entire interface.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a comprehensive contrast audit with current versus required ratios (4.5:1 for normal text, 3:1 for large text and UI components), specific color adjustment recommendations with exact hex codes for compliant alternatives that preserve brand identity, color blindness simulations (deuteranopia, protanopia, tritanopia) with solutions beyond color alone (patterns, icons, text labels), interactive element guidelines covering focus, hover, active, and disabled states, testing methodology with tools (WebAIM Contrast Checker, WAVE, Axe DevTools, Chrome Lighthouse, Figma plugins), and visual before/after comparisons showing contrast ratio improvements. Optionally includes annotated screenshots with pass/fail assessments and priority rankings.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Accessibility Specialist focusing on color contrast and visual accessibility.

I'm auditing color contrast for a [Product Type] to ensure WCAG compliance.

[OPTIONAL: Attach screenshots showing current color combinations or color palette]

Current color usage:
- Text on backgrounds: [e.g., Gray #6B7280 on white, white on primary blue #0066CC]
- Interactive elements: [e.g., Button labels, links, form inputs]
- Status indicators: [e.g., Success green, error red, warning amber]
- Accessibility target: [WCAG AA or AAA]

Current contrast problems:
- [Problem 1: e.g., Light gray text (#CCCCCC) on white background fails WCAG AA]
- [Problem 2: e.g., Primary button has white text on light blue - barely readable]
- [Problem 3: e.g., Disabled state uses same text color as enabled - no visual distinction]
- [Problem 4: e.g., Link color (#4A90E2) doesn't have enough contrast on light backgrounds]
- [Problem 5: e.g., No consideration for color blindness - relying only on red/green for status]

User context: [Who uses the application, typical viewing conditions, accessibility requirements]

Please provide:
1. Contrast audit for all text/background combinations
2. Specific contrast ratio calculations (current vs. required)
3. Color adjustments to meet WCAG standards
4. Alternative solutions when brand colors can't be adjusted
5. Color blindness simulation and fixes
6. Interactive element contrast (focus states, hover states)
7. Testing methodology and tools
8. Before/after contrast comparisons

Consider: [Constraints - e.g., Must maintain brand colors, legal compliance required, international standards, different screen types]
```

💡 What to customize:

- [Product Type] = Web app, Mobile app, Dashboard, E-commerce site, Enterprise software
- [Text on backgrounds] = Your actual color combinations
- [Interactive elements] = Button colors, link colors, form styling
- [Accessibility target] = WCAG 2.1 Level AA (standard) or AAA (enhanced)
- [Problems 1-5] = Specific contrast failures in your design
- Upload screenshots or color palette showing current usage
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Accessibility Specialist focusing on color contrast and visual accessibility.

I'm auditing color contrast for a Financial Dashboard Web App to ensure WCAG 2.1 Level AA compliance.

[User would attach screenshots here]

Current color usage:
- Text on backgrounds:
  - Body text: Medium gray #6B7280 on white #FFFFFF
  - Secondary text: Light gray #9CA3AF on white #FFFFFF
  - Small print/captions: Extra light gray #D1D5DB on white #FFFFFF
  - Dark text: Charcoal #1F2937 on white #FFFFFF
  - White text on brand blue #0066CC
  - White text on success green #10B981
- Interactive elements:
  - Primary button: White text on brand blue #0066CC
  - Secondary button: Brand blue #0066CC text on white background
  - Links: Brand blue #0066CC on white background
  - Disabled buttons: Light gray #E5E7EB background with medium gray #9CA3AF text
- Status indicators:
  - Success: Green #10B981 text/icons
  - Error: Red #EF4444 text/icons
  - Warning: Amber #F59E0B text/icons
  - Info: Blue #3B82F6 text/icons
- Accessibility target: WCAG 2.1 Level AA (4.5:1 for normal text, 3:1 for large text and UI components)

Current contrast problems:
- Secondary text (light gray #9CA3AF on white) measures 2.8:1 - fails WCAG AA (needs 4.5:1)
- Caption text (#D1D5DB on white) measures 1.6:1 - severe fail
- Link color (brand blue #0066CC on white) measures 4.2:1 - marginally fails AA (needs 4.5:1)
- Primary button (white on #0066CC) measures 4.1:1 - fails for small text
- Success green (#10B981) on white measures 2.9:1 - fails when used for text
- Disabled button text (#9CA3AF on #E5E7EB) measures 1.8:1 - intentionally low but too low
- Focus outline uses light blue #60A5FA which is hard to see on white backgrounds
- Charts use red/green color coding exclusively - not accessible for colorblind users (8% of males)

User context: Financial professionals viewing dashboards for 6-8 hours daily. Mix of young analysts (good vision) and senior executives (aging vision, bifocals). Used in bright office environments with overhead lighting causing screen glare. Must comply with financial industry accessibility regulations. Some users have color vision deficiencies.

Please provide:
1. Contrast audit for all text/background combinations
2. Specific contrast ratio calculations (current vs. required)
3. Color adjustments to meet WCAG standards
4. Alternative solutions when brand colors can't be adjusted
5. Color blindness simulation and fixes
6. Interactive element contrast (focus states, hover states)
7. Testing methodology and tools
8. Before/after contrast comparisons

Consider: Brand blue #0066CC is sacred (client requirement - can't change). Need to work around it for compliance. Financial data visualization must work for colorblind users. High-contrast mode for users with severe visual impairments. Mobile view in bright sunlight.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Test early and often: Don't wait until final designs to check contrast - catch issues in wireframes
✦ Common mistake: Assuming "it looks fine to me" - 1 in 12 men have color vision deficiency
✦ Best with: Claude (excellent at systematic audits and calculations), ChatGPT (good for generating compliant alternatives)
✦ Remix it: "Design the high-contrast mode toggle - how should all colors adapt for maximum visibility?"
✦ Pro move: Ask "Generate a contrast matrix showing all possible text/background combinations with pass/fail ratings"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the color palette variants optimized for dark mode - all must pass contrast in dark theme"
- "Design the accessibility settings panel - let users customize contrast levels"
- "How should gradient backgrounds handle text overlay for proper contrast?"
- "Generate automated testing rules for continuous contrast monitoring in production"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![22_Example_Output.png](22_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #21: [Turn Brand into UI Styles](R-21%20Turn%20Brand%20into%20UI%20Styles%202d667ccc6bef808fb671c9d953cc5641.md)
→ Recipe #24: [Fix Hard-to-Read Text](R-24%20Fix%20Hard-to-Read%20Text%202d767ccc6bef804e8924e15be9db459f.md)
→ Recipe #64: [Design Accessible Components](R-64%20Design%20Accessible%20Components%20d8c67ccc6bef83ed9c3201d848757c88.md)

</aside>