export default function InstallPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Install &amp; setup</h1>
      <p>
        Install PM Agents skills in Cursor, Claude, or use the Copy for
        Perplexity snippets in docs. Each skill folder contains{" "}
        <code>SKILL.md</code> and <code>skill.yaml</code>.
      </p>

      <h2>Cursor</h2>
      <p>Copy the skill folder(s) into your Cursor skills directory:</p>
      <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
        {`# Clone the repo, then copy one or all skills:
cp -r skills/pm-order-handling ~/.cursor/skills/

# Or copy all skills:
cp -r skills/* ~/.cursor/skills/`}
      </pre>

      <h2>Claude</h2>
      <p>Copy into Claude&apos;s skills directory:</p>
      <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
        {`cp -r skills/pm-order-handling ~/.claude/skills/`}
      </pre>

      <h2>Perplexity</h2>
      <p>
        Perplexity doesn&apos;t load SKILL.md natively. Use the &quot;Copy for
        Perplexity&quot; snippet on each skill&apos;s doc page: copy the text
        and paste it into Perplexity&apos;s custom instructions (or use via API).
      </p>

      <h2>Skill manifest (skills.yaml)</h2>
      <p>
        The repo includes <code>skills/skills.yaml</code> listing all skills
        (name, description, path) for tooling and discovery. Use it to build
        custom integrations or to list available skills in your app.
      </p>
    </article>
  );
}
