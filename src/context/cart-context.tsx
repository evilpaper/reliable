"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

// Define the shape of your context
interface CartContextType {
  cartCount: number;
  addToCart: () => void; // Function signature for addToCart
}

export const CartContext = createContext<CartContextType>({
  cartCount: 0,
  addToCart: () => {}, // Provide an empty function as default
});

export const useCart = () => {
  return useContext(CartContext);
};

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = useState(0);
  const hasLoadedBefore = useRef(true); // Ensure we don't reset the

  // Load the cart count from localStorage on initial render
  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");

    if (storedCount) {
      setCartCount(Number(storedCount));
    }
  }, []);

  // Update localStorage whenever cartCount changes
  useEffect(() => {
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
