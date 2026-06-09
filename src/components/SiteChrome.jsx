"use client";

import Nav from "@/components/Nav";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SiteViewTransitions from "@/components/SiteViewTransitions";

export default function SiteChrome({ children }) {
  return (
    <SiteViewTransitions>
      <Nav />
      {children}
      <LanguageSwitcher />
    </SiteViewTransitions>
  );
}
