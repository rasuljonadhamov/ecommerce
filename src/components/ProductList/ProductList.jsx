import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ filteredProducts, products }) => {
  return (
    <div className="products">
      {(filteredProducts.length > 0 ? filteredProducts : products).map(
        (product) => (
          <ProductItem key={product.attributes.createdAt} product={product} />
        )
      )}
    </div>
  );
};

export default ProductList;
