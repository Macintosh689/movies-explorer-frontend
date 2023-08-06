import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
  <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
  <div className="footer__container">
    <p className="footer__copyright">© 2020</p>
    <ul className="footer__nav-list">
      <li className="footer__list-item">
        <Link className="footer__nav-link link" to="https://practicum.yandex.ru/" target="_blank">
          Яндекс.Практикум
        </Link>
      </li>
      <li className="footer__list-item">
        <Link className="footer__nav-link link" to="https://github.com/" target="_blank">
          Github
        </Link>
      </li>
    </ul>
  </div>
</footer>

  )
}
