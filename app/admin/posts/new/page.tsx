import Link from "next/link";
import { createPostAction } from "../../actions";
import { PostForm } from "../PostForm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function NewPostPage() {
  return (
    <section className="admin-panel">
      <div className="section-head">
        <p className="section-label">Blog CMS</p>
        <div className="title-row">
          <h2 className="ds-headline-md">New Blog Post</h2>
          <Link href="/admin/posts" className="btn-secondary">
            Back
          </Link>
        </div>
      </div>
      <PostForm action={createPostAction} submitLabel="Create Post" />
    </section>
  );
}
