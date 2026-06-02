import Link from "next/link";
import { CourseDashboard, getCourseSectionHref } from "@/lib/courseDashboards";

export default function CourseDashboardNav({
  course,
  active,
}: {
  course: CourseDashboard;
  active: string;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
      {course.tabs.map((tab) => (
        <Link
          key={tab.id}
          href={getCourseSectionHref(course, tab.id)}
          className={active === tab.id ? "btn-primary" : "btn-secondary"}
          style={{ fontSize: 11 }}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
