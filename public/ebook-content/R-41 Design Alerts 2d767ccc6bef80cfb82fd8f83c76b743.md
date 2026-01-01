# R-41: Design Alerts

# Recipe #41: Design Alerts

Category: UI & Visuals  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're designing alerts patterns that keep users informed without overwhelming them - toast messages, alerts, banners, badges, or notification centers. Current alerts are easy to miss, interrupt workflows, or users ignore them due to notification fatigue.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have poorly designed alerts systems - toasts that disappear too quickly, alerts that block the entire screen, no visual hierarchy between critical and minor alerts, notification badges showing "99+" with no way to clear, alerts appearing in random locations, and no notification history. Users miss important updates, get annoyed by interruptions, or suffer notification fatigue from too many trivial alerts. Critical errors look identical to success messages. You need notification patterns that are noticeable but not disruptive, provide appropriate urgency, and help users stay informed without overwhelming them.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide notification type recommendations (toasts for confirmations with 4-6s auto-dismiss, banners for persistent alerts, modals for critical errors, badges for unread counts), visual hierarchy using color coding and icons (red critical, amber warning, green success, blue info) that work for colorblind users, positioning and stacking strategy limiting to 3 visible toasts with proper timing rules, notification center design with filtering, grouping, and 30-day history, mobile-optimized patterns with push notifications and swipe-to-dismiss, complete accessibility including ARIA live regions and screen reader support, and user preference controls for Do Not Disturb mode and notification types. Optionally includes notification component specifications.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Notification UX Designer specializing in alerts, toasts, banners, and notification patterns.

I'm designing notification systems for a [Product Type] to keep users informed without overwhelming them.

[OPTIONAL: Attach screenshots showing current notification implementations]

Notification requirements:
- Notification types: [e.g., Success confirmations, Error alerts, System updates, User mentions, Task reminders]
- Urgency levels: [e.g., Critical errors, Important updates, Informational, Low priority]
- Frequency: [e.g., Multiple per minute, Few per hour, Rare]
- User context: [e.g., Focused work, Monitoring dashboard, Casual browsing]
- Device usage: [e.g., 60% desktop, 40% mobile]

Current notification problems:
- [Problem 1: e.g., Success toast disappears in 2 seconds - users miss confirmation]
- [Problem 2: e.g., All notifications look identical - can't distinguish critical from minor]
- [Problem 3: e.g., Notifications block work area - must dismiss to continue]
- [Problem 4: e.g., Badge shows "99+" - no way to mark all as read]
- [Problem 5: e.g., No notification history - if user misses toast, info is lost]

User context: [When notifications appear, what users are doing, tolerance for interruption]

Please provide:
1. Notification type recommendations (toast, banner, modal, badge)
2. Visual hierarchy (critical vs. info vs. success)
3. Positioning and stacking strategy
4. Timing and auto-dismiss rules
5. Notification center/history design
6. Badge and counter patterns
7. Mobile notification patterns
8. Accessibility and preferences

Consider: [Constraints - e.g., Must work for colorblind users, screen reader support, user notification preferences, undo actions, persistent vs. dismissible]
```

💡 What to customize:

- [Product Type] = Messaging app, Project management, E-commerce, Banking, Social platform
- [Notification types] = What you need to notify users about
- [Urgency levels] = Range from critical to informational
- [Frequency] = How often notifications appear
- [Problems 1-5] = Current notification issues
- Upload screenshots showing current notification designs
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Notification UX Designer specializing in alerts, toasts, banners, and notification patterns.

I'm designing notification systems for a Team Collaboration Platform to keep users informed of activity, mentions, and system events without overwhelming them.

[User would attach notification screenshots here]

Notification requirements:
- Notification types:
  - User mentions (@username in comments)
  - Task assignments (someone assigned you a task)
  - Task updates (status changed, comment added)
  - System alerts (storage limit, payment issue, service outage)
  - Success confirmations (file uploaded, invite sent)
  - Error messages (upload failed, permission denied)
  - Activity updates (project completed, deadline approaching)
- Urgency levels:
  - Critical: System outages, payment failures, security alerts
  - High: Direct mentions, task assignments, approaching deadlines
  - Medium: Task updates, comments on your items
  - Low: General activity, project updates, tips
- Frequency:
  - Active users: 20-50 notifications per day
  - Power users: 100+ per day
  - Mentions: 5-10 per day
  - System alerts: Rare (1-2 per month)
- User context:
  - Deep work mode (editing documents, coding)
  - Monitoring mode (watching for updates)
  - Casual browsing (checking in periodically)
  - Mobile users: Quick checks throughout day
- Device usage: 60% desktop, 40% mobile

Current notification problems:
- Success toast "File uploaded" disappears in 2 seconds - users uploading multiple files miss confirmation that all succeeded
- All notifications look identical - critical "Payment failed" uses same blue toast as "Task completed" - no visual urgency hierarchy
- Error notifications appear as modal blocking entire screen - must click "OK" to dismiss, interrupts workflow
- Notification badge shows "99+" with no way to bulk mark as read - overwhelming, users ignore badge
- Toasts stack in bottom-right corner overlapping each other - 5 notifications arrive simultaneously, can only see top one
- No notification history - if user misses toast message, no way to see what it said
- Mentions and assignments mixed with low-priority activity - important notifications buried
- Mobile notifications same as desktop - take up too much screen space

User context: Users in deep work hate interruptions but need critical alerts. Power users get 100+ notifications daily - need filtering. Mobile users glance at app between meetings - need quick scan. Mentions are time-sensitive (someone waiting for response). Payment failures critical but rare. File upload confirmations needed for confidence but not urgent.

Please provide:
1. Notification type recommendations (toast, banner, modal, badge)
2. Visual hierarchy (critical vs. info vs. success)
3. Positioning and stacking strategy
4. Timing and auto-dismiss rules
5. Notification center/history design
6. Badge and counter patterns
7. Mobile notification patterns
8. Accessibility and preferences

Consider: Critical alerts need immediate attention. Success messages can auto-dismiss. Users should control notification volume. Colorblind users need icons not just colors. Screen readers must announce notifications. "Do not disturb" mode for focused work. Undo for accidentally dismissed notifications. Group similar notifications ("3 new comments").
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Color + icon, not color alone: Critical red background + alert icon (⚠️) works for colorblind users
✦ Common mistake: All notifications auto-dismiss - errors should persist until acknowledged
✦ Best with: Claude (excellent at notification hierarchy), ChatGPT (good for timing strategies)
✦ Remix it: "Design the notification grouping system - combine similar notifications to reduce noise"
✦ Pro move: Ask "Create notification preferences UI - let users control what they see and when"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the notification grouping system - how to combine 10 similar notifications into one"
- "Create the Do Not Disturb mode - how users temporarily mute notifications during focused work"
- "How should undo work for dismissed notifications - recover accidentally closed important alerts?"
- "Design the notification digest - daily/weekly email summary of activity for less active users"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![41_Example_Output.png](41_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #27: [Design Smooth Interactions](R-27%20Design%20Smooth%20Interactions%202d767ccc6bef80979ab0f6fc70dc611e.md)
→ Recipe #37: [Design Better Tooltips](R-37%20Design%20Better%20Tooltips%202d767ccc6bef804ea807db188f871c58.md)

</aside>