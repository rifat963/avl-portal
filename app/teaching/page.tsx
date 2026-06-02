import type { Metadata } from "next";
import { courses, otherCourses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Live course dashboards and teaching portfolio — Computer Vision, Digital Image Processing, and Statistics for Data Science at East West University.",
};

const accentMap: Record<string, { color: string; bg: string; label: string }> = {
  teal:   { color: "#16324f", bg: "var(--surface-container-low)", label: "COMPUTER VISION" },
  amber:  { color: "#16324f", bg: "var(--surface-container-low)", label: "DIGITAL IMAGE PROCESSING" },
  purple: { color: "#16324f", bg: "var(--surface-container-low)", label: "STATISTICS · DATA SCIENCE" },
};

export default function TeachingPage() {
  return (
    <div
      style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 64px 80px" }}
      className="px-4 md:px-16"
    >
      {/* Page header */}
      <header
        style={{
          borderLeft: "5px solid #16324f",
          borderTop: "3px solid #8a1538",
          padding: "24px 28px",
          marginBottom: 64,
          background: "var(--surface)",
          boxShadow: "0 2px 12px rgba(22, 50, 79, 0.06)",
        }}
      >
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 10 }}>
          East West University · Department of CSE
        </p>
        <h1 className="ds-display" style={{ marginBottom: 12 }}>
          Teaching Hub
        </h1>
        <p
          style={{
            fontFamily: '"Segoe UI", system-ui, sans-serif',
            fontSize: 17,
            lineHeight: "28px",
            color: "#667085",
            maxWidth: 580,
          }}
        >
          Interactive dashboards for three active courses — each linked to a
          live deployment with lectures, modules, lab manuals, and assessments.
        </p>
      </header>

      {/* Live dashboards */}
      <section style={{ marginBottom: 72 }}>
        <div className="section-head">
          <p className="section-label">Teaching Portfolio</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Live Course Dashboards</h2>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {courses.map((c) => {
            const acc = accentMap[c.color];
            return (
              <div key={c.code} className="course-row">
                {/* Left accent strip */}
                <div style={{ width: 5, flexShrink: 0, backgroundColor: acc.color }} />

                <div style={{ padding: "28px 32px", flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 24,
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Course label + icon row */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <p className="ds-label-caps" style={{ color: "#8a1538" }}>
                          {acc.label}
                        </p>
                        <span style={{ fontSize: 16, lineHeight: 1 }}>{c.icon}</span>
                      </div>

                      <h3
                        style={{
                          fontFamily: '"Segoe UI", system-ui, sans-serif',
                          fontSize: 20,
                          fontWeight: 600,
                          color: "#16324f",
                          marginBottom: 4,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {c.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: '"Segoe UI", system-ui, sans-serif',
                          fontSize: 12,
                          fontWeight: 600,
                          color: acc.color,
                          marginBottom: 12,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {c.code} · {c.level} · {c.credits} Credits
                      </p>
                      <p
                        style={{
                          fontFamily: '"Segoe UI", system-ui, sans-serif',
                          fontSize: 14,
                          color: "#667085",
                          lineHeight: 1.65,
                          maxWidth: 560,
                          marginBottom: 18,
                        }}
                      >
                        {c.desc}
                      </p>

                      {/* Stats row */}
                      <div style={{ display: "flex", gap: 36, marginBottom: 18 }}>
                        {[
                          { num: c.lectures, label: "Lectures" },
                          { num: c.modules, label: "Modules" },
                          { num: c.credits, label: "Credits" },
                        ].map((s) => (
                          <div key={s.label}>
                            <p
                              style={{
                                fontFamily: '"Segoe UI", system-ui, sans-serif',
                                fontSize: 22,
                                fontWeight: 700,
                                color: acc.color,
                                lineHeight: 1,
                                marginBottom: 3,
                              }}
                            >
                              {s.num}
                            </p>
                            <p className="ds-label-caps" style={{ color: "#667085" }}>
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Topic tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {c.topics.map((t) => (
                          <span key={t} className="tag-pill">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
                      <a
                        href={c.dashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Open Dashboard ↗
                      </a>
                      <a
                        href={c.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        Source Code ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Other courses */}
      <section style={{ marginBottom: 56 }}>
        <div className="section-head">
          <p className="section-label">Teaching History</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Other Courses Taught</h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {otherCourses.map((c) => (
            <div
              key={c.code}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                borderLeft: "3px solid var(--border)",
                padding: "18px 22px",
                transition: "border-color 0.2s ease, border-left-color 0.2s ease",
              }}
            >
              <p className="ds-label-code" style={{ marginBottom: 6 }}>
                {c.code}
              </p>
              <p
                style={{
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#16324f",
                  marginBottom: 4,
                }}
              >
                {c.title}
              </p>
              <p
                style={{
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 13,
                  color: "#667085",
                }}
              >
                {c.level}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Info note */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderLeft: "4px solid #16324f",
          borderRadius: "0 8px 8px 0",
          padding: "20px 28px",
          boxShadow: "0 1px 4px rgba(22, 50, 79, 0.05)",
        }}
      >
        <p
          style={{
            fontFamily: '"Segoe UI", system-ui, sans-serif',
            fontSize: 14,
            color: "#667085",
            lineHeight: 1.75,
          }}
        >
          <strong style={{ color: "#16324f" }}>
            Department of Computer Science and Engineering
          </strong>{" "}
          · East West University, Dhaka 1212, Bangladesh. All courses delivered
          at the Main Campus. For enrollment and syllabus queries, contact{" "}
          <a
            href="mailto:rifat.rashid@ewubd.edu"
            style={{ color: "#8a1538", fontWeight: 600 }}
          >
            rifat.rashid@ewubd.edu
          </a>
          .
        </p>
      </div>
    </div>
  );
}
