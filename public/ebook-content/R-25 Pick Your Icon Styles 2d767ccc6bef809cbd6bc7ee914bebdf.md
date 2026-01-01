# R-25: Pick Your Icon Styles

# Recipe #25: Pick Your Icon Styles

Category: UI & Visuals  |  ⏱️ 20-25 min  |  🌶️ Basic

<aside>
🎯

**USE WHEN:**

You're redesigning an interface with inconsistent icons - mixing different icon sets, styles (filled, outlined, rounded), or sizes. The current icons feel mismatched, don't align with your brand, or lack visual consistency across the application.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications accumulate icons from multiple sources over time - some from Material Icons, others from Font Awesome, custom designs from different designers, and free icons from various websites. The result: visual chaos where outlined icons sit next to filled icons, sharp corners next to rounded, thin strokes next to bold. Icons don't feel cohesive with the brand, and users struggle to interpret inconsistent visual language. You need to establish a unified icon system with clear style rules.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

You'll get icon style analysis (outlined vs filled, stroke weights, corner radius), consistency frameworks (size scales, grid systems, visual language), selection criteria (when to use custom vs library icons), accessibility guidelines (meaningful labels, size requirements), and integration patterns (icon + text, standalone usage). Output includes icon style guide with usage examples.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an Icon System Designer specializing in visual consistency and brand alignment.

I'm establishing an icon system for a [Product Type] that aligns with [Brand Style].

[OPTIONAL: Attach brand guidelines, current icon examples, or UI screenshots]

Icon requirements:
- Number of icons needed: [e.g., 50-100 icons for UI, 20 custom product icons]
- Icon contexts: [e.g., Navigation, Actions, Status indicators, File types, Features]
- Brand characteristics: [e.g., Rounded, Minimal, Bold, Playful, Professional]
- Technical needs: [e.g., SVG, multiple sizes, web fonts, React components]

Current icon problems:
- [Problem 1: e.g., Mix of outlined and filled icons - no consistency]
- [Problem 2: e.g., Three different icon sets (Material, FontAwesome, custom) - clash visually]
- [Problem 3: e.g., Icon stroke weights vary 1px to 3px - looks random]
- [Problem 4: e.g., Sharp corner icons next to rounded - style mismatch]
- [Problem 5: e.g., Icons don't match brand personality - too technical for friendly brand]

User context: [Who uses the interface, icon literacy level, viewing conditions]

Please provide:
1. Icon style recommendation (outlined vs. filled vs. duotone)
2. Visual characteristics (corner radius, stroke weight, detail level)
3. Icon set recommendation (existing library vs. custom)
4. Size system (16px, 20px, 24px, etc.)
5. Color usage guidelines
6. Custom icon creation rules
7. Accessibility considerations
8. Implementation strategy

Consider: [Constraints - e.g., Must scale to small sizes, performance with many icons, need dark mode support, international recognition]
```

💡 **What to customize:**

- [Product Type] = Mobile app, Web dashboard, E-commerce site, Enterprise software, Consumer app
- [Brand Style] = Your brand personality and visual characteristics
- [Number of icons] = Scale of your icon needs
- [Icon contexts] = Where icons appear in your UI
- [Problems 1-5] = Current icon inconsistencies
- Upload current icons or screenshots showing icon usage
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an Icon System Designer specializing in visual consistency and brand alignment.

I'm establishing an icon system for a Fitness & Wellness Mobile App that aligns with a friendly, energetic, approachable brand.

[User would attach screenshots here]

Icon requirements:
- Number of icons needed: 60-80 icons total
  - 15 navigation icons (home, workouts, nutrition, progress, profile)
  - 25 action icons (play, pause, favorite, share, edit, delete)
  - 20 workout category icons (cardio, strength, yoga, cycling, swimming)
  - 15 status/badge icons (achievements, streaks, milestones)
  - Custom icons for unique features (rest timer, form checker, social challenges)
- Icon contexts:
  - Bottom tab navigation (always visible, color changes on active)
  - Workout cards (prominent, decorative)
  - In-app actions (contextual, small)
  - Achievement badges (celebratory, colorful)
  - Empty states and illustrations
- Brand characteristics: Energetic but not aggressive, friendly and motivating, modern and clean, appeals to beginners not just athletes, warm color palette (coral, teal, warm grays)
- Technical needs: SVG format, React Native components, 3 sizes (16px, 24px, 32px), must work in light and dark mode

Current icon problems:
- Mix of filled solid icons (from ionicons) and outlined stroke icons (from Feather) - no visual consistency
- Navigation uses rounded icons, but action buttons use sharp geometric icons from Material Design - style clash
- Some icons have 1px strokes (too thin at small sizes), others have 2.5px strokes - inconsistent weight
- Workout category icons are too detailed (tiny dumbbells, barbells) - unrecognizable at 24px
- Achievement badges are colorful and playful, but UI icons are monochrome and serious - personality mismatch
- Downloaded free icons from 5 different sources - none designed to work together
- Corner radius inconsistent - some icons have 2px radius, some sharp corners, some fully rounded

User context: Fitness enthusiasts aged 20-45, mix of beginners and experienced. Use app during workouts (quick glances on phone propped up). Need to recognize icons instantly while exercising. Many users have limited tech experience - icons must be intuitive. 70% female users - icons should feel inclusive not masculine.

Please provide:
1. Icon style recommendation (outlined vs. filled vs. duotone)
2. Visual characteristics (corner radius, stroke weight, detail level)
3. Icon set recommendation (existing library vs. custom)
4. Size system (16px, 20px, 24px, etc.)
5. Color usage guidelines
6. Custom icon creation rules
7. Accessibility considerations
8. Implementation strategy

Consider: Must be instantly recognizable during workouts (users glance while exercising). Need to feel motivating not clinical. Performance matters - app has 100+ screens with icons. Dark mode support required. Some icons need animated versions (play→pause, favorite heart). Budget allows for ~20 custom icons, rest should use existing library.
```

</aside>

---

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Consistency beats perfection: Better to have all outlined icons from one set than mix "better" icons from different sets
✦ Common mistake: Choosing icons that look great large but become blobs at 16px - always test at smallest size
✦ Best with: Claude (excellent at systematic style decisions), ChatGPT (good for icon library comparisons)
✦ Remix it: "Design the animated icon states - how should icons transition between states smoothly?"
✦ Pro move: Ask "Generate the icon audit checklist - how to evaluate if a new icon fits the system"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the custom icon design specifications - grid system, stroke weight, export settings for designers"
- "How should category icons differ from action icons while maintaining system consistency?"
- "Design the icon animation library - which icons benefit from micro-interactions?"
- "Generate the icon naming convention - how to name 100+ icons for easy developer access"
</aside>

---

<aside>
💎

EXAMPLE OUTPUT

![25_Example_Output.png](25_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #21: [Turn Brand into UI Styles](R-21%20Turn%20Brand%20into%20UI%20Styles%202d667ccc6bef808fb671c9d953cc5641.md)
→ Recipe #26: [Add Depth and Shadows](R-26%20Add%20Depth%20and%20Shadows%202d767ccc6bef8025a4aff26e74f609ab.md)
→ Recipe #29: [Create Your Unique Hook](R-29%20Create%20Your%20Unique%20Hook%202d767ccc6bef8070ab71c1326164ae2f.md)

</aside>