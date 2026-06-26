import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { allPublications, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications — Applied AI Research Group",
  description: "Peer-reviewed publications from the Applied AI Research Group at East West University.",
};

export default function PublicationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">

      {/* ── Page Header ──────────────────────────────────────── */}
      <header className="mb-10 border-l-4 border-[var(--primary)] pl-6">
        <p className="ds-label-caps text-[var(--burgundy)] mb-2">Peer-Reviewed Work</p>
        <h1 className="ds-display mb-4">Publications</h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">
          Selected journal articles, conference papers, and book chapters from the Applied AI Research Group.
          Members have published in Elsevier, IEEE, Nature, IOS Press, and Springer venues.
        </p>
      </header>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      {/* ── Journal Articles ─────────────────────────────────── */}
      <PubSection
        title="Journal Articles"
        total={profile.stats.journals}
        pubs={allPublications.journals}
        tag="Journal"
      />

      {/* ── Conference Papers ────────────────────────────────── */}
      <PubSection
        title="Conference Papers"
        total={profile.stats.conferences}
        pubs={allPublications.conferences}
        tag="Conference"
      />

      {/* ── Book Chapters ────────────────────────────────────── */}
      <PubSection
        title="Book Chapters"
        total={profile.stats.bookChapters}
        pubs={allPublications.bookChapters}
        tag="Book Chapter"
      />

      {/* ── Scholar Link ─────────────────────────────────────── */}
      <div className="mt-6 p-6 border border-[var(--border)] rounded-lg bg-[var(--surface-container-low)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-[var(--ink)] mb-1">Full publication list</p>
          <p className="text-sm text-[var(--muted)]">
            View the complete list of publications on Google Scholar and the personal academic website.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Google Scholar <ExternalLink size={13} />
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
          >
            Personal Site <ExternalLink size={13} />
          </a>
        </div>
      </div>

    </div>
  );
}

function PubSection({
  title,
  total,
  pubs,
  tag,
}: {
  title: string;
  total: number;
  pubs: { title: string; journal: string; year: number; url: string }[];
  tag: string;
}) {
  return (
    <section className="mb-10">
      <div className="section-head">
        <p className="section-label">{tag}</p>
        <div className="title-row">
          <h2 className="ds-headline-md">{title}</h2>
          <span
            className="text-xs font-mono font-semibold text-white px-2.5 py-0.5 rounded"
            style={{ background: "var(--primary)" }}
          >
            {total}+
          </span>
        </div>
      </div>

      <div className="border border-[var(--border)] rounded-lg bg-[var(--surface)] overflow-hidden">
        {pubs.map((pub, i) => (
          <div
            key={i}
            className="pub-item px-5 py-4"
            style={{ borderBottom: i < pubs.length - 1 ? "1px solid var(--border)" : "none" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="ds-label-code text-[var(--muted)] mb-1.5">[{pub.year}]</p>
                {pub.url !== "#" ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[var(--ink)] leading-snug hover:text-[var(--burgundy)] transition-colors block mb-1"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-[var(--ink)] leading-snug mb-1">{pub.title}</p>
                )}
                <p className="text-xs text-[var(--muted)]">{pub.journal}</p>
              </div>
              {pub.url !== "#" && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-[var(--muted)] hover:text-[var(--burgundy)] transition-colors mt-1"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
        <div className="px-5 py-3 bg-[var(--surface-container-low)] border-t border-[var(--border)]">
          <p className="font-mono text-xs text-[var(--muted)]">
            Showing {pubs.length} of {total}+ ·{" "}
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--burgundy)] hover:underline"
            >
              Full list on Google Scholar ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
