import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { getProducts, type Product } from "../services/products";
import { ProductCard } from "../components/productCard";
import { Loading } from "../components/loadingSpinner";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data.filter((p) => p.active)))
      .catch((e) => {
        console.error("Erro ao carregar produtos:", e);
        setError("Não foi possível carregar os produtos.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />

      <section className="grid grid-cols-3 gap-x-4 gap-y-8 items-stretch my-10 mx-5">
        {loading && <Loading />}
        {error && <p>{error}</p>}

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Products;
