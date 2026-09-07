import { requireOrganizationCapability } from "@/server/auth/clerk";
export default async function ProtectedPlaybooksPage({ params }: { params: { organization: string } }) {
  await requireOrganizationCapability(params.organization, "playbooks.read");
  return <><p>PLAYBOOKS</p><h1>Playbooks protegidos</h1><section className="client-os-card"><p>Superfície reservada para integração futura. O conteúdo de /playbooks não foi copiado ou movido.</p></section></>;
}
