import { useLocation } from "react-router-dom";
import "./ProductDetail.scss";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

const ProductDetail = ({ isDarkMode }) => {
  const { state } = useLocation();
  const {
    attributes: { title, image, price, company, description },
  } = state.product;

  console.log(12, state.product);

  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = () => {
    const newItem = { title, image, company, price, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="product-detail">
      <img src={image} alt={title} className="product-detail__image" />
      <div className="products-info">
        <h1 className="product-detail__title">{title}</h1>
        <h1 className="product-company__name">{company}</h1>
        <p className="product-detail__price"> ${price}</p>
        <p className="product-detail__desc">{description}</p>
        <span>Amount</span>
        <div className="add__to--cart">
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
