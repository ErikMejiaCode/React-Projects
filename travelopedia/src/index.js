import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import DestinationIndex from "./Components/DestinationIndex";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { destinationApi } from "./api/destinationApi";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <Header />
      <DestinationIndex />
    </Provider>
  </div>
);
