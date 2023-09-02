import React, { useContext } from "react";

import { DefaultContext } from "@utils/types";
import { SearchState } from "../types";

export const initialState: SearchState = {
  manufacturer: '',
  setManufacturer: () => {}
};

const defaultVal: DefaultContext<SearchState> = {
  state: initialState,
  dispatch: null
};

export const SearchContext = React.createContext(defaultVal);

export function useSearchContext() {
  return useContext(SearchContext);
}
