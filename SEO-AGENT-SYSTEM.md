# Pennywise SEO Agent System - Complete A-Z Documentation

> **Version:** 1.0
> **Last Updated:** January 2026
> **Status:** Planning & Design Phase

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [System Architecture](#2-system-architecture)
3. [LLM Strategy & Claude Integration](#3-llm-strategy--claude-integration)
4. [Conversation Memory System](#4-conversation-memory-system)
5. [SEO Capabilities](#5-seo-capabilities)
6. [Content Creation Framework](#6-content-creation-framework)
7. [Telegram Bot Interface](#7-telegram-bot-interface)
8. [Data Storage & Persistence](#8-data-storage--persistence)
9. [Implementation Roadmap](#9-implementation-roadmap)
10. [Cost Analysis](#10-cost-analysis)
11. [Security Considerations](#11-security-considerations)
12. [Future Enhancements](#12-future-enhancements)

---

## 1. Executive Summary

### 1.1 Vision

Build a complete, autonomous SEO agent accessible via Telegram that functions as a professional SEO employee. The agent should:

- Create high-ranking, SEO-optimized blog posts
- Manage the full content lifecycle (draft -> review -> approve -> publish)
- Conduct keyword research and competitor analysis
- Track rankings and suggest content improvements
- Remember all past interactions and content created
- Understand natural language without rigid commands

### 1.2 Key Design Principles

1. **Conversational Intelligence**: The bot should understand context and intent, not just commands
2. **Memory Persistence**: Never forget past content, decisions, or preferences
3. **Confirmation-Based Actions**: Destructive actions require explicit confirmation
4. **Cost Efficiency**: Prioritize Claude Pro subscription over API costs where possible
5. **Incremental Autonomy**: Start reactive, gradually add proactive suggestions

### 1.3 User Experience Goals

- Say "delete it" after previewing a draft, and the bot understands "it"
- Ask "what did we post last month?" and get accurate answers
- Request "create a post about budgeting" and receive SEO-optimized content
- Natural conversation flow without rigid syntax requirements

---

## 2. System Architecture

### 2.1 High-Level Architecture

```
+------------------+     +-------------------+     +------------------+
|                  |     |                   |     |                  |
|  Telegram User   |<--->|  Telegram Bot     |<--->|  Claude Code     |
|  (Gregor)        |     |  (Python)         |     |  (CLI/SDK)       |
|                  |     |                   |     |                  |
+------------------+     +-------------------+     +------------------+
                               |                          |
                               v                          v
                    +-------------------+      +-------------------+
                    |                   |      |                   |
                    |  Groq LLM         |      |  Claude Pro       |
                    |  (Intent Router)  |      |  (Content Gen)    |
                    |                   |      |                   |
                    +-------------------+      +-------------------+
                               |
                               v
         +--------------------------------------------------+
         |                                                  |
         |              Memory & Data Layer                 |
         |                                                  |
         |  +-------------+  +-------------+  +-----------+ |
         |  | Conversation|  | Content     |  | SEO       | |
         |  | History     |  | Database    |  | Data      | |
         |  +-------------+  +-------------+  +-----------+ |
         |                                                  |
         +--------------------------------------------------+
```

### 2.2 Component Overview

| Component | Technology | Purpose |
|-----------|------------|---------|
| Telegram Interface | python-telegram-bot | User communication |
| Intent Router | Groq (Llama 3.3 70B) | Understand user intent, route to actions |
| Content Generator | Claude Code CLI | Generate blog posts using Claude Pro subscription |
| Memory System | JSON + SQLite | Persist conversations and content history |
| SEO Tools | Python + APIs | Keyword research, ranking checks |
| Website | Next.js/Vite | Publish and display blog content |

### 2.3 Data Flow

1. **User sends message** -> Telegram Bot receives it
2. **Bot adds context** -> Recent messages + relevant memories
3. **Groq analyzes intent** -> Determines action needed
4. **Action executed**:
   - Simple actions (list, status) -> Bot handles directly
   - Content creation -> Delegates to Claude Code CLI
   - Confirmations -> Returns to user for approval
5. **Response sent** -> User sees result
6. **Memory updated** -> Conversation and actions logged

---

## 3. LLM Strategy & Claude Integration

### 3.1 Dual-LLM Architecture

We use two LLMs for different purposes:

#### Groq (Llama 3.3 70B) - Intent Router
- **Role**: Fast, cheap intent classification and conversation handling
- **Cost**: Free tier (generous limits)
- **Speed**: ~200ms response time
- **Use Cases**:
  - Understanding user intent
  - Routing to appropriate actions
  - Simple Q&A about system status
  - Conversation management

#### Claude (via Claude Code CLI) - Content Generator
- **Role**: High-quality content creation
- **Cost**: Uses Gregor's Claude Pro/Max subscription ($100/month)
- **Quality**: Best-in-class writing
- **Use Cases**:
  - Writing blog posts
  - SEO optimization
  - Complex analysis
  - Research tasks

### 3.2 Claude Code CLI Integration

**Key Discovery**: Claude Code CLI can be used with a Claude Pro/Max subscription, not just API billing. This is the most cost-effective approach.

**Setup Requirements**:
```bash
# Authenticate Claude Code (one-time)
claude

# Bot can then call Claude via subprocess
subprocess.run(['claude', '-p', prompt], cwd=working_dir)
```

**Integration Options**:

| Option | Pros | Cons |
|--------|------|------|
| Direct subprocess | Simple, uses subscription | Runs only when computer is on |
| linuz90/claude-telegram-bot | Full Telegram integration | More complex setup |
| Claude Code Remote | Works from anywhere | Requires server |

**Recommended Approach**: Start with direct subprocess calls (current setup), migrate to claude-telegram-bot when moving to server.

### 3.3 When to Use Which LLM

```
User Message
     |
     v
+--------------------+
| Groq: Analyze      |
| What does user     |
| want?              |
+--------------------+
     |
     +---> Simple Query (status, list, help)
     |         |
     |         v
     |     Groq handles directly
     |
     +---> Content Creation (draft, post)
     |         |
     |         v
     |     Claude Code CLI
     |
     +---> SEO Research (keywords, rankings)
     |         |
     |         v
     |     Python tools + Groq for summary
     |
     +---> Ambiguous Intent
               |
               v
           Ask for clarification
```

---

## 4. Conversation Memory System

### 4.1 The Problem

LLMs are stateless - they don't remember previous conversations. We need to simulate memory by:
1. Storing conversation history
2. Tracking important facts and preferences
3. Injecting relevant context into each request

### 4.2 Memory Architecture

```
+--------------------------------------------------+
|              MEMORY SYSTEM                       |
+--------------------------------------------------+
|                                                  |
|  SHORT-TERM MEMORY (Per Session)                 |
|  +--------------------------------------------+  |
|  | Last 15 messages in full detail            |  |
|  | Current draft being discussed              |  |
|  | Active confirmations pending               |  |
|  +--------------------------------------------+  |
|                                                  |
|  WORKING MEMORY (Injected Context)               |
|  +--------------------------------------------+  |
|  | Summary of older conversation              |  |
|  | Relevant facts from long-term memory       |  |
|  | Current system state (draft count, etc.)   |  |
|  +--------------------------------------------+  |
|                                                  |
|  LONG-TERM MEMORY (Persistent)                   |
|  +--------------------------------------------+  |
|  | All published posts (title, date, keyword) |  |
|  | All drafts ever created                    |  |
|  | User preferences and decisions             |  |
|  | Important facts extracted from convos      |  |
|  +--------------------------------------------+  |
|                                                  |
+--------------------------------------------------+
```

### 4.3 Implementation Strategy

#### Short-Term Memory (JSON in memory)
```python
conversation_buffer = {
    "messages": [
        {"role": "user", "content": "show me the drafts", "timestamp": "..."},
        {"role": "assistant", "content": "...", "action": "list_drafts"},
        # Last 15 messages
    ],
    "current_context": {
        "last_draft_discussed": "budgeting-tips-for-freelancers",
        "pending_confirmation": None,
        "session_start": "2026-01-20T18:00:00"
    }
}
```

#### Long-Term Memory (SQLite Database)
```sql
-- Content tracking (prevents duplicate topics)
CREATE TABLE content_history (
    id INTEGER PRIMARY KEY,
    slug TEXT UNIQUE,
    title TEXT,
    topic TEXT,
    target_keyword TEXT,
    category TEXT,
    status TEXT,  -- draft, approved, published, rejected
    created_at DATETIME,
    published_at DATETIME,
    word_count INTEGER
);

-- Conversation summaries
CREATE TABLE conversation_summaries (
    id INTEGER PRIMARY KEY,
    date DATE,
    summary TEXT,
    key_decisions TEXT,  -- JSON array
    topics_discussed TEXT  -- JSON array
);

-- Important facts/preferences
CREATE TABLE facts (
    id INTEGER PRIMARY KEY,
    fact_type TEXT,  -- preference, decision, info
    content TEXT,
    extracted_from TEXT,
    created_at DATETIME
);
```

### 4.4 Context Injection Strategy

Before each LLM call, we build context:

```python
def build_context():
    context = []

    # 1. System state
    context.append(f"Current drafts: {get_draft_count()}")
    context.append(f"Published posts: {get_published_count()}")

    # 2. Recent conversation (last 15 messages)
    context.append("Recent conversation:")
    for msg in conversation_buffer["messages"][-15:]:
        context.append(f"  {msg['role']}: {msg['content'][:100]}...")

    # 3. Current context
    if conversation_buffer["current_context"]["last_draft_discussed"]:
        context.append(f"Last draft discussed: {conversation_buffer['current_context']['last_draft_discussed']}")

    # 4. Relevant long-term memories
    # Search for memories related to current topic
    relevant_memories = search_memories(current_topic)
    if relevant_memories:
        context.append("Relevant history:")
        for mem in relevant_memories[:5]:
            context.append(f"  - {mem}")

    return "\n".join(context)
```

### 4.5 Preventing Duplicate Content

The `content_history` table ensures we never create duplicate posts:

```python
def check_topic_exists(topic: str) -> bool:
    """Check if we've already written about this topic"""
    # Search by keyword similarity
    existing = db.query("""
        SELECT title, target_keyword, published_at
        FROM content_history
        WHERE topic LIKE ? OR target_keyword LIKE ?
    """, [f"%{topic}%", f"%{topic}%"])

    return existing
```

When creating new content, the agent checks this first and warns:
> "We already published 'Budgeting Tips for Single Moms' on 2026-01-15. Should I create a different angle or update the existing post?"

---

## 5. SEO Capabilities

### 5.1 Capability Overview

| Capability | Priority | Implementation | Status |
|------------|----------|----------------|--------|
| Content Creation | HIGH | Claude Code CLI | Done |
| Draft Management | HIGH | Python/JSON | Done |
| PDF Preview | HIGH | fpdf2 | Done |
| Keyword Research | HIGH | Free APIs + Scraping | Planned |
| Ranking Checks | HIGH | SERP APIs | Planned |
| Competitor Analysis | MEDIUM | Web scraping | Planned |
| Content Suggestions | MEDIUM | Based on gaps | Planned |
| SEO Audit of Drafts | MEDIUM | Checklist-based | Planned |

### 5.2 Keyword Research Implementation

#### Free Tools to Integrate

1. **Google Keyword Planner** (via unofficial methods)
   - Most accurate volume data
   - Requires Google Ads account

2. **Ubersuggest Free Tier**
   - 3 searches/day
   - Good for initial ideas

3. **Backlinko Free Keyword Tool**
   - No login required
   - AI-powered suggestions

4. **Answer The Public**
   - Question-based keywords
   - Great for content ideas

#### Implementation Approach

```python
class KeywordResearcher:
    def __init__(self):
        self.cache = {}  # Cache results to minimize API calls

    def research_keyword(self, seed_keyword: str) -> dict:
        """
        Returns:
        {
            "seed": "budgeting for freelancers",
            "volume": 2400,
            "difficulty": "medium",
            "related_keywords": [
                {"keyword": "freelance budget template", "volume": 880},
                {"keyword": "how to budget irregular income", "volume": 720},
                ...
            ],
            "questions": [
                "how do freelancers budget?",
                "what percentage should freelancers save?",
                ...
            ],
            "competitor_content": [
                {"title": "...", "url": "...", "word_count": 2500},
                ...
            ]
        }
        """
        pass
```

### 5.3 Ranking Check Implementation

#### Recommended API: Serper.dev
- 2,500 free queries
- Fast responses (1-2 seconds)
- Simple integration

```python
import requests

def check_ranking(keyword: str, domain: str = "pennywise-app.com") -> dict:
    """Check where our domain ranks for a keyword"""
    response = requests.get(
        "https://google.serper.dev/search",
        headers={"X-API-KEY": SERPER_API_KEY},
        params={"q": keyword, "num": 100}
    )

    results = response.json()

    for i, result in enumerate(results.get("organic", [])):
        if domain in result.get("link", ""):
            return {
                "keyword": keyword,
                "position": i + 1,
                "url": result["link"],
                "title": result["title"]
            }

    return {"keyword": keyword, "position": None, "not_ranking": True}
```

### 5.4 Competitor Analysis

```python
class CompetitorAnalyzer:
    def analyze_serp(self, keyword: str) -> dict:
        """Analyze top 10 results for a keyword"""
        # Get SERP results
        results = get_serp_results(keyword)

        analysis = {
            "keyword": keyword,
            "top_results": [],
            "avg_word_count": 0,
            "common_topics": [],
            "content_gaps": []
        }

        for result in results[:10]:
            # Scrape and analyze each result
            content = scrape_page(result["url"])
            analysis["top_results"].append({
                "title": result["title"],
                "url": result["url"],
                "word_count": len(content.split()),
                "headings": extract_headings(content),
                "topics_covered": extract_topics(content)
            })

        # Find gaps - topics competitors cover that we don't
        analysis["content_gaps"] = find_gaps(analysis["top_results"])

        return analysis
```

---

## 6. Content Creation Framework

### 6.1 SEO Writing Framework: E-E-A-T + Skyscraper

Our content strategy combines:

1. **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness)
   - First-hand experience and examples
   - Expert-level depth
   - Authoritative sources and citations
   - Trustworthy, accurate information

2. **Skyscraper Technique**
   - Research top-ranking content
   - Create something significantly better
   - More comprehensive, more current, better formatted

3. **PAS Copywriting** (Problem, Agitate, Solution)
   - Hook readers with their pain point
   - Agitate the problem to create urgency
   - Present our solution (with Pennywise mention)

### 6.2 Content Structure Template

```markdown
# [Title with Primary Keyword] (50-60 characters)

[Hook - PAS opening that addresses reader's problem]

## [First H2 - Usually "Why/What" section]
[Establish the problem, show understanding]

## [Second H2 - Deep dive into topic]
[Comprehensive coverage with examples]

### [H3 Subsections as needed]
[Detailed points with bullet lists]

## [Third H2 - Practical advice/How-to]
[Actionable steps, tips, frameworks]

## How Pennywise Helps [Natural product mention]
[Brief, helpful mention of app with App Store link]

## [FAQ Section - Target featured snippets]
### [Question 1]?
[Concise answer]

### [Question 2]?
[Concise answer]

## Conclusion
[Summary + soft CTA]
```

### 6.3 SEO Checklist for Every Post

Before approving any draft, verify:

#### Title & Meta
- [ ] Title 50-60 characters
- [ ] Primary keyword in title (preferably near start)
- [ ] Excerpt/meta description 150-160 characters
- [ ] Excerpt includes primary keyword

#### Content Quality
- [ ] Word count 1,500-2,500 words
- [ ] Primary keyword in first 100 words
- [ ] Keyword density 1-2% (not stuffed)
- [ ] Related keywords used naturally
- [ ] No duplicate content/topics

#### Structure
- [ ] H2s break content into scannable sections
- [ ] H3s used for subsections
- [ ] Bullet points and numbered lists
- [ ] Short paragraphs (3-4 sentences max)

#### E-E-A-T Signals
- [ ] Specific examples and data
- [ ] Actionable advice
- [ ] Accurate, up-to-date information
- [ ] Author attribution (Pennywise Team)

#### Pennywise Integration
- [ ] One natural App Store link
- [ ] Not overly promotional
- [ ] Genuinely helpful context

### 6.4 Claude Prompt Template for Content Creation

```
You are an expert SEO content writer for Pennywise, a personal finance tracking app for iOS.

## Task
Write a comprehensive blog post about: {topic}

## SEO Requirements
- Target keyword: {keyword}
- Related keywords to include: {related_keywords}
- Word count: 1,500-2,500 words
- Reading level: Accessible but not dumbed down

## Content Framework
1. Start with a hook addressing the reader's pain point (PAS formula)
2. Use H2 and H3 headings to structure content
3. Include specific examples and actionable advice
4. Add a "How Pennywise Helps" section with this link: https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519
5. End with FAQ section (3-4 questions)
6. Conclude with summary and soft CTA

## Style Guidelines
- Conversational but professional tone
- No em-dashes (use regular dashes)
- No fluff or filler content
- Every paragraph should add value
- Use "you" to address the reader directly

## Output Format
Return as JSON with this structure:
{
  "title": "...",
  "excerpt": "...",
  "targetKeyword": "...",
  "relatedKeywords": [...],
  "category": "Budgeting|Saving|Investing|Security",
  "content": "... (markdown)"
}
```

---

## 7. Telegram Bot Interface

### 7.1 Conversation Flow Design

```
┌─────────────────────────────────────────────────────┐
│                  USER MESSAGE                       │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│              CONTEXT BUILDING                       │
│  • Add last 15 messages                             │
│  • Add current state (last draft discussed, etc.)  │
│  • Add relevant memories                            │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│              GROQ INTENT ANALYSIS                   │
│  • What does user want?                             │
│  • What entity are they referring to?               │
│  • Is confirmation needed?                          │
└─────────────────────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
    ┌──────────┐  ┌──────────┐  ┌──────────┐
    │  CLEAR   │  │ AMBIGUOUS│  │ NEEDS    │
    │  INTENT  │  │  INTENT  │  │ CONFIRM  │
    └──────────┘  └──────────┘  └──────────┘
          │              │              │
          ▼              ▼              ▼
    Execute         Ask for        Show what
    Action          clarity        will happen
                    + guess        + yes/no
```

### 7.2 Smart Intent Recognition

The system prompt should enable understanding like:

| User Says | Bot Understands |
|-----------|-----------------|
| "delete it" | Delete the last discussed draft |
| "looks good, publish" | Approve and publish current draft |
| "make another one about saving" | Create new draft about saving topic |
| "what did we post last week?" | Query content history |
| "how's the freelancer post doing?" | Check rankings for that post |
| "nevermind" | Cancel pending action |

### 7.3 Confirmation Flow

For destructive actions:

```
User: "delete the draft"

Bot: "Delete '10 Essential Budgeting Tips for Freelancers in 2026'?

     This cannot be undone.

     Reply 'yes' to confirm or 'no' to cancel."

User: "yes"

Bot: "Deleted: 10 Essential Budgeting Tips for Freelancers in 2026"
```

### 7.4 Error Handling

When something is ambiguous:

```
User: "delete it"
[No draft recently discussed]

Bot: "I'm not sure which draft you want to delete.

     Did you mean one of these?
     • budgeting-tips-for-freelancers (created today)
     • saving-for-emergency-fund (created Jan 15)

     Or say 'delete all' to remove all drafts."
```

---

## 8. Data Storage & Persistence

### 8.1 File Structure

```
/Users/gregor/AI-Agents/seo-agent/
├── AGENT.md                    # Agent instructions/constitution
├── data/
│   ├── memory.db               # SQLite database
│   ├── conversation_buffer.json # Current session
│   └── preferences.json        # User preferences
├── output/
│   └── content/
│       ├── drafts/             # Pending drafts
│       ├── approved/           # Ready to publish
│       ├── published/          # Archive of published
│       └── archive/            # Rejected/old drafts
├── scripts/
│   ├── publish_blog_post.py    # Publishing script
│   └── keyword_research.py     # Keyword tools
└── templates/
    └── blog-post.json          # Content template
```

### 8.2 Database Schema

```sql
-- memory.db

-- Track all content ever created
CREATE TABLE content_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    topic TEXT,
    target_keyword TEXT,
    related_keywords TEXT,  -- JSON array
    category TEXT,
    status TEXT DEFAULT 'draft',
    word_count INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    approved_at DATETIME,
    published_at DATETIME,
    rejected_at DATETIME,
    rejection_reason TEXT
);

-- Daily conversation summaries
CREATE TABLE conversation_summaries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATE UNIQUE,
    summary TEXT,
    key_decisions TEXT,  -- JSON: [{decision, context, timestamp}]
    drafts_created TEXT,  -- JSON array of slugs
    drafts_approved TEXT,
    drafts_rejected TEXT,
    posts_published TEXT
);

-- Important facts to remember
CREATE TABLE facts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fact_type TEXT,  -- 'preference', 'decision', 'info', 'feedback'
    content TEXT NOT NULL,
    context TEXT,
    importance INTEGER DEFAULT 5,  -- 1-10 scale
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_used DATETIME
);

-- Keyword research cache
CREATE TABLE keyword_cache (
    keyword TEXT PRIMARY KEY,
    data TEXT,  -- JSON with volume, difficulty, related
    fetched_at DATETIME,
    expires_at DATETIME
);

-- Ranking history
CREATE TABLE ranking_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    keyword TEXT,
    position INTEGER,
    url TEXT,
    checked_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for common queries
CREATE INDEX idx_content_status ON content_history(status);
CREATE INDEX idx_content_keyword ON content_history(target_keyword);
CREATE INDEX idx_facts_type ON facts(fact_type);
CREATE INDEX idx_ranking_keyword ON ranking_history(keyword);
```

### 8.3 Backup Strategy

```bash
# Daily backup of memory database
0 0 * * * cp /Users/gregor/AI-Agents/seo-agent/data/memory.db \
           /Users/gregor/AI-Agents/seo-agent/data/backups/memory_$(date +%Y%m%d).db
```

---

## 9. Implementation Roadmap

### Phase 1: Smart Conversation (Current Focus)
**Timeline: 1-2 days**

- [x] Basic Telegram bot with Groq
- [x] PDF preview generation
- [x] Draft CRUD operations
- [ ] **Conversation memory (short-term)**
- [ ] **Context-aware responses ("delete it" works)**
- [ ] **Confirmation flow for destructive actions**
- [ ] **Better error messages with suggestions**

### Phase 2: Persistent Memory
**Timeline: 2-3 days**

- [ ] SQLite database setup
- [ ] Content history tracking
- [ ] Duplicate topic detection
- [ ] Conversation summarization (daily)
- [ ] Fact extraction and storage

### Phase 3: SEO Research Tools
**Timeline: 3-5 days**

- [ ] Keyword research integration (free tools)
- [ ] Serper.dev ranking checks
- [ ] Competitor content analysis
- [ ] Content gap identification
- [ ] Proactive content suggestions

### Phase 4: Advanced Features
**Timeline: 1-2 weeks**

- [ ] SEO audit before approval
- [ ] Automated ranking reports (weekly)
- [ ] Content refresh suggestions
- [ ] Performance tracking dashboard
- [ ] A/B title testing suggestions

### Phase 5: Server Deployment
**Timeline: When ready for production**

- [ ] Move bot to VPS (DigitalOcean/Hetzner)
- [ ] 24/7 availability
- [ ] Consider linuz90/claude-telegram-bot for full Claude integration
- [ ] Scheduled tasks (ranking checks, reports)

---

## 10. Cost Analysis

### 10.1 Current Costs

| Service | Cost | Notes |
|---------|------|-------|
| Claude Pro/Max | $100/month | Gregor's existing subscription |
| Groq | Free | Llama 3.3 70B, generous limits |
| Serper.dev | Free | 2,500 queries (enough for months) |
| Vercel | Free | Website hosting |
| **Total** | **$100/month** | Already paying for Claude |

### 10.2 Future Costs (If Scaling)

| Service | Cost | When Needed |
|---------|------|-------------|
| VPS Server | $5-10/month | When moving to 24/7 |
| Claude API (backup) | ~$20/month | If subscription limits hit |
| Premium SEO API | $30-50/month | For serious competitor research |

### 10.3 Cost Optimization Strategies

1. **Use Claude Code CLI** with Pro subscription instead of API
2. **Cache keyword research** results (valid for 7-14 days)
3. **Batch ranking checks** (once per week, not on-demand)
4. **Use Groq for simple tasks**, Claude only for content

---

## 11. Security Considerations

### 11.1 API Key Management

```python
# DO NOT hardcode API keys in code
# Use environment variables or config files

# .env file (not in git)
TELEGRAM_BOT_TOKEN=xxx
GROQ_API_KEY=xxx
SERPER_API_KEY=xxx

# config.json (not in git)
{
  "bot_token": "xxx",
  "authorized_users": [6416159461]
}
```

### 11.2 Authorization

- Only respond to authorized Telegram user IDs
- Log all commands and actions
- Require confirmation for destructive actions

### 11.3 Content Safety

- Claude has built-in content filters
- No user-generated content published without review
- All content passes through approval workflow

---

## 12. Future Enhancements

### 12.1 Near-Term Ideas

- **Voice messages**: Send voice notes, get transcribed and processed
- **Image generation**: AI-generated blog images
- **Multi-language**: Translate posts for international SEO
- **Social media**: Auto-generate social posts from blog content

### 12.2 Long-Term Vision

- **Fully autonomous mode**: Agent researches, writes, and schedules posts
- **Performance optimization**: Automatically refresh underperforming content
- **Link building**: Identify outreach opportunities
- **Technical SEO**: Monitor Core Web Vitals, suggest improvements

### 12.3 Integration Possibilities

- Google Search Console API (direct ranking data)
- Google Analytics (traffic insights)
- Notion/Airtable (content calendar)
- Buffer/Hootsuite (social scheduling)

---

## Appendix A: System Prompt Template

```
You are the SEO Agent for Pennywise, a personal finance tracking iOS app. You help Gregor manage the blog and SEO strategy.

## Your Personality
- Efficient and direct
- Knowledgeable about SEO
- Remembers context from conversation
- Asks for clarification when needed
- Confirms before destructive actions

## Current Context
{injected_context}

## Available Actions
1. list_drafts - Show pending drafts
2. preview_draft - Send PDF preview (needs: draft_id)
3. delete_draft - Delete a draft (needs: draft_id, requires confirmation)
4. approve_draft - Approve for publishing (needs: draft_id)
5. publish_draft - Publish to website (needs: draft_id)
6. create_draft - Create new content (needs: topic)
7. check_ranking - Check Google ranking (needs: keyword)
8. research_keyword - Get keyword data (needs: keyword)
9. show_status - System overview
10. search_history - Find past content (needs: query)

## Response Format
For actions, respond with JSON: {"action": "...", "params": {...}}
For conversation, respond naturally in text.
For confirmations, explain what will happen and ask yes/no.

## Key Rules
1. If user says "it" or "that", refer to last discussed draft
2. Always confirm before deleting
3. Check content_history before creating duplicate topics
4. Be concise - this is Telegram, not email

Today's date: {date}
```

---

## Appendix B: Quick Reference

### Bot Commands

| What You Say | What Happens |
|--------------|--------------|
| "status" | Show draft/published counts |
| "show drafts" | List pending drafts |
| "preview X" | Get PDF of draft X |
| "approve X" | Approve draft X |
| "publish X" | Publish draft X |
| "delete X" | Delete draft X (with confirmation) |
| "create post about X" | Generate new draft |
| "check ranking for X" | Check Google position |
| "what did we post about X?" | Search content history |

### File Locations

| Content | Location |
|---------|----------|
| Drafts | `/Users/gregor/AI-Agents/seo-agent/output/content/drafts/` |
| Approved | `/Users/gregor/AI-Agents/seo-agent/output/content/approved/` |
| Published | `/Users/gregor/Documents/Coding/pennywise-landing/data/blog-posts/` |
| Bot code | `/Users/gregor/AI-Agents/communication/telegram-bot/bot.py` |
| Memory DB | `/Users/gregor/AI-Agents/seo-agent/data/memory.db` |

---

*This documentation will be updated as the system evolves.*
