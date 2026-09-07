import "./client-os.css";
import { UserButton } from "@clerk/nextjs";
import { requireAuthenticatedUser } from "@/server/auth/clerk";

export default async function ClientsLayout({ children }: { children: React.ReactNode }) {
  await requireAuthenticatedUser();
  return <div data-client-os><header className="client-os-header"><strong>LAB 334 · Client OS</strong><UserButton /></header>{children}</div>;
}
