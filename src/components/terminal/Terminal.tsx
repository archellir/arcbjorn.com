// import QuickLinks from "components/about/quickLinks/QuickLinks";

import { Component } from "solid-js";
import css from "@/components/terminal/terminal.module.css";
import TypeWriter from "@/components/terminal/typeWriter/TypeWriter";

export const Terminal: Component = () => {
  //   const [quickLinksVisibility, setQuickLinksVisibility] = useState(false);

  //   const toggleQuickLinksVisibility = () => {
  //     setQuickLinksVisibility(!quickLinksVisibility);
  //   };

  return (
    <div class={css.terminal}>
      <div class={css.window}>
        <TypeWriter />
        {/* <TypeWriter toggleQuickLinksVisibility={toggleQuickLinksVisibility} /> */}
        {/* {quickLinksVisibility ? <QuickLinks /> : ""} */}
      </div>
    </div>
  );
};

export default Terminal;
