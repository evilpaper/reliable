import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/features/cart/use-cart";

interface CartSheetProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CartSheet({ isCartOpen, setIsCartOpen }: CartSheetProps) {
  const { cartContent, addToCart, removeFromCart } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent side="right">
        <SheetHeader className="self-start text-left mb-6 h-full">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription className="flex flex-col justify-between h-full">
            <ul>
              {cartContent.length > 0 &&
                cartContent.map(
                  ({ courseId, courseName, quantity, priceInSEK }) => {
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
                  }
                )}
            </ul>
            <Button>To checkout</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
