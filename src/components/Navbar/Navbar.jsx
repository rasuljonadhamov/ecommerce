import { useState } from "react";
import { RxSun } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import "./Navbar.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="navbar-container">
      <div className={isDarkMode ? "Navbar dark-mode" : "Navbar"}>
        <Link to="/" className="Logo">
          C
        </Link>
        <nav>
          <Link className={isDarkMode ? "NavLink dark-mode" : "NavLink"} to="/">
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
              <FaCartShopping
                onClick={() => setIsDarkMode(!isDarkMode)}
                color={isDarkMode ? "white" : "currentColor"}
              />
            ) : (
              <FaShoppingCart
                color={isDarkMode ? "white" : "currentColor"}
                onClick={() => setIsDarkMode(!isDarkMode)}
                isDarkMode={isDarkMode}
              />
            )}
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
