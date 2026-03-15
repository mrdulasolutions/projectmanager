import Link from "next/link";
import { SKILLS } from "@/lib/skills";

export default function SkillsIndexPage() {
  return (
    <article className="prose prose-slate max-w-none prose-headings:text-xom-navy prose-a:text-xom-orange prose-a:no-underline hover:prose-a:underline">
      <h1>Skills</h1>
      <p>
        All skills are specific to manufacturing: handling orders, overseeing
        projects, delegating, following up, working with humans and agents,
        completing projects, and post-order follow-up. Each skill has{" "}
        <code>SKILL.md</code> and <code>skill.yaml</code>.
      </p>
      <ul className="not-prose grid gap-3 mt-8">
        {SKILLS.map((s) => (
          <li
            key={s.slug}
            className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg border border-slate-200 bg-white"
          >
            <Link
              href={`/docs/skills/${s.slug}`}
              className="font-mono text-sm text-sky-700 hover:underline shrink-0"
            >
              {s.slug}
            </Link>
            <span className="text-slate-600 text-sm">{s.description}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
