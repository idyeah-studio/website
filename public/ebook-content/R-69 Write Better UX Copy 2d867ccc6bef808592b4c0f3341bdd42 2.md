# R-69: Write Better UX Copy

# Recipe #69: Write Better UX Copy

Category: Bonus — Content & Copy  |  ⏱️ 30-35 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're writing interface copy - button labels, error messages, empty states, onboarding instructions, form field labels, success messages, or notification text. Your current copy is vague, technical, unhelpful, inconsistent in tone, or confuses users instead of guiding them.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers write poor UX copy - using vague labels (buttons say "Submit" or "OK" instead of specific actions), technical jargon (error messages say "Error 422: Unprocessable entity" instead of explaining the problem), unhelpful instructions (forms say "Enter password" instead of explaining requirements), inconsistent tone (formal legal language mixed with casual emoji), or missing context (notifications say "Success!" without explaining what succeeded). Teams create interfaces where users don't know what buttons do, can't recover from errors, abandon forms due to confusing instructions, or feel frustrated by robotic corporate-speak. You need systematic UX writing - clear action-oriented labels (buttons describe outcome, not technical action), helpful error messages (explain what's wrong + how to fix), conversational tone (human voice, not robot), contextual guidance (explain why we need information, what happens next), and consistent voice (brand personality throughout).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide action-oriented button labels (specific, under 20 characters), helpful error messages (explain problem + solution, positive tone), encouraging empty state copy (why empty, what to do next), clear form labels with helper text (explain requirements, why we need info, examples), brief benefit-focused onboarding copy, specific notifications (what happened, what's next), conversational tone guidelines (contractions, active voice, no jargon, consistent brand personality), and common UX copy mistakes to avoid. You'll get systematic guidance to write clear, helpful, human-sounding interface text.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Writer and Content Strategist focusing on microcopy, interface text, conversational tone, and user-friendly language.

I'm writing UX copy for [Product/Feature] to help users [Primary Goal] by improving [Copy Elements] while maintaining [Brand Voice] and avoiding [Common Copy Problems].

[OPTIONAL: Attach current copy, brand voice guidelines, or examples of problematic text]

UX copy requirements:
- Product type: [e.g., SaaS tool, E-commerce, Mobile app, Consumer product, Enterprise software]
- Primary users: [e.g., Non-technical users, Professionals, General consumers, Elderly users]
- Key copy areas: [e.g., Button labels, Error messages, Empty states, Onboarding, Form labels, Notifications]
- Brand voice: [e.g., Friendly and casual, Professional and trustworthy, Playful and fun, Minimal and direct]
- Tone goals: [e.g., Helpful, Conversational, Reassuring, Encouraging, Efficient]

Current copy problems:
- [Problem 1: e.g., Vague button labels - "Submit", "OK", "Continue" don't tell users what happens next]
- [Problem 2: e.g., Technical error messages - "Error 422" or jargon users don't understand]
- [Problem 3: e.g., Unhelpful form labels - "Enter password" without explaining requirements or why we need it]
- [Problem 4: e.g., Inconsistent tone - mixing formal legal language with casual emoji, feels schizophrenic]
- [Problem 5: e.g., No context - notifications say "Success" without explaining what succeeded or what to do next]

Team context: [Writing experience, brand guidelines, content approval process, localization needs]

Please provide:
1. Button and CTA copy (action-oriented, specific, describe outcome not technical action)
2. Error messages (explain what's wrong, how to fix it, positive tone, no blame)
3. Empty states (explain why empty, what to do next, encouraging tone)
4. Form labels and helpers (clear labels, explain requirements, why we need info, helpful examples)
5. Onboarding copy (brief, benefit-focused, progressive, not overwhelming)
6. Notifications and confirmations (specific about what happened, what's next, reassuring)
7. Tone and voice (conversational, human, consistent, brand personality)
8. Common copy mistakes (and how to fix them)

Consider: [Constraints - e.g., Character limits (mobile), Localization (global audience), Accessibility (screen readers), Legal requirements]
```

💡 What to customize:

- [Product/Feature] = What you're writing copy for
- [Primary Goal] = What users are trying to do
- [Copy Elements] = Buttons, errors, forms, etc.
- [Brand Voice] = Friendly, professional, playful, etc.
- [Common Copy Problems] = Current copy issues
- [Problems 1-5] = Specific copy problems
- Attach current copy or brand guidelines
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Writer and Content Strategist focusing on microcopy, interface text, conversational tone, and user-friendly language.

I'm writing UX copy for a Personal Finance App (budgeting, expense tracking, savings goals) to help users manage money confidently by improving button labels, error messages, empty states, form guidance, and onboarding instructions while maintaining a friendly, encouraging, trustworthy brand voice and avoiding financial jargon, blame-filled errors, vague labels, and intimidating corporate-speak.

[User would attach current copy - vague buttons like "Submit", technical error messages, unhelpful empty states]

UX copy requirements:
- Product type: Consumer mobile app (iOS/Android, personal finance/budgeting)
- Primary users:
  - Millennials/Gen Z (25-40 years old, varying financial literacy)
  - First-time budgeters (anxious about money, need encouragement)
  - Not financial experts (avoid jargon, explain concepts simply)
- Key copy areas:
  - Button labels and CTAs (throughout app - create budget, add expense, set goal)
  - Error messages (form validation, transaction sync failures, budget limit warnings)
  - Empty states (no transactions yet, no budgets created, no savings goals)
  - Onboarding (first-time setup, explain features without overwhelming)
  - Form labels and helpers (add transaction, create budget, set savings goal)
  - Notifications (budget alerts, savings milestones, transaction reminders)
- Brand voice: Friendly, encouraging, trustworthy (like a supportive friend, not a stern bank)
- Tone goals:
  - Helpful (guide users, don't assume they know finance)
  - Conversational (human voice, not corporate robot)
  - Reassuring (reduce money anxiety, positive reinforcement)
  - Encouraging (celebrate wins, gentle on mistakes)
  - Non-judgmental (never blame or shame about spending)

Current copy problems:
- Vague button labels - Buttons say "Submit", "Continue", "OK", "Save" throughout app, users don't know what will happen when they tap, "Submit" doesn't tell if creating budget or adding transaction, "Continue" in onboarding unclear what step comes next, no context or specificity
- Technical error messages - Form errors say "Invalid input" (what's invalid?), sync failures say "Error 500: Internal server error" (users don't know what to do), password errors say "Password must match regex pattern" (what does that mean?), budget overspending shows "Limit exceeded" with no explanation or guidance
- Unhelpful empty states - First-time users see "No transactions" with no guidance what to do next, budgets screen shows "No budgets yet" (intimidating, no encouragement to start), savings goals empty state just says "Add a goal" (no explanation why goals are helpful), feels barren and unwelcoming
- Inconsistent tone - Legal disclaimers use formal language ("You hereby agree..."), error messages are curt ("Invalid"), success messages use emoji ("Budget created! 🎉"), onboarding mixes formal and casual, feels like different apps stitched together, confusing and unprofessional
- No context in forms and notifications - "Add transaction" form just says "Amount:" without explaining what to enter, "Category:" dropdown with no guidance which to choose, "Budget created" notification doesn't say what to do next, "You're over budget" notification feels like a scolding with no helpful next steps

Team context:
- Writing experience: Limited (designer writes copy, no dedicated UX writer on team)
- Brand guidelines: Basic (we want "friendly and encouraging" but no detailed voice/tone guide)
- Users: Many have money anxiety, low financial literacy, need gentle supportive guidance
- Feedback: User testing shows confusion ("What does this button do?"), intimidation ("I don't know what to put here"), frustration with errors ("I don't know how to fix this")
- Goal: Make budgeting feel approachable, not intimidating, reduce anxiety around money management
- Constraints: Mobile UI (limited space, button labels ~20 characters max), will localize to Spanish later

Please provide:
1. Button and CTA copy (action-oriented, specific, describe outcome not technical action)
2. Error messages (explain what's wrong, how to fix it, positive tone, no blame)
3. Empty states (explain why empty, what to do next, encouraging tone)
4. Form labels and helpers (clear labels, explain requirements, why we need info, helpful examples)
5. Onboarding copy (brief, benefit-focused, progressive, not overwhelming)
6. Notifications and confirmations (specific about what happened, what's next, reassuring)
7. Tone and voice (conversational, human, consistent, brand personality)
8. Common copy mistakes (and how to fix them)

Consider: Mobile app (character limits, ~20 chars for buttons). Non-technical users (avoid jargon). Money anxiety (reassuring, non-judgmental tone). First-time budgeters (explain concepts). Friendly and encouraging brand voice. Localization to Spanish (keep copy simple, culturally appropriate).
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Be specific with buttons: "Create budget" beats "Submit" - users should know exactly what happens when they tap
✦ Common mistake: Technical error messages - "Error 422" means nothing to users, explain the problem and solution
✦ Best with: Claude (excellent at conversational tone, helpful copy), ChatGPT (good at generating variations)
✦ Remix it: "Rewrite this button/error/empty state copy - make it specific, helpful, conversational, [brand voice]"
✦ Pro move: Ask "Audit my UX copy for clarity, tone consistency, and helpfulness - identify vague or confusing text"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Write button labels for [feature] - action-oriented, specific, under 20 characters, friendly tone"
- "Rewrite these error messages - explain what's wrong + how to fix, positive tone, no jargon, helpful"
- "Create empty state copy for [screen] - explain why empty, what to do next, encouraging, with CTA"
- "Write form labels and helper text - clear questions, explain why we need info, give examples, friendly"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![69_Example_Output.png](69_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #70: [Internationalization & Localization](R-70%20Internationalization%20&%20Localization%202d867ccc6bef80908126c55fa1dbe103.md)
→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)
→ Recipe #30: [Design Empty States](R-30%20Design%20Empty%20States%202d767ccc6bef80bf8926fcdc9c1d4e5a.md)

</aside>