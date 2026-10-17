import type { Product, ProductVariant } from "../services/products";

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}

export interface CartLine extends CartItem {
  product: Product;
  variant: ProductVariant;
}

export type CartAction =
  | { type: "add"; item: CartItem }
  | {
      type: "setQuantity";
      productId: string;
      variantId: string;
      quantity: number;
    }
  | { type: "remove"; productId: string; variantId: string }
  | { type: "clear" };
