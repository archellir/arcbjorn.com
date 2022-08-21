// import ThemeToggle from "components/header/themeToggle/ThemeToggle";
// import TimeZone from "components/header/timeZone/TimeZone";

import css from "@/components/header/header.module.css";
import { Ei18nToken } from "@/i18n/types";
import { Component } from "solid-js";
import { Link } from "@solidjs/router";
import LanguageSwitch from "@/components/header/languageSwitch/LanguageSwitch";
import { useI18n } from "@solid-primitives/i18n";

const logoText = "arcbjorn";

enum Route {
  about = "/",
  extra = "/extra",
}

export const Header: Component = () => {
  const [t] = useI18n();

  return (
    <div class={css.header}>
      <Link class={css.logo} href={Route.about}>
        {logoText}
      </Link>
      {/* <TimeZone /> */}
      <div class={css.nav}>
        <div class={css.links}>
          <Link
            class={css.link}
            // activeClassName={css.activeRoute}
            href={Route.about}
          >
            {t(Ei18nToken.ABOUT)}
          </Link>
          <Link
            class={css.link}
            href={Route.extra}
            // activeClassName={css.activeRoute}
          >
            {t(Ei18nToken.EXTRA)}
          </Link>
        </div>
        <LanguageSwitch />
        {/* <ThemeToggler>{ThemeToggle}</ThemeToggler> */}
      </div>
    </div>
  );
};

export default Header;
