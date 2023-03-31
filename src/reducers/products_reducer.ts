import { ProductsActions } from "types/products-actions";
import { ProductsData } from "types/products-data";

const products_reducer = (
  state: ProductsData,
  action: ProductsActions
): ProductsData => {
  if (action.type === "SIDEBAR_OPEN")
    return {
      ...state,
      isSidebarOpen: true,
    };
  if (action.type === "SIDEBAR_CLOSE")
    return {
      ...state,
      isSidebarOpen: false,
    };
  if (action.type === "GET_PRODUCTS_BEGIN")
    return {
      ...state,
      products_loading: true,
    };
  if (action.type === "GET_PRODUCTS_ERROR")
    return {
      ...state,
      products_error: true,
    };
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const products = action.payload;
    return {
      ...state,
      products,
    };
  }

  if (action.type === "GET_SINGLE_PRODUCT_BEGIN")
    return {
      ...state,
      single_product_loading: true,
    };
  if (action.type === "GET_SINGLE_PRODUCT_ERROR")
    return {
      ...state,
      single_product_error: true,
    };
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    const single_product = action.payload;

    return {
      ...state,
      single_product,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
