import { useState } from "react";
import "./Navbar.scss";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="navbar-brand">Your Logo</div>
      <div className="navbar-links">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <button className="nav-button">Services</button>
        <button className="nav-button">Contact</button>
        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">0</span>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
