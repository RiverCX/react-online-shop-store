import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export const PrivateRoute = ({
  children,
  isAuthenticated,
}: {
  children: ReactNode;
  isAuthenticated: boolean;
}) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};
