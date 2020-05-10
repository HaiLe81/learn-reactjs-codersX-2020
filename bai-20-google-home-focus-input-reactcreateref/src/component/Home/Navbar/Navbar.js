import React from "react";
import "./Navbar.css";
import Logo from "../../../Images/avatar.jpg";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="content">
        <div className="gmail">
          <a href="/">Gmail</a>
        </div>
        <div className="image">
          <a href="/">Image</a>
        </div>
        <div className="subMenu">{/* <a href="/" /> */}</div>
        <div className="account">
          <img src={Logo} alt="Not Found" />
        </div>
      </div>
    </div>
  );
}
