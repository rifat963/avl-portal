import Link from "next/link";
import { notFound } from "next/navigation";
import CourseDashboardNav from "@/components/CourseDashboardNav";
import { courseDashboards, getCourseDashboard } from "@/lib/courseDashboards";

export function generateStaticParams() {
  return courseDashboards.map((course) => ({ courseSlug: course.slug }));
}

export default async function CourseLabsPage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseDashboard(courseSlug);
  if (!course) notFound();

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 64px" }} className="px-4 md:px-16">
      <Link href={`/teaching/${course.slug}`} className="btn-secondary" style={{ fontSize: 11, marginBottom: 28, display: "inline-flex" }}>
        Back to {course.code}
      </Link>
      <header className="research-card" style={{ marginBottom: 28, borderLeft: "4px solid #16324f" }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 10 }}>Practical sequence</p>
        <h1 className="ds-display" style={{ marginBottom: 12 }}>{course.code} Lab Manual</h1>
        <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 15, lineHeight: 1.7, color: "#667085", maxWidth: 840 }}>
          Lab sessions and practical focus areas from the dashboard are now available inside AVL Portal.
        </p>
        <CourseDashboardNav course={course} active="labs" />
      </header>

      {course.labs.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {course.labs.map((lab) => (
            <article key={lab.id} className="research-card">
              <p className="ds-label-code" style={{ marginBottom: 8 }}>{lab.id} / {lab.week}</p>
              <h2 className="ds-headline-sm" style={{ fontSize: 16, marginBottom: 8 }}>{lab.title}</h2>
              <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 13, color: "#667085", lineHeight: 1.6 }}>{lab.focus}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="research-card">
          <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', color: "#667085" }}>
            This course dashboard does not include a separate lab manual.
          </p>
        </div>
      )}
    </div>
  );
}
