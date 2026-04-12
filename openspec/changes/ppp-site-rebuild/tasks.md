# Tasks — ppp-site-rebuild

Implementation order follows dependency: shared layout first, then pages, then nav/footer cleanup.

---

## Task 1 — Create `MarketingLayout.astro`

**File:** `src/layouts/MarketingLayout.astro` (new file)

Create a shared layout for all non-blog marketing pages. It should:
- Import `BaseHead`, `Header`, `Footer`
- Accept `title` and `description` as props (passed to `BaseHead`)
- Render a `<main class="marketing-main">` slot with wider max-width than blog (960px)
- No blog-specific elements (no hero image slot, no date, no article wrapper)

---

## Task 2 — Replace homepage (`src/pages/index.astro`)

Replace the current blog-index homepage with a positioning-led marketing page using `MarketingLayout`.

Sections (in order):
1. **Hero** — headline, one-sentence positioning statement, primary CTA button linking to `/work-with-us`
2. **Audience** — brief "who this is for" section: funded EDs, nonprofit PMs, government agency leaders, foundation program officers
3. **Services summary** — 2–3 sentence overview of what People/Purpose/Product does (build + teach, AI for impact)
4. **Social proof** — Kromatic client list as text names (no logos yet). Add `<!-- TODO: replace with logo once approved per client -->` comment on each entry. Clients to include (from memory): Walmart Labs, Unilever, Siemens, US Government, plus "30+ organizations" framing.
5. **Blog preview** — fetch the 3 most recent blog posts from the content collection and render as a simple list with title + date
6. **Footer CTA** — brief closing line + link to `/work-with-us`

Voice: direct, grounded, mission-first — match existing blog post tone.

---

## Task 3 — Create `/ai` page (`src/pages/ai.astro`)

New page using `MarketingLayout`. Title: "AI for Impact, Not Extraction".

Sections:
1. **Opening stance** — People/Purpose/Product's position: AI is a lever for mission-driven work, not a replacement for domain expertise or human judgment
2. **What AI changes** — what's now possible for orgs with limited engineering resources
3. **What AI doesn't change** — domain knowledge, relationships, and judgment still determine outcomes; AI amplifies what's already there
4. **How we use it** — AI woven into the build process, not bolted on; teaching clients to use it, not creating dependency
5. **CTA** — link to `/work-with-us`

Voice: slightly contrarian, not preachy. Avoid buzzwords. Match blog voice.

---

## Task 4 — Create `/work-with-us` page (`src/pages/work-with-us.astro`)

New page using `MarketingLayout`. Primary conversion page.

Sections:
1. **Headline** — frames the first conversation, not a pitch
2. **How it works** — 4-step framing: Pain → Impact → Value Confirmed → Solution. Each step is a brief description of what happens in a discovery call.
3. **What to expect** — sets expectations: 30-minute call, no hard sell, diagnostic first
4. **Schedule** — embed the Google Calendar scheduling widget. Use placeholder comment: `<!-- TODO: replace with GCal embed code — Nick to supply -->` and a fallback link placeholder `href="YOUR_GCAL_LINK"`. Style the embed container to be centered, max-width 600px.
5. **Footer note** — "Not ready to talk? [Read the blog](/blog) or [learn about our AI approach](/ai)."

---

## Task 5 — Create `/case-studies` page (`src/pages/case-studies.astro`)

New placeholder page using `MarketingLayout`.

Content:
- Headline: "Case Studies"
- One paragraph: "Our first engagements are underway. Case studies will be published here as projects close." 
- Add `<!-- TODO: add case study entries here -->` comment where entries will go
- Simple CTA linking to `/work-with-us`

Keep it minimal — this page just needs to exist in the nav without looking broken.

---

## Task 6 — Replace `/about` page (`src/pages/about.astro`)

Replace the current blog bio with a team/about page using `MarketingLayout`.

Sections:
1. **Nick's section** — name, role ("Founder"), 2–3 sentence bio drawing on Kromatic background + product for impact framing. Include a photo placeholder: `<div class="photo-placeholder" aria-label="Photo coming soon"></div>` styled as a neutral rounded rectangle (e.g., 160×160px, `background: rgb(var(--gray-light))`).
2. **Collaborator section** — no name. Describe capabilities in aggregate: "Our team includes an experienced AI engineer and product strategist with a background in enterprise software." Add `<!-- Spike: unnamed by design — employed elsewhere -->` comment.
3. **Studio framing** — brief paragraph on the People/Purpose/Product methodology: teach and build *with*, not *for*.
4. **CTA** — link to `/work-with-us`

---

## Task 7 — Update `Header.astro`

Update navigation links to reflect the new site structure:

New nav order: **People/Purpose/Product** (logo/wordmark) | Home · About · AI · Work With Us · Blog

- Replace current links (Home / Blog / About) with: Home (`/`), About (`/about`), AI (`/ai`), Work With Us (`/work-with-us`), Blog (`/blog`)
- Keep the LinkedIn social link; remove the GitHub link (not relevant for a consultancy site)
- Keep existing active-state styling logic

---

## Task 8 — Update `Footer.astro`

Update footer for consultancy context:
- Keep copyright line
- Add nav links: About · AI · Work With Us · Blog (plain text links, no icons needed)
- Keep LinkedIn social link; remove GitHub link
- Keep existing styles — no layout overhaul

---

## Task 9 — Move blog index to `/blog`

The blog index already lives at `src/pages/blog/index.astro` — confirm it renders correctly at `/blog` now that `/` is the new marketing homepage. No URL changes needed for posts.

Review `src/pages/blog/index.astro` and ensure:
- It uses `Header` and `Footer` (consistent with rest of site)
- It lists all three existing posts correctly
- No references to the old root index behavior

---

## Task 10 — Commit and local preview checkpoint

After all tasks above are complete:
1. `git add` each modified/new file explicitly (no `-A`)
2. Commit with message: `feat: site rebuild — marketing pages, new nav, MarketingLayout`
3. Note for Nick: run `npm run dev` and verify all pages at localhost before opening PR

---

## Open items (Nick to supply)

- [ ] GCal scheduling link / embed code for Task 4
- [ ] Confirm nav order (current proposal: Home · About · AI · Work With Us · Blog)
- [ ] Confirm Kromatic client list completeness — full list is in `PROJECTS/work/peoplepurposeproduct/INBOX/Nick's Clients - Kromatic.pdf`
- [ ] Photo for About page (deferred — placeholder is in Task 6)
- [ ] Logo approval per Kromatic client (deferred — text-only ships first per Task 2)
