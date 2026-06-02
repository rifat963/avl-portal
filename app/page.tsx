import Link from "next/link";
import { courses, projects, recentPublications, profile } from "@/lib/data";

const accentMap: Record<string, { color: string; bg: string; label: string }> = {
  teal:   { color: "#16324f", bg: "var(--surface-container-low)", label: "COMPUTER VISION" },
  amber:  { color: "#16324f", bg: "var(--surface-container-low)", label: "IMAGE PROCESSING" },
  purple: { color: "#16324f", bg: "var(--surface-container-low)", label: "DATA SCIENCE" },
  navy:   { color: "#16324f", bg: "var(--surface-container-low)", label: "KNOWLEDGE GRAPHS" },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: "56px 64px 64px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
        className="px-4 md:px-16"
      >
        <div
          style={{
            border: "1px solid #d7dde6",
            borderLeft: "5px solid #16324f",
            borderTop: "5px solid #8a1538",
            background: "#ffffff",
            boxShadow: "0 18px 44px rgba(22, 50, 79, 0.08)",
            padding: "40px 48px",
          }}
        >
          {/* Top row: label + author */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <p className="ds-label-caps" style={{ color: "#8a1538" }}>
              Academic Portfolio · East West University
            </p>
            <p
              style={{
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: 13,
                color: "#667085",
              }}
            >
              <span style={{ fontWeight: 600, color: "#172033" }}>
                Dr. Mohammad Rifat Ahmmad Rashid
              </span>
              {" · "}Associate Professor, CSE
            </p>
          </div>

          <h1 className="ds-display" style={{ marginBottom: 16 }}>
            Teaching · Research · Tutorials in Vision & AI
          </h1>
          <p
            style={{
              fontFamily: '"Segoe UI", system-ui, sans-serif',
              fontSize: 17,
              lineHeight: "28px",
              color: "#667085",
              maxWidth: 620,
              marginBottom: 32,
            }}
          >
            The Applied Vision Lab bridges theoretical machine learning with
            socially impactful applications in computer vision and applied AI
            at East West University.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <Link href="/teaching" className="btn-primary">
              View Courses
            </Link>
            <Link href="/research" className="btn-secondary">
              Research
            </Link>
            <Link href="/about" className="btn-secondary">
              Contact
            </Link>
          </div>

          {/* Feature tiles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {[
              {
                title: "Live Course Dashboards",
                note: "CSE445, CSE438, and AIML505 dashboards with lectures, modules, labs, and assessments.",
                accent: "#8a1538",
              },
              {
                title: "Research Portfolio",
                note: "Four active EWU CRT-funded grants in computer vision, BCI, knowledge graphs, and precision agriculture.",
                accent: "#16324f",
              },
              {
                title: "Academic Lab Hub",
                note: "Teaching, research, tutorials, and contact share one unified visual system.",
                accent: "#16324f",
              },
            ].map(({ title, note, accent }) => (
              <div
                key={title}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderLeft: `3px solid ${accent}`,
                  padding: "16px 20px",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Segoe UI", system-ui, sans-serif',
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#172033",
                    marginBottom: 6,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontFamily: '"Segoe UI", system-ui, sans-serif',
                    fontSize: 12,
                    lineHeight: 1.6,
                    color: "#667085",
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 64px 80px" }}
        className="px-4 md:px-16"
      >
        {/* ── Teaching Hub ────────────────────────────────────────── */}
        <section style={{ marginBottom: 72 }}>
          <div className="section-head">
            <p className="section-label">Teaching</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Active Courses</h2>
              <Link
                href="/teaching"
                style={{
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#8a1538",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                All Courses →
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            {courses.map((c) => {
              const acc = accentMap[c.color];
              return (
                <div
                  key={c.code}
                  className="research-card"
                  style={{ gap: 0, padding: 0, borderTop: `3px solid ${acc.color}` }}
                >
                  {/* Card header with accent bg */}
                  <div
                    style={{
                      padding: "20px 24px 16px",
                      borderBottom: "1px solid var(--border)",
                      background: acc.bg,
                    }}
                  >
                    <p className="ds-label-caps" style={{ color: "#8a1538" }}>
                      {acc.label}
                    </p>
                    <h3
                      className="ds-headline-sm"
                      style={{ marginTop: 10, lineHeight: 1.3, fontSize: 18 }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Segoe UI", system-ui, sans-serif',
                        fontSize: 11,
                        fontWeight: 600,
                        color: acc.color,
                        marginTop: 4,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {c.code} · {c.level} · {c.credits} Credits
                    </p>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "16px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        fontFamily: '"Segoe UI", system-ui, sans-serif',
                        fontSize: 13.5,
                        color: "#667085",
                        lineHeight: 1.65,
                        marginBottom: 16,
                        flexGrow: 1,
                      }}
                    >
                      {c.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                      {c.topics.slice(0, 3).map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                    <a
                      href={c.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        fontSize: 11,
                        alignSelf: "flex-start",
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

        {/* ── Funded Research ──────────────────────────────────────── */}
        <section style={{ marginBottom: 72 }}>
          <div className="section-head">
            <p className="section-label">Research</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Active Research Grants</h2>
              <span className="status-badge">FY 2024–2025</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {projects.map((p, i) => {
              const acc = accentMap[p.color];
              return (
                <div key={`${p.ref}-${i}`} className="research-card">
                  <p
                    className="ds-label-caps"
                    style={{ color: "#8a1538", marginBottom: 16 }}
                  >
                    {acc.label}
                  </p>
                  <h3
                    className="ds-headline-sm"
                    style={{ marginBottom: 12, fontSize: 15.5, lineHeight: 1.5, flexGrow: 1 }}
                  >
                    {p.shortTitle}
                  </h3>
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 16,
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <p className="ds-label-caps" style={{ color: "#667085", marginBottom: 4 }}>
                      Funding Agency
                    </p>
                    <p
                      style={{
                        fontFamily: '"Segoe UI", system-ui, sans-serif',
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#16324f",
                      }}
                    >
                      {p.funder} · {p.year}
                    </p>
                    <p
                      style={{
                        fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
                        fontSize: 11,
                        color: acc.color,
                        marginTop: 4,
                        fontWeight: 600,
                      }}
                    >
                      {p.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Recent Publications ──────────────────────────────────── */}
        <section>
          <div className="section-head">
            <p className="section-label">Publications</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Recent Publications</h2>
              <Link
                href="/research#publications"
                style={{
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#8a1538",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                View all {profile.stats.journals + profile.stats.conferences + profile.stats.bookChapters}+ →
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {recentPublications.map((pub, i) => (
              <div
                key={i}
                className="pub-item"
                style={{
                  borderBottom: i < recentPublications.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <p className="ds-label-code">[{pub.year}]</p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#8c93a0", fontSize: 18, lineHeight: 1, textDecoration: "none" }}
                  >
                    ↗
                  </a>
                </div>
                <p
                  style={{
                    fontFamily: '"Segoe UI", system-ui, sans-serif',
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#172033",
                    lineHeight: 1.5,
                    marginBottom: 4,
                  }}
                >
                  {pub.title}
                </p>
                <p
                  style={{
                    fontFamily: '"Segoe UI", system-ui, sans-serif',
                    fontSize: 13,
                    color: "#667085",
                  }}
                >
                  {pub.journal}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: "inline-flex" }}
            >
              View All Publications →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
