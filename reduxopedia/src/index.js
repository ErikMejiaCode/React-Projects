import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./App/Layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./App/Components/Counter";
import DestinationList from "./App/Components/DestinationList";
import DestinationFact from "./App/Components/DestinationFact";
import ResetApp from "./App/Components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success pb-4">Destination List</h4>
        <DestinationList />
        <DestinationFact />
      </div>
    </Provider>
  </div>
);
