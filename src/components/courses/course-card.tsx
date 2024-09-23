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
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {uniqueSellingPoints.map(({ usp, id }) => {
            return (
              <li key={id} className="flex gap-2 py-2">
                <Icons.badgeCheck />
                {usp}
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary" className="px-3 shadow-none">
          {priceInSEK}
        </Button>
        <Button
          onClick={() =>
            addToCart("123456", "Level 2 Food Hygiene and Safety for Cater")
          }
        >
          Buy course
        </Button>
      </CardFooter>
    </Card>
  );
}
