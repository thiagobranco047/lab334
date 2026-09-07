import { requireOrganizationAccess } from "@/server/auth/clerk";
export default async function Page({ params }: { params: { organization: string } }) { const access = await requireOrganizationAccess(params.organization); return <><h1>Configurações</h1><div className="client-os-card">Organization canônica: {access.organizationId}. Identificadores Clerk permanecem no servidor.</div></>; }
