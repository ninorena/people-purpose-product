# Content pass — titles + descriptions

Working doc for revising post titles and descriptions. Pick, edit, or reject freely.

## How the ripple works (why this is safe)

- **Display titles live only in each post's frontmatter.** The blog cards, post page h1,
  browser tab, OG tags, and RSS all derive from it at build time. Change the frontmatter,
  everything updates. No other file references titles by string.
- **URLs come from filenames** (`ai-as-helper.md` → `/blog/ai-as-helper/`), not titles.
  Keeping filenames as-is means zero broken links no matter how titles change.
- If you also want the *slugs* to match new titles, that changes URLs. GitHub Pages can't
  do server-side redirects, so old links (LinkedIn shares, RSS readers) would 404.
  Recommendation: keep the slugs, change only display titles.

---

## 1. ai-as-helper.md
**Current title:** "AI as Helper: What jobs are you hiring AI to do?"

The question is the hook; the "AI as Helper:" prefix is throat-clearing.

Title options:
- **What Are You Hiring AI to Do?** (recommended — keeps the JTBD hook, cuts the label)
- The Job You Hire AI to Do
- Off the Impact Treadmill

Description options (current is my draft-grade placeholder):
- **AI will hand you back hours every week. What happens next depends on the job you hired it to do.** (recommended)
- On the Impact Treadmill, saved time just gets absorbed. Keeping your agency starts with knowing what you hired AI for.

## 2. people-with-the-most-to-say.md
**Current title:** "The people with the most to say about AI are not in tech"

Note: the current description contains em dashes ("the deepest expertise — and the most
leverage —"), which your style rules say to strip.

Title options:
- **Bounded Creativity** (recommended — it's your own strongest section header, and provocative-subhead titles fit your thesis-essay pattern)
- The Expertise Isn't in Tech
- The Tools Caught Up to the Expertise

Description options:
- **Who sets the constraints on AI, and what do they optimize for? The people with the deepest expertise have more leverage than they think.** (recommended)
- Tech's AI conversation is bounded by its own incentives. The people who understand the problems worth solving sit outside it.

## 3. magic-wand.md
**Current title:** "What are you doing with your new magic wand?"

This one is closest to working already; it's mostly length.

Title options:
- **Your New Magic Wand** (recommended — short, and the post still closes with the full question)
- A Magic Wand and Better Constraints

Description options:
- **Everyone got the same magic wand. The difference is the constraints that shape how you use it.** (recommended — tightens your current one)
- Mission-driven teams can now experiment as fast as tech companies. Three questions to ask before you start.

## 4. things-get-easier.md
**Keep as-is.** Title is short and the description ("We welcomed our son Noah, and to my
surprise, clarity of purpose has made a lot of life easier.") already does the job.
