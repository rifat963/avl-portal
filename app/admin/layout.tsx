import Link from "next/link";
import { AdminStyles } from "./AdminStyles";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminStyles />
      <div className="admin-wrap">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            alignItems: "flex-start",
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: 8 }}>
              AVL CMS Admin
            </p>
            <h1 className="ds-display" style={{ fontSize: "2.15rem" }}>
              Content Manager
            </h1>
          </div>
          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/admin" className="btn-secondary">
              Dashboard
            </Link>
            <Link href="/admin/posts" className="btn-secondary">
              Posts
            </Link>
            <Link href="/admin/team" className="btn-secondary">
              Team
            </Link>
            <Link href="/blog" className="btn-secondary">
              Public Blog
            </Link>
          </nav>
        </header>
        {children}
      </div>
    </>
  );
}
