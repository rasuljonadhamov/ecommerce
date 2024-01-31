import { useEffect, useState } from "react";
import ProductListing from "../components/ProductListing/ProductListing";
import { Pagination } from "antd";

const Products = ({ isDarkMode }) => {
  const [data, setDate] = useState([]);
  const [json, setJson] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://strapi-store-server.onrender.com/api/products?pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
        );
        const jsonLoc = await response.json();
        setDate(jsonLoc.data);
        setJson(jsonLoc);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [currentPage, pageSize]);
  return (
    <div
      className={
        isDarkMode ? " dark-mode products__content" : "  products__content"
      }
    >
      <div className="container">
        <ProductListing
          isDarkMode={isDarkMode}
          products={data.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )}
          key={data.id}
          json={json}
        />
        <Pagination
          defaultCurrent={currentPage}
          current={currentPage}
          pageSize={pageSize}
          total={json.total}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Products;
