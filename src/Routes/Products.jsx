import { useEffect, useState } from "react";
import ProductListing from "../components/ProductListing/ProductListing";

const Products = ({ isDarkMode }) => {
  const [data, setDate] = useState([]);
  const [json, setJson] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((jsonLoc) => {
        setDate(jsonLoc.data);
        setJson(jsonLoc);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className={
        isDarkMode ? " dark-mode products__content" : "  products__content"
      }
    >
      <div className="container">
        
        <ProductListing
          isDarkMode={isDarkMode}
          products={data}
          key={data.id}
          json={json}
        />
      </div>
    </div>
  );
};

export default Products;
