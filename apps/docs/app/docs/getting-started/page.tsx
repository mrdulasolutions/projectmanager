import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Getting started</h1>
      <p>
        PM Agents (by MR Dula Solutions / MR Dula Enterprise, LLC) provides AI
        skills for project managers in manufacturing companies. Use them in
        Cursor, Claude, or Perplexity to handle orders,
        oversee projects, delegate, follow up, work with humans and agents,
        complete projects, and follow up post order.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        Teams that handle orders, oversee projects, delegate work, follow up
        with people and systems, work with real human workers or other agents,
        complete projects, and follow up after delivery. Skills support the
        full lifecycle from order intake through post-order follow-up.
      </p>

      <h2>What you get</h2>
      <ul>
        <li>
          <strong>Skills</strong> — Each skill is a folder with{" "}
          <code>SKILL.md</code> (instructions + YAML frontmatter) and{" "}
          <code>skill.yaml</code> (metadata for tooling). Compatible with
          Cursor, Claude, and other agentskills.io-compatible agents.
        </li>
        <li>
          <strong>Repo-level manifest</strong> — <code>skills/skills.yaml</code>{" "}
          lists all skills for discovery and integrations.
        </li>
        <li>
          <strong>Copy for Perplexity</strong> — Each skill doc includes a
          short snippet you can paste into Perplexity&apos;s custom instructions.
        </li>
      </ul>

      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/install" className="text-sky-600 hover:underline">
            Install &amp; setup
          </Link>{" "}
          — Cursor, Claude, and Perplexity
        </li>
        <li>
          <Link href="/docs/skills" className="text-sky-600 hover:underline">
            Skills
          </Link>{" "}
          — List and descriptions
        </li>
      </ul>
    </article>
  );
}
