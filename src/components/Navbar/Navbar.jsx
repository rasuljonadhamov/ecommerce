import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { RxSun } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import "./Navbar.scss";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className={isDarkMode ? "Navbar dark-mode" : "Navbar"}>
      <NavLink href="/" className="Logo">
        C
      </NavLink>
      <nav>
        <NavLink isDarkMode={isDarkMode} href="/">
          Home
        </NavLink>
        <NavLink isDarkMode={isDarkMode} href="/about">
          About
        </NavLink>
        <NavLink isDarkMode={isDarkMode} href="/products">
          Products
        </NavLink>
        <NavLink isDarkMode={isDarkMode} href="/cart">
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
        <NavLink href="/cart" className="cart-icon">
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
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
