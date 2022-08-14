import Cookies from "js-cookie";
import { createI18nContext } from "@solid-primitives/i18n";
import { ELanguage, Translations } from "@/i18n/types";
import { getBrowserLocale, isTranslatableLanguage } from "@/helpers/i18n";

import en from "@/i18n/translations/en.json";
import de from "@/i18n/translations/de.json";
import es from "@/i18n/translations/es.json";
import ru from "@/i18n/translations/ru.json";
import se from "@/i18n/translations/se.json";

const LANG_COOKIE_NAME = "arc_lang";

const translations: Record<ELanguage, Translations> = {
  [ELanguage.EN]: en,
  [ELanguage.DE]: de,
  [ELanguage.ES]: es,
  [ELanguage.RU]: ru,
  [ELanguage.SE]: se,
};

let language = Cookies.get(LANG_COOKIE_NAME);

if (!language || !isTranslatableLanguage(language)) {
  const browserLanguage = getBrowserLocale(true);

  language = isTranslatableLanguage(browserLanguage)
    ? browserLanguage
    : ELanguage.EN;

  Cookies.set(LANG_COOKIE_NAME, language, { sameSite: "strict" });
}

const translationsContext = createI18nContext(translations, language);

export default translationsContext;
