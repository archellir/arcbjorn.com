export default function getBrowserLocale(
  languageCode: boolean = false
): string | null {
  if (!navigator.language) {
    return null;
  }

  const locale = navigator.language.trim();

  return languageCode ? locale.split(/-|_/)[0] : locale;
}
