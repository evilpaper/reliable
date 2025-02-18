import { courses } from "@/features/course/courses";

interface PageProps {
  params: {
    slug: string;
    lesson: string;
  };
}

export default async function Page({ params }: PageProps) {
  // const course = courses.find((course) => course.slug === params.slug);

  // if (!lesson) {
  //   return <h1>Hm...the lesson you tried to reach does not exist.</h1>;
  // }

  return <p>I am a chapter</p>;
}
