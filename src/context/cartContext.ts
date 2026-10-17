import { createContext, type Dispatch } from "react";
import type { CartAction, CartItem } from "../types/cart";

export interface CartContextValue {
  items: CartItem[];
  count: number;
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextValue | null>(null);
