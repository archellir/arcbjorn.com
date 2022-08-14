/* @refresh reload */
import "@/index.css";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { I18nContext } from "@solid-primitives/i18n";

import App from "@/App";
import translations from "@/i18n";

render(
  () => (
    <I18nContext.Provider value={translations}>
      <Router>
        <App />
      </Router>
    </I18nContext.Provider>
  ),
  document.getElementById("root") as HTMLElement
);
