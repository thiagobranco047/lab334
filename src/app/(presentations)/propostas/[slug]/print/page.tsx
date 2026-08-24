import { notFound } from "next/navigation";

import PresentationPrintView from "@/components/presentations/PresentationPrintView";
import { getPresentationBySlug, getPresentationsByCategory } from "@/data/presentations";

type PrintPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getPresentationsByCategory("proposal").map((presentation) => ({
    slug: presentation.slug,
  }));
}

export default function ProposalPrintPage({ params }: PrintPageProps) {
  const presentation = getPresentationBySlug(params.slug);

  if (!presentation || presentation.category !== "proposal") {
    notFound();
  }

  return <PresentationPrintView presentation={presentation} />;
}
