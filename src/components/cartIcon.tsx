import { Link } from "react-router";
import cartIcon from "../assets/icons/cartIcon.svg";
import { useCart } from "../context/useCart";

export const ShoppingCart = () => {
  const { count } = useCart();

  return (
    <Link
      to="/cart"
      aria-label={`Carrinho com ${count} itens`}
      className="relative"
    >
      <img src={cartIcon} alt="" className="w-6 h-6" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-(--terdiary-color) px-1 text-xs font-bold">
          {count}
        </span>
      )}
    </Link>
  );
};
