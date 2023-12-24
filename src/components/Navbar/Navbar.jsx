import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { RxSun } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.scss";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <FaCartShopping />
          <span className="cart-count">0</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
