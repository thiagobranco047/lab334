"use client";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { useEffect } from "react";

import Nav from "@/components/Nav";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Set metadata dynamically since we're using "use client"
    document.title = "Lab. 334";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Digital Marketing');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Digital Marketing';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <Nav />
          {children}
          <LanguageSwitcher />
        </body>
      </html>
    </ViewTransitions>
  );
}
