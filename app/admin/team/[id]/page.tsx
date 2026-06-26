import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteTeamMemberAction, updateTeamMemberAction } from "../../actions";
import { TeamMemberForm } from "../TeamMemberForm";
import { getTeamMemberById } from "@/lib/cms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type EditTeamMemberPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditTeamMemberPage({ params }: EditTeamMemberPageProps) {
  const { id } = await params;
  const memberId = Number(id);
  const member = getTeamMemberById(memberId);

  if (!member) {
    notFound();
  }

  const updateAction = updateTeamMemberAction.bind(null, memberId);
  const deleteAction = deleteTeamMemberAction.bind(null, memberId);

  return (
    <section style={{ display: "grid", gap: 20 }}>
      <div className="admin-panel">
        <div className="section-head">
          <p className="section-label">Team CMS</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Edit Team Member</h2>
            <Link href="/admin/team" className="btn-secondary">
              Back
            </Link>
          </div>
        </div>
        <TeamMemberForm action={updateAction} member={member} submitLabel="Save Member" />
      </div>

      <form action={deleteAction} className="admin-panel admin-danger">
        <h3 className="ds-headline-sm" style={{ marginBottom: 8, color: "#8a1538" }}>
          Delete team member
        </h3>
        <p style={{ marginBottom: 14 }}>This removes the profile from the SQLite CMS database.</p>
        <button type="submit" className="btn-secondary" style={{ borderColor: "#8a1538", color: "#8a1538" }}>
          Delete Member
        </button>
      </form>
    </section>
  );
}
