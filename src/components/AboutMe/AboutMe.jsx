import React from "react";
import "./aboutMe.css";
import aboutMe from "../../images/about-me.png";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__heading">Виталий</h3>
          <h4 className="about-me__subheading">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className="about-me__social-link link"
            to="https://github.com/Macintosh689"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img src={aboutMe} alt="Фото студента" className="about-me__image" />
      </div>
    </section>
  );
}
