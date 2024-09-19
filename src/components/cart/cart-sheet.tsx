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
import { useCart } from "@/features/cart/hooks/use-cart";

interface CartSheetProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CartSheet({ isCartOpen, setIsCartOpen }: CartSheetProps) {
  const { cartContent, addToCart, removeFromCart } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent side="right">
        <SheetHeader className="self-start text-left mb-6">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            <ul>
              {cartContent.length > 0 &&
                cartContent.map(({ courseId, courseName, quantity }) => {
                  return (
                    <li key={courseId}>
                      <Card>
                        <CardHeader>
                          <CardTitle>{courseName}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4 flex justify-end">
                          <div className="flex items-center gap-6 py-2">
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
                              onClick={() => addToCart(courseId, courseName)}
                            >
                              <Icons.add className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </li>
                  );
                })}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
