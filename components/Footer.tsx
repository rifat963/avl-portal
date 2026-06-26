import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[var(--muted)]">
        <div>
          <div className="font-bold text-[var(--ink)] mb-1">Applied AI Research Group</div>
          <div>Department of CSE, East West University</div>
          <div>Aftabnagar, Dhaka-1212, Bangladesh</div>
          <div className="mt-2">Research in applied AI, computer vision, NLP, IoT, and intelligent systems.</div>
        </div>
        <div>
          <div className="font-bold text-[var(--ink)] mb-1">Faculty</div>
          <div>Dr. Shamim H Ripon · Professor</div>
          <div>Dr. Ahmed Wasif Reza · Professor &amp; Dean</div>
          <div>Dr. Raihan Ul Islam · Associate Professor</div>
          <div>Dr. Mohammad Rifat Ahmmad Rashid · Associate Professor</div>
        </div>
        <div>
          <div className="font-bold text-[var(--ink)] mb-1">Connect</div>
          {[
            { label: "EWU CSE Department ↗", href: "https://fse.ewubd.edu/computer-science-engineering" },
            { label: "Google Scholar ↗", href: "https://scholar.google.com/citations?user=fXu1UdgAAAAJ&hl=en" },
            { label: "ResearchGate ↗", href: "https://www.researchgate.net/profile/Mohammad-Rashid-132" },
            { label: "LinkedIn ↗", href: "https://linkedin.com/in/rifat963" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[var(--ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 border-t border-[var(--border)] pt-3 flex flex-wrap gap-3">
            {[
              { label: "People", href: "/team" },
              { label: "Projects", href: "/projects" },
              { label: "Publications", href: "/publications" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-[var(--ink)] transition-colors text-xs">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 py-3 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Applied AI Research Group · East West University · Department of Computer Science and Engineering
        </div>
      </div>
    </footer>
  );
}
