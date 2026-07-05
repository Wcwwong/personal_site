# Claude → Codex handoff

---

## PHASE 0 — Scaffold (2026-07-05) — STATUS: READY TO RUN

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
