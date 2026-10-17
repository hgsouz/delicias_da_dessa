import type { CartLine } from "../types/cart";
import { brl } from "./currency";

export function buildWhatsAppUrl(lines: CartLine[], total: number) {
  const number: string = "5511977202155";

  const items = lines
    .map(
      (l) =>
        `• ${l.quantity}x ${l.product.name} (${l.variant.label}) - ${brl(l.variant.price * l.quantity)}`,
    )
    .join("\n");

  const message =
    `Olá! Gostaria de fazer um pedido:\n\n${items}\n\n` +
    `Total: ${brl(total)} (entrega a combinar)`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
