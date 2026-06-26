import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeInit from "@/components/theme/ThemeInit";

export const metadata: Metadata = {
  title: {
    default: "Applied Vision Lab | Dr. Mohammad Rifat Ahmmad Rashid",
    template: "%s | Applied Vision Lab",
  },
  description:
    "Teaching, research, and tutorials in computer vision, applied AI, and intelligent systems.",
  openGraph: {
    siteName: "Applied Vision Lab",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInit />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--canvas)] text-[var(--ink)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
