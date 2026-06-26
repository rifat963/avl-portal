"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrainCircuit, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/team", label: "People" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-5">
        <Link href="/" className="flex items-center gap-3 shrink-0 text-[var(--ink)] no-underline">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--primary)] text-white border-t-2 border-[var(--burgundy)]">
            <BrainCircuit size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-[var(--ink)]">Applied AI Research Group</span>
            <span className="block text-[10px] uppercase tracking-widest text-[var(--muted)]">East West University · CSE</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 flex-1 border-l border-[var(--border)] pl-4">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm transition-colors border-b-2",
                  active
                    ? "border-[var(--burgundy)] text-[var(--ink)] font-semibold"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--ink)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://scholar.google.com/citations?user=fXu1UdgAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
          >
            Scholar ↗
          </a>
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-md text-[var(--muted)] hover:text-[var(--ink)]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex flex-col gap-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm transition-colors",
                  active
                    ? "bg-[var(--surface-2)] text-[var(--ink)] font-semibold"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
