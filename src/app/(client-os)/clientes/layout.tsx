import "./client-os.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { requireAuthenticatedUser } from "@/server/auth/clerk";

export default async function ClientsLayout({ children }: { children: React.ReactNode }) {
  await requireAuthenticatedUser();
  return (
    <ClerkProvider>
      <div data-client-os>
        <header className="client-os-header">
          <strong>LAB 334 · Client OS</strong>
          <UserButton />
        </header>
        {children}
      </div>
    </ClerkProvider>
  );
}
