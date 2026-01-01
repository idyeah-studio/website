# R-11: Right-Click Menus

# Recipe #11: Right-Click Menus

Category: Wireframing & IA  |  ⏱️ 20-25 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're redesigning an application that lacks right-click context menus (forcing users to hunt for actions in toolbars) or has poorly organized context menus with 20+ random options. Power users want efficient contextual actions, but the current implementation is either missing or overwhelming.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many applications either ignore right-click menus entirely (making power users inefficient) or dump every possible action into the context menu without prioritization. Users right-click and face a wall of 15-25 options with no grouping, unclear labels, or irrelevant actions for the selected item. Meanwhile, mobile users have no equivalent pattern. You need to design smart, contextual menus that show the right actions at the right time, with clear hierarchy and mobile alternatives.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide an action hierarchy system with primary actions at top, secondary grouped in middle, and destructive actions separated at bottom, plus menu structure with logical grouping, dividers, and keyboard shortcuts. You'll get contextual rules for single versus multiple selection, file types, and permissions, keyboard shortcut mapping for platform differences, destructive action patterns with visual separation and color coding, mobile equivalents using touch-and-hold and bottom sheet menus, and accessibility specifications for keyboard navigation and screen readers. Optional visual wireframe shows the organized context menu.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Designer specializing in interaction patterns and power user features.

I'm designing right-click context menus for a [Product Type] where users interact with [Object Type: e.g., files, contacts, tasks, items].

[OPTIONAL: Attach screenshots of current right-click menu or action toolbar]

Context menu requirements:
- Objects users right-click on: [e.g., Files, Folders, Tasks, Messages, Table rows]
- Available actions per object: [List all possible actions]
- User types: [e.g., Basic users, Power users, Admins]
- Most frequent actions: [Based on analytics if available]

Current problems:
- [Problem 1: e.g., No context menu exists, users must use toolbar]
- [Problem 2: e.g., Menu has 22 options with no organization]
- [Problem 3: e.g., Same menu for all item types regardless of context]

Please provide:
1. Action prioritization strategy (which actions to show, which to hide)
2. Menu organization and grouping
3. Contextual logic (what shows based on item state/type)
4. Keyboard shortcuts to display alongside actions
5. Destructive action handling (delete, archive)
6. Mobile touch-and-hold equivalent
7. Accessibility considerations

Consider: [Constraints - e.g., Must work on Windows/Mac, support keyboard-only users, have mobile equivalent]
```

💡 What to customize:

- [Product Type] = File manager, CRM, Project tool, Email client, Data table application
- [Object Type] = What users right-click on
- [Available actions] = Complete list of possible actions
- [User types] = Different user roles with different action needs
- [Most frequent actions] = Analytics data on common actions
- [Problems 1-3] = Current context menu issues
- Upload screenshot of existing context menu or action patterns
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Designer specializing in interaction patterns and power user features.

I'm designing right-click context menus for a File Management SaaS where users interact with files and folders in a cloud storage interface.

[User would attach screenshots here]

Context menu requirements:
- Objects users right-click on: Individual files, Multiple selected files, Folders, Empty space in folder
- Available actions per object: 
  - Files: Open, Download, Share, Copy link, Move to, Rename, Duplicate, Add to favorites, Version history, Properties, Delete
  - Folders: Open, Share, Move to, Rename, Add to favorites, Download as zip, Delete
  - Multiple selection: Download all, Move to, Share, Delete
  - Empty space: New file, New folder, Upload, Paste, Sort by, View options
- User types: Free users (view/download only), Paid users (full editing), Admins (can manage sharing/permissions)
- Most frequent actions: Open (45%), Download (28%), Share (15%), Move to (8%)

Current problems:
- Right-click menu shows all 11 actions for every file, regardless of file type or user permissions
- Menu is flat - no visual separation between frequent vs. rare actions
- Destructive "Delete" appears in middle of menu next to "Duplicate"
- Mobile users have no way to access these actions (currently hidden in ... menu with different organization)

Please provide:
1. Action prioritization strategy (which actions to show, which to hide)
2. Menu organization and grouping
3. Contextual logic (what shows based on item state/type)
4. Keyboard shortcuts to display alongside actions
5. Destructive action handling (delete, archive)
6. Mobile touch-and-hold equivalent
7. Accessibility considerations

Consider: Windows/Mac keyboard shortcut differences. Free users shouldn't see "Share" option. PDFs should show "Open in viewer", images should show "Preview". Mobile users (40% of traffic) need touch-and-hold pattern. Must support keyboard-only navigation with arrow keys.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Analytics over assumptions: If you know which actions users take most, put those at the top - don't guess
✦ Common mistake: Showing all actions all the time - context menus should be contextual (hide irrelevant options)
✦ Best with: Claude (excellent at action categorization and rules), ChatGPT (good for interaction patterns)
✦ Remix it: "Design the progressive disclosure version - show 5 actions, hide 10 behind 'More actions'"
✦ Pro move: Ask "Create a keyboard shortcut cheat sheet that teaches users faster alternatives to right-click"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the nested submenu behavior: how deep can menus go before it's too complex?"
- "What happens when user right-clicks on an item they don't have permission to edit?"
- "Create the animation and timing specs: how fast should the menu appear, fade in/out?"
- "Design the mobile swipe action pattern as an alternative to context menus"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![11_Example_Output.png](11_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #10: [Modals vs. Side Panels](R-10%20Modals%20vs%20Side%20Panels%202d667ccc6bef80ba87d9dca8ddee9a39.md)
→ Recipe #16: [Build Bulk Action Tools](R-16%20Build%20Bulk%20Action%20Tools%202d667ccc6bef80b8bd2bc0615a25c87c.md)
→ Recipe #37: [Design Better Tooltips](R-37%20Design%20Better%20Tooltips%202d767ccc6bef804ea807db188f871c58.md)

</aside>