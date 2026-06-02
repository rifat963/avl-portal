import Link from "next/link";

const externalLinks = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rifat963" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=fXu1UdgAAAAJ&hl=en" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Mohammad-Rashid-132" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "2px solid var(--border)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "52px 64px 40px",
        }}
        className="px-4 md:px-16"
      >
        <div
          className="flex flex-col md:flex-row justify-between items-start"
          style={{ gap: 40, marginBottom: 40 }}
        >
          {/* Brand block */}
          <div style={{ maxWidth: 340 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #16324f 0%, #1e3a5f 100%)",
                  borderTop: "2px solid #8a1538",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                }}
              >
                AVL
              </span>
              <p
                style={{
                  fontFamily: '"Segoe UI", system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#16324f",
                  letterSpacing: "-0.01em",
                }}
              >
                Applied Vision Lab
              </p>
            </div>
            <p
              style={{
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: 13.5,
                color: "var(--on-surface-variant)",
                lineHeight: 1.7,
              }}
            >
              Teaching, research and tutorials in computer vision & applied AI
              at East West University, Bangladesh.
            </p>
          </div>

          {/* External links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 40px",
            }}
          >
            {externalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: '"Segoe UI", system-ui, sans-serif',
              fontSize: 12,
              color: "var(--on-surface-variant)",
            }}
          >
            © {new Date().getFullYear()} Dr. Mohammad Rifat Ahmmad Rashid · East West University
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Teaching", href: "/teaching" },
              { label: "Research", href: "/research" },
              { label: "Tutorials", href: "/tutorials" },
              { label: "About", href: "/about" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="footer-link"
                style={{ fontSize: 12 }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
