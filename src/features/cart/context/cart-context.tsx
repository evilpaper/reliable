"use client";

import React from "react";

type CourseId = string;

type AddToCart = (courseid: CourseId) => void;
type RemoveFromCart = (courseId: CourseId) => void;

type CartItem = {
  courseId: CourseId;
  quantity: number;
};

type CartContent = CartItem[];
interface CartContextType {
  cartContent: CartItem[];
  addToCart: AddToCart;
  removeFromCart: RemoveFromCart;
}

// Create the context. Provide an empty function as default
export const CartContext = React.createContext<CartContextType>({
  cartContent: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartContent, setCartContent] = React.useState<CartContent>([]);

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

  const findExistingItem = (
    cart: CartContent,
    courseId: CourseId
  ): CartItem | undefined => cart.find((item) => item.courseId === courseId);

  const incrementItemQuantity = (item: CartItem): CartItem => ({
    ...item,
    quantity: item.quantity + 1,
  });

  const decrementItemQuantity = (item: CartItem): CartItem => {
    if (item.quantity === 0) {
      return item;
    }
    return {
      ...item,
      quantity: item.quantity - 1,
    };
  };

  const createNewItem = (courseId: CourseId): CartItem => ({
    courseId,
    quantity: 1,
  });

  // Function to add a course to the cart
  const addToCart = (courseId: CourseId) => {
    setCartContent((prevCart) => {
      const existingItem = findExistingItem(prevCart, courseId);

      if (!existingItem) {
        return [...prevCart, createNewItem(courseId)];
      }

      return prevCart.map((item) => {
        return item.courseId === courseId ? incrementItemQuantity(item) : item;
      });
    });
  };

  const removeFromCart = (courseId: CourseId) => {
    setCartContent((prevCart) => {
      const existingItem = findExistingItem(prevCart, courseId);

      if (!existingItem) {
        return [...prevCart];
      }

      return prevCart.map((item) => {
        return item.courseId === courseId ? decrementItemQuantity(item) : item;
      });
    });
  };

  return (
    <CartContext.Provider value={{ cartContent, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
