import type { Metadata } from "next";

import ProposalsDashboard from "@/components/presentations/ProposalsDashboard";

export const metadata: Metadata = {
  title: "Propostas Comerciais — Lab. 334",
  description: "Dashboard de propostas comerciais por cliente.",
};

export default function PropostasPage() {
  return <ProposalsDashboard />;
}
