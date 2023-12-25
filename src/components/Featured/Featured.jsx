import "./Featured.scss";

const Featured = ({ isDarkMode }) => {
  function Card({ imageUrl, title, price }) {
    return (
      <div className={`card ${isDarkMode ? "dark-mode" : ""}`}>
        <img src={imageUrl} alt={title} className="cards-image" />
        <p className="card-title">{title}</p>
        <p className="card-price">{price}</p>
      </div>
    );
  }

  const cards = [
    {
      imageUrl:
        "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Avant-Garde Lamp",
      price: "$179.99",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Coffe Table",
      price: "$179.99",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Comfy Bad",
      price: "$129.99",
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
