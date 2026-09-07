import type { CapabilityId } from "@/domain/client-os/access";

const items = [
  { label: "Visão geral", segment: "" },
  { label: "Intelligence", segment: "intelligence", capability: "intelligence.read" as CapabilityId },
  { label: "Playbooks", segment: "playbooks", capability: "playbooks.read" as CapabilityId },
  { label: "Calendários", segment: "calendarios", capability: "calendars.read" as CapabilityId },
  { label: "Relatórios", segment: "relatorios", capability: "reports.read" as CapabilityId },
  { label: "Arquivos", segment: "arquivos", capability: "files.read" as CapabilityId },
  { label: "Configurações", segment: "settings" },
] as const;

export function resolveNavigation(organizationId: string, authorizedCapabilities: readonly CapabilityId[]) {
  return items.filter((item) => !("capability" in item) || authorizedCapabilities.includes(item.capability)).map((item) => ({ ...item, href: `/clientes/${organizationId}${item.segment ? `/${item.segment}` : ""}` }));
}
