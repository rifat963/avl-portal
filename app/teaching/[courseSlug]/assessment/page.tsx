import Link from "next/link";
import { notFound } from "next/navigation";
import CourseDashboardNav from "@/components/CourseDashboardNav";
import { courseDashboards, getCourseDashboard } from "@/lib/courseDashboards";

export function generateStaticParams() {
  return courseDashboards.map((course) => ({ courseSlug: course.slug }));
}

export default async function CourseAssessmentPage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseDashboard(courseSlug);
  if (!course) notFound();
  const totalMarks = course.assessment.reduce((sum, item) => sum + item.marks, 0);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 64px" }} className="px-4 md:px-16">
      <Link href={`/teaching/${course.slug}`} className="btn-secondary" style={{ fontSize: 11, marginBottom: 28, display: "inline-flex" }}>
        Back to {course.code}
      </Link>
      <header className="research-card" style={{ marginBottom: 28, borderLeft: "4px solid #8a1538" }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 10 }}>Assessment structure</p>
        <h1 className="ds-display" style={{ marginBottom: 12 }}>{course.code} Assessment</h1>
        <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 15, lineHeight: 1.7, color: "#667085" }}>
          Marks distribution and course-outcome mapping. Total: {totalMarks} marks.
        </p>
        <CourseDashboardNav course={course} active="assessment" />
      </header>

      <div className="research-card">
        {course.assessment.map((item, index) => (
          <div key={item.area} style={{ borderBottom: index < course.assessment.length - 1 ? "1px solid var(--border)" : "none", padding: "14px 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}>
              <div>
                <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 15, fontWeight: 700, color: "#172033" }}>{item.area}</p>
                <p className="ds-label-caps" style={{ color: "#667085", marginTop: 3 }}>{item.co.join(" / ")}</p>
              </div>
              <strong style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', color: "#16324f", fontSize: 18 }}>{item.marks}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
