import "./Header.scss";
import { FaCartShopping } from "react-icons/fa6";
import { WiDaySunny } from "react-icons/wi";

const Header = () => {
  return (
    <div className="header">
      <h1>Logo</h1>
      <ul>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="right">
        <button>Login</button>
        <button>
          <WiDaySunny />
        </button>
        <div className="shop">
          <FaCartShopping />
        </div>
      </div>
    </div>
  );
};

export default Header;
