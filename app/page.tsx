import Link from "next/link";
import { courses, projects, recentPublications, tutorialSeries, profile } from "@/lib/data";

const colorMap = {
  teal: { accent: "var(--avl-teal)", light: "var(--avl-teal-light)", border: "#0e7c6a" },
  amber: { accent: "var(--avl-amber)", light: "var(--avl-amber-light)", border: "#c96a0a" },
  navy: { accent: "var(--avl-navy)", light: "var(--avl-navy-light)", border: "#1b2a4a" },
  purple: { accent: "var(--avl-purple)", light: "var(--avl-purple-light)", border: "#6c3fc5" },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "5rem 1.5rem 4rem", background: "linear-gradient(160deg, var(--avl-navy-light) 0%, var(--surface) 60%)" }}>
        {/* Decorative SVG grid */}
        <svg
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.035, pointerEvents: "none" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1b2a4a" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="60%" cy="50%" r="120" fill="none" stroke="#1b2a4a" strokeWidth="1" />
          <circle cx="60%" cy="50%" r="60" fill="none" stroke="#1b2a4a" strokeWidth="0.8" />
          <line x1="calc(60% - 140)" y1="50%" x2="calc(60% + 140)" y2="50%" stroke="#1b2a4a" strokeWidth="0.6" />
          <line x1="60%" y1="calc(50% - 140)" x2="60%" y2="calc(50% + 140)" stroke="#1b2a4a" strokeWidth="0.6" />
        </svg>

        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ width: 36, height: 36, backgroundColor: "var(--avl-navy)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700 }}>AVL</span>
            </div>
            <span className="avl-badge-navy">Applied Vision Lab</span>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--avl-navy)", lineHeight: 1.1, marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
            Teaching · Research
            <br />
            <em style={{ color: "var(--avl-teal)", fontStyle: "italic" }}>Tutorials</em>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--muted)", maxWidth: 560, lineHeight: 1.7, marginBottom: "2rem" }}>
            An academic portal for courses, funded research projects, and open tutorial series in computer vision and applied AI.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { href: "/teaching", label: "↳ Courses", primary: true },
              { href: "/research", label: "↳ Research" },
              { href: "/tutorials", label: "↳ Tutorials" },
            ].map((btn) => (
              <Link
                key={btn.href}
                href={btn.href}
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  backgroundColor: btn.primary ? "var(--avl-navy)" : "white",
                  color: btn.primary ? "white" : "var(--ink-2)",
                  border: btn.primary ? "none" : "1px solid var(--border-2)",
                  transition: "all 0.15s",
                }}
              >
                {btn.label}
              </Link>
            ))}
          </div>

          <p style={{ fontSize: 14, color: "var(--muted-2)" }}>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "var(--ink-2)" }}>Dr. Mohammad Rifat Ahmmad Rashid</span>
            {" "}·{" "}
            Associate Professor, Department of CSE, East West University
          </p>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--surface-2)", borderBottom: "1px solid var(--border)", padding: "1.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.5rem" }}>
          {[
            { num: "42+", label: "Journal Papers" },
            { num: "24+", label: "Conference Papers" },
            { num: "6+", label: "Book Chapters" },
            { num: "4", label: "Funded Projects" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, color: "var(--avl-navy)", lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* ── Teaching Hub preview ─────────────────────────────── */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              Teaching Hub
            </h2>
            <Link href="/teaching" style={{ fontSize: 13, color: "var(--avl-teal)", textDecoration: "none", fontWeight: 500 }}>All courses →</Link>
          </div>
          <hr className="avl-section-rule" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {courses.map((c) => {
              const col = colorMap[c.color];
              return (
                <div
                  key={c.code}
                  className="card-lift"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ height: 4, backgroundColor: col.accent }} />
                  <div style={{ padding: "1.25rem" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`avl-badge-${c.color}`}>{c.code}</span>
                      <span style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "'Space Mono', monospace" }}>{c.level} · {c.credits} Credits</span>
                    </div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.5rem" }}>{c.title}</h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: "0.75rem" }}>{c.desc}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {c.topics.slice(0, 3).map((t) => <span key={t} className="tag-pill">{t}</span>)}
                    </div>
                    <a
                      href={c.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "7px 14px",
                        borderRadius: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                        backgroundColor: col.light,
                        color: col.accent,
                      }}
                    >
                      Open Dashboard ↗
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Research preview ─────────────────────────────────── */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              Funded Research
            </h2>
            <Link href="/research" style={{ fontSize: 13, color: "var(--avl-teal)", textDecoration: "none", fontWeight: 500 }}>View all →</Link>
          </div>
          <hr className="avl-section-rule" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {projects.map((p) => {
              const col = colorMap[p.color];
              return (
                <div
                  key={p.ref}
                  className="card-lift"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ height: 4, backgroundColor: col.accent }} />
                  <div style={{ padding: "1.25rem" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`avl-badge-${p.color === "navy" ? "navy" : p.color}`}>{p.role}</span>
                      <span style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "'Space Mono', monospace" }}>{p.funder} · {p.year}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.5rem", lineHeight: 1.4 }}>{p.shortTitle}</h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{p.desc.slice(0, 120)}…</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Tutorial Series preview ───────────────────────────── */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              Tutorial Series
            </h2>
            <Link href="/tutorials" style={{ fontSize: 13, color: "var(--avl-teal)", textDecoration: "none", fontWeight: 500 }}>Browse all →</Link>
          </div>
          <hr className="avl-section-rule" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {tutorialSeries.map((s) => {
              const col = colorMap[s.color];
              return (
                <div
                  key={s.slug}
                  style={{
                    backgroundColor: "white",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "1.25rem",
                    opacity: 0.85,
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: col.light, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`avl-badge-${s.color}`}>{s.level}</span>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--muted-2)", backgroundColor: "var(--surface-3)", padding: "2px 6px", borderRadius: 3 }}>SOON</span>
                      </div>
                      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1.3 }}>{s.title}</h3>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: "0.75rem" }}>{s.desc.slice(0, 100)}…</p>
                  <div className="flex flex-wrap gap-1">
                    {s.topics.slice(0, 3).map((t) => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Recent Publications ───────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              Recent Publications
            </h2>
            <div className="flex items-center gap-4">
              <Link href="/research#publications" style={{ fontSize: 13, color: "var(--avl-teal)", textDecoration: "none", fontWeight: 500 }}>
                View all {profile.stats.journals + profile.stats.conferences + profile.stats.bookChapters}+ →
              </Link>
              <a href={profile.scholar} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
                Google Scholar ↗
              </a>
            </div>
          </div>
          <hr className="avl-section-rule" />

          <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
            {recentPublications.map((pub, i) => (
              <div
                key={i}
                className="flex gap-4 items-start"
                style={{
                  padding: "1rem 1.25rem",
                  borderBottom: i < recentPublications.length - 1 ? "1px solid var(--border)" : "none",
                  backgroundColor: "white",
                }}
              >
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted-2)", whiteSpace: "nowrap", marginTop: 2, flexShrink: 0 }}>{pub.year}</span>
                <div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 14, color: "var(--ink-2)", textDecoration: "none", fontWeight: 500, lineHeight: 1.5 }}
                  >
                    {pub.title}
                  </a>
                  <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{pub.journal}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
