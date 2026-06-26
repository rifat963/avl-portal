import Link from "next/link";
import { notFound } from "next/navigation";
import CourseDashboardNav from "@/components/CourseDashboardNav";
import { courseDashboards, getCourseDashboard } from "@/lib/courseDashboards";

export function generateStaticParams() {
  return courseDashboards.map((course) => ({ courseSlug: course.slug }));
}

export default async function CourseLecturesPage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseDashboard(courseSlug);
  if (!course) notFound();

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 64px" }} className="px-4 md:px-16">
      <Link href={`/teaching/${course.slug}`} className="btn-secondary" style={{ fontSize: 11, marginBottom: 28, display: "inline-flex" }}>
        Back to {course.code}
      </Link>
      <header className="research-card" style={{ marginBottom: 28, borderLeft: "4px solid #16324f" }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 10 }}>Theory sequence</p>
        <h1 className="ds-display" style={{ marginBottom: 12 }}>{course.code} Lectures</h1>
        <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 15, lineHeight: 1.7, color: "#667085", maxWidth: 840 }}>
          Lecture modules from the original dashboard are included here as internal AVL Portal content.
        </p>
        <CourseDashboardNav course={course} active="modules" />
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 16 }}>
        {course.modules.map((module) => (
          <article key={module.id} className="research-card" style={{ borderTop: "4px solid #16324f" }}>
            <p className="ds-label-code" style={{ marginBottom: 8 }}>{module.id} / {module.weekRange}</p>
            <h2 className="ds-headline-sm" style={{ fontSize: 17, marginBottom: 10 }}>{module.title}</h2>
            <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 14, color: "#667085", lineHeight: 1.65 }}>{module.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              <span className="tag-pill">{module.lectures}</span>
              {module.tools.map((tool) => <span key={tool} className="tag-pill">{tool}</span>)}
            </div>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
              {module.outcomes.map((outcome) => (
                <p key={outcome} style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 12, color: "#667085", lineHeight: 1.6 }}>
                  - {outcome}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
