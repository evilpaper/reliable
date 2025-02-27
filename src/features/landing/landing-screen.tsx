import { CourseCard } from "@/features/course/course-card";
import { BuyCourseButton } from "@/features/landing/buy-course-button";
import { Testimonial } from "@/features/landing/testimonial";
import { Button } from "@/common/components/ui/button";
import { Course } from "@/db/schema";
import Link from "next/link";

interface Props {
  course: Course;
}

export async function LandingScreen({ course }: Props) {
  return (
    <section className="container flex flex-col gap-24 p-4 pt-32">
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
            100% online, mobil eller desktop, slutför på 30 minuter. Diplom
            direkt vid slutförande.
          </p>
          <section className="flex gap-6 mb-4 flex-wrap">
            <BuyCourseButton {...course} />
            <Button
              asChild
              variant="secondary"
              className="w-auto self-start text-base md:p-6"
            >
              <Link href="/courses/food-hygiene-foundations/lessons/1">
                Prova gratis lektion
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-auto self-start text-base md:p-6"
            >
              <Link href="/courses/food-hygiene-foundations">
                Se kursinnehåll
              </Link>
            </Button>
          </section>
        </div>
        <CourseCard {...course} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}
