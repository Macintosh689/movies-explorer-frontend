import React from "react";
import "./register.css";
import headerLogo from "../../images/header-logo.svg";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { Form,Formik, Field, ErrorMessage } from "formik";
import { login, register } from "../../utils/MainApi";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/userReducer";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailSchema =
    /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const registerSchema = Yup.object().shape({
    name: Yup.string("Введите корректное имя")
      .min(2, "Введите не менее 2 символов")
      .max(15, "Введите не более 15 символов")
      .required("Обязательное поле"),
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
    register(values)
      .then((res) => {
        login({email:values.email, password:values.password}).then((data) => {
          dispatch(setToken(data.token));
          navigate('/movies');
        }).catch((err) => {
          console.log(err);
        });  
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="auth">
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { isValid, dirty, errors, touched} = formik;
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
              <h2 className="auth-form__title">Добро пожаловать!</h2>
              <span className="auth-form__span-caption">Имя</span>
              <Field
                id="input-name"
                type="name"
                className={`auth-form__input auth-form__input_type_name ${errors.name && touched.name ? 'auth-form__input_type_error': ''}`}
                name="name"
              />
              <ErrorMessage
                component={"span"}
                className="auth-form__span-error"
                id="auth-form__span-error"
                name="name"
              />
              <span className="auth-form__span-caption">E-mail</span>
              <Field
                id="input-email"
                type="email"
                className={`auth-form__input auth-form__input_type_email ${errors.email && touched.email ? 'auth-form__input_type_error': ''}`}
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
                className={`auth-form__input auth-form__input_type_password ${errors.password && touched.password ? 'auth-form__input_type_error': ''}`}
                name="password"
              />
              <ErrorMessage
                component={"span"}
                className="auth-form__span-error"
                id="auth-form__span-error"
                name="password"
              />
              <button
                className="auth-form__button_type_register button"
                type="submit" disabled={!(dirty && isValid)}
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
