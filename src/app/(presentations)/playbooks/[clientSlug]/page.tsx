import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CompanyEditorialPlaybookView from "@/components/playbooks/CompanyEditorialPlaybookView";
import GrupoAzimutePlaybookView from "@/components/playbooks/GrupoAzimutePlaybookView";
import PlaybookLayout from "@/components/playbooks/PlaybookLayout";
import PlaybookUnavailable from "@/components/playbooks/PlaybookUnavailable";
import PlaybookView from "@/components/playbooks/PlaybookView";
import { getAllPlaybooks, getPlaybookBySlug } from "@/data/playbooks";
import { azimuteImoveisContent } from "@/data/playbooks/content/azimute-imoveis";
import { azimuteSanContent } from "@/data/playbooks/content/azimute-san";
import { COMPANY_EDITORIAL_SECTIONS } from "@/data/playbooks/content/company-editorial";
import { GRUPO_AZIMUTE_SECTIONS } from "@/data/playbooks/content/grupo-azimute";

type PlaybookPageProps = {
  params: { clientSlug: string };
};

export function generateStaticParams() {
  return getAllPlaybooks().map((playbook) => ({ clientSlug: playbook.slug }));
}

export function generateMetadata({ params }: PlaybookPageProps): Metadata {
  const playbook = getPlaybookBySlug(params.clientSlug);
  if (!playbook) return { title: "Playbook não encontrado - Lab. 334" };

  if (!playbook.enabled) {
    return {
      title: `${playbook.name} - Playbook indisponível - Lab. 334`,
      description: "Este playbook ainda não está disponível para consulta.",
    };
  }

  return {
    title: `${playbook.name} - Playbook Editorial - Lab. 334`,
    description: playbook.subtitle,
  };
}

export default function PlaybookPage({ params }: PlaybookPageProps) {
  const playbook = getPlaybookBySlug(params.clientSlug);

  if (!playbook) {
    notFound();
  }

  if (!playbook.enabled) {
    return (
      <PlaybookLayout sections={[{ id: "indisponivel", label: "Indisponível" }]}>
        <PlaybookUnavailable playbook={playbook} />
      </PlaybookLayout>
    );
  }

  if (playbook.slug === "grupo-azimute") {
    return (
      <PlaybookLayout sections={GRUPO_AZIMUTE_SECTIONS}>
        <GrupoAzimutePlaybookView playbook={playbook} />
      </PlaybookLayout>
    );
  }

  if (playbook.slug === "azimute-imoveis") {
    return (
      <PlaybookLayout sections={COMPANY_EDITORIAL_SECTIONS}>
        <CompanyEditorialPlaybookView playbook={playbook} content={azimuteImoveisContent} />
      </PlaybookLayout>
    );
  }

  if (playbook.slug === "azimute-san") {
    return (
      <PlaybookLayout sections={COMPANY_EDITORIAL_SECTIONS}>
        <CompanyEditorialPlaybookView playbook={playbook} content={azimuteSanContent} />
      </PlaybookLayout>
    );
  }

  return (
    <PlaybookLayout>
      <PlaybookView playbook={playbook} />
    </PlaybookLayout>
  );
}
