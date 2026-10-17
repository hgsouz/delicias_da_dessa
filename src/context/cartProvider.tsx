import { useEffect, useReducer, type ReactNode } from "react";
import { CartContext } from "./cartContext";
import type { CartAction, CartItem } from "../types/cart";

const STORAGE_KEY = "delicias-cart";

const isSame = (a: CartItem, b: { productId: string; variantId: string }) =>
  a.productId === b.productId && a.variantId === b.variantId;

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const exists = state.some((i) => isSame(i, action.item));
      if (exists) {
        // mesmo produto + mesma variante: soma a quantidade
        return state.map((i) =>
          isSame(i, action.item)
            ? { ...i, quantity: i.quantity + action.item.quantity }
            : i,
        );
      }
      return [...state, action.item];
    }
    case "setQuantity":
      return state.map((i) =>
        isSame(i, action) ? { ...i, quantity: action.quantity } : i,
      );
    case "remove":
      return state.filter((i) => !isSame(i, action));
    case "clear":
      return [];
  }
}

// lê do localStorage com segurança (JSON quebrado, dado antigo, modo privado...)
function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter(
      (i): i is CartItem =>
        typeof i?.productId === "string" &&
        typeof i?.variantId === "string" &&
        typeof i?.quantity === "number" &&
        i.quantity > 0,
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // sem localStorage: o carrinho só vive durante a sessão
    }
  }, [items]);

  return (
    <CartContext.Provider value={{ items, count: items.length, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
