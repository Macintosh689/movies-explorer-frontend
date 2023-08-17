import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./moviesCardList.css";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";
import { useWindowWidth } from "@react-hook/window-size";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({movies,loading,block,setCountFilms,max,saveMovies}) {
  const error = useSelector((state) => state.movie.error);
  const location = useLocation();
  
  if (error) {
    return (
      <div className="movies__message">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз.
      </div>
    );
  }
  if (movies.length === 0) {
    return <div className="movies__message">Ничего не найдено</div>;
  }
  return loading ? (
    <Preloader />
  ) : (
    <div className="movies__card-list ">
      {movies.map((movie) => (
        <MoviesCard movie={movie} key={movie.id} saveMovies={saveMovies}/>
      ))}
      {!block && location.pathname === "/movies" &&  (
        <button
          className="movies__button button"
          onClick={() => {
            setCountFilms((prev) => prev + max);
          }}
        >
          Ещё
        </button>
      )}
    </div>
  );
}
