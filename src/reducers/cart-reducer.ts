import { Cart } from "types/cart";
import { CartActions } from "types/cart-actions";

export const cart_reducer = (state: Cart, action: CartActions): Cart => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;
    const findItem = state.cart.find((item) => item.id === id + color);
    if (findItem) {
      const cart = state.cart.map((item) => {
        if (item.id === id + color) {
          const newAmount = amount + item.amount;
          return {
            ...item,
            amount: newAmount <= item.max ? newAmount : item.max,
          };
        }
        return item;
      });
      return { ...state, cart: cart };
    } else {
      const { id, name, images, price, stock } = product;
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: id + color,
            name,
            color,
            amount,
            price,
            max: stock,
            image: images[0].url,
          },
        ],
      };
    }
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const removeId = action.payload.id;
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== removeId),
    };
  }

  if (action.type === "CLEAR_CART")
    return {
      ...state,
      cart: [],
    };

  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { id, value } = action.payload;
    const cart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = value === "inc" ? item.amount + 1 : item.amount - 1;
        if (newAmount < 1) newAmount = 1;
        if (newAmount > item.max) newAmount = item.max;
        return {
          ...item,
          amount: newAmount,
        };
      }
      return item;
    });
    return { ...state, cart };
  }

  if (action.type === "COUNT_CART_TOTALS") {
    const totals = state.cart.reduce(
      (totals, item) => {
        return {
          total_items: totals.total_items + item.amount,
          total_amount: totals.total_amount + item.amount * item.price,
        };
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, ...totals };
  }

  throw new Error(`No Matching "${action}" - action type`);
};

export default cart_reducer;
