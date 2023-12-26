import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductItem = ({ product }) => {
  return (
    <Link
      to="/productDetails"
      element={<ProductDetail />}
      state={{ product }}
      key={product.attributes.createdAt}
      className="product-item"
    >
      <img src={`${product.attributes.image}`} alt={product.name} />
      <div className="product-details">
        <h3>{product.attributes.title}</h3>
        <p>{product.attributes.price / 100} $</p>
      </div>
    </Link>
  );
};

export default ProductItem;
