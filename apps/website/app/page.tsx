import Link from "next/link";

const DOCS_URL = "https://docs.pmagents.shop";

const SKILLS = [
  { name: "pm-order-handling", description: "Intake, triage, and track manufacturing orders; hand off to production or other agents." },
  { name: "pm-project-oversight", description: "Oversee manufacturing projects: scope, schedule, resources, risks and bottlenecks." },
  { name: "pm-delegate-follow-up", description: "Delegate tasks to humans or agents with clear assignee, due date, and follow-up." },
  { name: "pm-follow-up", description: "Proactive follow-up on open items, late deliverables, and overdue commitments." },
  { name: "pm-human-agent-coordination", description: "Coordinate work between real human workers and other agents; handoffs and status." },
  { name: "pm-project-completion", description: "Close out projects: punch lists, sign-offs, documentation, lessons learned." },
  { name: "pm-post-order-follow-up", description: "Follow up after delivery: confirmation, quality feedback, returns, customer follow-up." },
  { name: "pm-status-report", description: "Draft or structure project/order status reports for manufacturing contexts." },
  { name: "pm-manufacturing-glossary", description: "Standardize manufacturing terms (BOM, lead time, OEE, etc.) for consistency." },
  { name: "pm-exchek-compliance", description: "Work with ExChek agent skills for export/compliance from PM workflows." },
];

const FEATURES = [
  { title: "Handle orders", body: "Intake, triage, and track orders; hand off to production or agents with clear specs and due dates." },
  { title: "Oversee projects", body: "Run production runs, launches, and capital projects with scope, schedule, and risk visibility." },
  { title: "Delegate and follow up", body: "Assign work to people or bots with clear criteria and structured check-ins and escalation." },
  { title: "Humans and agents", body: "Coordinate mixed teams with clear handoffs and status from both people and systems." },
  { title: "Complete projects", body: "Close out with punch lists, sign-offs, documentation, and handoff to support or next phase." },
  { title: "Post-order follow-up", body: "Confirm delivery, handle quality feedback and returns, and close the order loop." },
];

const TRUST_ITEMS = [
  "Cursor",
  "Claude",
  "Perplexity",
  "Manufacturing PM",
  "Order to Cash",
  "ExChek Compliance",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Dark header - Xometry style */}
      <header className="bg-xom-navy text-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-white/90">
              PM Agents
            </Link>
            <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-white/90">
              <a href="#features" className="hover:text-white transition-colors">Solutions</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#value" className="hover:text-white transition-colors">How it works</a>
              <Link href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Resources
              </Link>
              <Link
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-xom-orange hover:bg-xom-orange-hover text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Get started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero - Xometry style */}
        <section className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-xom-navy tracking-tight">
                AI skills for project managers in manufacturing
              </h1>
              <p className="mt-6 text-xl text-slate-600">
                The <strong>platform</strong> for teams that handle orders, oversee projects, delegate, and follow up—from <strong>startups to global enterprises</strong>.
              </p>
              <div className="mt-10">
                <Link
                  href={DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-xom-orange hover:bg-xom-orange-hover text-white px-8 py-4 text-base font-semibold shadow-sm transition-colors"
                >
                  Get started — Docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar - certifications / capabilities */}
        <section className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="whitespace-nowrap">{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Value props - 4 pillars like Xometry */}
        <section id="value" className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-xom-navy text-center mb-12">
              Scale production. Optimize for tomorrow.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-xom-navy">Accelerate sourcing</h3>
                <p className="mt-2 text-slate-600 text-sm">AI-powered skills move orders and projects from intake to production faster.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-xom-navy">Scale without limits</h3>
                <p className="mt-2 text-slate-600 text-sm">Skills for any volume—one-off runs, launches, and ongoing production.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-xom-navy">Optimize production</h3>
                <p className="mt-2 text-slate-600 text-sm">Delegate, follow up, and coordinate humans and agents with clear handoffs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-xom-navy">Seamless delivery</h3>
                <p className="mt-2 text-slate-600 text-sm">From order to close-out: status, completion, and post-order follow-up.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Built for manufacturing PM workflows */}
        <section id="features" className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-xom-navy text-center mb-4">
              Built for manufacturing PM workflows
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Handle orders, oversee projects, delegate and follow up, work with humans and agents, complete projects, and follow up post order.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-xom-navy">{f.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills - Services / use cases style */}
        <section id="skills" className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-xom-navy text-center mb-4">
              Skills
            </h2>
            <p className="text-slate-600 text-center mb-10 text-sm">
              Install in Cursor or Claude; use &quot;Copy for Perplexity&quot; in docs. Each skill has SKILL.md and skill.yaml.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg border border-slate-200 bg-slate-50/50 hover:border-xom-navy/30 hover:bg-slate-50 transition-colors"
                >
                  <code className="font-mono text-sm text-xom-orange shrink-0 font-semibold">{s.name}</code>
                  <span className="text-slate-600 text-sm">{s.description}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center">
              <Link
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xom-orange hover:text-xom-orange-hover font-semibold text-sm"
              >
                Full skill docs and install instructions →
              </Link>
            </p>
          </div>
        </section>
      </main>

      {/* Multi-column footer - Xometry style */}
      <footer className="bg-xom-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Solutions</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#skills" className="hover:text-white">Skills</a></li>
                <li><a href="#value" className="hover:text-white">How it works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Documentation</Link>
                </li>
                <li>
                  <Link href={`${DOCS_URL}/docs/getting-started`} target="_blank" rel="noopener noreferrer" className="hover:text-white">Getting started</Link>
                </li>
                <li>
                  <Link href={`${DOCS_URL}/docs/install`} target="_blank" rel="noopener noreferrer" className="hover:text-white">Install &amp; setup</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>PM Agents</li>
                <li>MR Dula Solutions</li>
                <li>MR Dula Enterprise, LLC</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="https://pmagents.shop" className="hover:text-white">pmagents.shop</a></li>
                <li><Link href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">docs.pmagents.shop</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-white/20 text-sm text-white/60">
            © {new Date().getFullYear()} MR Dula Solutions (MR Dula Enterprise, LLC). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
