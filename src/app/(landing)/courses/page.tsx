import { CourseCard } from "@/components/courses/course-card";
import { getCourseById } from "@/db/queries/course";

export default async function Page() {
  const course = await getCourseById("9c0fbf58-a6f4-48f5-b2d8-8b5a4785ad49");

  return (
    <section className="container flex flex-col column gap-4 p-4 pt-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
        Letar du efter diplom i Livsmedelssäkerhet?
      </h1>
      <p className="text-xl mb-4 mr-12">
        Vi har utbildningar som ger dig den kunskap du behöver. Alla våra
        utbildningar gör direkt på webben. Diplom på genomförd utbildning fås
        direkt efter slutförande. Snabbt och effektivt.
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
        Våra utbildningar
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>{course && <CourseCard {...course} />}</div>
      </section>
    </section>
  );
}
