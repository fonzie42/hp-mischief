import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "react-loading-skeleton/dist/skeleton.css";
import { GlobalStyle } from "./global-styles.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>
);
