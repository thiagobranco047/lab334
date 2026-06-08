import "./globals.css";

import SiteShell from "@/components/SiteShell";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
