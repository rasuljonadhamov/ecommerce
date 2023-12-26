import { useEffect, useState } from "react";
import "./ProductListing.scss";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductListing = ({ json, products, isDarkMode }) => {
  console.log(json);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceQuery, setPriceQuery] = useState(1000);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5); // Number of products per page
  const [totalProducts, setTotalProducts] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const totalItems = totalProducts.meta?.total || 0;

  const totalPages = Math.ceil(totalItems / perPage);

  const { id, attributes } = products;

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

  useEffect(() => {
    if (json && json.data && json.meta) {
      setTotalProducts(json);
      setPaginatedProducts(json.data.slice(0, perPage));
    }
  }, [json, perPage]);

  const handlePagination = (pageNumber) => {
    const startIndex = (pageNumber - 1) * perPage;
    const endIndex = startIndex + perPage;
    setPaginatedProducts(totalProducts.data.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };

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

      <div className="search-wrapper">
        <label>Filter by Price: {priceQuery}$</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceQuery}
          onChange={(e) => setPriceQuery(e.target.value)}
        />
        <button onClick={handlePriceFilter}>Apply</button>
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
                <p>{product.attributes.price / 100} $</p>
              </div>
            </Link>
          )
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePagination(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
