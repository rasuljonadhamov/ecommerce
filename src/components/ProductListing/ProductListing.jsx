import { useState } from "react";
import "./ProductListing.scss";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductListing = ({ products, isDarkMode }) => {
  const { id, attributes } = products;
  // console.log(products);
  return (
    <div className={`product-listing ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="products">
        {products.map((product) => (
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
              <p>{product.attributes.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
