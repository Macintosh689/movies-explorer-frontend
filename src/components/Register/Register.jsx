import React from "react";
import "./register.css";
import headerLogo from "../../images/header-logo.svg";

import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  return (
    <div className="auth">
      <form className="auth-form">
        <Link to="/">
          <img className="header__logo header__logo_type_auth" src={headerLogo} alt="логотип" to="/" />
        </Link>
        <h2 className="auth-form__title">Добро пожаловать!</h2>
        <span className="auth-form__span-caption">Имя</span>
        <input
          id="input-name"
          type="name"
          className="auth-form__input auth-form__input_type_name"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
        />
        <span
          className="auth-form__span-error"
          id="auth-form__span-error"
        ></span>
        <span className="auth-form__span-caption">E-mail</span>
        <input
          id="input-email"
          type="email"
          className="auth-form__input auth-form__input_type_email"
          name="email"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="auth-form__span-error"
          id="auth-form__span-error"
        ></span>
        <span className="auth-form__span-caption">Пароль</span>
        <input
          id="input-password"
          type="password"
          className="auth-form__input auth-form__input_type_password"
          name="password"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          className="auth-form__span-error auth-form__span-error_type_password"
          id="auth-form__span-error"
        ></span>
        <button
          className="auth-form__button_type_register button"
          type="submit"
        >
          Зарегистрироваться
        </button>
        <div className="auth-form__text">
          <span>Уже зарегистрированы?</span>
          <Link className="auth-form__link link" to="/signin">
            {" "}
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}
