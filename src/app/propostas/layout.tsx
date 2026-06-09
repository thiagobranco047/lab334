import { Outfit, Roboto } from "next/font/google";
import type { ReactNode } from "react";

import "./proposals.css";

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

const proposalRootClassName = `${outfit.variable} ${roboto.variable} min-h-[100dvh] bg-proposal-bg font-body text-proposal-fg antialiased`;

export default function PropostasLayout({ children }: { children: ReactNode }) {
  return (
    <div data-proposal-root className={proposalRootClassName}>
      {children}
    </div>
  );
}
