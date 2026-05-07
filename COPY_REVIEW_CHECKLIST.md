# PPP Site Copy Review Checklist

A page-by-page punch list for your copy pass before merging `site-rebuild` to `main`.

**How to use this:** Work top to bottom. Check the box when you've reviewed and either kept or revised the line. The path + line numbers are the same ones you'd find in source. Delete this file before merging (or move to `notes/` if you want to keep it).

---

## POSITIONING (LOCKED — May 7, 2026)

| Slot | Locked language |
|---|---|
| **Practice description** | An experimentation practice for mission-driven teams |
| **Tagline** | We help you build products people actually use, and figure out where AI fits in your work |
| **Service shape** | One practice, two questions — product discovery + AI adoption (no service-line split) |
| **CTA** | Start a conversation → |
| **"AI for impact, not extraction"** | Lives only on `/ai` (not homepage) |
| **Multiplai** | Off v1 site entirely |
| **Ship date** | Friday, May 15, 2026 |

### Direct swaps already applied (review for accuracy)

- ✅ `index.astro:17` H1 → "An experimentation practice / for mission-driven teams."
- ✅ `index.astro:19` tagline → new locked tagline
- ✅ `index.astro:13` meta description → new locked tagline
- ✅ `about.astro:9` meta description → "is an experimentation practice working with mission-driven teams to build products people actually use and figure out where AI fits in their work."
- ✅ `consts.ts:5` SITE_DESCRIPTION → "An experimentation practice for mission-driven teams."

### Still needs your prose pass — REWRITE PRIORITIES

The five direct swaps above don't propagate the new positioning to every page. Below are the four specific places where studio framing still leaks through. Each has a frame + bullets — you write the prose.

---

#### 🔧 REWRITE 1: Homepage `What we do` — `index.astro:42-50`

**Current copy:**
> We design and build digital products with mission-driven organizations, and we teach you to use AI throughout the process. Not as a shortcut. As a capability your team keeps after we're gone. Every engagement ends with your team more capable than when it started. That's the point.

**Why it needs to change:** "design and build digital products" is the studio frame. New positioning is experimentation as the engine.

**Frame:** Lead with the methodology (running experiments). Name the two flavors of question (product discovery, AI adoption). Close with the "more capable" outcome (which still carries forward).

**Bullets to draft against:**
- We work in 6–10 week experiment cycles (or whatever your actual rhythm is — adjust to truth)
- Two flavors of question we help you answer:
  - "What should we build, and is anyone going to use it?"
  - "What does AI mean for our work, and where does it fit?"
- Same engine either way: hypothesis, design, run, learn
- Outcome: your team gets the answer AND the capability to keep running experiments after we're gone

---

#### 🔧 REWRITE 2: Homepage closing CTA prompt — `index.astro:96`

**Current copy:**
> Ready to talk about what you're building?

**Why it needs to change:** "what you're building" implies the buyer is mid-build. Under new positioning the buyer is more often mid-question (figuring out what to build, or what AI means).

**Frame:** Ask a question that reflects either flavor of buyer (product or AI-adoption). Keep it short, conversational, slightly contrarian.

**Candidates to react to (pick one or write your own):**
- "Have a question worth running an experiment on?"
- "Trying to figure something out?"
- "Have something you'd like to test?"
- "Ready to learn something specific?"

---

#### 🔧 REWRITE 3: Work With Us H1 — `work-with-us.astro:12`

**Current copy:**
> Let's talk about what you're building.

**Why it needs to change:** Same "building" tension as above.

**Frame:** Open the conversation around a question, not a build. Match the "diagnostic, not pitch" tone already on the page.

**Candidates to react to:**
- "Let's talk about what you're trying to figure out."
- "Let's talk about your next experiment."
- "Let's start with the question."
- "What are you trying to learn?"

---

#### 🔧 REWRITE 4: Work With Us Step 4 "Solution" — `work-with-us.astro:36-39`

**Current copy:**
> **Solution** — If there's a fit, we sketch what an engagement might look like: scope, approach, rough timeline. This is the start of a proposal, not a close.

**Why it needs a smaller fix:** "Solution" as the step label sits awkwardly with experimentation framing. Solutions are what experiments produce, not what we propose at the end of a discovery call.

**Frame:** Reword the label and lightly retune the body. Structure (Pain / Impact / Value Confirmed / [new label]) stays.

**Candidate labels:**
- "Experiment design"
- "Engagement shape"
- "What we'd run"
- "Proposal"

**Body candidate:** "If there's a fit, we sketch the shape of an experiment cycle: scope, approach, rough timeline. This is the start of a proposal, not a close."

---

### Lower-priority polish (your call whether to touch in v1)

- Homepage "Who this is for" (`index.astro:25-37`) — copy is solid; consider whether "burned by vendors who built something and left" still fits the new buyer ("burned by consultants who delivered a deck...").
- About bio paragraph 3 (`about.astro:32-35`) — current question framing is "tools enterprises have"; consider whether "running experiments well" or similar is closer to what you want to plant.
- About "How we work" (`about.astro:57-66`) — could mention experimentation explicitly as your method (currently leans on Pivotal Labs / 37signals lineage).
- /ai page closing line (`ai.astro:78`) — currently "If this framing resonates, let's talk." — fine, but worth a re-read in context.

---

## 1. Homepage — `src/pages/index.astro`

### Hero
- [ ] **H1** (line 17): `AI for impact,<br />not extraction.` — does this still lead, or is the AI page where this belongs and the homepage needs a different lead?
- [ ] **Tagline** (line 19): `We help mission-driven organizations build digital products, and emerge more capable for having built them.` — *"build digital products"* tension with new positioning. Rewrite candidate.
- [ ] **CTA button text** (line 21): `Start a conversation →`

### Audience (`Who this is for`)
- [ ] **Buyer description** (lines 27–32): "funded executive director, nonprofit program manager, government agency leader, foundation program officer..."
- [ ] **Differentiator line** (lines 33–36): "burned by vendors who built something and left, or consultants who delivered a deck and disappeared..."

### Services (`What we do`)
- [ ] **Lead** (lines 42–45): `We design and build digital products with mission-driven organizations, and we teach you to use AI throughout the process.` — same "build" issue. Rewrite candidate.
- [ ] **Closing line** (lines 47–49): "Every engagement ends with your team more capable than when it started. That's the point."
- [ ] **Link to AI page** (line 50): `How we think about AI →`

### Social Proof (`Organizations we've worked with`)
- [ ] **Context line** (lines 56–58): "Before People/Purpose/Product, Nick spent years helping organizations like these..."
- [ ] **Client list** (lines 60–74): 12 named clients. Verify accuracy and any you'd want to remove.
- [ ] **Footnote** (line 75): "And 20+ other organizations across corporate, nonprofit, government, and international development."

### Blog Preview
- [ ] Auto-populated. No copy change.

### Closing CTA
- [ ] **Prompt** (line 96): `Ready to talk about what you're building?` — "building" word may need rework if positioning shifts.
- [ ] **CTA button** (line 97): `Work with us →`

---

## 2. About — `src/pages/about.astro`

### Page meta
- [ ] **Title** (line 8): `About | People/Purpose/Product`
- [ ] **Description** (line 9): `People/Purpose/Product is a product studio working with mission-driven organizations to build software that creates real impact.` — **REWRITE**: "product studio" + "build software" both off.

### Bio
- [ ] **Para 1 — career arc + Kromatic** (lines 21–25): true to you?
- [ ] **Para 2 — background** (lines 26–30): "started in San Francisco's tech ecosystem as a founder" — true?
- [ ] **Para 3 — current focus question** (lines 32–35): does the framing still match where you're heading?

### Collaborators
- [ ] **Para 1** (lines 44–48): unnamed AI engineer / product strategist (Spike). Wording fine?
- [ ] **Para 2** (lines 49–52): "We keep the team small deliberately."

### How we work
- [ ] **Para 1** (lines 58–61): Pivotal Labs / 37signals model framing.
- [ ] **Para 2** (lines 62–64): "We're not interested in dependency. We're interested in capability."

### CTA
- [ ] **CTA button** (line 68): `Work with us →`

---

## 3. AI — `src/pages/ai.astro`

### Page meta
- [ ] **Title** (line 6): `AI for Impact | People/Purpose/Product`
- [ ] **Description** (line 7): "Our stance on AI: a lever for mission-driven work, not a replacement for domain expertise or human judgment."

### Hero
- [ ] **H1** (line 10): `AI for impact,<br />not extraction.`
- [ ] **Subhead** (lines 11–13): "Here's what we actually believe about AI, and how it shapes the way we work."

### Our position
- [ ] **Para 1** (lines 18–23): "AI is the most significant shift in who can build software since cloud computing..."
- [ ] **Para 2** (lines 24–28): "We think domain expertise is the differentiator..."

### What AI changes
- [ ] **Para 1** (lines 33–38): cost-of-building drop framing.
- [ ] **Para 2** (lines 40–43): "You don't have to choose between an expensive custom build and a vendor product..."

### What AI doesn't change
- [ ] **Para 1** (lines 50–52): "Judgment. Relationships. Community trust..."
- [ ] **Para 2** (lines 53–56): "AI doesn't know your programs, your population..."
- [ ] **Para 3** (line 58): "Tools that promise to automate away that expertise are selling something. We're not."

### How we use it
- [ ] **Para 1** (lines 65–68): "AI is woven into how we work, not bolted on as a feature..."
- [ ] **Para 2** (lines 69–73): "More importantly, we teach clients to use it..."

### Closing
- [ ] **Closing line** (line 78): "If this framing resonates, let's talk."
- [ ] **CTA button** (line 79): `Work with us →`

---

## 4. Work With Us — `src/pages/work-with-us.astro`

### Page meta
- [ ] **Title** (line 8): `Work With Us | People/Purpose/Product`
- [ ] **Description** (line 9): "Schedule a conversation. We start by listening, not pitching."
- [ ] **Scheduling link** (line 4): `https://calendar.app.google/ZgCjgA8Mk3tosTmh9` — confirmed correct.

### Hero
- [ ] **H1** (line 12): `Let's talk about what you're building.` — "building" tension if positioning shifts.
- [ ] **Subhead** (lines 13–15): "The first conversation isn't a pitch. It's a diagnostic. Here's what to expect."

### How it works
- [ ] **Lead** (lines 20–22): "We run every first conversation the same way. Four things happen, in order:"
- [ ] **Step 1 — Pain** (lines 25–26)
- [ ] **Step 2 — Impact** (lines 28–30)
- [ ] **Step 3 — Value confirmed** (lines 32–34)
- [ ] **Step 4 — Solution** (lines 36–38) — "scope, approach, rough timeline" still fits if you sell strategy/coaching engagements?

### What to expect
- [ ] **Bullet 1** (line 46): "30 minutes. No prep required on your end."
- [ ] **Bullet 2** (line 47): "No hard sell. If we're not the right fit, we'll say so."
- [ ] **Bullet 3** (line 48): "You'll leave with clarity on whether this is worth pursuing, regardless of whether we work together."

### Schedule
- [ ] **Heading** (line 53): "Schedule a conversation"
- [ ] **Lead** (line 54): "Pick a time that works for you."
- [ ] **CTA button text** (line 56): `Find a time →`
- [ ] **Schedule note** (lines 58–60): "Prefer email? Reach out on LinkedIn..."

### Footer nav
- [ ] **Line** (line 64): "Not ready yet? Read the blog or learn how we think about AI."

---

## 5. Header / Footer / Site-wide

### `src/components/Header.astro`
- [ ] **Site title** (line 8) — pulls from `SITE_TITLE` constant.
- [ ] **Nav labels** (lines 10–14): Home / About / AI / Work With Us / Blog. Order and labels OK?
- [ ] **LinkedIn link** (line 17): `https://www.linkedin.com/in/nicknorena/`

### `src/components/Footer.astro`
- [ ] **Nav** (lines 7–10): About / AI / Work With Us / Blog (Home not duplicated, fine).
- [ ] **LinkedIn link** (line 13): same.
- [ ] **Copyright** (line 23): "© {year} Nick Noreña. All rights reserved."

### `src/consts.ts` (site-wide)
- [ ] **SITE_TITLE**: read and confirm
- [ ] **SITE_DESCRIPTION**: read and confirm — this drives meta tags on pages without explicit description override.

---

## 6. Meta / SEO

- [ ] **Default OG image**: check `BaseHead.astro` and any per-page overrides; using `blog-placeholder-1.jpg`?
- [ ] **Favicon**: check `public/` and `BaseHead.astro` reference.
- [ ] **`robots.txt`**: present? blocks /openspec, /admin?
- [ ] **`sitemap-index.xml`**: auto-generated by `@astrojs/sitemap` integration. Verify it lists all pages.

---

## 7. Blog (defer to v1.1)

The blog index uses `Header`/`Footer` directly instead of `MarketingLayout` — visual inconsistency. **Decision in plan: defer to v1.1.** Don't redesign for ship.

- [ ] Quick scan: 3 posts render with correct dates, titles, hero images.
- [ ] No `case-studies` orphan link in any blog post.

---

## 8. Positioning gate (resolve before committing copy revisions)

These are the open questions that affect every page above. Lock these first.

### Q1: Studio framing
- [ ] Decision: **drop "product studio"** in favor of: ___________________________
  Candidates: "consulting practice" · "AI strategy practice" · "advisory" · custom

### Q2: Service shape
- [ ] Decision: **integrated story** ("strategy + change management as one journey") OR **two distinct service lines** (separate paths and CTAs).

### Q3: "Build" word
- [ ] Decision: **keep where it refers to capability building**, drop where it implies "we build software for you."
  Verify each "build" instance per page.

### Q4: Multiplai
- [ ] Decision: **off v1 site entirely.** Re-evaluate for v1.1 once shape is clear.

### Q5: H1 on Homepage
- [ ] Decision: keep `AI for impact, not extraction` as homepage H1 (also AI page H1) OR move to a more positioning-forward H1 and let "AI for impact, not extraction" live on /ai only.

---

## 9. Pre-merge sanity

- [ ] `npm run build` clean
- [ ] `npm run dev` — click every nav link, verify no 404
- [ ] Mobile (≤720px) — every page renders without overflow / broken layout
- [ ] No em-dashes (re-grep: `grep "—" src/pages/*.astro src/components/*.astro src/consts.ts`)
- [ ] Headshot renders correctly on About at desktop and mobile
- [ ] Blog posts still load: `/blog`, `/blog/magic-wand`, `/blog/ai-as-helper`, `/blog/people-with-the-most-to-say`
- [ ] `/case-studies` returns 404
- [ ] Scheduling link opens correctly: https://calendar.app.google/ZgCjgA8Mk3tosTmh9
