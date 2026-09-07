import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import SiteShell from "@/components/SiteShell";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body><ClerkProvider><SiteShell>{children}</SiteShell></ClerkProvider></body>
    </html>
  );
}
