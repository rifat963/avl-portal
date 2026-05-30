import type { Metadata } from "next";
import { projects, repositories, allPublications, researchAreas, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research",
  description: "Funded research projects, publications (42+ journals, 24+ conference papers, 6 book chapters), and open-source repositories.",
};

const colorMap = {
  teal: { accent: "var(--avl-teal)", light: "var(--avl-teal-light)" },
  amber: { accent: "var(--avl-amber)", light: "var(--avl-amber-light)" },
  navy: { accent: "var(--avl-navy)", light: "var(--avl-navy-light)" },
  purple: { accent: "var(--avl-purple)", light: "var(--avl-purple-light)" },
};

export default function ResearchPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Page header */}
      <div className="mb-10">
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--avl-teal)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>EWU CRT · 2025–Present</p>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Research Showcase
        </h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--muted)", maxWidth: 600, lineHeight: 1.7 }}>
          Four active CRT-funded projects, 72+ peer-reviewed publications, and open-source course repositories.
        </p>
      </div>

      {/* Funded Projects */}
      <section className="mb-12">
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
          Funded Research Projects
        </h2>
        <hr className="avl-section-rule" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {projects.map((p) => {
            const col = colorMap[p.color];
            return (
              <div
                key={p.ref}
                className="card-lift"
                style={{ backgroundColor: "white", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}
              >
                <div style={{ height: 4, backgroundColor: col.accent }} />
                <div style={{ padding: "1.25rem" }}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`avl-badge-${p.color === "navy" ? "navy" : p.color}`}>{p.role}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)" }}>{p.funder} · {p.year}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--muted-2)", backgroundColor: "var(--surface-3)", padding: "2px 6px", borderRadius: 3 }}>Active</span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem", lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, marginBottom: "0.75rem" }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--muted-2)" }}>Ref: {p.ref}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Research Areas */}
      <section className="mb-12">
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>Research Areas</h2>
        <hr className="avl-section-rule" />
        <div className="flex flex-wrap gap-2">
          {researchAreas.map((area) => (
            <span
              key={area}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                padding: "6px 14px",
                borderRadius: 20,
                border: "1px solid var(--border-2)",
                color: "var(--ink-2)",
                backgroundColor: "var(--surface-2)",
              }}
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Open Source Repos */}
      <section className="mb-12">
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>Open Source</h2>
        <hr className="avl-section-rule" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {repositories.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift"
              style={{
                display: "block",
                backgroundColor: "white",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "1.125rem 1.25rem",
                textDecoration: "none",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--muted-2)", flexShrink: 0 }}>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <code style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "var(--avl-navy)", fontWeight: 600 }}>{r.name}</code>
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 8 }}>{r.desc}</p>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)", backgroundColor: "var(--surface-3)", padding: "2px 8px", borderRadius: 3 }}>{r.language}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications">
        <div className="flex items-center justify-between mb-2">
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)" }}>Publications</h2>
          <a href={profile.scholar} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--avl-teal)", textDecoration: "none", fontWeight: 500 }}>
            Google Scholar ↗
          </a>
        </div>
        <hr className="avl-section-rule" />

        {/* Journal Articles */}
        <PubSection
          title="Journal Articles"
          total={profile.stats.journals}
          pubs={allPublications.journals}
          accentColor="var(--avl-teal)"
        />

        {/* Conference Papers */}
        <PubSection
          title="Conference Papers"
          total={profile.stats.conferences}
          pubs={allPublications.conferences}
          accentColor="var(--avl-amber)"
        />

        {/* Book Chapters */}
        <PubSection
          title="Book Chapters"
          total={profile.stats.bookChapters}
          pubs={allPublications.bookChapters}
          accentColor="var(--avl-purple)"
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
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)" }}>{title}</h3>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "white", backgroundColor: accentColor, padding: "2px 8px", borderRadius: 10 }}>
          {total}+
        </span>
      </div>

      <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
        {pubs.map((pub, i) => (
          <div
            key={i}
            className="flex gap-4 items-start"
            style={{
              padding: "0.875rem 1.25rem",
              borderBottom: i < pubs.length - 1 ? "1px solid var(--border)" : "none",
              backgroundColor: "white",
            }}
          >
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted-2)", whiteSpace: "nowrap", marginTop: 2, flexShrink: 0 }}>
              {pub.year}
            </span>
            <div>
              <a
                href={pub.url}
                target={pub.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ fontSize: 13.5, color: "var(--ink-2)", textDecoration: "none", fontWeight: 500, lineHeight: 1.5 }}
              >
                {pub.title}
              </a>
              <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>{pub.journal}</p>
            </div>
          </div>
        ))}
        <div style={{ padding: "0.75rem 1.25rem", backgroundColor: "var(--surface-2)", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)" }}>
            Showing {pubs.length} of {total}+ · Full list on{" "}
            <a href="https://rifat963.github.io/publications.html" target="_blank" rel="noopener noreferrer" style={{ color: "var(--avl-teal)" }}>Personal Website ↗</a>
          </p>
        </div>
      </div>
    </div>
  );
}
