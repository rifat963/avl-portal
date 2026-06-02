import Link from "next/link";
import { notFound } from "next/navigation";
import CourseDashboardNav from "@/components/CourseDashboardNav";
import { courseDashboards, getCourseDashboard } from "@/lib/courseDashboards";

export function generateStaticParams() {
  return courseDashboards.map((course) => ({ courseSlug: course.slug }));
}

export default async function CourseSeriesPage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseDashboard(courseSlug);
  if (!course) notFound();
  const active = course.code === "CSE445" ? "tutorials" : "series";

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 64px" }} className="px-4 md:px-16">
      <Link href={`/teaching/${course.slug}`} className="btn-secondary" style={{ fontSize: 11, marginBottom: 28, display: "inline-flex" }}>
        Back to {course.code}
      </Link>
      <header className="research-card" style={{ marginBottom: 28, borderLeft: "4px solid #16324f" }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 10 }}>Extended learning</p>
        <h1 className="ds-display" style={{ marginBottom: 12 }}>{course.code} {course.code === "CSE445" ? "Tutorials" : "Series"}</h1>
        <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 15, lineHeight: 1.7, color: "#667085" }}>
          Special topic tracks and supplementary dashboard sections integrated inside AVL Portal.
        </p>
        <CourseDashboardNav course={course} active={active} />
      </header>

      {course.series ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {course.series.map((series) => (
            <article key={series.title} className="research-card">
              <h2 className="ds-headline-sm" style={{ fontSize: 17, marginBottom: 8 }}>{series.title}</h2>
              <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 13, color: "#667085", lineHeight: 1.65 }}>{series.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                {series.items.map((item) => <span key={item} className="tag-pill">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="research-card">
          <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', color: "#667085" }}>No separate series materials are listed for this course.</p>
        </div>
      )}
    </div>
  );
}
