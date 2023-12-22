import { useState } from "react";
import "./ProductListing.scss";

const ProductListing = ({ products }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`product-listing ${darkMode ? "dark-mode" : ""}`}>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={`${product.image}`} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
