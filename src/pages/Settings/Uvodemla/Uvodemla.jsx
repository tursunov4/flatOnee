import React from 'react'
import { Link } from 'react-router-dom'

const Uvodemla = () => {
  return (
    <main>
    <div class="noti-container">
      <div class="notifications">
        <div class="title">Уведомления</div>
        <div class="list">
          <Link to={'/empty'} class="item">
            <div to={'/empty'}  class="item__row">
              <div class="item__title">Новый комплекс</div>
              <div class="item__time">22:37</div>
            </div>
            <div class="item__row">
              <a href="#" class="item__link">Перейти &#62;</a>
              <div class="item__date">21.01.2023</div>
            </div>
          </Link>
          <Link to={'/empty'} class="item">
            <div class="item__row">
              <div class="item__title">Новый комплекс</div>
              <div class="item__time">22:37</div>
            </div>
            <div class="item__row">
              <a href="#" class="item__link">Перейти &#62;</a>
              <div class="item__date">21.01.2023</div>
            </div>
          </Link>
          <Link to={'/empty'} class="item">
            <div class="item__row">
              <div class="item__title">Новый комплекс</div>
              <div class="item__time">22:37</div>
            </div>
            <div class="item__row">
              <a href="#" class="item__link">Перейти &#62;</a>
              <div class="item__date">21.01.2023</div>
            </div>
          </Link>
          <Link to={'/empty'} class="item">
            <div class="item__row">
              <div class="item__title">Новый комплекс</div>
              <div class="item__time">22:37</div>
            </div>
            <div class="item__row">
              <a href="#" class="item__link">Перейти &#62;</a>
              <div class="item__date">21.01.2023</div>
            </div>
          </Link>
          <Link to={'/empty'} class="item">
            <div class="item__row">
              <div class="item__title">Новый комплекс</div>
              <div class="item__time">22:37</div>
            </div>
            <div class="item__row">
              <a href="#" class="item__link">Перейти &#62;</a>
              <div class="item__date">21.01.2023</div>
            </div>
          </Link>
          <Link to={'/empty'} class="item">
            <div class="item__row">
              <div class="item__title">Новый комплекс</div>
              <div class="item__time">22:37</div>
            </div>
            <div class="item__row">
              <a href="#" class="item__link">Перейти &#62;</a>
              <div class="item__date">21.01.2023</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </main>

  )
}

export default Uvodemla