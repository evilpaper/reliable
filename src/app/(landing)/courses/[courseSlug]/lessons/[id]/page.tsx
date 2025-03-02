import { Button } from "@/common/components/ui/button";
import { courses } from "@/features/course/courses";
import { LessonScreen } from "@/features/course/lesson-screen";
import { Quiz } from "@/features/course/quiz";

interface PageProps {
  params: {
    courseSlug: string;
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const course = courses.find(
    (course) => course.courseSlug === params.courseSlug
  );

  const lesson = course?.lessons.find((lesson) => {
    return lesson.lessonNumber.toString() === params.id;
  });

  if (!lesson) {
    return <h1>Hm...the lesson you tried to reach does not exist.</h1>;
  }

  return <LessonScreen lesson={lesson} />;
}
