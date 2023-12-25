import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./ShoppingCart.scss";

const ShoppingCart = ({ isDarkMode }) => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className={`shopping-cart ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Shopping Card</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul className="product-detail">
            {cartItems.map((item) => (
              <li key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-detail__image"
                />
                <h1 className="product-company__name">{item.title}</h1>
                <h1 className="product-company__name">{item.company}</h1>
                <p className="product-detail__price"> ${item.price} </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
