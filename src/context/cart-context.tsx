import React, { useContext, useReducer, ReactNode, useEffect } from "react";
import reducer from "reducers/cart-reducer";
import { addPayload, removePayload, togglePayload } from "types/cart-actions";
import { Cart, CartItem } from "types/cart";

const LOCAL_STORAGE_KEY = "cart";
const getCartFromLocal = (): CartItem[] => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
};

const initialState: Cart = {
  cart: getCartFromLocal(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext<
  | (Cart & {
      addCart: (param: addPayload) => void;
      removeCart: (param: removePayload) => void;
      clearCart: () => void;
      toggleCart: (param: togglePayload) => void;
      countCart: () => void;
    })
  | undefined
>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCart = (param: addPayload) =>
    dispatch({ type: "ADD_TO_CART", payload: param });
  const removeCart = (param: removePayload) =>
    dispatch({ type: "REMOVE_CART_ITEM", payload: param });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const toggleCart = (param: togglePayload) =>
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: param });
  const countCart = () => dispatch({ type: "COUNT_CART_TOTALS" });

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addCart,
        removeCart,
        clearCart,
        toggleCart,
        countCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Not in CartContext");
  }
  return context;
};
