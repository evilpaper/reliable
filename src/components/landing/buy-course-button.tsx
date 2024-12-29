"use client";

import { Button } from "@/components/ui/button";
import { Course } from "@/db/schema";
import { useCart } from "@/features/cart/use-cart";
import { useRouter } from "next/navigation";

export function BuyCourseButton(course: Course) {
  const { addToCart } = useCart();
  const router = useRouter();

  const { courseId, name, price, currency } = course;

  return (
    <>
      <Button
        className="text-base md:p-6"
        onClick={() => {
          addToCart(courseId, name, price, currency);
          router.push("/checkout");
        }}
      >
        {`Köp kurs - ${price} ${currency}`}
      </Button>
    </>
  );
}
