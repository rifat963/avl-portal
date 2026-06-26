import Link from "next/link";
import { createTeamMemberAction } from "../../actions";
import { TeamMemberForm } from "../TeamMemberForm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function NewTeamMemberPage() {
  return (
    <section className="admin-panel">
      <div className="section-head">
        <p className="section-label">Team CMS</p>
        <div className="title-row">
          <h2 className="ds-headline-md">New Team Member</h2>
          <Link href="/admin/team" className="btn-secondary">
            Back
          </Link>
        </div>
      </div>
      <TeamMemberForm action={createTeamMemberAction} submitLabel="Create Member" />
    </section>
  );
}
