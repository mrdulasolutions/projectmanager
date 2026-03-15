import Link from "next/link";
import { SKILLS } from "@/lib/skills";

const WEBSITE_URL = "https://pmagents.shop";

export default function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-xom-navy text-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="font-bold text-lg tracking-tight text-white hover:text-white/90">
              PM Agents Docs
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-white/90">
              <Link href="/docs/getting-started" className="hover:text-white transition-colors">Getting started</Link>
              <Link href="/docs/install" className="hover:text-white transition-colors">Install</Link>
              <Link href="/docs/skills" className="hover:text-white transition-colors">Skills</Link>
              <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Website</a>
              <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="bg-xom-orange hover:bg-xom-orange-hover text-white px-3 py-1.5 rounded-md font-medium transition-colors text-sm">
                Get started
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 shrink-0 border-r border-slate-200 bg-slate-50/80">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pl-6 pr-4">
            <nav className="space-y-1 text-sm">
              <Link href="/docs/getting-started" className="block py-2 text-slate-600 hover:text-xom-navy font-medium">
                Getting started
              </Link>
              <Link href="/docs/install" className="block py-2 text-slate-600 hover:text-xom-navy font-medium">
                Install &amp; setup
              </Link>
              <div className="pt-4">
                <span className="font-semibold text-xom-navy uppercase tracking-wide text-xs">
                  Skills
                </span>
                <ul className="mt-2 space-y-0.5">
                  {SKILLS.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/docs/skills/${s.slug}`}
                        className="block py-1.5 text-slate-600 hover:text-xom-orange"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-400">
              © MR Dula Solutions
              <br />
              MR Dula Enterprise, LLC
            </div>
          </div>
        </aside>
        <main className="flex-1 min-w-0 p-8 pb-16 bg-white">{children}</main>
      </div>
    </div>
  );
}
