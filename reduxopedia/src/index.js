import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./App/Layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./App/Components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Provider store={store}>
      <Header />
      <Counter />
    </Provider>
  </div>
);
