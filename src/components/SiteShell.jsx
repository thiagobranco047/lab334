"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SiteChrome = dynamic(() => import("@/components/SiteChrome"), {
  ssr: false,
});

function isProposalRoute(pathname) {
  return pathname?.startsWith("/propostas") || pathname?.startsWith("/pt-BR/propostas");
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const proposalRoute = isProposalRoute(pathname);

  useEffect(() => {
    if (proposalRoute) return;

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
  }, [proposalRoute]);

  if (proposalRoute) {
    return children;
  }

  return <SiteChrome>{children}</SiteChrome>;
}
