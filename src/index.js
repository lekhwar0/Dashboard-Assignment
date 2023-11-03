import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StaticNavContextProvider } from "./context/StaticNavContextProvider";
import { SideNavLightContextProvider } from "./context/SideNavLightContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StaticNavContextProvider>
      <SideNavLightContextProvider>
        <App />
      </SideNavLightContextProvider>
    </StaticNavContextProvider>
  </BrowserRouter>
);
