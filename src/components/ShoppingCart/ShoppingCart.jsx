import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./ShoppingCart.scss";
import { Button } from "antd";

const ShoppingCart = ({ isDarkMode }) => {
  const { cartItems, setCartItems, setItemQuantities } =
    useContext(CartContext);

  // const removeFromCart = (id) => {
  //   const updatedCart = cartItems.filter((item) => item.id !== id);
  //   setCartItems(updatedCart);
  // };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    // Also update the quantity state when removing an item
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[id];
      return updatedQuantities;
    });
  };

  console.log(cartItems);
  return (
    <div className={`shopping-cart ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Shopping Card</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul className="product-detail cart-wrapper">
            {cartItems.map((item) => (
              <li key={item.title} className="one__product">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-detail__image cart__image"
                />
                <h1 className="product-company__name">{item.title}</h1>
                <h1 className="product-company__name">{item.company}</h1>
                <p className="product-detail__price"> ${item.price} </p>
                <p className="product-detail__quantity">
                  Quantity: {item.quantity}
                </p>
                <Button type="primary" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
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
