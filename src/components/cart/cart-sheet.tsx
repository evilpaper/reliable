import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/use-cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface CartSheetProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CartSheet({ isCartOpen, setIsCartOpen }: CartSheetProps) {
  const { cartContent, addToCart, removeFromCart } = useCart();

  const totalAmount = cartContent.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader className="text-left mb-6">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Need to pay different VAT?</SheetDescription>
        </SheetHeader>
        <section className="flex flex-col justify-between h-full">
          <ul>
            {cartContent.length > 0 &&
              cartContent.map(
                ({ courseId, courseName, quantity, price, currency }) => {
                  return (
                    <li key={courseId}>
                      <Card>
                        <CardHeader>
                          <CardTitle>{courseName}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4 flex">
                          <div className="flex items-center gap-6 py-2n justify-between w-full">
                            <span>{`${price} ${currency}`}</span>
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
                                  addToCart(
                                    courseId,
                                    courseName,
                                    price,
                                    currency
                                  )
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
                }
              )}
          </ul>
          <section>
            <div className="flex justify-between py-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">{totalAmount.toFixed(2)} SEK</span>
            </div>
            <Button
              asChild
              onClick={() => setIsCartOpen(false)}
              className="w-full"
            >
              <Link href="/checkout">
                <span>Till kassan</span>
              </Link>
            </Button>
          </section>
        </section>
      </SheetContent>
    </Sheet>
  );
}
