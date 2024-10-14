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
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-600 ml-2">
                  Diplom direkt vid slutförande.
                </span>
              </div>
              <h1 className="text-3xl font-bold  mb-4">
                Grundkurs i livsmedelshygien
              </h1>
              <div className="bg-yellow-200 py-2 px-4 rounded-md mb-4">
                Lyssna på valfritt språk
              </div>
              <div className="text-3xl font-bold mb-4">299 kr</div>
              <div className="mb-4">
                <div className="flex gap-1">
                  <Icons.star width={16} />
                  <p>100 % online</p>
                </div>
                <div className="flex gap-1">
                  <Icons.star width={16} />
                  <p>Genomför i eget tempo</p>
                </div>
                <div className="flex gap-1">
                  <Icons.star width={16} className="min-w-[16px]" />
                  <p>
                    Genomför på vilken enhet som helst (dator, mobil eller
                    surfplatta)
                  </p>
                </div>
                <div className="flex gap-1">
                  <Icons.star width={16} />
                  <p>Följer Livsmedelsverkets rekommendationer</p>
                </div>
              </div>
              <Button className="w-full mb-4 text-base">
                Köp kurs - 299 kr
              </Button>
              <Button variant="secondary" className="w-full mb-4 text-base">
                Prova gratis lektion
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
