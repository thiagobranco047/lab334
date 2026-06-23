import type { Metadata } from "next";

import PresentationsDashboard from "@/components/presentations/PresentationsDashboard";

export const metadata: Metadata = {
  title: "Apresentações — Lab. 334",
  description: "Dashboard de apresentações consultivas, relatórios e materiais estratégicos.",
};

export default function ApresentacoesPage() {
  return <PresentationsDashboard />;
}
