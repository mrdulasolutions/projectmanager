import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Agents — AI skills for project managers in manufacturing",
  icons: { icon: "/favicon.svg" },
  description:
    "Handle orders, oversee projects, delegate, follow up, work with humans and agents, complete projects, and follow up post order. Skills for Cursor, Claude, and Perplexity. By MR Dula Solutions (MR Dula Enterprise, LLC).",
  openGraph: {
    title: "PM Agents — AI skills for project managers in manufacturing",
    description:
      "Handle orders, oversee projects, delegate, follow up, work with humans and agents. By MR Dula Solutions (MR Dula Enterprise, LLC).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
