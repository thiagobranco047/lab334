type ProposalBrandProps = {
  variant?: "light" | "dark";
};

export default function ProposalBrand({ variant = "light" }: ProposalBrandProps) {
  const tone = variant === "light" ? "text-proposal-fg" : "text-white";

  return (
    <div className={`font-display text-base font-light tracking-[-0.06em] sm:text-lg ${tone}`}>
      Lab<span className="font-normal">.</span> 334
    </div>
  );
}
