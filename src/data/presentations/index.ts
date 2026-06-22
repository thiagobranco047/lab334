import { azimuteEngenharia } from "./content/azimute-engenharia";
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
