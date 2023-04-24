import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Layout/Header";
import DestinationIndex from "./Components/DestinationIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <DestinationIndex />
  </div>
);
