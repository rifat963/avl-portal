import Link from "next/link";
import { Users, FlaskConical, BookOpen, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { groupInfo, projects, recentPublications, faculty } from "@/lib/data";

const domainColor: Record<string, string> = {
  teal:   "var(--accent-teal)",
  amber:  "var(--accent-amber)",
  purple: "var(--accent-purple)",
  navy:   "var(--accent-navy)",
};

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--burgundy)] mb-3">
              {groupInfo.department} · {groupInfo.university}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight mb-4">
              {groupInfo.name}
            </h1>
            <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-8">
              {groupInfo.description}
            </p>

            {/* Research theme pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {groupInfo.researchThemes.map((theme) => (
                <span
                  key={theme}
                  className="text-xs font-mono px-3 py-1.5 rounded border border-[var(--border)] bg-[var(--surface-container-low)] text-[var(--muted)]"
                >
                  {theme}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <Users size={15} /> Meet the Team
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
              >
                <FlaskConical size={15} /> Research Projects
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
              >
                <BookOpen size={15} /> Publications
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
              >
                <Mail size={15} /> Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

        {/* ── Faculty Snapshot ─────────────────────────────────── */}
        <section>
          <div className="section-head">
            <p className="section-label">Team</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Faculty Members</h2>
              <Link href="/team" className="text-xs font-bold uppercase tracking-widest text-[var(--burgundy)] hover:underline whitespace-nowrap flex items-center gap-1">
                All Members <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {faculty.map((f) => (
              <div key={f.slug} className="research-card gap-3 items-start">
                <div className="flex items-center gap-3 mb-3">
                  {f.photo ? (
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[var(--border)] flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {f.name.split(" ").slice(-1)[0][0]}
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-[var(--burgundy)] font-semibold uppercase tracking-wide">{f.role}</p>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] leading-snug">{f.name}</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  {f.interests.slice(0, 3).map((i) => (
                    <span key={i} className="tag-pill text-[10px]">{i}</span>
                  ))}
                </div>
                <a
                  href={f.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--burgundy)] hover:underline font-semibold"
                >
                  Profile <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Active Research Projects ─────────────────────────── */}
        <section>
          <div className="section-head">
            <p className="section-label">Research</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Active Research Projects</h2>
              <Link href="/projects" className="text-xs font-bold uppercase tracking-widest text-[var(--burgundy)] hover:underline whitespace-nowrap flex items-center gap-1">
                All Projects <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p, i) => (
              <div
                key={`${p.shortTitle}-${i}`}
                className="research-card"
                style={{ borderTop: `3px solid ${domainColor[p.color] ?? "var(--primary)"}` }}
              >
                <p className="ds-label-caps text-[var(--burgundy)] mb-3">{p.role} · {p.funder}</p>
                <h3 className="ds-headline-sm text-[14px] leading-snug flex-1 mb-3">{p.shortTitle}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--muted)]">EWU CRT Grant · {p.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Recent Publications ──────────────────────────────── */}
        <section>
          <div className="section-head">
            <p className="section-label">Publications</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Recent Publications</h2>
              <Link
                href="/publications"
                className="text-xs font-bold uppercase tracking-widest text-[var(--burgundy)] hover:underline whitespace-nowrap flex items-center gap-1"
              >
                All Publications <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--surface)]">
            {recentPublications.map((pub, i) => (
              <div
                key={i}
                className="pub-item px-5 py-4"
                style={{ borderBottom: i < recentPublications.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <p className="ds-label-code text-[var(--muted)] mb-1">[{pub.year}]</p>
                    <p className="text-[14px] font-semibold text-[var(--ink)] leading-snug mb-1">{pub.title}</p>
                    <p className="text-sm text-[var(--muted)]">{pub.journal}</p>
                  </div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--burgundy)] transition-colors flex-shrink-0 mt-1"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <Link href="/publications" className="btn-secondary inline-flex items-center gap-1.5">
              View All Publications <ArrowRight size={13} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
