import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setToken, setUserInfo } from "../../redux/slices/userReducer";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { editUserInfo, getUserInfo } from "../../utils/MainApi";
import { clearMovie } from "../../redux/slices/movieReducer";

export default function Profile() {
  const token = useSelector((state) => state.user.token);
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo.name || !userInfo.email) {
      getUserInfo(token)
        .then((res) => {
          dispatch(setUserInfo(res));
        })
        .catch((err) => {
          alert(err?.message);
        });
    }
  }, []);
  function logout(event) {
    event.preventDefault();
    dispatch(clearUser());
    dispatch(clearMovie());
  }
  const emailSchema =
    /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  const initialValues = {
    name: userInfo?.name || "",
    email: userInfo?.email || "",
  };
  const profileSchema = Yup.object().shape({
    name: Yup.string("Введите корректное имя")
      .min(2, "Введите не менее 2 символов")
      .max(15, "Введите не более 15 символов")
      .required("Обязательное поле"),
    email: Yup.string("Введите корректный Email")
      .matches(emailSchema, "Введите корректный Email")
      .min(5, "Введите не менее 5 символов")
      .max(30, "Введите не более 30 символов")
      .required("Обязательное поле"),
  });
  const onSubmit = (values) => {
    editUserInfo(token, values)
      .then((data) => {
        dispatch(setUserInfo(data));
        alert("Сохранено");
      })
      .catch((err) => {
        alert(err?.message);
      });
  };
  return (
    <div>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={profileSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => {
          const { isValid, dirty, errors, touched } = formik;
          return (
            <Form action="" className="profile__form">
              <h2 className="profile__title">
                Привет, {userInfo?.name ? userInfo?.name : ""}!
              </h2>
              <label htmlFor="" className="profile__label">
                <span className="profile-form__span-caption">Имя</span>
                <Field
                  id="input-name"
                  type="name"
                  className={`profile-form__input profile-form__input_type_name ${
                    errors.name && touched.name
                      ? "auth-form__input_type_error"
                      : ""
                  }`}
                  name="name"
                />
              </label>
              <ErrorMessage
                component={"span"}
                className="profile-form__span-error"
                id="auth-form__span-error"
                name="name"
              />
              <label htmlFor="" className="profile__label">
                <span className="profile-form__span-caption">E-mail</span>
                <Field
                  id="input-password"
                  type="email"
                  className={`profile-form__input profile-form__input_type_email ${
                    errors.email && touched.email
                      ? "auth-form__input_type_error"
                      : ""
                  }`}
                  name="email"
                />
              </label>
              <ErrorMessage
                component={"span"}
                className="profile-form__span-error"
                id="auth-form__span-error"
                name="email"
              />
              <button
                className="profile-form__button profile-form__button-edit button"
                type="submit"
                disabled={!(dirty && isValid)}
              >
                Редактировать
              </button>
              <button
                className="profile-form__button profile-form__button-logout button"
                type="submit"
                onClick={logout}
              >
                Выйти из аккаунта
              </button>
              {/* <button className="profile-form__button-save button" type="submit">
          Сохранить
        </button> */}

              {/* для переключения состояния профиля на данном этапе необходимо закомментировать кнопки "редактировать" и "выйти из аккаунта"*, а затем раскомментировать кнопку "сохранить" */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
