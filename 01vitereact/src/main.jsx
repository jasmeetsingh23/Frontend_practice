// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import ReactDom from "react-dom/client";
// import {jsx as _jsx} from "react/jsx-runtime.js";

function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  );
}

const anotherUser = "chai aur react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google",
  anotherElement
);

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

ReactDom.createRoot(document.getElementById("root")).render(reactElement);
