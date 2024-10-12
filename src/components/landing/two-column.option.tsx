import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export function TwoColumnOption() {
  return (
    <section className="container flex flex-col column gap-6 px-4">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold mb-4">
            Enkel och snabb livsmedelshygienkurs – få diplom direkt
          </h1>
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
              4.8 (142 RATINGS) • ABOUT 30 MINS
            </span>
          </div>
          <p className="text-xl mb-4">
            Vi vet att livsmedelshygien inte står högst på din lista. Därför har
            vi skapat den här kursen. Kursen är 100% online, tar bara 30 minuter
            och följer Livsmedelsverkets riktlinjer. Genomförs när det passar –
            på mobil, laptop eller desktop. Diplom direkt vid slutförande.
          </p>
          <section className="flex gap-6">
            <Button asChild className="w-auto self-start">
              <Link href="/curriculum">Se kursinnehåll</Link>
            </Button>
            <Button variant="secondary" className="w-auto self-start">
              Prova gratis lektion
            </Button>
          </section>
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
              <Button className="w-full mb-4">Köp kurs - 299 kr</Button>
              <Button variant="secondary" className="w-full mb-4">
                Prova en gratis lektion
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
