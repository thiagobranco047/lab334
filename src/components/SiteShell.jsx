"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Nav from "@/components/Nav";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SiteViewTransitions from "@/components/SiteViewTransitions";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const isProposalRoute = pathname?.startsWith("/propostas");

  useEffect(() => {
    if (isProposalRoute) return;

    document.title = "Lab. 334";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Digital Marketing");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Digital Marketing";
      document.head.appendChild(meta);
    }
  }, [isProposalRoute]);

  if (isProposalRoute) {
    return children;
  }

  return (
    <SiteViewTransitions>
      <Nav />
      {children}
      <LanguageSwitcher />
    </SiteViewTransitions>
  );
}
