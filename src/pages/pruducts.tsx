import { ProductCard } from "../components/productCard";
import boloImage from "../assets/products/bolo-de-chocolate.svg";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function Products() {
  return (
    <>
      <Header />

      <section className="grid grid-cols-3 gap-4 my-10 mx-5">
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />

        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
        <ProductCard
          image={boloImage}
          name="Bolo"
          description="Bolo fofinho"
          price={30.0}
        />
      </section>

      <Footer />
    </>
  );
}

export default Products;
