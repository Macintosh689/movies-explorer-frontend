import React, { useState } from "react";
import "./searchForm.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setShort } from "../../redux/slices/movieReducer";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  saveSearch,
  setSaveSearch,
  saveShort,
  setSaveShort,
}) {
  const location = useLocation();
  const search = useSelector((state) => state.movie.search);
  const short = useSelector((state) => state.movie.short);

  const [value, setValue] = useState(
    location.pathname === "/movies" ? search : saveSearch
  );

  const dispatch = useDispatch();
  function handleSearch(event) {
    event.preventDefault();
    if (location.pathname === "/movies") {
      dispatch(setSearch(value));
    } else {
      setSaveSearch(value);
    }
  }
  function handleCheck(event) {
    if (location.pathname === "/movies") {
      dispatch(setShort(short ? false : true));
    } else {
      setSaveShort((prev) => !prev);
    }
  }

  return (
    <form className="search-form">
      <label htmlFor="" className="search-form__label">
        <input
          type="text"
          className="search-form__input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="search-form__button button" onClick={handleSearch}>
          Поиск
        </button>
      </label>
      <div className="search-form__input-container"></div>
      <div className="search-form__toggle-container">
        <input
          type="checkbox"
          id="toggle-slider"
          className="search-form__toggle-input"
          checked={location.pathname === "/movies" ? short : saveShort}
          onChange={handleCheck}
        />
        <label htmlFor="toggle-slider" className="search-form__toggle-label">
          <div className="search-form__toggle-slider button" />
        </label>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </form>
  );
}
