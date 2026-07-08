import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PlaybookLayout from "@/components/playbooks/PlaybookLayout";
import PlaybookView from "@/components/playbooks/PlaybookView";
import { getAllPlaybooks, getPlaybookBySlug } from "@/data/playbooks";

type PlaybookPageProps = {
  params: { clientSlug: string };
};

export function generateStaticParams() {
  return getAllPlaybooks().map((playbook) => ({ clientSlug: playbook.slug }));
}

export function generateMetadata({ params }: PlaybookPageProps): Metadata {
  const playbook = getPlaybookBySlug(params.clientSlug);
  if (!playbook) return { title: "Playbook não encontrado — Lab. 334" };

  return {
    title: `${playbook.name} — Playbook Editorial — Lab. 334`,
    description: playbook.subtitle,
  };
}

export default function PlaybookPage({ params }: PlaybookPageProps) {
  const playbook = getPlaybookBySlug(params.clientSlug);

  if (!playbook) {
    notFound();
  }

  return (
    <PlaybookLayout>
      <PlaybookView playbook={playbook} />
    </PlaybookLayout>
  );
}
