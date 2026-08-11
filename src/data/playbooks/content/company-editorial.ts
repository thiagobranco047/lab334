import type { PlaybookSection } from "@/data/playbooks";

export type CompanyAudienceRow = {
  audience: string;
  need: string;
  editorialResponse: string;
};

export type CompanyCollabRow = {
  situation: string;
  publication: string;
};

export type CompanyPillar = {
  label: string;
  percentage: number;
  description: string;
};

export type CompanySeries = {
  title: string;
  objective: string;
  pillar: string;
  audience: string;
  areas?: string;
  formats: string;
};

export type CompanyFormat = {
  format: string;
  function: string;
};

export type CompanyPhase = {
  title: string;
  period: string;
  priorities: string[];
};

export type CompanyContentIdea = {
  title: string;
  needsReview?: boolean;
};

export type CompanyServiceArea = {
  title: string;
  description: string;
};

export type CompanyEditorialContent = {
  sections: readonly PlaybookSection[];
  overviewIntro: string;
  groupRule: string;
  companyRole: string;
  roleDemonstrates: readonly string[];
  positioning: string;
  positioningComplement?: string;
  currentPhase: {
    title: string;
    priorities: readonly string[];
  };
  servicesIntro?: string;
  serviceAreas: readonly CompanyServiceArea[];
  servicesNote?: string;
  shouldNotSuggest: readonly string[];
  editorialObjectives: readonly string[];
  audiencesIntro?: string;
  audiences: readonly CompanyAudienceRow[];
  belongingTitle: string;
  belongsWhen: readonly string[];
  involvesGroupWhen: readonly string[];
  reviewWhen: readonly string[];
  belongingRule: string;
  pillars: readonly CompanyPillar[];
  pillarsNote?: string;
  series: readonly CompanySeries[];
  distributionNote: string;
  collabs: readonly CompanyCollabRow[];
  collabsNote: string;
  formats: readonly CompanyFormat[];
  toneAttributes: string;
  toneRules: readonly string[];
  preferExamples: readonly string[];
  avoidExamples: readonly string[];
  narrativeModel: readonly string[];
  narrativeExample?: string;
  briefFields: readonly string[];
  briefRule: string;
  contentIdeas: readonly CompanyContentIdea[];
  ideasNote: string;
  keyMessages: readonly string[];
  primaryCta: string;
  ctaVariations: readonly { intent: string; text: string }[];
  evolution: readonly CompanyPhase[];
};

export const COMPANY_EDITORIAL_SECTIONS: readonly PlaybookSection[] = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "papel-da-empresa", label: "Papel da empresa" },
  { id: "posicionamento", label: "Posicionamento" },
  { id: "fase-estrategica", label: "Fase estratégica atual" },
  { id: "servicos-e-limites", label: "Serviços e limites" },
  { id: "objetivos-editoriais", label: "Objetivos editoriais" },
  { id: "publicos", label: "Públicos e soluções" },
  { id: "criterios-de-pertencimento", label: "Critérios de pertencimento" },
  { id: "pilares-editoriais", label: "Pilares editoriais" },
  { id: "series-editoriais", label: "Séries editoriais" },
  { id: "distribuicao-sugerida", label: "Distribuição sugerida" },
  { id: "sistema-de-collabs", label: "Sistema de collabs" },
  { id: "tipos-e-formatos", label: "Tipos e formatos" },
  { id: "tom-de-voz", label: "Tom de voz" },
  { id: "modelo-de-pauta", label: "Modelo de pauta" },
  { id: "banco-de-pautas", label: "Banco de pautas" },
  { id: "cta-mensagens-chave", label: "CTAs e mensagens-chave" },
  { id: "evolucao-editorial", label: "Evolução editorial" },
];
