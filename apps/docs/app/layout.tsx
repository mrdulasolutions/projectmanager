import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
