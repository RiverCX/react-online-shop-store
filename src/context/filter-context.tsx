import React, { useEffect, useContext, useReducer, ReactNode } from "react";
import { Filter } from "types/filter";
import { useProductsContext } from "./products-context";
import reducer from "reducers/filter-reducer";

const initialFilter = {
  text: "",
  company: "all",
  category: "all",
  color: "all",
  min_price: 0,
  max_price: 0,
  price: 0,
  shipping: false,
};

const initialState: Filter = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: initialFilter,
};

const FilterContext = React.createContext<
  | (Filter & {
      setGridView: () => void;
      setListView: () => void;
      clearFilters: () => void;
      updateSort: (sort: Filter["sort"]) => void;
      updateFilter: (filter: Partial<Filter["filters"]>) => void;
    })
  | undefined
>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  const setGridView = () => dispatch({ type: "SET_GRIDVIEW" });
  const setListView = () => dispatch({ type: "SET_LISTVIEW" });
  const clearFilters = () => dispatch({ type: "CLEAR_FILTERS" });
  const updateSort = (sort: Filter["sort"]) =>
    dispatch({ type: "UPDATE_SORT", payload: sort });

  const updateFilter = (filter: Partial<Filter["filters"]>) => {
    dispatch({ type: "UPDATE_FILTERS", payload: filter });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products || [] });
  }, [products]);

  useEffect(() => {
    // filter first, then sort
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.filters, state.sort]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        clearFilters,
        setGridView,
        setListView,
        updateSort,
        updateFilter,
      }}
      children={children}
    />
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("Not in FilterContext");
  }
  return context;
};
