import { useEffect, useState } from "react";
import "./Featured.scss";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductItem from "../ProductItem/ProductItem";

const Featured = ({ isDarkMode }) => {
  function Card({ imageUrl, title, price }) {
    return (
      <Link
        element={<ProductDetail />}
        to="/productDetails"
        className={`card ${isDarkMode ? "dark-mode" : ""}`}
      >
        <img src={imageUrl} alt={title} className="cards-image" />
        <p className="card-title">{title}</p>
        <p className="card-price">{price}</p>
      </Link>
    );
  }

  const cards = [
    {
      imageUrl:
        "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Avant-Garde Lamp",
      price: "$179.99",
      company: "Modenza",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Coffe Table",
      price: "$179.99",
      company: "Modenza",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Comfy Bad",
      price: "$129.99",
      company: "Homestead",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
  ];

  const [data, setDate] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((jsonLoc) => {
        setDate(jsonLoc.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={
        isDarkMode ? "featured__content dark-mode" : "featured__content"
      }
    >
      <div
        className={
          isDarkMode
            ? "featured-products container dark-mode"
            : "featured-products container"
        }
      >
        <h1>Featured Products</h1>
        <hr />

        <div className="card-image-container">
          <div className="card-wrapper">
            {data &&
              data.map((productt, index) => (
                <div className="card-wrap" key={index}>
                  <ProductItem key={index} product={productt} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
