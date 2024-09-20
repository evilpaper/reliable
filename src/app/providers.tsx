import { CartProvider } from "@/features/cart/cart-provider";
import { ThemeProvider } from "@/features/theme/theme-provider";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
