export type Cart = {
  cart: CartItem[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
};

export type CartItem = {
  amount: number;
  color: string;
  id: string;
  image: string;
  max: number;
  name: string;
  price: number;
};
