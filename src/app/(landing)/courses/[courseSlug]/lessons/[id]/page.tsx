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

  // console.log(course);

  const lesson = course?.lessons.find((lesson) => {
    console.log(params.id);
    return lesson.lessonNumber.toString() === params.id;
  });

  if (!lesson) {
    return <h1>Hm...the lesson you tried to reach does not exist.</h1>;
  }

  return <p>{lesson.content}</p>;
}
