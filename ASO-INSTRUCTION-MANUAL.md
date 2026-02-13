# Pennywise ASO Instruction Manual

## The Complete Claude-Ready Guide to App Store Optimization

**Version:** 1.0
**Last Updated:** January 23, 2026
**Purpose:** A comprehensive, actionable ASO guide that any Claude session can use to analyze, optimize, and track Pennywise's App Store performance.

---

## Table of Contents

1. [Quick Reference Card](#quick-reference-card)
2. [Understanding ASO Fundamentals](#understanding-aso-fundamentals)
3. [The Anatomy of a Keyword](#the-anatomy-of-a-keyword)
4. [App Store Metadata Limits](#app-store-metadata-limits)
5. [Keyword Insertion Rules (Critical)](#keyword-insertion-rules-critical)
6. [The Perfect Keyword Formula](#the-perfect-keyword-formula)
7. [Keyword Research Process](#keyword-research-process)
8. [Metadata Optimization Strategy](#metadata-optimization-strategy)
9. [2025-2026 Algorithm Updates](#2025-2026-algorithm-updates)
10. [Screenshot Optimization](#screenshot-optimization)
11. [Reviews & Ratings Strategy](#reviews--ratings-strategy)
12. [In-App Events & Purchases](#in-app-events--purchases)
13. [Localization Strategy](#localization-strategy)
14. [Common Mistakes to Avoid](#common-mistakes-to-avoid)
15. [Weekly Monitoring Workflow](#weekly-monitoring-workflow)
16. [Monthly Analysis Template](#monthly-analysis-template)
17. [Ranking Factors Hierarchy](#ranking-factors-hierarchy)
18. [Budget/Finance App Keyword Strategy](#budgetfinance-app-keyword-strategy)
19. [Claude Analysis Prompt Template](#claude-analysis-prompt-template)
20. [Troubleshooting Guide](#troubleshooting-guide)
21. [Resources & Tools](#resources--tools)
22. [Changelog](#changelog)

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PENNYWISE ASO QUICK REFERENCE                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  CHARACTER LIMITS:                                                       │
│  • Title: 30 characters (HIGHEST search weight)                         │
│  • Subtitle: 30 characters (HIGH search weight)                         │
│  • Keywords: 100 characters (HIGH search weight)                        │
│  • Promotional Text: 170 characters (NOT indexed)                       │
│  • Description: 4,000 characters (NOT indexed on iOS)                   │
│                                                                          │
│  GOLDEN RULES:                                                           │
│  1. NEVER repeat keywords across Title/Subtitle/Keywords field          │
│  2. NO spaces after commas in Keywords field                            │
│  3. Use SINGULAR forms only (Apple handles plurals)                     │
│  4. Most important keywords go FIRST (left to right)                    │
│  5. Special characters (:, &, -) count as 2 characters in Title         │
│                                                                          │
│  THE PERFECT KEYWORD:                                                    │
│  High Popularity (25+) + Low Difficulty (<50) + High Relevance          │
│                                                                          │
│  TIMING:                                                                 │
│  • Week 1-2: Apple indexes changes                                      │
│  • Week 3-4: Rankings start moving                                      │
│  • Week 5-8: Full impact visible                                        │
│  • Wait 4-6 weeks before changing keywords again                        │
│                                                                          │
│  TOOLS:                                                                  │
│  • Astro ($9/month) - Keyword tracking & data                           │
│  • App Store Connect - Analytics & metadata                             │
│  • Claude - AI analysis & recommendations                               │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Understanding ASO Fundamentals

### What is ASO?

App Store Optimization (ASO) is the process of improving an app's visibility in app store search results. It's the app equivalent of SEO for websites.

### Why ASO Matters

> **65-70% of App Store downloads come directly from search.**

This means the majority of your potential users will find you through search. If you're not optimized, you're invisible.

### The Two Goals of ASO

1. **Visibility** - Getting your app to appear in search results (keyword optimization)
2. **Conversion** - Getting users to download once they find you (creative optimization)

### What You Can Control

| Element | Indexed for Search? | Impact on Conversion |
|---------|---------------------|---------------------|
| App Title | ✅ YES (Highest weight) | High |
| Subtitle | ✅ YES (High weight) | High |
| Keyword Field | ✅ YES (High weight) | None (hidden) |
| Screenshots | ✅ YES (2025 update - captions indexed) | Very High |
| Description | ❌ NO (iOS) | Medium |
| Promotional Text | ❌ NO | Medium |
| Icon | ❌ NO | Very High |
| Reviews/Ratings | ✅ Indirect (affects ranking) | Very High |

---

## The Anatomy of a Keyword

Every keyword must be evaluated on three properties:

### 1. Popularity (0-100)

**What it is:** How often users search for this keyword.

**Source:** Directly from Apple Search Ads API (real data).

**Guidelines:**
- 0-15: Very low traffic (niche)
- 16-25: Low traffic
- 26-40: Medium traffic (most keywords fall here)
- 41-60: High traffic
- 61-100: Very high traffic (extremely competitive)

**For Pennywise:** Target keywords with popularity 20+ minimum. Ideal range: 25-50.

### 2. Difficulty (0-100)

**What it is:** How hard it is to rank in the top 10 for this keyword.

**Source:** Calculated by ASO tools using proprietary algorithms (not from Apple).

**Guidelines:**
- 0-30: Easy (quick wins possible)
- 31-50: Medium (achievable for indie apps)
- 51-70: Hard (requires strong app metrics)
- 71-100: Very hard (dominated by major players)

**For Pennywise:** Target difficulty under 60. Ideal range: 20-50.

### 3. Relevance (Only You Can Judge)

**What it is:** How well the keyword matches what your app actually does.

**Critical Question:** If someone searches this keyword, will they be satisfied with Pennywise?

**Relevance Scoring:**
- **High (3):** Perfect match - user is looking for exactly what Pennywise offers
- **Medium (2):** Good match - user might find Pennywise useful
- **Low (1):** Poor match - user wants something different

**Warning:** A keyword with high popularity but low relevance will:
- Increase impressions but decrease conversion
- Lead to negative reviews ("not what I expected")
- Hurt your overall ranking over time

---

## App Store Metadata Limits

### Character Limits (iOS App Store)

| Field | Limit | Indexed? | Notes |
|-------|-------|----------|-------|
| **App Name (Title)** | 30 chars | ✅ Highest weight | Most important for search |
| **Subtitle** | 30 chars | ✅ High weight | Second most important |
| **Keyword Field** | 100 chars | ✅ High weight | Hidden from users |
| **Promotional Text** | 170 chars | ❌ No | Can update anytime |
| **Description** | 4,000 chars | ❌ No | For conversion only |
| **What's New** | 4,000 chars | ❌ No | Update notes |
| **In-App Purchase Name** | 30 chars | ✅ Low weight | Additional indexing |
| **In-App Event Name** | 30 chars | ✅ Medium weight | Seasonal keywords |
| **In-App Event Description** | 50 chars | ✅ Medium weight | Additional context |

### Special Character Warning

In the **App Name only**, these characters count as 2 characters:
- Colon `:`
- Ampersand `&`
- Hyphen/Dash `-`

**Example:** "Pennywise - Budget" uses 19 characters, not 18 (the `-` counts as 2).

---

## Keyword Insertion Rules (Critical)

These rules are **non-negotiable**. Breaking them will hurt your rankings.

### Rule 1: NEVER Repeat Keywords

**The Problem:** If a keyword appears in multiple fields, only the lowest-weight field is used.

**Example of WRONG:**
```
Title: Pennywise - Budget Tracker
Subtitle: Smart Budget & Money Tracker
Keywords: budget,tracker,money,expense...
```
❌ "budget" appears in Subtitle AND Keywords → Keywords field version used (lower weight)
❌ "tracker" appears in Title, Subtitle, AND Keywords → Wasted 3 times

**Example of CORRECT:**
```
Title: Pennywise - Budget Tracker
Subtitle: Save Money & Track Expenses
Keywords: expense,planner,savings,bills,couple,envelope,simple...
```
✅ Each word appears only once across all fields

### Rule 2: NEVER Split Keywords

**The Problem:** If you split a keyword phrase, it loses ranking power.

**Example of WRONG:**
```
Subtitle: Budget Planner Tracker
```
❌ "Budget Tracker" is split by "Planner" → Loses algorithm weight

**Example of CORRECT:**
```
Subtitle: Budget Tracker & Planner
```
✅ "Budget Tracker" stays together

### Rule 3: Comma Separation, NO Spaces

**In the Keyword Field:**
```
CORRECT: budget,expense,money,tracker,savings
WRONG:   budget, expense, money, tracker, savings
```
Spaces after commas waste characters. With 100 characters, every character matters.

### Rule 4: Stop Words Are Ignored

Apple's algorithm ignores these words - don't include them in the Keyword Field:

```
a, about, above, after, again, against, all, am, an, and, any, app, are,
aren't, as, at, be, because, been, before, being, below, between, both,
but, by, can't, cannot, could, couldn't, did, didn't, do, does, doesn't,
doing, don't, down, during, each, few, for, from, further, had, hadn't,
has, hasn't, have, haven't, having, he, he'd, he'll, he's, her, here,
here's, hers, herself, him, himself, his, how, how's, i, i'd, i'll, i'm,
i've, if, in, into, is, isn't, it, it's, its, itself, let's, me, more,
most, mustn't, my, myself, no, nor, not, of, off, on, once, only, or,
other, ought, our, ours, ourselves, out, over, own, same, shan't, she,
she'd, she'll, she's, should, shouldn't, so, some, such, than, that,
that's, the, their, theirs, them, themselves, then, there, there's,
these, they, they'd, they'll, they're, they've, this, those, through,
to, too, under, until, up, very, was, wasn't, we, we'd, we'll, we're,
we've, were, weren't, what, what's, when, when's, where, where's, which,
while, who, who's, whom, why, why's, with, won't, would, wouldn't, you,
you'd, you'll, you're, you've, your, yours, yourself, yourselves
```

**Note:** The word "app" is on this list - don't include it!

### Rule 5: Use Singular Forms Only

Apple automatically indexes plural forms when you use singular.

```
CORRECT: budget (indexes: budget, budgets)
WRONG:   budgets (only indexes: budgets, counts as repeat of "budget")
```

### Rule 6: Don't Include Company or Category Names

You're automatically indexed for:
- Your developer/company name
- Your primary category name
- Your secondary category name (if set)

Don't waste characters repeating these.

### Rule 7: Order Matters (Left = Most Important)

Keywords on the LEFT have more weight than keywords on the RIGHT.

**In all fields:**
```
Title: [App Name] - [Most Important Keyword]
Subtitle: [Second Most Important] & [Third Most Important]
Keywords: [4th],[5th],[6th],[7th]...
```

### Rule 8: Apple Combines Keywords Automatically

You don't need to include full phrases. Apple combines words from ALL indexed fields.

**Example:**
```
Title: Pennywise - Budget Tracker
Subtitle: Save Money & Track Expenses
Keywords: couple,envelope,simple,planner
```

Apple will automatically create combinations like:
- "budget tracker"
- "money tracker"
- "expense tracker"
- "budget planner"
- "couple budget"
- "simple budget tracker"

---

## The Perfect Keyword Formula

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   PERFECT KEYWORD = High Popularity + Low Difficulty + Relevance│
│                                                                  │
│   Scoring Matrix:                                                │
│                                                                  │
│   Popularity 40+ AND Difficulty <40 AND Relevance High = ⭐⭐⭐⭐⭐ │
│   Popularity 30+ AND Difficulty <50 AND Relevance High = ⭐⭐⭐⭐   │
│   Popularity 25+ AND Difficulty <60 AND Relevance High = ⭐⭐⭐    │
│   Popularity 20+ AND Difficulty <70 AND Relevance Med  = ⭐⭐     │
│   Anything else                                         = ⭐      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Finding "Quick Win" Keywords

Quick wins are keywords where you can realistically reach top 10:

1. **Popularity:** 15-35 (enough traffic to matter)
2. **Difficulty:** Under 40 (less competition)
3. **Relevance:** High (users want what you offer)
4. **Current Ranking:** You're already in top 50-100 OR not ranked (opportunity)

### Long-Tail Keywords

**Definition:** Keywords with 3+ words that are more specific.

**Examples:**
- Short-tail: "budget app" (high traffic, high competition)
- Long-tail: "budget app for couples" (lower traffic, lower competition)

**Strategy:** Include root words in your metadata to capture long-tail searches automatically.

If you have "budget", "couple", and "app" indexed, you'll rank for "budget app for couples" even without that exact phrase.

---

## Keyword Research Process

### Step 1: Brainstorm (10-15 Keywords)

Think like your user. What would they search for?

**Categories to consider:**
- Feature-based: expense tracker, spending tracker, bill tracker
- User-based: budget app for couples, budget app for beginners
- Method-based: envelope budgeting, zero based budget
- Benefit-based: save money app, money saving

### Step 2: Competitor Analysis

For each brainstormed keyword:
1. Search in App Store
2. Note the top 3-5 apps
3. Record their Title, Subtitle
4. Extract new keyword ideas

**Tools:** Astro's competitor feature, search in App Store directly.

### Step 3: Get Suggestions

Use Astro's "Suggestions" feature to find related keywords you might have missed.

### Step 4: Filter by Relevance

Remove any keyword that doesn't match Pennywise's actual functionality.

**Questions to ask:**
- Does Pennywise solve what this user is looking for?
- Would a user searching this be satisfied with Pennywise?
- Is this keyword describing a feature we actually have?

### Step 5: Filter by Metrics

**Minimum thresholds:**
- Popularity: 15+ (ideally 25+)
- Difficulty: Under 70 (ideally under 50)

**Prioritize:**
- High popularity + low difficulty = Best targets
- Medium popularity + very low difficulty = Quick wins
- High popularity + high difficulty = Long-term goals

### Step 6: Prioritize & Assign Fields

| Priority | Assign To |
|----------|-----------|
| #1 (Most important) | Title |
| #2-3 | Subtitle |
| #4-14+ | Keyword Field |

### Step 7: Repeat for Other Markets (Optional)

If targeting multiple countries, repeat process for:
- UK (English variations)
- Canada
- Australia
- Germany, France, Spain (if localizing)

---

## Metadata Optimization Strategy

### Title Strategy (30 characters)

**Format:** `[Brand Name] - [Primary Keyword]`

**Best Practices:**
- Brand name should be recognizable but short
- Primary keyword should be your highest-value target
- Use `-` or `:` to separate (remember they count as 2 chars)

**Examples:**
```
Pennywise: Budget Planner     (26 chars - ✅ Strong keyword)
Pennywise - Budget Tracker    (27 chars - ✅ Strong keyword)
Pennywise - Expense Tracker   (28 chars - ✅ Strong keyword)
```

### Subtitle Strategy (30 characters)

**Format:** `[Keyword] & [Keyword]` or `[Benefit Statement with Keywords]`

**Best Practices:**
- Include 2-3 strong keywords NOT in title
- Can be benefit-focused to help conversion
- Don't repeat any words from title

**Examples:**
```
Save Money & Track Expenses   (28 chars - ✅ Keywords + benefit)
Simple Budget for Couples     (26 chars - ✅ Niche targeting)
Track Spending & Save More    (27 chars - ✅ Action-oriented)
```

### Keyword Field Strategy (100 characters)

**Format:** `keyword1,keyword2,keyword3,...` (no spaces after commas)

**Best Practices:**
- Most important keywords first (left)
- Don't repeat ANY word from title or subtitle
- Use singular forms only
- Skip stop words
- Fill all 100 characters

**Building Your Keyword Field:**

1. List words from Title: [pennywise, budget, tracker/planner]
2. List words from Subtitle: [save, money, track, expenses] or [simple, couple]
3. List words to EXCLUDE from keyword field (already indexed)
4. Fill remaining 100 chars with new keywords

---

## 2025-2026 Algorithm Updates

### Major Change: Screenshot Captions Now Indexed (June 2025)

Apple now extracts text from screenshot captions and uses it for keyword indexing.

**Impact:** Apps with keywords in captions saw visibility increases up to 217%.

**Action Required:**
- Review screenshot captions
- Include your most important keywords naturally
- Ensure captions align with title/subtitle keywords

### Custom Product Pages (CPPs) Now Organic

Previously CPPs were only for paid campaigns. Now they can appear in organic search.

**Action Required:**
- Create CPPs targeting specific keyword clusters
- Test different creative approaches per audience segment

### AI-Generated Tags (iOS 26 Beta)

Apple auto-generates tags from your metadata using AI.

**Action Required:**
- Ensure metadata clearly describes features
- Use consistent terminology throughout

### Quality Signals Have More Weight

The algorithm now heavily weighs:
- Retention rate (Day 7, Day 30)
- Crash rate
- Uninstall rate
- Session length
- User engagement

**Action Required:**
- Focus on app quality, not just keywords
- Fix bugs promptly
- Update regularly (every 2-4 weeks)

### Semantic Search Improvements

Apple is better at matching meaning, not just exact keywords.

**Action Required:**
- Build "intent clusters" - related keywords that reinforce each other
- Example cluster: budget tracker, expense tracking, personal finance, bill reminders

---

## Screenshot Optimization

### Why Screenshots Matter for ASO

1. **90% of users don't scroll past the third screenshot**
2. **70% never scroll past the first screenshot**
3. **Users spend 7 seconds on average viewing your page**
4. **Screenshot captions are now indexed for search (2025)**

### Screenshot Best Practices

**First 3 Screenshots (Critical):**
- Must convey your app's core value instantly
- Include captions with keywords
- Use benefit-driven messaging

**Caption Formula:**
```
Verb + Benefit + Result (3-5 words)

GOOD: "Track Spending Effortlessly"
BAD:  "Expense Tracker App"

GOOD: "Budget Together as a Couple"
BAD:  "Couple Budget Feature"
```

**Design Guidelines:**
- Dark/clean backgrounds
- Big, readable typography
- Consistent style across all screenshots
- Update when new iPhone models release

### Screenshot Caption Keyword Strategy

Since captions are now indexed, include keywords strategically:

```
Screenshot 1: "Track Your Daily Budget" (budget, daily, track)
Screenshot 2: "Simple Expense Management" (simple, expense)
Screenshot 3: "Save Money with Smart Goals" (save, money, goals)
Screenshot 4: "Visual Spending Insights" (spending, insights)
Screenshot 5: "Budget Planning Made Easy" (planning, easy)
```

---

## Reviews & Ratings Strategy

### Why Reviews Matter

- **79% of users check ratings before downloading**
- **Moving from 3 to 4 stars = 89% increase in conversion**
- **Apps with 4.5+ stars get 3x more downloads**
- **90% of featured apps are rated 4.0+**

### Target Rating: 4.5+ Stars

Below 4.0 = downloads drop significantly.

### How to Get Good Reviews

**The Right Time to Ask:**
1. After user completes a positive action (saved money, reached goal)
2. After several days of engagement (user has formed opinion)
3. After a small win (3-day streak, first savings milestone)

**The Wrong Time to Ask:**
- On first app launch
- After a crash or error
- During onboarding

**Two-Step Review Flow:**

```
Step 1: "Are you enjoying Pennywise?"
        [Love it!] [It's OK] [Not really]

Step 2a (Love it!): Show StoreKit review prompt
Step 2b (It's OK/Not really): "We'd love to hear how we can improve"
                              → Send to feedback form/email
```

This filters out negative reviews before they hit the App Store.

### Responding to Reviews

- Respond quickly (within 24-48 hours)
- Be helpful and professional
- Fresh responses signal active development
- Resolving issues can prompt users to update their review

### When to Reset Reviews

If your average drops too low, you can reset in App Store Connect.

**Consider resetting when:**
- Major app update changes core functionality
- Average falls below 4.0
- Old negative reviews are no longer relevant

**Warning:** Reset removes ALL reviews, so only do this strategically.

---

## In-App Events & Purchases

### In-App Events

**What they are:** Time-limited events (challenges, sales, live content).

**ASO Benefit:** Event name and description are indexed for search.

**Limits:**
- Up to 10 events created at once
- Up to 5 published at once
- Events last up to 31 days

**Strategy for Pennywise:**
- Create seasonal events: "New Year Budget Challenge", "Holiday Spending Tracker"
- Use keywords in event names and descriptions
- Target seasonal search terms

### In-App Purchases

**ASO Benefit:** IAP names are indexed (low weight, but additional exposure).

**Limits:**
- Up to 20 promoted IAPs
- Names limited to 30 characters
- Descriptions limited to 45 characters

**Strategy:**
- Include relevant keywords in IAP names
- "Premium Budget Planner" instead of "Pro Version"

---

## Localization Strategy

### Why Localize

- App Store available in 175 regions, 40 languages
- Most developers only optimize for US = opportunity
- Simply translating metadata (not the whole app) provides ASO benefit

### Cross-Localization Trick (iOS Only)

Apple indexes multiple locales per country. You can use this to add MORE keywords.

**Example for US Market:**
- English (US): Your main keywords
- Spanish (Mexico): Additional English keywords for US users

This gives you 160 extra characters (30 title + 30 subtitle + 100 keywords).

**Rules:**
- Don't duplicate keywords across locales
- Apple doesn't boost by repetition

### Priority Markets

1. United States (English)
2. United Kingdom (English - different terms)
3. Canada
4. Australia
5. Germany (if localizing)
6. France (if localizing)
7. Spain/Latin America (if localizing)

### Localization Tips

- Don't just translate - localize terminology
- US: "checking account" vs UK: "current account"
- Research what terms users actually search in each market

---

## Common Mistakes to Avoid

### Critical Mistakes

| Mistake | Why It's Bad | Fix |
|---------|--------------|-----|
| **Repeating keywords** | Lowers keyword weight, wastes characters | Each word appears ONCE across all fields |
| **Spaces after commas** | Wastes characters | `word1,word2` not `word1, word2` |
| **Using plurals** | Wastes characters (Apple handles plurals) | Use singular forms only |
| **Keyword stuffing** | Hurts conversion, looks spammy | Natural, readable text |
| **Ignoring long-tail** | Missing low-competition opportunities | Include root words for combinations |
| **Set and forget** | Market changes, competitors adapt | Review every 4-6 weeks |
| **Changing too often** | Can't measure what worked | Wait 4-6 weeks between changes |
| **Targeting only competitive keywords** | Never ranking high | Balance with achievable targets |
| **Same strategy iOS/Android** | Different algorithms | Optimize per platform |
| **Not using title/subtitle** | Missing highest-weight fields | Fill all character limits |

### Rookie Mistakes

- Using "app" in keywords (it's a stop word)
- Including competitor brand names (against guidelines)
- Using complicated/long keywords (users search simple terms)
- Not researching before choosing keywords
- Ignoring negative reviews

---

## Weekly Monitoring Workflow

### Every Week (10-15 minutes)

```
WEEKLY ASO CHECK-IN

□ Step 1: Open Astro (2 min)
  └─ Check keyword rankings for Pennywise
  └─ Note significant changes (↑ or ↓ 5+ positions)
  └─ Check if ranking for any NEW keywords

□ Step 2: Document Changes (2 min)
  └─ Record top 10-15 keyword rankings
  └─ Note week-over-week movement
  └─ Screenshot or export data

□ Step 3: Check App Store Connect (2 min)
  └─ Review impressions trend
  └─ Review download trend
  └─ Check conversion rate
  └─ Review any new reviews

□ Step 4: Competitor Check (3 min)
  └─ Any competitor metadata changes?
  └─ New keywords they're targeting?
  └─ Changes in their rankings?

□ Step 5: Log Insights (2 min)
  └─ What's working?
  └─ What needs attention?
  └─ Any action items for next update?
```

### Key Metrics to Track

| Metric | Where to Find | What to Look For |
|--------|---------------|------------------|
| Keyword Rankings | Astro | Movement up/down |
| Impressions | App Store Connect | Trending up = good |
| Downloads | App Store Connect | Should follow impressions |
| Conversion Rate | App Store Connect | Impressions ÷ Downloads |
| New Keywords | Astro | Keywords you weren't ranking for |
| Rating | App Store Connect | Keep above 4.5 |

---

## Monthly Analysis Template

### Monthly ASO Review

```markdown
## Month: [Month Year]

### Rankings Summary
| Keyword | Start Position | End Position | Change |
|---------|---------------|--------------|--------|
| [keyword] | #X | #Y | +/- Z |

### Wins This Month
- [List keywords that improved]

### Concerns
- [List keywords that dropped or stagnated]

### Opportunities Identified
- [New keywords to target]

### Metrics Summary
- Impressions: [X] (change from last month: +/- %)
- Downloads: [X] (change from last month: +/- %)
- Conversion Rate: [X]%
- Average Rating: [X.X]
- New Reviews: [X]

### Competitor Activity
- [Any notable changes]

### Recommendations for Next Month
1. [Action item]
2. [Action item]
3. [Action item]

### Metadata Changes Made
- [List any changes with dates]
```

---

## Ranking Factors Hierarchy

### Primary Factors (Highest Impact)

1. **Text Relevance**
   - Keywords in Title (highest weight)
   - Keywords in Subtitle
   - Keywords in Keyword Field
   - Screenshot captions (2025 update)

2. **Download Volume & Velocity**
   - Total downloads
   - Recent download speed
   - Download trends

3. **Ratings & Reviews**
   - Average rating (aim for 4.5+)
   - Number of reviews
   - Recency of reviews
   - Review sentiment

### Secondary Factors (Medium Impact)

4. **User Engagement**
   - Retention rate (Day 7, Day 30)
   - Session length
   - Uninstall rate

5. **Technical Performance**
   - Crash rate
   - Loading speed
   - Bug frequency

6. **Update Frequency**
   - Regular updates signal active development
   - Aim for every 2-4 weeks

### Tertiary Factors (Lower Impact)

7. **In-App Events & Purchases**
   - Event names and descriptions
   - IAP names

8. **Backlinks & External Traffic**
   - Website links to App Store
   - Social media traffic

---

## Budget/Finance App Keyword Strategy

### Keyword Difficulty Tiers for Finance Apps

**Tier 1: Very Competitive (Difficulty 70+)**
- budget app
- expense tracker
- money manager
- personal finance
- budget planner

**Strategy:** Include these for long-term, but don't expect quick results.

**Tier 2: Competitive (Difficulty 50-70)**
- spending tracker
- savings tracker
- bill tracker
- money tracker
- finance tracker

**Strategy:** Realistic targets for top 20-30 ranking.

**Tier 3: Achievable (Difficulty 30-50)**
- smart budget
- simple budget
- wise budget
- weekly budget
- monthly budget

**Strategy:** Target these for top 10 ranking.

**Tier 4: Quick Wins (Difficulty <30)**
- budget app for couples
- couple budget app
- envelope budgeting
- budget app no subscription
- simple expense tracker
- easy budget planner

**Strategy:** These are your fastest path to top 10.

### Long-Tail Opportunities for Pennywise

Based on app features, target:
- "budget tracker for couples" (if couple feature exists)
- "simple budget app" (simplicity differentiator)
- "daily budget tracker" (if daily tracking feature exists)
- "budget tracker with goals" (savings goals feature)
- "envelope budgeting app" (if envelope method supported)

### Keywords to Consider by Category

**By Feature:**
- expense, spending, bill, subscription, savings, goals

**By User Type:**
- couple, family, beginner, student, personal

**By Method:**
- envelope, zero-based, 50-30-20, daily, weekly, monthly

**By Benefit:**
- save, track, control, simple, easy, free

---

## Claude Analysis Prompt Template

When asking Claude to analyze ASO data, use this template:

```markdown
## ASO Analysis Request for Pennywise

### Current Metadata
- **Title:** [current title]
- **Subtitle:** [current subtitle]
- **Keywords:** [current keywords]

### Current Rankings (from Astro)
| Keyword | Popularity | Difficulty | Position |
|---------|------------|------------|----------|
| [keyword] | [X] | [X] | #X |
| ... | ... | ... | ... |

### Competitor Data (optional)
[Competitor name] top keywords:
- [keyword] - #X
- ...

### Low-Difficulty Opportunities
| Keyword | Popularity | Difficulty |
|---------|------------|------------|
| [keyword] | [X] | [X] |
| ... | ... | ... |

### Request
Please analyze this data and provide:
1. Analysis of current rankings (what's working, what's not)
2. Keyword opportunities to target
3. Optimized Title (max 30 chars)
4. Optimized Subtitle (max 30 chars)
5. Optimized Keywords field (max 100 chars, no repeated words from title/subtitle)
6. Priority actions for next update
7. Expected impact and timeline

Please follow all keyword insertion rules from the ASO Instruction Manual.
```

### Expected Claude Output Format

```markdown
## PENNYWISE ASO ANALYSIS - [Date]

═══════════════════════════════════════════════════════════

### 🏆 WINS
[What's working well]

### ⚠️ CONCERNS
[What needs attention]

### 🎯 OPPORTUNITIES
[Keywords to target with reasoning]

═══════════════════════════════════════════════════════════

### 📝 RECOMMENDED METADATA

**TITLE (XX/30 characters):**
Current: "[current]"
Suggested: "[suggested]"
Why: [reasoning]

---

**SUBTITLE (XX/30 characters):**
Current: "[current]"
Suggested: "[suggested]"
Why: [reasoning]

---

**KEYWORDS (XX/100 characters):**
Current: "[current]"
Suggested: "[suggested]"
Changes:
+ Added: [list]
- Removed: [list]

═══════════════════════════════════════════════════════════

### ✅ ACTION ITEMS FOR NEXT UPDATE

Priority 1: [action]
Priority 2: [action]
Priority 3: [action]

### 📈 EXPECTED IMPACT

[Timeline and expected results]

═══════════════════════════════════════════════════════════
```

---

## Troubleshooting Guide

### Problem: Rankings Not Improving After 4 Weeks

**Possible Causes:**
1. Keywords too competitive → Target easier keywords
2. App has few ratings/reviews → Focus on getting reviews
3. Competitors updated ASO → Check what they changed
4. Keywords repeated across fields → Audit for duplicates
5. Need more download velocity → Consider other marketing

### Problem: Impressions Up, Downloads Flat

**Diagnosis:** Keywords aren't relevant enough.

**Fix:**
1. Review keyword relevance scores
2. Remove keywords that attract wrong audience
3. Improve screenshot/description conversion
4. Check if competitors are more compelling

### Problem: Can't Beat Competitor for Keyword

**Reality Check:** If they have millions of users, you probably can't win that keyword.

**Alternative Strategy:**
1. Find long-tail variations they're ignoring
2. Target keywords where they rank #10-20 (not #1-3)
3. Build your own niche
4. Use their weaknesses (bad reviews, missing features)

### Problem: Ranking Dropped After Update

**Immediate Actions:**
1. Check if you accidentally broke keyword rules
2. Look for duplicate keywords
3. Verify no important keywords were removed
4. Check if competitors made changes

**If Needed:** Restore previous metadata and start over.

### Problem: Low Conversion Rate

**Potential Issues:**
1. Screenshots don't convey value
2. Description isn't compelling
3. Rating is too low
4. Price/monetization concerns
5. Wrong audience finding your app

---

## Resources & Tools

### Essential Tools

| Tool | Cost | Purpose |
|------|------|---------|
| **Astro** | $9/month | Keyword tracking, competitor analysis |
| **App Store Connect** | Free | Official analytics, metadata management |
| **Claude** | Existing | AI analysis and recommendations |

### Official Apple Resources

- [App Store Search](https://developer.apple.com/app-store/search/)
- [Creating Your Product Page](https://developer.apple.com/app-store/product-page/)
- [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Localization](https://developer.apple.com/localization/)

### Research Sources Used

- [AppTweak ASO Blog](https://www.apptweak.com/en/aso-blog)
- [MobileAction Blog](https://www.mobileaction.co/blog)
- [SplitMetrics Blog](https://splitmetrics.com/blog/)
- [Appfigures Resources](https://appfigures.com/resources)
- [ASO World](https://asoworld.com)

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| Jan 23, 2026 | 1.0 | Initial comprehensive guide created |

---

## Document Maintenance

This document should be updated:
- When Apple announces algorithm changes
- When new ASO best practices emerge
- After significant learnings from Pennywise optimization
- Quarterly review for accuracy

---

*This guide consolidates knowledge from Astro's official guides, current ASO research (2025-2026), and practical experience. Any Claude session can use this document to provide informed ASO recommendations for Pennywise.*
