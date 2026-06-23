import { notFound } from "next/navigation";

import PresentationDeck from "@/components/presentations/PresentationDeck";
import { getPresentationBySlug, getPresentationsByCategory } from "@/data/presentations";

type PresentationPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getPresentationsByCategory("proposal").map((presentation) => ({
    slug: presentation.slug,
  }));
}

export default function PresentationPage({ params }: PresentationPageProps) {
  const presentation = getPresentationBySlug(params.slug);

  if (!presentation || presentation.category !== "proposal") {
    notFound();
  }

  return <PresentationDeck presentation={presentation} />;
}
