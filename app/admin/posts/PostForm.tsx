import type { BlogPost } from "@/lib/cms";

type PostFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  post?: BlogPost;
  submitLabel: string;
};

export function PostForm({ action, post, submitLabel }: PostFormProps) {
  return (
    <form action={action} className="admin-form">
      <div className="admin-field">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" className="admin-input" defaultValue={post?.title} required />
      </div>

      <div className="admin-field">
        <label htmlFor="slug">Slug</label>
        <input id="slug" name="slug" className="admin-input" defaultValue={post?.slug} placeholder="auto-generated from title" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
        <div className="admin-field">
          <label htmlFor="category">Category</label>
          <input id="category" name="category" className="admin-input" defaultValue={post?.category ?? "Lab News"} required />
        </div>
        <div className="admin-field">
          <label htmlFor="author">Author</label>
          <input id="author" name="author" className="admin-input" defaultValue={post?.author ?? "Applied Vision Lab"} required />
        </div>
        <div className="admin-field">
          <label htmlFor="publishedAt">Publish Date</label>
          <input
            id="publishedAt"
            name="publishedAt"
            type="date"
            className="admin-input"
            defaultValue={post?.publishedAt ?? new Date().toISOString().slice(0, 10)}
            required
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
        <div className="admin-field">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" className="admin-select" defaultValue={post?.status ?? "published"}>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)", fontWeight: 700 }}>
          <input name="featured" type="checkbox" defaultChecked={post?.featured} />
          Featured post
        </label>
      </div>

      <div className="admin-field">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea id="excerpt" name="excerpt" className="admin-textarea" defaultValue={post?.excerpt} required />
      </div>

      <div className="admin-field">
        <label htmlFor="body">Body</label>
        <textarea id="body" name="body" className="admin-textarea" style={{ minHeight: 220 }} defaultValue={post?.body} required />
      </div>

      <div className="admin-actions">
        <button type="submit" className="btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
