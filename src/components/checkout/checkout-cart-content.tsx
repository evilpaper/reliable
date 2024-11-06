"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { useCart } from "@/features/cart/use-cart";

export function CheckoutCartContent() {
  const { cartContent, addToCart, removeFromCart } = useCart();

  // Calculate total amount
  const totalAmount = cartContent.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col justify-between h-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Your Basket</CardTitle>
        </CardHeader>
          <CardContent>
            {cartContent.map(({ courseId, courseName, price, currency, quantity }) => (
              <div key={courseId} className="flex justify-between items-center mb-2">
                <span>{courseName}</span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    
                    onClick={() => removeFromCart(courseId)}
                    aria-label={`Decrease quantity of ${courseName}`}
                  >
                    <Icons.subtract className="h-4 w-4" />
                  </Button>
                  <span className="mx-2">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => addToCart(courseId, courseName, price, currency)}
                    aria-label={`Increase quantity of ${courseName}`}
                  >
                    <Icons.add className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(courseId)}
                    aria-label={`Remove ${courseName} from basket`}
                    className="ml-2"
                  >
                    <Icons.trashcan className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <span className="font-bold">Total:</span>
              <span>{totalAmount.toFixed(2)} SEK</span>
            </div>
          </CardFooter>
      </Card>
    </div>
  );
}
