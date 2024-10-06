import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";

interface Testimonial {
  imagePath: string;
  initials: string;
  name: string;
  title: string;
  stars: number;
  header: string;
  paragrapgh: string;
}

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: Props) {
  const { imagePath, initials, name, title, stars, header, paragrapgh } =
    testimonial;

  return (
    <Card className="max-w-sm mx-4 sm:mx-0">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={imagePath} alt="@ui.martin" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-gray-400">{title}</p>
          </div>
        </div>
        <h2 className="font-semibold mb-4">{header}</h2>
        <div className="flex mb-4">
          {Array.from(Array(stars).keys()).map((_, i) => (
            <Icons.star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="text-sm">{paragrapgh}</p>
      </CardContent>
    </Card>
  );
}
