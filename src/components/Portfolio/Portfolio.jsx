import React from "react";
import "./portfolio.css";
import portfolioIcon from "../../images/portfolio-link-icon.svg";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          Статичный сайт
          <Link
            to="https://macintosh689.github.io/how-to-learn/"
            className="portfolio__link link"
            target="_blank"
          >
            <img
              src={portfolioIcon}
              alt="ссылка на статичный сайт"
              className="portfolio__link-icon button"
            />
          </Link>
        </li>
        <li className="portfolio__list-item">
          Адаптивный сайт
          <Link
            to="https://macintosh689.github.io/My-third-project/"
            className="portfolio__link link"
            target="_blank"
          >
            <img
              src={portfolioIcon}
              alt="ссылка на адаптивный сайт"
              className="portfolio__link-icon button"
            />
          </Link>
        </li>
        <li className="portfolio__list-item">
          Одностраничное приложение
          <Link
            to="https://github.com/Macintosh689/react-mesto-api-full-gha"
            className="portfolio__link link button"
            target="_blank"
          >
            <img
              src={portfolioIcon}
              alt="ссылка на одностраничное приложение"
              className="portfolio__link-icon button"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
