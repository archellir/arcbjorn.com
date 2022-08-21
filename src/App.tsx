import { Component, lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";

import Header from "@/components/header/Header";

const Terminal = lazy(() => import("@/components/terminal/Terminal"));

const App: Component = () => {
  return (
    <>
      <div class="h-1/10">
        <Header />
      </div>
      <div class="h-5/6">
        <Routes>
          <Route path="/" component={Terminal} />
        </Routes>
      </div>
    </>
  );
};

export default App;
