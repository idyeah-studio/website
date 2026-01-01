# R-14: Design Step-by-Step Wizards

# Recipe #14: Design Step-by-Step Wizards

Category: Wireframing & IA  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning a complex setup process, onboarding flow, or configuration wizard that requires users to complete multiple steps in sequence. The current wizard is confusing - users don't know how many steps remain, can't go back to edit, or abandon mid-process.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Wizard flows in many applications often lack clear progress indication, don't handle errors well, force linear progression without ability to skip or go back, and lose user data if they navigate away. Users feel trapped, don't know how much longer the process will take, and abandon when it feels endless. You need to design a wizard that guides users confidently through complex processes while giving them control and visibility.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a step sequencing strategy with optimal order and grouping recommendations, progress indication patterns including visual states and time estimation, navigation controls covering back, next, skip, and save draft functionality with exit handling, validation approaches distinguishing per-step versus inline feedback with error prevention guidance, data persistence mechanisms for auto-save and resume capability, error handling at field and step levels with recovery paths, mobile optimization featuring single-field screens and simplified navigation, and completion experience design with success confirmation and next steps. Optional step-by-step wireframe flow with annotations.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Flow Designer specializing in multi-step wizards and guided processes.

I'm designing a step-by-step wizard for [Process Type] that guides users through [Number of Steps] steps.

[OPTIONAL: Attach screenshots of current wizard or flowchart]

Wizard requirements:
- Process goal: [e.g., Complete account setup, Configure integration, Submit application]
- Steps involved: [List each step and what it collects/accomplishes]
- Typical completion time: [e.g., 5-10 minutes]
- User context: [Who completes this, when, and why]

Current problems:
- [Problem 1: e.g., Users don't know how many steps remain]
- [Problem 2: e.g., Can't go back to edit previous steps without losing data]
- [Problem 3: e.g., No way to save progress and resume later]
- [Problem 4: e.g., Validation only happens at the end, frustrating users]

Step complexity:
- Simple steps: [e.g., Step 1: Choose plan - 3 radio buttons]
- Complex steps: [e.g., Step 3: Payment info - 8 fields with validation]
- Optional steps: [e.g., Step 5: Add team members - can be skipped]

Please provide:
1. Step sequence and grouping strategy
2. Progress indication pattern (stepped, linear, percentage, visual)
3. Navigation controls (back, next, skip, save draft)
4. Validation approach (per-step vs. final, inline feedback)
5. Data persistence and resume strategy
6. Error handling and recovery
7. Mobile wizard adaptation
8. Success and completion experience

Consider: [Constraints - e.g., Some steps required, some optional, must prevent data loss, handle long forms]
```

💡 What to customize:

- [Process Type] = Account setup, Onboarding, Integration configuration, Application submission, Product customization
- [Number of Steps] = Your actual step count
- [Steps involved] = What happens in each step
- [Problems 1-4] = Current wizard pain points
- [Step complexity] = Which steps are simple vs. complex
- Upload screenshots of current wizard or user flow diagram
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Flow Designer specializing in multi-step wizards and guided processes.

I'm designing a step-by-step wizard for E-commerce Seller Onboarding that guides users through 6 steps to set up their online store.

[User would attach screenshots here]

Wizard requirements:
- Process goal: Complete seller account setup so they can start listing products
- Steps involved:
  1. Business information (business name, type, tax ID - 4 fields)
  2. Store details (store name, description, logo upload, category - 5 fields)
  3. Payment setup (bank account, payment methods accepted - 6 fields)
  4. Shipping settings (regions served, rates, handling time - 7 fields)
  5. Policies (return policy, terms of service - 2 text areas)
  6. Review & launch (summary of all info, final confirmation)
- Typical completion time: 15-20 minutes for new sellers
- User context: New sellers setting up for first time, often distracted, may not have all info ready (like bank account details)

Current problems:
- Users abandon at Step 3 (payment setup) - 45% drop-off when they realize they need bank info
- No progress indicator - users ask "how much longer?" in support tickets
- Can't go back to Step 2 to fix store name after seeing it in review - must restart wizard
- If browser closes, all data lost - no save draft option
- Validation only at end - users complete all 6 steps then discover business name already taken
- Mobile experience is terrible - long forms on small screens

Step complexity:
- Simple steps: Step 1 (4 fields), Step 2 (5 fields)
- Complex steps: Step 3 (payment - sensitive data, validation), Step 4 (shipping - conditional fields based on regions)
- Optional steps: Step 5 (policies - can use defaults and edit later)

Please provide:
1. Step sequence and grouping strategy
2. Progress indication pattern (stepped, linear, percentage, visual)
3. Navigation controls (back, next, skip, save draft)
4. Validation approach (per-step vs. final, inline feedback)
5. Data persistence and resume strategy
6. Error handling and recovery
7. Mobile wizard adaptation
8. Success and completion experience

Consider: Sellers may not have all info ready (especially payment details). Should allow saving draft and resuming later. Step 3 and 4 are drop-off points - need to reduce friction. Mobile users represent 35% of onboarding starts. Some sellers rush through and want to skip optional steps.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Start with the easiest step: Build momentum and confidence before asking for complex info
✦ Common mistake: Forcing users through all steps linearly - allow going back to edit and skipping optional steps
✦ Best with: Claude (excellent at flow logic and edge cases), ChatGPT (good for progression patterns)
✦ Remix it: "Design the 'quick setup' version - what if we condensed this to 2 steps for advanced users?"
✦ Pro move: Ask "Create the abandonment recovery email - how do we bring users back to complete the wizard?"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the micro-copy for each step: headlines, helper text, and button labels"
- "What happens if a user needs to upload a document but doesn't have it ready? Design the 'upload later' flow"
- "Create the mobile-first version where each step is a full screen with swipe navigation"
- "How should we handle conditional steps? If user selects X in step 2, step 4 changes completely"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![14_Example_Output.png](14_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #04: [Design Multi-Step Flows](R-04%20Design%20Multi-Step%20Flows%202d667ccc6bef806f9f3be9cdaefa9a9e.md)
→ Recipe #07: [Find Hidden User Dead-Ends](R-07%20Find%20Hidden%20User%20Dead-Ends%202d667ccc6bef806b890bc2048285b3fa.md)
→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)

</aside>