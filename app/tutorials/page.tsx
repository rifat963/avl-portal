import type { Metadata } from "next";
import { tutorialSeries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Structured tutorial series in machine learning, deep learning, and computer vision — launching mid-2025.",
};

const colorMap = {
  teal: { accent: "var(--avl-teal)", light: "var(--avl-teal-light)" },
  amber: { accent: "var(--avl-amber)", light: "var(--avl-amber-light)" },
  purple: { accent: "var(--avl-purple)", light: "var(--avl-purple-light)" },
};

export default function TutorialsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Page header */}
      <div className="mb-10">
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--avl-purple)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
          Launching 2025
        </p>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Tutorial Series
        </h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--muted)", maxWidth: 600, lineHeight: 1.7 }}>
          Structured, episode-by-episode tutorials in machine learning, deep learning, and computer vision — bridging theory and practice with Python implementations and real-world datasets.
        </p>
      </div>

      {/* Status notice */}
      <div style={{ padding: "1rem 1.25rem", backgroundColor: "var(--avl-teal-light)", borderRadius: 10, borderLeft: "4px solid var(--avl-teal)", marginBottom: "2.5rem" }}>
        <p style={{ fontSize: 14, color: "var(--avl-teal)", lineHeight: 1.7 }}>
          <strong>In Preparation:</strong> Tutorial episodes are being produced and will launch progressively from mid-2025. Watch the{" "}
          <a href="https://github.com/rifat963" target="_blank" rel="noopener noreferrer" style={{ color: "var(--avl-teal)", fontWeight: 600 }}>GitHub repositories ↗</a>{" "}
          for early previews and release announcements.
        </p>
      </div>

      {/* Tutorial series cards */}
      <section className="mb-12">
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
          Three Tutorial Series
        </h2>
        <hr className="avl-section-rule" />

        <div className="flex flex-col gap-5">
          {tutorialSeries.map((s, i) => {
            const col = colorMap[s.color];
            return (
              <div
                key={s.slug}
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
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div style={{
                      width: 52,
                      height: 52,
                      borderRadius: 10,
                      backgroundColor: col.light,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 26,
                      flexShrink: 0,
                    }}>
                      {s.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)" }}>Series {i + 1}</span>
                        <span className={`avl-badge-${s.color}`}>{s.level}</span>
                        <span style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 10,
                          color: "var(--muted-2)",
                          backgroundColor: "var(--surface-3)",
                          padding: "2px 8px",
                          borderRadius: 3,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}>
                          Coming Soon
                        </span>
                      </div>

                      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginBottom: "1rem", maxWidth: 580 }}>{s.desc}</p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {s.topics.map((t) => (
                          <span key={t} className="tag-pill">{t}</span>
                        ))}
                      </div>

                      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)" }}>
                        {s.episodeCount} episodes planned · TBA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
          Teaching Philosophy
        </h2>
        <hr className="avl-section-rule" />

        <div style={{ maxWidth: 720, lineHeight: 1.75, fontSize: 15, color: "var(--ink-2)" }}>
          <p style={{ marginBottom: "1rem" }}>
            These tutorials are designed to bridge the gap between theoretical foundations and practical implementation. Each series builds progressively — introducing mathematical concepts first, then implementing them in Python, and finally applying them to real problems.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            A distinctive feature of this series is its emphasis on <strong style={{ color: "var(--ink)" }}>locally relevant datasets</strong>: agricultural images from Bangladesh, Bangla text corpora, and sensor data from EWU research labs. Students learn not just the algorithms, but how to adapt them to problems they will actually encounter in their work.
          </p>
          <p>
            All code will be open-source and available on GitHub, making it easy for students to follow along, experiment, and extend the examples for their own projects and research.
          </p>
        </div>
      </section>
    </div>
  );
}
