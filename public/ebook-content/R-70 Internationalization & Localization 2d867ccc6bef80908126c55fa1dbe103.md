# R-70: Internationalization & Localization

# Recipe #70: Internationalization & Localization

Category: Bonus — Content & Copy  |  ⏱️ 30-40 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're designing products for global markets - supporting multiple languages, handling right-to-left (RTL) languages like Arabic or Hebrew, accommodating text expansion when translating, adapting to different cultural contexts, or formatting dates, times, numbers, and currencies correctly. Your current design breaks when translated, assumes left-to-right reading, has hardcoded English text in images, or ignores cultural differences.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create English-only interfaces that break globally - layouts cramped when German text expands 30%, RTL languages (Arabic, Hebrew) completely broken with left-aligned text, hardcoded English in graphics/icons that can't be translated, culturally inappropriate colors or imagery (white for mourning in some cultures, hand gestures offensive elsewhere), wrong date formats (MM/DD/YYYY vs DD/MM/YYYY confusion), or fixed-width components that can't handle varying text lengths. Teams launch in new markets with broken UI, poor translations that don't fit, offensive cultural mistakes, or expensive redesigns for each language. You need systematic internationalization - flexible layouts (accommodate 30-50% text expansion), RTL support (mirror layouts, flip icons appropriately), translation-friendly design (separate text from graphics, use symbols not text in icons), cultural awareness (colors, imagery, gestures vary), proper formatting (locale-aware dates, times, numbers, currencies), and scalable text (avoid fixed widths, use dynamic sizing).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide text expansion strategies (accommodate 30-50% longer text, flexible layouts, truncation rules), RTL design guidance (mirror layouts, flip icons, bidirectional text for Arabic/Hebrew), translation-friendly design principles (separate text from graphics, avoid text in images, complete translatable strings), cultural considerations (colors, imagery, icons, gestures that vary by region), locale-aware formatting (dates, times, numbers, currency display per locale), typography guidance for multiple scripts (Latin, Arabic, CJK, Devanagari fonts and sizing), layout flexibility techniques (avoid fixed widths, dynamic sizing), and testing methods (pseudo-localization, RTL testing, locale validation). You'll get systematic approaches to design products that work globally.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Internationalization (i18n) Design Specialist focusing on global design, localization, RTL languages, cultural adaptation, and translation-friendly interfaces.

I'm designing for internationalization to support [Target Markets] by handling [Languages] including [RTL Languages if applicable], accommodating [Text Expansion], respecting [Cultural Differences], and properly formatting [Locale-Specific Data].

[OPTIONAL: Attach current English-only designs needing i18n adaptation]

Internationalization requirements:
- Target markets: [e.g., Global (100+ countries), Europe, Middle East, Asia, Latin America]
- Languages: [e.g., English, Spanish, French, German, Arabic, Hebrew, Japanese, Chinese, Hindi]
- RTL languages: [e.g., Arabic, Hebrew, Farsi/Persian, Urdu - or None if not supporting RTL]
- Priority markets: [e.g., US/UK (English), Spain/LatAm (Spanish), MENA (Arabic), etc.]
- Product type: [e.g., SaaS, E-commerce, Mobile app, Marketing site, Content platform]

Current i18n problems:
- [Problem 1: e.g., Layout breaks - German text 40% longer, buttons overflow, text truncates]
- [Problem 2: e.g., No RTL support - Arabic text left-aligned, icons don't flip, completely broken]
- [Problem 3: e.g., Text in graphics - buttons with English text baked into images, can't translate]
- [Problem 4: e.g., Cultural issues - colors/imagery inappropriate for some markets, hand gestures offensive]
- [Problem 5: e.g., Wrong formats - dates show MM/DD/YYYY (US only), prices show $ instead of local currency]

Team context: [Translation resources, target launch markets, timeline, budget for localization]

Please provide:
1. Text expansion strategies (accommodate 30-50% longer text, flexible layouts, truncation rules)
2. RTL (right-to-left) design (mirror layouts, flip icons, bidirectional text, Arabic/Hebrew specifics)
3. Translation-friendly design (separate text from graphics, avoid text in images, use i18n-friendly copy)
4. Cultural considerations (colors, imagery, icons, gestures, symbols that vary by culture)
5. Date, time, and number formatting (locale-aware formats, avoid ambiguity, currency display)
6. Typography for multiple scripts (Latin, Arabic, CJK, Devanagari, font selection, fallbacks)
7. Layout flexibility (avoid fixed widths, dynamic sizing, responsive to content length)
8. Testing and QA (pseudo-localization, RTL testing, translation validation)

Consider: [Constraints - e.g., RTL support required, 20+ languages, Limited translation budget, Mobile-first, Cultural sensitivity critical]
```

💡 What to customize:

- [Target Markets] = Which countries/regions
- [Languages] = Which languages to support
- [RTL Languages] = Arabic, Hebrew, etc. (if applicable)
- [Text Expansion] = How much text grows when translated
- [Cultural Differences] = Regional sensitivities
- [Locale-Specific Data] = Dates, currency, numbers
- [Problems 1-5] = Current i18n issues
- Attach English-only designs needing adaptation
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Internationalization (i18n) Design Specialist focusing on global design, localization, RTL languages, cultural adaptation, and translation-friendly interfaces.

I'm designing for internationalization for a SaaS Project Management Tool to support global markets (Europe, Middle East, Asia, Latin America - 25+ countries) by handling 12 languages (English, Spanish, French, German, Portuguese, Arabic, Hebrew, Japanese, Chinese, Korean, Hindi, Russian) including RTL languages (Arabic, Hebrew), accommodating text expansion (German 35% longer, Russian 30% longer), respecting cultural differences (colors, date formats, imagery), and properly formatting dates, times, currencies, and numbers per locale.

[User would attach current English-only designs - buttons, forms, navigation that break when translated]

Internationalization requirements:
- Target markets:
  - Europe: UK, Spain, France, Germany, Portugal, Russia
  - Middle East: UAE, Saudi Arabia, Israel, Qatar
  - Asia: Japan, China, South Korea, India
  - Latin America: Mexico, Brazil, Argentina
  - Total: 25+ countries, diverse cultures and scripts
- Languages (priority order):
  1. English (primary, US/UK)
  2. Spanish (Spain + LatAm, 400M speakers)
  3. Arabic (MENA region, RTL, 300M speakers)
  4. French, German, Portuguese (Europe)
  5. Hebrew (Israel, RTL)
  6. Japanese, Chinese, Korean (Asia, CJK scripts)
  7. Hindi, Russian (large markets)
- RTL languages: Arabic and Hebrew (critical for MENA and Israel markets)
- Priority markets:
  - Tier 1: US/UK (English), MENA (Arabic), Europe (Spanish, French, German)
  - Tier 2: LatAm (Spanish/Portuguese), Japan, Israel (Hebrew)
  - Tier 3: China, Korea, India, Russia
- Product type: SaaS web app (desktop-focused, some mobile usage)

Current i18n problems:
- Layout breaks with longer text - German translations 35% longer than English (e.g., "Settings" → "Einstellungen" 11 chars → 14 chars, "Create project" → "Projekt erstellen"), buttons designed for English overflow with German text, navigation menu items truncate with "..." unreadable, forms designed for "Name" (4 chars) break with "Nombre completo" (15 chars in Spanish), card titles cut off, fixed-width columns in tables can't fit translated headers
- No RTL support - Arabic users see left-aligned Arabic text (reads right-to-left, completely wrong), navigation on left side (should be on right for RTL), icons point wrong direction (back arrow points left, should point right in RTL), checkboxes on left of labels (should be on right), text direction completely broken, Arabic text mixed with English numbers looks garbled
- Text baked into graphics - Button graphics have "Create Project" text embedded in image (can't translate without recreating graphic for each language), illustrations have English labels, icons use text instead of symbols, screenshots in help documentation all English, 50+ graphics need recreation per language (expensive, slow)
- Cultural issues - Green used for success (but green has negative connotations in some MENA countries), thumbs-up icon (offensive gesture in parts of Middle East), calendar shows Sunday as first day (many countries start week on Monday), date picker defaults to MM/DD/YYYY (confusing outside US, most use DD/MM/YYYY), hand gesture icons in onboarding (some gestures offensive in certain cultures)
- Wrong date/time/currency formats - Dates hardcoded as "12/05/2024" (is it December 5 or May 12? ambiguous), times show "3:00 PM" (24-hour clock preferred in many countries), prices show "$50" (should show €, £, ¥, etc. based on locale), numbers show "1,000.50" with comma separator (many countries use "1.000,50" with period separator), phone number format assumes US "(555) 123-4567" (international numbers vary wildly)
- Typography issues - Font looks good in Latin scripts (English, Spanish) but breaks with Arabic (wrong font), Chinese characters tiny and unreadable, Hindi/Devanagari not supported, Japanese text line height too tight (characters overlap), no fallback fonts, Unicode rendering issues with some characters

Team context:
- Translation resources: Budget for professional translation (not machine translation), have translation agency for all 12 languages
- Target launch markets: Europe Q2, MENA Q3, Asia Q4 (staggered rollout)
- Timeline: 4 months to prepare for Europe launch (German, French, Spanish first)
- RTL priority: High (MENA is top 3 market, Arabic critical for success)
- Cultural sensitivity: Very important (enterprise customers, can't afford offensive mistakes)
- Development: React (supports i18n libraries, can implement RTL with CSS), have i18n engineering lead

Please provide:
1. Text expansion strategies (accommodate 30-50% longer text, flexible layouts, truncation rules)
2. RTL (right-to-left) design (mirror layouts, flip icons, bidirectional text, Arabic/Hebrew specifics)
3. Translation-friendly design (separate text from graphics, avoid text in images, use i18n-friendly copy)
4. Cultural considerations (colors, imagery, icons, gestures, symbols that vary by culture)
5. Date, time, and number formatting (locale-aware formats, avoid ambiguity, currency display)
6. Typography for multiple scripts (Latin, Arabic, CJK, Devanagari, font selection, fallbacks)
7. Layout flexibility (avoid fixed widths, dynamic sizing, responsive to content length)
8. Testing and QA (pseudo-localization, RTL testing, translation validation)

Consider: 12 languages including Arabic/Hebrew RTL. Text expansion 30-50% (German, Russian especially). Cultural sensitivity (MENA market critical). Enterprise customers (professional quality required). Staggered rollout (Europe first, then MENA, then Asia). React implementation (i18n library support). Budget for professional translation.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Design for 50% text expansion: German and Russian translations can be 30-50% longer than English
✦ Common mistake: Hardcoding dates as "12/05/2025" - ambiguous globally, use "Dec 5, 2025" or ISO 8601
✦ Best with: Claude (excellent at cultural nuances, systematic i18n patterns), ChatGPT (good for locale examples)
✦ Remix it: "Adapt this design for internationalization - support RTL, 50% text expansion, cultural sensitivity"
✦ Pro move: Ask "Audit my design for i18n issues - check fixed widths, RTL support, cultural appropriateness, date formats"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design RTL version of this layout - mirror navigation, flip icons, right-align text for Arabic/Hebrew"
- "Adapt this button/form for text expansion - handle German 35% longer text, avoid fixed widths, allow wrapping"
- "Review color and imagery for cultural appropriateness - identify potential issues for MENA, Asia, LatAm markets"
- "Design locale-aware date picker - support DD/MM/YYYY and MM/DD/YYYY, unambiguous display, international formats"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![70_Example_Output.png](70_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)
→ Recipe #69: [Write Better UX Copy](R-69%20Write%20Better%20UX%20Copy%202d867ccc6bef808592b4c0f3341bdd42.md)
→ Recipe #46: [Build a Design System Foundation](R-46%20Build%20a%20Design%20System%20Foundation%202d767ccc6bef80169c93ff15b9a23dff.md)

</aside>