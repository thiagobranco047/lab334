type PresentationBrandProps = {
  variant?: "light" | "dark";
};

export default function PresentationBrand({ variant = "light" }: PresentationBrandProps) {
  const tone = variant === "light" ? "text-presentation-fg" : "text-white";

  return (
    <div className={`font-display text-base font-light tracking-[-0.06em] sm:text-lg ${tone}`}>
      Lab<span className="font-normal">.</span> 334
    </div>
  );
}
