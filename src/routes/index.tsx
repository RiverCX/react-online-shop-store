import { useRoutes } from "react-router";
import {
  AboutPage,
  CartPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
  PrivateRoute,
  CheckoutPage,
} from "pages";
import { useAuth0 } from "@auth0/auth0-react";

export const useAppRoutes = () => {
  const { isAuthenticated } = useAuth0();
  const routes = useRoutes([
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
    {
      path: "/products/:productId/*",
      element: <SingleProductPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/checkout",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <CheckoutPage />
        </PrivateRoute>
      ),
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return routes;
};
