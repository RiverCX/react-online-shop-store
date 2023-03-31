import { Products } from "./products";
import { SingleProduct } from "types/single-product";

export type ProductsActions =
  | {
      type:
        | "GET_PRODUCTS_BEGIN"
        | "GET_PRODUCTS_ERROR"
        | "GET_SINGLE_PRODUCT_BEGIN"
        | "GET_SINGLE_PRODUCT_ERROR"
        | "SIDEBAR_OPEN"
        | "SIDEBAR_CLOSE";
    }
  | {
      type: "GET_PRODUCTS_SUCCESS";
      payload: Products[];
    }
  | {
      type: "GET_SINGLE_PRODUCT_SUCCESS";
      payload: SingleProduct;
    };

export default ProductsActions;
