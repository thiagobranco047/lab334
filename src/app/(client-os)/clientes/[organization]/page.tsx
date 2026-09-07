import { requireOrganizationAccess } from "@/server/auth/clerk";
export default async function OrganizationPage({ params }: { params: { organization: string } }) {
  const access = await requireOrganizationAccess(params.organization);
  return <><p>ORGANIZATION</p><h1>{access.organizationId}</h1><section className="client-os-card"><h2>Visão geral</h2><p>O escopo foi resolvido no servidor. Indicadores permanecem indisponíveis até existir uma fonte de dados autorizada.</p></section></>;
}
