import React from "react";
import "./navTab.css";
import profileIcon from "../../images/profile-icon.svg";
import { Link } from "react-router-dom";

export default function NavTab({ onClose }) {
  return window.innerWidth > 768 ? (
    <nav className="navtab">
      <ul className="header__nav-list_type_main">
        <li className="header__list-item header__list-item_type_main">
          <Link
            className="header__nav-link header__nav-link_type_main header__nav-link_type_main-active link"
            to="/movies"
          >
            Фильмы
          </Link>
        </li>
        <li className="header__list-item header__list-item_type_main">
          <Link
            className="header__nav-link header__nav-link_type_main link"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </li>
        <li className="header__list-item header__list-item_type_main">
          <div className="header__nav-link-wrapper">
            <Link
              className="header__nav-link header__nav-link_type_profile link"
              to="/profile"
            >
              Аккаунт
            </Link>
            <img src={profileIcon} alt="" className="header__nav-link-image" />
          </div>
        </li>
      </ul>
    </nav>
  ) : (
    <div className="nav-overlay">
      <div className="nav-wrapper"></div>
      <nav className="navtab-burger">
        <button
          className="burger__close-button"
          onClick={() => onClose()}
        ></button>
        <ul className="header__nav-list_type_main-burger">
          <li className="header__list-item-burger header__list-item_type_main-burger">
            <Link
              className="header__nav-link-burger header__nav-link_type_main-burger link"
              to="/"
            >
              Главная
            </Link>
          </li>
          <li className="header__list-item-burger header__list-item_type_main-burger">
            <Link
              className="header__nav-link-burger header__nav-link_type_main-burger header__nav-link_type_main-active-burger link"
              to="/movies"
            >
              Фильмы
            </Link>
          </li>
          <li className="header__list-item-burger header__list-item_type_main-burger">
            <Link
              className="header__nav-link-burger header__nav-link_type_main-burger link"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className="header__item-burger header__list-item_type_main-burger">
          <div className="header__nav-link-wrapper">
            <Link
              className="header__nav-link header__nav-link_type_profile link"
              to="/profile"
            >
              Аккаунт
            </Link>
            <img src={profileIcon} alt="" className="header__nav-link-image" />
          </div>
        </div>
      </nav>
    </div>
  );
}
