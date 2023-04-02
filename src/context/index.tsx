import { ReactNode } from "react";
import { CartProvider, useCartContext } from "./cart-context";
import { FilterProvider, useFilterContext } from "./filter-context";
import { ProductsProvider } from "./products-context";
import { useProductsContext } from "context/products-context";
import { useUserContext } from "context/user-context";
import { Auth0Provider } from "@auth0/auth0-react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN!}
      clientId={process.env.REACT_APP_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>{children}</CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </Auth0Provider>
  );
};

export default AppProvider;

export { useCartContext, useProductsContext, useUserContext, useFilterContext };
