import Link from "next/link";
import { listAuthorizedOrganizations } from "@/server/auth/clerk";

export default async function ClientsPage() {
  const organizations = await listAuthorizedOrganizations();
  return <main className="client-os-main"><p>ORGANIZATIONS</p><h1>Clientes autorizados</h1><div className="client-os-card client-os-list">{organizations.length ? organizations.map((id) => <Link key={id} href={`/clientes/${id}`}>{id}</Link>) : <p>Nenhuma Organization está disponível para o escopo ativo.</p>}</div></main>;
}
