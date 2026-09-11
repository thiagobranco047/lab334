import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Playbook não encontrado - Lab. 334",
  robots: { index: false, follow: false },
};

export default function PlaybooksPage() {
  notFound();
}
