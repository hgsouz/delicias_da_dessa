interface heroHomeProps {
  image: string;
}

export const HeroHome = ({ image }: heroHomeProps) => {
  return (
    <section className="max-w-full  max-h-1/3 border-b-2 border-b-(--terdiary-color)">
      <img src={image} alt="Hero image with promotions of the month" />
    </section>
  );
};
