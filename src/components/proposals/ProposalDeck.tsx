"use client";

import PresentationDeck from "@/components/presentations/PresentationDeck";
import type { Presentation } from "@/data/presentations/types";

type ProposalDeckProps = {
  proposal: Presentation;
};

export default function ProposalDeck({ proposal }: ProposalDeckProps) {
  return <PresentationDeck presentation={proposal} />;
}
