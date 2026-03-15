# PM Agents

PM Agents is a product of **MR Dula Solutions** (MR Dula Enterprise, LLC).

AI skills for project managers in manufacturing. Handle orders, oversee projects, delegate, follow up, work with humans and agents, complete projects, and follow up post order — with optional ExChek compliance integration.

- **Website**: [pmagents.shop](https://pmagents.shop)
- **Docs**: [docs.pmagents.shop](https://docs.pmagents.shop)

## Repo structure

- **`apps/website`** — Marketing site (Next.js) → pmagents.shop
- **`apps/docs`** — Documentation (Nextra) → docs.pmagents.shop
- **`skills/`** — Agent skills (SKILL.md + skill.yaml per skill) for Cursor, Claude, Perplexity, and other agents

## Installing skills

### Cursor

Copy the skill folder(s) you want into your Cursor skills directory:

```bash
# Clone this repo, then copy one or all skills:
cp -r skills/pm-order-handling ~/.cursor/skills/
# Or copy all:
cp -r skills/* ~/.cursor/skills/
```

### Claude

Copy into Claude’s skills directory:

```bash
cp -r skills/pm-order-handling ~/.claude/skills/
```

### Perplexity

See [docs.pmagents.shop](https://docs.pmagents.shop) for “Copy for Perplexity” custom-instructions snippets per skill.

### Skill manifest

The repo includes `skills/skills.yaml` listing all skills (name, description, path) for tooling and discovery.

## Development

```bash
pnpm install
pnpm dev:website   # http://localhost:3000
pnpm dev:docs      # http://localhost:3001 (or port Nextra reports)
pnpm build         # build both apps
```

## Deployment (Vercel)

- **Website**: Vercel project with Root Directory `apps/website`, domain pmagents.shop
- **Docs**: Vercel project with Root Directory `apps/docs`, domain docs.pmagents.shop

See **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** for step-by-step Vercel and DNS setup.

## License

Skills and related materials are proprietary to **MR Dula Enterprise, LLC**. See
[skills/LICENSE.md](skills/LICENSE.md) for terms.
