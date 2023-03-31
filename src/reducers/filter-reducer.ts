import { Filter } from "types/filter";
import { FilterActions } from "types/filter-actions";

const filter_reducer = (
  state: Filter,
  action: {
    type: FilterActions;
    payload?: Filter;
  }
) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
