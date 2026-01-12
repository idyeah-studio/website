# R-63: Research Surveys and Screeners

# Recipe #63: Research Surveys and Screeners

Category: Bonus — User Research  |  ⏱️ 35-45 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You need to collect feedback from many users at scale - validating assumptions with quantitative data, recruiting qualified participants for interviews or usability tests, measuring satisfaction or feature preferences, or gathering demographic information. Your team needs data to support design decisions, wants to reach more users than interviews allow, or needs to screen participants before research sessions.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create poor surveys - asking leading or biased questions (confirming what they want to hear, not learning truth), making surveys too long (20+ questions, high abandonment), using confusing or ambiguous questions (respondents unsure how to answer), missing key response options (forcing users into wrong categories), or analyzing results incorrectly (cherry-picking data, ignoring statistical significance). Teams get low response rates, biased data that misleads decisions, unusable responses from wrong participants, or surveys that waste users' time without yielding actionable insights. You need systematic survey design - clear research objectives (what you want to learn), appropriate question types (multiple choice, rating scales, open-ended), unbiased wording (neutral language, avoid leading), logical flow (easy to hard, grouped topics), effective screeners (qualifying right participants), and proper analysis (quantitative summaries, qualitative themes, statistical confidence).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide survey design principles (optimal length, question flow, avoiding bias), question writing techniques (neutral wording, complete options, single focus), question type guidance (multiple choice, rating scales, open-ended, matrix, ranking), screener design for recruiting qualified participants, survey structure and distribution strategies, response analysis methods (quantitative summaries, qualitative coding), and common survey mistakes to avoid. You'll get actionable frameworks to create short, unbiased surveys that yield high-quality, statistically valid data.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a Survey Research Specialist focusing on questionnaire design, screener creation, unbiased question writing, and quantitative data collection.

I'm creating a survey/screener for [Purpose] to [Research Goal] by reaching [Target Audience] and collecting [Data Types] to inform design decisions.

[OPTIONAL: Attach draft survey questions or research objectives]

Survey requirements:
- Survey purpose: [e.g., Measure feature satisfaction, Validate concept, Recruit interview participants, Understand user needs]
- Research goals: [e.g., Which features are most valuable, Pain points in current workflow, Demographic distribution]
- Target audience: [e.g., Current users, Potential customers, Specific user segment, General population]
- Distribution method: [e.g., Email to user base, In-app survey, Social media, Paid panel]
- Expected responses: [e.g., 100+ responses, 500+ for statistical significance, 50 qualified participants]

Current survey problems:
- [Problem 1: e.g., Leading questions - "Don't you love this feature?" biases responses]
- [Problem 2: e.g., Too long - 30+ questions, 80% abandonment rate, users give up halfway]
- [Problem 3: e.g., Confusing questions - respondents don't understand what's being asked]
- [Problem 4: e.g., Missing answer options - "Other" selected by 40%, options don't cover real scenarios]
- [Problem 5: e.g., Poor screener - recruiting wrong participants, wasting interview time]

Team context: [Survey experience, timeline, budget for incentives/tools, analysis capabilities]

Please provide:
1. Survey design principles (length, question types, flow, avoiding bias)
2. Question writing techniques (clear wording, neutral language, complete options)
3. Question types and when to use (multiple choice, rating scales, open-ended, matrix, ranking)
4. Screener questionnaire design (qualifying vs disqualifying questions, logic jumps)
5. Survey flow and structure (introduction, body, demographics, thank you)
6. Distribution strategies (email, in-app, social, panels, incentives)
7. Response analysis (quantitative summaries, qualitative coding, statistical confidence)
8. Common survey mistakes (and how to avoid them)

Consider: [Constraints - e.g., Limited responses, Need quick turnaround, Budget constraints, Mobile-friendly required]
```

💡 What to customize:

- [Purpose] = Survey or screener purpose
- [Research Goal] = What you want to learn
- [Target Audience] = Who should respond
- [Data Types] = Quantitative, qualitative, or both
- [Distribution method] = How you'll reach users
- [Problems 1-5] = Current survey issues
- Attach draft survey or research goals
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a Survey Research Specialist focusing on questionnaire design, screener creation, unbiased question writing, and quantitative data collection.

I'm creating two surveys: (1) A satisfaction survey to measure how users feel about our new AI task assistant feature and identify improvement areas, and (2) A screener to recruit qualified participants for follow-up interviews by reaching our current user base (10,000 active users) and collecting satisfaction ratings, feature usage data, and pain points to prioritize roadmap and recruit 8 interview participants.

[User would attach draft survey with current questions]

Survey requirements:
- Survey purpose:
  - Survey 1 (Satisfaction): Measure AI assistant satisfaction, identify top issues, understand usage patterns
  - Survey 2 (Screener): Recruit 8 qualified participants for 60-min interviews (must use AI assistant regularly, willing to talk)
- Research goals:
  - Quantitative: Overall satisfaction score (1-5), feature usage frequency, top pain points (ranked)
  - Qualitative: Why satisfied/unsatisfied, what improvements needed, specific use cases
  - Recruitment: Identify users who use AI assistant 3+ times/week, have strong opinions (positive or negative), available for 60-min call
- Target audience:
  - Current users who have tried AI assistant (released 2 months ago, 2,000 out of 10,000 users tried it)
  - Not: Users who haven't tried it (separate survey), churned users, enterprise admins
- Distribution method:
  - Email: Send to 2,000 users who've used AI assistant
  - In-app banner: Show to active users for 1 week
  - Incentive: $10 Amazon gift card for completing satisfaction survey, $75 for interview
- Expected responses:
  - Satisfaction survey: 300-500 responses (15-25% response rate)
  - Screener: 50 qualified candidates, select best 8 for interviews

Current survey problems:
- Leading questions in previous surveys - "How much do you love the AI assistant?" assumes they love it, biases toward positive responses, missed real issues
- Surveys too long - Previous survey had 35 questions, took 15 minutes, 75% abandonment, most users quit after 10 questions
- Confusing rating scales - Mixed 1-5 scale (1=best) with 1-10 scale (10=best) in same survey, respondents confused which way to rate
- Missing answer options - Asked "What PM tool did you use before?" with only 4 options, 60% selected "Other" and wrote in answers, options incomplete
- Poor screener design - Previous screener didn't qualify well, recruited participants who barely used feature, wasted interview time with irrelevant feedback
- No analysis plan - Collected 400 responses but didn't know how to analyze, cherry-picked individual responses, no statistical summaries

Team context:
- Survey experience: Limited (designer has used Google Forms, never designed professional survey)
- Timeline: 2 weeks (design and send week 1, collect responses week 1-2, analyze week 2)
- Budget: $3,000 for incentives ($10 × 300 survey respondents, $75 × 8 interview participants)
- Tools: Google Forms (free) or Typeform ($35/month, nicer UX)
- Analysis: Excel/Sheets (basic analysis, calculate averages, frequencies)
- Goal: Get statistically significant satisfaction data + recruit 8 qualified interview participants

Please provide:
1. Survey design principles (length, question types, flow, avoiding bias)
2. Question writing techniques (clear wording, neutral language, complete options)
3. Question types and when to use (multiple choice, rating scales, open-ended, matrix, ranking)
4. Screener questionnaire design (qualifying vs disqualifying questions, logic jumps)
5. Survey flow and structure (introduction, body, demographics, thank you)
6. Distribution strategies (email, in-app, social, panels, incentives)
7. Response analysis (quantitative summaries, qualitative coding, statistical confidence)
8. Common survey mistakes (and how to avoid them)

Consider: Email + in-app distribution. 2,000 target users. Need 300+ responses for statistical confidence. Survey must be under 10 minutes (max 15 questions). Mobile-friendly (60% mobile users). Screener must identify 8 qualified interview candidates. $10 incentive for survey, $75 for interviews. Google Forms or Typeform. Basic Excel analysis.
```

</aside>

---

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Keep surveys under 10 minutes: Each additional minute increases abandonment - aim for 5-10 questions max
✦ Common mistake: Leading questions like "How much do you love X?" - always use neutral language
✦ Best with: Claude (excellent at writing unbiased questions, survey structure), ChatGPT (good at question variations)
✦ Remix it: "Create satisfaction survey for [feature] - 10 questions max, rating scales and open-ended, unbiased"
✦ Pro move: Ask "Analyze my survey responses - calculate satisfaction scores, frequency counts, identify top themes"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Create satisfaction survey for AI assistant feature - 12 questions, rating scales, multiple choice, open-ended"
- "Write screener questionnaire to recruit 8 interview participants - qualifying criteria, contact info, availability"
- "Review my survey questions for bias - identify leading questions, double-barreled questions, incomplete options"
- "Analyze survey responses - 400 responses, calculate satisfaction score, frequency counts, code open-ended themes"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![63_Example_Output.png](63_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #61: [Conduct User Interviews](R-61%20Conduct%20User%20Interviews%2058d67ccc6bef8373bbd40159926507e4.md)
→ Recipe #62: [Plan and Run Usability Tests](R-62%20Plan%20and%20Run%20Usability%20Tests%2037867ccc6bef83a9aefe011022174a00.md)
→ Recipe #07: [Find Hidden User Dead-Ends](R-07%20Find%20Hidden%20User%20Dead-Ends%202d667ccc6bef806b890bc2048285b3fa.md)

</aside>