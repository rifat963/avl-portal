import type { Metadata } from "next";
import { courses, otherCourses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Live course dashboards and teaching portfolio — Computer Vision, Digital Image Processing, and Statistics for Data Science at East West University.",
};

const colorMap = {
  teal: { accent: "var(--avl-teal)", light: "var(--avl-teal-light)", border: "4px solid var(--avl-teal)" },
  amber: { accent: "var(--avl-amber)", light: "var(--avl-amber-light)", border: "4px solid var(--avl-amber)" },
  purple: { accent: "var(--avl-purple)", light: "var(--avl-purple-light)", border: "4px solid var(--avl-purple)" },
};

export default function TeachingPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Page header */}
      <div className="mb-10">
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--avl-teal)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>East West University</p>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Teaching Hub
        </h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--muted)", maxWidth: 600, lineHeight: 1.7 }}>
          Interactive course dashboards for three active courses at EWU — each linked to a live Vercel deployment with lectures, modules, lab manuals, and assessments.
        </p>
      </div>

      {/* Live dashboards */}
      <section className="mb-12">
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
          Live Course Dashboards
        </h2>
        <hr className="avl-section-rule" />

        <div className="flex flex-col gap-5">
          {courses.map((c) => {
            const col = colorMap[c.color];
            return (
              <div
                key={c.code}
                style={{
                  backgroundColor: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                {/* Left accent strip */}
                <div style={{ width: 4, flexShrink: 0, backgroundColor: col.accent }} />

                <div style={{ padding: "1.5rem", flex: 1 }}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`avl-badge-${c.color}`}>{c.code}</span>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)" }}>
                          {c.level} · {c.credits} Credits
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
                        {c.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, maxWidth: 600, marginBottom: "1rem" }}>{c.desc}</p>

                      {/* Stats row */}
                      <div className="flex flex-wrap gap-4 mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12 }}>
                        <span style={{ color: "var(--muted-2)" }}>
                          <span style={{ color: col.accent, fontWeight: 700 }}>{c.lectures}</span> Lectures
                        </span>
                        <span style={{ color: "var(--muted-2)" }}>
                          <span style={{ color: col.accent, fontWeight: 700 }}>{c.modules}</span> Modules
                        </span>
                      </div>

                      {/* Topic tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {c.topics.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <a
                        href={c.dashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          padding: "9px 18px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 700,
                          textDecoration: "none",
                          backgroundColor: col.accent,
                          color: "white",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Open Dashboard ↗
                      </a>
                      <a
                        href={c.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          padding: "9px 18px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: "none",
                          border: "1px solid var(--border-2)",
                          color: "var(--muted)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Source ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Other courses taught */}
      <section>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
          Other Courses Taught
        </h2>
        <hr className="avl-section-rule" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {otherCourses.map((c) => (
            <div
              key={c.code}
              style={{
                backgroundColor: "white",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "1.125rem 1.25rem",
              }}
            >
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--avl-teal)", fontWeight: 700, marginBottom: 4 }}>{c.code}</p>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>{c.title}</p>
              <p style={{ fontSize: 12, color: "var(--muted-2)" }}>{c.level}</p>
            </div>
          ))}
        </div>

        {/* Teaching note */}
        <div style={{ marginTop: "2rem", padding: "1.25rem 1.5rem", backgroundColor: "var(--avl-teal-light)", borderRadius: 10, borderLeft: "4px solid var(--avl-teal)" }}>
          <p style={{ fontSize: 14, color: "var(--avl-teal)", lineHeight: 1.7 }}>
            <strong>Department of Computer Science and Engineering</strong> · East West University, Dhaka 1212, Bangladesh.
            All courses are delivered at the Main Campus. For enrollment and syllabus queries, contact{" "}
            <a href="mailto:rifat.rashid@ewubd.edu" style={{ color: "var(--avl-teal)", fontWeight: 600 }}>rifat.rashid@ewubd.edu</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
