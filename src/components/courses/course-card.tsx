"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { useCart } from "@/features/cart/use-cart";

const uniqueSellingPoints = [
  { usp: "100% online training", id: crypto.randomUUID() },
  {
    usp: "Start when you like",
    id: crypto.randomUUID(),
  },
  {
    usp: "Learn on any device (desktop, mobile or tablet)",
    id: crypto.randomUUID(),
  },
  {
    usp: "Instant assessment and result",
    id: crypto.randomUUID(),
  },
  {
    usp: "Certification upon completion",
    id: crypto.randomUUID(),
  },
];

interface Props {
  name: string;
  description: string;
  priceInSEK: number;
}

export function CourseCard({ name, description, priceInSEK }: Props) {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {uniqueSellingPoints.map(({ usp, id }) => {
            return (
              <li key={id} className="flex gap-2 py-2">
                <Icons.badgeCheck className="mt-px h-5 w-5" />
                {usp}
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span>{`${priceInSEK} SEK + VAT`}</span>
        <Button
          onClick={() =>
            addToCart(
              "123456",
              "Level 2 Food Hygiene and Safety for Cater",
              299
            )
          }
        >
          Buy course
        </Button>
      </CardFooter>
    </Card>
  );
}
