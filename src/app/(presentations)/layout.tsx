import { Outfit, Roboto } from "next/font/google";
import type { ReactNode } from "react";

import "./presentations.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

const presentationRootClassName = `${outfit.variable} ${roboto.variable} min-h-[100dvh] bg-presentation-bg font-body text-presentation-fg antialiased`;

export default function PresentationsLayout({ children }: { children: ReactNode }) {
  return (
    <div data-presentation-root className={presentationRootClassName}>
      {children}
    </div>
  );
}
