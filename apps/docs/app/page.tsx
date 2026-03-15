import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="font-semibold text-slate-800">
            PM Agents Docs
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Documentation</h1>
        <p className="mt-4 text-slate-600">
          AI skills for project managers in manufacturing. By MR Dula Solutions
          (MR Dula Enterprise, LLC). Install in Cursor, Claude, or use Copy for
          Perplexity.
        </p>
        <ul className="mt-8 space-y-2">
          <li>
            <Link
              href="/docs/getting-started"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Getting started
            </Link>
          </li>
          <li>
            <Link
              href="/docs/install"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Install &amp; setup
            </Link>
          </li>
          <li>
            <Link
              href="/docs/skills"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Skills
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
