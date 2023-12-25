import { useEffect, useState } from "react";
import ProductListing from "../components/ProductListing/ProductListing";

const Products = ({ isDarkMode }) => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDate(json.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ProductListing isDarkMode={isDarkMode} products={data} key={data.id} />
    </div>
  );
};

export default Products;
