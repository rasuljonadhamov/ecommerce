import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({}); // New state for quantities

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, itemQuantities, setItemQuantities }}
    >
      {children}
    </CartContext.Provider>
  );
};
