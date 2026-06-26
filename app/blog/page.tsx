import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/cms";

export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, research notes, and teaching updates from Applied Vision Lab.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  const featured = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 64px 80px" }} className="px-4 md:px-16">
      <section style={{ marginBottom: 40 }}>
        <p className="section-label" style={{ marginBottom: 10 }}>
          Lab News
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.7fr) minmax(260px, 0.7fr)",
            gap: 24,
            alignItems: "stretch",
          }}
          className="cms-hero-grid"
        >
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderTop: "5px solid var(--burgundy)",
              borderLeft: "5px solid var(--primary)",
              padding: "34px 38px",
              boxShadow: "0 18px 44px rgba(22, 50, 79, 0.08)",
            }}
          >
            <h1 className="ds-display" style={{ marginBottom: 14 }}>
              News & Updates
            </h1>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: 700 }}>
              Research notes, student opportunities, teaching updates, and milestones from the Applied Vision Lab.
            </p>
          </div>

          <aside
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <p className="ds-label-caps" style={{ color: "var(--burgundy)" }}>
              Focus Areas
            </p>
            <div>
              <p className="ds-headline-sm">Applied AI & Vision</p>
              <p style={{ color: "var(--muted)", fontSize: 13 }}>Project notes from computer vision, BCI, and graph-based AI work.</p>
            </div>
            <div>
              <p className="ds-headline-sm">Teaching & Mentoring</p>
              <p style={{ color: "var(--muted)", fontSize: 13 }}>Course updates, student research pathways, and lab announcements.</p>
            </div>
          </aside>
        </div>
      </section>

      {featured && (
        <section style={{ marginBottom: 44 }}>
          <div className="section-head">
            <p className="section-label">Featured</p>
            <div className="title-row">
              <h2 className="ds-headline-md">{featured.title}</h2>
              <span className="status-badge">{featured.category}</span>
            </div>
          </div>

          <article
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: 28,
              borderLeft: "4px solid var(--burgundy)",
            }}
          >
            <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 18 }}>{featured.body}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <span className="tag-pill">{featured.author}</span>
              <span className="tag-pill">{featured.publishedAt}</span>
            </div>
          </article>
        </section>
      )}

      <section>
        <div className="section-head">
          <p className="section-label">Archive</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Published Posts</h2>
            <Link href="/team" className="btn-secondary" style={{ padding: "7px 14px", fontSize: 11 }}>
              Team Page
            </Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {regularPosts.map((post) => (
            <article key={post.id} className="research-card" style={{ gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                <span className="status-badge">{post.category}</span>
                <span className="ds-label-code">{post.publishedAt}</span>
              </div>
              <h3 className="ds-headline-sm">{post.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.65, flexGrow: 1 }}>{post.excerpt}</p>
              <p style={{ color: "var(--ink)", lineHeight: 1.65 }}>{post.body}</p>
              <span className="tag-pill" style={{ alignSelf: "flex-start" }}>
                {post.author}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
