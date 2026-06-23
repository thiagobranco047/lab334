"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SiteChrome = dynamic(() => import("@/components/SiteChrome"), {
  ssr: false,
});

function isPresentationRoute(pathname) {
  return (
    pathname?.startsWith("/propostas") ||
    pathname?.startsWith("/apresentacoes") ||
    pathname?.startsWith("/pt-BR/propostas") ||
    pathname?.startsWith("/pt-BR/apresentacoes")
  );
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const presentationRoute = isPresentationRoute(pathname);

  useEffect(() => {
    if (presentationRoute) return;

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
  }, [presentationRoute]);

  if (presentationRoute) {
    return children;
  }

  return <SiteChrome>{children}</SiteChrome>;
}
