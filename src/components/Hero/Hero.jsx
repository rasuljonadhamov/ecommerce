import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";

function Hero(props) {
  const { isDarkMode } = props;
  console.log(isDarkMode);
  const images = [
    "https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp",
    "https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp",
    "https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp",
    "https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className={`${styles["hero-container"]} ${
        isDarkMode ? styles["dark-mode"] : styles["."]
      }`}
    >
      <div className={styles["left-side"]}>
        <h1 className={styles["hero-title"]}>
          We are changing the way people shop
        </h1>
        <p className={styles["hero-desc"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <Link to="/products" className={styles["link"]}>
          Our Products
        </Link>
      </div>
      <div className={styles["right-side"]}>
        <div className={styles["slider-container"]}>
          <Slider {...settings}>
            {images.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`slide-${index}`} className="image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
