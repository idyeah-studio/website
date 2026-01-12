# R-30: Design Empty States

# Recipe #30: Design Empty States

Category: UI & Visuals  |  ⏱️ 20-25 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're redesigning screens that display "no results," "no data yet," or "nothing to show" - currently they show blank pages, generic error messages, or unhelpful "0 items" text. Users feel lost, confused, or don't know what action to take next.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications treat empty states as an afterthought - showing blank white screens, generic "No results found" text, or just displaying empty containers with no guidance. Users encounter these states frequently (first-time setup, cleared notifications, filtered results with no matches, deleted items) but get no help, context, or direction. Empty states are missed opportunities to guide users, explain features, provide value, or inject personality. You need to transform empty states from dead-ends into helpful, engaging moments that move users forward.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide empty state categorization across six types (first use, user cleared, no results, error, success, temporary) with specific content strategy and tone matching user emotion, visual approaches ranging from illustrations and icons to animations and empty container previews, clear action recommendations with primary CTAs and secondary options, contextual variations that adapt messaging for new versus returning users and success versus error scenarios, celebration states for achievements like inbox zero with positive reinforcement, educational opportunities including feature explanations and templates, and complete design specifications covering layout, sizing, spacing, and button placement. Optionally includes wireframes showing different empty state variations.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Content and Visual Designer specializing in empty states and zero-data experiences.

I'm designing empty states for a [Product Type] to help users when there's no content to display.

[OPTIONAL: Attach screenshots showing current empty states or blank screens]

Empty state contexts:
- Common empty states: [e.g., No tasks yet, No search results, Inbox zero, No notifications, First-time setup]
- User journey stage: [e.g., New user onboarding, Returning user, Filtered view, Completed action]
- Frequency: [e.g., Happens once (first login), Happens rarely, Happens daily]
- User emotion: [e.g., Confused, Accomplished, Frustrated, Neutral]

Current empty state problems:
- [Problem 1: e.g., Shows blank white screen - no explanation or guidance]
- [Problem 2: e.g., Generic "No results" text - doesn't explain why or what to do]
- [Problem 3: e.g., No call-to-action - users don't know next steps]
- [Problem 4: e.g., Same empty state for different scenarios - not contextual]
- [Problem 5: e.g., Missed opportunity to explain feature value]

User context: [What users expect, what they're trying to accomplish, their knowledge level]

Please provide:
1. Empty state categorization (first use, user cleared, no results, error, success)
2. Content strategy (messaging, tone, helpful guidance)
3. Visual approach (illustration, icon, animation, imagery)
4. Action recommendations (primary CTA, secondary actions)
5. Contextual variations (different messages for different scenarios)
6. Success/celebration states (inbox zero, all done)
7. Educational opportunities (explain features, show examples)
8. Design specifications (layout, imagery, button placement)

Consider: [Constraints - e.g., Must work on mobile, need to maintain professional tone, can't use complex illustrations, loading vs. truly empty]
```

💡 What to customize:

- [Product Type] = Task manager, E-commerce, Email client, Dashboard, Social app
- [Empty state contexts] = Specific scenarios where users see empty states
- [User journey stage] = When this happens in user experience
- [Frequency] = How often users encounter this
- [Problems 1-5] = Current empty state issues
- Upload screenshots showing current blank/empty screens
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Content and Visual Designer specializing in empty states and zero-data experiences.

I'm designing empty states for a Project Management App to help users when there's no content to display.

[User would attach screenshots here]

Empty state contexts:
- Common empty states:
  - No projects yet (new user, first login)
  - No tasks in project (project created but empty)
  - No search results (searched but nothing matches)
  - All tasks completed (filtered to show incomplete, but all done)
  - No notifications (notification center empty)
  - No team members (solo user or haven't invited anyone)
  - No activity/updates (activity feed empty for 7 days)
- User journey stage:
  - New user: Just signed up, exploring empty workspace
  - Active user: Completed all tasks (success state)
  - Searching user: Looking for specific item that doesn't exist
  - Filtered view: Applied filters that return zero results
- Frequency:
  - First-time (new user setup): Happens once
  - Task completion: Happens weekly for active users
  - Search no results: Happens occasionally
  - No notifications: Happens daily for many users
- User emotion:
  - New user: Confused, uncertain what to do next
  - Completed tasks: Accomplished, satisfied
  - No search results: Frustrated, stuck
  - No notifications: Neutral or relieved

Current empty state problems:
- Shows completely blank white screen with just page title "Projects" - no explanation, no guidance, new users don't know what to do
- Generic "No results found" text when search returns nothing - doesn't suggest alternatives or explain why
- No call-to-action buttons in empty states - users must find "New Project" button in header (buried)
- Same empty state for "new user with no projects" and "user who deleted all projects" - not contextual
- Inbox zero / all tasks done shows same sad "No tasks" message as new user - missed opportunity to celebrate
- Empty notification center just says "0 notifications" - could explain what notifications are for new users
- No helpful examples, templates, or starting points - users face blank canvas paralysis

User context: Mix of new users (need guidance and examples) and experienced users (know what to do). New users often abandon at empty state - unclear what value the app provides. Experienced users hit task completion regularly and deserve celebration. Search is used heavily - no results is common and frustrating.

Please provide:
1. Empty state categorization (first use, user cleared, no results, error, success)
2. Content strategy (messaging, tone, helpful guidance)
3. Visual approach (illustration, icon, animation, imagery)
4. Action recommendations (primary CTA, secondary actions)
5. Contextual variations (different messages for different scenarios)
6. Success/celebration states (inbox zero, all done)
7. Educational opportunities (explain features, show examples)
8. Design specifications (layout, imagery, button placement)

Consider: Must work on mobile (50% of users). Professional tone but friendly. Budget doesn't allow custom illustrations for every empty state - need scalable approach. Some empty states are success (all done!) vs. failure (nothing found). First-time users need more guidance than returning users.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Context is everything: "No projects yet" (welcoming) is very different from "No projects found" (apologetic)
✦ Common mistake: Treating all empty states the same - new user needs different message than power user
✦ Best with: Claude (excellent at contextual messaging), ChatGPT (good for friendly copy)
✦ Remix it: "Design the celebration states - how to make task completion feel rewarding"
✦ Pro move: Ask "Create the empty state content matrix - all scenarios with specific copy and CTAs"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

Try these next:

- "Write the empty state copy variations - 10 different scenarios with headlines, body, and CTA text"
- "Design the first-time empty state tour - guide users through creating their first item"
- "How should empty states adapt for mobile vs. desktop (different space, different context)?"
- "Create the illustration style guide - what visual approach for different empty state moods?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![30_Example_Output.png](30_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #07: [Find Hidden User Dead-Ends](R-07%20Find%20Hidden%20User%20Dead-Ends%202d667ccc6bef806b890bc2048285b3fa.md)
→ Recipe #12: [Build High-Converting Pages](R-12%20Build%20High-Converting%20Pages%202d667ccc6bef804c85c0d115079037e7.md)
→ Recipe #39: [Iterate Your Hero Sections](R-39%20Iterate%20Your%20Hero%20Sections%202d767ccc6bef80a294e9c663923f0a75.md)

</aside>