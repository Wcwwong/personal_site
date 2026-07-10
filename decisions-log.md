# Decisions Log — personal-site

> Settled calls + rationale. Successor agents: do NOT relitigate these without new information
> and Willy's explicit say-so.

## 2026-07-05 — Project kickoff (Claude Fable 5 session)

1. **Purpose**: employer-facing personal-brand site; AI-native-workflow angle (Claude/Codex/Obsidian).
   Services/commercial = later maybe. Blog + projects + bio + AI Toolkit page.
2. **Stack: Astro 5 + Tailwind, markdown content collections.** Rejected Next.js (overkill),
   Hugo (less flexible), CMS (Willy chose git+markdown publishing).
3. **Hosting: Cloudflare Pages free tier.** Rejected Vercel — hobby plan prohibits commercial use,
   and this site may go commercial. Deploy = Pages git integration; `*.pages.dev` URL first.
4. **Domain**: none yet ($0 first); future upgrade = ordinary .com/.dev (~$10–12/yr),
   attachable to Pages in one click.
5. **Location**: `<project-root>` — Willy's call so Codex works in its usual
   workspace. NOTE: parent dir is itself a git repo → this is a **nested repo**. Path has a space —
   always quote it.
6. **Language**: English v1; Chinese kept possible (see brand-guide legacy note #2).
7. **Design: D2 hybrid-light chosen** after 2 mockup rounds (A/B/C → C skipped → D1 dark vs D2 light
   hybrids). Willy picked D2 "for now" and explicitly wants **D1 dark kept as a live option** —
   hence the CSS-custom-property token rule in brand-guide.md. Rationale for D2: employer audience
   skims in light contexts; D1 is the stronger identity play if the site pivots to audience-building.
8. **Identity**: real name but curated — placeholder "Willy W." until Willy approves the full public
   name; every personal detail passes through him before publish.
9. **Process**: Codex builds (strict single-phase scope, one clean commit per phase), Claude specs +
   reviews every diff. Handoffs via `handoffs/` (claude_to_codex.md / codex_to_claude.md), per the
   pattern from the weather-backtest project.
10. **Shelved weather project is framed as a strength** on the site (pre-registered experiment,
    negative result, killed honestly) — agreed positioning, don't soften or hide it.

## 2026-07-05 — Phase 0 review (Claude): ACCEPTED

- Codex commit `a5f3707` accepted after review: tokens match brand-guide exactly, all styling via
  CSS variables (D1 dark swap preserved), scope respected, one clean commit, build verified
  independently by Claude.
- **Deviation accepted: Astro 7 (^7.0.6), not Astro 5** as originally specced — `create astro@latest`
  installs the current major. Content collections + i18n unaffected. Treat Astro 7 as the baseline
  from here; don't downgrade.
- **Finding: parent dir `<local-workspace>` is NOT a functioning git repo** (has a `.git`
  entry but `git status` says "not a git repository"). The nested-repo concern is moot;
  personal-site is effectively a standalone repo. Still never run git against the parent.
- Requires Node >= 22.12.0 (package.json engines) — verified working on this machine.

## 2026-07-05 — Phase 1 review (Claude): ACCEPTED

- Codex commit `bf7f40e` accepted: homepage matches D2 mockup (hero CTAs, 3 project cards, 3 post
  rows, toolkit teaser), nav wired with `aria-current` from `Astro.url.pathname`, new pages
  /about /contact /toolkit + /projects /blog stubs. Hex colors exist ONLY in `:root` — dark-swap
  rule intact. Placeholder copy written in brand voice. Independent build: 6 pages, clean.
- Codex correctly flagged Claude's "7 pages" as a count error (6 routes) instead of inventing a
  page — exactly the right behavior under strict scoping.

## 2026-07-06 — Phase 2 review (Claude): ACCEPTED

- Codex commit `9fa9ad1` accepted: `projects` + `blog` collections with zod schemas exactly per
  spec, 3+3 seeded placeholder entries, listing/detail/tag routes, homepage rewired to queries,
  `/rss.xml` + sitemap. Independent build: 18 pages + rss.xml + sitemap-index.xml. Hex colors
  still only in `:root`.
- **Deviation accepted: `src/shims/picomatch.mjs` + vite alias** — works around an Astro 7.0.6
  ESM/CJS bundling bug (`require is not defined` from the glob loader). The shim loads the REAL
  picomatch via `createRequire` and re-exports it; zero behavior change, zero new deps.
  **Removal note:** when upgrading Astro, try deleting the shim + alias first — the upstream bug
  will likely be fixed.
- Convention for Phase C content: **blog tags must be kebab-case / URL-safe** (tag URLs are built
  as `/blog/tag/<tag>/` with no slugification).
- Claude generated `public/og-default.png` (1200×630, D2 tokens, System.Drawing) — Phase 3 wires it.

## 2026-07-06 — Phase 3 review (Claude): ACCEPTED

- Codex commit `fa6ebc3` accepted: canonical + OG + Twitter meta with absolute URLs, og:type
  article on blog posts, 404 page in brand voice, robots.txt → sitemap, D2 `~/w` favicon,
  skip-link + `:focus-visible` a11y pass, analytics placeholder comment. Independent build:
  19 pages; canonical/og:image/twitter:card verified in built HTML.
- Codex self-audited beyond spec (single-h1 check across all pages, landmark check, secret-pattern
  scan, color-literal scan) — all clean.
- **Lighthouse deferred to post-deploy** (no local runner; no dependency added, correctly). Claude
  runs it against the live pages.dev URL after first deploy.
- Build phase complete. Remaining: Phase C (curated content with Willy) + first deploy
  (GitHub repo + Cloudflare Pages + analytics beacon + real `site` URL).

## 2026-07-06 — Phase C decisions (Willy)

- **Display name: "Willy W."** for launch (full name upgrade possible later).
- **Public contact email: `wcwwong.ucd@gmail.com`** (dedicated address, not the personal inbox).
- **LinkedIn**: to be provided by Willy later; show as pending until then.
- **Deploy after Phase C content** — first impression is the finished site, no placeholder copy live.
- **GitHub repo: PUBLIC** — the phased commits + handoff files are themselves the brand story.
- Process: Claude drafts content into the working tree UNCOMMITTED; Willy reviews rendered site;
  nothing commits until he approves (curation gate).
