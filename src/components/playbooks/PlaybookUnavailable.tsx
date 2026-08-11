import Link from "next/link";

import type { Playbook } from "@/data/playbooks";

import PlaybookHero from "./PlaybookHero";
import SectionCard from "./SectionCard";

type PlaybookUnavailableProps = {
  playbook: Playbook;
};

export default function PlaybookUnavailable({ playbook }: PlaybookUnavailableProps) {
  return (
    <>
      <PlaybookHero playbook={{ ...playbook, status: "Indisponível" }} />

      <SectionCard id="indisponivel" title="Playbook não disponível" accentColor={playbook.accentColor}>
        <div className="space-y-5">
          <p className="font-body text-base font-light leading-relaxed text-presentation-fg">
            O planejamento editorial de {playbook.name} ainda não está disponível para consulta.
          </p>
          <p className="font-body text-sm font-light leading-relaxed text-presentation-muted">
            Os conteúdos deste playbook permanecem em preparação. Volte à lista para acessar os
            playbooks publicados.
          </p>
          <Link
            href="/playbooks"
            className="inline-block font-body text-xs font-medium uppercase tracking-[0.14em] text-presentation-fg transition-opacity hover:opacity-70"
          >
            ← Voltar aos playbooks
          </Link>
        </div>
      </SectionCard>
    </>
  );
}
