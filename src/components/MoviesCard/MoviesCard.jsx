import React from "react";
import "./moviesCard.css";
import moviesCard1 from "../../images/movies-card-1.png";
import moviesCard2 from "../../images/movies-card-2.png";
import moviesCard3 from "../../images/movies-card-3.png";
import moviesCard4 from "../../images/movies-card-4.png";
import moviesCard5 from "../../images/movies-card-5.png";
import moviesCard6 from "../../images/movies-card-6.png";
import moviesCard7 from "../../images/movies-card-7.png";
import moviesCard8 from "../../images/movies-card-8.png";
import moviesCard9 from "../../images/movies-card-9.png";
import moviesCard10 from "../../images/movies-card-10.png";
import moviesCard11 from "../../images/movies-card-11.png";
import moviesCard12 from "../../images/movies-card-12.png";
import { useLocation } from "react-router-dom";

export default function MoviesCard() {
  const location = useLocation();

  return location.pathname === "/movies" ? (
    <>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard1} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__saved-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard2} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__saved-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard3} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__save-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard4} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__save-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard5} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__save-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard6} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__saved-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard7} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__saved-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard8} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__save-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard9} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__save-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard10} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__save-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard11} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__saved-button button">сохранить</button>
        </div>
      </div>
      <div className="movie__card">
        <div className="movie__container">
          <div className="movie__caption">
            <h3 className="movie__name">В погоне за Бенкси</h3>
            <p className="movie__duration">27 минут</p>
          </div>
          <img src={moviesCard12} alt="изображение карточки фильма" className="movie__image" />
          <button className="movie__save-button button">сохранить</button>
        </div>
      </div>

      <button className="movies__button button">Ещё</button>
    </>
  ) : (
    <>
      <div className="movie__added-wrapper">
        <div className="movie__card">
          <div className="movie__container">
            <div className="movie__caption">
              <h3 className="movie__name">В погоне за Бенкси</h3>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={moviesCard1} alt="изображение карточки фильма" className="movie__image" />
            <button className="movie__delete-button button">сохранить</button>
          </div>
        </div>
        <div className="movie__card">
          <div className="movie__container">
            <div className="movie__caption">
              <h3 className="movie__name">В погоне за Бенкси</h3>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={moviesCard2} alt="изображение карточки фильма" className="movie__image" />
            <button className="movie__delete-button button">сохранить</button>
          </div>
        </div>
        <div className="movie__card">
          <div className="movie__container">
            <div className="movie__caption">
              <h3 className="movie__name">В погоне за Бенкси</h3>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={moviesCard3} alt="изображение карточки фильма" className="movie__image" />
            <button className="movie__delete-button button">сохранить</button>
          </div>
        </div>
      </div>
    </>
  );
}
