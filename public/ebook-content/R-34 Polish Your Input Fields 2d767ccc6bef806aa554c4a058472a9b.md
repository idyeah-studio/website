# R-34: Polish Your Input Fields

# Recipe #34: Polish Your Input Fields

Category: UI & Visuals  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning forms with inputs that feel clunky, unclear, or frustrating - fields with poor focus states, vague labels, tiny click targets, or confusing error messages. Users struggle to complete forms or make mistakes filling them out.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have poorly designed input fields - tiny 32px height inputs that are hard to tap on mobile, vague placeholder text used as labels (disappearing when typing), no clear focus indication, disabled states that look identical to enabled, error states that appear too early or too late, and inconsistent styling across different input types. Users click submit only to discover validation errors they didn't see. Mobile users struggle with tiny inputs and inappropriate keyboards. You need to design input fields that are obvious to interact with, provide clear feedback, prevent errors, and work beautifully across devices.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide input sizing specifications (44-48px height with proper padding and minimum 44x44px touch targets), label and placeholder strategy with persistent visible labels above inputs and placeholders used only for format examples, comprehensive state design covering default, hover, focus (highly visible with 2-3px blue border and glow), disabled (distinct gray background), error (red border with specific messages and icons), and success states, error handling guidance on validation timing (on blur for required fields, debounced for format validation) with specific helpful messages positioned directly below fields, input type recommendations for email, tel, password (with show/hide toggle), number, and search with appropriate mobile keyboard types and autocomplete attributes, and complete accessibility requirements including ARIA labels, keyboard navigation, 4.5:1 contrast ratios, and screen reader announcements. Optionally includes input field component library showing all states.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Form Design Specialist focusing on input field usability, accessibility, and states.

I'm designing input fields for a [Product Type] that need to be clear, accessible, and easy to use.

[OPTIONAL: Attach screenshots showing current input field designs]

Input field requirements:
- Input types needed: [e.g., Text, Email, Password, Number, Dropdown, Checkbox, Radio, Textarea, Date picker]
- Form contexts: [e.g., Registration, Checkout, Settings, Search, Filters]
- Device usage: [e.g., 60% desktop, 40% mobile]
- User expertise: [e.g., Non-technical consumers, Business users, Technical users]

Current input field problems:
- [Problem 1: e.g., Input height is 36px - too small for touch on mobile (need 44px minimum)]
- [Problem 2: e.g., Using placeholder as label - disappears when typing, no context]
- [Problem 3: e.g., Focus state is subtle 1px blue outline - barely visible]
- [Problem 4: e.g., Disabled inputs look identical to enabled - users try to click them]
- [Problem 5: e.g., Error message appears while typing - aggressive and annoying]

User context: [How users interact with forms, common errors, frustration points]

Please provide:
1. Input sizing and spacing (height, padding, touch targets)
2. Label and helper text strategy
3. Placeholder text best practices
4. State design (default, hover, focus, disabled, error, success)
5. Error handling and validation feedback
6. Input type recommendations (when to use what)
7. Mobile optimization (keyboard types, autocomplete)
8. Accessibility requirements (ARIA, keyboard navigation)

Consider: [Constraints - e.g., Must work on mobile, WCAG AA compliance, support screen readers, multiple languages, right-to-left text]
```

💡 What to customize:

- [Product Type] = E-commerce checkout, SaaS signup, Banking app, Contact form, Search interface
- [Input types] = Which input types you use
- [Form contexts] = Where inputs appear
- [Device usage] = Desktop vs. mobile split
- [Problems 1-5] = Current input field issues
- Upload screenshots showing current input designs
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Form Design Specialist focusing on input field usability, accessibility, and states.

I'm designing input fields for an E-commerce Checkout Form that need to reduce errors and cart abandonment.

[User would attach input screenshots here]

Input field requirements:
- Input types needed:
  - Text inputs (Name, Address, City, Zip)
  - Email input (Email address)
  - Phone input (Phone number with country code)
  - Dropdown (Country, State selection)
  - Checkbox (Save info, Terms agreement)
  - Radio buttons (Shipping method selection)
  - Credit card inputs (Number, CVV, Expiry)
- Form contexts:
  - Multi-step checkout (Shipping → Payment → Review)
  - Account creation during checkout
  - Address autocomplete/validation
  - Payment information (PCI compliant)
- Device usage: 40% mobile (increasing), 60% desktop
- User expertise: General consumers, ages 25-65, not tech-savvy, in a hurry

Current input field problems:
- Input height is 36px with 8px padding - too small for mobile users with large thumbs (need 44px minimum touch target)
- Using placeholder text "Enter your email" as the only label - disappears when typing, users forget what field they're in
- Focus state is barely visible - 1px light blue outline that's hard to see, especially for users with vision impairment
- Disabled "State" dropdown (until country selected) looks identical to enabled inputs - users click it repeatedly wondering why nothing happens
- Error validation triggers on blur immediately - user tabs out of empty required field, sees "This field is required" before they've even started typing (aggressive)
- All text inputs look identical - email, phone, zip code all have same styling, no visual hint about expected format
- Checkbox for "I agree to terms" is 16x16px - too small to tap on mobile, users miss it and get error
- Password field has no show/hide toggle - users can't verify what they typed
- Mobile keyboard shows default QWERTY for phone number field - should show numeric keypad
- Error messages appear in tiny 12px red text below field - easy to miss, no icon

User context: Users are trying to complete purchase quickly - every friction point risks cart abandonment. Mobile users often in poor lighting (can't see subtle focus states). Users multitask - tab away and come back (need persistent labels, not placeholders). 30% of checkout errors are from form mistakes (wrong email format, missing required fields). Users get frustrated with aggressive validation. Accessibility critical - 15% of users have some vision impairment.

Please provide:
1. Input sizing and spacing (height, padding, touch targets)
2. Label and helper text strategy
3. Placeholder text best practices
4. State design (default, hover, focus, disabled, error, success)
5. Error handling and validation feedback
6. Input type recommendations (when to use what)
7. Mobile optimization (keyboard types, autocomplete)
8. Accessibility requirements (ARIA, keyboard navigation)

Consider: Mobile touch targets minimum 44x44px. WCAG AA contrast (4.5:1). Must support autocomplete for faster checkout. Real-time validation should be helpful not aggressive. Password visibility toggle required. Credit card fields need special security treatment. Form must work with password managers. Support for international addresses and phone formats.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Focus states must be obvious: 3px blue border beats 1px outline every time - accessibility critical
✦ Common mistake: Using placeholder as label - always have persistent visible label above input
✦ Best with: Claude (excellent at state design and accessibility), ChatGPT (good for validation timing)
✦ Remix it: "Design the password strength indicator - real-time visual feedback as user types"
✦ Pro move: Ask "Create the input field state matrix - all combinations of states with visual specs"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the inline validation strategy - when to validate, when to show errors, when to show success"
- "Create the mobile form optimization - keyboard types, autocomplete, input sizing for touch"
- "How should password input work - show/hide toggle, strength meter, requirements display?"
- "Design the autofill/autocomplete experience - how to help browsers and users fill forms faster"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![34_Example_Output.png](34_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)
→ Recipe #27: [Design Smooth Interactions](R-27%20Design%20Smooth%20Interactions%202d767ccc6bef80979ab0f6fc70dc611e.md)

</aside>