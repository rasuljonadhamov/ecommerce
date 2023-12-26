import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./ShoppingCart.scss";

const ShoppingCart = ({ isDarkMode }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  console.log(cartItems);
  return (
    <div className={`shopping-cart ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Shopping Card</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul className="product-detail cart-wrapper">
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
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>Your cart is empty.</h2>
      )}
    </div>
  );
};

export default ShoppingCart;
