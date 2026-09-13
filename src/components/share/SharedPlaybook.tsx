import type { Playbook } from "@/data/playbooks";
import PlaybookView from "@/components/playbooks/PlaybookView";

export default function SharedPlaybook({ playbook }: { playbook: Playbook }) {
  return <article className="mx-auto max-w-6xl px-6 py-10"><div className="mb-8 border-b border-presentation-line pb-4 text-xs uppercase tracking-[0.18em] text-presentation-muted">Compartilhado pela LAB. 334</div><PlaybookView playbook={playbook} /></article>;
}
