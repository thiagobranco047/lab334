export type SlideType =
  | "cover"
  | "text"
  | "pillar"
  | "investment"
  | "cta"
  | "table"
  | "quote"
  | "stats"
  | "deliverable"
  | "investmentTable"
  | "package";

export type PresentationCategory =
  | "proposal"
  | "planning"
  | "report"
  | "branding"
  | "dashboard";

export type InvestmentTableItem = {
  name: string;
  price: string;
  description?: string;
};

export type PresentationSlide = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  highlight?: string;
  type?: SlideType;
  investment?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  stats?: {
    label: string;
    value: string;
  }[];
  investmentItems?: InvestmentTableItem[];
};

export type Presentation = {
  slug: string;
  client: string;
  title: string;
  date: string;
  createdAt: string;
  category: PresentationCategory;
  investment?: string;
  approveUrl?: string;
  pdfUrl?: string;
  slides: PresentationSlide[];
};
