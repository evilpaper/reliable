import { CourseCard } from "@/components/courses/course-card";
import { Testimonial } from "@/components/landing/testimonial";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <section className="container flex flex-col column gap-24 p-4 pt-24">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3] md:leading-[1.3] lg:leading-[1.3]">
            Diplom i livsmedelshygien
            <br />
            på 30 min
          </h1>
          <p className="text-xl mb-4 mr-12">
            Vi vet att livsmedelshygien inte står högst upp på din lista. Därför
            har vi skapat den här kursen. Följer Livsmedelverkes riktlinjer. 100% online, mobil eller dekstop, slutför på 30 minuter. 
            Diplom direkt vid slutförande.
          </p>
          <section className="flex gap-6 mb-4">
            <Button asChild className="w-auto self-start text-base md:p-6">
              <Link href="/curriculum">Se kursinnehåll</Link>
            </Button>
            <Button
              variant="secondary"
              className="w-auto self-start text-base md:p-6"
            >
              Prova gratis lektion
            </Button>
          </section>
        </div>
        <div>
          <CourseCard />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}
