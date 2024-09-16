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
  const { cartContent } = useCart();
  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent side="right">
        <SheetHeader className="self-start text-left mb-6">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            {cartContent.length > 0 &&
              cartContent.map((cartItem, idx) => {
                return <p key={`${cartItem}+${idx}`}>{cartItem}</p>;
              })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
