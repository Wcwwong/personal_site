# Claude → Codex handoff

---

## PHASE 3 — Polish: SEO, 404, a11y (2026-07-06) — STATUS: ✅ DONE, ACCEPTED (commit fa6ebc3)
### No further Codex phase is queued. Phase C (content) runs Claude+Willy side; a small Codex phase may follow post-deploy (analytics beacon + final site URL).

**Do Phase 3 and ONLY Phase 3. No deployment, no git push, no real biographical content,
no new npm dependencies at all. One clean commit at the end.**

### Tasks (exactly these)

1. **SEO/social meta in `src/layouts/Base.astro`**:
   - canonical `<link>` built from `Astro.site` + `Astro.url.pathname`;
   - Open Graph: `og:title`, `og:description`, `og:type` (new optional prop `type`, default
     `"website"`; blog post pages pass `"article"`), `og:url` (canonical), `og:image` — new
     optional prop `ogImage` defaulting to `/og-default.png` (**the file already exists in
     `public/` — do not regenerate it**), plus `og:site_name`;
   - Twitter: `twitter:card` = `summary_large_image`, `twitter:title`, `twitter:description`,
     `twitter:image`.
   - Absolute URLs for og:image/og:url (use `new URL(..., Astro.site)`).
2. **404 page** (`src/pages/404.astro`): brand voice, mono kicker (e.g. `$ ls: no such route`),
   link back home. Style with existing tokens/classes only.
3. **`public/robots.txt`**: allow all, `Sitemap:` line pointing at `<site>/sitemap-index.xml`.
4. **Favicon**: replace `public/favicon.svg` with a simple D2-brand mark — mono `~/w` text,
   `--ink` color (hardcode `#18181b` inside the SVG file only; SVGs are outside the CSS-variable
   rule), transparent background. Keep favicon.ico as is.
5. **Accessibility pass**:
   - "Skip to content" link as first focusable element, visually hidden until focused; `<main>`
     gets `id="main"`;
   - visible `:focus-visible` outline style using `--accent` in `global.css`;
   - verify exactly one `<h1>` per page, landmarks are sane, every `<a>` has discernible text.
6. **Analytics placeholder**: HTML comment in Base `<head>`:
   `<!-- Cloudflare Web Analytics: paste beacon snippet here after first deploy (token from CF dashboard) -->`.
7. Verify `npm run build` passes; spot-check rendered `<head>` of `/` and one blog post in `dist/`
   for canonical + OG tags; confirm 404.html emitted.
8. Single commit: `phase 3: seo/og meta, 404, robots, favicon, a11y`. **No push.** Leave any
   uncommitted root .md docs out of your commit.
9. Append completion report to `handoffs/codex_to_claude.md`. If you have a Lighthouse-capable
   browser available, run it against the local build and report scores; if not, say so — Claude
   verifies Lighthouse post-deploy.

### Explicitly out of scope (do NOT do)

- No deploy config, no GitHub remote, no push, no analytics beacon/token (comment only).
- No new dependencies. No OG image generation (asset exists). No content changes in `src/content/`.
- No changes to root .md docs, `design/`, or `handoffs/claude_to_codex.md`.

Claude will review the diff before the commit is accepted.

---

## PHASE 2 — Content collections (2026-07-05) — STATUS: ✅ DONE, ACCEPTED (commit 9fa9ad1; picomatch shim deviation accepted, see decisions-log)

**Do Phase 2 and ONLY Phase 2. No OG images, no analytics, no 404 page, no deployment, no real
biographical content, no git push. One clean commit at the end.**

Read first: `brand-guide.md` (voice — placeholder entries must match it).

### Tasks (exactly these)

1. **Define two collections** in `src/content.config.ts` using the Astro content layer
   (`defineCollection` + `glob` loader), with zod schemas:
   - `projects` (`src/content/projects/*.md`): `title` (string), `summary` (string),
     `status` (enum: `active` | `shelved` | `paused`), `statusLabel` (string, optional — display
     override like "SHELVED · BY DATA"), `stack` (string[]), `featured` (boolean, default false),
     `order` (number, default 0), `draft` (boolean, default false).
   - `blog` (`src/content/blog/*.md`): `title`, `description`, `pubDate` (coerced date),
     `tags` (string[], default []), `draft` (boolean, default false).
2. **Seed placeholder entries** (real content comes in Phase C — keep bodies short, brand voice):
   - 3 projects matching the current homepage cards (grid bot / knowledge pipeline / backtester
     with `status: shelved`, `statusLabel: "SHELVED · BY DATA"`), all `featured: true`.
   - 3 posts matching the current homepage writing rows (same titles/dates as shown).
3. **Listing + detail pages**:
   - `/projects` — replace stub with card grid of all non-draft projects (ordered by `order`),
     cards link to `/projects/[slug]`.
   - `/projects/[slug]` — detail page: chip, title, summary lede, stack line, markdown body.
   - `/blog` — replace stub with post rows (newest first, non-draft), each linking to
     `/blog/[slug]`; show tags as small mono chips.
   - `/blog/[slug]` — post page: title, date, tags, markdown body.
   - `/blog/tag/[tag]` — simple filtered listing per tag.
   - Markdown body styling: add a `.prose` block to `global.css` (headings, paragraphs, lists,
     code, links, blockquote) — CSS variables only, no new dependencies for typography.
4. **Rewire the homepage**: featured projects section and latest-3 posts section now query the
   collections instead of hardcoded markup. Visual output must stay identical to today.
5. **RSS + sitemap**:
   - Add `@astrojs/rss` → `/rss.xml` for blog posts.
   - Add `@astrojs/sitemap` integration; set `site: "https://personal-site.pages.dev"` in
     `astro.config.mjs` with a `// TODO: replace with final domain` comment.
   - These two packages are the ONLY new dependencies allowed.
6. Verify `npm run build` passes; routes render for all listings, details, one tag page, and
   `/rss.xml` + `sitemap-index.xml` exist in `dist/`.
7. Single commit: `phase 2: content collections, RSS, sitemap`. **No push.**
   Note: root .md docs may have uncommitted Claude edits — leave them out of your commit, as before.
8. Append completion report to `handoffs/codex_to_claude.md`.

### Explicitly out of scope (do NOT do)

- No OG images, no per-page SEO beyond existing title/description, no analytics, no 404, no deploy.
- No Tailwind typography plugin or any dependency beyond `@astrojs/rss` and `@astrojs/sitemap`.
- No real personal/biographical content (curation gate — Phase C with Willy).
- No changes to root .md docs, `design/`, or `handoffs/claude_to_codex.md`.

Claude will review the diff before the commit is accepted.

---

## PHASE 1 — Design system + core pages (2026-07-05) — STATUS: ✅ DONE, ACCEPTED (commit bf7f40e)

**Do Phase 1 and ONLY Phase 1. No content collections, no RSS/sitemap/SEO beyond basic meta,
no analytics, no deployment, no git push. One clean commit at the end.**

Read first: `brand-guide.md` (tokens/voice), `design/d2-hybrid-light.html` (the visual spec).
⚠️ The mockup file has an annotation-overlay `<script>`/`<style>` injected at the end for review
purposes — **ignore everything overlay-related**; the design spec is the original `<style>` block
in `<head>` and the body markup.

### Tasks (exactly these)

1. **Extend the shared styles** (`src/styles/global.css`) with the remaining D2 component styles
   from the mockup: buttons (`.btn`, `.btn-primary`, `.btn-ghost`), section + `.sec-head`, card
   grid + `.card`, status chips (`.chip.active` green / `.chip.shelved` amber), post list rows,
   toolkit box + `.pipe`, all responsive rules. Keep everything on the CSS variables — no hardcoded
   colors anywhere (dark-swap rule, brand-guide legacy note #1).
2. **Home (`src/pages/index.astro`)**: complete it to match the mockup — hero (add the two CTA
   buttons), "Active projects" section with the three hardcoded placeholder cards from the mockup
   (grid bot / knowledge pipeline / backtester with SHELVED · BY DATA chip), "Writing" section with
   the three placeholder post rows, and the AI Toolkit teaser box. Hardcoded placeholders are
   correct for this phase — Phase 2 will replace them with content collections.
3. **New pages**, all using `Base` with proper title/description:
   - `/about` — page shell + placeholder sections: intro, "How I work with AI" (the
     claude → codex → obsidian pipe), "Background". Short lorem-adjacent placeholder copy in the
     brand voice; real copy comes in Phase C.
   - `/contact` — email + GitHub/LinkedIn placeholder rows, brief line in brand voice.
   - `/toolkit` — "AI Toolkit" page shell: one section per tool (Claude / Codex / Obsidian) with
     placeholder copy.
   - `/projects` and `/blog` — minimal stub pages ("Portfolio/Writing — full listing coming soon")
     so no nav link 404s. Phase 2 replaces these.
4. **Wire the nav**: real hrefs (`/`, `/about`, `/projects`, `/blog`, `/toolkit`, `/contact`),
   `aria-current="page"` set from `Astro.url.pathname` instead of hardcoded "Home".
5. Verify `npm run build` passes and every nav route renders (7 pages incl. index).
6. Single commit: `phase 1: D2 design system + core pages`. **No push.**
7. Append completion report to `handoffs/codex_to_claude.md` (what was built, deviations, build output).

### Explicitly out of scope (do NOT do)

- No content collections / markdown content, no RSS/sitemap/OG images, no analytics, no 404 page.
- No new npm dependencies. No changes to root .md docs, `design/`, or parent dir.
- No dark mode toggle (tokens must merely keep it possible).

Claude will review the diff before the commit is accepted.

---

## PHASE 0 — Scaffold (2026-07-05) — STATUS: ✅ DONE, ACCEPTED (commit a5f3707; Astro 7 deviation accepted)

**Do Phase 0 and ONLY Phase 0. Do not jump ahead to pages, content collections, styling beyond
the base layout, analytics, or deployment. One clean commit at the end.**

Read first: `AGENTS.md` (rules), `brand-guide.md` (tokens — copy them exactly).

### Context

- Working dir: `"<project-root>"` — path has a space, always quote it.
- The dir is NOT empty: it contains `AGENTS.md`, `STATUS.md`, `brand-guide.md`, `decisions-log.md`,
  `design/`, `handoffs/`. **Do not modify, move, or delete any of these.** Scaffold around them.
- The parent directory `<local-workspace>` is itself a git repo. **Never run git commands
  against the parent repo.** This project gets its own nested repo.

### Tasks (exactly these)

1. `git init` in the project dir. Create `.gitignore` for: `node_modules/`, `dist/`, `.astro/`.
2. Scaffold Astro (minimal template, strict TypeScript), then add Tailwind:
   ```
   npm create astro@latest . -- --template minimal --typescript strict --no-git --no-install
   npm install
   npx astro add tailwind --yes
   ```
   If `npm create astro` refuses the non-empty dir, scaffold into a temp subfolder and move the
   generated files up manually (never overwriting the existing .md docs / design/ / handoffs/).
3. Create `src/styles/global.css` defining the **D2 design tokens from brand-guide.md** as CSS
   custom properties on `:root` (`--bg`, `--surface`, `--ink`, `--ink-2`, `--ink-3`, `--accent`,
   `--amber`, `--line`, `--radius`) plus the sans/mono font stacks. All future styling reads these
   variables — nothing hardcodes colors (a dark-theme swap must stay possible; see brand-guide
   legacy note #1).
4. Create `src/layouts/Base.astro`: html shell with `title`/`description` props, sticky blurred
   header (mono logo `~/willy`, nav links: Home, About, Projects, Blog, AI Toolkit, Contact — dead
   `#` hrefs are fine for now), simple footer (© 2026 Willy W. + GitHub/LinkedIn/Email/RSS
   placeholder links), max-width 860px content wrapper. Match `design/d2-hybrid-light.html` styling
   for header/footer only.
5. Replace `src/pages/index.astro` with a stub that uses Base and renders only the hero placeholder
   (kicker `$ whoami`, the h1 one-liner from brand-guide.md, lede paragraph). No other sections yet.
6. Verify `npm run build` passes clean and `npm run dev` serves the stub.
7. Single commit: `phase 0: scaffold astro + tailwind, base layout, D2 tokens`. **Do not push anywhere.**
8. Append a short completion report to `handoffs/codex_to_claude.md`: what was generated, versions
   installed (astro/tailwind), any deviation from the steps above and why, build output status.

### Explicitly out of scope (do NOT do)

- No About/Projects/Blog/Toolkit pages, no content collections, no RSS/sitemap/SEO/OG, no analytics.
- No deployment config, no GitHub remote, no `git push`.
- No extra npm dependencies beyond what the commands above install.
- No edits to the existing root .md files, `design/`, or the parent repo.

Claude will review the diff before the commit is considered accepted.
