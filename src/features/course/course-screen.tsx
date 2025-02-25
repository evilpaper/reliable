import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import { Icons } from "@/common/components/ui/icons";
import Link from "next/link";

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
    <section className="container max-w-3xl flex-1 p-4 md:p-0 mt-16">
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

      <div className="grid grid-cols-1 gap-6 mt-8">
        {course.lessons.map(({ id, lessonNumber, lessonTitle, synopsis }) => {
          return (
            <Card
              key={id}
              className="bg-gray-50/50 border-0 rounded-2xl h-full"
            >
              <CardHeader>
                <span className="text-gray-600 font-medium">
                  {lessonNumber}. {lessonTitle}
                </span>
              </CardHeader>
              <CardContent>
                <blockquote className="text-1xl text-gray-600 font-normal leading-relaxed">
                  {synopsis}
                </blockquote>
              </CardContent>
              <CardFooter>
                <Button asChild variant="default">
                  <Link
                    href={`/courses/${
                      course.courseSlug
                    }/lessons/${lessonNumber.toString()}`}
                  >
                    Start
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
