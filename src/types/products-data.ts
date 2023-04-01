import { Products } from "./products";
import { SingleProduct } from "./single-product";

export interface ProductsData {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products?: Products[];
  featured_products?: Products[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product?: SingleProduct;
}
