import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f4f1ea" }}><SignIn routing="path" path="/entrar" /></main>;
}
