import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";

export default function TestimonialCard() {
  return (
    <Card className="max-w-sm">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder.svg" alt="@ui.martin" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">@mathias.dahlgren</h2>
            <p className="text-sm text-gray-400">Owner Matbaren</p>
          </div>
        </div>
        <h1 className="font-semibold mb-4">Easily the fastest way</h1>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Icons.star
              key={i}
              className="w-6 h-6 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p>
          &quot;Reliables Food Safety training
          <span className="font-semibold"> is just gorgeues.</span> Fast,
          correct and, well, reliable, I use it for
          <span className="font-semibold"> all my staff.&quot;</span>
        </p>
      </CardContent>
    </Card>
  );
}
