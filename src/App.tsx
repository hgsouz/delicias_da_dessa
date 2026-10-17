import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Loading } from "./components/loadingSpinner.tsx";

const Home = lazy(() => import("./pages/home.tsx"));
const Products = lazy(() => import("./pages/products.tsx"));
const About = lazy(() => import("./pages/about.tsx"));
const Contact = lazy(() => import("./pages/contact.tsx"));
const ProductDetail = lazy(() => import("./pages/productDetail.tsx"));
const Cart = lazy(() => import("./pages/cart.tsx"));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-md">
          <Loading size="lg" text="Carregando..." />
        </div>
      }
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
}
