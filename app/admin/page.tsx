import Link from "next/link";
import { getAllPosts, getAllTeamMembers, getCmsStats } from "@/lib/cms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function AdminPage() {
  const stats = getCmsStats();
  const posts = getAllPosts();
  const members = getAllTeamMembers();
  const published = posts.filter((post) => post.status === "published").length;
  const activeMembers = members.filter((member) => member.status === "active").length;

  return (
    <div style={{ display: "grid", gap: 26 }}>
      <section className="admin-grid">
        <div className="admin-panel">
          <p className="ds-label-caps" style={{ color: "var(--burgundy)", marginBottom: 10 }}>
            Blog
          </p>
          <h2 className="ds-headline-md">{stats.posts} total posts</h2>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>{published} published posts are visible on the public blog.</p>
          <div className="admin-actions" style={{ marginTop: 18 }}>
            <Link href="/admin/posts/new" className="btn-primary">
              New Post
            </Link>
            <Link href="/admin/posts" className="btn-secondary">
              Manage
            </Link>
          </div>
        </div>

        <div className="admin-panel">
          <p className="ds-label-caps" style={{ color: "var(--burgundy)", marginBottom: 10 }}>
            Team
          </p>
          <h2 className="ds-headline-md">{stats.teamMembers} total members</h2>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>{activeMembers} active profiles are visible on the team page.</p>
          <div className="admin-actions" style={{ marginTop: 18 }}>
            <Link href="/admin/team/new" className="btn-primary">
              New Member
            </Link>
            <Link href="/admin/team" className="btn-secondary">
              Manage
            </Link>
          </div>
        </div>
      </section>

      <section className="admin-panel">
        <p className="ds-label-caps" style={{ color: "var(--burgundy)", marginBottom: 8 }}>
          Database
        </p>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Content is stored in SQLite at <span className="ds-label-code">{stats.databasePath}</span>. Changes from this
          panel update the same database used by the public pages.
        </p>
      </section>
    </div>
  );
}
