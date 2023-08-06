import React, { useState } from "react";
import "./header.css";
import headerLogo from "../../images/header-logo.png";
import NavTab from "../NavTab/NavTab.jsx";
import headerBurger from "../../images/header-burger.svg";
import { Link } from "react-router-dom";

export default function Header() {
  // для переключения состояния хедера между лэндингом и мэйн-пэйдж необходимо поменять 'true' на 'false' в переменной 'auth'
  const [auth, setAuth] = useState(true);
  const [open, setOpen] = useState(false);
  return auth ? (
    <header className="header header_type_landing">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="логотип" to="/" />
      </Link>

      <ul className="header__nav-list">
        <li className="header__list-item">
          <Link className="header__nav-link link" to="/signup">
            Регистрация
          </Link>
        </li>
        <li className="header__link-login">
          <Link
            className="header__nav-link header__nav-link_active link"
            to="/signin"
          >
            Войти
          </Link>
        </li>
      </ul>
    </header>
  ) : (
    <header className="header header_type_main">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="логотип" to="/" />
      </Link>
      <div
        className={`header__navtab-container ${
          open ? "header__navtab-container_active" : ""
        }`}
      >
        <NavTab onClose={() => setOpen(false)} />
      </div>
      <button className="header__burger" onClick={() => setOpen(true)}>
        <img src={headerBurger} alt="" className="header__burger-icon" />
      </button>
    </header>
  );
}
