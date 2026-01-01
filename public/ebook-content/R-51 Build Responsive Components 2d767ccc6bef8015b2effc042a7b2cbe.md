# R-51: Build Responsive Components

# Recipe #51: Build Responsive Components

Category: Systems & Components  |  ⏱️ 35-40 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're building Figma components that need to work across desktop, tablet, and mobile screens - components break when content changes, don't resize properly, or require separate desktop/mobile versions. You need components that adapt intelligently using Auto Layout and constraints instead of creating 3 versions of every component.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create rigid, non-responsive components - using fixed widths (320px button breaks on 280px mobile), manual spacing that doesn't scale, separate desktop and mobile components (ButtonDesktop, ButtonMobile = double maintenance), or components that break when text wraps. Teams waste time creating device-specific variants, fixing broken layouts when content changes, or manually resizing components for each screen size. Components work perfectly in the design file but break in developer handoff because responsive behavior wasn't defined. You need Auto Layout mastery - components that hug content, fill containers, maintain proper spacing, and adapt gracefully from 320px mobile to 1920px desktop without creating separate versions.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide Auto Layout fundamentals explaining when to use Hug (content-driven sizing for buttons and badges), Fill (container-driven for inputs and full-width elements), or Fixed (specific sizes for icons and avatars) with real examples, responsive sizing strategies including min/max width constraints and flexible patterns preventing components from being too small or too large, spacing and padding systems that scale across mobile/tablet/desktop breakpoints using design tokens, comprehensive text handling strategies covering wrapping, truncation, and responsive scaling with specific Figma settings, container adaptation patterns showing how components adjust from 320px narrow to 1920px wide containers, constraints best practices for stretching and positioning elements (Left & Right for full-width, Center for modals, Scale for proportional), breakpoint considerations detailing when component behavior changes at key screen sizes with guidance on single component versus device variant approaches, and complete testing checklist covering extreme widths, varying content lengths, and Figma testing tools. Optionally includes before/after examples showing fixed versus responsive components.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Responsive Design Specialist focusing on Auto Layout, constraints, and adaptive component design in Figma.

I'm building responsive components for a [Product Type] that work seamlessly from [Min Width] mobile to [Max Width] desktop without creating separate device-specific versions.

[OPTIONAL: Attach Figma components that break at different sizes]

Responsive requirements:
- Screen sizes to support: [e.g., Mobile 320-428px, Tablet 768-1024px, Desktop 1280-1920px]
- Component types: [e.g., Buttons, Cards, Forms, Navigation, Modals, Tables]
- Content variability: [e.g., Short/long text, 1-10 items in lists, Dynamic images]
- Platform: [e.g., Web responsive, iOS + Android, Multi-platform]
- Breakpoint strategy: [e.g., Fluid scaling, Defined breakpoints, Mobile-first]

Current responsive problems:
- [Problem 1: e.g., Fixed width buttons break on small screens - 320px button on 280px mobile]
- [Problem 2: e.g., Cards don't resize - fixed 400px width doesn't adapt to container]
- [Problem 3: e.g., Spacing is manual - 24px padding doesn't scale, looks cramped on mobile]
- [Problem 4: e.g., Separate mobile/desktop components - ButtonMobile, ButtonDesktop = double work]
- [Problem 5: e.g., Text wrapping breaks layout - long button labels push content off screen]

Team context: [Designer Auto Layout knowledge, device testing practices, handoff to developers]

Please provide:
1. Auto Layout fundamentals (hug, fill, fixed - when to use each)
2. Responsive sizing strategies (min/max width, flexible vs fixed)
3. Spacing and padding systems (scaling across breakpoints)
4. Text handling (wrapping, truncation, responsive type)
5. Container adaptation (component in different width containers)
6. Constraints best practices (left/right, top/bottom, center, scale)
7. Breakpoint considerations (when components change behavior)
8. Testing responsive components (preview at different sizes)

Consider: [Constraints - e.g., Must work 320px-1920px, Content length varies wildly, No separate mobile components, Developers need clear resize rules]
```

💡 What to customize:

- [Product Type] = SaaS, E-commerce, Mobile app, Dashboard, Marketing site
- [Min Width] = Smallest screen to support (e.g., 320px mobile)
- [Max Width] = Largest screen to support (e.g., 1920px desktop)
- [Screen sizes] = Device breakpoints
- [Component types] = What needs to be responsive
- [Problems 1-5] = Current responsive issues
- Attach components that break at different sizes
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Responsive Design Specialist focusing on Auto Layout, constraints, and adaptive component design in Figma.

I'm building responsive components for a SaaS Dashboard that work seamlessly from 320px mobile to 1920px desktop without creating separate device-specific versions.

[User would attach Figma components that break at different sizes]

Responsive requirements:
- Screen sizes to support:
  - Mobile: 320px (iPhone SE) to 428px (iPhone 14 Pro Max)
  - Tablet: 768px (iPad portrait) to 1024px (iPad landscape)
  - Desktop: 1280px (laptop) to 1920px (large monitor)
  - Must work at ANY width in between (fluid responsive)
- Component types:
  - Buttons (primary, secondary, icon buttons)
  - Cards (task cards, project cards, stat cards)
  - Forms (login, create task, multi-step forms)
  - Navigation (header, sidebar, mobile menu)
  - Modals (small 400px to large 800px)
  - Tables (data tables with 3-10 columns)
  - Dashboard widgets (charts, stats, lists)
- Content variability:
  - Button text: 4 characters ("Save") to 30 characters ("Download Annual Report PDF")
  - Card titles: 10 characters to 100+ characters
  - Lists: 0 items (empty state) to 1000+ items
  - Images: Square, landscape, portrait, missing
  - Dynamic data: Names, dates, numbers with varying lengths
- Platform: Web responsive (React)
- Breakpoint strategy:
  - Mobile-first approach
  - Fluid scaling preferred over hard breakpoints
  - Component behavior changes at key breakpoints (768px, 1024px)

Current responsive problems:
- Fixed width buttons break on small screens - Button set to 320px width, on 280px iPhone SE content gets cut off, button overflows container, looks broken
- Cards don't resize gracefully - TaskCard fixed at 400px width, doesn't fill container on desktop (wasted space), doesn't shrink on mobile (horizontal scroll), should adapt to container
- Spacing doesn't scale - Using 24px padding on all devices, looks cramped on mobile (too much padding relative to screen), looks sparse on desktop (too little padding), should scale proportionally
- Created separate mobile/desktop components - ButtonMobile (full-width), ButtonDesktop (auto-width) as separate components, double maintenance when updating colors/styles, inconsistency between versions
- Text wrapping breaks layout - Long button text "Download Annual Financial Report PDF" wraps to 3 lines, pushes other content down, breaks grid alignment, no max-width or truncation strategy
- Cards don't handle varying content - Card with 2-line title looks good, card with 10-line title breaks height, card with no image has empty space, no content adaptation strategy
- No min/max width constraints - Components shrink to 0px or grow to 3000px, no sensible limits, developers don't know intended size ranges

Team context:
- 8 designers, mixed Auto Layout knowledge (3 beginners, 4 intermediate, 1 expert)
- Designs viewed on multiple devices (iPhone, iPad, laptop, large monitors)
- Developers need clear resize behavior (hug vs fill vs fixed)
- Current workflow: Create desktop design, then create separate mobile design = double work
- Want single component that works everywhere
- Content is highly dynamic (user-generated, varies wildly)

Please provide:
1. Auto Layout fundamentals (hug, fill, fixed - when to use each)
2. Responsive sizing strategies (min/max width, flexible vs fixed)
3. Spacing and padding systems (scaling across breakpoints)
4. Text handling (wrapping, truncation, responsive type)
5. Container adaptation (component in different width containers)
6. Constraints best practices (left/right, top/bottom, center, scale)
7. Breakpoint considerations (when components change behavior)
8. Testing responsive components (preview at different sizes)

Consider: Must work 320px-1920px seamlessly. Content length varies wildly (plan for extremes). Single component, not separate mobile/desktop versions. Developers need clear hug/fill/fixed rules. Mobile-first approach. Test at multiple sizes before publishing.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Fill for width, Fixed for height: Most components work best with Fill width (adapt to container) and Fixed height (consistent)
✦ Common mistake: Using Fixed width on buttons - use Hug (auto-width) or Fill (full-width) instead
✦ Best with: Claude (excellent at Auto Layout strategies), ChatGPT (good for responsive patterns)
✦ Remix it: "Design the responsive card grid - 1 column mobile, 2 columns tablet, 4 columns desktop"
✦ Pro move: Ask "Audit my components for responsive issues - find fixed widths that should be Hug or Fill"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create the responsive button system - Hug vs Fill, min/max width, mobile vs desktop behavior"
- "Design the responsive form layout - single column mobile, 2-3 columns desktop, adaptive inputs"
- "How to handle responsive navigation - hamburger mobile, full menu desktop, single component"
- "Build the responsive card component - adapts 320px to 1920px, handles varying content"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![51_Example_Output.png](51_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #49: [Design Component Variants in Figma](R-49%20Design%20Component%20Variants%202d767ccc6bef8061a641c8db579cd3b7.md)
→ Recipe #50: [Properties vs Variants in Figma](R-50%20Properties%20vs%20Variants%20in%20Figma%202d767ccc6bef80e2b61bd3a4a3a760b5.md)
→ Recipe #52: [Design Multi-State Components](R-52%20Design%20Multi-State%20Components%202d767ccc6bef80c091a9e89c40b1fd3a.md)

</aside>