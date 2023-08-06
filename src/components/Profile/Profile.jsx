import React from "react";
import Header from "../Header/Header";
import "./profile.css";

export default function Profile() {
  return (
    <div>
      <Header />
      <form action="" className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <label htmlFor="" className="profile__label">
          <span className="profile-form__span-caption">Имя</span>
          <input
            id="input-name"
            type="name"
            className="profile-form__input profile-form__input_type_name"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className="profile-form__span-error"
            id="auth-form__span-error"
          ></span>
        </label>
        <label htmlFor="" className="profile__label">
          <span className="profile-form__span-caption">E-mail</span>
          <input
            id="input-password"
            type="email"
            className="profile-form__input profile-form__input_type_email"
            name="email"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="profile-form__span-error"
            id="auth-form__span-error"
          ></span>
        </label>
        <button className="profile-form__button profile-form__button-edit button" type="submit">
          Редактировать
        </button>
        <button className="profile-form__button profile-form__button-logout button" type="submit">
          Выйти из аккаунта
        </button>
        {/* <button className="profile-form__button-save button" type="submit">
          Сохранить
        </button> */}

{/* для переключения состояния профиля на данном этапе необходимо закомментировать кнопки "редактировать" и "выйти из аккаунта"*, а затем раскомментировать кнопку "сохранить" */}
      </form>
    </div>
  );
}

