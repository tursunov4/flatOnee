import React from 'react'
import profileimg from '../../assets/img/profile.png'
import starblue from "../../assets/img/star-blue.svg"
const Brokersitem = () => {
  return (
    <div className="brocker__wrapper">
  <div className="brocker__row">

    <div className="form__input form__input--brocker">
      <input type="text" placeholder="Поиск" />
    </div>

    <div className="brocker__main">
      <div className="brocker__header">
        <span>Брокеры Flat one</span>   
      </div>

      <div className="form__input form__input--brocker form__input--brocker-mobile">
        <input type="text" placeholder="Поиск" />
      </div>
      <div className="brocker__list">
        <div className="brocker__item">
          <div className="brocker__item-row">
            <div className="brocker__img">
              <img src={profileimg} alt="profile"/>
            </div>
            <div className="brocker__item-info">
              <div className="brocker__name">
                Максим Лазарев
              </div>
              <div className="brocker__position">
                Старший брокер
              </div>
              <div className="brocker__review">
                <span>2 отзыва</span>
                <span>20 объектов</span>
              </div>
            </div>
            <div className="brocker__action">

              <div className="brocker__star">
                <span>4.7</span>
                <img src={starblue} alt="star"/>
              </div>

              <div className="brocker__btn">
                <button className="btn">Написать</button>
              </div>
            </div>

          </div>
        </div>


        <div className="brocker__item">
          <div className="brocker__item-row">
            <div className="brocker__img">
              <img src={profileimg} alt="profile"/>
            </div>
            <div className="brocker__item-info">
              <div className="brocker__name">
                Максим Лазарев
              </div>
              <div className="brocker__position">
                Старший брокер
              </div>
              <div className="brocker__review">
                <span>2 отзыва</span>
                <span>20 объектов</span>
              </div>
            </div>
            <div className="brocker__action">
              <div className="brocker__star">
                <span>4.7</span>
                <img src={starblue} alt="star"/>
              </div>

              <div className="brocker__btn">
                <button className="btn">Написать</button>
              </div>
            </div>

          </div>
        </div>

        <div className="brocker__item">
          <div className="brocker__item-row">
            <div className="brocker__img">
              <img src={profileimg} alt="profile"/>
            </div>
            <div className="brocker__item-info">
              <div className="brocker__name">
                Максим Лазарев
              </div>
              <div className="brocker__position">
                Старший брокер
              </div>
              <div className="brocker__review">
                <span>2 отзыва</span>
                <span>20 объектов</span>
              </div>
            </div>
            <div className="brocker__action">

              <div className="brocker__star">
                <span>4.7</span>
                <img src={starblue} alt="star"/>
              </div>

              <div className="brocker__btn">
                <button className="btn">Написать</button>
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

export default Brokersitem