import { Filter } from "./filter";
import { Products } from "./products";

export type FilterActions =
  | {
      type: "LOAD_PRODUCTS";
      payload: Products[];
    }
  | {
      type:
        | "SET_GRIDVIEW"
        | "SET_LISTVIEW"
        | "SORT_PRODUCTS"
        | "FILTER_PRODUCTS"
        | "CLEAR_FILTERS";
    }
  | {
      type: "UPDATE_SORT";
      payload: Filter["sort"];
    }
  | {
      type: "UPDATE_FILTERS";
      payload: Partial<Filter["filters"]>;
    };
