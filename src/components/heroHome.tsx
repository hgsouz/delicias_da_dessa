interface heroHomeProps {
  image: string;
}

export const HeroHome = ({ image }: heroHomeProps) => {
  return (
    <section className="border-b border-b-(--terdiary-color)">
      <img
        src={image}
        alt="Hero image with promotions of the month"
        className="w-full max-h-1/4 "
      />
    </section>
  );
};
