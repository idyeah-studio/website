# R-18: Build Notification Hubs

# Recipe #18: Build Notification Hubs

Category: Wireframing & IA  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning a notification system where users receive alerts, updates, messages, or system notifications. The current system is overwhelming (too many notifications), unclear (vague messages), or users miss critical alerts buried in noise.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Existing applications often treat all notifications equally - critical security alerts appear alongside minor updates, important messages get buried in spam, and users have no control over notification preferences. Users either ignore all notifications (notification fatigue) or get interrupted constantly. There's no clear visual hierarchy, no grouping by type or importance, and no easy way to mark all as read or manage preferences. You need to design a notification hub that surfaces what's important while giving users control.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a categorization strategy with smart grouping and category tabs (grouping related notifications by project, type, or time with separate inboxes for critical alerts), visual hierarchy using priority indicators and read/unread states (color coding, pinned critical alerts, bold text, and contextual timestamps), content design patterns for notification previews with actor-action-object format and expandable details, action patterns including primary actions, quick actions (mark as read, dismiss, snooze), bulk operations, and swipe gestures for mobile, filtering and search capabilities (by type, project, date range, with saved and smart filters), read/unread management with auto-marking and bulk controls, granular notification preferences (per-type and per-project controls, delivery channel settings, quiet hours, digest options), and mobile optimization (bottom sheet panels, touch-friendly buttons, simplified categories, pull-to-refresh). Optionally includes annotated wireframes showing the complete notification hub interface.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Designer specializing in notification systems and information architecture.

I'm designing a notification hub for a [Product Type] where users receive [Types of notifications].

[OPTIONAL: Attach screenshot of current notification panel or notification examples]

Notification system requirements:
- Notification types: [e.g., System alerts, Messages, Activity updates, Reminders, Marketing]
- Notification volume: [e.g., Users receive 5-50 notifications per day]
- Notification priority: [e.g., Critical, Important, Informational, Low priority]
- User actions: [e.g., View details, Dismiss, Mark as read, Respond, Archive]
- Delivery channels: [e.g., In-app, Email, Push, SMS]

Current problems:
- [Problem 1: e.g., All notifications look the same - can't distinguish important from trivial]
- [Problem 2: e.g., No grouping - 50 individual notifications instead of "5 new comments on your post"]
- [Problem 3: e.g., No way to filter or search notifications]
- [Problem 4: e.g., Critical alerts get buried in low-priority noise]
- [Problem 5: e.g., No bulk actions - must mark 50 notifications as read individually]

User context: [How users consume notifications, when, and what they need to do with them]

Please provide:
1. Notification categorization and grouping strategy
2. Visual hierarchy (how to emphasize priority/urgency)
3. Notification content design (what info to show in list vs. detail view)
4. Action patterns (primary actions, quick actions, bulk actions)
5. Filtering and search functionality
6. Read/unread state management
7. Notification preferences and controls
8. Mobile notification hub design

Consider: [Constraints - e.g., Some notifications legally required, real-time updates needed, offline support, cross-device sync]
```

💡 What to customize:

- [Product Type] = Team collaboration tool, E-commerce platform, Social network, Project management app, CRM
- [Types of notifications] = Your specific notification categories
- [Notification volume] = How many notifications users typically receive
- [Priority levels] = Your notification urgency system
- [User actions] = What users need to do with notifications
- [Problems 1-5] = Current notification pain points
- Upload screenshot of current notification panel or examples
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Designer specializing in notification systems and information architecture.

I'm designing a notification hub for a Project Management Platform where users receive activity updates, mentions, task assignments, comments, and system alerts.

[User would attach screenshot here]

Notification system requirements:
- Notification types:
  - Task assignments (assigned to you, mentioned in task)
  - Comments & mentions (@mentions in comments)
  - Project updates (status changes, deadlines)
  - Team activity (new members, role changes)
  - System alerts (storage limits, billing issues, security)
  - Reminders (upcoming deadlines, overdue tasks)
- Notification volume: Power users receive 30-80 notifications per day, average users 5-15 per day
- Notification priority:
  - Critical: Security alerts, billing failures (require immediate action)
  - High: Task assignments, @mentions, approaching deadlines
  - Normal: Comments, project updates, team activity
  - Low: General updates, tips, feature announcements
- User actions: View task/project, Reply to comment, Dismiss, Mark as read, Snooze, Turn off notifications for this item
- Delivery channels: In-app bell icon, Email digest (daily/weekly), Mobile push, Browser push

Current problems:
- All 80 notifications displayed as flat list - no grouping (shows "Sarah commented on Design Review" 5 times instead of "Sarah left 5 comments on Design Review")
- No visual distinction between critical security alert and "John completed a task" update
- Users miss urgent @mentions buried under 30 low-priority notifications
- No way to filter by notification type (show only @mentions or only task assignments)
- "Mark all as read" button exists but no selective bulk actions (can't mark all task updates as read while keeping mentions unread)
- Timestamps are vague ("2 hours ago") - users can't tell if notification is from today or last week
- No notification preferences - users receive everything or nothing (all-or-nothing problem)
- Mobile notification panel shows desktop layout - tiny text, cramped spacing

User context: Team members check notifications 5-10 times per day. They need to quickly scan for urgent items (@mentions, assignments) and ignore noise. Power users want granular control (mute specific projects). Mobile users primarily triage notifications (mark as read, quick view) rather than taking full action.

Please provide:
1. Notification categorization and grouping strategy
2. Visual hierarchy (how to emphasize priority/urgency)
3. Notification content design (what info to show in list vs. detail view)
4. Action patterns (primary actions, quick actions, bulk actions)
5. Filtering and search functionality
6. Read/unread state management
7. Notification preferences and controls
8. Mobile notification hub design

Consider: Real-time updates needed (notifications arrive while panel is open). Must sync read state across devices. Critical alerts should persist even if user dismisses. Need "snooze" for reminders. Users often work in multiple projects - need project-based filtering.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Group aggressively: "5 comments on Design Review" is better than 5 separate notification items
✦ Common mistake: Making all notifications equal - critical alerts should visually dominate
✦ Best with: Claude (excellent at categorization and priority logic), ChatGPT (good for notification patterns)
✦ Remix it: "Design the smart notification: AI learns what user cares about and surfaces only relevant alerts"
✦ Pro move: Ask "Create the notification preference matrix - which types, which channels, which frequency?"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the empty state for notification hub - what to show when there are no notifications?"
- "How should real-time notifications appear? Toast, banner, sound, badge update?"
- "Create the notification digest email - how to summarize 50 notifications into useful email?"
- "What happens when user has 500+ unread notifications? Design the overflow/catch-up experience"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![18_Example_Output.png](18_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #02: [Fix Cluttered Data Views](R-02%20Fix%20Cluttered%20Data%20Views%202d667ccc6bef80cb97c4fcafda955f11.md)
→ Recipe #05: [Rank Dashboard Information](R-05%20Rank%20Dashboard%20Information%202d667ccc6bef80d2ac13f0eb7bcf0b17.md)
→ Recipe #16: [Build Bulk Action Tools](R-16%20Build%20Bulk%20Action%20Tools%202d667ccc6bef80b8bd2bc0615a25c87c.md)

</aside>