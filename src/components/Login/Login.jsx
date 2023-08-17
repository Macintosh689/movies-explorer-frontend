import React from "react";
import "./login.css";
import headerLogo from "../../images/header-logo.svg";

import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { login, register } from "../../utils/MainApi";
import { useDispatch } from "react-redux";
import { setToken, setUserInfo } from "../../redux/slices/userReducer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailSchema =
    /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  const initialValues = {
    email: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string("Введите корректный Email")
      .matches(emailSchema, "Введите корректный Email")
      .min(5, "Введите не менее 5 символов")
      .max(30, "Введите не более 30 символов")
      .required("Обязательное поле"),
    password: Yup.string("Введите корректный пароль")
      .min(8, "Введите не менее 8 символов")
      .max(30, "Введите не более 30 символов")
      .required("Обязательное поле"),
  });
  const onSubmit = (values) => {
    login({ email: values.email, password: values.password })
      .then((data) => {
        dispatch(setToken(data.token));
        navigate("/movies");
      })
      .catch((err) => {
        alert(err?.message);
      });
  };
  return (
    <div className="auth">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { isValid, dirty, errors, touched } = formik;
          return (
            <Form className="auth-form">
              <Link to="/">
                <img
                  className="header__logo header__logo_type_auth"
                  src={headerLogo}
                  alt="логотип"
                  to="/"
                />
              </Link>
              <h2 className="auth-form__title">Рады видеть!</h2>
              <span className="auth-form__span-caption">E-mail</span>
              <Field
                id="input-email"
                type="email"
                className={`auth-form__input auth-form__input_type_email ${
                  errors.email && touched.email
                    ? "auth-form__input_type_error"
                    : ""
                }`}
                name="email"
              />
              <ErrorMessage
                component={"span"}
                className="auth-form__span-error"
                id="auth-form__span-error"
                name="email"
              />
              <span className="auth-form__span-caption">Пароль</span>
              <Field
                id="input-password"
                type="password"
                className={`auth-form__input auth-form__input_type_password ${
                  errors.password && touched.password
                    ? "auth-form__input_type_error"
                    : ""
                }`}
                name="password"
              />
              <ErrorMessage
                component={"span"}
                className="auth-form__span-error"
                id="auth-form__span-error"
                name="password"
              />
              <button
                className="auth-form__button button"
                type="submit"
                disabled={!(dirty && isValid)}
              >
                Войти
              </button>
              <div className="auth-form__text">
                <span>Ещё не зарегистрированы?</span>
                <Link className="auth-form__link link" to="/signup">
                  {" "}
                  Регистрация
                </Link>
              </div>
            </Form>
          );
        }}
        
      </Formik>
    </div>
  );
}
