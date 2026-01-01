# R-19: Set Up User Permissions

# Recipe #19: Set Up User Permissions

Category: Wireframing & IA  |  ⏱️ 30-40 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're redesigning a permission or role management system where administrators need to control who can view, edit, delete, or manage different parts of the application. The current system is confusing - unclear what permissions do, hard to assign roles, or users accidentally get wrong access levels.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Permission systems in established applications often become complex mazes - dozens of granular permissions, unclear role definitions, no preview of what a role can actually do, and dangerous defaults that give too much or too little access. Admins struggle to understand the difference between "Editor" and "Contributor," accidentally grant admin access, or spend hours configuring custom permissions. Meanwhile, users get frustrated by unexpected "access denied" errors. You need to design a permission system that's both powerful and understandable.

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide a role naming strategy with descriptive names, clear hierarchy, and use case-based definitions (not technical jargon), permission grouping with progressive disclosure (basic vs. advanced permissions organized by category with visual icons), permission visualization through comparison matrices and templates for common scenarios, streamlined assignment workflows (quick assign predefined roles, custom role builder, bulk operations, temporary access, and invitation flows), permission preview capabilities ("view as this role" simulation with lists of specific capabilities), dangerous permission safeguards (visual warnings, confirmation dialogs, separate sections for destructive permissions, two-person approval requirements), bulk management tools (multi-user role assignment, permission templates, copy from user, bulk revoke), and comprehensive audit features (permission change logs, "who has access" views per resource, access requests, reports, and anomaly detection). Optionally includes annotated wireframes showing the complete permission management interface.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a UX Designer specializing in enterprise software and access control systems.

I'm designing a user permission system for a [Product Type] with [Number] user roles and [Number] permission types.

[OPTIONAL: Attach screenshot of current permission interface or permission matrix]

Permission system requirements:
- User roles: [e.g., Admin, Manager, Editor, Viewer, Guest]
- Permission types: [e.g., View, Edit, Delete, Share, Manage users, Export data, Configure settings]
- Permission scope: [e.g., Workspace-level, Project-level, Document-level]
- User types: [e.g., Internal team, External contractors, Clients, Partners]

Current problems:
- [Problem 1: e.g., 30+ individual permissions - overwhelming to configure]
- [Problem 2: e.g., Role names unclear - what's difference between "Editor" and "Contributor"?]
- [Problem 3: e.g., No preview of what each role can do before assigning]
- [Problem 4: e.g., Dangerous permissions (delete workspace) mixed with safe ones (view files)]
- [Problem 5: e.g., Can't easily see who has access to specific resources]

User context: [Who manages permissions, how often, typical scenarios]

Please provide:
1. Role naming and definition strategy (clear, intuitive role names)
2. Permission grouping and hierarchy
3. Visual permission matrix or comparison
4. Assignment workflow (how to grant/revoke access)
5. Permission preview and testing
6. Dangerous permission safeguards
7. Bulk permission management
8. Audit and visibility features

Consider: [Constraints - e.g., Must support custom roles, granular control needed for enterprise, compliance requirements, inheritance from parent objects]
```

💡 What to customize:

- [Product Type] = Team workspace, CRM, File storage, Project management, Content management system
- [Number of roles] = Your role count
- [Number of permissions] = Your permission types
- [Permission scope] = Where permissions apply (workspace, project, file level)
- [User types] = Different categories of users
- [Problems 1-5] = Current permission pain points
- Upload screenshot of current permission interface or permission matrix
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a UX Designer specializing in enterprise software and access control systems.

I'm designing a user permission system for a Team Workspace Platform with 5 predefined roles, 3 custom role slots, and 24 individual permissions across 3 permission scopes.

[User would attach screenshot here]

Permission system requirements:
- User roles:
  - Predefined: Owner (1 per workspace), Admin (unlimited), Member (unlimited), Guest (view-only), Billing Manager (specialized)
  - Custom: Up to 3 custom roles with granular permissions
- Permission types (24 total):
  - Content: View, Create, Edit, Delete, Share, Download, Comment
  - Members: Invite, Remove, Change roles
  - Workspace: Rename, Delete workspace, Export data, View analytics
  - Settings: Manage integrations, Configure security, Manage billing
  - Advanced: API access, Audit logs, Custom branding
- Permission scope:
  - Workspace-level (applies to everything)
  - Project-level (specific projects)
  - Document-level (individual files)
- User types: Internal employees (full trust), Contractors (limited time), Clients (view-only mostly), External partners (specific project access)

Current problems:
- Checkbox grid showing all 24 permissions × 5 roles = 120 checkboxes on screen - overwhelming
- Role names generic: "Member" could mean anything - what can they actually do?
- No way to preview "If I assign Sarah as Editor, what exactly can she do?"
- Dangerous permissions (Delete workspace, Manage billing) look identical to safe ones (Comment on files)
- When assigning custom role, admin must manually check 24 boxes - tedious and error-prone
- Can't see at a glance "Who has access to Project Alpha?" - must check each user individually
- No audit trail - can't see who granted Sarah admin access or when
- Inheritance unclear - if someone is Admin at workspace level, do they automatically have access to all projects?

User context: Workspace owners manage permissions monthly (adding/removing people as teams change). Team admins occasionally adjust access when projects require collaboration with externals. Typical scenarios: Onboarding contractor (needs limited access to 2 projects only), Offboarding employee (revoke all access), Client review (view-only access to specific documents), Partner collaboration (edit access to shared project).

Please provide:
1. Role naming and definition strategy (clear, intuitive role names)
2. Permission grouping and hierarchy
3. Visual permission matrix or comparison
4. Assignment workflow (how to grant/revoke access)
5. Permission preview and testing
6. Dangerous permission safeguards
7. Bulk permission management
8. Audit and visibility features

Consider: Enterprise customers need granular control and custom roles. Small teams want simplicity (just pick a role and go). Must support compliance audits (who has access to what). Permissions inherit from workspace to projects to documents unless overridden. Some permissions are mutually dependent (can't "Delete" without "Edit").
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Name roles by what they do, not technical terms: "Can view and comment" is clearer than "Contributor"
✦ Common mistake: Showing all permissions at once - progressive disclosure for basic vs. advanced
✦ Best with: Claude (excellent at complex permission logic and edge cases), ChatGPT o1 (for enterprise permission systems)
✦ Remix it: "Design the permission conflict resolver - what happens when user has conflicting permissions at different levels?"
✦ Pro move: Ask "Create the permission audit report - how to show who has what access for compliance review?"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design the 'request access' flow - how should users request elevated permissions?"
- "What happens when permissions change while user is actively using the app? Design the real-time update experience"
- "Create the permission inheritance visualization - show how workspace > project > document permissions cascade"
- "Design the emergency access revocation - how to immediately remove a user's access across everything?"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![19_Example_Output.png](19_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**
→ Recipe #13: [Fix Messy Settings Pages](R-13%20Fix%20Messy%20Settings%20Pages%202d667ccc6bef80a7a976db712071bdce.md)
→ Recipe #16: [Build Bulk Action Tools](R-16%20Build%20Bulk%20Action%20Tools%202d667ccc6bef80b8bd2bc0615a25c87c.md)

</aside>