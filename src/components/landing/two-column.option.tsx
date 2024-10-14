import { CourseCard } from "@/components/courses/course-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export function TwoColumnOption() {
  return (
    <section className="container flex flex-col column gap-6 p-4">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Livsmedelshygien på 30 min
          </h1>
          <p className="text-xl mb-4">
            Vi vet att livsmedelshygien inte står högst på din lista. Därför har
            vi gjort den här kursen. Kursen är 100% online, tas på vilket språk
            som helst och tar bara 30 minuter. Följer givetvis Livsmedelsverkets
            riktlinjer. Genomförs när det passar dig eller din personal – på
            mobil, laptop eller desktop. Diplom direkt vid slutförande.
          </p>
          <p className="text-xl mb-4">
            Sov gott om natten i vetskap om att din personal har den kunskap de
            behöver för att du inte ska få problem med myndigheter.
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
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Icons.star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              4.8 (142 RATINGS)
            </span>
          </div>
        </div>
        <div>
          <CourseCard />
        </div>
      </div>
    </section>
  );
}
