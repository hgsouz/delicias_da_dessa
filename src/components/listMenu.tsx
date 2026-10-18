import { Link } from "react-router";

const links = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/products" },
  { label: "Sobre nós", href: "/about" },
  { label: "Contato", href: "/contact" },
];

export const ListMenu = () => {
  return (
    <ul className="hidden md:flex gap-8 text-(--secondary-color)">
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className="hover:border-b">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
