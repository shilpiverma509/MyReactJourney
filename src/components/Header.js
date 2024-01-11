import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
//let btnName = "Login";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  console.log("data", data);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg bg-pink-50 sm:bg-yellow-50">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status :{onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4">
            <Link to="/cart">Cart</Link>
            Cart
          </li>
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
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
