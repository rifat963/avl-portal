import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--surface-2)", borderTop: "1px solid var(--border)" }}>
      <div className="px-6 pt-10 pb-4" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="flex flex-wrap gap-8 justify-between items-start mb-8">
          {/* Left: branding */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center rounded" style={{ width: 28, height: 28, backgroundColor: "var(--avl-navy)" }}>
                <span style={{ color: "white", fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700 }}>AVL</span>
              </div>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 600, color: "var(--avl-navy)" }}>Applied Vision Lab</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--muted)", maxWidth: 270, lineHeight: 1.6 }}>
              Teaching, research, and tutorials in computer vision & applied AI at East West University, Bangladesh.
            </p>
          </div>

          {/* Right: link columns */}
          <div className="flex gap-10 flex-wrap">
            <div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, color: "var(--muted-2)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>External</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "GitHub", href: "https://github.com/rifat963" },
                  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=fXu1UdgAAAAJ&hl=en" },
                  { label: "Personal Website", href: "https://rifat963.github.io" },
                  { label: "Email", href: "mailto:rifat.rashid@ewubd.edu" },
                ].map((l) => (
                  <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, color: "var(--muted-2)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Portal</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Teaching", href: "/teaching" },
                  { label: "Research", href: "/research" },
                  { label: "Tutorials", href: "/tutorials" },
                  { label: "About", href: "/about" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)" }}>
            © {new Date().getFullYear()} Dr. Mohammad Rifat Ahmmad Rashid · East West University
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted-2)" }}>
            Applied Vision Lab · Dhaka 1212, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
