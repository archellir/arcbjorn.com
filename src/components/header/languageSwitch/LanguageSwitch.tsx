import css from "@/components/header/languageSwitch/languageSwitch.module.css";
import { useI18n } from "@solid-primitives/i18n";
import { Component, For } from "solid-js";
import { ELanguage } from "@/i18n/types";

const LanguageSwitch: Component = () => {
  const [_, { locale }] = useI18n();
  const languages = Object.values(ELanguage);

  return (
    <div>
      <select
        value={locale()}
        class={css.select}
        onChange={(event) => locale(event.currentTarget.value)}
      >
        <For each={languages}>{(lang) => <option>{lang}</option>}</For>
      </select>
    </div>
  );
};

export default LanguageSwitch;
