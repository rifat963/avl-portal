import type { Metadata } from "next";
import { projects, researchAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Applied AI Research Group",
  description: "Active and funded research projects of the Applied AI Research Group at East West University.",
};

const labelMap: Record<string, string> = {
  teal:   "Computer Vision",
  amber:  "Precision Agriculture",
  purple: "Brain-Computer Interface",
  navy:   "Knowledge Graphs",
};

const colorMap: Record<string, string> = {
  teal:   "var(--accent-teal)",
  amber:  "var(--accent-amber)",
  purple: "var(--accent-purple)",
  navy:   "var(--accent-navy)",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">

      {/* ── Page Header ──────────────────────────────────────── */}
      <header className="mb-12 border-l-4 border-[var(--primary)] pl-6">
        <p className="ds-label-caps text-[var(--burgundy)] mb-2">EWU CRT Funded · 2025–Present</p>
        <h1 className="ds-display mb-4">Research Projects</h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">
          Active research initiatives of the Applied AI Research Group, spanning computer vision,
          brain-computer interfaces, knowledge graph-enhanced AI, and precision agriculture.
        </p>
      </header>

      {/* ── Active Grants ────────────────────────────────────── */}
      <section className="mb-14">
        <div className="section-head">
          <p className="section-label">EWU CRT Funded</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Active Research Grants</h2>
            <span className="status-badge">FY 2024–2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={`${p.ref}-${i}`}
              className="research-card"
              style={{ borderTop: `4px solid ${colorMap[p.color] ?? "var(--primary)"}` }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: colorMap[p.color] ?? "var(--primary)" }}
                >
                  {labelMap[p.color] ?? "Research"}
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-container-low)] text-[var(--muted)] border border-[var(--border)] whitespace-nowrap">
                  {p.role}
                </span>
              </div>

              <h3 className="ds-headline-sm text-[16px] leading-snug mb-3 flex-1">{p.title}</h3>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-end justify-between gap-2">
                <div>
                  <p className="ds-label-caps text-[var(--muted)] mb-0.5">Funding Agency</p>
                  <p className="text-sm font-semibold text-[var(--primary)]">{p.funder} · {p.year}</p>
                  <p className="font-mono text-[11px] text-[var(--muted)] mt-0.5">Ref: {p.ref}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Research Areas ───────────────────────────────────── */}
      <section className="mb-14">
        <div className="section-head">
          <p className="section-label">Focus Areas</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Research Areas</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {researchAreas.map((area) => (
            <span
              key={area}
              className="font-mono text-xs px-4 py-2 border border-[var(--border)] rounded bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--ink)] transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ── Research Themes ──────────────────────────────────── */}
      <section>
        <div className="section-head">
          <p className="section-label">Group Themes</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Applied AI Research Themes</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Applied AI & ML",
              desc: "Developing machine learning systems for real-world applications including healthcare, agriculture, and industrial IoT.",
              color: "var(--accent-teal)",
            },
            {
              title: "Computer Vision & NLP",
              desc: "Image understanding, object detection, semantic segmentation, large language models, and multilingual NLP.",
              color: "var(--accent-purple)",
            },
            {
              title: "Brain-Computer Interfaces",
              desc: "EEG-based BCI systems for motor control, emotion detection, and cognitive state monitoring using graph neural networks.",
              color: "var(--accent-navy)",
            },
            {
              title: "IoT & Smart Systems",
              desc: "Edge AI, cloud-edge computing, smart city applications, and expert systems for connected environments.",
              color: "var(--accent-amber)",
            },
          ].map((theme) => (
            <div
              key={theme.title}
              className="p-5 border border-[var(--border)] rounded-lg bg-[var(--surface)]"
              style={{ borderLeft: `3px solid ${theme.color}` }}
            >
              <h3 className="text-sm font-bold text-[var(--ink)] mb-2">{theme.title}</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{theme.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
