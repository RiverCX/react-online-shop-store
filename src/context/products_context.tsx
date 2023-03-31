import axios from "axios";
import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import reducer from "reducers/products_reducer";
import { products_url as url } from "utils/constants";
import { ProductsData } from "types/products-data";
import { Products } from "types/products";

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
    })
  | undefined
>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // sidebar in small screen device
  const openSidebar = () => dispatch({ type: "SIDEBAR_OPEN" });
  const closeSidebar = () => dispatch({ type: "SIDEBAR_CLOSE" });

  // fetching products
  const fetchProjects = () => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    axios
      .get(url)
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

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProductsDisplayContext.Provider
      value={{ ...state, openSidebar, closeSidebar }}
    >
      {children}
    </ProductsDisplayContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsDisplayContext);
};
