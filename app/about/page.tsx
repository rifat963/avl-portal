import type { Metadata } from "next";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Academic profile of Dr. Mohammad Rifat Ahmmad Rashid — Associate Professor at East West University, PhD from Polytechnic University of Turin.",
};

export default function AboutPage() {
  return (
    <div
      style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 64px" }}
      className="px-4 md:px-16"
    >
      {/* Page header */}
      <header style={{ borderLeft: "4px solid #16324f", paddingLeft: 24, marginBottom: 64 }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 12 }}>
          Academic Profile
        </p>
        <h1 className="ds-display" style={{ marginBottom: 8 }}>
          {profile.name}
        </h1>
        <p
          style={{
            fontFamily: '"Segoe UI", system-ui, sans-serif',
            fontSize: 18,
            color: "#667085",
            lineHeight: "28px",
          }}
        >
          {profile.title} · {profile.department}
        </p>
        <p
          style={{
            fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
            fontSize: 13,
            color: "#667085",
            marginTop: 6,
          }}
        >
          📍 {profile.university}, {profile.location}
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) 300px",
          gap: 48,
          alignItems: "start",
        }}
        className="block lg:grid"
      >
        {/* ── Left column ──────────────────────────────────────── */}
        <div>
          {/* Bio */}
          <section style={{ marginBottom: 48 }}>
            <div className="section-head">
              <p className="section-label">Academic Background</p>
              <div className="title-row">
                <h2 className="ds-headline-md">Biography</h2>
              </div>
            </div>
            <div
              style={{
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: 16,
                lineHeight: "28px",
                color: "#667085",
              }}
            >
              <p style={{ marginBottom: 20 }}>
                I am an Associate Professor at the Department of Computer Science and Engineering,
                East West University (EWU), Dhaka. I obtained my Ph.D. in Computer and Control
                Engineering from the Polytechnic University of Turin, Italy (2014–2018), where my
                research focused on knowledge base quality assessment and linked open data profiling.
                Prior to EWU, I held research and academic positions at the University of Liberal
                Arts Bangladesh (2019–2022) and the LINKS Foundation in Turin, Italy (2018–2019),
                where I contributed to EU H2020 projects including BRAIN-IoT and MONSOON.
              </p>
              <p style={{ marginBottom: 20 }}>
                My current research at EWU spans computer vision for precision agriculture in
                Bangladesh, brain-computer interface systems using EEG and graph neural networks,
                knowledge graph-enhanced retrieval-augmented generation (RAG) pipelines, and applied
                machine learning for IoT and smart systems. I currently lead one EWU CRT-funded
                project as Principal Investigator and co-lead three additional CRT projects. My work
                has been published in Elsevier, IEEE, Nature, and IOS Press journals, with 72+
                peer-reviewed contributions.
              </p>
              <p>
                The <strong style={{ color: "#16324f" }}>Applied Vision Lab (AVL)</strong> portal
                exists to make my teaching materials openly accessible, share research progress with
                the broader community, and provide structured learning resources for students in
                computer vision and applied AI. I teach Computer Vision (CSE445), Digital Image
                Processing (CSE438), and Statistics for Data Science (AIML505), with interactive
                dashboards for each course.
              </p>
            </div>
          </section>

          {/* Research interests */}
          <section style={{ marginBottom: 48 }}>
            <div className="section-head">
              <p className="section-label">Areas of Focus</p>
              <div className="title-row">
                <h2 className="ds-headline-md">Research Interests</h2>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {profile.interests.map((interest) => (
                <span key={interest} className="tag-pill" style={{ fontSize: 12, padding: "6px 12px" }}>
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="section-head">
              <p className="section-label">Academic Training</p>
              <div className="title-row">
                <h2 className="ds-headline-md">Education</h2>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                {
                  degree: "Ph.D., Computer and Control Engineering",
                  inst: "Polytechnic University of Turin, Italy",
                  years: "2014–2018",
                },
                {
                  degree: "M.Sc., Computer Engineering",
                  inst: "University of Pavia, Italy",
                  years: "2012–2014",
                },
                {
                  degree: "B.Eng., Computer Science and Engineering",
                  inst: "Khulna University, Bangladesh",
                  years: "2005–2009",
                },
              ].map((e, i, arr) => (
                <div
                  key={e.degree}
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                    padding: "20px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'ui-monospace, "Cascadia Code", "Segoe UI Mono", Consolas, monospace',
                      fontSize: 12,
                      color: "#667085",
                      whiteSpace: "nowrap",
                      marginTop: 2,
                      flexShrink: 0,
                      minWidth: 80,
                    }}
                  >
                    {e.years}
                  </p>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Segoe UI", system-ui, sans-serif',
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#172033",
                        marginBottom: 2,
                      }}
                    >
                      {e.degree}
                    </p>
                    <p
                      style={{
                        fontFamily: '"Segoe UI", system-ui, sans-serif',
                        fontSize: 14,
                        color: "#667085",
                      }}
                    >
                      {e.inst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Right sidebar ──────────────────────────────────── */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
          className="mt-12 lg:mt-0"
        >
          {/* Contact card */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                color: "#16324f",
                marginBottom: 20,
              }}
            >
              Contact & Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Email", href: `mailto:${profile.email}`, display: profile.email },
                { label: "GitHub", href: profile.github, display: "github.com/rifat963" },
                { label: "Google Scholar", href: profile.scholar, display: "Scholar Profile" },
                { label: "LinkedIn", href: profile.linkedin, display: "LinkedIn" },
                { label: "Personal Website", href: profile.website, display: "rifat963.github.io" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p className="ds-label-caps" style={{ color: "#667085", marginBottom: 2 }}>
                    {l.label}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Segoe UI", system-ui, sans-serif',
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#8a1538",
                    }}
                  >
                    {l.display}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Publication stats card */}
          <div
            style={{
              backgroundColor: "#16324f",
              borderRadius: 8,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                color: "white",
                marginBottom: 20,
              }}
            >
              Publication Stats
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {[
                { num: `${profile.stats.journals}+`, label: "Journals" },
                { num: `${profile.stats.conferences}+`, label: "Conferences" },
                { num: `${profile.stats.bookChapters}`, label: "Book Chapters" },
                { num: `${profile.stats.fundedProjects}`, label: "Funded Projects" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: '"Segoe UI", system-ui, sans-serif',
                      fontSize: 26,
                      fontWeight: 700,
                      color: "#d0e4f7",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="ds-label-caps"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Office card */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                color: "#16324f",
                marginBottom: 12,
              }}
            >
              Office
            </h3>
            <p
              style={{
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: 14,
                color: "#667085",
                lineHeight: 1.8,
              }}
            >
              {profile.office}
              <br />
              Department of CSE
              <br />
              East West University
              <br />
              Dhaka 1212, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
