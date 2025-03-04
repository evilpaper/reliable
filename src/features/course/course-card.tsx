"use client";

import { useRouter } from "next/navigation";
import { Icons } from "@/common/components/ui/icons";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";
import { useCart } from "@/features/cart/use-cart";
import { Course } from "@/db/schema";
import React from "react";
import Link from "next/link";

export function CourseCard(course: Course) {
  const { addToCart } = useCart();
  const router = useRouter();

  const { courseId, name, price, currency } = course;

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
          <p className="dtext-black">Lyssna på valfritt språk</p>
        </div>
        <div className="text-3xl font-bold mb-4">{`${price} ${currency}`}</div>
        <div className="mb-4">
          <div className="flex gap-1">
            <Icons.star width={16} />
            <p>100% online</p>
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
            addToCart(courseId, name, price, currency);
            router.push("/checkout");
          }}
        >
          {`Köp kurs - ${price} ${currency}`}
        </Button>
        <Button asChild variant="secondary" className="w-full mb-4 text-base">
          <Link href="/courses/grundkurs-i-livsmedelshygien">
            Se kursinnehåll
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
