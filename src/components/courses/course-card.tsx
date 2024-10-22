"use client";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/features/cart/use-cart";
import { Course } from "@/db/schema";

export function CourseCard(course: Course) {
  const { addToCart } = useCart();
  const router = useRouter();

  const {courseId, name, priceInSEK } = course;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 ml-2">
            Diplom direkt vid slutförande.
          </span>
        </div>
        <h1 className="text-3xl font-bold  mb-4">
          Grundkurs i livsmedelshygien
        </h1>
        <div className="bg-yellow-200 py-2 px-4 rounded-md mb-4">
          <p className="text-black">Lyssna på valfritt språk</p>
        </div>
        <div className="text-3xl font-bold mb-4">299 kr</div>
        <div className="mb-4">
          <div className="flex gap-1">
            <Icons.star width={16} />
            <p>100 % online</p>
          </div>
          <div className="flex gap-1">
            <Icons.star width={16} />
            <p>Genomför i eget tempo</p>
          </div>
          <div className="flex gap-1">
            <Icons.star width={16} className="min-w-[16px]" />
            <p>
              Genomför på vilken enhet som helst (dator, mobil eller surfplatta)
            </p>
          </div>
          <div className="flex gap-1">
            <Icons.star width={16} />
            <p>Följer Livsmedelsverkets rekommendationer</p>
          </div>
        </div>
        <Button
          className="w-full mb-4 text-base"
          onClick={() => {
            addToCart(courseId, name, priceInSEK);
            router.push("/checkout");
          }}
        >
          Köp kurs - 299 kr
        </Button>
        <Button variant="secondary" className="w-full mb-4 text-base">
          Prova gratis lektion
        </Button>
      </CardContent>
    </Card>
  );
}
