import { useState } from "react";
import "./ProductListing.scss";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductListing = ({ products, isDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { id, attributes } = products;

  function handleSearch(e) {
    console.log(products);

    const filtered = products.filter((product) =>
      product.attributes.title.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredProducts(filtered);
    console.log(filteredProducts);
  }

  return (
    <div className={`product-listing ${isDarkMode ? "dark-mode" : ""}`}>
      <div>
        <div className="search-wrapper">
          <label>Search Product</label>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button onClick={() => handleSearch(searchQuery)}>Search</button>
      </div>

      <div className="products">
        {(filteredProducts.length > 0 ? filteredProducts : products).map(
          (product) => (
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
          )
        )}
      </div>
    </div>
  );
};

export default ProductListing;
