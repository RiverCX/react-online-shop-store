import { Products } from "./products";

export interface Filter {
  filtered_products: Products[] | [];
  all_products: Products[] | [];
  grid_view: boolean;
  sort: "price-lowest" | "price-highest" | "name-a" | "name-z";

  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
}
