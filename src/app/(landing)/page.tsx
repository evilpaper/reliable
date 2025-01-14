import { CourseCard } from "@/components/courses/course-card";
import { BuyCourseButton } from "@/components/landing/buy-course-button";
import { Testimonial } from "@/components/landing/testimonial";
import { Button } from "@/components/ui/button";
import { getCourseById } from "@/db/queries/course";
import Link from "next/link";

export default async function Page() {
  const course = await getCourseById("9c0fbf58-a6f4-48f5-b2d8-8b5a4785ad49");

  return (
    <section className="container flex flex-col column gap-24 p-4 pt-24">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3] md:leading-[1.3] lg:leading-[1.3]">
            Diplom i livsmedelshygien
            <br />
            på 30 min
          </h1>
          <p className="text-xl mb-4 mr-12">
            Vi vet att livsmedelshygien inte står högst upp på din lista. Därför
            har vi skapat den här kursen. Följer Livsmedelverkes riktlinjer.
            100% online, mobil eller dekstop, slutför på 30 minuter. Diplom
            direkt vid slutförande.
          </p>
          <section className="flex gap-6 mb-4 flex-wrap">
            {course && <BuyCourseButton {...course} />}
            <Button
              variant="secondary"
              className="w-auto self-start text-base md:p-6"
            >
              Prova gratis lektion
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-auto self-start text-base md:p-6"
            >
              <Link href="/curriculum">Se kursinnehåll</Link>
            </Button>
          </section>
        </div>
        <div>{course && <CourseCard {...course} />}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}
