import Link from "next/link";
import { getAllTeamMembers } from "@/lib/cms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function AdminTeamPage() {
  const members = getAllTeamMembers();

  return (
    <section style={{ display: "grid", gap: 20 }}>
      <div className="section-head">
        <p className="section-label">Team CMS</p>
        <div className="title-row">
          <h2 className="ds-headline-md">Manage Team Members</h2>
          <Link href="/admin/team/new" className="btn-primary">
            New Member
          </Link>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Sort</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                <strong>{member.name}</strong>
                <p style={{ color: "var(--muted)", marginTop: 4 }}>{member.email}</p>
              </td>
              <td>{member.role}</td>
              <td>
                <span className="status-badge">{member.status}</span>
              </td>
              <td>{member.sortOrder}</td>
              <td>
                <Link href={`/admin/team/${member.id}`} className="btn-secondary" style={{ padding: "7px 14px", fontSize: 11 }}>
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
