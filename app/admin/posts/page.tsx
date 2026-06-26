import Link from "next/link";
import { getAllPosts } from "@/lib/cms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function AdminPostsPage() {
  const posts = getAllPosts();

  return (
    <section style={{ display: "grid", gap: 20 }}>
      <div className="section-head">
        <p className="section-label">Blog CMS</p>
        <div className="title-row">
          <h2 className="ds-headline-md">Manage Posts</h2>
          <Link href="/admin/posts/new" className="btn-primary">
            New Post
          </Link>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <strong>{post.title}</strong>
                <p style={{ color: "var(--muted)", marginTop: 4 }}>{post.slug}</p>
              </td>
              <td>
                <span className="status-badge">{post.status}</span>
                {post.featured && <span className="tag-pill" style={{ marginLeft: 8 }}>featured</span>}
              </td>
              <td>{post.category}</td>
              <td>{post.publishedAt}</td>
              <td>
                <Link href={`/admin/posts/${post.id}`} className="btn-secondary" style={{ padding: "7px 14px", fontSize: 11 }}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
