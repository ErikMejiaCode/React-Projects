import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import ContactIndex from "./Components/ContactPages/ContactIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <ContactIndex />
    </div>
  </React.StrictMode>
);
