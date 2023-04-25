import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import DestinationIndex from "./Components/DestinationIndex";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { destinationApi } from "./api/destinationApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ApiProvider api={destinationApi}>
      <Header />
      <DestinationIndex />
    </ApiProvider>
  </div>
);
