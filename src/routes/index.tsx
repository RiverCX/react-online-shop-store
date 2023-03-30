import { useRoutes } from "react-router";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
} from "pages";

export const useAppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
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
      element: <CheckoutPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return routes;
};
