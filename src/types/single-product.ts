// single_product_url 返回类型 SingleProduct

export interface SingleProduct {
  category: string;
  colors: string[];
  company: string;
  description: string;
  id: string;
  images: ProductImage[];
  name: string;
  price: number;
  shipping: boolean;
  reviews: number;
  stars: number;
  stock: number;
}

export interface ProductImage {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    small: { url: string; width: number; height: number };
    full: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
  };
  type: string;
  url: string;
  width: number;
}
