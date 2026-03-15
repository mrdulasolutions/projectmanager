import Link from "next/link";

const DOCS_URL = "https://docs.pmagents.shop";

const SKILLS = [
  {
    name: "pm-order-handling",
    description:
      "Intake, triage, and track manufacturing orders; hand off to production or other agents.",
  },
  {
    name: "pm-project-oversight",
    description:
      "Oversee manufacturing projects: scope, schedule, resources, risks and bottlenecks.",
  },
  {
    name: "pm-delegate-follow-up",
    description:
      "Delegate tasks to humans or agents with clear assignee, due date, and follow-up.",
  },
  {
    name: "pm-follow-up",
    description:
      "Proactive follow-up on open items, late deliverables, and overdue commitments.",
  },
  {
    name: "pm-human-agent-coordination",
    description:
      "Coordinate work between real human workers and other agents; handoffs and status.",
  },
  {
    name: "pm-project-completion",
    description:
      "Close out projects: punch lists, sign-offs, documentation, lessons learned.",
  },
  {
    name: "pm-post-order-follow-up",
    description:
      "Follow up after delivery: confirmation, quality feedback, returns, customer follow-up.",
  },
  {
    name: "pm-status-report",
    description:
      "Draft or structure project/order status reports for manufacturing contexts.",
  },
  {
    name: "pm-manufacturing-glossary",
    description:
      "Standardize manufacturing terms (BOM, lead time, OEE, etc.) for consistency.",
  },
  {
    name: "pm-exchek-compliance",
    description:
      "Work with ExChek agent skills for export/compliance from PM workflows.",
  },
];

const FEATURES = [
  {
    title: "Handle orders",
    body: "Intake, triage, and track orders; hand off to production or agents with clear specs and due dates.",
  },
  {
    title: "Oversee projects",
    body: "Run production runs, launches, and capital projects with scope, schedule, and risk visibility.",
  },
  {
    title: "Delegate and follow up",
    body: "Assign work to people or bots with clear criteria and structured check-ins and escalation.",
  },
  {
    title: "Humans and agents",
    body: "Coordinate mixed teams with clear handoffs and status from both people and systems.",
  },
  {
    title: "Complete projects",
    body: "Close out with punch lists, sign-offs, documentation, and handoff to support or next phase.",
  },
  {
    title: "Post-order follow-up",
    body: "Confirm delivery, handle quality feedback and returns, and close the order loop.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-semibold text-slate-800">PM Agents</span>
          <nav className="flex gap-6">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              Features
            </a>
            <a
              href="#skills"
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              Skills
            </a>
            <Link
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-700 text-sm font-medium"
            >
              Docs
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              AI skills for project managers in manufacturing
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Handle orders, oversee projects, delegate, follow up, work with
              real human workers or other agents, complete projects, and follow
              up post order. Use our skills in Cursor, Claude, or Perplexity.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-medium text-white hover:bg-sky-700"
              >
                Get started — Docs
              </Link>
              <a
                href="#skills"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                View skills
              </a>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-16 px-4 bg-slate-50 border-y border-slate-200"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Built for manufacturing PM workflows
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-xl bg-white border border-slate-200"
                >
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Skills
            </h2>
            <p className="text-slate-600 text-center mb-10 text-sm">
              Install in Cursor or Claude; use &quot;Copy for Perplexity&quot; in
              docs. Each skill has SKILL.md and skill.yaml.
            </p>
            <ul className="space-y-4">
              {SKILLS.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300"
                >
                  <code className="font-mono text-sm text-sky-700 shrink-0">
                    {s.name}
                  </code>
                  <span className="text-slate-600 text-sm">{s.description}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 font-medium text-sm"
              >
                Full skill docs and install instructions →
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <span>PM Agents — © MR Dula Solutions (MR Dula Enterprise, LLC)</span>
          <div className="flex gap-6">
            <Link
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700"
            >
              docs.pmagents.shop
            </Link>
            <a href="https://pmagents.shop" className="hover:text-slate-700">
              pmagents.shop
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
