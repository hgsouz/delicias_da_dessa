import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HeroHome } from "../components/heroHome";

import heroImage from "../assets/hero/hero-home.svg";
import biscoitoImage from "../assets/categories/biscoitos.svg";
import bolosDePoteImage from "../assets/categories/bolos-de-pote.svg";
import bolosEncomendaImage from "../assets/categories/bolos-por-encomenda.svg";

import { Card } from "../components/card";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <HeroHome image={heroImage} />

      <section className="grow">
        <h2 className="text-(--secondary-color) text-center mt-16 text-2xl font-bold">
          Conheça nossos produtos
        </h2>
        <div className="flex gap-6 mx-5 my-16 overflow-auto justify-center">
          <Card link="/" image={biscoitoImage} />
          <Card link="/" image={bolosDePoteImage} />
          <Card link="/" image={bolosEncomendaImage} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
