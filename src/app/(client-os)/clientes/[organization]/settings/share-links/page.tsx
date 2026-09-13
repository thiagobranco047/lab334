import ShareLinkManager from "@/components/client-os/share-links/ShareLinkManager";
import { createShareLinkAction, loadShareLinkAdministration, revokeShareLinkAction } from "./actions";

export default async function Page({ params }: { params: { organization: string } }) {
  const data = await loadShareLinkAdministration(params.organization);
  return <><p>CONFIGURAÇÕES</p><h1>Share links</h1><p>Compartilhamento externo isolado por recurso.</p><ShareLinkManager playbooks={data.playbooks} links={data.links} createAction={createShareLinkAction.bind(null, params.organization)} revokeAction={revokeShareLinkAction.bind(null, params.organization)}/></>;
}
