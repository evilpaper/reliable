import { CourseScreen } from "@/features/course/course-screen";
import { courses } from "@/features/course/courses";

interface PageProps {
  params: {
    courseSlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const course = courses.find(
    (course) => course.courseSlug === params.courseSlug
  );

  if (!course) {
    return <h1>Hm...the course you tried to reach does not exist.</h1>;
  }

  return <CourseScreen course={course} />;
}
