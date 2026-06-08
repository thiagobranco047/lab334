import Link from "next/link";

import ProposalBrand from "@/components/proposals/ProposalBrand";

export default function ProposalNotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-proposal-bg px-6 text-center text-proposal-fg">
      <ProposalBrand />
      <h1 className="mt-8 font-display text-3xl font-extralight tracking-lab sm:text-4xl">
        Proposta não encontrada
      </h1>
      <p className="mt-4 max-w-md font-body text-sm font-light text-proposal-muted">
        O link que você acessou não corresponde a nenhuma proposta disponível.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex border border-proposal-fg px-6 py-3.5 font-body text-xs font-medium uppercase tracking-[0.14em] text-proposal-fg transition hover:bg-proposal-fg hover:text-proposal-bg"
      >
        Voltar ao site
      </Link>
    </div>
  );
}
