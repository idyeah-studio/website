# R-27: Design Smooth Interactions

# Recipe #27: Design Smooth Interactions

Category: UI & Visuals  |  ⏱️ 25-35 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning an interface that feels janky, abrupt, or unresponsive - elements appear/disappear instantly, state changes are jarring, hover effects are missing, or users get no feedback when they interact. The interface lacks polish and feels robotic.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications have zero or inconsistent micro-interactions - buttons change instantly without transitions, modals pop in abruptly, loading states appear without warning, and hover effects are either missing or over-animated. Elements teleport instead of transitioning smoothly. Users click buttons and wonder if anything happened. Animations are either too slow (annoying) or too fast (jarring). The interface feels unpolished and cheap despite good visual design. You need smooth, purposeful interactions that provide feedback, guide attention, and create a premium feel.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

You'll get motion principles (easing curves, duration scales), interaction patterns (hover, click, drag animations), transition recommendations (page changes, component states), microinteraction design (button feedback, loading states), performance guidelines (frame rates, reduced motion support), and implementation specs. Output includes motion style guide with timing values and examples.

</aside>

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Interaction Design Specialist focusing on micro-interactions, transitions, and animation.

I'm designing interaction patterns for a [Product Type] to make the interface feel smooth and responsive.

[OPTIONAL: Attach videos or screenshots showing current abrupt or missing interactions]

Interaction requirements:
- Key interactions: [e.g., Button clicks, Modal open/close, Menu expand/collapse, Form validation, Loading states]
- User expectations: [e.g., Instant feedback, Smooth transitions, Clear state changes]
- Performance constraints: [e.g., 60fps requirement, Mobile performance, Low-end devices]
- Brand personality: [e.g., Playful and bouncy, Professional and subtle, Fast and efficient]

Current interaction problems:
- [Problem 1: e.g., Buttons have no hover state - users don't know they're interactive]
- [Problem 2: e.g., Modals appear instantly with no transition - jarring and disorienting]
- [Problem 3: e.g., Loading spinners appear after 2 seconds - feels broken before that]
- [Problem 4: e.g., Form errors flash in suddenly - startling users]
- [Problem 5: e.g., Menu animations are 800ms - too slow, users frustrated]

User context: [Platform, device types, user patience level, accessibility needs]

Please provide:
1. Transition duration guidelines (how long should animations take)
2. Easing curves recommendations (linear, ease-in-out, spring, etc.)
3. Micro-interaction patterns (hover, click, focus, drag, etc.)
4. Loading and feedback states
5. Page transitions and navigation
6. Error and validation feedback
7. Accessibility considerations (prefers-reduced-motion)
8. Performance optimization

Consider: [Constraints - e.g., Must work on low-end devices, support reduced motion preference, maintain 60fps, not distract from content]
```

💡 **What to customize:**

- [Product Type] = Web app, Mobile app, Dashboard, E-commerce, Design tool
- [Key interactions] = Main interaction points in your interface
- [User expectations] = What users expect from interactions
- [Performance constraints] = Technical limitations
- [Brand personality] = Animation style matching brand
- [Problems 1-5] = Current interaction issues
- Upload videos/recordings showing current interaction problems
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Interaction Design Specialist focusing on micro-interactions, transitions, and animation.

I'm designing interaction patterns for a Task Management Web App to make the interface feel smooth, responsive, and professional.

[User would attach interaction videos here]

Interaction requirements:
- Key interactions:
  - Creating new tasks (button click → form appears)
  - Checking off completed tasks (checkbox → strikethrough animation)
  - Dragging tasks between columns (drag and drop with visual feedback)
  - Opening task detail modal (card click → modal slides up)
  - Deleting tasks (swipe gesture → confirmation → fade out)
  - Loading more tasks (infinite scroll with skeleton screens)
  - Form validation (real-time error feedback)
  - Filtering tasks (instant filtering with smooth transitions)
- User expectations: 
  - Instant feedback (< 100ms perceived response)
  - Smooth 60fps animations
  - Clear cause-and-effect (action → result connection obvious)
  - Not too playful (professional tool, not a game)
- Performance constraints:
  - Must work smoothly with 500+ tasks on screen
  - 60fps on mid-range laptops (not just high-end)
  - Mobile performance critical (40% of users)
  - Animations shouldn't block interaction
- Brand personality: Professional and efficient, modern but not flashy, subtle sophistication, productivity-focused

Current interaction problems:
- Task cards have zero hover state - users don't know they're clickable until they click
- Task detail modal appears instantly (0ms) - jarring, disorienting, no sense of where it came from
- Checking off a task instantly crosses it out and moves it - too abrupt, no satisfaction
- Loading spinner appears immediately when loading more tasks - causes layout jank
- Form validation errors appear instantly as you type - feels aggressive and annoying
- Drag and drop has no visual feedback until you drop - unclear if dragging is working
- Page transitions between views are instant cuts - disorienting navigation
- Delete animation is 1200ms fade - way too slow, users get impatient
- Hover effects are inconsistent - some elements have them, most don't

User context: Knowledge workers using app 2-4 hours daily. Desktop primary (60%), mobile secondary. Users drag 20-50 tasks per session. Need responsive feel for productivity. Some users have vestibular disorders (motion sensitivity). Low-end laptops common in some markets.

Please provide:
1. Transition duration guidelines (how long should animations take)
2. Easing curves recommendations (linear, ease-in-out, spring, etc.)
3. Micro-interaction patterns (hover, click, focus, drag, etc.)
4. Loading and feedback states
5. Page transitions and navigation
6. Error and validation feedback
7. Accessibility considerations (prefers-reduced-motion)
8. Performance optimization

Consider: Animations should feel professional, not playful. Must respect prefers-reduced-motion for accessibility. Dragging 50+ items shouldn't cause performance issues. Mobile touch interactions need different timing than desktop hover. Some animations should be skippable (users in a hurry).
```

</aside>

---

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Fast beats slow: When in doubt, make animations faster (150ms) not slower (400ms)
✦ Common mistake: Over-animating everything - reserve motion for meaningful moments
✦ Best with: Claude (excellent at timing and easing recommendations), ChatGPT (good for animation patterns)
✦ Remix it: "Design the spring animation system - playful bouncy interactions for consumer apps"
✦ Pro move: Ask "Create the animation audit checklist - which interactions need animation, which don't"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the loading state strategy - skeleton screens vs. spinners vs. optimistic UI for different scenarios"
- "Create the gesture interaction patterns - swipe, pinch, long-press with proper feedback"
- "How should animations adapt for prefers-reduced-motion accessibility setting?"
- "Generate the CSS animation library - reusable keyframes and transitions for all common interactions"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![27_Example_Output.png](27_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #26: [Add Depth and Shadows](R-26%20Add%20Depth%20and%20Shadows%202d767ccc6bef8025a4aff26e74f609ab.md)
→ Recipe #28: [Remove Visual Clutter](R-28%20Remove%20Visual%20Clutter%202d767ccc6bef806ea5dbd329ca407ba1.md)
→ Recipe #34: [Polish Your Input Fields](R-34%20Polish%20Your%20Input%20Fields%202d767ccc6bef806aa554c4a058472a9b.md)

</aside>