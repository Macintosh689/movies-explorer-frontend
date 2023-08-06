import React from "react";
import "./searchForm.css";

export default function SearchForm() {
  return (
    <form className="search-form">
      <label htmlFor="" className="search-form__label">
        <input type="text" className="search-form__input" />
        <button className="search-form__button button">Поиск</button>
      </label>
      <div className="search-form__input-container"></div>
      <div className="search-form__toggle-container">
        <input
          type="checkbox"
          id="toggle-slider"
          className="search-form__toggle-input"
        />
        <label htmlFor="toggle-slider" className="search-form__toggle-label">
          <div className="search-form__toggle-slider button" />
        </label>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </form>
  );
}
