import React from "react";
import logo from "../images/logo.svg";

function Header(props, { email }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип заголовка"/>
      {props.children}
      <button className="header__button" onClick={props.onClick}>{email}</button>
    </header>
  );
}

export default Header;