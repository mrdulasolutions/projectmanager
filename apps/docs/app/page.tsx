import Link from "next/link";

export default function DocsHome() {
  return (
    <>
      <h1 className="text-3xl font-bold text-xom-navy">Documentation</h1>
      <p className="mt-4 text-slate-600">
        AI skills for project managers in manufacturing. By MR Dula Solutions
        (MR Dula Enterprise, LLC). Install in Cursor, Claude, or use Copy for
        Perplexity.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center rounded-md bg-xom-orange hover:bg-xom-orange-hover text-white px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Getting started
        </Link>
        <Link
          href="/docs/install"
          className="inline-flex items-center rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Install &amp; setup
        </Link>
        <Link
          href="/docs/skills"
          className="inline-flex items-center rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Skills
        </Link>
      </div>
      <p className="mt-8 text-sm text-slate-500">
        Use the sidebar to jump to any skill or section.
      </p>
    </>
  );
}
