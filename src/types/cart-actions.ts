import { SingleProduct } from "./single-product";

export type CartActions =
  | {
      type: "ADD_TO_CART";
      payload: {
        product: Pick<SingleProduct, "name" | "images" | "price" | "stock">;
        amount: number;
        color: string;
        id: string;
      };
    }
  | {
      type: "REMOVE_CART_ITEM";
      payload: {
        id: string;
      };
    }
  | {
      type: "TOGGLE_CART_ITEM_AMOUNT";
      payload: { id: string; value: "inc" | "dec" };
    }
  | {
      type: "CLEAR_CART";
    }
  | {
      type: "COUNT_CART_TOTALS";
    };

export type addPayload = Extract<
  CartActions,
  { type: "ADD_TO_CART" }
>["payload"];
export type togglePayload = Extract<
  CartActions,
  { type: "TOGGLE_CART_ITEM_AMOUNT" }
>["payload"];

export type removePayload = Extract<
  CartActions,
  { type: "REMOVE_CART_ITEM" }
>["payload"];

export default CartActions;
