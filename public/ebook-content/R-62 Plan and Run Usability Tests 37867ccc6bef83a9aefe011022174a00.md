# R-62: Plan and Run Usability Tests

<aside>
🎯

**FOLLOW-UP PROMPTS**

Good objectives:

- "Measure whether users can complete account setup without errors"
- "Identify points of confusion in the project creation flow"
- "Validate that users understand role selection when inviting team members"
- "Measure time to complete full onboarding (goal: under 10 minutes)"

Bad objectives (too vague):

- "See if users like the new design"
- "Test the onboarding"
- "Get feedback on the flow"

**What to test:**

Options:

- Figma prototype: High-fidelity, interactive, pre-development
- Live product: Real product, real data, post-launch validation
- Paper prototypes: Low-fidelity, early concept testing
- Competitor product: Benchmark testing, inspiration

For this scenario: Figma prototype (validating before development)

Prototype requirements:

- High-fidelity (looks real, realistic interactions)
- Interactive (clickable, not static screens)
- Realistic data (use real project names, not "Project 1", "Project 2")
- Complete flows (all steps included, no dead ends)
- Error states (show what happens if user makes mistake)

**Tasks to test:**

Identify critical user journeys:

- Task 1: Account setup (first impression, sets tone)
- Task 2: Create first project (core value, must be easy)
- Task 3: Invite team (collaboration feature, common task)
- Task 4: Find key feature (navigation, discoverability)

**Success metrics:**

Quantitative metrics:

- Task completion rate: % who complete task successfully (goal: 90%+)
- Time on task: Average time to complete (goal: under 10 min total)
- Error rate: Number of errors per task (goal: 0-1 errors)
- Clicks to completion: Number of clicks needed (efficiency)

Qualitative metrics:

- Confidence: Do users feel confident they succeeded?
- Satisfaction: Post-task rating (1-5 scale)
- Confusion points: Where did users pause or struggle?
- Critical incidents: Moments of frustration or delight
- Task scenario creation:
    
    **Writing realistic task scenarios:**
    
    Task scenario formula:
    [Context] + [Goal] + [Success criteria]
    
    **Task 1: Create account**
    
    Bad task (too simple):
    
    - "Create an account"
    
    Good task (realistic scenario):
    
    - "Imagine you're a project manager at a design agency. Your team is looking for a new project management tool. You've decided to try [Product]. Create an account to get started."
    - Success: Account created with name, email, password, company name
    
    **Task 2: Create first project**
    
    Good task:
    
    - "You're managing a website redesign project for a client called 'Acme Corp.' The project deadline is March 31st. Create a project for this website redesign."
    - Success: Project created with name "Acme Corp Website Redesign", due date set
    
    **Task 3: Invite team members**
    
    Good task:
    
    - "You want to invite two designers from your team to collaborate on this project: [sarah@email.com](mailto:sarah@email.com) (Designer role) and [mike@email.com](mailto:mike@email.com) (Designer role). Invite them to the project."
    - Success: Both email addresses entered, Designer role selected, invitations sent
    
    **Task 4: Find create task button**
    
    Good task:
    
    - "You're now ready to start adding tasks to your project. Find where you would create your first task."
    - Success: Located "Create task" button on dashboard
    
    **Task wording best practices:**
    
    Do:
    
    - Provide context (why they're doing this)
    - Make it realistic (use real company names, dates)
    - Be specific about goal (what they need to accomplish)
    - Avoid mentioning UI elements (don't say "Click the button")
    
    Don't:
    
    - Give away the answer ("Click 'Create Project' button")
    - Be too vague ("Explore the dashboard")
    - Use product jargon (if users wouldn't know the term)
    - Make it hypothetical ("Pretend you want to...")
- Participant recruitment:
    
    **Screener for new users:**
    
    Q1: Have you ever used [Your Product] before?
    
    - [ ]  Yes → DISQUALIFY (need new users)
    - [ ]  No → QUALIFY
    
    Q2: What is your current role?
    
    - [ ]  Project Manager → QUALIFY
    - [ ]  Team Lead → QUALIFY
    - [ ]  Designer/Developer → QUALIFY (if manages projects)
    - [ ]  Student/Intern → DISQUALIFY
    
    Q3: Do you currently use project management software?
    
    - [ ]  Yes (Asana, Monday, Trello, Jira, etc.) → QUALIFY (preferred)
    - [ ]  No, use spreadsheets/email → QUALIFY
    - [ ]  No, don't manage projects → DISQUALIFY
    
    Q4: How comfortable are you with learning new software?
    
    - [ ]  Very comfortable → QUALIFY
    - [ ]  Somewhat comfortable → QUALIFY
    - [ ]  Not comfortable → DISQUALIFY (may struggle with testing)
    
    Q5: Do you have reliable internet and can join a Zoom call?
    
    - [ ]  Yes → QUALIFY
    - [ ]  No → DISQUALIFY (remote testing requirement)
    
    **How many participants:**
    
    Jakob Nielsen's research:
    
    - 5 participants: Identify 85% of usability problems
    - 8 participants: Identify 90%+ of usability problems
    - Diminishing returns after 8 participants
    
    Recommendation:
    
    - First round: 6-8 participants
    - If major issues found: Fix and test again with 5 more (iteration)
    - If minor issues only: Proceed with fixes
    
    **Recruitment timeline:**
    
    Week 1: Recruit
    
    - Day 1-2: Post screener (UserTesting, LinkedIn, your email list)
    - Day 3-5: Review responses, select participants
    - Day 6-7: Schedule sessions, send confirmations
    
    Week 2: Test
    
    - Day 1-3: Conduct 6-8 sessions
    - Day 4: Review notes, identify patterns
    - Day 5: Analyze, create report
- Test script and moderation:
    
    **Test script structure (30-45 min session):**
    
    **Introduction (5 min):**
    
    Script:
    "Hi [Name], thanks for joining today! I'm [Your Name], and I'll be guiding you through this session.
    
    Today we're testing a new onboarding experience for a project management tool. I want to emphasize: we're testing the design, not you. There are no wrong answers, and if you have trouble with anything, that's valuable feedback for us.
    
    I'm going to ask you to complete a few tasks while sharing your screen. As you work, please think out loud - tell me what you're looking for, what you're thinking, what's confusing. This helps me understand your experience.
    
    I'll be taking notes, and with your permission, I'd like to record the session for my notes only. Is that okay?
    
    [Get consent]
    
    Do you have any questions before we start?"
    
    **Screen sharing setup (3 min):**
    
    "Great! Let's get you set up. Can you share your screen?
    
    [Wait for screen share]
    
    Perfect, I can see your screen. I'm going to paste a link in the Zoom chat - this is the prototype you'll be using. Go ahead and open that link.
    
    [Send Figma prototype link]
    
    You should see a welcome screen. Can you see that?"
    
    **Think-aloud protocol explanation (2 min):**
    
    "Before we start, let me explain 'thinking aloud.' As you work through the tasks, I'd like you to say out loud what you're thinking, what you're looking for, what you expect to happen. For example, if you're looking for a button, say 'I'm looking for a way to create a project.'
    
    This feels a bit unnatural at first, but it really helps me understand your thought process. I'll remind you if you go quiet.
    
    Let's do a quick practice: Look at this screen and tell me what you think you can do here."
    
    [Participant practices thinking aloud]
    
    **Task 1 (5-8 min):**
    
    "Okay, here's your first task:
    
    [Read task scenario]
    
    'Imagine you're a project manager at a design agency. Your team is looking for a new project management tool. You've decided to try this product. Create an account to get started.'
    
    Go ahead and begin. Remember to think aloud as you work."
    
    [Observe silently, take notes]
    [Only prompt if user goes quiet: "What are you thinking?"]
    [If stuck for 2+ min: "What would you expect to happen here?"]
    
    When task complete:
    "Great. On a scale of 1 to 5, where 1 is very difficult and 5 is very easy, how easy was that task?"
    
    [Note rating]
    
    **Tasks 2-4 (5-8 min each):**
    
    [Repeat for each task]
    
    **Post-test questions (5 min):**
    
    "Thanks for working through those tasks. I have a few final questions:
    
    1. Overall, how would you rate your experience? (1-5 scale: Very difficult to Very easy)
    2. What was the most confusing or frustrating part?
    3. What did you like about the experience?
    4. Is there anything you expected to see that wasn't there?
    5. Any other thoughts or feedback?"
    
    **Wrap-up (2 min):**
    
    "That's all the tasks I have for you. Thank you so much for your time and feedback - this is incredibly helpful for improving the product.
    
    You'll receive your $50 Amazon gift card via email within 24 hours.
    
    Do you have any questions for me?"
    
    **Moderation techniques:**
    
    **Neutral prompting (don't lead):**
    
    Good prompts:
    
    - "What are you thinking?"
    - "What are you looking for?"
    - "What do you expect to happen?"
    - "Tell me more about that"
    
    Bad prompts (leading):
    
    - "Would you click the blue button?" (tells them what to do)
    - "Isn't that easy?" (leading question)
    - "Try clicking on the top menu" (guiding them)
    
    **When participant gets stuck:**
    
    1. Wait 30 seconds (don't jump in immediately)
    2. Ask: "What are you thinking?" (understand their thought process)
    3. If still stuck after 2 min: "What would you expect to see/happen here?"
    4. If still stuck after 3 min: "Let's move to the next task" (mark as failure, note the issue)
    
    Don't: Give them the answer or guide them to success
    
    **When participant goes quiet:**
    
    - Gentle reminder: "Remember to think aloud - what are you looking for?"
    - Ask: "What are you thinking right now?"
    - Don't: Let them work in silence (lose insights)
    
    **When participant asks you questions:**
    
    Participant: "Should I click here?"
    Bad response: "Yes" or "No"
    Good response: "What do you think will happen if you click there?"
    
    Participant: "Is this right?"
    Bad response: "Yes, that's correct"
    Good response: "What makes you think that's right?" or "Go ahead and try it"
    
- Remote usability testing:
    
    **Tools and setup:**
    
    **Zoom (or Google Meet, Teams):**
    
    - Schedule meeting, send calendar invite
    - Enable screen sharing (participant shares their screen)
    - Record session (cloud or local recording)
    - Use chat (send prototype link, paste task scenarios if needed)
    
    **Screen recording:**
    
    - Zoom: "Record" button → "Record to this Computer" or "Cloud"
    - Ensure participant's screen is being recorded (not yours)
    - Test recording before first session (confirm it's working)
    
    **Prototype link:**
    
    - Figma: Share prototype link (Presentation mode)
    - Set to "Can view prototype" (not edit)
    - Test link yourself (ensure it works, loads properly)
    
    **Technical setup checklist:**
    
    Before session:
    
    - [ ]  Test your camera, microphone (participant can see/hear you)
    - [ ]  Test Zoom recording (know how to start/stop)
    - [ ]  Have prototype link ready (copy-pasted in Slack or note)
    - [ ]  Have task scenarios ready (printed or in separate doc)
    - [ ]  Quiet space (no background noise)
    - [ ]  "Do not disturb" mode (no notifications interrupting)
    
    At start of session:
    
    - [ ]  Get recording consent (verbal or written)
    - [ ]  Start recording (Zoom "Record" button)
    - [ ]  Ask participant to share screen
    - [ ]  Send prototype link in chat
    - [ ]  Confirm you can see their screen clearly
    
    **Handling technical issues:**
    
    Screen share not working:
    
    - "Can you click the green 'Share Screen' button at the bottom?"
    - If still not working: "Let's try this - click 'Stop Video' then 'Share Screen'"
    - Last resort: Reschedule (don't waste time troubleshooting)
    
    Prototype won't load:
    
    - "Try refreshing the page"
    - Send backup link (have second link ready)
    - If still fails: Reschedule
    
    Audio/video issues:
    
    - "Can you try reconnecting your headphones?"
    - "Let's both hang up and rejoin the call"
    - As backup: Continue audio-only (not ideal but workable)
- Observation and note-taking:
    
    **What to capture:**
    
    **For each task:**
    
    Task: Create account
    
    Success: ✓ Yes / ✗ No (binary)
    Time: 2:15 (minutes:seconds)
    Errors: 1 (clicked "Skip" thinking it was "Next")
    Clicks: 8 clicks
    Path: Welcome → Clicked "Get Started" → Form → Tried to skip company name → Went back → Filled company name → Submit → Success
    
    Confusion points:
    
    - [1:30] Paused at company name field, said "Is this required?" (no indicator)
    - [2:00] Clicked "Skip" button, confused it with "Next"
    
    Quotes:
    
    - "I'm not sure if company name is required - there's no asterisk"
    - "Oh, 'Skip' means skip this whole setup? I thought it meant next"
    
    Severity: Medium (error recoverable, but caused confusion)
    
    **Note-taking template:**
    
    Participant: P1
    Date: Dec 15, 2024
    Duration: 38 minutes
    
    - -- TASK 1: Create account ---
    Success: ✓
    Time: 2:15
    Errors: 1 (clicked Skip instead of Next)
    Severity: Medium
    Notes:
    - Confused by "Skip" button placement
    - No required field indicators (*)
    - "Is company name required?" [1:30]
    - -- TASK 2: Create project ---
    Success: ✗
    Time: 5:45 (abandoned)
    Errors: 3 (couldn't find template selector, clicked wrong areas)
    Severity: High (task failure)
    Notes:
    - Looked for "New Project" button, couldn't find (actually in top nav)
    - "Where do I create a project?" [0:45]
    - Clicked "Dashboard" thinking it would show project creation
    - Gave up after 5 minutes
    
    **Time tracking:**
    
    Start stopwatch when task begins:
    
    - "Go ahead and begin" → START timer
    - Task completed or abandoned → STOP timer
    
    Tools:
    
    - Stopwatch app on phone
    - Zoom's recording timestamp (note timestamp in notes)
    - Spreadsheet with start/end times
    
    **Critical incidents:**
    
    Moments to flag:
    
    - Errors: Participant clicks wrong thing, goes down wrong path
    - Frustration: Verbal frustration, sighing, "This is confusing"
    - Delight: "Oh, that's nice!" or positive reactions
    - Stuck: Participant stops, silent for 30+ seconds
    - Workarounds: Participant finds unexpected way to complete task
- Analysis methods:
    
    **Quantitative analysis:**
    
    **Task completion rates:**
    
    Formula: (Participants who completed task / Total participants) × 100
    
    Example:
    
    - Task 1 (Create account): 8 out of 8 completed = 100% success rate ✓
    - Task 2 (Create project): 5 out of 8 completed = 62.5% success rate ✗ (Problem!)
    - Task 3 (Invite team): 6 out of 8 completed = 75% success rate ⚠️
    - Task 4 (Find create task): 7 out of 8 completed = 87.5% success rate ✓
    
    Benchmark:
    
    - 90-100%: Excellent (task is usable)
    - 70-89%: Acceptable (minor improvements needed)
    - Below 70%: Problem (major redesign needed)
    
    **Average time on task:**
    
    Calculate average:
    
    - Task 1 times: 2:15, 1:45, 2:30, 2:00, 1:50, 2:20, 2:10, 2:05
    - Average: 2:07 (sum all times, divide by 8)
    
    Identify outliers:
    
    - P3 took 5:45 (abandoned) - why? (note this)
    
    **Error rates:**
    
    Count errors per task:
    
    - Task 1: 6 total errors across 8 participants = 0.75 errors per participant
    - Task 2: 18 total errors across 8 participants = 2.25 errors per participant (High!)
    
    Common errors:
    
    - "Clicked 'Skip' instead of 'Next'" - 5 out of 8 participants (pattern!)
    
    **Qualitative analysis:**
    
    **Identifying usability issues:**
    
    Issue identification framework:
    
    Issue #1: "Skip" button confused with "Next"
    
    - Frequency: 5 out of 8 participants (62.5%)
    - Impact: Caused errors, slowed task completion
    - Severity: Medium (recoverable but frustrating)
    - Location: Account setup screen, bottom-right
    - Evidence:
        - "I thought Skip meant next step" - P1
        - "Skip or next? Not sure which to click" - P4
    - Recommendation: Rename "Skip" to "Skip this step" or remove entirely
    
    Issue #2: "Create Project" button not discoverable
    
    - Frequency: 3 out of 8 participants couldn't find it
    - Impact: Task failure for 37.5% of users
    - Severity: High (critical task failure)
    - Location: Hidden in top navigation
    - Evidence:
        - "Where do I create a project?" - P2, P5, P7
        - All 3 looked in Dashboard area, not top nav
    - Recommendation: Add prominent "Create Project" button on Dashboard
    
    **Severity ratings:**
    
    Severity scale:
    
    - Critical: Prevents task completion, affects all users (fix immediately)
    - High: Causes task failure for some users (fix before launch)
    - Medium: Causes errors but recoverable (fix soon)
    - Low: Minor annoyance, cosmetic (fix if time permits)
    
    Prioritization:
    
    1. Critical issues first (task blockers)
    2. High issues second (major usability problems)
    3. Medium issues third (frustrations, errors)
    4. Low issues last (nice-to-haves)
- Reporting findings:
    
    **Usability test report structure:**
    
    **Executive Summary (1 page):**
    
    Test Overview:
    
    - Tested: New onboarding flow (Figma prototype)
    - Participants: 8 new users (project managers, team leads)
    - Method: Remote moderated usability tests, 30-45 min sessions
    - Date: December 15-17, 2024
    
    Key Findings:
    
    - Overall completion rate: 75% (goal was 90%)
    - Critical issue: "Create Project" button not discoverable (3 task failures)
    - High issue: "Skip" button confused with "Next" (5 errors)
    - Positive: Account creation and team invitation flows worked well
    
    Recommendations:
    
    1. Add prominent "Create Project" CTA on Dashboard (Critical)
    2. Rename "Skip" to "Skip this step" or remove (High)
    3. Add required field indicators (*) to forms (Medium)
    
    **Methodology (1 page):**
    
    Participants:
    
    - 8 participants: 5 project managers, 3 team leads
    - Recruited via [UserTesting.com](http://UserTesting.com)
    - All new users (never used product before)
    - Currently using Asana, Monday, or Trello
    
    Tasks Tested:
    
    1. Create account
    2. Create first project
    3. Invite team members
    4. Find "Create task" button
    
    Metrics:
    
    - Task completion rate (success/failure)
    - Time on task (minutes:seconds)
    - Error rate (number of errors)
    - Satisfaction rating (1-5 scale)
    
    **Detailed Findings (3-5 pages):**
    
    **Finding #1: "Create Project" button not discoverable (Critical)**
    
    Severity: Critical
    Frequency: 3 out of 8 participants (37.5%)
    Impact: Task failure
    
    Description:
    The "Create Project" button is located in the top navigation bar, but 3 participants couldn't find it. All 3 looked in the Dashboard main area, expecting a prominent button or empty state.
    
    Evidence:
    
    - P2: "I don't see where to create a project... I keep looking at the dashboard" [gave up after 5 min]
    - P5: "There should be a big 'Create Project' button here [pointing to Dashboard]"
    - P7: "Is it in settings? Where would I... oh, I give up"
    
    Recommendation:
    Add a prominent "Create your first project" button on the empty Dashboard state. Keep the top nav button as well (secondary access point).
    
    [Screenshot showing current design and suggested fix]
    
    **Finding #2: "Skip" button confused with "Next" (High)**
    
    Severity: High
    Frequency: 5 out of 8 participants (62.5%)
    Impact: Errors, confusion, backtracking
    
    Description:
    The account setup flow has a "Skip" button (to skip company name field) positioned where users expect a "Next" button. 5 participants clicked "Skip" thinking it advanced to the next step.
    
    Evidence:
    
    - P1: "Skip... does that mean next or skip the whole thing?"
    - P4: "I'll click Skip... oh wait, that skipped the setup entirely!"
    
    Recommendation:
    Rename "Skip" to "Skip this step" for clarity, or remove entirely if company name is important.
    
    [Screenshot and proposed redesign]
    
    **Quantitative Summary Table:**
    
    | Task | Completion Rate | Avg Time | Errors | Satisfaction |
    | --- | --- | --- | --- | --- |
    | Create account | 100% (8/8) | 2:07 | 0.75 | 4.2/5 |
    | Create project | 62.5% (5/8) | 4:23 | 2.25 | 2.8/5 |
    | Invite team | 75% (6/8) | 3:15 | 1.5 | 3.5/5 |
    | Find create task | 87.5% (7/8) | 1:45 | 0.5 | 4.0/5 |
    
    **Prioritized Recommendations:**
    
    Critical (Fix before launch):
    
    1. Add "Create Project" button to Dashboard empty state
    
    High (Fix before launch):
    2. Rename "Skip" to "Skip this step" or remove
    3. Add required field indicators (*) to all forms
    
    Medium (Fix if time):
    4. Improve role selection labels (some confusion)
    5. Add tooltips to explain optional fields
    
    Low (Future improvements):
    6. Consider animated onboarding tooltips
    7. Add progress indicator for multi-step flows
    
    **Appendix:**
    
    - Individual participant summaries
    - Full task completion data
    - Screenshots of all issues
    - Video clips (highlight reel)
</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ 5 participants is enough: Jakob Nielsen's research shows 5 users find 85% of usability problems - diminishing returns after 8
✦ Common mistake: Helping participants succeed - your job is to observe struggles, not guide them to success
✦ Best with: Claude (excellent at creating test scripts, task scenarios, analysis frameworks), ChatGPT (good for moderation techniques)
✦ Remix it: "Create usability test plan for [feature] - test objectives, task scenarios, success metrics, moderation script"
✦ Pro move: Ask "Analyze my usability test results - calculate completion rates, identify patterns, prioritize issues by severity"

</aside>

---

# Recipe #62: Plan and Run Usability Tests

Category: Bonus — User Research  |  ⏱️ 40-50 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You need to test whether users can successfully complete tasks in your product - validating designs before development, identifying usability issues, testing prototypes or live products, or measuring task success rates and time-on-task. Your team is launching features without testing, users struggle with the interface, or you need evidence-based insights about specific usability problems.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers skip usability testing or do it poorly - launching designs without validation (assuming users will understand, finding issues only after release), testing with team members instead of real users (internal testing misses real problems), giving participants too much help (guiding them through tasks instead of observing struggles), testing without clear tasks or metrics (vague "use the product" instead of specific scenarios), or analyzing subjectively (relying on opinions instead of observed behaviors). Teams ship products with critical usability flaws, users can't complete basic tasks, support tickets spike after launch, or redesigns are needed post-release. You need systematic usability testing - clear test objectives (what to validate, what tasks to test), realistic task scenarios (specific, measurable goals), proper moderation (think-aloud protocol, minimal interference, neutral prompting), quantitative metrics (success rate, time-on-task, errors), and rigorous analysis (severity ratings, actionable recommendations, prioritized fixes).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide end-to-end usability testing guidance: test planning (objectives, task scenarios, success metrics), execution (recruitment screeners, moderation scripts with think-aloud protocols, observation methods), and analysis (completion rates, error identification, severity ratings, prioritized findings reports with evidence and recommendations).

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Usability Testing Specialist focusing on task-based testing, observational research, and identifying interface usability problems.

I'm planning usability tests for [Product/Feature] to validate [Design/Prototype] by testing [Key Tasks] with [Target Users] to identify usability issues and measure task success.

[OPTIONAL: Attach prototype, current product, or designs to test]

Usability testing requirements:
- Test objectives: [e.g., Validate new checkout flow, Test onboarding usability, Find navigation problems]
- What to test: [e.g., High-fidelity Figma prototype, Live beta product, Low-fidelity wireframes]
- Key tasks: [e.g., Create account, Complete purchase, Find settings, Add team member]
- Target users: [e.g., E-commerce shoppers, First-time users, Project managers]
- Number of participants: [e.g., 5-8 participants per round, Multiple rounds for iteration]

Current testing problems:
- [Problem 1: e.g., No testing done - designs go straight to development, issues found post-launch]
- [Problem 2: e.g., Testing with team - colleagues complete tasks easily, miss real user struggles]
- [Problem 3: e.g., Too much help - moderator guides participants, doesn't observe true behavior]
- [Problem 4: e.g., No clear tasks - vague "explore the product" instead of specific scenarios]
- [Problem 5: e.g., Subjective analysis - "I think users liked it" instead of measured success rates]

Team context: [Testing experience, timeline, budget, remote vs in-person, iteration cycles]

Please provide:
1. Test planning (objectives, what to test, tasks to validate, success metrics)
2. Task scenario creation (realistic scenarios, measurable goals, task wording)
3. Participant recruitment (screeners, number needed, representative users)
4. Test script and moderation (introduction, think-aloud protocol, prompting techniques)
5. Remote usability testing (tools, screen recording, technical setup)
6. Observation and note-taking (what to capture, critical incidents, time tracking)
7. Analysis methods (success rates, error identification, severity ratings)
8. Reporting findings (usability issues, recommendations, prioritization)

Consider: [Constraints - e.g., Limited budget, Remote testing only, Quick validation needed, Prototype vs live product]
```

💡 What to customize:

- [Product/Feature] = What you're testing
- [Design/Prototype] = Prototype or live product
- [Key Tasks] = Critical user tasks to validate
- [Target Users] = Who should test it
- [Test objectives] = What you want to learn
- [Problems 1-5] = Current testing issues
- Attach prototype or product to test
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Usability Testing Specialist focusing on task-based testing, observational research, and identifying interface usability problems.

I'm planning usability tests for our SaaS Project Management Tool's new onboarding flow to validate the redesigned first-time user experience by testing account setup, first project creation, and team invitation tasks with new users (never used our product) to identify usability issues and measure whether users can successfully complete onboarding.

[User would attach Figma prototype of new onboarding flow]

Usability testing requirements:
- Test objectives:
  - Validate new onboarding flow (redesigned to reduce time-to-value)
  - Identify points of confusion or friction (where users get stuck)
  - Measure task completion rates (can users complete onboarding independently?)
  - Test specific interactions (dropdowns, multi-step forms, tooltips)
  - Compare to current onboarding (baseline: 60% completion rate, want 80%+)
- What to test:
  - High-fidelity Figma prototype (interactive, realistic data, full flows)
  - 5 screens: Welcome → Create account → Create first project → Invite team → Dashboard
  - Not live product (pre-development validation)
- Key tasks:
  - Task 1: Create account (name, email, password, company name)
  - Task 2: Create first project (project name, description, due date, template selection)
  - Task 3: Invite team members (email addresses, assign roles)
  - Task 4: Navigate to dashboard and find "Create task" button
  - Success criteria: Complete all 4 tasks in under 10 minutes with no critical errors
- Target users:
  - New users (never used our product before)
  - Project managers or team leads (target persona)
  - Currently using competitor tools (Asana, Monday, Trello)
  - Not: Existing users (familiar with product, biased)
- Number of participants:
  - 6-8 participants (enough to identify 85% of usability issues per Jakob Nielsen)
  - Mix: 3-4 project managers, 2-3 team leads
  - Diverse: Different industries, company sizes

Current testing problems:
- No usability testing done previously - Previous onboarding launched without testing, 60% abandon during onboarding, major usability issues discovered post-launch (too late)
- Only internal testing - Team members tested new flow, all completed successfully, gave false confidence, missed that internal users have product knowledge new users lack
- Too much moderator help - Previous tests: moderator said "Click here to continue" when users paused, invalidated findings (users can't succeed without help in real world)
- Vague tasks - Previous tests: "Try to set up your account" too broad, didn't reveal specific issues, couldn't measure success objectively
- No metrics or analysis - Previous tests: "Users seemed to like it" subjective, no completion rates, no time measurements, no severity ratings for issues found

Team context:
- Testing experience: Limited (designer has done 2 usability tests before, others new)
- Timeline: 2 weeks (recruit week 1, test week 2, analyze and present week 2)
- Budget: $400 for incentives ($50 per participant)
- Remote testing: All remote via Zoom (participants across US)
- Iteration: Results will inform prototype revisions before development
- Stakeholders: Product manager needs evidence for go/no-go decision

Please provide:
1. Test planning (objectives, what to test, tasks to validate, success metrics)
2. Task scenario creation (realistic scenarios, measurable goals, task wording)
3. Participant recruitment (screeners, number needed, representative users)
4. Test script and moderation (introduction, think-aloud protocol, prompting techniques)
5. Remote usability testing (tools, screen recording, technical setup)
6. Observation and note-taking (what to capture, critical incidents, time tracking)
7. Analysis methods (success rates, error identification, severity ratings)
8. Reporting findings (usability issues, recommendations, prioritization)

Consider: Remote Zoom testing. Figma prototype (not live product). 6-8 participants. 30-45 min sessions. Need completion rates and time metrics. Testing with new users (never seen product). Findings need to inform go/no-go decision. Must identify critical issues before development starts.
```

</aside>

---

- "Create usability test script for onboarding flow - introduction, 4 task scenarios, think-aloud protocol, post-test questions"
- "Write task scenarios for testing checkout flow - realistic scenarios with context, measurable success criteria"
- "Analyze usability test data from 8 participants - calculate completion rates, identify top issues, severity ratings"
- "Create usability findings report - executive summary, detailed findings with evidence, prioritized recommendations"

</callout>

---

<aside>
💎

**EXAMPLE OUTPUT**

![62_Example_Output.png](62_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #61: [Conduct User Interviews](R-61%20Conduct%20User%20Interviews%2058d67ccc6bef8373bbd40159926507e4.md)
→ Recipe #63: [Research Surveys and Screeners](R-63%20Research%20Surveys%20and%20Screeners%2075767ccc6bef8338adab01eca04d1e57.md)
→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)

</aside>