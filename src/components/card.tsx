import { Link } from "react-router";

interface cardProps {
  image: string;
  link: string;
}

export const Card = ({ image, link }: cardProps) => {
  return (
    <Link to={link}>
      <img src={image} alt="" className="max-h-80 max-w-60 rounded-2xl" />
    </Link>
  );
};
