import { Button } from "@/common/components/ui/button";
import { courses } from "@/features/course/courses";
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

  return (
    <section className="container md:p-0 max-w-md flex flex-col items-start justify-start gap-6">
      <span className="text-gray-600 font-medium">
        {lesson.lessonNumber}. {lesson.lessonTitle}
      </span>
      <p>{lesson.content}</p>
      <Quiz
        question={lesson.question}
        options={lesson.options}
        correctAnswer={lesson.correctAnswer}
        explanation={lesson.explanation}
      />
    </section>
  );
}
