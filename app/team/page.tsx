import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { faculty, researchAssistants, groupInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "People — Applied AI Research Group",
  description: "Faculty and research assistants of the Applied AI Research Group at East West University.",
};

export default function PeoplePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">

      {/* ── Page Header ──────────────────────────────────────── */}
      <header className="mb-12">
        <p className="ds-label-caps text-[var(--burgundy)] mb-2">Applied AI Research Group · EWU</p>
        <h1 className="ds-display mb-4">People</h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">
          Faculty and researchers working across applied AI, computer vision, NLP, brain-computer
          interfaces, IoT, and intelligent systems at the {groupInfo.department}, {groupInfo.university}.
        </p>
      </header>

      {/* ── Faculty ──────────────────────────────────────────── */}
      <section className="mb-16">
        <div className="section-head">
          <p className="section-label">Faculty</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Faculty Members</h2>
            <span className="status-badge">{groupInfo.university}</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {faculty.map((member) => (
            <article
              key={member.slug}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden"
              style={{ boxShadow: "0 1px 4px rgba(22,50,79,0.06)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

                {/* Left: photo + identity */}
                <div
                  className="flex flex-col items-center md:items-start gap-4 p-6 md:border-r border-b md:border-b-0 border-[var(--border)] bg-[var(--surface-container-low)]"
                  style={{ borderTop: "4px solid var(--primary)" }}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white"
                      style={{ boxShadow: "0 2px 12px rgba(22,50,79,0.15)" }}
                    />
                  ) : (
                    <div
                      className="w-28 h-28 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-3xl border-4 border-white"
                      style={{ boxShadow: "0 2px 12px rgba(22,50,79,0.15)" }}
                    >
                      {member.name.split(" ").filter(w => w.length > 2).slice(-1)[0]?.[0] ?? "?"}
                    </div>
                  )}

                  <div className="text-center md:text-left">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--burgundy)] mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-lg font-bold text-[var(--ink)] leading-snug mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">Department of CSE, EWU</p>
                  </div>

                  <div className="flex flex-col gap-2 w-full mt-1">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-[var(--ink)] hover:text-[var(--burgundy)] transition-colors"
                    >
                      <Mail size={13} className="text-[var(--burgundy)] flex-shrink-0" />
                      {member.email}
                    </a>
                    <div className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                      <MapPin size={13} className="text-[var(--muted)] flex-shrink-0" />
                      {member.office}{member.phone ? ` · ${member.phone}` : ""}
                    </div>
                  </div>

                  <a
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-1 text-xs font-bold uppercase tracking-wider text-white bg-[var(--primary)] px-3 py-1.5 rounded hover:opacity-90 transition-opacity"
                  >
                    View Profile <ExternalLink size={11} />
                  </a>
                </div>

                {/* Right: bio + details */}
                <div className="p-6 flex flex-col gap-5">
                  <div>
                    <p className="ds-label-caps text-[var(--burgundy)] mb-2">About</p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{member.bio}</p>
                  </div>

                  <div>
                    <p className="ds-label-caps text-[var(--burgundy)] mb-2">Research Interests</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.interests.map((interest) => (
                        <span key={interest} className="tag-pill">{interest}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="ds-label-caps text-[var(--burgundy)] mb-2">Education</p>
                    <ul className="flex flex-col gap-1.5">
                      {member.education.map((edu) => (
                        <li key={edu} className="text-sm text-[var(--muted)] flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.achievements && (
                    <div className="border-t border-[var(--border)] pt-4">
                      <p className="ds-label-caps text-[var(--burgundy)] mb-1">Notable</p>
                      <p className="text-sm text-[var(--muted)]">{member.achievements}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Research Assistants ──────────────────────────────── */}
      <section>
        <div className="section-head">
          <p className="section-label">Research Assistants</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Research Assistants</h2>
            <span className="status-badge">Positions Available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {researchAssistants.map((ra) => (
            <div
              key={ra.slug}
              className="research-card border-dashed"
              style={{ borderStyle: "dashed", opacity: 0.85 }}
            >
              <div
                className="w-16 h-16 rounded-full border-2 border-dashed border-[var(--border)] flex items-center justify-center text-[var(--muted)] mb-4 mx-auto"
              >
                <span className="text-2xl">?</span>
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--burgundy)] mb-1">
                  {ra.role}
                </p>
                <h3 className="text-base font-semibold text-[var(--muted)] mb-2">{ra.name}</h3>
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-[var(--surface-container-low)] border border-[var(--border)] text-[var(--muted)]">
                  {ra.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-5 border border-[var(--border)] rounded-lg bg-[var(--surface-container-low)]">
          <p className="text-sm font-semibold text-[var(--ink)] mb-1">Interested in joining?</p>
          <p className="text-sm text-[var(--muted)]">
            We welcome motivated graduate and undergraduate students interested in applied AI, computer vision, NLP, and IoT research.
            Please reach out to any faculty member with your CV and a brief statement of interest.
          </p>
          <a
            href="/contact"
            className="inline-block mt-3 text-xs font-bold uppercase tracking-wider text-[var(--burgundy)] hover:underline"
          >
            Contact the Group →
          </a>
        </div>
      </section>

    </div>
  );
}
