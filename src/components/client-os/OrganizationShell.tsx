import Link from "next/link";
import type { CapabilityId } from "@/domain/client-os/access";
import { resolveNavigation } from "@/server/client-os/navigation";

export function OrganizationShell({ organizationId, capabilities, children }: { organizationId: string; capabilities: readonly CapabilityId[]; children: React.ReactNode }) {
  const navigation = resolveNavigation(organizationId, capabilities);
  return <div className="client-os-layout"><nav className="client-os-nav">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><main className="client-os-main">{children}</main></div>;
}
