import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-xom-navy text-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="font-bold text-lg text-white hover:text-white/90">
            PM Agents Docs
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold text-xom-navy">Documentation</h1>
        <p className="mt-4 text-slate-600">
          AI skills for project managers in manufacturing. By MR Dula Solutions
          (MR Dula Enterprise, LLC). Install in Cursor, Claude, or use Copy for
          Perplexity.
        </p>
        <ul className="mt-8 space-y-3">
          <li>
            <Link
              href="/docs/getting-started"
              className="text-xom-orange hover:text-xom-orange-hover font-medium"
            >
              Getting started
            </Link>
          </li>
          <li>
            <Link
              href="/docs/install"
              className="text-xom-orange hover:text-xom-orange-hover font-medium"
            >
              Install &amp; setup
            </Link>
          </li>
          <li>
            <Link
              href="/docs/skills"
              className="text-xom-orange hover:text-xom-orange-hover font-medium"
            >
              Skills
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
