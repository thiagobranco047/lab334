"use client";

import SlideRenderer from "@/components/presentations/slides/SlideRenderer";
import type { Presentation, PresentationSlide } from "@/data/presentations/types";

type ProposalSlideProps = {
  slide: PresentationSlide;
  proposal: Presentation;
  showActions?: boolean;
};

export default function ProposalSlide({ slide, proposal, showActions }: ProposalSlideProps) {
  return (
    <SlideRenderer slide={slide} presentation={proposal} showActions={showActions} />
  );
}
