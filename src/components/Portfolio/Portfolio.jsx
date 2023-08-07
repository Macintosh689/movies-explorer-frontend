import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link
            to="https://macintosh689.github.io/how-to-learn/"
            className="portfolio__link link"
            target="_blank"
          >
            Статичный сайт
            <span className="portfolio__link-icon">↗</span>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link
            to="https://macintosh689.github.io/My-third-project/"
            className="portfolio__link link"
            target="_blank"
          >

            Адаптивный сайт
            <span className="portfolio__link-icon">↗</span>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link
            to="https://github.com/Macintosh689/react-mesto-api-full-gha"
            className="portfolio__link link button"
            target="_blank"
          >
            Одностраничное приложение
            <span className="portfolio__link-icon">↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
