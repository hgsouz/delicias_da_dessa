import { Link } from "react-router";
import logoIcon from "../assets/logo.svg";
import { ShoppingCart } from "./cartIcon";
import { FloatingMenu } from "./floatingMenu";

export const Header = () => {
  return (
    <header className="bg-amber-50 border-b border-b-(--terdiary-color) p-2 sticky top-0 z-50">
      <div className="flex items-center justify-between mx-5">
        <Link to="/">
          <img
            src={logoIcon}
            alt="Logo Delicias da Dessa"
            className="w-20 h-20"
          />
        </Link>
        <div className="flex my-auto gap-8">
          <ShoppingCart />
          <FloatingMenu />
        </div>
      </div>
    </header>
  );
};
