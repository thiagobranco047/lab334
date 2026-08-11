import Link from "next/link";

import type { Playbook } from "@/data/playbooks";
import { grupoAzimuteContent as content } from "@/data/playbooks/content/grupo-azimute";

import DistributionChart from "./DistributionChart";
import PlaybookCallout from "./PlaybookCallout";
import PlaybookHero from "./PlaybookHero";
import PlaybookSimpleTable from "./PlaybookSimpleTable";
import SectionCard from "./SectionCard";

type GrupoAzimutePlaybookViewProps = {
  playbook: Playbook;
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="m-0 list-none space-y-2 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-body text-sm font-light leading-relaxed text-presentation-fg sm:text-base"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-presentation-muted"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SplitLists({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  leftTitle: string;
  leftItems: readonly string[];
  rightTitle: string;
  rightItems: readonly string[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
          {leftTitle}
        </p>
        <BulletList items={leftItems} />
      </div>
      <div>
        <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
          {rightTitle}
        </p>
        <BulletList items={rightItems} />
      </div>
    </div>
  );
}

export default function GrupoAzimutePlaybookView({
  playbook,
}: GrupoAzimutePlaybookViewProps) {
  const accent = playbook.accentColor;

  return (
    <>
      <PlaybookHero playbook={playbook} />

      <div className="space-y-6">
        <SectionCard id="visao-geral" title="Visão geral" accentColor={accent}>
          <div className="space-y-5">
            <p className="font-body text-base font-light leading-relaxed text-presentation-fg">
              {content.overviewIntro}
            </p>
            <BulletList items={content.overviewPoints} />
            <PlaybookCallout accentColor={accent}>{content.editorialRule}</PlaybookCallout>
          </div>
        </SectionCard>

        <SectionCard id="papel-do-perfil" title="Papel do perfil do Grupo" accentColor={accent}>
          <div className="space-y-5">
            <p className="font-display text-lg font-light leading-relaxed tracking-lab text-presentation-fg">
              {content.profileRole}
            </p>
            <SplitLists
              leftTitle="O perfil deve"
              leftItems={content.profileShould}
              rightTitle="O perfil não deve"
              rightItems={content.profileShouldNot}
            />
          </div>
        </SectionCard>

        <SectionCard
          id="arquitetura-das-empresas"
          title="Arquitetura das empresas"
          accentColor={accent}
        >
          <div className="space-y-4">
            <p className="font-body text-sm font-light leading-relaxed text-presentation-muted">
              Resumo do papel de cada empresa. Detalhes de serviços, públicos e territórios
              estão nos playbooks individuais.
            </p>
            <PlaybookSimpleTable
              headers={["Empresa", "Papel no ecossistema", "Território principal"]}
              rows={content.companies.map((company) => [
                company.playbookSlug ? (
                  <Link
                    href={`/playbooks/${company.playbookSlug}`}
                    className="font-medium text-presentation-fg underline-offset-4 transition-colors hover:underline"
                  >
                    {company.name}
                  </Link>
                ) : (
                  <span className="font-medium">{company.name}</span>
                ),
                company.role,
                company.territory,
              ])}
            />
          </div>
        </SectionCard>

        <SectionCard id="posicionamento" title="Posicionamento editorial" accentColor={accent}>
          <div className="space-y-5">
            <p className="font-display text-lg font-light leading-relaxed tracking-lab text-presentation-fg">
              {content.positioning}
            </p>
            <BulletList items={content.positioningNotes} />
            <PlaybookCallout accentColor={accent}>{content.editorialRule}</PlaybookCallout>
          </div>
        </SectionCard>

        <SectionCard id="fase-estrategica" title="Fase estratégica atual" accentColor={accent}>
          <div className="space-y-4">
            <h3 className="font-display text-base font-light tracking-lab text-presentation-fg sm:text-lg">
              {content.currentPhase.title}
            </h3>
            <BulletList items={content.currentPhase.priorities} />
          </div>
        </SectionCard>

        <SectionCard id="objetivos-editoriais" title="Objetivos editoriais" accentColor={accent}>
          <ol className="m-0 list-none space-y-3 p-0">
            {content.editorialObjectives.map((objective, index) => (
              <li
                key={objective}
                className="flex items-start gap-4 rounded-lg border border-presentation-line bg-presentation-surface/40 px-4 py-3"
              >
                <span className="shrink-0 font-display text-sm font-light tabular-nums text-presentation-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-sm font-light leading-relaxed text-presentation-fg sm:text-base">
                  {objective}
                </span>
              </li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard
          id="publicos"
          title="Públicos, necessidades e empresas relacionadas"
          accentColor={accent}
        >
          <div className="space-y-4">
            <p className="font-body text-sm font-light leading-relaxed text-presentation-muted">
              Referências editoriais para orientar pautas — não exclusividades comerciais.
            </p>
            <PlaybookSimpleTable
              headers={["Público", "Necessidades principais", "Empresas relacionadas"]}
              rows={content.audiences.map((row) => [
                row.audience,
                row.needs,
                row.relatedCompanies,
              ])}
            />
          </div>
        </SectionCard>

        <SectionCard
          id="criterios-de-pertencimento"
          title="Este conteúdo pertence ao Grupo?"
          accentColor={accent}
        >
          <div className="space-y-5">
            <SplitLists
              leftTitle="Pertence ao perfil do Grupo quando"
              leftItems={content.belongsWhen}
              rightTitle="Permanece no perfil individual quando"
              rightItems={content.staysIndividualWhen}
            />
            <PlaybookCallout label="Critério decisivo" accentColor={accent}>
              {content.belongingRule}
            </PlaybookCallout>
          </div>
        </SectionCard>

        <SectionCard id="pilares-editoriais" title="Pilares editoriais" accentColor={accent}>
          <div className="space-y-4">
            <div className="grid gap-3">
              {content.pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-lg border border-presentation-line bg-presentation-surface/50 px-4 py-4 sm:px-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-light tracking-lab text-presentation-fg">
                      {pillar.label}
                    </h3>
                    <span className="font-display text-sm font-light tabular-nums text-presentation-muted">
                      {pillar.percentage}%
                    </span>
                  </div>
                  <p className="mt-2 font-body text-sm font-light leading-relaxed text-presentation-muted">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body text-sm font-light leading-relaxed text-presentation-muted">
              {content.pillarsNote}
            </p>
          </div>
        </SectionCard>

        <SectionCard id="series-editoriais" title="Séries editoriais recorrentes" accentColor={accent}>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.series.map((series) => (
              <article
                key={series.title}
                className="rounded-lg border border-presentation-line bg-presentation-surface/40 px-4 py-4"
              >
                <h3 className="font-display text-base font-light tracking-lab text-presentation-fg">
                  {series.title}
                </h3>
                <dl className="mt-3 space-y-2">
                  <div>
                    <dt className="font-display text-[11px] font-light uppercase tracking-[0.16em] text-presentation-muted">
                      Objetivo
                    </dt>
                    <dd className="mt-0.5 font-body text-sm font-light text-presentation-fg">
                      {series.objective}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-light uppercase tracking-[0.16em] text-presentation-muted">
                      Pilar
                    </dt>
                    <dd className="mt-0.5 font-body text-sm font-light text-presentation-fg">
                      {series.pillar}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-light uppercase tracking-[0.16em] text-presentation-muted">
                      Empresas
                    </dt>
                    <dd className="mt-0.5 font-body text-sm font-light text-presentation-fg">
                      {series.companies}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-light uppercase tracking-[0.16em] text-presentation-muted">
                      Formatos
                    </dt>
                    <dd className="mt-0.5 font-body text-sm font-light text-presentation-fg">
                      {series.formats}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="distribuicao-sugerida" title="Distribuição sugerida" accentColor={accent}>
          <div className="space-y-4">
            <DistributionChart
              distribution={content.pillars.map((pillar) => ({
                label: pillar.label,
                percentage: pillar.percentage,
              }))}
              accentColor={accent}
            />
            <p className="font-body text-sm font-light leading-relaxed text-presentation-muted">
              {content.distributionNote}
            </p>
          </div>
        </SectionCard>

        <SectionCard id="sistema-de-collabs" title="Sistema de collabs" accentColor={accent}>
          <div className="space-y-4">
            <PlaybookSimpleTable
              headers={["Situação", "Publicação recomendada"]}
              rows={content.collabs.map((row) => [row.situation, row.publication])}
            />
            <PlaybookCallout label="Princípio" accentColor={accent}>
              {content.collabsNote}
            </PlaybookCallout>
          </div>
        </SectionCard>

        <SectionCard id="tipos-e-formatos" title="Tipos e formatos de conteúdo" accentColor={accent}>
          <div className="space-y-4">
            <p className="font-body text-sm font-light leading-relaxed text-presentation-muted">
              Formato serve à função estratégica — não substitui o pilar editorial.
            </p>
            <PlaybookSimpleTable
              headers={["Formato", "Função estratégica"]}
              rows={content.formats.map((row) => [row.format, row.function])}
            />
          </div>
        </SectionCard>

        <SectionCard id="tom-de-voz" title="Tom de voz e regras de redação" accentColor={accent}>
          <div className="space-y-6">
            <p className="font-body text-base font-light leading-relaxed text-presentation-fg">
              {content.toneAttributes}
            </p>
            <div>
              <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                Regras práticas
              </p>
              <BulletList items={content.toneRules} />
            </div>
            <SplitLists
              leftTitle="Preferir"
              leftItems={content.preferExamples}
              rightTitle="Evitar"
              rightItems={content.avoidExamples}
            />
            <div>
              <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                Modelo narrativo para copies
              </p>
              <ol className="m-0 list-none space-y-2 p-0">
                {content.narrativeModel.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 font-body text-sm font-light text-presentation-fg"
                  >
                    <span className="shrink-0 font-display tabular-nums text-presentation-muted">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 rounded-lg border border-dashed border-presentation-line px-4 py-4">
                <p className="mb-2 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                  Exemplo de referência
                </p>
                <p className="whitespace-pre-line font-body text-sm font-light leading-relaxed text-presentation-fg">
                  {content.narrativeExample}
                </p>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="modelo-de-pauta" title="Modelo obrigatório de pauta" accentColor={accent}>
          <div className="space-y-5">
            <div className="grid gap-2 sm:grid-cols-2">
              {content.briefFields.map((field) => (
                <div
                  key={field}
                  className="rounded-md border border-presentation-line bg-presentation-surface/40 px-3 py-2.5 font-body text-sm font-light text-presentation-fg"
                >
                  {field}
                </div>
              ))}
            </div>
            <PlaybookCallout label="Condição de avanço" accentColor={accent}>
              {content.briefRule}
            </PlaybookCallout>
          </div>
        </SectionCard>

        <SectionCard id="banco-de-pautas" title="Banco inicial de pautas" accentColor={accent}>
          <div className="space-y-4">
            <p className="font-body text-sm font-light leading-relaxed text-presentation-muted">
              {content.ideasNote}
            </p>
            <ol className="m-0 list-none space-y-2 p-0">
              {content.contentIdeas.map((idea, index) => (
                <li
                  key={idea.title}
                  className="flex items-start gap-4 rounded-lg border border-dashed border-presentation-line px-4 py-3"
                >
                  <span className="shrink-0 font-display text-sm font-light tabular-nums text-presentation-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <span className="block font-body text-sm font-light leading-relaxed text-presentation-fg">
                      {idea.title}
                    </span>
                    {idea.needsConfirmation && (
                      <span className="inline-block rounded border border-presentation-line px-2 py-0.5 font-display text-[11px] font-light uppercase tracking-[0.14em] text-presentation-muted">
                        Depende de confirmação técnica
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </SectionCard>

        <SectionCard id="cta-mensagens-chave" title="CTAs e mensagens-chave" accentColor={accent}>
          <div className="space-y-6">
            <div
              className="rounded-lg border px-5 py-4"
              style={{
                borderColor: `${accent}33`,
                backgroundColor: `${accent}08`,
              }}
            >
              <p className="mb-1 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                CTA institucional principal
              </p>
              <p className="font-display text-base font-light leading-relaxed tracking-lab text-presentation-fg">
                {content.primaryCta}
              </p>
            </div>

            <div>
              <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                Mensagens-chave
              </p>
              <ul className="m-0 list-none space-y-3 p-0">
                {content.keyMessages.map((message) => (
                  <li
                    key={message}
                    className="flex items-start gap-3 rounded-lg border border-presentation-line bg-presentation-surface/40 px-4 py-3"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                      aria-hidden="true"
                    />
                    <span className="font-display text-base font-light leading-relaxed tracking-lab text-presentation-fg">
                      {message}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                CTAs por intenção
              </p>
              <PlaybookSimpleTable
                headers={["Intenção", "CTA"]}
                rows={content.ctaVariations.map((row) => [row.intent, row.text])}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard id="evolucao-estrategica" title="Evolução estratégica" accentColor={accent}>
          <div className="grid gap-4 lg:grid-cols-3">
            {content.evolution.map((phase, index) => (
              <article
                key={phase.period}
                className="rounded-lg border border-presentation-line bg-presentation-surface/40 px-4 py-5"
              >
                <p className="font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                  Fase {String(index + 1).padStart(2, "0")} · {phase.period}
                </p>
                <h3 className="mt-2 font-display text-lg font-light tracking-lab text-presentation-fg">
                  {phase.title}
                </h3>
                <div className="mt-4">
                  <BulletList items={phase.priorities} />
                </div>
              </article>
            ))}
          </div>
        </SectionCard>
      </div>
    </>
  );
}
