import { OrganizationShell } from "@/components/client-os/OrganizationShell";
import { requireOrganizationAccess } from "@/server/auth/clerk";

export default async function OrganizationLayout({ children, params }: { children: React.ReactNode; params: { organization: string } }) {
  const access = await requireOrganizationAccess(params.organization);
  return <OrganizationShell organizationId={access.organizationId} capabilities={access.authorizedCapabilities}>{children}</OrganizationShell>;
}
