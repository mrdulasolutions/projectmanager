import type { Metadata } from "next";
import "./globals.css";
import DocsShell from "@/components/DocsShell";

export const metadata: Metadata = {
  title: "PM Agents Docs",
  icons: { icon: "/favicon.svg" },
  description:
    "Documentation for PM Agents — AI skills for project managers in manufacturing. By MR Dula Solutions (MR Dula Enterprise, LLC). Install for Cursor, Claude, and Perplexity.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  );
}
