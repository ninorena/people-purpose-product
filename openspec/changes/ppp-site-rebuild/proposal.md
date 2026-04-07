## Why

peoplepurposeproduct.com is currently a minimal blog with no positioning, no services pages, and no conversion path. As People/Purpose/Product launches as a consulting brand, the site needs to function as the primary sales and credibility asset — communicating a clear point of view on AI, establishing trust with mission-driven leaders, and creating a low-friction path to a first conversation.

## What Changes

- **BREAKING**: Homepage is fully replaced — current blog-index homepage removed in favor of a positioning-led marketing homepage
- New `/ai` page added: opinionated stance on AI for impact-driven organizations
- New `/work-with-us` page added: discovery call CTA with framing of the first conversation
- New `/case-studies` page added: placeholder structure, ready for content when first engagement closes
- New `/about` page added (replaces current `/about` which is a blog bio): team page with Nick as face, unnamed collaborator placeholder
- Blog moves from root index to `/blog` subpath — existing posts and routes preserved
- Navigation updated to reflect new site structure
- Visual design updated: inherits Astro base but with refreshed typography and layout to match a consultancy rather than a personal blog

## Capabilities

### New Capabilities

- `homepage`: Hero, positioning statement, audience identification, services summary, social proof (Kromatic client logos), blog preview, CTA
- `ai-page`: People/Purpose/Product's stated opinion on AI — for impact not extraction, domain expertise as the differentiator, how AI changes what's possible for mission-driven orgs
- `work-with-us-page`: Frames the discovery call, sets expectations for how the first conversation works (Pain → Impact → Value → Solution), primary conversion CTA
- `case-studies-page`: Placeholder page with structure for future case studies; visible in nav but clearly marked as forthcoming
- `about-page`: Nick's background and role as face of the company; unnamed collaborator section with placeholder; team framing (not solo)
- `site-navigation`: Updated nav component covering all pages; blog remains accessible as a subpath

### Modified Capabilities

- `blog`: Blog moves from site root to `/blog` subpath; existing posts and slugs preserved; integrated into new site nav and layout rather than standalone blog shell

## Impact

- `src/pages/index.astro` — replaced entirely
- `src/pages/about.astro` — replaced entirely
- `src/pages/blog/index.astro` — retained, minor layout updates to match new site shell
- `src/components/Header.astro` — updated navigation links
- `src/components/Footer.astro` — updated for consultancy context
- New pages: `src/pages/ai.astro`, `src/pages/work-with-us.astro`, `src/pages/case-studies.astro`
- No new dependencies required — all within existing Astro setup
- No backend or CMS changes — all content is static
