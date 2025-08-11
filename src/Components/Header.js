import React from "react";
import { LOGO_URL } from "./utils/constants";
import Loginout from "./Loginout";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Loginout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
