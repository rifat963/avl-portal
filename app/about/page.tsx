import type { Metadata } from "next";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Academic profile of Dr. Mohammad Rifat Ahmmad Rashid — Associate Professor at East West University, PhD from Polytechnic University of Turin.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: "3rem", alignItems: "start" }}
        className="block lg:grid">

        {/* ── Left column: bio ─────────────────────────────────── */}
        <div>
          {/* Name + title */}
          <div className="mb-8">
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: "0.25rem", lineHeight: 1.15 }}>
              Mohammad Rifat Ahmmad{" "}
              <em style={{ color: "var(--avl-teal)", fontStyle: "italic" }}>Rashid</em>
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "var(--muted)", marginBottom: 8 }}>
              {profile.title} · {profile.department}
            </p>
            <p className="flex items-center gap-1.5" style={{ fontSize: 14, color: "var(--muted-2)" }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {profile.university}, {profile.location}
            </p>
          </div>

          {/* Bio */}
          <section style={{ lineHeight: 1.8, color: "var(--ink-2)", fontSize: 15 }}>
            <p style={{ marginBottom: "1.25rem" }}>
              I am an Associate Professor at the Department of Computer Science and Engineering, East West University (EWU), Dhaka. I obtained my Ph.D. in Computer and Control Engineering from the Polytechnic University of Turin, Italy (2014–2018), where my research focused on knowledge base quality assessment and linked open data profiling. Prior to EWU, I held research and academic positions at the University of Liberal Arts Bangladesh (2019–2022) and the LINKS Foundation in Turin, Italy (2018–2019), where I contributed to EU H2020 projects including BRAIN-IoT and MONSOON.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              My current research at EWU spans computer vision for precision agriculture in Bangladesh, brain-computer interface systems using EEG and graph neural networks, knowledge graph-enhanced retrieval-augmented generation (RAG) pipelines, and applied machine learning for IoT and smart systems. I currently lead one EWU CRT-funded project as Principal Investigator and co-lead three additional CRT projects. My work has been published in Elsevier, IEEE, Nature, and IOS Press journals, with 72+ peer-reviewed contributions.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              The <strong>Applied Vision Lab (AVL)</strong> portal exists to make my teaching materials openly accessible, share research progress with the broader community, and provide structured learning resources for students in computer vision and applied AI. I teach Computer Vision (CSE445), Digital Image Processing (CSE438), and Statistics for Data Science (AIML505), with interactive dashboards for each course.
            </p>
          </section>

          {/* Research interests */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>
              Research Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
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
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Education timeline */}
          <section>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>
              Education
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { degree: "Ph.D., Computer and Control Engineering", inst: "Polytechnic University of Turin, Italy", years: "2014–2018" },
                { degree: "M.Sc., Computer Engineering", inst: "University of Pavia, Italy", years: "2012–2014" },
                { degree: "B.Eng., Computer Science and Engineering", inst: "Khulna University, Bangladesh", years: "2005–2009" },
              ].map((e) => (
                <div key={e.degree} className="flex gap-4 items-start">
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)", whiteSpace: "nowrap", marginTop: 3, flexShrink: 0 }}>{e.years}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-2)" }}>{e.degree}</p>
                    <p style={{ fontSize: 13, color: "var(--muted)" }}>{e.inst}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Right sidebar ──────────────────────────────────────── */}
        <div className="flex flex-col gap-4 mt-8 lg:mt-0">

          {/* Contact card */}
          <div style={{ backgroundColor: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>
              Contact &amp; Links
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Email", href: `mailto:${profile.email}`, display: profile.email, icon: "✉" },
                { label: "GitHub", href: profile.github, display: "github.com/rifat963", icon: "⌥" },
                { label: "Google Scholar", href: profile.scholar, display: "Scholar Profile", icon: "🎓" },
                { label: "LinkedIn", href: profile.linkedin, display: "LinkedIn", icon: "🔗" },
                { label: "Personal Website", href: profile.website, display: "rifat963.github.io", icon: "🌐" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-2)", textDecoration: "none" }}
                >
                  <span style={{ fontSize: 14 }}>{l.icon}</span>
                  <span>
                    <span style={{ fontSize: 11, color: "var(--muted-2)", display: "block", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>{l.label}</span>
                    <span style={{ color: "var(--avl-teal)", fontWeight: 500 }}>{l.display}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div style={{ backgroundColor: "var(--avl-navy)", borderRadius: 12, padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 600, color: "white", marginBottom: 12 }}>
              Publication Stats
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { num: `${profile.stats.journals}+`, label: "Journals" },
                { num: `${profile.stats.conferences}+`, label: "Conferences" },
                { num: `${profile.stats.bookChapters}`, label: "Book Chapters" },
                { num: `${profile.stats.fundedProjects}`, label: "Funded Projects" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--avl-teal-light)", lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.55)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office card */}
          <div style={{ backgroundColor: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>Office</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
              {profile.office}<br />
              Department of CSE<br />
              East West University<br />
              Dhaka 1212, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
