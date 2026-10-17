import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Loading } from "../components/loadingSpinner";
import { QuantitySelector } from "../components/quantitySelector";
import { getProducts, type Product } from "../services/products";
import { brl } from "../utils/currency";
import { useCart } from "../context/useCart";

function ProductDetail() {
  const { id } = useParams();

  return <ProductDetailContent key={id} id={id} />;
}

function ProductDetailContent({ id }: { id?: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [variantId, setVariantId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useCart();

  useEffect(() => {
    let cancelled = false;

    getProducts()
      .then((list) => {
        if (cancelled) return;
        const found = list.find((p) => p.id === id && p.active) ?? null;
        setProduct(found);
        if (found) setVariantId(found.variants[0].id);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error("Erro ao carregar produto:", e);
        setError("Não foi possível carregar o produto.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading || error || !product) {
    return (
      <>
        <Header />
        <main className="mx-5 my-10 flex flex-col items-start gap-4">
          {loading && <Loading />}
          {error && <p>{error}</p>}
          {!loading && !error && !product && <p>Produto não encontrado.</p>}
          {!loading && (
            <Link to="/products" className="text-sm underline">
              ← Voltar aos produtos
            </Link>
          )}
        </main>
        <Footer />
      </>
    );
  }

  const variant =
    product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const image = variant.image ?? product.image;
  const total = variant.price * quantity;

  const handleAdd = () => {
    dispatch({
      type: "add",
      item: { productId: product.id, variantId: variant.id, quantity },
    });
  };

  return (
    <>
      <Header />

      <main className="mx-5 my-10">
        <Link to="/products" className="text-sm underline">
          ← Voltar aos produtos
        </Link>

        <div className="grid gap-8 mt-6 md:grid-cols-2">
          <img
            src={image}
            alt={product.name}
            className="w-full max-w-md rounded-2xl object-cover"
          />

          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-sm leading-relaxed">{product.longDescription}</p>

            {product.variants.length > 1 ? (
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariantId(v.id)}
                    aria-pressed={v.id === variant.id}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      v.id === variant.id
                        ? "bg-(--terdiary-color) font-bold"
                        : "border-(--terdiary-color)"
                    }`}
                  >
                    {v.label} · {brl(v.price)}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm">{variant.label}</p>
            )}

            <p className="text-xl font-bold">
              {brl(variant.price)}
              <span className="text-sm font-normal"> / {product.unit}</span>
            </p>

            <QuantitySelector value={quantity} onChange={setQuantity} />

            <p className="text-sm">
              Total: <strong>{brl(total)}</strong>
            </p>

            <button
              type="button"
              onClick={handleAdd}
              className="rounded-full bg-(--secondary-color) px-6 py-3 font-bold"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetail;
