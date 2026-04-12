## Context

The current site is a stock Astro blog template with three published posts and minimal customization. It has no nav beyond the blog, no positioning, and no conversion path. The goal is to expand it into a full consultancy marketing site while keeping the blog intact and preserving all existing URLs.

The site is hosted statically (no server). All pages are `.astro` files. Blog content is Markdown in `src/content/blog/`. The existing stack (Astro, TypeScript) stays unchanged — no new dependencies are being introduced.

Nick will preview all changes locally (`npm run dev`) before anything goes live. A PR-based review step is expected before merging to `main`.

## Goals / Non-Goals

**Goals:**
- Add five new/replaced pages: homepage, AI opinion, Work With Us, Case Studies, About/Team
- Update nav and footer to reflect the full site
- Preserve all existing blog post URLs (`/blog/[slug]`)
- Keep the implementation simple — static Astro pages, no CMS, no backend
- Match the voice and tone of the existing blog posts (direct, grounded, mission-first)

**Non-Goals:**
- CMS integration — content is hardcoded in `.astro` files for now
- Contact form backend — the Work With Us CTA links to a scheduling tool (Calendly or equivalent), not a form
- Design system overhaul — incremental visual improvements within the existing CSS, not a full redesign
- Mobile-specific layout work beyond Astro defaults — responsive polish is deferred
- Case study content — the page is scaffolded as a placeholder only

## Decisions

### 1. Keep Astro, no new frameworks

**Decision:** All new pages are `.astro` files using the existing layout components. No React, no Tailwind, no new dependencies.

**Rationale:** The existing blog already works and is deployed. Introducing a new framework or CSS approach would require migrating the existing pages too, creating unnecessary risk. The goal is to add pages, not re-platform.

**Alternative considered:** React/Vite (the crow-flies approach). Rejected — Astro handles the blog content natively and is already deployed. Migrating would break the blog.

---

### 2. Blog moves to `/blog`, not site root

**Decision:** The blog index moves from `/` to `/blog`. The homepage becomes the marketing landing page.

**Rationale:** The blog is a content section of the site, not the entry point. Visitors arriving from search or referrals should land on a page that explains who People/Purpose/Product is, not a list of posts.

**Migration:** Existing post URLs (`/blog/[slug]`) are unaffected — they already live under `/blog/`. Only the index route changes.

**Risk:** Anyone bookmarked to `/` for the blog will land on the new homepage instead. Acceptable — the blog is new and has minimal direct traffic.

---

### 3. New shared layout for marketing pages

**Decision:** Create a new `MarketingLayout.astro` (or extend `BlogPost.astro`) for the non-blog pages. The blog continues using its existing layout.

**Rationale:** Marketing pages need different structure than blog posts — no hero image, different header treatment, wider content areas. A shared layout keeps nav/footer consistent without forcing blog pages into a marketing mold.

---

### 4. Work With Us CTA links to external scheduler

**Decision:** The primary CTA on the Work With Us page is a link to an external scheduling tool (Calendly or equivalent), not a form.

**Rationale:** No backend, no form submission handling. A scheduling link gets someone to a real conversation faster. Nick can add/change the link without a code change — just update the URL.

**Open:** Nick needs to confirm which scheduling tool to link to.

---

### 5. Unnamed collaborator handled with placeholder text

**Decision:** The About/Team page references the collaborator with a generic description of capabilities (AI engineering, product) without naming them. A clearly marked placeholder section is used.

**Rationale:** The collaborator is employed elsewhere full-time. Naming them creates professional risk. Placeholder text keeps the team framing honest without exposing them.

## Risks / Trade-offs

- **CSS scope creep** → Keep all new styles scoped to their page component. Do not modify `global.css` unless fixing an existing issue.
- **Blog index redirect** → `/` will now show the marketing homepage. If the blog index was linked anywhere externally, those links will land on the homepage instead of the blog. Low risk given the blog is new.
- **Placeholder content ships** → Case Studies and About/Team will have visible placeholder text. Acceptable for a brand launch; must be clearly marked so Nick knows what to fill in.
- **Scheduling link hardcoded** → The Calendly (or equivalent) URL will be hardcoded in the Work With Us page. If it changes, a code edit is required. Low friction for now; can be extracted to a config file later if needed.

## Migration Plan

1. All changes happen on the `site-rebuild` branch
2. Nick previews locally with `npm run dev` at each milestone
3. PR opened against `main` when Nick approves the local preview
4. Nick merges — static hosting picks up the new build automatically
5. Rollback: revert the PR or `git revert` the merge commit on `main`

## Open Questions

*All resolved.*

- **Scheduling tool:** Google Calendar scheduling link. Embed preferred over a plain link — use the GCal embed widget, styled to match the site. Nick will supply the embed code/URL.
- **About page photo:** Text-only at launch. Reserve a clearly marked placeholder element (e.g., a `<div class="photo-placeholder">`) so the photo can be dropped in later without layout changes.
- **Kromatic logos:** Target logos on the homepage, but Nick must review each before they ship. Launch with text-only client names as the default; add a `<!-- TODO: replace with logo once approved -->` comment on each entry so the swap is trivial.
