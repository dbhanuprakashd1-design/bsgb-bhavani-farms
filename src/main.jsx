import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

