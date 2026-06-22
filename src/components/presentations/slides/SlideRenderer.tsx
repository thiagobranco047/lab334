import type { Presentation, PresentationSlide } from "@/data/presentations/types";

import CoverSlide from "./CoverSlide";
import CtaSlide from "./CtaSlide";
import InvestmentSlide from "./InvestmentSlide";
import PillarSlide from "./PillarSlide";
import QuoteSlide from "./QuoteSlide";
import StatsSlide from "./StatsSlide";
import TableSlide from "./TableSlide";
import TextSlide from "./TextSlide";

type SlideRendererProps = {
  slide: PresentationSlide;
  presentation: Presentation;
  showActions?: boolean;
};

export default function SlideRenderer({
  slide,
  presentation,
  showActions = false,
}: SlideRendererProps) {
  const slideType = slide.type ?? "text";

  switch (slideType) {
    case "cover":
      return <CoverSlide slide={slide} presentation={presentation} />;
    case "pillar":
      return <PillarSlide slide={slide} />;
    case "investment":
      return <InvestmentSlide slide={slide} />;
    case "cta":
      return <CtaSlide slide={slide} presentation={presentation} showActions={showActions} />;
    case "table":
      return <TableSlide slide={slide} />;
    case "quote":
      return <QuoteSlide slide={slide} />;
    case "stats":
      return <StatsSlide slide={slide} />;
    case "text":
    default:
      return <TextSlide slide={slide} />;
  }
}
