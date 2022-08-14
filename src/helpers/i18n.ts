import { ELanguage } from "@/i18n/types";

export function getBrowserLocale(languageCode: boolean = false): string | null {
  if (!navigator.language) {
    return null;
  }

  const locale = navigator.language.trim();

  return languageCode ? locale.split(/-|_/)[0] : locale;
}

export function isTranslatableLanguage(lang: string): boolean {
  return Object.values(ELanguage).includes(lang as ELanguage);
}
