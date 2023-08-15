import React, { useEffect, useState } from "react";
import "./moviesCard.css";
import moviesCard1 from "../../images/movies-card-1.png";
import moviesCard2 from "../../images/movies-card-2.png";
import moviesCard3 from "../../images/movies-card-3.png";

import { useLocation } from "react-router-dom";
import { getTimeFromMins } from "../../utils/Constants";
import { useSelector } from "react-redux";
import { dislikeMovie, getAllLikeMovies, likeMovie } from "../../utils/MainApi";

export default function MoviesCard({ movie }) {
  const location = useLocation();
  const [isLike, setIsLike] = useState(false);

  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    getAllLikeMovies(token)
      .then((movies) => {
        if (location.pathname === "/movies") {
          setIsLike(movies.find((elem) => elem.movieId === movie.id));
        }else {
          setIsLike(movies.find((elem) => elem.movieId === movie.movieId));
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);
console.log(movie);
  function handleLike() {
    if (isLike) {
      console.log(isLike);
      dislikeMovie(token, isLike._id).then((res) => {
        setIsLike(false);
      });
    } else {
      likeMovie(token, {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
        .then((res) => {
          console.log(res);
          setIsLike(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return location.pathname === "/movies" ? (
    <>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">{movie.nameRU}</h3>
            <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
          </div>
          <a
            href={movie.trailerLink}
            className="movie__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://api.nomoreparties.co${movie.image.url}`}
              alt="изображение карточки фильма"
              className="movie__image"
            />
          </a>
          {isLike ? (
            <button className="movie__saved-button button" onClick={handleLike}>
              сохранить
            </button>
          ) : (
            <button className="movie__save-button button" onClick={handleLike}>
              сохранить
            </button>
          )}
        </div>
      </div>
    </>
  ) : (
    <>
      {isLike && (
        <div className="movie__card">
          <div className="movie__container">
            <div className="movie__caption">
              <h3 className="movie__name">{movie.nameRU}</h3>
              <p className="movie__duration">
                {getTimeFromMins(movie.duration)}
              </p>
            </div>
            <a
              href={movie.trailerLink}
              className="movie__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={movie.image}
                alt="изображение карточки фильма"
                className="movie__image"
              />
            </a>

            <button
              className="movie__delete-button button"
              onClick={handleLike}
            >
              сохранить
            </button>
          </div>
        </div>
      )}
    </>
  );
}
