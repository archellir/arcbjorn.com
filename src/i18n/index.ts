import { createI18nContext } from "@solid-primitives/i18n";
import { ELanguage, Translations } from "@/i18n/types";

import en from "@/i18n/translations/en.json";
import de from "@/i18n/translations/de.json";
import es from "@/i18n/translations/es.json";
import ru from "@/i18n/translations/ru.json";
import se from "@/i18n/translations/se.json";

const locales: Record<ELanguage, Translations> = {
  [ELanguage.EN]: en,
  [ELanguage.DE]: de,
  [ELanguage.ES]: es,
  [ELanguage.RU]: ru,
  [ELanguage.SE]: se,
};

const translationsContext = createI18nContext(locales, ELanguage.EN);

export default translationsContext;
