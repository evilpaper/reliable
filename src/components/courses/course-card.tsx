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
import { useCart } from "@/features/cart/hooks/use-cart";

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

export function CourseCard() {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Level 2 Food Hygiene and Safety for Cater</CardTitle>
        <CardDescription>
          Ensures your staff comply with the requirements of the UK Food Safety
          Act.
        </CardDescription>
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
          £20 + VAT
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
