"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/use-cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CallToActions() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          // TODO: Don't hardcode this. Clean up db as well
          addToCart("1", "Level 2 Food Hygiene and Safety for Cater", 299);
          router.push("/checkout");
        }}
      >
        Köp kurs - 299 kr
      </Button>
      <Button asChild variant="secondary">
        <Link href="/curriculum">Se kursinnehåll</Link>
      </Button>
    </>
  );
}
