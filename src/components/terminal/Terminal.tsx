// import QuickLinks from "components/about/quickLinks/QuickLinks";

import { Component } from "solid-js";
import css from "@/components/terminal/terminal.module.css";
import { useI18n } from "@solid-primitives/i18n";
import { Ei18nToken } from "@/i18n/types";

interface ICompany {
  name: string;
  link: string;
}

export const Terminal: Component = () => {
  const [t] = useI18n();

  const companies: Record<string, ICompany> = {
    previous: { name: "Muffins", link: "https://muffins.io/" },
    current: { name: "FundraiseUp", link: "https://www.fundraiseup.com/" },
  };

  return (
    <div class={css.terminal}>
      <div class={css.window}>
        <div class={css.typeWriter}>
          <span class={css.userandhost}>arcbjorn@archlinux: </span>
          <span class={css.infolocation}>~/</span>
          <span>$ cat {t(Ei18nToken.FILE)}.txt</span>
          <br />
          <br />
          <span>
            {t(Ei18nToken.GREETING)}
            <br />
            <br />
            {t(Ei18nToken.POSITION)} @
            <span class={css.company}>
              <a href={companies.current.link} target="_blank" class="link">
                {companies.current.name}
              </a>
            </span>
            <br />
            {t(Ei18nToken.FORMERLY)} @
            <span class={css.company}>
              <a href={companies.previous.link} target="_blank" class="link">
                {companies.previous.name}
              </a>
            </span>
            <br />
            <br />
            {t(Ei18nToken.INTERESTS)}
          </span>
        </div>
        {/* {quickLinksVisibility ? <QuickLinks /> : ""} */}
      </div>
    </div>
  );
};

export default Terminal;
