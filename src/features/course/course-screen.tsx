import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import { Icons } from "@/common/components/ui/icons";
import { ArrowUpRight } from "lucide-react";
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

const colors = [
  {
    color: "bg-[#F05E31]",
    iconBg: "bg-[#F07E59]",
  },
  {
    color: "bg-[#8B2A1C]",
    iconBg: "bg-[#A54A3C]",
  },
  {
    color: "bg-[#D93F29]",
    iconBg: "bg-[#E06A59]",
  },
  {
    color: "bg-[#DCE3F9]",
    iconBg: "bg-[#C5CDE3]",
  },
  {
    color: "bg-[#EAEAEA]",
    iconBg: "bg-[#D4D4D4]",
  },
  {
    color: "bg-black",
    iconBg: "bg-[#333333]",
  },
  {
    color: "bg-black",
    iconBg: "bg-[#333333]",
  },
];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto gap-6 mt-8">
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
      className={`${
        colors[lessonNumber - 1].color
      } rounded-3xl p-6 h-64 flex flex-col relative transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer`}
      aria-label={`Lesson ${id}: ${lessonTitle}`}
    >
      <div className="flex justify-between items-start">
        <span
          className={`text-lg font-medium ${
            colors[lessonNumber - 1].color === "bg-black"
              ? "text-white"
              : "text-black"
          }`}
        >
          {lessonNumber}.
        </span>
        <div
          className={`${
            colors[lessonNumber - 1].iconBg
          } w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}
        >
          <ArrowUpRight
            className={`w-5 h-5 ${
              colors[lessonNumber - 1].color === "bg-black"
                ? "text-white"
                : "text-black"
            }`}
          />
        </div>
      </div>
      <div className="mt-auto mb-4">
        <h3
          className={`text-xl font-medium ${
            colors[lessonNumber - 1].color === "bg-black"
              ? "text-white"
              : "text-black"
          }`}
        >
          {lessonTitle}
        </h3>
      </div>
    </Link>
  );
}
