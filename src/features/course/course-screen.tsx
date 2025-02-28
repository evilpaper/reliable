import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import { Icons } from "@/common/components/ui/icons";

interface Props {
  course: {
    title: string;
    courseSlug: string;
    lessons: {
      id: string;
      lessonNumber: number;
      lessonTitle: string;
      synopsis: string;
      content: string;
    }[];
  };
}

export async function CourseScreen({ course }: Props) {
  const numberOfLessons = course.lessons.length;
  const studyTime = numberOfLessons * 5;

  return (
    <section className="p-4 md:p-0 mt-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
        {course.title}
      </h1>
      <section className="flex my-8 gap-12">
        <div className="flex gap-2">
          <Icons.lesson width={16} />
          <span>{numberOfLessons}</span>
          <p>lessons</p>
        </div>
        <div className="flex gap-2">
          <Icons.clock width={16} />
          <span>{studyTime}</span>
          <p>min study</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {course.lessons.map(({ id, lessonNumber, lessonTitle, synopsis }) => {
          return (
            <Lesson
              id={id}
              lessonNumber={lessonNumber}
              lessonTitle={lessonTitle}
              courseSlug={course.courseSlug}
            />
          );
        })}
      </div>
    </section>
  );
}

function Lesson({
  id,
  lessonNumber,
  lessonTitle,
  synopsis,
  courseSlug,
}: {
  id: string;
  lessonNumber: number;
  lessonTitle: string;
  synopsis?: string;
  courseSlug?: string;
}) {
  return (
    <Link
      key={lessonNumber}
      href={`/courses/${courseSlug}/lessons/${lessonNumber.toString()}`}
      className={`rounded-3xl flex flex-col relative transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer`}
      aria-label={`Lesson ${id}: ${lessonTitle}`}
    >
      <Card>
        <CardHeader>
          <span className={`text-lg font-medium`}>{lessonNumber}.</span>
        </CardHeader>
        <CardContent>
          <h3 className={`text-xl font-medium`}>{lessonTitle}</h3>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
}
