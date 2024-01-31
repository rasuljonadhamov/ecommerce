import { useLocation } from "react-router-dom";
import "./ProductDetail.scss";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { Button, InputNumber } from "antd";

const ProductDetail = ({ isDarkMode }) => {
  const { state } = useLocation();

  const {
    attributes: { id, title, image, price, company, description },
  } = state.product;

  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = () => {
    const newItem = { title, image, company, price, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="product-detail container">
      <img src={image} alt={title} className="product-detail__image" />
      <div className="products-info">
        <h1 className="product-detail__title">{title}</h1>
        <h1 className="product-company__name">{company}</h1>
        <p className="product-detail__price"> ${price}</p>
        <p className="product-detail__desc">{description}</p>

        <div className="add__to--cart">
          <Button type="primary" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
