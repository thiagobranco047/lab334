import Link from "next/link";

import PresentationBrand from "@/components/presentations/PresentationBrand";

export default function ProposalNotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-presentation-bg px-6 text-center text-presentation-fg">
      <PresentationBrand />
      <h1 className="mt-8 font-display text-3xl font-extralight tracking-lab sm:text-4xl">
        Proposta não encontrada
      </h1>
      <p className="mt-4 max-w-md font-body text-sm font-light text-presentation-muted">
        O link que você acessou não corresponde a nenhuma proposta disponível.
      </p>
      <Link
        href="/propostas"
        className="mt-10 inline-flex border border-presentation-fg px-6 py-3.5 font-body text-xs font-medium uppercase tracking-[0.14em] text-presentation-fg transition hover:bg-presentation-fg hover:text-presentation-bg"
      >
        Ver propostas
      </Link>
    </div>
  );
}
