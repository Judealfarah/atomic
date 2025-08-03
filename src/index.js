import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import AppV1 from "./AppV1";
import AppV2 from "./AppV2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppV1 /> */}
    <AppV2 />
  </React.StrictMode>
);
