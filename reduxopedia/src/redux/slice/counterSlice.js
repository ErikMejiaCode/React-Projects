import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxOPedia } from "../action/actions";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //here we will define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    // resetCount: (state) => {
    //   state.count = initialState.count;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia.toString(), (state, action) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
