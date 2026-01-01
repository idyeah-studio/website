# R-13: Fix Messy Settings Pages

# Recipe #13: Fix Messy Settings Pages

Category: Wireframing & IA  |  ⏱️ 25-30 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning a settings or preferences page that has become overwhelming - dozens of options scattered across one endless page, unclear categorization, or users can't find the setting they need. Support tickets frequently ask "where do I change [setting]?”

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Settings pages in many applications accumulate options over years without a coherent structure. What started as 10 settings becomes 50+ options dumped into a single scrolling page, organized alphabetically or by implementation order rather than user mental models. Related settings are separated, critical settings are buried, and users struggle to find basic preferences. Search doesn't exist or doesn't work well. You need to reorganize settings into a logical, discoverable structure.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a categorization framework with user-focused category names, grouping rationale, and hierarchy for related settings, navigation structure recommendations (sidebar, tabs, or nested pages) with ordering by usage frequency, settings prioritization distinguishing essential versus advanced with progressive disclosure, search functionality with keyword matching and jump-to-setting capability, layout patterns for two-column versus single-column with toggle and input placement, smart default values with recommended indicators, and mobile optimization with collapsible sections and touch-friendly controls. Optional annotated wireframe shows the organized settings structure.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Information Architect specializing in settings and preference organization.

I'm redesigning a settings page for a [Product Type] that currently has [Number] settings spread across [Current Structure].

[OPTIONAL: Attach screenshot of current settings page or full settings list]

Current settings inventory:
- Total number of settings: [e.g., 47 individual settings]
- Current organization: [e.g., Single page alphabetical list, or tabs with unclear labels]
- Common user tasks: [e.g., "Change password", "Update billing", "Turn off notifications"]
- Most-changed settings: [Based on analytics if available]
- Rarely-touched settings: [Settings that < 5% of users ever change]

User feedback problems:
- [Problem 1: e.g., "Can't find where to change my email"]
- [Problem 2: e.g., "Too overwhelming, don't know what half these settings do"]
- [Problem 3: e.g., "Accidentally changed wrong setting"]

Please provide:
1. Settings categorization strategy (grouping logic and category names)
2. Navigation pattern (tabs, sidebar, nested pages, search-first)
3. Settings prioritization (which to show first, which to hide)
4. Search and discoverability approach
5. Visual hierarchy and layout
6. Default value strategy
7. Mobile settings adaptation

Consider: [Constraints - e.g., Must accommodate power users who know exact settings, also serve new users browsing, mobile-first usage]
```

💡 What to customize:

- [Product Type] = SaaS app, Mobile app, Admin panel, E-commerce platform, CRM
- [Number] = Your actual settings count
- [Current Structure] = How settings are currently organized
- [Common user tasks] = Frequent settings changes from support tickets
- [Most-changed settings] = Analytics on frequently modified settings
- [Problems 1-3] = Real user complaints or usability issues
- Upload screenshot of current settings page or complete settings list
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Information Architect specializing in settings and preference organization.

I'm redesigning a settings page for a Team Communication Platform that currently has 53 settings spread across a single scrolling page with vague section headers.

[User would attach screenshot here]

Current settings inventory:
- Total number of settings: 53 individual settings (toggles, dropdowns, text fields)
- Current organization: Single endless page with 5 sections: "General", "Advanced", "Notifications", "Privacy", "Billing" - but settings don't logically fit their sections
- Common user tasks: Change notification preferences (daily), Update profile info (weekly), Manage team members (weekly), Change password (monthly), Update billing (quarterly)
- Most-changed settings: Notification preferences (45% of users change monthly), Theme (dark/light), Language, Do Not Disturb schedule
- Rarely-touched settings: API keys (< 5% users), Webhook URLs, Advanced markdown settings, Data retention policies

User feedback problems:
- "I spent 10 minutes looking for where to mute a specific channel - it was under 'Advanced'??"
- "There are three different notification settings and I don't understand the difference"
- "Can I just search for what I need? This page is too long"
- "I changed something by accident and don't know what - can't find it again to undo"

Current settings spread across sections:
- General: Profile name, Email, Time zone, Language, Theme, Default status, Date format
- Advanced: Channel notifications (why here?), API access, Markdown options, Keyboard shortcuts, Sidebar organization
- Notifications: Desktop notifications, Mobile push, Email digests, Do Not Disturb schedule, Sound effects
- Privacy: Who can see profile, Message read receipts, Online status visibility, Search visibility, Data download
- Billing: Plan details, Payment method, Billing email, Invoice history, Usage stats

Please provide:
1. Settings categorization strategy (grouping logic and category names)
2. Navigation pattern (tabs, sidebar, nested pages, search-first)
3. Settings prioritization (which to show first, which to hide)
4. Search and discoverability approach
5. Visual hierarchy and layout
6. Default value strategy
7. Mobile settings adaptation

Consider: Power users need quick access to API and webhook settings. Average users primarily change notifications and profile. Mobile users represent 60% of settings changes. Must support search. Some enterprise settings should only show for paid plans.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Use user language, not system language: Category should be "Notifications" not "Message Delivery Preferences"
✦ Common mistake: Organizing by technical implementation instead of user mental models
✦ Best with: Claude (excellent at categorization and information architecture), ChatGPT (good for user-friendly naming)
✦ Remix it: "Now design the 'quick settings' overlay for the 5 most-changed settings accessible from anywhere"
✦ Pro move: Ask "Create a settings audit template I can use to evaluate any settings page"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the onboarding flow that prompts users to configure the 3 most critical settings"
- "What confirmation pattern should we use when users change destructive settings (like delete account)?"
- "Create the 'recommended settings' preset system for different user types (individual, team, enterprise)"
- "How should we handle settings that conflict with each other or have dependencies?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![13_Example_Output.png](13_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #03: [Organize Your Main Navigation](R-03%20Organize%20Your%20Main%20Navigation%202d667ccc6bef8036a4f1cffbd03ee3dd.md)
→ Recipe #08: [Create Clear Path-Finding](R-08%20Create%20Clear%20Path%20Finding%202d667ccc6bef80f7a748e543ab0cfc40.md)
→ Recipe #38: [Build Smart Search Bars](R-38%20Build%20Smart%20Search%20Bars%202d767ccc6bef808691d8cc363e24cc2d.md)

</aside>