import { azimuteEngenharia } from "./content/azimute-engenharia";
import { azimuteSan } from "./content/azimute-san";
import { azimuteTech } from "./content/azimute-tech";
import { grupoAzimuteVersions } from "./content/grupo-azimute/versions";
import { schmalzCondominio } from "./content/schmalz-condominio";
import type { Presentation, PresentationCategory } from "./types";

export type {
  Presentation,
  PresentationCategory,
  PresentationSlide,
  SlideType,
} from "./types";

export { getCategoryLabel, PRESENTATION_CATEGORY_LABELS } from "./categories";
export {
  getLatestGrupoAzimute,
  grupoAzimuteVersions,
} from "./content/grupo-azimute/versions";

export const presentations: Record<string, Presentation> = {
  [azimuteEngenharia.slug]: azimuteEngenharia,
  [azimuteSan.slug]: azimuteSan,
  [azimuteTech.slug]: azimuteTech,
  ...Object.fromEntries(
    grupoAzimuteVersions.map((presentation) => [presentation.slug, presentation])
  ),
  [schmalzCondominio.slug]: schmalzCondominio,
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
    if (byClient !== 0) return byClient;

    const byDate = b.createdAt.localeCompare(a.createdAt);
    if (byDate !== 0) return byDate;

    return a.title.localeCompare(b.title, "pt-BR");
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
      proposals: clientProposals.sort((a, b) => {
        const byDate = b.createdAt.localeCompare(a.createdAt);
        return byDate !== 0 ? byDate : a.title.localeCompare(b.title, "pt-BR");
      }),
    }));
}
