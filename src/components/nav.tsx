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
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="container z-40 p-4 flex items-center gap-6 w-full justify-between md:justify-normal">
      <div className="flex items-center gap-6">
        <section className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>Menu</SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="self-start text-left mb-6">
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-12 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
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
      </div>
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
