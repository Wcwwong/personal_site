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
