import React, { useEffect } from "react";
import ReactGA from "react-ga";

import Home from "./pages/Home";
import GlobalStyle from "./styles/global";

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      ReactGA.initialize("G-DZEBZT5ZN5");
      ReactGA.pageview(window.location.pathname + window.location.search);

      console.log("Analytics is enabled");
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
