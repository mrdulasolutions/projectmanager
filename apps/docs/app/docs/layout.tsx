import Link from "next/link";
import { SKILLS } from "@/lib/skills";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 shrink-0 border-r border-slate-200 bg-white">
        <div className="sticky top-0 p-4">
          <Link
            href="/"
            className="font-semibold text-slate-800 hover:text-slate-600"
          >
            PM Agents Docs
          </Link>
          <nav className="mt-6 space-y-1 text-sm">
            <Link
              href="/docs/getting-started"
              className="block py-1.5 text-slate-600 hover:text-slate-900"
            >
              Getting started
            </Link>
            <Link
              href="/docs/install"
              className="block py-1.5 text-slate-600 hover:text-slate-900"
            >
              Install &amp; setup
            </Link>
            <div className="pt-4">
              <span className="font-medium text-slate-500 uppercase tracking-wide text-xs">
                Skills
              </span>
              <ul className="mt-2 space-y-1">
                {SKILLS.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/docs/skills/${s.slug}`}
                      className="block py-1.5 text-slate-600 hover:text-slate-900"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <p className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
            © MR Dula Solutions
            <br />
            MR Dula Enterprise, LLC
          </p>
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-8 pb-16">{children}</main>
    </div>
  );
}
