import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
//let btnName = "Login";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              // btnName = "Logout";
              // console.log("btn", btnName);
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
