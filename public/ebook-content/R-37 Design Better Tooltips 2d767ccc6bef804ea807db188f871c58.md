# R-37: Design Better Tooltips

# Recipe #37: Design Better Tooltips

Category: UI & Visuals  |  ⏱️ 20-25 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're redesigning interfaces where users need contextual help - cryptic icons, technical terminology, truncated text, or features that need explanation. Current tooltips are missing, appear too slowly/quickly, or provide unhelpful information. Users click help icons repeatedly or contact support for basic questions.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications either have no tooltips at all (leaving users confused) or poorly designed tooltips that appear instantly on hover (annoying), never disappear (blocking content), contain only repeated label text (unhelpful), or fail to work on mobile (no hover state). Tooltips appear too far from their target, use tiny unreadable text, or show technical jargon instead of plain language. Users hover over icons wondering what they do, or truncated text with no way to read the full content. You need tooltip patterns that are helpful, accessible, properly timed, and work across devices.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide guidance on when to use tooltips for icon buttons, truncated text, and shortcuts versus alternatives like inline help or modals, content strategy transforming unhelpful label repetition into contextual explanations with plain language, trigger patterns with proper timing (500-700ms hover delay to prevent spam, keyboard focus, mobile long-press or info icons), visual design specifications (dark background with white text, 200-300px max-width, smart positioning with arrows), mobile alternatives including long-press and bottom sheets, and complete accessibility requirements covering ARIA attributes, keyboard navigation, screen reader announcements, and 4.5:1 color contrast. Optionally includes tooltip component specs and positioning diagrams.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Designer specializing in contextual help, tooltips, and information architecture.

I'm designing tooltip patterns for a [Product Type] to provide contextual help without cluttering the interface.

[OPTIONAL: Attach screenshots showing current tooltips or areas needing tooltips]

Tooltip requirements:
- Tooltip contexts: [e.g., Icon buttons, Truncated text, Form field help, Feature explanations, Keyboard shortcuts]
- User expertise: [e.g., First-time users, Power users, Mixed audience]
- Device usage: [e.g., 60% desktop, 40% mobile/tablet]
- Information complexity: [e.g., Short labels, Detailed explanations, Multi-line instructions]

Current tooltip problems:
- [Problem 1: e.g., No tooltips on icon-only buttons - users guess what icons do]
- [Problem 2: e.g., Tooltips appear instantly on hover - annoying when moving mouse]
- [Problem 3: e.g., Tooltip just repeats label: Icon says "Settings", tooltip says "Settings"]
- [Problem 4: e.g., Tooltips don't work on mobile - no hover state, users tap blindly]
- [Problem 5: e.g., Long tooltips (4-5 lines) block important content underneath]

User context: [User goals, information needs, typical confusion points]

Please provide:
1. When to use tooltips vs. alternatives (inline help, modals, onboarding)
2. Tooltip content strategy (what to say, how much detail)
3. Trigger patterns (hover, click, focus, tap)
4. Timing and delays (appear/disappear timing)
5. Visual design (size, positioning, styling)
6. Mobile tooltip alternatives
7. Accessibility requirements (keyboard, screen readers)
8. Tooltip positioning logic (above, below, smart positioning)

Consider: [Constraints - e.g., Must work without hover on mobile, screen reader compatibility, RTL languages, small viewport constraints]
```

💡 What to customize:

- [Product Type] = Design tool, Dashboard, Admin panel, Complex software, Mobile app
- [Tooltip contexts] = Where tooltips are needed
- [User expertise] = Audience knowledge level
- [Device usage] = Desktop vs. mobile split
- [Problems 1-5] = Current tooltip issues
- Upload screenshots showing areas needing contextual help
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Designer specializing in contextual help, tooltips, and information architecture.

I'm designing tooltip patterns for a Project Management SaaS Dashboard to help users understand features without cluttering the interface.

[User would attach tooltip screenshots here]

Tooltip requirements:
- Tooltip contexts:
  - Icon-only toolbar buttons (15+ actions: archive, duplicate, move, share, etc.)
  - Truncated task names in compact list view (can't see full 80-character titles)
  - Status badges (need to explain what "Blocked" vs. "In Review" means)
  - Form field labels with additional context (e.g., "Due Date" field needs timezone explanation)
  - Keyboard shortcuts (show Cmd+K for search, Cmd+N for new task)
  - Feature badges ("Pro" feature indicators need explanation of what you get)
  - Data visualization (chart data points need context)
  - Settings toggles (technical settings need plain language explanations)
- User expertise: 
  - New users (30%): Need explanations for everything
  - Regular users (50%): Know basics, need reminders for advanced features
  - Power users (20%): Want keyboard shortcuts, technical details
- Device usage: 65% desktop (hover works), 35% tablet/mobile (no hover)
- Information complexity:
  - Simple: Icon labels (1-2 words)
  - Moderate: Feature explanations (1 sentence)
  - Complex: Form field help (2-3 sentences + example)

Current tooltip problems:
- Icon-only toolbar has 15 buttons with no tooltips - users click randomly trying to find "duplicate task" icon
- Tooltips appear instantly on hover (0ms delay) - when moving mouse across screen, 10+ tooltips flash rapidly, extremely annoying
- Tooltip content is useless: Archive button icon tooltip says "Archive" (just repeats the icon), doesn't explain what archiving does or where items go
- No mobile alternative for tooltips - tablet users (35% of traffic) tap icons blindly because hover doesn't work on touch devices
- Long explanatory tooltips (4-5 lines of text) appear on small "Pro" badges and cover the content underneath - can't see the feature being explained
- Tooltips positioned directly below cursor - blocks the element being hovered, user moves mouse and tooltip disappears
- Truncated task names "Implement user authentic..." have no way to see full text (no tooltip on hover)
- Settings toggles like "Enable SSO" have no explanation - users don't know what SSO means or why to enable it

User context: Users work in the app 3-6 hours daily. New users onboard themselves (no training) and need to discover features. Icon meanings not obvious - "Share" uses generic icon that looks like export. Keyboard shortcuts significantly improve productivity but hidden. Mobile/tablet users manage tasks on the go - need quick access to info without hover. Screen reader users need tooltips announced properly. International users (25%) need tooltips to work with RTL languages.

Please provide:
1. When to use tooltips vs. alternatives (inline help, modals, onboarding)
2. Tooltip content strategy (what to say, how much detail)
3. Trigger patterns (hover, click, focus, tap)
4. Timing and delays (appear/disappear timing)
5. Visual design (size, positioning, styling)
6. Mobile tooltip alternatives
7. Accessibility requirements (keyboard, screen readers)
8. Tooltip positioning logic (above, below, smart positioning)

Consider: Hover delay prevents tooltip spam. Mobile needs tap or long-press alternative. Keyboard users (Tab + focus) must trigger tooltips. Screen readers need ARIA labels. Long tooltips need max-width and word wrap. Positioning should avoid blocking target element. RTL support for Arabic/Hebrew. Tooltips shouldn't appear on disabled elements.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Delay prevents spam: 500ms hover delay stops tooltips from flashing when moving mouse - critical for good UX
✦ Common mistake: Tooltip just repeats the label - add context, don't echo what's already visible
✦ Best with: Claude (excellent at helpful microcopy), ChatGPT (good for timing and positioning logic)
✦ Remix it: "Design the info icon pattern - when to use ⓘ icons vs. automatic tooltips"
✦ Pro move: Ask "Create the tooltip content guidelines - examples of good vs. bad tooltip copy for 20 scenarios"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

Try these next:

- "Write 20 before/after tooltip examples - transform unhelpful labels into useful contextual help"
- "Design the mobile long-press tooltip pattern - visual feedback and timing for touch devices"
- "How should tooltips work for truncated text in tables - show full content on hover"
- "Create the keyboard shortcut tooltip system - show shortcuts consistently across all actions"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![37_Example_Output.png](37_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #25: [Pick Your Icon Styles](R-25%20Pick%20Your%20Icon%20Styles%202d767ccc6bef809cbd6bc7ee914bebdf.md)
→ Recipe #30: [Design Empty States](R-30%20Design%20Empty%20States%202d767ccc6bef80bf8926fcdc9c1d4e5a.md)

</aside>