// src/components/FloatingMenu.tsx
import { useEffect, useRef, useState } from "react";
import menuIcon from "../assets/icons/menuIcon.svg";

const links = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/products" },
  { label: "Sobre nós", href: "/about" },
  { label: "Contato", href: "/contact" },
];

export function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="floating-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-6 w-6 items-center justify-center"
      >
        <img src={menuIcon} alt="" className="h-6 w-6" />
      </button>

      <div
        id="floating-menu"
        className={`absolute right-0 top-full z-50 mt-2 grid w-56 transition-[grid-template-rows,opacity,visibility] duration-300 ease-out ${
          open
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden rounded-xl bg-(--primary-color) shadow-lg ring-1 ring-(--terdiary-color)/40">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-(--secondary-color) transition-colors hover:bg-[#F8EBD8]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
