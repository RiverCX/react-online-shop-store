import { ReactNode } from "react";
import { CartProvider, useCartContext } from "./cart_context";
import { FilterProvider, useFilterContext } from "./filter_context";
import { ProductsProvider } from "./products_context";
import { useProductsContext } from "context/products_context";
import { useUserContext } from "context/user_context";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>{children}</CartProvider>
      </FilterProvider>
    </ProductsProvider>
  );
};

export default AppProvider;

export { useCartContext, useProductsContext, useUserContext, useFilterContext };
