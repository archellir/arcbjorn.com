/* @refresh reload */
import "@/index.css";
import { render } from "solid-js/web";

import App from "@/App";
import { I18nContext } from "@solid-primitives/i18n";
import translations from "@/i18n";

render(
  () => (
    <I18nContext.Provider value={translations}>
      <App />
    </I18nContext.Provider>
  ),
  document.getElementById("root") as HTMLElement
);
