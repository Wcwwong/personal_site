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
4. **Domain**: none yet ($0 first).
   future upgrade = ordinary .com/.dev (~$10–12/yr), attachable to Pages in one click.
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

- Codex commit `ba2bfa2` accepted after review: tokens match brand-guide exactly, all styling via
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

- Codex commit `62d272f` accepted: homepage matches D2 mockup (hero CTAs, 3 project cards, 3 post
  rows, toolkit teaser), nav wired with `aria-current` from `Astro.url.pathname`, new pages
  /about /contact /toolkit + /projects /blog stubs. Hex colors exist ONLY in `:root` — dark-swap
  rule intact. Placeholder copy written in brand voice. Independent build: 6 pages, clean.
- Codex correctly flagged Claude's "7 pages" as a count error (6 routes) instead of inventing a
  page — exactly the right behavior under strict scoping.
