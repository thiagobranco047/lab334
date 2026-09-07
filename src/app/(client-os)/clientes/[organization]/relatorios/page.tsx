import { requireOrganizationCapability } from "@/server/auth/clerk";
export default async function Page({ params }: { params: { organization: string } }) { await requireOrganizationCapability(params.organization, "reports.read"); return <><h1>Relatórios</h1><div className="client-os-card">Nenhuma fonte autorizada conectada.</div></>; }
