import { Component, lazy } from "solid-js";
import { Route, Router, Routes } from "@solidjs/router";

const Home = lazy(() => import("@/pages"));

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  );
};

export default App;
