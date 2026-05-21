export const LOCALE_COOKIE = "lab334-locale";

export function prefersPortuguese(acceptLanguage) {
  if (!acceptLanguage) return false;

  return acceptLanguage
    .split(",")
    .some((entry) => {
      const code = entry.trim().split(";")[0].toLowerCase();
      return code === "pt-br" || code === "pt" || code.startsWith("pt-");
    });
}

export function setLocaleCookie(locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}
