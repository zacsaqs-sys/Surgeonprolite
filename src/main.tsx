import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// 🔥 PROOF: if you don’t see HOTPINK + badge, you're NOT running this project
document.documentElement.style.background = "hotpink";
document.body.style.background = "hotpink";
document.body.style.margin = "0";

const badge = document.createElement("div");
badge.style.position = "fixed";
badge.style.top = "10px";
badge.style.left = "10px";
badge.style.zIndex = "999999";
badge.style.background = "red";
badge.style.color = "white";
badge.style.padding = "6px 10px";
badge.style.borderRadius = "10px";
badge.style.fontWeight = "800";
badge.style.fontSize = "12px";
document.body.appendChild(badge);

// ✅ global css MUST be imported here
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);