import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./moviesCardList.css";

export default function MoviesCardList() {
  return (
    <div className="movies__card-list ">
      <MoviesCard />
    </div>
  );
}
