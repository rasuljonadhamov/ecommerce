import { useContext } from "react";
import { RxSun } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
// import { signOutUser } from "../../Utilities/Firebase";

import "./Navbar.scss";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { UserContext } from "../../Contexts/user.contexts";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const { cartItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  return (
    <div className="wrap">
      <div className={isDarkMode ? "auth-wrapper dark-mode" : "auth-wrapper"}>
        {currentUser ? (
          <Link
            className={isDarkMode ? "links dark-mode" : "links"}
            onClick={ () => {
              //  signOutUser
              console.log("dw"); 
              }
              }
          >
            SIGN OUT
          </Link>
        ) : (
          <Link to="/auth" className={isDarkMode ? "links dark-mode" : "links"}>
            SIGN IN
          </Link>
        )}
        <Link to="/" className={isDarkMode ? "links dark-mode" : "links"}>
          Guest
        </Link>
        <Link to="/auth" className={isDarkMode ? "links dark-mode" : "links"}>
          Create Account
        </Link>
      </div>
      <div className="navbar-container">
        <div className={isDarkMode ? "Navbar dark-mode" : "Navbar"}>
          <Link to="/" className={isDarkMode ? "Logo dark-mode" : "Logo"}>
            C
          </Link>
          <nav>
            <Link
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/"
            >
              Home
            </Link>
            <Link
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/about"
            >
              About
            </Link>
            <Link
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/products"
            >
              Products
            </Link>
            <Link
              className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
              to="/cart"
            >
              Cart
            </Link>
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
              <span className="cart-count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
