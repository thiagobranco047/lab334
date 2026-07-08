import type { Metadata } from "next";

import PlaybookIndexPage from "@/components/playbooks/PlaybookIndexPage";

export const metadata: Metadata = {
  title: "Playbooks Editoriais — Lab. 334",
  description: "Dashboard de planejamentos editoriais estratégicos por cliente.",
};

export default function PlaybooksPage() {
  return <PlaybookIndexPage />;
}
