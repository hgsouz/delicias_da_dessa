import logoIcon from "../assets/logo.svg";
import instagramIcon from "../assets/icons/instagramIcon.svg";
import whatsappIcon from "../assets/icons/whatsappIcon.svg";

export const Footer = () => {
  const whatsappNumber: string = "5511977202155";
  const whatsappLink: string = `https://wa.me/${whatsappNumber}`;
  const instagramLink: string = "https://www.instagram.com/andressafrancaluiz/";

  return (
    <footer className="bg-amber-50 border-t border-t-(--terdiary-color) p-4">
      <section className="flex justify-between mx-5">
        <div className="flex my-auto gap-4">
          <img
            src={logoIcon}
            alt="Logo delicias da dessa"
            className="w-26 h-26"
          />
        </div>
        <div className="flex my-auto gap-6">
          <a href={instagramLink}>
            <img src={instagramIcon} alt="" className="w-6 h-6" />
          </a>
          <a href={whatsappLink}>
            <img src={whatsappIcon} alt="" className="w-6 h-6" />
          </a>
        </div>
      </section>
    </footer>
  );
};
