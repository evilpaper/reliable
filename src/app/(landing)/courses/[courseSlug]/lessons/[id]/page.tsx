import { courses } from "@/features/course/courses";

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

  return (
    <section className="container max-w-3xl flex-1 p-4 md:p-0 mt-16">
      <p>{lesson.content}</p>
    </section>
  );
}
