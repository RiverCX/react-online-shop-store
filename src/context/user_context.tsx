import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext("");
export const UserProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContext.Provider value="user context">{children}</UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
