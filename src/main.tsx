import { Theme, ThemePanel } from "@radix-ui/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="ruby">
      <App />
      <ThemePanel defaultOpen={false} />
    </Theme>
  </React.StrictMode>,
);
