import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";

const testinmonial = {
  imagePath: "/mathias-dahlgren.webp",
  initials: "MD",
  name: "Mathias Dalgren",
  title: "Matbaren",
  stars: 5,
  paragrapgh:
    "Bästa utbildningen. Rolig och nyttig. Obligatorisk för alla i mitt team.",
};

export function Testimonial() {
  return (
    <section className="max-w-sm mx-4 sm:mx-0 p-8">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={testinmonial.imagePath} alt="Avatar image" />
          <AvatarFallback>{testinmonial.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">{testinmonial.name}</h2>
          <p className="text-sm text-gray-400">{testinmonial.title}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from(Array(testinmonial.stars).keys()).map((_, i) => (
          <Icons.star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p>{testinmonial.paragrapgh}</p>
    </section>
  );
}
