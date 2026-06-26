import Link from "next/link";
import { notFound } from "next/navigation";
import { deletePostAction, updatePostAction } from "../../actions";
import { PostForm } from "../PostForm";
import { getPostById } from "@/lib/cms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const postId = Number(id);
  const post = getPostById(postId);

  if (!post) {
    notFound();
  }

  const updateAction = updatePostAction.bind(null, postId);
  const deleteAction = deletePostAction.bind(null, postId);

  return (
    <section style={{ display: "grid", gap: 20 }}>
      <div className="admin-panel">
        <div className="section-head">
          <p className="section-label">Blog CMS</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Edit Post</h2>
            <Link href="/admin/posts" className="btn-secondary">
              Back
            </Link>
          </div>
        </div>
        <PostForm action={updateAction} post={post} submitLabel="Save Post" />
      </div>

      <form action={deleteAction} className="admin-panel admin-danger">
        <h3 className="ds-headline-sm" style={{ marginBottom: 8, color: "#8a1538" }}>
          Delete post
        </h3>
        <p style={{ marginBottom: 14 }}>This removes the post from the SQLite CMS database.</p>
        <button type="submit" className="btn-secondary" style={{ borderColor: "#8a1538", color: "#8a1538" }}>
          Delete Post
        </button>
      </form>
    </section>
  );
}
