import { useState } from "react";
import PriceFilter from "../PriceFilter/PriceFilter";
import ProductList from "../ProductList/ProductList";
import "./ProductListing.scss";
import { Input, Select } from "antd";

const ProductListing = ({ json, products, isDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceQuery, setPriceQuery] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "tables", "chairs", "kids", "sofas", "beds"];

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

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className={`product-listing ${isDarkMode ? "dark-mode" : ""}`}>
      <Input.Search
        placeholder="Search"
        style={{ width: 250, marginRight: 10, marginBottom: 20 }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <Select
        defaultValue="all"
        style={{ width: 120 }}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <Select.Option key={category} value={category}>
            {category}
          </Select.Option>
        ))}
      </Select>
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
