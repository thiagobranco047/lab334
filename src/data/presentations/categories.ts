import type { PresentationCategory } from "./types";

export const PRESENTATION_CATEGORY_LABELS: Record<PresentationCategory, string> = {
  proposal: "Proposta Comercial",
  planning: "Planejamento Estratégico",
  report: "Relatório",
  branding: "Rebranding",
  dashboard: "Dashboard Executivo",
};

export function getCategoryLabel(category: PresentationCategory = "proposal"): string {
  return PRESENTATION_CATEGORY_LABELS[category];
}
