import { Component, lazy } from "solid-js";
import { Route, Router, Routes } from "@solidjs/router";

const Terminal = lazy(() => import("@/components/terminal/Terminal"));

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Terminal} />
    </Routes>
  );
};

export default App;
