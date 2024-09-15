import React from "react";
import { CartContext } from "@/features/cart/context/cart-context";

export const useCart = () => {
  return React.useContext(CartContext);
};
