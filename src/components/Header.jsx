import React from "react";
import "../index.css";
import logo from "../images/headerLogo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
    </header>
  );
}

export default Header;
