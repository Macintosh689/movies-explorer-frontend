import React from 'react'
import "./notFound.css"
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate=useNavigate()
  return (
  <div className="page">
  <section className="not-found">
    <h1 className="not-found__title">404</h1>
    <p className="not-found__subtitle">Страница не найдена</p>
    <buttton className="not-found__button button" onClick={() => navigate(-1) }>Назад</buttton>
  </section>
</div>
)
}
