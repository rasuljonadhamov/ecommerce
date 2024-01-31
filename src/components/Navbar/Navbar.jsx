import { useContext } from "react";
import { RxSun } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
// import { signOutUser } from "../../Utilities/Firebase";

import "./Navbar.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { UserContext } from "../../Contexts/user.contexts";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const { cartItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="wrap">
      <div className={isDarkMode ? "top__side dark-mode" : "top__side"}>
        <div
          className={
            isDarkMode
              ? "auth-wrapper dark-mode container"
              : "auth-wrapper container"
          }
        >
          {currentUser ? (
            <NavLink
              className={isDarkMode ? "links dark-mode" : "links"}
              onClick={() => {
                //  signOutUser
                console.log("dw");
              }}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink
              to="/auth"
              className={isDarkMode ? "links dark-mode" : "links"}
            >
              SIGN IN
            </NavLink>
          )}
          <NavLink to="/" className={isDarkMode ? "links dark-mode" : "links"}>
            Guest
          </NavLink>
          <NavLink
            to="/auth"
            className={isDarkMode ? "links dark-mode" : "links"}
          >
            Create Account
          </NavLink>
        </div>
      </div>
      <div
        className={
          isDarkMode ? " dark-mode navbar-container" : "navbar-container "
        }
      >
        <div
          className={
            isDarkMode ? "Navbar dark-mode container" : "Navbar container"
          }
        >
          <NavLink to="/" className={isDarkMode ? "Logo dark-mode" : "Logo"}>
            C
          </NavLink>
          <nav>
            <NavLink
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/cart"
            >
              Cart
            </NavLink>
          </nav>
          <div className="right-side">
            {isDarkMode ? (
              <RxSun
                onClick={() => setIsDarkMode(!isDarkMode)}
                color={isDarkMode ? "white" : "currentColor"}
              />
            ) : (
              <FaRegMoon
                color={isDarkMode ? "white" : "currentColor"}
                onClick={() => setIsDarkMode(!isDarkMode)}
                isDarkMode={isDarkMode}
              />
            )}
            <Link to="/cart" className="cart-icon">
              {isDarkMode ? (
                <FaCartShopping color={isDarkMode ? "white" : "currentColor"} />
              ) : (
                <FaShoppingCart color={isDarkMode ? "white" : "currentColor"} />
              )}
              <span className="cart-count">{totalQuantity}</span>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
