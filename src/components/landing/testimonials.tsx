import { TestimonialCard } from "@/components/landing/testimonial-card";

const testinmonials = [
  {
    id: crypto.randomUUID(),
    imagePath: "/placeholder.svg",
    initials: "MD",
    name: "Mathias Dalgren",
    title: "Owner Matbaren",
    stars: 5,
    header: "Easy the fastest way",
    paragrapgh:
      "Reliables Food Safety training is just gorgeues. Fast, correct and well, reliable. I use it for my whole staff.",
  },
  {
    id: crypto.randomUUID(),
    imagePath: "/placeholder.svg",
    initials: "MA",
    name: "Marcus Aujalay",
    title: "Owner Tegelbacken",
    stars: 5,
    header: "Great course",
    paragrapgh:
      "Effective, funny and straight to the point. No Fluff. Exactly what we needed.",
  },
];

export function Testimonials() {
  return (
    <>
      {testinmonials.map((testinmonial) => {
        return (
          <TestimonialCard key={testinmonial.id} testimonial={testinmonial} />
        );
      })}
    </>
  );
}
