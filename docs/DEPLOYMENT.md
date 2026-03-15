# PM Agents — Vercel deployment

Deploy the website and docs as two Vercel projects from this repo, with custom domains **pmagents.shop** and **docs.pmagents.shop**.

## Prerequisites

- GitHub repo (private or public) with this monorepo pushed (e.g. `main`).
- Vercel account connected to your GitHub.
- Domain **pmagents.shop** (and optionally **www.pmagents.shop**) at your registrar.

## 1. Create the Website project

1. In [Vercel](https://vercel.com), click **Add New** → **Project**.
2. Import your GitHub repo (e.g. `pmagents` or `projectmanager`).
3. Configure:
   - **Root Directory**: Click **Edit** and set to `apps/website`.
   - **Framework Preset**: Next.js (auto-detected).
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: leave default.
4. Deploy. Note the generated URL (e.g. `pmagents-website-xxx.vercel.app`).
5. **Settings** → **Domains**: Add **pmagents.shop**. Optionally add **www.pmagents.shop** and set redirect to **pmagents.shop**.

## 2. Create the Docs project

1. **Add New** → **Project** again and select the **same** repo.
2. Configure:
   - **Root Directory**: Set to `apps/docs`.
   - **Framework Preset**: Next.js.
   - **Build Command**: `npm run build`.
3. Deploy. Note the docs URL (e.g. `pmagents-docs-xxx.vercel.app`).
4. **Settings** → **Domains**: Add **docs.pmagents.shop**.

## 3. DNS (at your domain registrar)

For **pmagents.shop**:

- **A** or **CNAME** for `@` (root): point to the **website** project. Vercel will show the exact record (e.g. `cname.vercel-dns.com` or A record).
- **CNAME** for `www`: point to the same website project (if you use www).
- **CNAME** for `docs`: point to the **docs** project. Vercel will show the target for `docs.pmagents.shop` in the docs project’s Domains section.

Vercel will provision SSL once DNS propagates.

## 4. Build and env

- No environment variables are required for the current static sites.
- Each project builds only its app (`apps/website` or `apps/docs`) because **Root Directory** is set. The workspace is installed from repo root; build runs in the app directory.
- To use different Node version, set **Environment** → **Node.js Version** in each project (e.g. 18.x or 20.x).

## Summary

| Project  | Root Directory   | Domain            |
|----------|------------------|-------------------|
| Website  | `apps/website`   | pmagents.shop (www optional) |
| Docs     | `apps/docs`     | docs.pmagents.shop |

After DNS propagates, **https://pmagents.shop** serves the marketing site and **https://docs.pmagents.shop** serves the docs.
