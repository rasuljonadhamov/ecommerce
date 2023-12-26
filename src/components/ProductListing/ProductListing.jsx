import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PriceFilter from "../PriceFilter/PriceFilter";
import ProductList from "../ProductList/ProductList";
import "./ProductListing.scss";

const ProductListing = ({ json, products, isDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceQuery, setPriceQuery] = useState(1000);

  function handleSearch(e) {
    console.log(products);

    const filtered = products.filter((product) =>
      product.attributes.title.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredProducts(filtered);
    console.log(filteredProducts);
  }

  const handlePriceFilter = () => {
    const filtered = products.filter(
      (product) =>
        parseFloat(product.attributes.price / 100) <= parseFloat(priceQuery)
    );
    setFilteredProducts(filtered);
    console.log(39, filteredProducts);
  };

  return (
    <div className={`product-listing ${isDarkMode ? "dark-mode" : ""}`}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <PriceFilter
        priceQuery={priceQuery}
        setPriceQuery={setPriceQuery}
        handlePriceFilter={handlePriceFilter}
      />
      <ProductList filteredProducts={filteredProducts} products={products} />
    </div>
  );
};

export default ProductListing;
