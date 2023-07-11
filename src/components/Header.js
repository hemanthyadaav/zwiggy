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
      <div className="fixed top-0 right-0  left-0 bg-indigo-500 flex justify-between px-8 py-2 shadow-md">
        <Logo />
        <div>
          <ul className="flex py-5 px-10 text-white font-semibold">
            <li className="px-2 hover:bg-indigo-900 hover:text-white hover:rounded-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* <button onClick={toggleLoginButton}>
          {isLoggedIn ? "Logout" : "Login"}
        </button> */}
      </div>
    </>
  );
};

export default Header;
