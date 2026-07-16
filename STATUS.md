# STATUS — personal-site

_Last updated: 2026-07-17 (Claude Fable 5)_

## Current state: LIVE at https://willy.wcwwong.workers.dev

- Deployed as a Cloudflare **Workers** static site (account has no Pages; see DEPLOY.md),
  git-connected: push to master → auto-build → live in ~1-2 min.
- Content live: 4 blog posts, 4 project pages (grid bot / knowledge pipeline / backtester /
  trip bill splitter), About, Contact (email + GitHub live, LinkedIn pending), AI Toolkit
  **including "The safety layer" section** (commit 1ca031d).
- URL wiring done: canonical/OG/robots point at the real workers.dev URL; custom 404 works
  (`not_found_handling: 404-page`); OG share image verified.
- Prose rule in force: no AI-telltale patterns, ≤1 em dash per piece (brand-guide Voice).

## Remaining (small)

1. **Cloudflare Web Analytics**: Willy adds the site in CF dashboard → pastes beacon snippet
   to Claude → goes into the placeholder comment in `src/layouts/Base.astro`.
2. **Lighthouse** on the live URL after the beacon lands (target ≥90 all four categories).
3. **LinkedIn URL** from Willy → contact page + footer.
4. LinkedIn profile work: drafts at `~/.longbridge/linkedin-profile-drafts.md` (his side).
5. Possible 5th project page: Market Monitoring Pipeline (cost-tiered, injection-defense angle).
6. Custom domain later (any real domain attaches to the Worker; .sol can't be primary).

## Historical phase log

**Phases 0–3 ALL ACCEPTED — build complete. Next: Phase C (content) + first deploy.**

- ✅ Phases 0–3 done by Codex (`a5f3707`, `bf7f40e`, `9fa9ad1`, `fa6ebc3`), all **reviewed +
  accepted by Claude** with independent builds (see decisions-log review entries)
- ✅ Site: 19 routes, collections-backed projects/blog + tags, RSS, sitemap, full SEO/OG meta,
  404, a11y pass, brand favicon + OG image. All content is still PLACEHOLDER.
- ✅ **Phase C content COMMITTED + PUSHED to github.com/Wcwwong/personal_site (2026-07-14)**.
  4 posts (obsidian-pipeline + gates-shadows added; AI-telltale prose rewrite done, ≤1 em-dash/piece
  per brand-guide voice rule), 3 project pages, About/Toolkit/Contact real copy. Pre-push sweep clean
  (no personal email/keys/paths/financials). Next: Willy connects Cloudflare Pages (see DEPLOY.md).
- 🟡 (historical) Phase C content was drafted uncommitted (2 real blog posts,
  3 project write-ups, About/Toolkit/Contact real copy, footer links wired, 3rd post `draft: true`).
  Build clean (18 pages). **Waiting on Willy to read the posts + approve the curation checklist**
  (name "Willy W.", email wcwwong.ucd@gmail.com, GitHub handle wcwwong, self-description,
  Hyperliquid/Polymarket facts). Content is editable anytime post-launch — it's all markdown.
- ⬜ **First deploy**: full runbook in `DEPLOY.md`. Blocked on Willy: GitHub repo + Cloudflare
  account. Push happens only after curation approval + explicit confirm.
- ⬜ Post-deploy wiring + Lighthouse: see DEPLOY.md steps 4–5.
- ⬜ LinkedIn URL from Willy → contact page + footer.

## Open user actions (Willy)

1. Read the two blog posts + curation checklist → approve or correct (gates the Phase C commit).
2. Create GitHub repo (public) + free Cloudflare account (DEPLOY.md prerequisites).
3. Send LinkedIn profile URL when ready.
4. Domain decision stays open; placeholder `personal-site.pages.dev` in config + robots.txt.

## Notes for successor agents

Read AGENTS.md first. The chat session that produced this state is disposable — everything needed
is in the four root .md files + design/ mockups. Claude-side project memory also exists at
`the owner's local Claude memory`.
