interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
}

export const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  step = 1,
}: QuantitySelectorProps) => {
  const decrease = () => onChange(Math.max(min, value - step));
  const increase = () => onChange(value + step);

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        aria-label="Diminuir quantidade"
        className="w-9 h-9 rounded-full border border-(--terdiary-color) text-lg disabled:opacity-40"
      >
        −
      </button>

      <span className="min-w-8 text-center font-bold" aria-live="polite">
        {value.toLocaleString("pt-BR")}
      </span>

      <button
        type="button"
        onClick={increase}
        aria-label="Aumentar quantidade"
        className="w-9 h-9 rounded-full border border-(--terdiary-color) text-lg"
      >
        +
      </button>
    </div>
  );
};
