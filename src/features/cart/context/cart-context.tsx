"use client";

import React from "react";

type CourseId = string;
type AddToCart = (courseid: CourseId) => void;

// Define the shape of your context
interface CartContextType {
  cartContent: CourseId[];
  addToCart: AddToCart;
}

// Create the context. Provide an empty function as default
export const CartContext = React.createContext<CartContextType>({
  cartContent: [],
  addToCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartContent, setCartContent] = React.useState<CourseId[]>([]);

  // Ensure we don't reset the context in development strickt mode when effects run twice.
  const hasLoadedBefore = React.useRef(true);

  // Load the cart count from localStorage on initial render
  React.useEffect(() => {
    const storedCartContent = localStorage.getItem("cart");

    if (storedCartContent) {
      setCartContent(JSON.parse(storedCartContent));
    }
  }, []);

  // Update localStorage whenever cartContent changes
  React.useEffect(() => {
    if (hasLoadedBefore.current) {
      hasLoadedBefore.current = false;
    } else {
      localStorage.setItem("cart", JSON.stringify(cartContent));
    }
  }, [cartContent]);

  // Function to add a course to the cart
  const addToCart = (courseId?: CourseId) => {
    let nextCartContent;
    if (courseId) {
      nextCartContent = [...cartContent, courseId];
    } else {
      nextCartContent = [...cartContent];
    }

    setCartContent(nextCartContent);
  };

  return (
    <CartContext.Provider value={{ cartContent, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
