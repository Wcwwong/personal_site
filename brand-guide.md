# Brand Guide — willy personal site

> Source of truth for positioning, voice, and design tokens. Any agent (Claude, Codex,
> or a successor model) styling or writing for this site follows this file. Update it
> only with Willy's sign-off; log changes in `decisions-log.md`.

## Positioning

**One-liner:** "I build real systems with AI — as a one-person engineering team."

- Primary audience: **future employers** (AI/automation/ops roles; broad "builder who leverages AI").
- Differentiator: the AI-native workflow itself — Claude (architect/review) → Codex (build) → Obsidian (memory).
- The shelved prediction-market project is presented as a **strength**: pre-registered experiment,
  negative result, strategy killed by its own data. Intellectual honesty is part of the brand.
- Secondary (later, maybe): services/commercial page. Not in v1.

## Voice

- Plain, confident, concrete. No hype words ("revolutionary", "passionate"), no emoji in body copy.
- First person. Short sentences. Numbers over adjectives ("~170 paper trades", not "extensive testing").
- Honest about being a non-traditional developer — that's the point, not a confession.
- **No AI-telltale prose (Willy's rule, 2026-07-14).** Public content must read human-written:
  at most ONE em dash per page/post (prefer commas, periods, parentheses, colons); no tidy
  triadic parallelism everywhere; no "It's not X — it's Y" tic; no aphoristic punchline endings
  stacked back to back. Vary sentence rhythm. This applies to ALL site copy, not just posts.
  (Exception: the hero one-liner keeps its single em dash — it's on the OG image too.)

## Design direction: **D2 — Hybrid light** (chosen 2026-07-05)

A's light minimal base + B's terminal/mono accents. Reference mockup: `design/d2-hybrid-light.html`.

### Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#fafafa` | page background |
| `--surface` | `#ffffff` | cards, header (with blur), toolkit box |
| `--ink` | `#18181b` | headings, body, primary button bg |
| `--ink-2` | `#52525b` | secondary text |
| `--ink-3` | `#a1a1aa` | tertiary/meta text |
| `--accent` | `#15803d` | green: links-hover, chips, kicker, section "all →" links |
| `--amber` | `#b45309` | shelved/warning chip only |
| `--line` | `#e4e4e7` | all borders/dividers (1px) |
| `--radius` | `10px` | cards & boxes; buttons 8px |

- **Sans**: system stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, sans-serif`). No webfont in v1 (perf + $0).
- **Mono**: `"JetBrains Mono", ui-monospace, "Cascadia Code", Consolas, monospace` — accents ONLY:
  `~/willy` logo, `$`-prefixed kicker, status chips (10.5px uppercase, tracking .08em), dates
  (`2026-07` format), stack lines, section "all →" links. Body text is never mono.
- **Type scale**: hero h1 44px/750 weight/-.03em (34px mobile); section h2 22px/700; card h3 16.5px;
  body 16px; hero lede 18px; card body 14px.
- **Layout**: max-width 860px, single column, 3-col card grid (1-col ≤720px), sections divided by
  1px `--line`, sticky blurred header, generous vertical padding (hero 96px top).
- **Status chips**: bordered pills, mono — ACTIVE = green tint, SHELVED · BY DATA = amber tint.

## ⚠️ Legacy note — options deliberately kept open (Willy's request)

1. **D1 dark variant is reserved, not rejected.** `design/d1-hybrid-dark.html` is the SAME layout
   skeleton with dark tokens (`--bg #0d1117`, `--surface #141b23`, accent `#3fb950`, amber `#d29922`,
   line `#212a33`). Because all styling goes through CSS custom properties, a future dark mode or a
   full switch to D1 is a **token swap, not a redesign**. Build nothing that hardcodes light-only colors.
2. **Chinese version deferred, not declined.** Keep all copy in page/content files (no strings buried
   in components) so Astro i18n routing can be added without surgery.
3. **Services/commercial page** has a reserved nav slot — don't design layouts that break with a 7th nav item.
4. Mockups A/B/C in `design/` are kept as reference for any future rebrand round.
