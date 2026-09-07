import Link from "next/link";
import { requireOrganizationCapability } from "@/server/auth/clerk";
export default async function IntelligencePage({ params }: { params: { organization: string } }) {
  await requireOrganizationCapability(params.organization, "intelligence.read");
  return <><p>INTELLIGENCE</p><h1>Intelligence</h1><section className="client-os-card"><p>Nenhuma capability de dados foi concedida neste estágio.</p><Link href={`/clientes/${params.organization}/intelligence/live`}>Abrir modo Live</Link></section></>;
}
