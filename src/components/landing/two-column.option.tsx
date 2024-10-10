import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export function TwoColumnOption() {
  return (
    <section className="container flex flex-col column gap-6 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold mb-4">
            Vi fixar din personals diplom
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
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
            Vi vet att livsmedelssäkerhet inte står högts upp på din lista.
            Därför har vi skapat den här kursen. Kursen är 100% online, tar ca
            30 min att slutföra, följer Livsmedelsverkets rekommendationer och
            funkar lika bra på mobil som laptop och desktop. Din personal gör
            kursen i eget tempo. De börja och slutar när de vill. Diplom i din
            e-post när de är klara.
          </p>
          <section className="flex gap-6">
            <Button className="w-auto self-start">Se kursinnehåll</Button>
            <Button variant="secondary" className="w-auto self-start">
              Prova gratis lektion
            </Button>
          </section>
        </div>
        <div>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                {/* <span className="text-xl font-semibold">4.8</span> */}
                <span className="text-sm text-gray-600 ml-2">
                  Ca. 30 min. Diplom direkt vid slutförande.
                </span>
              </div>
              <div className="bg-yellow-200 text-black font-semibold py-2 px-4 rounded-md mb-4">
                Grundkurs i livsmedelshygien
              </div>
              <div className="text-3xl font-bold mb-4">299 kr</div>
              {/* <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">4.8 (142)</span>
              </div> */}
              <div className="mb-4">
                {/* <h4 className="font-semibold mb-2">100 % online</h4> */}
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
                Testa lektion gratis
              </Button>
              {/* <div className="mb-4">
                <h4 className="font-semibold mb-2">GET FUTURE COHORT DATES</h4>
                <div className="flex">
                  <Input placeholder="Your email" className="mr-2" />
                  <Button variant="outline">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div> */}
              <div className="flex justify-between text-sm">
                <a href="#" className="text-gray-600 hover:underline">
                  Köp många
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
