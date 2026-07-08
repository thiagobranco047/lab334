import type { Playbook } from "@/data/playbooks";

import DistributionChart from "./DistributionChart";
import IdeaBank from "./IdeaBank";
import MessageList from "./MessageList";
import PillarGrid from "./PillarGrid";
import PlaybookHero from "./PlaybookHero";
import SectionCard from "./SectionCard";

type PlaybookViewProps = {
  playbook: Playbook;
};

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-presentation-line bg-presentation-surface/50 px-3 py-1.5 font-body text-sm font-light text-presentation-fg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PlaybookView({ playbook }: PlaybookViewProps) {
  const accent = playbook.accentColor;

  return (
    <>
      <PlaybookHero playbook={playbook} />

      <div className="grid gap-6 lg:grid-cols-[1fr]">
        <div className="space-y-6">
          <SectionCard id="posicionamento" title="Posicionamento" accentColor={accent}>
            <p className="font-display text-lg font-light leading-relaxed tracking-lab text-presentation-fg">
              {playbook.positioning}
            </p>
          </SectionCard>

          <SectionCard id="objetivos-editoriais" title="Objetivos editoriais" accentColor={accent}>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                  Objetivo
                </p>
                <p className="font-body text-base font-light leading-relaxed text-presentation-fg">
                  {playbook.editorialObjective}
                </p>
              </div>
              <div>
                <p className="mb-2 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                  Missão editorial
                </p>
                <p className="font-body text-base font-light leading-relaxed text-presentation-fg">
                  {playbook.editorialMission}
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="publicos-prioritarios" title="Públicos prioritários" accentColor={accent}>
            <TagList items={playbook.priorityAudiences} />
          </SectionCard>

          <SectionCard id="pilares-de-conteudo" title="Pilares de conteúdo" accentColor={accent}>
            <PillarGrid pillars={playbook.contentPillars} accentColor={accent} />
          </SectionCard>

          <SectionCard id="tom-de-voz" title="Tom de voz" accentColor={accent}>
            <p className="font-body text-base font-light leading-relaxed text-presentation-fg">
              {playbook.toneOfVoice}
            </p>
          </SectionCard>

          <SectionCard id="temas-recorrentes" title="Temas recorrentes" accentColor={accent}>
            <TagList items={playbook.recurringThemes} />
          </SectionCard>

          <SectionCard id="tipos-de-conteudo" title="Tipos de conteúdo" accentColor={accent}>
            <TagList items={playbook.contentTypes} />
          </SectionCard>

          <SectionCard id="distribuicao-sugerida" title="Distribuição sugerida" accentColor={accent}>
            <DistributionChart distribution={playbook.distribution} accentColor={accent} />
          </SectionCard>

          <SectionCard id="ideias-iniciais" title="Ideias iniciais de conteúdo" accentColor={accent}>
            <IdeaBank ideas={playbook.contentIdeas} />
          </SectionCard>

          <SectionCard id="cta-mensagens-chave" title="CTA e mensagens-chave" accentColor={accent}>
            <div className="space-y-6">
              <div
                className="rounded-lg border px-5 py-4"
                style={{
                  borderColor: `${accent}33`,
                  backgroundColor: `${accent}08`,
                }}
              >
                <p className="mb-1 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                  CTA principal
                </p>
                <p className="font-display text-base font-light leading-relaxed tracking-lab text-presentation-fg">
                  {playbook.cta}
                </p>
              </div>
              <div>
                <p className="mb-4 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                  Mensagens-chave
                </p>
                <MessageList messages={playbook.keyMessages} accentColor={accent} />
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

    </>
  );
}
