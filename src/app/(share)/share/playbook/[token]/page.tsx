import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SharedPlaybook from "@/components/share/SharedPlaybook";
import { shareLinkService } from "@/server/share-links";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function Page({ params }: { params: { token: string } }) {
  const result = await shareLinkService.resolvePublicPlaybook(params.token);
  if (result.state === "unavailable" && result.infrastructureFailure) throw new Error("Share link temporarily unavailable");
  if (result.state !== "available") notFound();
  return <SharedPlaybook playbook={result.playbook} />;
}
