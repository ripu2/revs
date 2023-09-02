import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SearchState } from "@components/types";
import { initialState } from "./SearchContext";
import { useReducer } from "react";

const reducer = {
  setManufacturer: function(
    state: SearchState,
    action: PayloadAction<string>
  ) {
    state.manufacturer = action.payload
  }
};

const slice = createSlice({
  initialState,
  name: "userBased",
  reducers: reducer
});

export const searchActions = slice.actions;

export function useSearchReducer() {
  const reducerInfo = useReducer(slice.reducer, initialState);
  return reducerInfo;
}
