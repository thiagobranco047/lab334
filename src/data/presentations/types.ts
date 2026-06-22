export type SlideType =
  | "cover"
  | "text"
  | "pillar"
  | "investment"
  | "cta"
  | "table"
  | "quote"
  | "stats";

export type PresentationCategory =
  | "proposal"
  | "planning"
  | "report"
  | "branding"
  | "dashboard";

export type PresentationSlide = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  highlight?: string;
  type?: SlideType;
  table?: {
    headers: string[];
    rows: string[][];
  };
  stats?: {
    label: string;
    value: string;
  }[];
};

export type Presentation = {
  slug: string;
  client: string;
  title: string;
  date: string;
  category: PresentationCategory;
  investment?: string;
  approveUrl?: string;
  pdfUrl?: string;
  slides: PresentationSlide[];
};
