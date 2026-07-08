import Link from "next/link";

import PresentationBrand from "@/components/presentations/PresentationBrand";

export default function PlaybookNotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-presentation-bg px-5 text-center text-presentation-fg">
      <PresentationBrand />
      <h1 className="mt-8 font-display text-3xl font-extralight tracking-lab">Playbook não encontrado</h1>
      <p className="mt-3 font-body text-sm font-light text-presentation-muted">
        O planejamento editorial solicitado não existe ou foi removido.
      </p>
      <Link
        href="/playbooks"
        className="mt-8 font-body text-xs font-medium uppercase tracking-[0.14em] text-presentation-fg hover:underline"
      >
        ← Voltar aos playbooks
      </Link>
    </div>
  );
}
