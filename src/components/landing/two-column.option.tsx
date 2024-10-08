import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";

export function TwoColumnOption() {
  return (
    <section className="container flex flex-col column gap-6 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-5xl font-bold mb-4">
            Grundkurs i livsmedelshygien
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              4.8 (142 RATINGS) • ABOUT 30 MINS
            </span>
          </div>
          <p className="text-xl mb-4">
            Fixa din personals livsmedelssäkerhetsdiplom. Online. Kursen följer
            Livsmedelsverkets rekommendationer.
          </p>
        </div>
        <div>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Baseline"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <span className="text-xl font-semibold">Baseline</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-2" />
                <span className="text-xl font-semibold">4.8</span>
                <span className="text-sm text-gray-600 ml-2">
                  (130+ ratings)
                </span>
              </div>
              <div className="bg-yellow-200 text-black font-semibold py-2 px-4 rounded-md mb-4">
                Level Up with Figma
              </div>
              <div className="text-3xl font-bold mb-4">$419</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">4.8 (142)</span>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">NEXT COHORT</h4>
                <p>Oct 21—Nov 16, 2024</p>
              </div>
              <Button className="w-full mb-4">Enroll</Button>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">GET FUTURE COHORT DATES</h4>
                <div className="flex">
                  <Input placeholder="Your email" className="mr-2" />
                  <Button variant="outline">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <a href="#" className="text-gray-600 hover:underline">
                  Get reimbursed
                </a>
                <a href="#" className="text-gray-600 hover:underline">
                  Bulk purchases
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
