import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Icons } from "@/common/components/ui/icons";

const testimonial = {
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
          <AvatarImage src={testimonial.imagePath} alt="Avatar image" />
          <AvatarFallback>{testimonial.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">{testimonial.name}</h2>
          <p className="text-sm text-gray-400">{testimonial.title}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from(Array(testimonial.stars).keys()).map((_, i) => (
          <Icons.star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p>{testimonial.paragrapgh}</p>
    </section>
  );
}
