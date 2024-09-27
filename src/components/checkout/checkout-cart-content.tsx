"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { useCart } from "@/features/cart/use-cart";

export function CheckoutCartContent() {
  const { cartContent, addToCart, removeFromCart } = useCart();

  return (
    <div className="flex flex-col justify-between h-full">
      <ul>
        {cartContent.length > 0 &&
          cartContent.map(({ courseId, courseName, quantity, priceInSEK }) => {
            return (
              <li key={courseId}>
                <Card>
                  <CardHeader>
                    <CardTitle>{courseName}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 flex">
                    <div className="flex items-center gap-6 py-2n justify-between w-full">
                      <span>{`${priceInSEK} SEK + VAT`}</span>
                      <div className="flex items-center gap-6 py-2n">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeFromCart(courseId)}
                        >
                          <Icons.subtract className="h-4 w-4" />
                        </Button>
                        {quantity}
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            addToCart(courseId, courseName, priceInSEK)
                          }
                        >
                          <Icons.add className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
