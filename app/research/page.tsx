import type { Metadata } from "next";
import { projects, repositories, allPublications, researchAreas, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Funded research projects, publications (42+ journals, 24+ conference papers, 6 book chapters), and open-source repositories.",
};

const labelMap: Record<string, string> = {
  teal:   "COMPUTER VISION",
  amber:  "PRECISION AGRICULTURE",
  purple: "BRAIN-COMPUTER INTERFACE",
  navy:   "KNOWLEDGE GRAPHS",
};

export default function ResearchPage() {
  return (
    <div
      style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 64px" }}
      className="px-4 md:px-16"
    >
      {/* Page header */}
      <header style={{ borderLeft: "4px solid #16324f", paddingLeft: 24, marginBottom: 64 }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 12 }}>
          EWU CRT · 2025–Present
        </p>
        <h1 className="ds-display" style={{ marginBottom: 16 }}>
          Research Showcase
        </h1>
        <p
          style={{
            fontFamily: '"Segoe UI", system-ui, sans-serif',
            fontSize: 18,
            lineHeight: "28px",
            color: "#667085",
            maxWidth: 600,
          }}
        >
          Four active CRT-funded projects, 72+ peer-reviewed publications, and open-source course
          repositories across computer vision, BCI, and applied AI.
        </p>
      </header>

      {/* Funded Projects */}
      <section style={{ marginBottom: 64 }}>
        <div className="section-head">
          <p className="section-label">EWU CRT Funded</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Active Research Grants</h2>
            <span className="status-badge">FY 2024–2025</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((p, i) => {
            return (
              <div key={`${p.ref}-${i}`} className="research-card">
                <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 16 }}>
                  {labelMap[p.color]}
                </p>
                <h3
                  className="ds-headline-sm"
                  style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 12, flexGrow: 1 }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Segoe UI", system-ui, sans-serif',
                    fontSize: 13,
                    color: "#667085",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
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
                      color: "#667085",
                      marginTop: 4,
                    }}
                  >
                    {p.role} · Ref: {p.ref}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Research Areas */}
      <section style={{ marginBottom: 64 }}>
        <div className="section-head">
          <p className="section-label">Focus Areas</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Research Areas</h2>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {researchAreas.map((area) => (
            <span
              key={area}
              style={{
                fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
                fontSize: 12,
                padding: "7px 14px",
                border: "1px solid var(--border)",
                borderRadius: 4,
                color: "#667085",
                backgroundColor: "var(--surface)",
              }}
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section style={{ marginBottom: 64 }}>
        <div className="section-head">
          <p className="section-label">Repositories</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Open Source</h2>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {repositories.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="research-card"
              style={{ textDecoration: "none" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#8c93a0", flexShrink: 0 }}>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <p
                  style={{
                    fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#16324f",
                  }}
                >
                  {r.name}
                </p>
              </div>
              <p
                style={{
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 13,
                  color: "#667085",
                  lineHeight: 1.6,
                  marginBottom: 16,
                  flexGrow: 1,
                }}
              >
                {r.desc}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 12,
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
                    fontSize: 11,
                    color: "#667085",
                    backgroundColor: "var(--surface-container)",
                    padding: "3px 8px",
                    borderRadius: 4,
                  }}
                >
                  {r.language}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications">
        <div className="section-head">
          <p className="section-label">Peer-Reviewed Work</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Vision Lab Publications</h2>
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
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
              Google Scholar ↗
            </a>
          </div>
        </div>

        <PubSection
          title="Journal Articles"
          total={profile.stats.journals}
          pubs={allPublications.journals}
          accentColor="#16324f"
        />
        <PubSection
          title="Conference Papers"
          total={profile.stats.conferences}
          pubs={allPublications.conferences}
          accentColor="#16324f"
        />
        <PubSection
          title="Book Chapters"
          total={profile.stats.bookChapters}
          pubs={allPublications.bookChapters}
          accentColor="#16324f"
        />
      </section>
    </div>
  );
}

function PubSection({
  title,
  total,
  pubs,
  accentColor,
}: {
  title: string;
  total: number;
  pubs: { title: string; journal: string; year: number; url: string }[];
  accentColor: string;
}) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <h3
          style={{
            fontFamily: '"Segoe UI", system-ui, sans-serif',
            fontSize: 17,
            fontWeight: 600,
            color: "#16324f",
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
            fontSize: 11,
            color: "white",
            backgroundColor: accentColor,
            padding: "2px 8px",
            borderRadius: 4,
          }}
        >
          {total}+
        </span>
      </div>

      <div style={{ border: "1px solid var(--border)", borderRadius: 8, backgroundColor: "var(--surface)", overflow: "hidden" }}>
        {pubs.map((pub, i) => (
          <div
            key={i}
            className="pub-item"
            style={{
              padding: "14px 20px",
              borderBottom: i < pubs.length - 1 ? "1px solid var(--border)" : "none",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "flex-start", gap: 12 }}>
              <div>
                <p
                  className="ds-label-code"
                  style={{ color: accentColor, marginBottom: 4, fontSize: 12 }}
                >
                  [{pub.year}]
                </p>
                <a
                  href={pub.url}
                  target={pub.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: '"Segoe UI", system-ui, sans-serif',
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#172033",
                    textDecoration: "none",
                    lineHeight: 1.5,
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {pub.title}
                </a>
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
              <span style={{ color: "#8c93a0", fontSize: 16, flexShrink: 0 }}>↗</span>
            </div>
          </div>
        ))}
        <div
          style={{
            padding: "12px 20px",
            backgroundColor: "var(--surface-container-low)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
              fontSize: 12,
              color: "#667085",
            }}
          >
            Showing {pubs.length} of {total}+ ·{" "}
            <a
              href="https://rifat963.github.io/publications.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#8a1538" }}
            >
              Full list on Personal Website ↗
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
