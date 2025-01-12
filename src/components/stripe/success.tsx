"use client";

import React from "react";
import { useCart } from "@/features/cart/use-cart";

export function Success({
  activationId,
  email,
}: {
  activationId: string;
  email: string;
}) {
  const { cartContent, clearCart } = useCart();

  React.useEffect(() => {
    if (cartContent.length > 0) {
      clearCart();
    }
  }, [cartContent]);

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Köp genomfört</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-600 mb-2">Vi har skickat en bekräftelse till</p>
        <p className="text-gray-900 font-medium mb-8">{email}</p>

        <p className="text-gray-600 mb-2">Aktiveringskod</p>
        <p className="text-lg font-mono bg-gray-50 p-4 rounded-md font-medium text-gray-900">
          {activationId}
        </p>
      </div>
    </section>
  );
}
