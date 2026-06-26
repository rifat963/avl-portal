import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, Globe } from "lucide-react";
import { faculty, groupInfo, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Applied AI Research Group",
  description: "Contact information for the Applied AI Research Group at East West University.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">

      {/* ── Page Header ──────────────────────────────────────── */}
      <header className="mb-12 border-l-4 border-[var(--primary)] pl-6">
        <p className="ds-label-caps text-[var(--burgundy)] mb-2">Get in Touch</p>
        <h1 className="ds-display mb-4">Contact</h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">
          Reach out to the Applied AI Research Group for collaboration inquiries, research questions,
          or student opportunities. Our portal is designed to make teaching materials openly accessible,
          share research progress with the broader community, and provide structured learning resources
          for students in applied AI, computer vision, NLP, IoT, and intelligent systems.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

        {/* ── Faculty Contacts ─────────────────────────────────── */}
        <section>
          <div className="section-head">
            <p className="section-label">Faculty</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Faculty Contacts</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {faculty.map((member) => (
              <div
                key={member.slug}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden"
                style={{ boxShadow: "0 1px 4px rgba(22,50,79,0.05)" }}
              >
                <div
                  className="px-5 py-4 border-b border-[var(--border)] bg-[var(--surface-container-low)]"
                  style={{ borderTop: "3px solid var(--primary)" }}
                >
                  <div className="flex items-center gap-3">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[var(--border)] flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                        {member.name.split(" ").filter(w => w.length > 2).slice(-1)[0]?.[0] ?? "?"}
                      </div>
                    )}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--burgundy)]">
                        {member.role}
                      </p>
                      <h3 className="text-sm font-bold text-[var(--ink)] leading-tight">{member.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-4 flex flex-col gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2.5 text-sm text-[var(--ink)] hover:text-[var(--burgundy)] transition-colors group"
                  >
                    <Mail size={14} className="text-[var(--burgundy)] flex-shrink-0" />
                    <span className="group-hover:underline">{member.email}</span>
                  </a>

                  <div className="inline-flex items-center gap-2.5 text-sm text-[var(--muted)]">
                    <MapPin size={14} className="text-[var(--muted)] flex-shrink-0" />
                    {member.office}
                  </div>

                  {member.phone && (
                    <div className="inline-flex items-center gap-2.5 text-sm text-[var(--muted)]">
                      <Phone size={14} className="text-[var(--muted)] flex-shrink-0" />
                      {member.phone}
                    </div>
                  )}

                  <div className="pt-2 border-t border-[var(--border)]">
                    <a
                      href={member.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--burgundy)] hover:underline"
                    >
                      Faculty Profile <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sidebar: Group Info ──────────────────────────────── */}
        <aside className="flex flex-col gap-5">

          {/* Primary contact */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden">
            <div
              className="px-5 py-4 border-b border-[var(--border)] bg-[var(--primary)]"
            >
              <h3 className="text-sm font-bold text-white">Primary Contact</h3>
              <p className="text-xs text-white/70 mt-0.5">{profile.title}</p>
            </div>
            <div className="px-5 py-4 flex flex-col gap-3">
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">{profile.name}</p>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {profile.department}, {profile.university}
                </p>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-[var(--burgundy)] hover:underline"
              >
                <Mail size={14} className="text-[var(--burgundy)] flex-shrink-0" />
                {profile.email}
              </a>

              <div className="text-xs text-[var(--muted)] leading-relaxed">
                {profile.office}
              </div>

              {profile.phone && (
                <div className="text-xs text-[var(--muted)] leading-relaxed">
                  {profile.phone}
                </div>
              )}

              <div className="grid grid-cols-1 gap-2 text-xs">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--burgundy)] hover:underline"
                >
                  LinkedIn profile
                </a>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--burgundy)] hover:underline"
                >
                  Personal website
                </a>
              </div>
            </div>
          </div>

          {/* Group address */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden">
            <div
              className="px-5 py-4 border-b border-[var(--border)] bg-[var(--primary)]"
            >
              <h3 className="text-sm font-bold text-white">{groupInfo.name}</h3>
              <p className="text-xs text-white/70 mt-0.5">{groupInfo.university}</p>
            </div>
            <div className="px-5 py-4 flex flex-col gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[var(--burgundy)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--ink)] mb-0.5">Address</p>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {groupInfo.department}<br />
                    {groupInfo.university}<br />
                    {groupInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-[var(--burgundy)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--ink)] mb-0.5">Department Email</p>
                  <a
                    href={`mailto:${groupInfo.email}`}
                    className="text-xs text-[var(--burgundy)] hover:underline"
                  >
                    {groupInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe size={14} className="text-[var(--burgundy)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--ink)] mb-0.5">Department Website</p>
                  <a
                    href={groupInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--burgundy)] hover:underline inline-flex items-center gap-1"
                  >
                    fse.ewubd.edu/cse <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Prospective students */}
          <div className="bg-[var(--surface-container-low)] border border-[var(--border)] rounded-lg p-5">
            <h3 className="text-sm font-bold text-[var(--ink)] mb-2">Prospective Students</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">
              We welcome applications from motivated students interested in pursuing research in
              applied AI, computer vision, NLP, IoT, and related areas. Please contact the faculty
              member whose research aligns with your interests.
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-[var(--muted)]">
              <p>Include in your email:</p>
              <ul className="list-disc list-inside space-y-0.5 pl-1">
                <li>Your CV / resume</li>
                <li>Brief research interest statement</li>
                <li>Relevant coursework or projects</li>
              </ul>
            </div>
          </div>

          {/* Location map placeholder */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden">
            <div className="px-5 py-3 border-b border-[var(--border)]">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Location</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">
                East West University is located in Aftabnagar, Dhaka. The Department of Computer
                Science and Engineering is in the main academic building.
              </p>
              <a
                href="https://maps.google.com/?q=East+West+University+Dhaka+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--burgundy)] hover:underline"
              >
                Open in Google Maps <ExternalLink size={11} />
              </a>
            </div>
          </div>

        </aside>
      </div>

    </div>
  );
}
