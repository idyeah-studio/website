# R-71: Design AI Chat Interfaces

# Recipe #71: Design AI Chat Interfaces

Category: Bonus — Content & Copy  |  ⏱️ 35-45 min  |  🌶️🌶️🌶️ Advanced

<aside>
🎯

**USE WHEN:**

You're designing AI chatbot interfaces, conversational AI products, or AI-powered assistants - handling chat message layouts, streaming responses, prompt input patterns, regenerating responses, multimodal inputs (text, images, files), conversation history, error states, or creating helpful AI interactions. Your current AI chat feels clunky, doesn't handle streaming well, has poor error states, or lacks essential AI-specific patterns.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers create poor AI chat interfaces - treating AI like human chat (missing streaming indicators, no regeneration, can't edit prompts), unclear who's talking (AI vs user messages look similar), poor streaming UX (text appears character-by-character causing readability issues), no error recovery (AI fails with no retry option), missing context (can't see conversation history, no threading), poor prompt input (tiny text box, no multimodal support, unclear what to ask), or ignoring AI-specific needs (no copy response, no thumbs up/down feedback, can't stop generation). Teams build AI products that feel frustrating, confusing, or unhelpful compared to ChatGPT/Claude. You need systematic AI chat design - clear visual hierarchy (distinct AI vs user messages), streaming patterns (smooth typing indicators, readable chunks), prompt optimization (examples, suggestions, multimodal input), error handling (retry, regenerate, explain failures), conversation management (history, threading, context), and AI-specific controls (stop, regenerate, edit, copy, feedback).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide message layout patterns (clear AI vs user distinction, avatars, timestamps, readable width), streaming UX (word-by-word or chunk streaming, typing indicators, smooth auto-scroll, stop generation), prompt input design (expandable textarea, multimodal support, suggestions, history), AI-specific controls (regenerate, edit prompt, copy, share, stop), error handling (helpful messages, retry buttons, rate limit explanations), conversation management (history, threading, search, export), feedback mechanisms (thumbs up/down, report issues), and multimodal patterns (document upload, source citations, code blocks, tables). You'll get systematic guidance to create polished, user-friendly AI chat interfaces.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as an AI Chat Interface Design Specialist focusing on conversational AI patterns, streaming UX, prompt design, and AI-specific interactions.

I'm designing an AI chat interface for [AI Product Type] to help users [Primary Use Case] by implementing [Chat Patterns] while optimizing for [AI-Specific Needs] and handling [Common AI Challenges].

[OPTIONAL: Attach current AI chat designs or reference products like ChatGPT, Claude, Gemini]

AI chat interface requirements:
- AI product type: [e.g., AI assistant, Customer support bot, Code assistant, Creative writing AI, Research assistant]
- Primary use cases: [e.g., Ask questions, Generate content, Analyze documents, Write code, Research topics]
- AI capabilities: [e.g., Text generation, Multimodal (text + images), File analysis, Code execution, Web search]
- Platform: [e.g., Web app, Mobile app, Embedded widget, Desktop app]
- User expertise: [e.g., General consumers, Professionals, Developers, Non-technical users]

Current AI chat problems:
- [Problem 1: e.g., Poor streaming - text appears character-by-character, hard to read, janky scrolling]
- [Problem 2: e.g., Unclear messages - AI and user messages look similar, can't distinguish who said what]
- [Problem 3: e.g., No regeneration - AI gives bad response, no way to retry or get different answer]
- [Problem 4: e.g., Bad error handling - AI fails, shows generic error, no retry, conversation stuck]
- [Problem 5: e.g., Poor prompt input - small text box, no file upload, no prompt suggestions, unclear what to ask]

Team context: [AI product maturity, streaming implementation, model capabilities, budget for AI features]

Please provide:
1. Message layout and visual hierarchy (AI vs user messages, avatars, timestamps, clear distinction)
2. Streaming and typing indicators (smooth streaming, readable chunks, typing animation, scroll handling)
3. Prompt input patterns (expandable input, multimodal support, suggestions, examples, prompt history)
4. AI-specific controls (regenerate, stop generation, edit prompt, copy response, share conversation)
5. Error handling and recovery (AI failures, rate limits, retry patterns, helpful error messages)
6. Conversation management (history, threading, branches, search conversations, export)
7. Feedback and improvement (thumbs up/down, report issues, flag incorrect responses)
8. Multimodal patterns (image upload, file analysis, code blocks, tables, charts in responses)

Consider: [Constraints - e.g., Streaming latency, Mobile-first, Rate limits, Token costs, Offline fallback needed]
```

💡 What to customize:

- [AI Product Type] = Assistant, chatbot, code helper, etc.
- [Primary Use Case] = What users do with AI
- [Chat Patterns] = Streaming, messages, input
- [AI-Specific Needs] = Regenerate, stop, feedback
- [Common AI Challenges] = Errors, streaming, prompts
- [Problems 1-5] = Current AI chat issues
- Attach AI chat designs or reference ChatGPT/Claude
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as an AI Chat Interface Design Specialist focusing on conversational AI patterns, streaming UX, prompt design, and AI-specific interactions.

I'm designing an AI chat interface for a Research Assistant AI (helps users research topics, analyze documents, summarize content, answer questions with sources) to help users conduct research efficiently by implementing streaming message responses, multimodal input (text + document upload), source citations, and conversation threading while optimizing for readable streaming, prompt suggestions, document analysis display, and citation UI and handling streaming failures, rate limits, large document processing, and conversation context management.

[User would attach current AI chat designs - basic chat UI that doesn't handle AI-specific patterns well]

AI chat interface requirements:
- AI product type: Research Assistant AI (academic research, business research, content analysis)
- Primary use cases:
  - Ask research questions (get answers with citations)
  - Upload documents (PDFs, papers, articles) for analysis
  - Summarize long content
  - Compare multiple sources
  - Generate research reports
- AI capabilities:
  - Text generation (streaming responses)
  - Document analysis (PDF, DOCX upload and processing)
  - Web search integration (find and cite sources)
  - Citation generation (academic format)
  - Long context (analyze 100+ page documents)
- Platform: Web app (desktop-focused, some mobile usage)
- User expertise: Students, researchers, professionals (varying technical skills)

Current AI chat problems:
- Poor streaming UX - AI response streams character-by-character (t-h-e-n t-h-i-s), text jumps around as it types, hard to read while generating, auto-scroll janky (fights user scrolling), can't read response until fully generated, causes motion sickness for some users, paragraph breaks appear mid-sentence
- Unclear message distinction - AI messages and user messages look too similar (both white bubbles, similar styling), users confused who said what when scrolling back, no clear visual hierarchy, especially bad in long conversations, avatars too small/subtle, timestamps missing, quoted sources look like AI's own words
- No regeneration or retry - AI gives incorrect answer or unhelpful response, no way to regenerate different answer, no "try again" button, users have to ask same question again (wastes tokens), can't go back and branch conversation, stuck with bad response, frustrating when AI misunderstands prompt
- Bad error handling - AI hits rate limit (shows "Error: 429 Too Many Requests" - technical jargon users don't understand), document upload fails (no explanation why, just "Error"), web search timeout (generic error, no retry), streaming cuts off mid-sentence (no indication it failed), conversation becomes unusable, no clear next steps
- Poor prompt input - Small single-line text box (like SMS input, not suitable for detailed research questions), no file upload button visible (users don't know they can upload documents), no prompt suggestions or examples (users don't know what to ask), can't edit previous prompt (typos mean starting over), no template prompts for common research tasks, feels intimidating for new users
- No source/citation display - AI mentions sources but doesn't link them, citations mixed into paragraph text (hard to verify), can't click to see source, no visual distinction for quoted text vs AI analysis, users can't fact-check, academic users need proper citation format
- Poor document analysis UI - Upload PDF, AI processes it, but no indication of what document is being referenced, can't see document while chatting (have to remember what was uploaded), multi-document conversations confusing (which doc is AI referencing?), no page numbers in citations, can't jump to specific section AI is discussing

Team context:
- Product maturity: MVP launched, user feedback says "confusing", "hard to use", "doesn't feel polished"
- Streaming: Using Server-Sent Events (SSE) for streaming, can implement word-by-word or chunk streaming
- Model: GPT-4 with 128K context, can handle long documents but expensive
- Capabilities: Web search (Bing API), PDF parsing (PyMuPDF), citation generation
- User feedback: "Hard to read while AI is typing", "Can't tell AI from my messages", "Wish I could regenerate bad answers"
- Inspiration: Users compare to ChatGPT, Claude, Perplexity (expect similar UX quality)
- Timeline: 6 weeks to improve AI chat UX

Please provide:
1. Message layout and visual hierarchy (AI vs user messages, avatars, timestamps, clear distinction)
2. Streaming and typing indicators (smooth streaming, readable chunks, typing animation, scroll handling)
3. Prompt input patterns (expandable input, multimodal support, suggestions, examples, prompt history)
4. AI-specific controls (regenerate, stop generation, edit prompt, copy response, share conversation)
5. Error handling and recovery (AI failures, rate limits, retry patterns, helpful error messages)
6. Conversation management (history, threading, branches, search conversations, export)
7. Feedback and improvement (thumbs up/down, report issues, flag incorrect responses)
8. Multimodal patterns (image upload, file analysis, code blocks, tables, charts in responses)

Consider: Research assistant (academic/business). Document upload (PDFs, papers). Source citations critical. Streaming must be readable. Desktop-focused (but mobile support). Long conversations (research sessions). Rate limits (expensive model). Professional users (need polished UX).
```

</aside>

---

<aside>
👩‍🍳

**CHEF’S TIPS**

✦ Stream words not characters: Word-by-word streaming is smooth and readable, character-by-character is janky
✦ Common mistake: AI and user messages look similar - use distinct colors, alignment, and avatars for clarity
✦ Best with: Claude (excellent at conversational UX patterns, AI-specific features), ChatGPT (good for streaming examples)
✦ Remix it: "Design AI chat interface - streaming messages, regenerate, multimodal input, source citations, error handling"
✦ Pro move: Ask "Audit my AI chat UX - check streaming smoothness, message clarity, error states, AI-specific controls"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design AI message streaming - smooth word-by-word animation, auto-scroll handling, stop generation button"
- "Create prompt input interface - expandable textarea, file upload, prompt suggestions, multimodal support"
- "Design AI error handling - rate limits, streaming failures, upload errors with helpful messages and retry"
- "Design source citation UI - inline citations, reference list, clickable sources, academic format support"
</aside>

---

<aside>
💎

**EXAMPLE OUTPUT**

![71_Example_Output.png](71_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**
→ Recipe #69: [Write Better UX Copy](R-69%20Write%20Better%20UX%20Copy%202d867ccc6bef808592b4c0f3341bdd42.md)
→ Recipe #41: [Design Alerts](R-41%20Design%20Alerts%202d767ccc6bef80cfb82fd8f83c76b743.md)
→ Recipe #40: [Design Better Modals](R-40%20Design%20Better%20Modals%202d767ccc6bef800d9012d412a0122f53.md)

</aside>