import type { Product } from "../services/products";
import { brl } from "../utils/currency";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const fromPrice = Math.min(...product.variants.map((v) => v.price));
  const hasVariants = product.variants.length > 1;

  return (
    <div className="flex flex-col gap-6 mb-6">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-34 max-w-34 rounded-2xl"
      />
      <div className="flex flex-col gap-3">
        <p className="font-bold text-sm">{product.name}</p>
        <p className="text-sm">{product.description}</p>
        <p className="text-sm">
          {hasVariants && "A partir de "}
          {brl(fromPrice)}
        </p>
      </div>
    </div>
  );
};
