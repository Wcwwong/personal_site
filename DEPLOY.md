# DEPLOY.md — first deploy runbook (Cloudflare Pages)

> Written pre-deploy so any agent/session can execute it with Willy. Deploying **publishes the
> site and the repo publicly** — every step marked ⚠️ needs Willy's explicit go-ahead at that moment.

## Prerequisites (Willy, one-time)

1. **GitHub**: an account you're happy to show employers (repo will be **public** — decided
   2026-07-06). Create an empty repo named `personal-site` (no README/license — we push history).
2. **Cloudflare**: free account at dash.cloudflare.com.

## Steps

1. **Pre-push checklist (agent)**: Phase C content committed with Willy's curation approval;
   `npm run build` clean; secret scan of full history (`git log -p | grep` for key/token patterns);
   no absolute local paths leaking in committed files.
2. ⚠️ **Push** (agent runs, Willy confirms first — show remote URL + branch):
   `git remote add origin https://github.com/<user>/personal-site.git`
   `git push -u origin master`
3. **Connect Pages (Willy, in CF dashboard)**: Workers & Pages → Create → Pages →
   Import a git repository → pick `personal-site` →
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: needs ≥ 22.12 (set env var `NODE_VERSION=22.12.0` if the default is older)
   → Deploy. First build gives the live `https://<project>.pages.dev` URL.
4. **Post-deploy wiring** (small follow-up phase, agent):
   - Replace placeholder `site` in `astro.config.mjs` and the Sitemap URL in `public/robots.txt`
     with the real pages.dev URL.
   - Cloudflare dashboard → Web Analytics → add site → copy beacon `<script>` → paste into the
     placeholder comment in `src/layouts/Base.astro`.
   - Commit + ⚠️ push (confirm again).
5. **Verification (agent)**: live URL renders all routes; `/rss.xml` + `/sitemap-index.xml` valid;
   OG preview correct (share the URL into a chat app or use an OG checker); Lighthouse on the live
   URL — target ≥ 90 in all four categories; log results in decisions-log.md.

## Later (optional)

- **Custom domain**: buy a .com/.dev (Cloudflare Registrar sells at cost) → Pages → Custom
  domains → add.
- Flip `og:site_name` / footer if the display name ever upgrades from "Willy W.".
