import type { TeamMember } from "@/lib/cms";

type TeamMemberFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  member?: TeamMember;
  submitLabel: string;
};

export function TeamMemberForm({ action, member, submitLabel }: TeamMemberFormProps) {
  return (
    <form action={action} className="admin-form">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
        <div className="admin-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" className="admin-input" defaultValue={member?.name} required />
        </div>
        <div className="admin-field">
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" className="admin-input" defaultValue={member?.slug} placeholder="auto-generated from name" />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
        <div className="admin-field">
          <label htmlFor="role">Role</label>
          <input id="role" name="role" className="admin-input" defaultValue={member?.role} required />
        </div>
        <div className="admin-field">
          <label htmlFor="affiliation">Affiliation</label>
          <input id="affiliation" name="affiliation" className="admin-input" defaultValue={member?.affiliation} required />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
        <div className="admin-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="admin-input" defaultValue={member?.email} required />
        </div>
        <div className="admin-field">
          <label htmlFor="office">Office</label>
          <input id="office" name="office" className="admin-input" defaultValue={member?.office} />
        </div>
        <div className="admin-field">
          <label htmlFor="profileUrl">Profile URL</label>
          <input id="profileUrl" name="profileUrl" type="url" className="admin-input" defaultValue={member?.profileUrl} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
        <div className="admin-field">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" className="admin-select" defaultValue={member?.status ?? "active"}>
            <option value="active">Active</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>
        <div className="admin-field">
          <label htmlFor="sortOrder">Sort Order</label>
          <input id="sortOrder" name="sortOrder" type="number" className="admin-input" defaultValue={member?.sortOrder ?? 100} />
        </div>
      </div>

      <div className="admin-field">
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" className="admin-textarea" defaultValue={member?.bio} required />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
        <div className="admin-field">
          <label htmlFor="researchInterests">Research Interests</label>
          <textarea
            id="researchInterests"
            name="researchInterests"
            className="admin-textarea"
            defaultValue={member?.researchInterests.join("\n")}
            placeholder="One item per line"
          />
        </div>
        <div className="admin-field">
          <label htmlFor="education">Education</label>
          <textarea
            id="education"
            name="education"
            className="admin-textarea"
            defaultValue={member?.education.join("\n")}
            placeholder="One item per line"
          />
        </div>
      </div>

      <div className="admin-actions">
        <button type="submit" className="btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
