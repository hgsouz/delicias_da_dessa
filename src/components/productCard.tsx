import { Link } from "react-router";
import type { Product } from "../services/products";
import { brl } from "../utils/currency";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const fromPrice = Math.min(...product.variants.map((v) => v.price));
  const hasVariants = product.variants.length > 1;

  return (
    <Link to={`/products/${product.id}`} className="flex h-full flex-col gap-4">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-full object-cover rounded-2xl"
      />
      <div className="flex flex-1 flex-col gap-4">
        <p className="font-bold text-sm line-clamp-2 min-h-10">
          {product.name}
        </p>
        <p className="text-sm line-clamp-3 min-h-15">{product.description}</p>
        <p className="text-sm mt-auto">
          {hasVariants && "A partir de "}
          {brl(fromPrice)}
        </p>
      </div>
    </Link>
  );
};
