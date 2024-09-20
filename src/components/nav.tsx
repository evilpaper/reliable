"use client";

import Link from "next/link";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/use-cart";
import { CartSheet } from "@/components/cart/cart-sheet";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
];

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const pathName = usePathname();
  const { cartContent } = useCart();

  const cartQuantity = cartContent.reduce((arr, curr) => {
    return arr + curr.quantity;
  }, 0);

  return (
    <section className="container z-40 p-4 flex items-center gap-6 w-full justify-between md:justify-normal">
      <div className="flex items-center gap-6">
        <section className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>Menu</SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="self-start text-left mb-6">
                <SheetTitle>
                  <Link
                    href="/"
                    className="text-xl font-normal"
                    onClick={() => setIsOpen(false)}
                  >
                    Reliable
                  </Link>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-12 mt-12">
                {navItems.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex pb-4",
                      `/${name.toLowerCase()}` === `${pathName}`
                        ? `border-b border-black`
                        : `border-none`
                    )}
                  >
                    {name}
                    <Icons.arrowRight className="ml-4" />
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </section>
        <Link href="/" className="text-xl">
          Reliable
        </Link>
      </div>
      <section className="flex items-center justify-between md:w-full">
        <nav className="hidden md:flex">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={cn(
                "px-3 py-2 text-sm",
                `/${name.toLowerCase()}` === `${pathName}`
                  ? `border-b-2 border-black`
                  : `border-none`
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
        <section className="flex items-center gap-6 ">
          <Button
            variant="ghost"
            size="icon"
            className="flex gap-2 relative"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <Icons.shoppingCart />
            {cartQuantity > 0 && (
              <div className="absolute bg-foreground text-background border-white border text-xs rounded-full h-6 w-6 flex items-center justify-center top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                {cartQuantity}
              </div>
            )}
          </Button>
          <Button>Login</Button>
        </section>
        <CartSheet isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </section>
    </section>
  );
}
