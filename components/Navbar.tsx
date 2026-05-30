"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/teaching", label: "Teaching" },
  { href: "/research", label: "Research" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ height: "56px", backgroundColor: "rgba(250,250,247,0.88)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--border)" }}>
      <div className="flex items-center justify-between h-full px-6" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="flex items-center justify-center rounded" style={{ width: 32, height: 32, backgroundColor: "var(--avl-navy)", flexShrink: 0 }}>
            <span style={{ color: "white", fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "-0.5px" }}>AVL</span>
          </div>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 600, color: "var(--avl-navy)", letterSpacing: "-0.2px" }}>
            Applied Vision Lab
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: active ? "var(--avl-teal)" : "var(--ink-2)",
                  backgroundColor: active ? "var(--avl-teal-light)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1.5 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 20, height: 2, backgroundColor: "var(--ink)", borderRadius: 1 }} />
          <span style={{ display: "block", width: 20, height: 2, backgroundColor: "var(--ink)", borderRadius: 1 }} />
          <span style={{ display: "block", width: 20, height: 2, backgroundColor: "var(--ink)", borderRadius: 1 }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "8px 24px 12px" }}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 15,
                  fontWeight: 500,
                  color: active ? "var(--avl-teal)" : "var(--ink-2)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                }}
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
