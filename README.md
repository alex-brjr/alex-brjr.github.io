# Site d'Alexandre — Astro Cyber-Y2K
- Dev : `npm install && npm run dev` → http://localhost:4321
- Blog : ajoute un `.md` dans `src/content/blog/` (title, date, tags en en-tête).
- Liens, tag Discord, cartes Academy : `src/config.ts` (les liens contenant `TON-` sont masqués tant qu'ils ne sont pas remplis).
- Chat : projet Supabase + `supabase.sql` + Google dans Auth, puis `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY` (`.env` en local, *Variables* du dépôt GitHub en prod).
- Déploiement : Settings → Pages → Source « GitHub Actions », puis push sur `master`.
- L'ancien site Jekyll est conservé dans `_archive-jekyll/`.
