import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    //We will fill reducer later
  },
});

console.log(store.getState());
