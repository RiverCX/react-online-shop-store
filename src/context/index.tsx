import { ReactNode } from "react";
import { CartProvider, useCartContext } from "./cart-context";
import { FilterProvider, useFilterContext } from "./filter-context";
import { ProductsProvider } from "./products-context";
import { useProductsContext } from "context/products-context";
import { useUserContext } from "context/user-context";

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
