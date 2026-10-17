import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ScrollToTop } from "./components/scrollToTop.tsx";
import { CartProvider } from "./context/cartProvider.tsx";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>,
  );
}
