"use client";

import React from "react";
import { CartContext } from "@/features/cart/cart-provider";

export const useCart = () => {
  return React.useContext(CartContext);
};
