# Pennywise ASO (App Store Optimization) System

## Complete A-to-Z Implementation Guide

**Document Purpose:** This document contains everything needed to understand, implement, and execute the ASO system for Pennywise. Any new Claude session can read this and immediately understand what we're building, why, and how to proceed.

**Last Updated:** January 22, 2026

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Background & Context](#background--context)
3. [What is ASO?](#what-is-aso)
4. [The System We're Building](#the-system-were-building)
5. [Tools & Costs](#tools--costs)
6. [Step-by-Step Setup Guide](#step-by-step-setup-guide)
7. [Weekly Workflow](#weekly-workflow)
8. [How to Measure Success](#how-to-measure-success)
9. [ASO Best Practices for 2026](#aso-best-practices-for-2026)
10. [Keyword Strategy for Budget Apps](#keyword-strategy-for-budget-apps)
11. [Competitors to Monitor](#competitors-to-monitor)
12. [iOS App Store Metadata Limits](#ios-app-store-metadata-limits)
13. [Example Claude Analysis Session](#example-claude-analysis-session)
14. [Troubleshooting & FAQs](#troubleshooting--faqs)
15. [Resources & References](#resources--references)

---

## Executive Summary

### What We're Building
A simple, cost-effective ASO system for the Pennywise budget app that:
- Tracks keyword rankings in the iOS App Store
- Provides AI-powered optimization recommendations
- Costs only **$9/month** (Astro subscription)
- Requires **10-15 minutes per week** of manual work
- Uses **Claude** (existing subscription) for AI analysis

### The Core Workflow
1. **Astro** (Mac app) provides keyword data
2. **Claude** analyzes data and generates optimized metadata
3. **You** implement recommendations in your next app update
4. **Repeat weekly** to continuously improve rankings

### Why This Approach
- **Cost-effective:** $9/month vs $83-1000+/month for alternatives
- **Simple:** No automation, no infrastructure, no maintenance
- **Effective:** Same data sources as expensive tools (Apple Search Ads)
- **Flexible:** You control when and what to optimize

---

## Background & Context

### About Pennywise
- **Type:** Personal finance / budget tracking app
- **Platform:** iOS (App Store)
- **Target Users:** People who want to track expenses and budget
- **Competitors:** YNAB, Mint, PocketGuard, Goodbudget, EveryDollar, Copilot Money

### The Problem
- Pennywise needs to rank higher in App Store search results
- Competing against well-funded apps with millions of users
- Manual keyword research is time-consuming and inefficient
- Expensive ASO tools ($83-500+/month) are overkill for a single indie app

### The Solution
A lean ASO system that combines:
- **Astro** for professional-grade keyword data ($9/month)
- **Claude** for AI-powered analysis and recommendations (existing subscription)
- **Manual weekly check-ins** (no automation needed)

---

## What is ASO?

### Definition
App Store Optimization (ASO) is the process of improving an app's visibility in app store search results. It's like SEO, but for app stores.

### Why It Matters
- **65%+ of App Store downloads** come from search
- Higher rankings = more organic (free) downloads
- Better than paid ads for long-term sustainable growth

### Key Ranking Factors (iOS App Store)

| Factor | Weight | What It Means |
|--------|--------|---------------|
| **App Title** | Highest | Keywords here have most impact |
| **Subtitle** | High | Secondary keyword placement |
| **Keyword Field** | High | 100 hidden characters for keywords |
| **Downloads/Velocity** | High | More downloads = higher ranking |
| **Ratings & Reviews** | Medium-High | Quality signals to Apple |
| **Retention** | Medium | Do users keep the app? |
| **Update Frequency** | Low-Medium | Active development signal |

### What You Can Control
- **Title** (30 characters max)
- **Subtitle** (30 characters max)
- **Keyword field** (100 characters, hidden from users)
- **Description** (not indexed for search, but affects conversion)
- **Screenshots & preview video** (affects conversion rate)

---

## The System We're Building

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                     ASO SYSTEM OVERVIEW                      │
│                                                              │
│   ┌─────────────┐         ┌─────────────┐                   │
│   │   ASTRO     │         │   CLAUDE    │                   │
│   │  (Mac App)  │         │    (AI)     │                   │
│   │             │         │             │                   │
│   │  Provides:  │         │  Provides:  │                   │
│   │  • Rankings │────────▶│  • Analysis │                   │
│   │  • Keywords │  You    │  • Strategy │                   │
│   │  • Trends   │  paste  │  • Copy     │                   │
│   │  • Comps    │  data   │  • Recs     │                   │
│   └─────────────┘         └─────────────┘                   │
│                                  │                           │
│                                  ▼                           │
│                          ┌─────────────┐                    │
│                          │  YOU APPLY  │                    │
│                          │  CHANGES IN │                    │
│                          │  NEXT APP   │                    │
│                          │   UPDATE    │                    │
│                          └─────────────┘                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### What Each Component Does

#### Astro ($9/month)
- **Tracks your keyword rankings** daily across 60+ countries
- **Shows keyword popularity** (from Apple Search Ads - real data)
- **Shows keyword difficulty** (how hard to rank top 10)
- **Spies on competitors** (see what keywords they rank for)
- **Finds keywords automatically** (discovers keywords you didn't know about)

#### Claude (Your existing subscription)
- **Analyzes the data** from Astro
- **Identifies opportunities** (low competition, high traffic keywords)
- **Generates optimized copy** (titles, subtitles, keyword fields)
- **Explains strategy** (why certain changes will help)
- **Tracks progress** (compares week-over-week changes)

#### You (10-15 min/week)
- **Extract data** from Astro
- **Paste into Claude** for analysis
- **Review recommendations** and decide what to implement
- **Apply changes** in your next app update

### What We're NOT Building
- ❌ Automated Telegram bot
- ❌ Cron jobs or scheduled tasks
- ❌ Database or server infrastructure
- ❌ Custom scrapers
- ❌ Integration with App Store Connect

---

## Tools & Costs

### Required Tools

| Tool | Cost | Purpose | Where to Get |
|------|------|---------|--------------|
| **Astro** | $108/year ($9/mo) | Keyword tracking & data | [tryastro.app](https://tryastro.app) |
| **Claude** | Existing subscription | AI analysis & recommendations | Already have |

### Total Monthly Cost: **$9**

### Why Astro?

We evaluated multiple options:

| Tool | Cost | Verdict |
|------|------|---------|
| **Astro** | $9/mo | ✅ Best value for indie developers |
| AppTweak | $83/mo | Too expensive for single app |
| MobileAction | $15-69/mo | Good but more than needed |
| Sensor Tower | $25,000+/yr | Enterprise only |
| AppAgent (self-hosted) | Free | No ranking tracking |
| Building our own | $20-50/mo + time | Not worth it |

### What Makes Astro Worth It
1. **Real data from Apple Search Ads** - not estimates
2. **Unlimited keyword tracking** - no caps
3. **Competitor keyword spying** - see what works for others
4. **Historical tracking** - see trends over time
5. **Mac native app** - fast and reliable

---

## Step-by-Step Setup Guide

### Phase 1: Get Astro (Day 1)

#### Step 1.1: Purchase Astro
1. Go to [tryastro.app](https://tryastro.app)
2. Download the Mac app
3. Purchase subscription ($108/year)

#### Step 1.2: Add Pennywise
1. Open Astro
2. Click "Add App"
3. Search for "Pennywise" in the App Store
4. Select your app

#### Step 1.3: Add Target Keywords
Add these initial keywords to track:

**Primary Keywords (high priority):**
- budget app
- budget tracker
- expense tracker
- money tracker
- budget planner
- spending tracker

**Secondary Keywords (medium priority):**
- personal finance
- money manager
- expense manager
- savings tracker
- bill tracker
- finance app

**Long-tail Keywords (lower competition):**
- budget app for couples
- simple budget app
- budget app free
- envelope budgeting
- budget planner app
- expense tracker free
- money saving app
- couple budget app

#### Step 1.4: Add Competitors
Add these apps to monitor:
1. **YNAB** (You Need a Budget)
2. **Mint** (Intuit)
3. **PocketGuard**
4. **Goodbudget**
5. **EveryDollar**
6. **Copilot Money**

#### Step 1.5: Set Your Store
- Primary: United States
- Optional: Add other markets you care about (UK, Canada, etc.)

### Phase 2: Gather Baseline Data (Day 2-3)

#### Step 2.1: Wait for Astro to Update
- Astro updates rankings every 24 hours
- Wait at least 24 hours after setup

#### Step 2.2: Document Your Current Metadata
Write down your current App Store listing:

```
CURRENT PENNYWISE METADATA:

Title (30 chars max): [Your current title]
Subtitle (30 chars max): [Your current subtitle]
Keywords (100 chars max): [Your current keyword field]
```

#### Step 2.3: Record Baseline Rankings
From Astro, record where you currently rank:

```
BASELINE RANKINGS (Date: ______)

Keyword                  | Rank  | Popularity | Difficulty
-------------------------|-------|------------|------------
budget app               | #___  | ___        | ___
expense tracker          | #___  | ___        | ___
budget planner           | #___  | ___        | ___
[etc.]
```

### Phase 3: First Claude Analysis (Day 3-4)

#### Step 3.1: Prepare Your Data
Copy your Astro data into a format like this:

```
My app: Pennywise

Current metadata:
- Title: [your title]
- Subtitle: [your subtitle]
- Keywords: [your keywords]

My rankings:
- "budget app" - #52, Popularity: 45, Difficulty: 78
- "expense tracker" - #78, Popularity: 38, Difficulty: 65
- [etc.]

Competitor YNAB top keywords:
- "budget app" - #3
- "budgeting" - #1
- [etc.]

Interesting low-competition keywords I found:
- "couple budget app" - Popularity: 35, Difficulty: 22
- [etc.]
```

#### Step 3.2: Ask Claude for Analysis
Paste your data into Claude and ask:

> "Analyze my ASO data for Pennywise and give me:
> 1. Analysis of my current rankings
> 2. Keyword opportunities I should target
> 3. Optimized title (max 30 chars)
> 4. Optimized subtitle (max 30 chars)
> 5. Optimized keyword field (max 100 chars)
> 6. Priority actions for my next app update"

#### Step 3.3: Save Recommendations
Save Claude's recommendations somewhere (Notes app, document, etc.) for when you submit your next app update.

### Phase 4: Implement Changes (When Ready)

#### Step 4.1: Update Your App
When you're ready to submit a new version of your app:

1. Open App Store Connect
2. Create a new version
3. Update your metadata:
   - **App Name** (title)
   - **Subtitle**
   - **Keywords** (under "App Information")
4. Submit for review

#### Step 4.2: Note the Date
Record when you submitted the update. It takes 3-6 weeks to see full ranking impact.

---

## Weekly Workflow

### Every Week (10-15 minutes)

```
WEEKLY ASO CHECK-IN

□ Step 1: Open Astro (2 min)
  └─ Check your keyword rankings
  └─ Note any significant changes (↑ or ↓ 5+ positions)
  └─ Look at competitor changes

□ Step 2: Copy Key Data (2 min)
  └─ Your top 10-15 keyword rankings
  └─ Any new keywords you're ranking for
  └─ Competitor keywords that look interesting

□ Step 3: Analyze with Claude (5-10 min)
  └─ Paste your data
  └─ Ask for analysis and recommendations
  └─ Get updated metadata suggestions if needed

□ Step 4: Save Insights (1 min)
  └─ Document what's working
  └─ Note recommendations for next update
  └─ Track week-over-week progress
```

### Monthly Review

Once a month, do a deeper analysis:
- Compare rankings to 4 weeks ago
- Identify which changes worked
- Plan bigger strategic shifts if needed
- Check App Store Connect analytics for download trends

---

## How to Measure Success

### Primary Metrics (from Astro)

| Metric | What to Track | Success Looks Like |
|--------|---------------|-------------------|
| **Keyword Rankings** | Position for target keywords | Moving up over time |
| **New Keywords** | Keywords you start ranking for | More keywords = more visibility |
| **Top 10 Keywords** | How many keywords you're top 10 | Increasing count |
| **Competitor Gap** | Difference between you and competitors | Gap shrinking |

### Secondary Metrics (from App Store Connect)

| Metric | Where to Find | Success Looks Like |
|--------|---------------|-------------------|
| **Search Impressions** | Analytics → Acquisition | Increasing |
| **Search Downloads** | Analytics → Acquisition | Increasing |
| **Conversion Rate** | Impressions vs Downloads | Stable or improving |

### Timeline Expectations

| Timeframe | What to Expect |
|-----------|---------------|
| Week 1-2 | No change (Apple indexing new metadata) |
| Week 3-4 | Rankings start shifting |
| Week 5-8 | Full impact visible |
| Month 3-6 | Significant ranking improvements if strategy is working |
| Month 6-12 | Compound gains from continuous optimization |

### What Good Progress Looks Like

**Month 1:**
- Baseline established
- First optimization implemented
- Tracking 20-30 keywords

**Month 3:**
- 5-10 keywords improved by 10+ positions
- Ranking for 5+ new keywords
- Starting to appear in top 50 for main keywords

**Month 6:**
- Top 20-30 for primary keywords
- Top 10 for several long-tail keywords
- Noticeable increase in organic downloads

### Red Flags (When to Adjust Strategy)

- Rankings dropping for multiple keywords → Investigate why
- No movement after 6+ weeks → Keywords may be too competitive
- Competitors pulling ahead → Analyze what they changed

---

## ASO Best Practices for 2026

### Keyword Placement Priority

1. **App Title** (highest weight) - Put most important keyword here
2. **Subtitle** (high weight) - Secondary keywords
3. **Keyword Field** (high weight) - All other relevant keywords

### Keyword Field Rules (100 Characters)

- **DO:** Separate keywords with commas (no spaces after commas)
- **DO:** Use singular forms (Apple handles plurals)
- **DO:** Include misspellings users might search
- **DON'T:** Repeat words already in title/subtitle
- **DON'T:** Use competitor brand names
- **DON'T:** Use spaces after commas (wastes characters)

**Example:**
```
Good: budget,expense,tracker,money,savings,planner,bills,finance,spending,couple,simple,free
Bad:  budget, expense, tracker, money, savings (spaces waste characters)
Bad:  budget app, expense tracker (don't need "app" and "tracker" twice)
```

### 2026 Trends to Know

1. **User retention matters more** - Apple favors apps that users keep and engage with
2. **Update frequency signals quality** - Aim for updates every 2-4 weeks
3. **Ratings are critical** - Apps with 4.5+ stars get significantly more downloads
4. **Long-tail keywords win** - Less competition, more targeted users
5. **Localization multiplies reach** - Each locale is a new opportunity

### Common Mistakes to Avoid

- ❌ Targeting only high-competition keywords
- ❌ Changing metadata too frequently (let changes settle for 4+ weeks)
- ❌ Ignoring long-tail keywords
- ❌ Not tracking competitors
- ❌ Expecting overnight results

---

## Keyword Strategy for Budget Apps

### High Competition (Hard to Rank)
These are dominated by big players but important for visibility:
- budget app
- expense tracker
- money manager
- budget planner
- personal finance

**Strategy:** Include these, but don't expect top 10 quickly

### Medium Competition (Achievable)
More realistic targets for an indie app:
- spending tracker
- savings tracker
- bill tracker
- money tracker
- budget tracker app

**Strategy:** Focus on getting top 20-30 here

### Low Competition (Quick Wins)
Niche keywords with less competition:
- budget app for couples
- simple budget app
- envelope budgeting app
- budget app no subscription
- couple expense tracker
- easy budget planner
- budget app free trial

**Strategy:** Target these for quick wins and top 10 rankings

### Keyword Ideas by Category

**By Feature:**
- expense tracker, spending tracker, bill tracker, subscription tracker
- savings goals, money goals, budget goals

**By User Type:**
- budget app for couples, family budget, shared expenses
- budget app for beginners, simple budget, easy budget

**By Method:**
- envelope budgeting, zero based budget, 50 30 20 budget

**By Benefit:**
- save money app, money saving, track spending, control spending

---

## Competitors to Monitor

### Primary Competitors

| App | Why Monitor | What to Learn |
|-----|-------------|---------------|
| **YNAB** | Market leader, excellent ASO | Keyword strategy, messaging |
| **Mint** | Massive user base | Brand keywords, features |
| **PocketGuard** | Direct competitor | Positioning, keywords |
| **Goodbudget** | Envelope budgeting focus | Niche keywords |
| **EveryDollar** | Strong brand (Dave Ramsey) | Audience targeting |
| **Copilot Money** | Modern, AI-focused | Trend keywords |

### What to Track About Competitors

1. **Their top keywords** - What are they ranking #1-10 for?
2. **Keyword gaps** - What do they rank for that you don't?
3. **Metadata changes** - When they update title/subtitle
4. **Rating trends** - Are they improving or declining?

---

## iOS App Store Metadata Limits

### Character Limits

| Field | Limit | Indexed for Search? |
|-------|-------|---------------------|
| App Name (Title) | 30 characters | ✅ Yes (highest weight) |
| Subtitle | 30 characters | ✅ Yes (high weight) |
| Keyword Field | 100 characters | ✅ Yes (high weight) |
| Description | 4,000 characters | ❌ No (but affects conversion) |
| Promotional Text | 170 characters | ❌ No |
| What's New | 4,000 characters | ❌ No |

### Optimization Tips

**Title (30 chars):**
```
Format: "AppName: Primary Keyword"
Example: "Pennywise: Budget Planner"
         "Pennywise - Expense Tracker"
```

**Subtitle (30 chars):**
```
Format: "Benefit + Secondary Keyword"
Example: "Track Spending & Save Money"
         "Simple Budget for Couples"
```

**Keywords (100 chars):**
```
Rules:
- Comma separated, NO spaces
- Singular forms only
- Don't repeat title/subtitle words
- Most important keywords first

Example:
budget,expense,money,tracker,savings,planner,spending,bills,couple,envelope,simple,free,finance
```

---

## Example Claude Analysis Session

### Your Input to Claude

```
Here's my Astro data for Pennywise this week:

CURRENT METADATA:
Title: Pennywise - Budget Tracker
Subtitle: Save Money & Track Expenses
Keywords: budget,money,tracker,savings,expense,finance,spending,bills

MY RANKINGS:
- "budget app" - #52 (was #56 last week) ↑4
- "expense tracker" - #78 (was #74) ↓4
- "budget planner" - #41 (was #53) ↑12
- "money tracker" - #95 (new)
- "spending tracker" - #67 (was #70) ↑3

KEYWORD OPPORTUNITIES (low difficulty):
- "couple budget app" - Popularity: 35, Difficulty: 22 (I don't rank)
- "simple expense tracker" - Popularity: 28, Difficulty: 18 (I don't rank)
- "envelope budgeting" - Popularity: 31, Difficulty: 25 (I don't rank)

COMPETITOR YNAB TOP KEYWORDS:
- "budget app" - #3
- "budgeting app" - #1
- "envelope budget" - #2
- "budget for couples" - #8

Please analyze and give me recommendations.
```

### Claude's Expected Output

```
📊 PENNYWISE ASO ANALYSIS - [Date]

═══════════════════════════════════════════════════════════

🏆 WINS THIS WEEK

✅ "budget planner" jumped 12 spots (#53 → #41)
   This is your best performing keyword. It should stay prominent
   in your metadata.

✅ "budget app" up 4 spots (#56 → #52)
   Slow but steady progress on this competitive keyword.

✅ "spending tracker" up 3 spots (#70 → #67)
   Good momentum, keep this keyword.

═══════════════════════════════════════════════════════════

⚠️ CONCERNS

❌ "expense tracker" dropped 4 spots (#74 → #78)
   This is highly competitive. Consider focusing on the long-tail
   version "simple expense tracker" instead.

═══════════════════════════════════════════════════════════

🎯 OPPORTUNITIES

Based on your data, here are 3 keywords you should target:

1. "couple budget app"
   Popularity: 35 | Difficulty: 22 | You don't rank
   → Your app supports couples, and this has low competition

2. "envelope budgeting"
   Popularity: 31 | Difficulty: 25 | You don't rank
   → YNAB ranks #2, but difficulty is manageable

3. "simple expense tracker"
   Popularity: 28 | Difficulty: 18 | You don't rank
   → "Simple" differentiates from complex competitors

═══════════════════════════════════════════════════════════

📝 RECOMMENDED METADATA CHANGES

TITLE (29 characters):
Current:  "Pennywise - Budget Tracker"
Suggested: "Pennywise: Budget Planner"

Why: "Budget planner" is your best-performing keyword (+12 spots).
Move it to the title for maximum weight.

---

SUBTITLE (28 characters):
Current:  "Save Money & Track Expenses"
Suggested: "Simple Budget for Couples"

Why: Targets two low-competition opportunities:
- "simple" (differentiator)
- "couples" (niche with low difficulty)

---

KEYWORDS (98 characters):
Current:  budget,money,tracker,savings,expense,finance,spending,bills
Suggested: budget,expense,tracker,money,envelope,couple,savings,spending,bills,simple,free,personal,easy

Changes:
+ Added: envelope, couple, simple, easy, personal, free
- Removed: finance (low relevance)
- Note: "planner" removed because it's now in title

═══════════════════════════════════════════════════════════

✅ ACTION ITEMS FOR NEXT UPDATE

Priority 1: Change title to include "Budget Planner"
Priority 2: Add "couple" and "envelope" to keywords
Priority 3: Update subtitle to target "simple" + "couples" niche

Expected impact:
- Should rank for 3+ new keywords within 4-6 weeks
- "budget planner" should continue climbing
- Potential top 30 for "couple budget app" (low competition)

═══════════════════════════════════════════════════════════
```

---

## Troubleshooting & FAQs

### Q: Rankings aren't improving after 4 weeks. What's wrong?

**Possible causes:**
1. Keywords are too competitive → Target easier keywords
2. App has few ratings/reviews → Focus on getting more reviews
3. Competitors updated their ASO → Check what they changed
4. Need more download velocity → Consider other marketing

### Q: Should I change keywords every update?

**No.** Give keywords 4-6 weeks to show impact. Changing too frequently makes it impossible to know what's working.

### Q: How do I know which keywords to prioritize?

**Formula:** High Popularity + Low Difficulty + High Relevance = Best Target

- Popularity > 25 is good
- Difficulty < 50 is achievable for indie apps
- Must be relevant to your app

### Q: My competitor ranks #1, can I beat them?

**Probably not for that specific keyword** if they have millions of users. Instead:
- Find long-tail variations they're ignoring
- Target keywords where they're #10-20 (not #1-3)
- Build your own niche

### Q: Is it worth optimizing for non-US stores?

**Yes, eventually.** Start with US, then expand to:
- UK, Canada, Australia (English, easy)
- Germany, France, Spain (large markets)
- Each locale is a separate opportunity

### Q: How often should I check Astro?

**Once per week is enough.** Rankings don't change dramatically day-to-day, and you can only update metadata with app releases anyway.

---

## Resources & References

### Official Documentation
- [Apple App Store Product Page Guidelines](https://developer.apple.com/app-store/product-page/)
- [Apple Search Ads Best Practices](https://searchads.apple.com/best-practices)
- [Astro Documentation](https://tryastro.app/docs/)

### ASO Guides
- [Moburst ASO Guide 2026](https://www.moburst.com/blog/app-store-optimization-guide/)
- [AppTweak ASO Best Practices](https://www.apptweak.com/en/aso-blog/app-store-optimization-aso-best-practices)
- [MobileAction Keyword Research 2026](https://www.mobileaction.co/blog/aso-keyword-research/)

### Tools Evaluated (For Reference)
- **Astro** (chosen): [tryastro.app](https://tryastro.app) - $9/mo
- AppTweak: [apptweak.com](https://apptweak.com) - $83+/mo
- MobileAction: [mobileaction.co](https://mobileaction.co) - $15-69/mo
- AppAgent (open source): [github.com/ngo275/app-agent](https://github.com/ngo275/app-agent)

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│              PENNYWISE ASO QUICK REFERENCE                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  TOOLS:                                                      │
│  • Astro (Mac app) - $9/month - keyword data                │
│  • Claude - AI analysis (existing subscription)             │
│                                                              │
│  WEEKLY WORKFLOW (10-15 min):                               │
│  1. Open Astro → check rankings                             │
│  2. Copy data → paste to Claude                             │
│  3. Get recommendations → save for next update              │
│                                                              │
│  METADATA LIMITS:                                            │
│  • Title: 30 characters                                      │
│  • Subtitle: 30 characters                                   │
│  • Keywords: 100 characters                                  │
│                                                              │
│  KEYWORD TIPS:                                               │
│  • No spaces after commas                                    │
│  • Singular forms only                                       │
│  • Don't repeat title/subtitle words                        │
│  • Priority: High relevance + Low difficulty                │
│                                                              │
│  TIMELINE:                                                   │
│  • Week 1-2: Apple indexes changes                          │
│  • Week 3-4: Rankings start moving                          │
│  • Week 5-8: Full impact visible                            │
│                                                              │
│  SUCCESS METRICS:                                            │
│  • Rankings improving over time                              │
│  • Ranking for more keywords                                │
│  • Search downloads increasing (App Store Connect)          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Document History

| Date | Change |
|------|--------|
| Jan 22, 2026 | Initial document created |

---

*This document should be updated as the ASO strategy evolves and new learnings are discovered.*
