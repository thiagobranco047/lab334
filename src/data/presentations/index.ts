import { azimuteEngenharia } from "./content/azimute-engenharia";
import { azimuteSan } from "./content/azimute-san";
import { azimuteTech } from "./content/azimute-tech";
import { grupoAzimute } from "./content/grupo-azimute";
import type { Presentation, PresentationCategory } from "./types";

export type {
  Presentation,
  PresentationCategory,
  PresentationSlide,
  SlideType,
} from "./types";

export { getCategoryLabel, PRESENTATION_CATEGORY_LABELS } from "./categories";

export const presentations: Record<string, Presentation> = {
  [azimuteEngenharia.slug]: azimuteEngenharia,
  [azimuteSan.slug]: azimuteSan,
  [azimuteTech.slug]: azimuteTech,
  [grupoAzimute.slug]: grupoAzimute,
};

export function getPresentationBySlug(slug: string): Presentation | undefined {
  return presentations[slug];
}

export function getAllPresentationSlugs(): string[] {
  return Object.keys(presentations);
}

export function getPresentationsByCategory(
  category: PresentationCategory
): Presentation[] {
  return Object.values(presentations).filter(
    (presentation) => presentation.category === category
  );
}

export function getPresentationsExceptCategory(
  category: PresentationCategory
): Presentation[] {
  return Object.values(presentations).filter(
    (presentation) => presentation.category !== category
  );
}

export function sortPresentationsByClient(
  items: Presentation[]
): Presentation[] {
  return [...items].sort((a, b) => {
    const byClient = a.client.localeCompare(b.client, "pt-BR");
    return byClient !== 0 ? byClient : a.title.localeCompare(b.title, "pt-BR");
  });
}

export type ClientProposalGroup = {
  client: string;
  proposals: Presentation[];
};

export function getProposalsGroupedByClient(): ClientProposalGroup[] {
  const groups = new Map<string, Presentation[]>();

  for (const presentation of Object.values(presentations)) {
    if (presentation.category !== "proposal") continue;

    const existing = groups.get(presentation.client) ?? [];
    existing.push(presentation);
    groups.set(presentation.client, existing);
  }

  return Array.from(groups.entries())
    .sort(([clientA], [clientB]) => clientA.localeCompare(clientB, "pt-BR"))
    .map(([client, clientProposals]) => ({
      client,
      proposals: clientProposals.sort((a, b) => a.title.localeCompare(b.title, "pt-BR")),
    }));
}
