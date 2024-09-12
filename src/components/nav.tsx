"use client";

import Link from "next/link";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="container z-40 p-4 flex items-center gap-6 w-full">
      <section className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>Menu</SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-black border-none"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </section>
      <Link href="/" className="text-xl">
        Reliable
      </Link>
      <section className="flex items-center justify-between md:w-full">
        <nav className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <section className="flex items-center gap-6 ">
          <Icons.shoppingCart />
          <Button>Login</Button>
        </section>
      </section>
    </section>
  );
}
