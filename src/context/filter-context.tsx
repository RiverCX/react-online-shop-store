import React, { useEffect, useContext, useReducer, ReactNode } from "react";
import reducer from "../reducers/filter-reducer";
import { useProductsContext } from "./products-context";

const initialState = {};

const FilterContext = React.createContext("");

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
