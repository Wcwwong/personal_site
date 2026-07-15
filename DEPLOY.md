# DEPLOY.md — first deploy runbook

> Written pre-deploy so any agent/session can execute it with Willy. Deploying **publishes the
> site and the repo publicly** — every step marked ⚠️ needs Willy's explicit go-ahead at that moment.

## ⚠️ IMPORTANT (2026-07-15): this account has NO Cloudflare Pages

Cloudflare removed standalone Pages project creation for Willy's account (the "Create application"
button and the `/:account/pages/new` deep link both route to the Workers-only "Create a Worker"
wizard). **We deploy as a Workers static site instead** — same free tier, same git auto-deploy.
The repo now contains `wrangler.jsonc` (assets-only Worker serving `./dist`). The Pages-specific
steps below (§3) are superseded by the "Workers deploy" section. Everything else still applies.

### Workers deploy (the actual path)

1. **Rename the workers.dev subdomain first.** Workers & Pages main page → Account Details →
   pencil next to `ewrthk20.workers.dev` → change to `wcwwong`. (Default exposes Willy's personal
   Gmail handle; must not be the public URL.)
2. Create application → **Continue with GitHub** → authorize + select `Wcwwong/personal_site`.
3. Confirm build settings: Build command `npm run build`, Deploy command `npx wrangler deploy`
   (deploy reads `wrangler.jsonc`: name `willy`, assets `./dist`). Node ≥22.12 via `.nvmrc`.
4. Deploy → live at `https://willy.wcwwong.workers.dev`.
5. Post-deploy wiring + verification = same as §4–§5 below, but the URL is the workers.dev one,
   and Cloudflare Web Analytics still works for Workers sites.

Custom domain later makes the workers.dev URL irrelevant (see "Later").

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
