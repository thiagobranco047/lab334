export type OrganizationMapping = Readonly<Record<string, string>>;

export function parseOrganizationMapping(raw = ""): OrganizationMapping {
  if (!raw.trim()) return {};
  const mapping: Record<string, string> = {};
  const clerkIds = new Set<string>();
  for (const entry of raw.split(",")) {
    const [domainId, clerkId, extra] = entry.split("=").map((value) => value.trim());
    if (!domainId || !clerkId || extra || mapping[domainId] || clerkIds.has(clerkId)) {
      throw new Error("LAB_CLERK_ORGANIZATION_MAP is invalid");
    }
    mapping[domainId] = clerkId;
    clerkIds.add(clerkId);
  }
  return Object.freeze(mapping);
}

export function getOrganizationMapping(): OrganizationMapping {
  return parseOrganizationMapping(process.env.LAB_CLERK_ORGANIZATION_MAP);
}
