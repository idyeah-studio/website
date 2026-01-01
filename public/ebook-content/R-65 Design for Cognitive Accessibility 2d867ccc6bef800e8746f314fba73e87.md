# R-65: Design for Cognitive Accessibility

# Recipe #65: Design for Cognitive Accessibility

Category: Bonus — Accessibility  |  ⏱️ 30-40 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're designing interfaces that need to be easy to understand and use for people with cognitive disabilities, learning differences, ADHD, anxiety, or anyone experiencing stress or cognitive overload - reducing mental load, simplifying language, maintaining consistency, preventing errors, or supporting memory and attention. Your current interface overwhelms users, uses complex jargon, has inconsistent patterns, or requires too much mental effort to complete tasks.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create cognitively demanding interfaces - overwhelming users with too much information at once (dense screens, no chunking), using complex jargon or technical language (confusing instructions, unclear labels), creating inconsistent patterns (same action works differently in different places), poor error prevention (mistakes are easy, recovery is hard), requiring strong memory (multi-step processes with no progress indicators, complex passwords with strict rules), or demanding sustained attention (time limits, distractions, interruptions). Teams create products that exclude users with cognitive disabilities (dyslexia, ADHD, autism, brain injury), frustrate elderly users, stress anxious users, or simply exhaust everyone. You need cognitively accessible design - reduced cognitive load (chunking, progressive disclosure, clear hierarchy), plain language (simple words, short sentences, conversational tone), consistent patterns (predictable UI, familiar metaphors, reusable mental models), error prevention (confirmations, constraints, auto-save, undo), memory aids (breadcrumbs, recently used, visible state, helpful defaults), and attention support (no time limits, minimal distractions, clear focus, one task at a time).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide strategies to reduce cognitive load (chunking information, progressive disclosure, clear hierarchy), plain language principles (simple words, short sentences, avoiding jargon), consistent patterns (predictable UI, reusable mental models), error prevention and recovery (confirmations, undo, auto-save, helpful errors), memory aids (progress indicators, breadcrumbs, save states, smart defaults), attention support (no aggressive timeouts, minimal distractions), reading and comprehension techniques (scannable content, whitespace, visual hierarchy), and testing methods with users who have cognitive disabilities. You'll get actionable guidelines to simplify complex interfaces and reduce mental effort.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Cognitive Accessibility Specialist focusing on reducing cognitive load, simplifying interfaces, and designing for users with cognitive disabilities, ADHD, anxiety, or stress.

I'm designing cognitively accessible interfaces for [Product Type] to reduce mental effort by [Key Strategies] for users with [Cognitive Needs] who struggle with [Current Problems].

[OPTIONAL: Attach current interface with cognitive accessibility issues]

Cognitive accessibility requirements:
- User needs: [e.g., Cognitive disabilities (dyslexia, ADHD, autism), Anxiety/stress, Elderly users, Non-native speakers]
- Current problems: [e.g., Information overload, Complex language, Inconsistent patterns, Easy to make errors, Memory-intensive]
- Key tasks: [e.g., Complete multi-step form, Navigate complex dashboard, Understand instructions, Recover from errors]
- Cognitive challenges: [e.g., Reading comprehension, Working memory, Sustained attention, Executive function]

Current cognitive accessibility problems:
- [Problem 1: e.g., Information overload - dashboard shows 50 metrics at once, overwhelming, can't focus]
- [Problem 2: e.g., Complex jargon - "Synchronize bidirectional API endpoints" unclear to non-technical users]
- [Problem 3: e.g., Inconsistent patterns - Delete sometimes asks confirmation, sometimes doesn't, unpredictable]
- [Problem 4: e.g., No error prevention - Easy to delete important data, no undo, permanent mistakes]
- [Problem 5: e.g., Memory-intensive - 10-step checkout with no progress indicator, users forget where they are]

Team context: [Cognitive accessibility awareness, user research, timeline, testing with users]

Please provide:
1. Reducing cognitive load (chunking information, progressive disclosure, clear hierarchy, one thing at a time)
2. Plain language principles (simple words, short sentences, active voice, conversational, avoid jargon)
3. Consistent patterns (predictable UI, familiar metaphors, reusable mental models, don't reinvent)
4. Error prevention and recovery (confirmations, constraints, undo, auto-save, helpful errors)
5. Memory aids (breadcrumbs, recently used, save states, visible progress, defaults)
6. Attention support (no time limits, minimize distractions, clear focus, interrupt-friendly)
7. Reading and comprehension (scannable, whitespace, formatting, visual hierarchy, illustrations)
8. Testing with cognitive disabilities (user testing, comprehension testing, task completion)

Consider: [Constraints - e.g., Complex product (must simplify), Non-technical users, Mobile-heavy, Elderly users, Global audience]
```

💡 What to customize:

- [Product Type] = What you're designing
- [Key Strategies] = How you'll reduce cognitive load
- [Cognitive Needs] = User cognitive challenges
- [Current Problems] = Cognitive accessibility issues
- [User needs] = Who needs cognitive accessibility
- [Problems 1-5] = Specific cognitive issues
- Attach interface with cognitive problems
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Cognitive Accessibility Specialist focusing on reducing cognitive load, simplifying interfaces, and designing for users with cognitive disabilities, ADHD, anxiety, or stress.

I'm designing cognitively accessible interfaces for a Healthcare Patient Portal (scheduling appointments, viewing test results, messaging doctors) to reduce mental effort by simplifying language, chunking information, providing clear guidance, preventing errors, and reducing memory load for users with elderly patients (60+ years old), users with anxiety about health issues, users with limited health literacy, and non-native English speakers who struggle with medical jargon, complex multi-step processes, dense information displays, and fear of making mistakes.

[User would attach current patient portal with cognitive accessibility issues]

Cognitive accessibility requirements:
- User needs:
  - Elderly users (60-80+ years old, may have mild cognitive decline, lower tech literacy)
  - Users with health anxiety (stressed, worried, need reassurance and clarity)
  - Limited health literacy (don't understand medical terms, need plain language)
  - Non-native English speakers (simpler language, avoid idioms and jargon)
  - Users with ADHD or attention difficulties (easily distracted, need focus)
- Current problems:
  - Medical jargon everywhere ("Schedule ambulatory consultation", "Review lipid panel results")
  - Dense information (test results show 30 data points at once, overwhelming)
  - Complex multi-step processes (scheduling requires 7 steps, no clear progress)
  - Inconsistent patterns (sometimes Save is automatic, sometimes manual, unpredictable)
  - Easy to make errors (clicked wrong appointment time, no confirmation, permanent)
  - No memory aids (multi-page forms don't save progress, start over if interrupted)
  - Time limits (session timeout after 10 minutes of inactivity, lose all work)
- Key tasks:
  - Schedule doctor appointment (currently 7 steps, lots of medical terminology)
  - View test results (currently shows raw lab data with no explanation)
  - Send message to doctor (currently complex form with required fields unclear)
  - Refill prescription (currently buried in menus, hard to find)
- Cognitive challenges:
  - Reading comprehension (medical jargon, complex sentences, dense text)
  - Working memory (multi-step processes, remembering where you are)
  - Sustained attention (long forms, dense dashboards, easy to lose focus)
  - Executive function (decision-making, task completion, dealing with errors)
  - Anxiety (health-related stress, fear of mistakes, need for reassurance)

Current cognitive accessibility problems:
- Information overload on dashboard - Landing page shows: Upcoming appointments (5 cards), Recent test results (8 items with medical terms), Messages (12 unread), Prescriptions (6 medications with dosages), Billing (4 outstanding charges), Health summary (10 vitals/metrics). Total 45+ pieces of information on first screen. Elderly users report "too much, don't know where to look", users with ADHD "can't focus on what's important", anxious users "overwhelmed, makes health anxiety worse"
- Complex medical jargon everywhere - Appointment types: "Ambulatory consultation", "Annual wellness visit", "Diagnostic imaging procedure", Test results: "Lipid panel", "Hemoglobin A1C", "Glomerular filtration rate (eGFR)", Actions: "Schedule telehealth encounter", "Review diagnostic findings". Elderly users don't understand terms, non-native speakers can't comprehend, users with limited health literacy confused, have to Google medical terms while using portal
- Inconsistent save behavior - Form A: Auto-saves every field (messaging doctor), Form B: Manual "Save" button (updating profile), Form C: Auto-saves on exit (appointment preferences), Form D: Asks "Save changes?" on exit (notification settings). Users never know if changes saved, accidentally lose work, anxiety about losing important health information, have to re-enter data multiple times
- No error prevention or recovery - Clicked wrong appointment date (Jan 15 instead of Jan 25), no confirmation dialog, appointment immediately scheduled, now have to call office to cancel/reschedule, can't undo in portal. Deleted important message from doctor, no "Are you sure?", permanent deletion, can't recover. Sent message to wrong doctor, no confirmation, can't unsend, embarrassing. Easy to make permanent mistakes, no safety net
- Memory-intensive appointment scheduling - 7-step process: Step 1 Select appointment type (15 options with medical terms), Step 2 Select doctor (8 doctors with specialties), Step 3 Select location (4 locations with addresses), Step 4 Select date (calendar, 30 days out), Step 5 Select time (12 time slots), Step 6 Select reason (dropdown + text field), Step 7 Review and confirm (all info shown, hard to remember what you selected 6 steps ago). No progress indicator, no ability to go back and change earlier steps without starting over, no saved state if interrupted, 10-minute timeout loses everything
- No progress indicators or breadcrumbs - Multi-step forms show "Complete your appointment request" at top, no indication of which step (Step 3 of 7?), no progress bar, no breadcrumbs showing path, users don't know how much longer, feel lost, abandon midway through
- Aggressive session timeout - 10 minutes of inactivity = session expires, lose all unsaved work, have to start over. Elderly users who read slowly or take breaks to understand medical terms get timed out frequently, users with ADHD who get distracted get logged out, anxious users who pause to think about health decisions lose progress. Support tickets: "Keeps logging me out", "Lost my appointment request twice"

Team context:
- User base: 60% users over 60 years old, 40% have limited health literacy, 25% non-native English speakers
- Feedback: High support call volume (30% of calls are "can't figure out how to use portal"), low adoption (only 35% of patients use portal despite promotion)
- Research: User testing with elderly users showed confusion, anxiety, and frustration
- Goals: Increase portal adoption to 60%, reduce support calls by 50%, improve task completion rates
- Timeline: 4 months to redesign for cognitive accessibility
- Constraints: Can't remove medical terms entirely (legal/regulatory), must maintain HIPAA compliance

Please provide:
1. Reducing cognitive load (chunking information, progressive disclosure, clear hierarchy, one thing at a time)
2. Plain language principles (simple words, short sentences, active voice, conversational, avoid jargon)
3. Consistent patterns (predictable UI, familiar metaphors, reusable mental models, don't reinvent)
4. Error prevention and recovery (confirmations, constraints, undo, auto-save, helpful errors)
5. Memory aids (breadcrumbs, recently used, save states, visible progress, defaults)
6. Attention support (no time limits, minimize distractions, clear focus, interrupt-friendly)
7. Reading and comprehension (scannable, whitespace, formatting, visual hierarchy, illustrations)
8. Testing with cognitive disabilities (user testing, comprehension testing, task completion)

Consider: Elderly users (60+). Limited health literacy. Non-native speakers. Health anxiety (need reassurance). Medical jargon required (but needs plain language explanations). Multi-step processes (need progress indicators). Easy errors (need confirmations). 10-min timeout too aggressive. HIPAA compliance required.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Chunk everything: Show 3-5 items at once, not 30 - reduces cognitive overload dramatically
✦ Common mistake: Using medical/technical jargon without plain language explanations - always translate for users
✦ Best with: Claude (excellent at simplifying language, reducing complexity), ChatGPo (good at plain language rewrites)
✦ Remix it: "Simplify this interface for elderly users - reduce cognitive load, plain language, clear guidance, error prevention"
✦ Pro move: Ask "Audit my interface for cognitive accessibility - identify overwhelming sections, complex language, inconsistent patterns"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Simplify this dashboard for elderly users - reduce information overload, chunk content, clear hierarchy, plain language"
- "Rewrite this medical jargon in plain language - 5th grade reading level, short sentences, explain technical terms"
- "Design error prevention for this form - confirmations for destructive actions, undo, constraints, auto-save"
- "Create progress indicator for multi-step process - step numbers, progress bar, breadcrumbs, save state"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![65_Example_Output.png](65_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #64: [Design Accessible Components](R-64%20Design%20Accessible%20Components%20d8c67ccc6bef83ed9c3201d848757c88.md)
→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)
→ Recipe #30: [Design Empty States](R-30%20Design%20Empty%20States%202d767ccc6bef80bf8926fcdc9c1d4e5a.md)

</aside>