"use client";

import React from "react";

export type CourseId = string;

export type CourseName = string;

type AddToCart = (
  courseId: CourseId,
  courseName: CourseName,
  price: number,
  currency: string
) => void;

type RemoveFromCart = (courseId: CourseId) => void;

type ClearCart = () => void;

type CartItem = {
  courseName: CourseName;
  courseId: CourseId;
  quantity: number;
  price: number;
  currency: string;
};

type CartContent = CartItem[];

export type Course = {
  id: CourseId;
  name: CourseName;
  price: number;
};

interface CartContextType {
  cartContent: CartItem[];
  addToCart: AddToCart;
  removeFromCart: RemoveFromCart;
  clearCart: ClearCart;
}

const STORAGE_KEY_NAME = "reliable-cart";

export const CartContext = React.createContext<CartContextType>({
  cartContent: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartContent, setCartContent] = React.useState<CartContent>([]);

  // This is only needed to ensure we don't reset the context in development strict mode when the effects run twice.
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
    price: number,
    currency: string
  ): CartItem => ({
    courseId,
    courseName,
    quantity: 1,
    price,
    currency,
  });

  const addToCart = (
    courseId: CourseId,
    courseName: CourseName,
    price: number,
    currency: string
  ) => {
    setCartContent((prevCart) => {
      const existingItem = findExistingItem(prevCart, courseId);

      if (!existingItem) {
        return [
          ...prevCart,
          createNewItem(courseId, courseName, price, currency),
        ];
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

  const clearCart = () => {
    setCartContent([]);
  };

  return (
    <CartContext.Provider
      value={{ cartContent, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
