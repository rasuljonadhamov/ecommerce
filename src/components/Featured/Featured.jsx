import "./Featured.scss";

const Featured = ({ isDarkMode }) => {
  function Card({ imageUrl, title, price }) {
    return (
      <div className={`card ${isDarkMode ? "dark-mode" : ""}`}>
        <img src={imageUrl} alt={title} />
        <p className="card-title">{title}</p>
        <p className="card-price">{price}</p>
      </div>
    );
  }

  const cards = [
    {
      imageUrl: "your-image-url-1.jpg",
      title: "Product 1",
      price: "$19.99",
    },
    {
      imageUrl: "your-image-url-2.jpg",
      title: "Product 2",
      price: "$29.99",
    },
    {
      imageUrl: "your-image-url-3.jpg",
      title: "Product 3",
      price: "$39.99",
    },
  ];

  return (
    <div
      className={
        isDarkMode ? "featured-products dark-mode" : "featured-products"
      }
    >
      <h1>Featured Products</h1>
      <hr />

      <div className="card-image-container">
        <div className="card-wrapper">
          {cards.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
