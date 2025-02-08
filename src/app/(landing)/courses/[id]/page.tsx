import { Card, CardContent, CardFooter } from "@/components/ui/card";

const lessons = [
  {
    id: crypto.randomUUID(),
    number: 1,
    name: "Livsmedelssäkerhet",
    content:
      "This module outlines your responsibilities and the actions you must take to ensure you comply with food safety law. It explains what you can expect from your employer, HACCP and the purpose of food safety management systems and the role of enforcement officers.",
  },
  {
    id: crypto.randomUUID(),
    number: 2,
    name: "Mikrobiologiska faror",
    content:
      "This module covers the various microbial hazards you may encounter in food handling and how to prevent them. It also explains how to prevent cross-contamination and the differences between low-risk and high-risk foods.",
  },
  {
    id: crypto.randomUUID(),
    number: 3,
    name: "Fysiska, kemiska och allergena faror",
    content:
      "This module details physical, chemical and allergenic hazards, the risks they pose to food safety and the ways in which you can prevent contamination from occurring.",
  },
  {
    id: crypto.randomUUID(),
    number: 4,
    name: "Förvaring",
    content:
      "This module explains the importance of storing foods at the correct temperatures. It covers deliveries, how to correctly store different types of food, best before and use-by dates, stock rotation systems and food labelling requirements.",
  },
  {
    id: crypto.randomUUID(),
    number: 5,
    name: "Förberedning",
    content:
      "This module explains how to safely prepare food, including proper thawing, cooking and reheating methods. It also covers safe practices for hot and cold holding and managing hazards during food service.",
  },
  {
    id: crypto.randomUUID(),
    number: 6,
    name: "Personlig hygien",
    content:
      "This module highlights the importance of maintaining high personal hygiene standards. It includes the importance of effective hand washing procedures, protective clothing, reporting illness and managing wounds and sores.",
  },
  {
    id: crypto.randomUUID(),
    number: 7,
    name: "Rengöring",
    content:
      "This module highlights the importance of effective cleaning and disinfection. It explores how premises design can affect food safety, how to identify and control pests and the correct waste management procedures.",
  },
];

export default async function Page() {
  return (
    <section className="container max-w-3xl flex-1 p-4 md:p-0 mt-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
        Grundkurs i livsmedelshygien
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-8">
        {lessons.map(({ id, number, name, content }) => {
          return (
            <Card
              key={id}
              className="bg-gray-50/50 border-0 rounded-2xl h-full"
            >
              <CardContent className="pt-6">
                <blockquote className="text-1xl text-gray-600 font-normal leading-relaxed">
                  {content}
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-3">
                <span className="text-gray-600 font-medium">
                  {number} - {name}
                </span>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
