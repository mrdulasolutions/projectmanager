import Link from "next/link";
import { SKILLS } from "@/lib/skills";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return SKILLS.map((s) => ({ slug: s.slug }));
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = SKILLS.find((s) => s.slug === slug);
  if (!skill) notFound();

  const copyForPerplexity = `When the user needs help with: ${skill.description}, use PM Agents style: focus on manufacturing PM workflows, clear assignees and due dates, and follow-up.`;

  return (
    <article className="prose prose-slate max-w-none prose-headings:text-xom-navy prose-a:text-xom-orange prose-a:no-underline hover:prose-a:underline">
      <h1>{skill.name}</h1>
      <p className="lead">{skill.description}</p>
      <h2>When to use</h2>
      <p>
        Use this skill when the user is working on manufacturing PM tasks that
        match: <em>{skill.description}</em>
      </p>
      <h2>Install</h2>
      <p>
        Copy the skill folder <code>{skill.slug}</code> into{" "}
        <code>~/.cursor/skills/</code> or <code>~/.claude/skills/</code>. See{" "}
        <Link href="/docs/install" className="text-sky-600 hover:underline">
          Install &amp; setup
        </Link>
        .
      </p>
      <h2>Copy for Perplexity</h2>
      <p>
        Paste the following into Perplexity&apos;s custom instructions to get
        similar behavior:
      </p>
      <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
        {copyForPerplexity}
      </pre>
      <p>
        <Link href="/docs/skills" className="text-sky-600 hover:underline">
          ← All skills
        </Link>
      </p>
    </article>
  );
}
