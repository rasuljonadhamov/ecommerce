import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const Cart = ({ isDarkMode }) => {
  return (
    <div>
      <ShoppingCart isDarkMode={isDarkMode} />
    </div>
  );
};

export default Cart;
