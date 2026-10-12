interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export const ProductCard = ({
  image,
  name,
  description,
  price,
}: ProductCardProps) => {
  return (
    <div>
      <img src={image} alt="" className="max-h-34 max-w-34 rounded-2xl mb-2" />
      <p className="font-bold text-sm">{name}</p>
      <p className="text-sm ">{description}</p>
      <p className="text-sm ">R$ {price}</p>
    </div>
  );
};
