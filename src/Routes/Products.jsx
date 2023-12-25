import { useEffect, useState } from "react";
import ProductListing from "../components/ProductListing/ProductListing";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$24.99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$14.99",
    image: "https://via.placeholder.com/300",
  },
];
const Products = ({ isDarkMode }) => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
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
