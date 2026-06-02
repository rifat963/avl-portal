import Link from "next/link";
import { notFound } from "next/navigation";
import CourseDashboardNav from "@/components/CourseDashboardNav";
import { courseDashboards, getCourseDashboard } from "@/lib/courseDashboards";

export function generateStaticParams() {
  return courseDashboards.map((course) => ({ courseSlug: course.slug }));
}

export default async function CourseResourcesPage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseDashboard(courseSlug);
  if (!course) notFound();

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 64px" }} className="px-4 md:px-16">
      <Link href={`/teaching/${course.slug}`} className="btn-secondary" style={{ fontSize: 11, marginBottom: 28, display: "inline-flex" }}>
        Back to {course.code}
      </Link>
      <header className="research-card" style={{ marginBottom: 28, borderLeft: "4px solid #16324f" }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 10 }}>Reference desk</p>
        <h1 className="ds-display" style={{ marginBottom: 12 }}>{course.code} Resources</h1>
        <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 15, lineHeight: 1.7, color: "#667085" }}>
          Textbooks, tools, notebooks, datasets, and source links related to this course dashboard.
        </p>
        <CourseDashboardNav course={course} active="resources" />
      </header>

      <div className="research-card">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {course.resources.map((resource) => <span key={resource} className="tag-pill">{resource}</span>)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
          <a href={course.repository} target="_blank" rel="noopener noreferrer" className="btn-secondary">Source Code</a>
          <a href={course.externalDashboard} target="_blank" rel="noopener noreferrer" className="btn-secondary">Legacy External Dashboard</a>
        </div>
      </div>
    </div>
  );
}
