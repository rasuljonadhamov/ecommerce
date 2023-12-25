import ProductDetail from "../components/ProductDetail/ProductDetail";

const Details = ({ isDarkMode, ...props }) => {
  return (
    <div>
      <ProductDetail
        {...props}
        product={{
          name: "hello",
          price: "300$",
          image:
            "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
        }}
      />
    </div>
  );
};

export default Details;
