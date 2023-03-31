import axios from "axios";
import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import reducer from "reducers/products-reducer";
import { products_url, single_product_url } from "utils/constants";
import { ProductsData } from "types/products-data";
import { Products } from "types/products";
import { SingleProduct } from "types/single-product";

// context of fetching products

const initialState: ProductsData = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsDisplayContext = React.createContext<
  | (ProductsData & {
      openSidebar: () => void;
      closeSidebar: () => void;
      fetchSingleProduct: (id: string) => void;
    })
  | undefined
>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // sidebar in small screen device
  const openSidebar = () => dispatch({ type: "SIDEBAR_OPEN" });
  const closeSidebar = () => dispatch({ type: "SIDEBAR_CLOSE" });

  // fetching products
  const fetchProducts = () => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    axios
      .get(products_url)
      .then((response) => {
        return response.data as Products[];
      })
      .then((products) =>
        dispatch({
          type: "GET_PRODUCTS_SUCCESS",
          payload: products,
        })
      )
      .catch((error) => {
        dispatch({
          type: "GET_PRODUCTS_ERROR",
        });
      });
  };

  // fetching products
  const fetchSingleProduct = (id: string) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    axios
      .get(`${single_product_url}${id}`)
      .then((response) => {
        return response.data as SingleProduct;
      })
      .then((product) =>
        dispatch({
          type: "GET_SINGLE_PRODUCT_SUCCESS",
          payload: product,
        })
      )
      .catch((error) => {
        dispatch({
          type: "GET_SINGLE_PRODUCT_ERROR",
        });
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsDisplayContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
      children={children}
    />
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsDisplayContext);
  if (!context) {
    throw new Error("Not in ProductsDisplayContext");
  }
  return context;
};
