# R-42: Improve Onboarding Flows

# Recipe #42: Improve Onboarding Flows

Category: UI & Visuals  |  ⏱️ 35-40 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're redesigning onboarding experiences that fail to convert new users - users sign up but don't complete setup, abandon during first session, or never reach their "aha moment." Current onboarding either doesn't exist, overwhelms with too many steps, or fails to show value quickly.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have poor onboarding - forcing users through 10-step tutorials before they can use the product, showing features without context ("Here's where you upload files!"), no onboarding at all (users land in empty interface confused), auto-playing videos users skip, or blocking the entire interface with modals. Users sign up excited but leave frustrated because they don't understand how to get value. New users need different guidance than power users, but everyone sees the same experience. You need onboarding that gets users to their first success fast, shows value in context, and doesn't overwhelm or block.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide hybrid onboarding strategy combining template-first approaches, empty state prompts, and contextual tooltips without forced tours, step sequencing using progressive disclosure to reach first success within 5 minutes (welcome → template selection → guided editing → export), contextual guidance patterns including just-in-time tooltips and hotspots that don't block the interface, optional progress checklists users can explore at their own pace, personalization approaches adapting flows based on user segments (designers vs. non-designers) and behavior, skip and exit patterns allowing users to explore freely, and mobile-optimized simplified flows with swipe-based introductions. Optionally includes onboarding flow diagrams and screen mockups.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Onboarding Experience Designer specializing in first-time user flows, activation, and feature adoption.

I'm designing onboarding for a [Product Type] to help new users reach their first [Success Moment] quickly.

[OPTIONAL: Attach screenshots of current onboarding or competitor examples]

Onboarding requirements:
- Product type: [e.g., Project management, Design tool, Analytics platform, E-commerce, Social app]
- User segments: [e.g., Technical vs. non-technical, Individual vs. team, Free vs. paid]
- Success moment: [e.g., Create first project, Complete first design, Get first insight, Make first sale]
- Time to value: [e.g., Under 2 minutes, Same session, Within 24 hours]
- Product complexity: [e.g., Simple (5 features), Moderate (15 features), Complex (50+ features)]

Current onboarding problems:
- [Problem 1: e.g., 10-step tutorial before users can try anything - 80% abandon]
- [Problem 2: e.g., No onboarding - users land in empty interface, don't know where to start]
- [Problem 3: e.g., Feature tour shows all 30 features - overwhelming, irrelevant to new users]
- [Problem 4: e.g., Video auto-plays on signup - users skip without watching]
- [Problem 5: e.g., Same onboarding for all users - doesn't adapt to role or goal]

User context: [Why users signed up, their immediate goals, technical expertise, patience level]

Please provide:
1. Onboarding strategy (tours, tooltips, checklists, empty states, hybrid)
2. Step sequencing (what to show when, progressive disclosure)
3. First success optimization (fastest path to "aha moment")
4. Contextual guidance patterns (tooltips, hotspots, inline hints)
5. Progress indicators (steps remaining, completion percentage)
6. Skip and exit patterns (let users explore freely)
7. Personalization approach (segment-specific onboarding)
8. Mobile onboarding adaptations

Consider: [Constraints - e.g., Must work for non-technical users, can't block interface, different user roles, free vs. paid features, mobile-first usage]
```

💡 What to customize:

- [Product Type] = Your product category
- [Success Moment] = First meaningful achievement
- [Time to value] = How quickly users should succeed
- [User segments] = Different user types
- [Product complexity] = Number of features
- [Problems 1-5] = Current onboarding issues
- Upload current onboarding flow or examples
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Onboarding Experience Designer specializing in first-time user flows, activation, and feature adoption.

I'm designing onboarding for a Design Collaboration Platform (like Figma/Canva) to help new users create their first design within 5 minutes.

[User would attach onboarding screenshots here]

Onboarding requirements:
- Product type: Design tool for creating graphics, presentations, social media posts
- User segments:
  - Non-designers (70%): Small business owners, marketers, social media managers
  - Professional designers (20%): Graphic designers, brand designers
  - Teams (10%): Marketing teams, agencies
- Success moment: 
  - Create and export first design (primary goal)
  - Share design with team member (secondary for team users)
- Time to value: Under 5 minutes from signup to first export
- Product complexity: 
  - 50+ features total
  - Core workflow: Templates, Elements, Text, Images, Export
  - Advanced: Layers, Collaboration, Brand kits, Animation

Current onboarding problems:
- Forced 8-step product tour on first login - walks through every menu, toolbar, panel - takes 5 minutes, 75% of users skip or abandon
- Tour explains features without context - "This is the layers panel" but user has no layers yet, irrelevant
- No onboarding for users who skip tour - land in blank canvas with all UI visible, completely overwhelmed
- Template library shown last in tour - but most users want to start with template (backwards sequence)
- Same onboarding for designers and non-designers - designers annoyed by basic explanations, non-designers confused by advanced features
- No progress indicator - users don't know tour will take 8 steps, give up after step 3
- Mobile onboarding identical to desktop - 8-step tour on phone is unusable
- No "create from template" quick win - users who want quick result must learn entire tool first

User context: 
- Non-designers signed up to create Instagram post, presentation, or flyer (specific need)
- Expect to create something in first session (immediate goal, not learn tool)
- Limited design experience - need guidance but hate lengthy tutorials
- Mobile users (30%) creating quick social posts on phone
- Impatient - if not successful in 5 minutes, will try competitor
- Some invited by team members - already have context, don't need full onboarding

Current metrics:
- 40% complete onboarding tour
- 25% create first design in first session (low!)
- 15% return for second session
- Goal: 60%+ create design in first session

Please provide:
1. Onboarding strategy (tours, tooltips, checklists, empty states, hybrid)
2. Step sequencing (what to show when, progressive disclosure)
3. First success optimization (fastest path to "aha moment")
4. Contextual guidance patterns (tooltips, hotspots, inline hints)
5. Progress indicators (steps remaining, completion percentage)
6. Skip and exit patterns (let users explore freely)
7. Personalization approach (segment-specific onboarding)
8. Mobile onboarding adaptations

Consider: Must get users to first design export in under 5 minutes. Template-first approach for non-designers. Can't block canvas (users want to try). Progressive disclosure - show features when needed, not all at once. Personalize for designers vs. non-designers. Mobile needs simpler flow. Team invites need different onboarding than cold signups.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ First success in under 5 minutes: Get users to "aha moment" fast - template-first approach works for most products
✦ Common mistake: Forced tours showing all features - show what's needed now, reveal more later
✦ Best with: Claude (excellent at sequencing and progressive disclosure), ChatGPT (good for personalization strategies)
✦ Remix it: "Design the re-onboarding flow - bring back inactive users with new feature discovery"
✦ Pro move: Ask "Create onboarding metrics dashboard - track completion rates, time to first success, feature adoption"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the empty state onboarding - helpful prompts when users land in blank interface"
- "Create the onboarding checklist - optional tasks that teach features through doing"
- "How should tooltips sequence - when to show next hint without overwhelming user?"
- "Design the mobile onboarding - simplified 3-screen intro for small screens"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![42_Example_Output.png](42_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**
→ Recipe #39: [Iterate Your Hero Sections](R-39%20Iterate%20Your%20Hero%20Sections%202d767ccc6bef80a294e9c663923f0a75.md)
→ Recipe #40: [Design Better Modals](R-40%20Design%20Better%20Modals%202d767ccc6bef800d9012d412a0122f53.md)

</aside>