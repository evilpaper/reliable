import { Button } from "@/components/ui/button";
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
            {cartContent.length > 0 &&
              cartContent.map(({ courseId, quantity }) => {
                return (
                  <div key={courseId}>
                    <p>{`${courseId}: ${quantity}`}</p>
                    <div className="flex gap-6 py-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeFromCart(courseId)}
                      >
                        <Icons.subtract className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => addToCart(courseId)}
                      >
                        <Icons.add className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
