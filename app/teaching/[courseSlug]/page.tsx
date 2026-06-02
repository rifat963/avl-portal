import Link from "next/link";
import { notFound } from "next/navigation";
import { courseDashboards, getCourseDashboard } from "@/lib/courseDashboards";
import CourseDashboardNav from "@/components/CourseDashboardNav";

export function generateStaticParams() {
  return courseDashboards.map((course) => ({ courseSlug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseDashboard(courseSlug);
  if (!course) return {};
  return {
    title: `${course.code} - ${course.title}`,
    description: course.description,
  };
}

const colorForIndex = ["#16324f", "#16324f", "#16324f", "#16324f", "#16324f", "#16324f"];

export default async function CourseDashboardPage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseDashboard(courseSlug);
  if (!course) notFound();

  const totalMarks = course.assessment.reduce((sum, item) => sum + item.marks, 0);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 64px" }} className="px-4 md:px-16">
      <Link href="/teaching" className="btn-secondary" style={{ fontSize: 11, marginBottom: 28, display: "inline-flex" }}>
        Back to Teaching
      </Link>

      <header className="research-card" style={{ marginBottom: 28, borderLeft: "4px solid #16324f" }}>
        <p className="ds-label-caps" style={{ color: "#8a1538", marginBottom: 10 }}>
          {course.level} Course Dashboard
        </p>
        <h1 className="ds-display" style={{ marginBottom: 12 }}>
          {course.code}: {course.title}
        </h1>
        <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 17, lineHeight: 1.7, color: "#667085", maxWidth: 780 }}>
          {course.subtitle}
        </p>
        <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 14, lineHeight: 1.7, color: "#667085", maxWidth: 840, marginTop: 12 }}>
          {course.description}
        </p>

        <CourseDashboardNav course={course} active="overview" />
      </header>

      <section id="overview" style={{ marginBottom: 48 }}>
        <div className="section-head">
          <p className="section-label">Overview</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Dashboard Summary</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
          {course.stats.map((stat) => (
            <div key={stat.label} className="research-card" style={{ gap: 0 }}>
              <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 28, fontWeight: 700, color: "#16324f", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p className="ds-label-caps" style={{ color: "#667085", marginTop: 8 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="modules" style={{ marginBottom: 48 }}>
        <div className="section-head">
          <p className="section-label">Theory Sequence</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Course Modules</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 16 }}>
          {course.modules.map((module, index) => (
            <article key={module.id} className="research-card" style={{ borderTop: `4px solid ${colorForIndex[index % colorForIndex.length]}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "flex-start" }}>
                <div>
                  <p className="ds-label-code" style={{ color: colorForIndex[index % colorForIndex.length], marginBottom: 8 }}>
                    {module.id} / {module.weekRange}
                  </p>
                  <h3 className="ds-headline-sm" style={{ fontSize: 17, marginBottom: 10 }}>
                    {module.title}
                  </h3>
                </div>
                <span className="tag-pill">{module.lectures}</span>
              </div>
              <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 14, color: "#667085", lineHeight: 1.65 }}>
                {module.description}
              </p>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                {module.outcomes.map((outcome) => (
                  <p key={outcome} style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 12, color: "#667085", lineHeight: 1.6 }}>
                    - {outcome}
                  </p>
                ))}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                  {module.tools.map((tool) => (
                    <span key={tool} className="tag-pill">{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {course.labs.length > 0 && (
        <section id="labs" style={{ marginBottom: 48 }}>
          <div className="section-head">
            <p className="section-label">Practical Sequence</p>
            <div className="title-row">
              <h2 className="ds-headline-md">Lab Manual</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {course.labs.map((lab) => (
              <article key={lab.id} className="research-card" style={{ gap: 8 }}>
                <p className="ds-label-code">{lab.id} / {lab.week}</p>
                <h3 style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 15, fontWeight: 700, color: "#172033", lineHeight: 1.45 }}>
                  {lab.title}
                </h3>
                <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 13, color: "#667085", lineHeight: 1.6 }}>
                  {lab.focus}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="assessment" style={{ marginBottom: 48 }}>
        <div className="section-head">
          <p className="section-label">Assessment Structure</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Marks Distribution</h2>
            <span className="status-badge">{totalMarks} Marks</span>
          </div>
        </div>
        <div className="research-card">
          {course.assessment.map((item, index) => (
            <div key={item.area} style={{ borderBottom: index < course.assessment.length - 1 ? "1px solid var(--border)" : "none", padding: "12px 0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}>
                <div>
                  <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: "#172033" }}>
                    {item.area}
                  </p>
                  <p className="ds-label-caps" style={{ color: "#667085", marginTop: 3 }}>
                    {item.co.join(" / ")}
                  </p>
                </div>
                <strong style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', color: "#16324f" }}>
                  {item.marks}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {course.series && (
        <section id={course.code === "CSE445" ? "tutorials" : "series"} style={{ marginBottom: 48 }}>
          <div className="section-head">
            <p className="section-label">Extended Learning</p>
            <div className="title-row">
              <h2 className="ds-headline-md">{course.code === "CSE445" ? "Tutorials" : "Special Series"}</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {course.series.map((series) => (
              <article key={series.title} className="research-card">
                <h3 className="ds-headline-sm" style={{ fontSize: 17, marginBottom: 8 }}>{series.title}</h3>
                <p style={{ fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 13, color: "#667085", lineHeight: 1.65 }}>
                  {series.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                  {series.items.map((item) => (
                    <span key={item} className="tag-pill">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="resources">
        <div className="section-head">
          <p className="section-label">Reference Desk</p>
          <div className="title-row">
            <h2 className="ds-headline-md">Resources</h2>
          </div>
        </div>
        <div className="research-card">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {course.resources.map((resource) => (
              <span key={resource} className="tag-pill">{resource}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
            <a href={course.repository} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Source Code
            </a>
            <a href={course.externalDashboard} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Legacy External Dashboard
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
