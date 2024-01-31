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

  const { cartItems, setCartItems, itemQuantities, setItemQuantities } =
    useContext(CartContext);

  const addToCart = () => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      // Update quantity
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] + itemQuantities[id], // Use quantity from context
      }));
    } else {
      // Add new item
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { id, title, image, company, price, quantity: itemQuantities[id] || 1 }, // Use quantity from context
      ]);
    }
  };

  return (
    <div className="product-detail">
      <img src={image} alt={title} className="product-detail__image" />
      <div className="products-info">
        <h1 className="product-detail__title">{title}</h1>
        <h1 className="product-company__name">{company}</h1>
        <p className="product-detail__price"> ${price}</p>
        <p className="product-detail__desc">{description}</p>
        <span className="quantity">Quantity</span>
        <InputNumber
          min={1}
          value={itemQuantities}
          onChange={(value) => setItemQuantities(value)}
        />
        <span style={{}}>Amount</span>
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
