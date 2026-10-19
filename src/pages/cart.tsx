import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Loading } from "../components/loadingSpinner";
import { QuantitySelector } from "../components/quantitySelector";
import { useCart } from "../context/useCart";
import { getProducts, type Product } from "../services/products";
import type { CartLine } from "../types/cart";
import { brl } from "../utils/currency";
import { buildWhatsAppUrl } from "../utils/whatsapp";

function Cart() {
  const { items, dispatch } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getProducts()
      .then((list) => {
        if (!cancelled) setProducts(list);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error("Erro ao carregar produtos:", e);
        setError("Não foi possível carregar o carrinho.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // junta o carrinho com o catálogo; descarta itens que não existem mais
  const lines: CartLine[] = items.flatMap((item) => {
    const product = products.find((p) => p.id === item.productId && p.active);
    const variant = product?.variants.find((v) => v.id === item.variantId);
    return product && variant ? [{ ...item, product, variant }] : [];
  });

  const total = lines.reduce((sum, l) => sum + l.variant.price * l.quantity, 0);
  const hasUnavailable = !loading && !error && lines.length < items.length;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="mx-5 my-10 flex flex-col gap-6 grow">
        <h1 className="text-2xl font-bold">Meu carrinho</h1>

        {items.length === 0 && (
          <div className="flex flex-col items-start gap-4">
            <p>Seu carrinho está vazio.</p>
            <Link to="/products" className="underline">
              Ver produtos
            </Link>
          </div>
        )}

        {items.length > 0 && loading && <Loading />}
        {error && <p>{error}</p>}

        {hasUnavailable && (
          <p className="text-sm">
            Alguns itens do seu carrinho não estão mais disponíveis e não entram
            no pedido.
          </p>
        )}

        {lines.length > 0 && (
          <>
            <ul className="flex flex-col gap-6">
              {lines.map((l) => (
                <li
                  key={`${l.productId}-${l.variantId}`}
                  className="flex flex-wrap items-center gap-4 border-b border-(--terdiary-color) pb-6"
                >
                  <img
                    src={l.variant.image ?? l.product.image}
                    alt={l.product.name}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />

                  <div className="flex flex-1 flex-col gap-1">
                    <Link
                      to={`/products/${l.product.id}`}
                      className="font-bold"
                    >
                      {l.product.name}
                    </Link>
                    <p className="text-sm">{l.variant.label}</p>
                    <p className="text-sm">
                      {brl(l.variant.price)} / {l.product.unit}
                    </p>
                  </div>

                  <QuantitySelector
                    value={l.quantity}
                    onChange={(quantity) =>
                      dispatch({
                        type: "setQuantity",
                        productId: l.productId,
                        variantId: l.variantId,
                        quantity,
                      })
                    }
                  />

                  <div className="flex flex-col items-end gap-2">
                    <strong>{brl(l.variant.price * l.quantity)}</strong>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "remove",
                          productId: l.productId,
                          variantId: l.variantId,
                        })
                      }
                      className="text-sm underline"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-end gap-4">
              <p className="text-xl">
                Total: <strong>{brl(total)}</strong>
              </p>
              <p className="text-sm">Entrega a combinar pelo WhatsApp.</p>

              <a
                href={buildWhatsAppUrl(lines, total)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-(--secondary-color) px-6 py-3 font-bold"
              >
                Finalizar pedido
              </a>

              <button
                type="button"
                onClick={() => dispatch({ type: "clear" })}
                className="text-sm underline"
              >
                Esvaziar carrinho
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
