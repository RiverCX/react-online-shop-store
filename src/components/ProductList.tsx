import { useFilterContext } from "context/filter-context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { grid_view, filtered_products: products } = useFilterContext();

  if (!products)
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search.
      </h5>
    );

  if (grid_view) return <GridView products={products} />;

  return <ListView products={products} />;
};

export default ProductList;
