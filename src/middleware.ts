import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";
import type { NextFetchEvent } from "next/server";
import { LOCALE_COOKIE, prefersPortuguese } from "./lib/locale";

const isPrivateClientOs = (pathname: string) => pathname === "/clientes" || pathname.startsWith("/clientes/");
const isAuthRoute = (pathname: string) => pathname === "/entrar" || pathname.startsWith("/entrar/");
const isPublicMaterial = (pathname: string) =>
  ["/propostas", "/apresentacoes", "/playbooks"].some((route) => pathname === route || pathname.startsWith(`${route}/`));
const withoutLocale = (pathname: string) => pathname.replace(/^\/pt-BR/, "") || "/";

function handlePublicRequest(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (["/propostas", "/apresentacoes", "/playbooks"].some((route) => pathname.startsWith(`/pt-BR${route}`))) {
    return NextResponse.redirect(new URL(withoutLocale(pathname), request.url));
  }
  if (isPublicMaterial(pathname)) return NextResponse.next();

  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const isPtBrPath = pathname === "/pt-BR" || pathname.startsWith("/pt-BR/");
  if (savedLocale === "en" && isPtBrPath) return NextResponse.redirect(new URL(withoutLocale(pathname), request.url));
  if (savedLocale === "pt-BR" && !isPtBrPath) {
    return NextResponse.redirect(new URL(pathname === "/" ? "/pt-BR" : `/pt-BR${pathname}`, request.url));
  }
  if (!savedLocale && !isPtBrPath && prefersPortuguese(request.headers.get("accept-language"))) {
    return NextResponse.redirect(new URL(pathname === "/" ? "/pt-BR" : `/pt-BR${pathname}`, request.url));
  }
  return NextResponse.next();
}

const withClerk = clerkMiddleware(async (auth, request) => {
  if (isPrivateClientOs(request.nextUrl.pathname)) await auth.protect();
  return NextResponse.next();
});

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;
  if (isPrivateClientOs(pathname) || isAuthRoute(pathname)) {
    return withClerk(request, event);
  }
  return handlePublicRequest(request);
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"] };
