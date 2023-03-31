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
      products_loading: false,
    };
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const products = action.payload;
    const featured_products = products.filter((product) => product.featured);
    return {
      ...state,
      featured_products,
      products,
      products_loading: false,
    };
  }

  if (action.type === "GET_SINGLE_PRODUCT_BEGIN")
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  if (action.type === "GET_SINGLE_PRODUCT_ERROR")
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false,
    };
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    const single_product = action.payload;

    return {
      ...state,
      single_product,
      single_product_loading: false,
      single_product_error: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
