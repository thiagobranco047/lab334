import { NextResponse } from "next/server";
import { LOCALE_COOKIE, prefersPortuguese } from "./lib/locale";

function toPortuguesePath(pathname) {
  return pathname === "/" ? "/pt-BR" : `/pt-BR${pathname}`;
}

function toEnglishPath(pathname) {
  return pathname.replace(/^\/pt-BR/, "") || "/";
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/propostas")) {
    return NextResponse.next();
  }

  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const isPtBrPath = pathname === "/pt-BR" || pathname.startsWith("/pt-BR/");

  if (savedLocale === "en" && isPtBrPath) {
    return NextResponse.redirect(new URL(toEnglishPath(pathname), request.url));
  }

  if (savedLocale === "pt-BR" && !isPtBrPath) {
    return NextResponse.redirect(new URL(toPortuguesePath(pathname), request.url));
  }

  if (!savedLocale && !isPtBrPath) {
    const acceptLanguage = request.headers.get("accept-language");

    if (prefersPortuguese(acceptLanguage)) {
      return NextResponse.redirect(new URL(toPortuguesePath(pathname), request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
