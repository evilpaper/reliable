"use client";

import React from "react";

// Define the shape of your context
interface CartContextType {
  cartCount: number;
  addToCart: () => void; // Function signature for addToCart
}

export const CartContext = React.createContext<CartContextType>({
  cartCount: 0,
  addToCart: () => {}, // Provide an empty function as default
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = React.useState(0);
  const hasLoadedBefore = React.useRef(true); // Ensure we don't reset the

  // Load the cart count from localStorage on initial render
  React.useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");

    if (storedCount) {
      setCartCount(Number(storedCount));
    }
  }, []);

  // Update localStorage whenever cartCount changes
  React.useEffect(() => {
    if (hasLoadedBefore.current) {
      hasLoadedBefore.current = false;
    } else {
      localStorage.setItem("cartCount", cartCount.toString());
    }
  }, [cartCount]);

  // Function to add a course to the cart
  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
