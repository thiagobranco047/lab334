import { notFound } from "next/navigation";

import PresentationDeck from "@/components/presentations/PresentationDeck";
import { getAllPresentationSlugs, getPresentationBySlug } from "@/data/presentations";

type PresentationPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPresentationSlugs().map((slug) => ({ slug }));
}

export default function PresentationPage({ params }: PresentationPageProps) {
  const presentation = getPresentationBySlug(params.slug);

  if (!presentation) {
    notFound();
  }

  return <PresentationDeck presentation={presentation} />;
}
