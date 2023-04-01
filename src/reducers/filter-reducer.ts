import { Filter } from "types/filter";
import { FilterActions } from "types/filter-actions";

const filter_reducer = (state: Filter, action: FilterActions): Filter => {
  if (action.type === "LOAD_PRODUCTS") {
    const projects = action.payload;
    const prices = projects.map((p) => p.price);
    const max_price = Math.max(...prices);
    return {
      ...state,
      filters: { ...state.filters, max_price, price: max_price }, // 更新filter
      all_products: [...projects],
      filtered_products: [...projects],
    };
  }
  if (action.type === "SET_GRIDVIEW")
    return {
      ...state,
      grid_view: true,
    };
  if (action.type === "SET_LISTVIEW")
    return {
      ...state,
      grid_view: false,
    };

  if (action.type === "CLEAR_FILTERS")
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };

  if (action.type === "UPDATE_SORT")
    return {
      ...state,
      sort: action.payload,
    };

  if (action.type === "SORT_PRODUCTS") {
    let temp = [...state.filtered_products];
    if (state.sort === "name-a")
      temp = state.filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    if (state.sort === "name-z")
      temp = state.filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    if (state.sort === "price-highest")
      temp = state.filtered_products.sort((a, b) => b.price - a.price);
    if (state.sort === "price-lowest")
      temp = state.filtered_products.sort((a, b) => a.price - b.price);
    return {
      ...state,
      filtered_products: temp || [],
    };
  }

  if (action.type === "UPDATE_FILTERS") {
    const filters = { ...state.filters, ...action.payload };
    return {
      ...state,
      filters,
    };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { text, company, category, color, max_price, price, shipping } =
      state.filters;
    let temp = [...state.all_products];
    // 逐步过滤
    if (text)
      temp = temp.filter((product) => {
        return product.name.includes(text.toLowerCase());
      });
    if (category !== "all")
      temp = temp.filter((product) => {
        return product.category === category;
      });
    if (company !== "all")
      temp = temp.filter((product) => {
        return product.company === company;
      });
    if (price !== max_price)
      temp = temp.filter((product) => {
        return product.price <= price;
      });
    if (color !== "all")
      temp = temp.filter((product) => {
        return product.colors.includes(color);
      });
    if (shipping)
      temp = temp.filter((product) => {
        return product.shipping;
      });

    return {
      ...state,
      filtered_products: temp,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
