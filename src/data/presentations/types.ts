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
  | "package"
  | "companyScope"
  | "programComparison";

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

export type ScopeStatus = "included" | "partial" | "excluded";

export type ScopeBlock = {
  title: string;
  items: string[];
  note?: string;
};

export type CompanyScopeData = {
  company: string;
  program: string;
  objective: string;
  investment: string;
  channels?: string[];
  blocks: ScopeBlock[];
  exclusions?: string[];
};

export type ComparisonColumn = {
  key: string;
  label: string;
};

export type ComparisonRow = {
  service: string;
  values: Record<string, ScopeStatus>;
};

export type ProgramComparisonData = {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
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
  companyScope?: CompanyScopeData;
  programComparison?: ProgramComparisonData;
  showScopeLegend?: boolean;
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
