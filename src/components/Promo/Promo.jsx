import React from 'react'
import "./promo.css"
import  promoImage from "../../images/promo-image.png"
import { Link } from 'react-scroll'

export default function Promo() {
  return (
    <section className="promo">
  <div className="promo__container">
    <h1 className="promo__title">Учебный проект студента факультета Веб‑разработки.</h1>
    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
    <Link to="about-project">
    <button className="promo__button button">Узнать больше</button>
    </Link>
  </div>
  <img className="promo__image" src={promoImage} alt="Глобус из слов WEB" />
</section>

  )
}
