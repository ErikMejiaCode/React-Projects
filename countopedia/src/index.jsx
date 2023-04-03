import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Counter from "./Counter";
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Counter />
    </div>
  </React.StrictMode>
);
