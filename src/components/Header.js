import React, { useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [toggleLoginBtn, setToggleLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="food-logo"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>{`Online Status:${onlineStatus?"✅":"⭕"}`}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            toggleLoginBtn === "Login"
              ? setToggleLoginBtn("Logout")
              : setToggleLoginBtn("Login");
          }}
        >
          {toggleLoginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
