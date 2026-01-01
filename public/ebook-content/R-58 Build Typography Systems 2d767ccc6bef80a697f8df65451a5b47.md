# R-58: Build Typography Systems

# Recipe #58: Build Typography Systems

Category: Systems & Components  |  ⏱️ 30-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're building a typography system - creating consistent text styles (headings, body, captions), establishing type scales that work across devices (mobile to desktop), choosing typefaces, and defining responsive typography that adapts from 320px mobile to 1920px desktop. Your current text styles are inconsistent, not responsive, or lack systematic hierarchy.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many teams struggle with typography - random font sizes everywhere (18px, 19px, 20px, 21px all used for body text), no responsive scaling (desktop text too large on mobile, mobile text too small on desktop), inconsistent hierarchy (H1 sometimes 32px, sometimes 40px, sometimes 48px), missing text styles (designers manually setting fonts each time), or no systematic type scale (sizes picked arbitrarily). Teams waste time picking font sizes manually, create inconsistent text hierarchy across screens, struggle with mobile readability (desktop sizes don't work on 320px screens), or rebuild typography for every new feature. You need a systematic typography system - modular type scale (8-12 predefined sizes), responsive scaling (mobile vs. desktop sizes), clear hierarchy (Display, Heading, Subhead, Body, Caption levels), proper text styles in Figma, and usage guidelines (when to use each level).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will deliver a complete typography system: 12-level type scale (Display/Heading/Subhead/Body/Caption/Button), responsive font sizes for mobile (320px+) vs desktop (900px+), complete text style specifications (family, size, weight, line height, letter spacing), hierarchy guidelines per context, optimal line height ratios (1.5 for body, 1.2 for display), organized Figma text styles with mobile/desktop separation, and responsive scaling strategy - transforming inconsistent random font sizes into a systematic, readable, maintainable typography system.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Typography System Specialist focusing on type scales, responsive typography, text hierarchy, and systematic text styles.

I'm building a typography system for a [Product Type] that works seamlessly from [Mobile Size] to [Desktop Size] with clear hierarchy and responsive scaling.

[OPTIONAL: Attach current typography or examples from the image showing mobile/desktop comparison]

Typography system requirements:
- Typeface: [e.g., Inter, San Francisco, Custom brand font, System fonts]
- Type scale levels: [e.g., Display, Heading, Subhead, Body, Caption - how many levels]
- Responsive needs: [e.g., Mobile 320-767px, Desktop 900px+, Tablet 768-899px]
- Device contexts: [e.g., Mobile, Tablet, Desktop - separate scales or fluid]
- Platform: [e.g., Web, iOS, Android, Multi-platform]

Current typography problems:
- [Problem 1: e.g., Random font sizes - 18px, 19px, 20px, 21px all used for body text]
- [Problem 2: e.g., No responsive scaling - desktop H1 (48px) too large on mobile (320px)]
- [Problem 3: e.g., Inconsistent hierarchy - H1 sometimes 32px, sometimes 40px, sometimes 48px]
- [Problem 4: e.g., No text styles - designers manually set fonts every time]
- [Problem 5: e.g., Poor mobile readability - desktop body text (18px) too large on 320px screens]

Team context: [Designer typography knowledge, device priorities, brand font constraints]

Please provide:
1. Type scale structure (Display, Heading, Subhead, Body, Caption - levels and naming)
2. Font size scales (mobile vs. desktop sizes for each level)
3. Responsive typography strategy (how text scales from mobile to desktop)
4. Text style specifications (font family, size, weight, line height, letter spacing)
5. Hierarchy guidelines (when to use Display vs. Heading vs. Body)
6. Line height and spacing (optimal readability ratios)
7. Figma text styles setup (organizing and naming text styles)
8. Mobile vs. desktop adaptations (how typography changes across breakpoints)

Consider: [Constraints - e.g., Must work 320px-1920px, Brand font required, Accessibility (readable sizes), Consistent with design system]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Marketing site
- [Mobile Size] = Smallest screen (e.g., 320px)
- [Desktop Size] = Largest screen (e.g., 1920px)
- [Typeface] = What fonts you're using
- [Type scale levels] = How many hierarchy levels
- [Problems 1-5] = Current typography issues
- Attach typography examples like the image
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Typography System Specialist focusing on type scales, responsive typography, text hierarchy, and systematic text styles.

I'm building a typography system for a SaaS Dashboard that works seamlessly from 320px mobile to 1920px desktop with clear hierarchy and responsive scaling.

[User would attach the mobile/desktop typography comparison image]

Typography system requirements:
- Typeface:
  - Primary: Inter (Google Fonts, free, excellent for UI)
  - Fallback: System fonts (-apple-system, SF Pro, Segoe UI)
  - Weights: Regular (400), Medium (500), Semibold (600), Bold (700)
- Type scale levels:
  - Display Large/Medium/Small (hero text, landing pages)
  - Heading Large/Small (section headings, page titles)
  - Subhead Large/Small (subsection headings)
  - Body Large/Small (body text, primary reading)
  - Caption Regular/Bold (small text, metadata)
  - Button (button labels, CTAs)
  - Total: 12 text styles covering all use cases
- Responsive needs:
  - Mobile: 320-899px (smaller text, tighter spacing)
  - Desktop: 900px+ (larger text, generous spacing)
  - Fluid scaling preferred (not hard breakpoints)
- Device contexts:
  - Mobile-first approach (design for mobile, scale up for desktop)
  - Separate mobile and desktop text styles in Figma
  - Clear naming: "Display Large" has mobile and desktop variants
- Platform: Web (React), exported to CSS

Current typography problems:
- Random font sizes everywhere - Body text ranges from 14px to 18px across different screens, headings from 24px to 48px with no system, designers pick arbitrary sizes each time
- No responsive scaling - Desktop H1 is 48px, looks great on 1920px monitor but overwhelming on 320px iPhone SE, takes up entire screen, poor mobile experience
- Inconsistent hierarchy - H1 sometimes 32px, sometimes 40px, sometimes 48px depending on who designed the screen, no standardization, confusing visual hierarchy
- No text styles in Figma - designers manually set font family, size, weight, line height every time they add text, time-consuming, error-prone, creates inconsistencies
- Poor mobile readability - Desktop body text (18px) too large on mobile (wastes space, fewer words visible), desktop headings (48px) overwhelming on small screens
- Line heights inconsistent - some text has 1.2 line height (too tight, cramped), some 2.0 (too loose, hard to read), no system
- No clear naming - text styles called "Title 1", "Title 2", "Text 1", "Text 2" - unclear when to use which

Team context:
- 8 designers need consistent typography
- 60% mobile users (mobile-first priority)
- Current workflow: Manually set fonts each time = slow, inconsistent
- Want workflow: Select text style from Figma = fast, consistent
- Accessibility: Must meet WCAG AA (readable font sizes)
- Brand: Inter font family (already chosen)

Please provide:
1. Type scale structure (Display, Heading, Subhead, Body, Caption - levels and naming)
2. Font size scales (mobile vs. desktop sizes for each level)
3. Responsive typography strategy (how text scales from mobile to desktop)
4. Text style specifications (font family, size, weight, line height, letter spacing)
5. Hierarchy guidelines (when to use Display vs. Heading vs. Body)
6. Line height and spacing (optimal readability ratios)
7. Figma text styles setup (organizing and naming text styles)
8. Mobile vs. desktop adaptations (how typography changes across breakpoints)

Consider: Mobile-first (320px+). Inter font family. 12 text styles (Display L/M/S, Heading L/S, Subhead L/S, Body L/S, Caption, Button). Responsive scaling (smaller mobile, larger desktop). Line height 1.4-1.6 for readability. Clear naming. Accessibility (min 16px body on mobile, 14px on desktop acceptable).
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Line height is critical: 1.5 for body text (readability), 1.2 for large headings (avoid awkward gaps)
✦ Common mistake: Same font sizes on mobile and desktop - mobile needs smaller text to fit more content
✦ Best with: Claude or ChatGPT (excellent at creating systematic type scales)
✦ Remix it: "Create responsive typography scale - 12 styles from Display to Caption, mobile (320px) to desktop (1920px)"
✦ Pro move: Ask "Calculate optimal line heights for my type scale - Display, Heading, Body, Caption"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the mobile typography scale - Display, Heading, Subhead, Body, Caption for 320-767px"
- "Create desktop typography scale - same hierarchy but scaled up for 900px+ screens"
- "How to organize Figma text styles - naming conventions, mobile/desktop separation"
- "Calculate line heights and letter spacing for my 12-level type scale"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![58_Example_Output.png](58_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #56: [Build Color Palettes](R-56%20Build%20Color%20Palettes%202d767ccc6bef80268ce9ff601c08a13e.md)
→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)
→ Recipe #47: [Organize Component Libraries in Figma](R-47%20Organize%20Component%20Libraries%20in%20Figma%202d767ccc6bef80d29ce0c95e7a0fbf37.md)

</aside>