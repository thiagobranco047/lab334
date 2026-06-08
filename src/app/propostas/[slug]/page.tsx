import { notFound } from "next/navigation";

import ProposalDeck from "@/components/proposals/ProposalDeck";
import { getAllProposalSlugs, getProposalBySlug } from "@/data/proposals";

type ProposalPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllProposalSlugs().map((slug) => ({ slug }));
}

export default function ProposalPage({ params }: ProposalPageProps) {
  const proposal = getProposalBySlug(params.slug);

  if (!proposal) {
    notFound();
  }

  return <ProposalDeck proposal={proposal} />;
}
