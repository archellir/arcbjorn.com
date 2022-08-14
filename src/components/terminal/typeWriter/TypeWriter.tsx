import { Component } from "solid-js";
import { useI18n } from "@solid-primitives/i18n";
import Typewriter from "typewriter-effect/dist/core";

import { Ei18nToken } from "@/i18n/types";
import getTerminalText from "@/components/terminal/typeWriter/introText";
import css from "@/components/terminal/typeWriter/typeWriter.module.css";

type TTypeWriterProps = {
  // toggleQuickLinksVisibility: () => void;
  // toggleTypeWriter: () => void;
  // startTypeWriter: boolean;
};

const TypeWriter: Component<TTypeWriterProps> = (
  {
    // startTypeWriter,
    // toggleTypeWriter,
    // toggleQuickLinksVisibility,
  }
) => {
  const [t] = useI18n();
  const introText = getTerminalText({
    file: t(Ei18nToken.FILE),
    greeting: t(Ei18nToken.GREETING),
    position: t(Ei18nToken.POSITION),
    formerly: t(Ei18nToken.FORMERLY),
    interests: t(Ei18nToken.INTERESTS),
  });

  queueMicrotask(() => {
    if (false) {
      new Typewriter("#typewriter", {
        strings: [introText],
        autoStart: true,
        delay: 60,
      });
    }
  });

  return (
    <div class={css.typeWriter}>
      <div id="typewriter" innerHTML={introText}></div>
    </div>
  );
};

export default TypeWriter;
