import type { Metadata } from "next";
import { tutorialSeries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tutorials",
  description:
    "Structured tutorial series in machine learning, deep learning, and computer vision — launching mid-2025.",
};

const accentMap: Record<string, { color: string; bg: string }> = {
  teal:   { color: "#16324f", bg: "var(--surface-container-low)" },
  amber:  { color: "#16324f", bg: "var(--surface-container-low)" },
  purple: { color: "#16324f", bg: "var(--surface-container-low)" },
};

export default function TutorialsPage() {
  return (
    <div
      style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 64px" }}
      className="px-4 md:px-16"
    >
      {/* Page header */}
      <header style={{ borderLeft: "4px solid #16324f", paddingLeft: 24, marginBottom: 64 }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 12 }}>
          Launching 2025
        </p>
        <h1 className="ds-display" style={{ marginBottom: 16 }}>
          Tutorial Series
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
          Structured, episode-by-episode tutorials in machine learning, deep learning, and computer
          vision — bridging theory and practice with Python implementations and real-world datasets.
        </p>
      </header>

      {/* Status notice */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderLeft: "4px solid #16324f",
          borderRadius: 8,
          padding: "18px 24px",
          marginBottom: 48,
        }}
      >
        <p
          style={{
            fontFamily: '"Segoe UI", system-ui, sans-serif',
            fontSize: 14,
            color: "#667085",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#16324f" }}>In Preparation:</strong> Tutorial episodes are being
          produced and will launch progressively from mid-2025. Watch the{" "}
          <a
            href="https://github.com/rifat963"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8a1538", fontWeight: 600 }}
          >
            GitHub repositories ↗
          </a>{" "}
          for early previews and release announcements.
        </p>
      </div>

      {/* Tutorial series */}
      <section style={{ marginBottom: 64 }}>
        <div className="section-head">
          <p className="section-label">Course Tutorials</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Three Tutorial Series</h2>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {tutorialSeries.map((s, i) => {
            const acc = accentMap[s.color];
            return (
              <div
                key={s.slug}
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  display: "flex",
                  overflow: "hidden",
                  transition: "border-color 0.2s ease",
                }}
              >
                {/* Left accent strip */}
                <div style={{ width: 4, flexShrink: 0, backgroundColor: acc.color }} />

                <div style={{ padding: "28px 32px", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                    {/* Icon box */}
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: acc.bg,
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        flexShrink: 0,
                        border: "1px solid var(--border)",
                      }}
                    >
                      {s.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <p className="ds-label-code" style={{ fontSize: 12 }}>
                          Series {i + 1}
                        </p>
                        <span
                          className="ds-label-caps"
                          style={{
                            color: "#8a1538",
                            backgroundColor: acc.bg,
                            padding: "3px 8px",
                            borderRadius: 4,
                            border: "1px solid var(--border)",
                          }}
                        >
                          {s.level}
                        </span>
                        <span className="status-badge">
                          Coming Soon
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: '"Segoe UI", system-ui, sans-serif',
                          fontSize: 20,
                          fontWeight: 600,
                          color: "#16324f",
                          marginBottom: 10,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: '"Segoe UI", system-ui, sans-serif',
                          fontSize: 14,
                          color: "#667085",
                          lineHeight: 1.65,
                          marginBottom: 16,
                          maxWidth: 580,
                        }}
                      >
                        {s.desc}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                        {s.topics.map((t) => (
                          <span key={t} className="tag-pill">{t}</span>
                        ))}
                      </div>

                      <p
                        style={{
                          fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
                          fontSize: 12,
                          color: "#667085",
                        }}
                      >
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
        <div className="section-head">
          <p className="section-label">Pedagogy</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Teaching Philosophy</h2>
          </div>
        </div>

        <div
          style={{
            maxWidth: 720,
            fontFamily: '"Segoe UI", system-ui, sans-serif',
            fontSize: 16,
            lineHeight: "28px",
            color: "#667085",
          }}
        >
          <p style={{ marginBottom: 20 }}>
            These tutorials are designed to bridge the gap between theoretical foundations and
            practical implementation. Each series builds progressively — introducing mathematical
            concepts first, then implementing them in Python, and finally applying them to real
            problems.
          </p>
          <p style={{ marginBottom: 20 }}>
            A distinctive feature of this series is its emphasis on{" "}
            <strong style={{ color: "#172033" }}>locally relevant datasets</strong>: agricultural
            images from Bangladesh, Bangla text corpora, and sensor data from EWU research labs.
            Students learn not just the algorithms, but how to adapt them to problems they will
            actually encounter in their work.
          </p>
          <p>
            All code will be open-source and available on GitHub, making it easy for students to
            follow along, experiment, and extend the examples for their own projects and research.
          </p>
        </div>
      </section>
    </div>
  );
}
