import { useContext } from "react";
import { CartContext, CartContextData } from "@/context/cart";

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);
  return context;
};