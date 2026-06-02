"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/teaching", label: "Courses" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
        className="px-4 md:px-16"
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "var(--ink)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 7,
              background: "linear-gradient(135deg, #16324f 0%, #1e3a5f 100%)",
              borderTop: "2px solid #8a1538",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.04em",
              lineHeight: 1,
              boxShadow: "0 2px 8px rgba(22, 50, 79, 0.2)",
            }}
            aria-hidden="true"
          >
            AVL
          </span>
          <span style={{ lineHeight: 1.15 }}>
            <span style={{ display: "block", fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>
              Applied Vision Lab
            </span>
            <span
              style={{
                display: "block",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              East West University
            </span>
          </span>
        </Link>

        <nav
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: 2,
            flex: 1,
            borderLeft: "1px solid var(--border)",
            paddingLeft: 20,
            marginLeft: 4,
          }}
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 14px",
                  borderBottom: active ? "2px solid var(--burgundy)" : "2px solid transparent",
                  color: active ? "var(--ink)" : "var(--muted)",
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 13.5,
                  fontWeight: active ? 700 : 500,
                  textDecoration: "none",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                  borderRadius: "4px 4px 0 0",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://scholar.google.com/citations?user=fXu1UdgAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-secondary"
          style={{ padding: "7px 16px", fontSize: 11, marginLeft: "auto" }}
        >
          Scholar ↗
        </a>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            marginLeft: "auto",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            borderRadius: 6,
            cursor: "pointer",
            padding: 8,
            color: "var(--ink)",
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 20, height: 2, backgroundColor: "currentColor", marginBottom: 4 }} />
          <span style={{ display: "block", width: 20, height: 2, backgroundColor: "currentColor", marginBottom: 4 }} />
          <span style={{ display: "block", width: 20, height: 2, backgroundColor: "currentColor" }} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
            padding: "12px 16px 16px",
          }}
        >
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
                style={{
                  display: "block",
                  padding: "11px 10px",
                  borderRadius: 6,
                  color: active ? "var(--ink)" : "var(--muted)",
                  backgroundColor: active ? "var(--surface-container-low)" : "transparent",
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  textDecoration: "none",
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
