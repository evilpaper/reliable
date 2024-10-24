"use client";

import React from "react";

export type CourseId = string;

export type CourseName = string;

type AddToCart = (
  courseId: CourseId,
  courseName: CourseName,
  priceInSEK: number
) => void;
type RemoveFromCart = (courseId: CourseId) => void;

type CartItem = {
  courseName: CourseName;
  courseId: CourseId;
  quantity: number;
  priceInSEK: number;
};

type CartContent = CartItem[];

export type Course = {
  id: CourseId;
  name: CourseName;
  priceInSEK: number;
};

interface CartContextType {
  cartContent: CartItem[];
  addToCart: AddToCart;
  removeFromCart: RemoveFromCart;
}

const STORAGE_KEY_NAME = "reliable-cart";

// Create the context. Provide an empty function as default
export const CartContext = React.createContext<CartContextType>({
  cartContent: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartContent, setCartContent] = React.useState<CartContent>([]);

  // Ensure we don't reset the context in development strickt mode when effects run twice.
  const hasLoadedBefore = React.useRef(true);

  // Load the cart count from localStorage on initial render
  React.useEffect(() => {
    const storedCartContent = localStorage.getItem(STORAGE_KEY_NAME);

    if (storedCartContent) {
      setCartContent(JSON.parse(storedCartContent));
    }
  }, []);

  // Update localStorage whenever cartContent changes
  React.useEffect(() => {
    if (hasLoadedBefore.current) {
      hasLoadedBefore.current = false;
    } else {
      localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(cartContent));
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

  const createNewItem = (
    courseId: CourseId,
    courseName: CourseName,
    priceInSEK: number
  ): CartItem => ({
    courseId,
    courseName,
    quantity: 1,
    priceInSEK,
  });

  const addToCart = (
    courseId: CourseId,
    courseName: CourseName,
    priceInSEK: number
  ) => {
    setCartContent((prevCart) => {
      const existingItem = findExistingItem(prevCart, courseId);

      if (!existingItem) {
        return [...prevCart, createNewItem(courseId, courseName, priceInSEK)];
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

      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.courseId !== courseId);
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
