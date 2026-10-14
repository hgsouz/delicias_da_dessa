import cartIcon from "../assets/icons/cartIcon.svg";

export const ShoppingCart = () => {
  return (
    <a href="">
      <img
        src={cartIcon}
        alt="Icone de carrinho de compras"
        className="w-6 h-6"
      />
    </a>
  );
};
