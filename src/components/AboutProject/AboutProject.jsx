import React from 'react'
import "./aboutProject.css"

export default function AboutProject() {
  return (
    <section className="about" id='about-project'>
  <h2 className="section__title">О проекте</h2>
  <ul className="about__list">
    <li className="about__list-item">
      <h2 className="about__heading">Дипломный проект включал 5 этапов</h2>
      <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
        финальные доработки.
      </p>
    </li>
    <li className="about__list-item">
      <h2 className="about__heading">На выполнение диплома ушло 5 недель</h2>
      <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно&nbsp; было
        соблюдать,
        чтобы успешно защититься.
      </p>
    </li>
  </ul>
  <div className="about__deadline">
    <h3 className="about__deadline-heading">1 неделя</h3>
    <h3 className="about__deadline-heading about__deadline-heading_type_long">4 недели</h3>
    <p className="about__deadline-text">Back-end</p>
    <p className="about__deadline-text">Front-end</p>
  </div>
</section>

  )
}
