# AGENTS.md — personal-site

> Failover onboarding doc. Any agent (Claude successor, Codex, or other) starting cold on this
> project reads this file first, then `STATUS.md` (live state), `brand-guide.md` (design/voice),
> `decisions-log.md` (settled calls). Together these four files ARE the project memory.

## What this is

Willy's personal-brand website, aimed at **future employers**, showcasing his AI-native workflow
(Claude = architect/reviewer, Codex = builder, Obsidian = knowledge base) and his projects.
Stack: **Astro 5 + Tailwind CSS**, markdown content collections, deployed on **Cloudflare Pages**
free tier (`*.pages.dev` now; real domain later).

## Layout

```
personal-site/            ← nested git repo (parent <local-workspace> is ALSO a repo — never commit to parent)
├── AGENTS.md             ← this file
├── STATUS.md             ← live state: current phase, next step, open user actions
├── brand-guide.md        ← positioning, voice, D2 design tokens + "options kept open" legacy notes
├── decisions-log.md      ← settled decisions + rationale; don't relitigate
├── design/               ← mockups (D2 = chosen; D1 dark = reserved option; A/B/C reference)
├── handoffs/             ← claude_to_codex.md (specs/prompts) / codex_to_claude.md (build reports)
└── (Astro app — created in Phase 0: src/, public/, astro.config.mjs, ...)
```

Path contains a space — **always quote `"<project-root>"`** in commands.

## How work is done

- **Phased**: D (design, done) → 0 scaffold → 1 design system + core pages → 2 content collections →
  3 polish/deploy → C content. One phase = one strictly-scoped Codex prompt in
  `handoffs/claude_to_codex.md` = **one clean commit**. Codex does the phase and ONLY that phase.
- **Claude reviews every Codex diff** before the commit is accepted; findings go through Willy.
- Codex writes a short completion report to `handoffs/codex_to_claude.md` after each phase.
- Update `STATUS.md` at every phase boundary. Log any new decision in `decisions-log.md`.

## Hard rules (non-negotiable, mirror Willy's global security directive)

1. **Curation gate**: real name but curated — no personal detail (full name, photo, location,
   employer history, anything biographical) is committed/published without Willy's explicit approval.
   Placeholder is "Willy W.".
2. **No sensitive data ever** in this repo or its content: no API keys, wallet info, account numbers,
   capital amounts, trade sizes, addresses. Project write-ups are sanitized.
3. **Confirm before every outward action**: `git push`, connecting deploy, publishing — show Willy
   what goes out and get an explicit yes, every time.
4. Never touch the parent repo (`<local-workspace>\.git`) from work in this project.
5. Build health check: `npm run build` must pass at every phase end.

## Verification quickstart

```powershell
cd "<project-root>"
npm install
npm run dev     # local preview
npm run build   # must pass clean
```
