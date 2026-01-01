# R-15: Design Better Forms

# Recipe #15: Design Better Forms

Category: Wireframing & IA  |  ⏱️ 30-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're designing forms for user input - signup/login forms, settings, data entry, checkout, search filters, or any interface where users need to enter information. Your current forms are confusing, have poor validation, unclear labels, or create friction in the user experience.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers struggle with forms - creating cluttered multi-column layouts that confuse users, using placeholders instead of labels (disappear when typing), unclear validation (errors appear only on submit, not inline), poor error messages ("Invalid input" without explanation), no indication of required vs optional fields, inconsistent input types (text field for date instead of date picker), forms that don't work on mobile (tiny inputs, wrong keyboards), or missing smart defaults (forcing users to type obvious information). Teams create forms with high abandonment rates, validation errors frustrate users, mobile forms are painful to complete, or checkout flows lose customers. You need systematic form design - clear structure (single column, logical flow), proper labels (always visible, descriptive), smart validation (inline feedback, helpful errors), appropriate input types (date picker for dates, dropdown for known options), mobile-optimized (large inputs, correct keyboards), and accessibility (keyboard navigation, screen reader support).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide form structure and layout recommendations including single versus multi-column patterns with spacing and visual hierarchy guidelines, labels and placeholders with always-visible labels and required indicators, input field type selection for text, email, password, number, date, dropdown, checkbox, radio, and textarea with appropriate keyboard types, validation strategies distinguishing real-time inline, on blur, and on submit approaches with validation states, error message best practices emphasizing specific and actionable messaging, mobile form optimization with large touch targets and correct keyboard types, form accessibility covering labels, keyboard navigation, ARIA attributes, and screen reader support, and smart defaults including auto-detection, character counts, and password strength indicators. Optional visual form examples showing structure and validation states.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Form Design Specialist focusing on form structure, validation patterns, input types, and user-friendly data entry experiences.

I'm designing forms for [Product Type] including [Form Types] that need to be clear, easy to complete, and work seamlessly on mobile and desktop.

[OPTIONAL: Attach current form designs with issues]

Form design requirements:
- Form types: [e.g., Login/signup, Settings, Multi-step checkout, Data entry, Search filters]
- Input complexity: [e.g., Simple (name, email), Medium (address, payment), Complex (conditional fields, file uploads)]
- Validation needs: [e.g., Real-time inline, On blur, On submit, Server-side]
- Mobile priority: [e.g., Mobile-first, Desktop-first, Responsive]
- Accessibility: [e.g., WCAG AA required, Keyboard navigation, Screen readers]

Current form problems:
- [Problem 1: e.g., Multi-column layout confuses users - jumping between columns, unclear flow]
- [Problem 2: e.g., Placeholder-only labels - text disappears when typing, users forget what field is]
- [Problem 3: e.g., Validation only on submit - users fill entire form, click submit, see 5 errors at once]
- [Problem 4: e.g., Unclear error messages - "Invalid input" doesn't explain what's wrong]
- [Problem 5: e.g., All fields look required - no visual difference between required and optional]

Team context: [Form usage frequency, user technical skills, mobile vs desktop split, common validation errors]

Please provide:
1. Form structure and layout (single vs multi-column, spacing, grouping, visual hierarchy)
2. Labels and placeholders (always-visible labels, helpful placeholders, required indicators)
3. Input field types (text, email, password, number, date, dropdown, checkbox, radio - when to use each)
4. Validation strategies (inline real-time, on blur, on submit, error message patterns)
5. Error message best practices (clear, specific, actionable, positive tone)
6. Mobile form optimization (single column, large inputs, correct keyboards, touch-friendly)
7. Form accessibility (labels, keyboard navigation, ARIA, screen reader support)
8. Smart defaults and helpers (autofill, pre-populate, helpful examples, character counts)

Consider: [Constraints - e.g., Must work on mobile, Accessibility required, Multi-step if long, Clear validation, Smart defaults]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Enterprise software
- [Form Types] = What forms you're designing
- [Input complexity] = Simple to complex forms
- [Validation needs] = Real-time, on blur, on submit
- [Mobile priority] = Mobile-first or desktop-first
- [Problems 1-5] = Current form issues
- Attach form designs with problems
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Form Design Specialist focusing on form structure, validation patterns, input types, and user-friendly data entry experiences.

I'm designing forms for a SaaS Project Management Tool including signup, login, create project, user settings, and invite team members that need to be clear, easy to complete, and work seamlessly on mobile and desktop.

[User would attach current form designs showing multi-column layouts, placeholder-only labels, poor validation]

Form design requirements:
- Form types:
  - Authentication: Signup (name, email, password), Login (email, password, remember me), Forgot password
  - Project creation: Project name, description, team members, due date, priority
  - Settings: User profile (name, email, avatar, timezone), Notification preferences, Team settings
  - Invite users: Email addresses (multiple), role selection, personal message
  - Search/filters: Keyword search, filter by status/assignee/date
- Input complexity:
  - Simple: Login (2 fields), Forgot password (1 field)
  - Medium: Signup (4-5 fields), Create project (6-8 fields)
  - Complex: Team settings (10+ fields with conditional logic), Multi-step onboarding
- Validation needs:
  - Real-time inline: Email format validation (shows ✓ or ✗ as user types)
  - On blur: Password strength indicator (shows after user leaves field)
  - On submit: Final validation check before submission
  - Server-side: Email already exists, username taken (after submit)
- Mobile priority:
  - 60% mobile users (mobile-first design critical)
  - Forms must be easy to complete on 375px iPhone
  - Large touch targets, correct keyboards (email keyboard, number pad)
- Accessibility:
  - WCAG AA compliance required
  - Keyboard navigation (tab through fields, submit on Enter)
  - Screen reader support (proper labels, error announcements)

Current form problems:
- Multi-column layout on signup form - Name | Email on left, Password | Company on right, users confused which field to fill next, jumping left-right-left-right, high error rate, especially bad on tablet (cramped)
- Placeholder-only labels everywhere - "Enter your email" as placeholder, no visible label, when user starts typing placeholder disappears, user forgets which field it is, have to delete text to see placeholder again, terrible UX
- Validation only happens on submit - User fills entire 8-field signup form, clicks "Create account", page shows 3 validation errors at top (email invalid, password too short, terms not checked), frustrating to fix errors after completing form, 40% abandonment at this step
- Vague error messages - "Invalid input" (which input? why invalid?), "Password error" (too short? need special character? what's wrong?), "Please try again" (try what again? what failed?)
- No required/optional indicators - All 8 fields look identical, user doesn't know which are required, fills optional fields thinking required, wastes time, or skips required fields thinking optional, gets errors
- Wrong input types - Date field is text input (user types "12/25/2024" or "December 25" or "25-12-24" inconsistent), should be date picker, Phone number is text (gets letters, spaces, dashes), should be number input
- Tiny mobile inputs - Input fields are 36px tall on mobile (below 44px touch target minimum), hard to tap, wrong keyboard (email field shows default keyboard not email keyboard with @ symbol)
- No smart defaults - Country dropdown defaults to Afghanistan (alphabetical), should default to user's location, Timezone empty (user must search through 100 options), should auto-detect

Team context:
- Forms used daily by 10,000+ users
- 60% mobile, 40% desktop (mobile-first critical)
- Common errors: Email format (20%), Password too weak (15%), Required fields missed (25%)
- User skill level: Non-technical (project managers, marketers, not developers)
- Need: Clear, forgiving forms that guide users to success

Please provide:
1. Form structure and layout (single vs multi-column, spacing, grouping, visual hierarchy)
2. Labels and placeholders (always-visible labels, helpful placeholders, required indicators)
3. Input field types (text, email, password, number, date, dropdown, checkbox, radio - when to use each)
4. Validation strategies (inline real-time, on blur, on submit, error message patterns)
5. Error message best practices (clear, specific, actionable, positive tone)
6. Mobile form optimization (single column, large inputs, correct keyboards, touch-friendly)
7. Form accessibility (labels, keyboard navigation, ARIA, screen reader support)
8. Smart defaults and helpers (autofill, pre-populate, helpful examples, character counts)

Consider: Mobile-first (60% mobile users). Single-column layout. Always-visible labels. Inline validation (real-time feedback). Helpful error messages (specific, actionable). Correct input types (email keyboard, date picker). Large touch targets (44px minimum). Smart defaults (auto-detect location, timezone). Accessibility (keyboard nav, screen readers). Low error rate (guide users to success).
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Single-column layout wins: 25% faster completion and fewer errors than multi-column
✦ Common mistake: Using placeholders instead of labels - placeholders disappear when typing, terrible UX
✦ Best with: Claude (excellent at form structure and validation patterns), ChatGPT (good for error messages and copy)
✦ Remix it: "Design mobile-first signup form - single column, inline validation, helpful errors, 44px touch targets"
✦ Pro move: Ask "Audit my checkout form for UX issues - layout, validation, error messages, mobile optimization"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the signup form - name, email, password with strength indicator, inline validation, mobile-optimized"
- "Create validation patterns - when to validate (real-time, on blur, on submit), helpful error messages"
- "Design mobile form best practices - single column, large inputs, correct keyboards, minimal typing"
- "Write better form error messages - specific, actionable, positive tone with examples"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![15_Example_Output.png](15_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #04: [Design Multi-Step Flows](R-04%20Design%20Multi-Step%20Flows%202d667ccc6bef806f9f3be9cdaefa9a9e.md)
→ Recipe #34: [Polish Your Input Fields](R-34%20Polish%20Your%20Input%20Fields%202d767ccc6bef806aa554c4a058472a9b.md)
→ Recipe #64: [Design Accessible Components (Bonus)](R-64%20Design%20Accessible%20Components%20d8c67ccc6bef83ed9c3201d848757c88.md)

</aside>