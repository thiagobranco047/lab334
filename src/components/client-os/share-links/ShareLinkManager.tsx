"use client";
import { useFormState } from "react-dom";
import type { CreateShareLinkState } from "@/app/(client-os)/clientes/[organization]/settings/share-links/actions";

type PlaybookOption = { resourceId: string; businessUnitId: string; name: string };
type LinkItem = { id: string; businessUnitId: string; resourceId: string; status: "active" | "revoked"; expiresAt: string | null; createdAt: string };

export default function ShareLinkManager({ playbooks, links, createAction, revokeAction }: { playbooks: PlaybookOption[]; links: LinkItem[]; createAction: (state: CreateShareLinkState, data: FormData) => Promise<CreateShareLinkState>; revokeAction: (data: FormData) => Promise<void> }) {
  const [state, formAction] = useFormState(createAction, {});
  const copy = () => state.urlPath && navigator.clipboard.writeText(`${location.origin}${state.urlPath}`);
  return <>
    <section className="client-os-card">
      <h2>Criar link</h2>
      <p>O URL será exibido uma única vez. Se for perdido, crie outro link.</p>
      <form action={formAction} className="share-link-form">
        <label>Playbook<select name="resource" required onChange={(event) => { const option = event.currentTarget.selectedOptions[0]; const form = event.currentTarget.form; if (form) { (form.elements.namedItem("businessUnitId") as HTMLInputElement).value = option.dataset.unit ?? ""; (form.elements.namedItem("resourceId") as HTMLInputElement).value = option.value; } }}><option value="">Selecione</option>{playbooks.map((item) => <option key={item.resourceId} value={item.resourceId} data-unit={item.businessUnitId}>{item.name}</option>)}</select></label>
        <input type="hidden" name="businessUnitId"/><input type="hidden" name="resourceId"/>
        <label>Expiração<select name="duration" defaultValue="never"><option value="never">Sem expiração</option><option value="24h">24 horas</option><option value="7d">7 dias</option><option value="30d">30 dias</option></select></label>
        <button type="submit">Criar link</button>
      </form>
      {state.error && <p role="alert">{state.error}</p>}
      {state.urlPath && <div className="share-link-once"><code>{state.urlPath}</code><button type="button" onClick={copy}>Copiar URL</button></div>}
    </section>
    <section className="client-os-card"><h2>Links existentes</h2><p>Somente metadata é recuperável. Tokens anteriores nunca voltam a ser exibidos.</p>
      {links.length ? <div className="share-link-list">{links.map((link) => { const expired = link.expiresAt && new Date(link.expiresAt) <= new Date(); const label = link.status === "revoked" ? "Revogado" : expired ? "Expirado" : "Ativo"; return <div key={link.id}><strong>{link.resourceId}</strong><span>{label}</span><small>Criado em {new Date(link.createdAt).toLocaleString("pt-BR")}</small>{link.status === "active" && !expired && <form action={revokeAction}><input type="hidden" name="id" value={link.id}/><input type="hidden" name="businessUnitId" value={link.businessUnitId}/><button type="submit">Revogar</button></form>}</div>; })}</div> : <p>Nenhum link criado.</p>}
    </section>
    <section className="client-os-card"><strong>Compatibilidade pública</strong><p>Revogar este link não restringe o playbook enquanto ele também estiver público em /playbooks/*.</p></section>
  </>;
}
