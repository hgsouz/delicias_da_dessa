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
    <div className="flex flex-col gap-6 mb-6">
      <img src={image} alt="" className="max-h-34 max-w-34 rounded-2xl" />
      <div className="flex flex-col gap-3">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm ">{description}</p>
        <p className="text-sm ">R$ {price}</p>
      </div>
    </div>
  );
};
