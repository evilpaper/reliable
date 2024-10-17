import { CourseCard } from "@/components/courses/course-card";
import { Testimonial } from "@/components/landing/testimonial";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <section className="container flex flex-col column gap-6 p-4">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3] md:leading-[1.3] lg:leading-[1.3]">
            Diplom i livsmedelshygien
            <br />
            på 30 min
          </h1>
          <p className="text-xl mb-4 mr-12">
            Vi vet att livsmedelshygien inte står högst upp på din lista. Därför
            har vi skapat den här kursen. 100% online, välj på +30 språk, tar
            bara 30 minuter. Följer Livsmedelsverkets riktlinjer. Mobil, laptop
            eller desktop. Diplom direkt vid slutförande.
          </p>
          <section className="flex gap-6 mb-4">
            <Button asChild className="w-auto self-start md:text-lg md:p-6">
              <Link href="/curriculum">Se kursinnehåll</Link>
            </Button>
            <Button
              variant="secondary"
              className="w-auto self-start md:text-lg md:p-6"
            >
              Prova gratis lektion
            </Button>
          </section>
          <Testimonial />
        </div>
        <div>
          <CourseCard />
        </div>
      </div>
    </section>
  );
}
