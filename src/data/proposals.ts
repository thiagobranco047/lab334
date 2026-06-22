export type {
  Presentation as Proposal,
  PresentationSlide as ProposalSlide,
  SlideType,
  PresentationCategory,
} from "./presentations";

export {
  getPresentationBySlug as getProposalBySlug,
  getAllPresentationSlugs as getAllProposalSlugs,
  presentations as proposals,
} from "./presentations";
