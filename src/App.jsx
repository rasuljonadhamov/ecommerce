import { useState } from "react";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductListing from "./components/ProductListing/ProductListing";

import "./index.scss";
import SearchInput from "./components/SearchInput/SearchInput";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

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

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term.target.value);
    console.log(searchTerm);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    console.log(filteredProducts);
  };

  const selectedProduct = products[0];
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <ProductListing products={products} />
      <ProductDetail product={selectedProduct} />
    </div>
  );
}

export default App;
