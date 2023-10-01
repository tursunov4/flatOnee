import React from 'react'
import "./brokers.css"
import profileimg from '../../assets/img/profile.png'
import starblue from "../../assets/img/star-blue.svg"
import rightblue from "../../assets/img/right-blue.svg"
const Brokers = () => {
  return (
    <div class="add__container">
   
    <div class="add__row">
      <div class="add__left add__left--obj">
        <div class="add__user-info add__user-info--obj">
          <div class="add__user-sec">
            <div class="add__profile">
              <img src={profileimg} alt="profile" />
            </div>
            <div class="add__user-text">
              <div class="add__user-name">
                <span>Максим</span>
                <br />  
                <span>Лазаревafdsas </span>
              </div>
              <div class="add__user-status">
                <span>Брокер</span>
              </div>
            </div>
          </div>
          <div class="add__count-obj">
            <span>2 отзыва</span>
            <span>20 объектов</span>
          </div>
          <div class="add__user-setings add__user-setings--obj">
            <span>4.7</span>
            <img src={starblue} alt="star"/>
          </div>

          <div class="add__to_all add__to_all-mobile">
            <span>Все брокеры</span>
            <img src="img/right-blue.svg" alt="right"/>
          </div>
        </div>
        <div class="add__left-bottom add__left-bottom--obj">

           <div class="add__mobile-section">
            <div class="add__right-top add__right-top--obj">
              Объекты брокера
            </div>
            <div class="add__apartament-list">
              <div class="add__apartament-item">
                <div class="add__apartament-icon">
                </div>

                <div class="add__apartament-count-rooms">
                  2 комнаты, 120м2
                </div>
                <div class="add__apartament-price">
                  21 000₽/мес
                </div>
                <div class="add__apartament-address">
                  1-й Красногвардейский пр-д, 22 стр. 2
                </div>
              </div>
              <div class="add__apartament-item">
                <div class="add__apartament-icon">
                </div>
                <div class="add__apartament-count-rooms">
                  2 комнаты, 120м2
                </div>
                <div class="add__apartament-price">
                  21 000₽/мес
                </div>
                <div class="add__apartament-address">
                  1-й Красногвардейский пр-д, 22 стр. 2
                </div>
              </div>
              <div class="add__apartament-item">
                <div class="add__apartament-icon">
                </div>
                <div class="add__apartament-count-rooms">
                  2 комнаты, 120м2
                </div>
                <div class="add__apartament-price">
                  21 000₽/мес
                </div>
                <div class="add__apartament-address">
                  1-й Красногвардейский пр-д, 22 стр. 2
                </div>
              </div>
            </div>
          </div>
          <div class="add__review-title">
            <strong>Отзывы</strong>
            <span>2 отзыва</span>
          </div>
          <div class="add__reviews add__reviews-obj ">
            <div class="add__review">
              <div class="add__review-row add__review-row--obj">
                <div class="add__review-top">

                  <div class="add__review-img add__review-img-obj">
                    <img src={profileimg} alt="img"/>
                  </div>
                  <div class="add__review--title">
                    <div class="add__review--name">
                      <strong>Иван Иваныч</strong>
                      <span>CEO ройстат</span>
                    </div>
                    <span>
                      <span>4.7</span>
                      <img src={starblue} alt="star"/>
                    </span>
                  </div>

                </div>
                <div class="add__review-content">

                  <div class="add__review-text">
                    В целом, структуру лендинга можно разделить на две части: информационную и
                    функциональную. В первой части должна быть представлена информация о компании, ее услугах,
                    недвижимости, а также отзывы и контакты, во второй – форма обратной связи для получения консультации
                    по покупке недвижимости в Москва-Сити.
                  </div>
                </div>
              </div>
            </div>
            <div class="add__review">
              <div class="add__review-row add__review-row--obj">
                <div class="add__review-top">

                  <div class="add__review-img add__review-img-obj">
                    <img src={profileimg} alt="img"/>
                  </div>
                  <div class="add__review--title">
                    <div class="add__review--name">
                      <strong>Иван Иваныч</strong>
                      <span>CEO ройстат</span>
                    </div>
                    <span>
                      <span>4.7</span>
                      <img src={starblue} alt="star"/>
                    </span>
                  </div>

                </div>
                <div class="add__review-content">

                  <div class="add__review-text">
                    В целом, структуру лендинга можно разделить на две части: информационную и
                    функциональную. В первой части должна быть представлена информация о компании, ее услугах,
                    недвижимости, а также отзывы и контакты, во второй – форма обратной связи для получения консультации
                    по покупке недвижимости в Москва-Сити.
                  </div>
                </div>
              </div>
            </div>
            <div class="add__review">
              <div class="add__review-row add__review-row--obj">
                <div class="add__review-top">

                  <div class="add__review-img add__review-img-obj">
                    <img src={profileimg} alt="img"/>
                  </div>
                  <div class="add__review--title">
                    <div class="add__review--name">
                      <strong>Иван Иваныч</strong>
                      <span>CEO ройстат</span>
                    </div>
                    <span>
                      <span>4.7</span>
                      <img src={starblue} alt="star"/>
                    </span>
                  </div>

                </div>
                <div class="add__review-content">

                  <div class="add__review-text">
                    В целом, структуру лендинга можно разделить на две части: информационную и
                    функциональную. В первой части должна быть представлена информация о компании, ее услугах,
                    недвижимости, а также отзывы и контакты, во второй – форма обратной связи для получения консультации
                    по покупке недвижимости в Москва-Сити.
                  </div>

                </div>
              </div>
            </div>

          </div>



          <div class="add__mobile-obj-contacts">
            <strong>Контакты</strong>
            <span>LazarevMHBC@yandex.ru</span>
            <span>+7 919 155 17 18</span>
          </div>

          <div class="add__to_all">
            <span>Все брокеры</span>
            <img src={rightblue} alt="right"/>
          </div>

          <div class="add__write-btn">
            <button class="btn">Написать</button>
          </div>

        </div>
      </div>
      <div class="add__right add__right--obj">
        <div class="add__right-top add__right-top--obj">
          Объекты брокера
        </div>
        <div class="add__right-bottom">
          <div class="add__cards">
            <ul class="apartament-listt">
              <li class="apartament-list__item">
                <div class="apartament-list__preview">
                  <img class="current" src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                </div>
                <div class="preview-paggination">
                  <div class="preview-paggination__item selected"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                </div>
                <div class="apartament-list__header">
                  <div>
                    <p class="apartament-list__address">1-й Красногвардейский пр-д, 22 стр. 2</p>
                  </div>
                  <button class="apartament-list__favorite-btn"></button>
                </div>
                <p class="apartament-list__price">250 000₽/месяц</p>
                <ul class="apartament-list__tags">
                  <li class="apartament-list__tag">2 комнаты</li>
                  <li class="apartament-list__tag">38 этаж</li>
                  <li class="apartament-list__tag">120 м2</li>
                </ul>
                <p class="apartament-list__location">NEVA TOWERS</p>
              </li>
              <li class="apartament-list__item">
                <div class="apartament-list__preview">
                  <img class="current" src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                </div>
                <div class="preview-paggination">
                  <div class="preview-paggination__item selected"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                </div>
                <div class="apartament-list__header">
                  <div>
                    <p class="apartament-list__address">1-й Красногвардейский пр-д, 22 стр. 2</p>
                  </div>
                  <button class="apartament-list__favorite-btn"></button>
                </div>
                <p class="apartament-list__price">250 000₽/месяц</p>
                <ul class="apartament-list__tags">
                  <li class="apartament-list__tag">2 комнаты</li>
                  <li class="apartament-list__tag">38 этаж</li>
                  <li class="apartament-list__tag">120 м2</li>
                </ul>
                <p class="apartament-list__location">NEVA TOWERS</p>
              </li>
              <li class="apartament-list__item">
                <div class="apartament-list__preview">
                  <img class="current" src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                </div>
                <div class="preview-paggination">
                  <div class="preview-paggination__item selected"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                </div>
                <div class="apartament-list__header">
                  <div>
                    <p class="apartament-list__address">1-й Красногвардейский пр-д, 22 стр. 2</p>
                  </div>
                  <button class="apartament-list__favorite-btn"></button>
                </div>
                <p class="apartament-list__price">250 000₽/месяц</p>
                <ul class="apartament-list__tags">
                  <li class="apartament-list__tag">2 комнаты</li>
                  <li class="apartament-list__tag">38 этаж</li>
                  <li class="apartament-list__tag">120 м2</li>
                </ul>
                <p class="apartament-list__location">NEVA TOWERS</p>
              </li>
              <li class="apartament-list__item">
                <div class="apartament-list__preview">
                  <img class="current" src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                </div>
                <div class="preview-paggination">
                  <div class="preview-paggination__item selected"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                </div>
                <div class="apartament-list__header">
                  <div>
                    <p class="apartament-list__address">1-й Красногвардейский пр-д, 22 стр. 2</p>
                  </div>
                  <button class="apartament-list__favorite-btn"></button>
                </div>
                <p class="apartament-list__price">250 000₽/месяц</p>
                <ul class="apartament-list__tags">
                  <li class="apartament-list__tag">2 комнаты</li>
                  <li class="apartament-list__tag">38 этаж</li>
                  <li class="apartament-list__tag">120 м2</li>
                </ul>
                <p class="apartament-list__location">NEVA TOWERS</p>
              </li>
              <li class="apartament-list__item">
                <div class="apartament-list__preview">
                  <img class="current" src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                </div>
                <div class="preview-paggination">
                  <div class="preview-paggination__item selected"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                </div>
                <div class="apartament-list__header">
                  <div>
                    <p class="apartament-list__address">1-й Красногвардейский пр-д, 22 стр. 2</p>
                  </div>
                  <button class="apartament-list__favorite-btn"></button>
                </div>
                <p class="apartament-list__price">250 000₽/месяц</p>
                <ul class="apartament-list__tags">
                  <li class="apartament-list__tag">2 комнаты</li>
                  <li class="apartament-list__tag">38 этаж</li>
                  <li class="apartament-list__tag">120 м2</li>
                </ul>
                <p class="apartament-list__location">NEVA TOWERS</p>
              </li>
              <li class="apartament-list__item">
                <div class="apartament-list__preview">
                  <img class="current" src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                  <img src="img/apartament-preview.jpg" alt=""/>
                </div>
                <div class="preview-paggination">
                  <div class="preview-paggination__item selected"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                  <div class="preview-paggination__item"></div>
                </div>
                <div class="apartament-list__header">
                  <div>
                    <p class="apartament-list__address">1-й Красногвардейский пр-д, 22 стр. 2</p>
                  </div>
                  <button class="apartament-list__favorite-btn"></button>
                </div>
                <p class="apartament-list__price">250 000₽/месяц</p>
                <ul class="apartament-list__tags">
                  <li class="apartament-list__tag">2 комнаты</li>
                  <li class="apartament-list__tag">38 этаж</li>
                  <li class="apartament-list__tag">120 м2</li>
                </ul>
                <p class="apartament-list__location">NEVA TOWERS</p>
              </li>
              </ul>
          </div>
        </div>
        <div class="add__line"></div>
        <div class="add__right-top add__right-top--obj">
          Отзывы
        </div>
        <div class="add__reviews">
          <div class="add__review">
            <div class="add__review-row">
              <div class="add__review-img">
                <img src={profileimg} alt="img"/>
              </div>
              <div class="add__review-content">
                <div class="add__review--title">
                  <strong>Иван Иваныч</strong>
                  <span>
                    <span>4.7</span>
                    <img src={starblue} alt="star"/>
                  </span>
                </div>
                <div class="add__review--position">CEO ройстат</div>
                <div class="add__review-text">
                  В целом, структуру лендинга можно разделить на две части: информационную и
                  функциональную. В первой части должна быть представлена информация о компании, ее услугах,
                  недвижимости, а также отзывы и контакты, во второй – форма обратной связи для получения консультации
                  по покупке недвижимости в Москва-Сити.
                </div>
              </div>
            </div>
          </div>
          <div class="add__review">
            <div class="add__review-row">
              <div class="add__review-img">
                <img src={profileimg} alt="img"/>
              </div>
              <div class="add__review-content">
                <div class="add__review--title">
                  <strong>Иван Иваныч</strong>
                  <span>
                    <span>4.7</span>
                    <img src={starblue} alt="star"/>
                  </span>
                </div>
                <div class="add__review--position">CEO ройстат</div>
                <div class="add__review-text">
                  В целом, структуру лендинга можно разделить на две части: информационную и
                  функциональную. В первой части должна быть представлена информация о компании, ее услугах,
                  недвижимости, а также отзывы и контакты, во второй – форма обратной связи для получения консультации
                  по покупке недвижимости в Москва-Сити.
                </div>
              </div>
            </div>
          </div>
          <div class="add__review">
            <div class="add__review-row">
              <div class="add__review-img">
                <img src={profileimg} alt="img"/>
              </div>
              <div class="add__review-content">
                <div class="add__review--title">
                  <strong>Иван Иваныч</strong>
                  <span>
                    <span>4.7</span>
                    <img src={starblue  } alt="star"/>
                  </span>
                </div>
                <div class="add__review--position">CEO ройстат</div>
                <div class="add__review-text">
                  В целом, структуру лендинга можно разделить на две части: информационную и
                  функциональную. В первой части должна быть представлена информация о компании, ее услугах,
                  недвижимости, а также отзывы и контакты, во второй – форма обратной связи для получения консультации
                  по покупке недвижимости в Москва-Сити.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Brokers