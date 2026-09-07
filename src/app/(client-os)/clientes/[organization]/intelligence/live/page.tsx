import { requireOrganizationCapability } from "@/server/auth/clerk";
export default async function LivePage({ params }: { params: { organization: string } }) {
  await requireOrganizationCapability(params.organization, "intelligence.read");
  return <section className="client-os-live"><p>LIVE · {params.organization}</p><h1>Intelligence Room</h1><p>Freshness: indisponível</p><p>Nenhuma fonte autorizada está conectada.</p></section>;
}
