import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginButton = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div className="header">
        <Logo />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <button onClick={toggleLoginButton}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default Header;
