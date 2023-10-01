import React from 'react'
import profileimg from '../../assets/img/profile.png'
import Check from "../../assets/img/check.svg"
import setting from "../../assets/img/setings.svg"
import heart from "../../assets/img/heart-me.svg"
import right from "../../assets/img/right.svg"
import pluss from "../../assets/img/pluss.svg"
import chat from "../../assets/img/chat2.svg"
import alert from "../../assets/img/alert.svg"
import question from "../../assets/img/question.svg"
import history from "../../assets/img/history.svg"
import star from "../../assets/img/star.svg"
import hat from "../../assets/img/hat.svg"
import { useNavigate } from 'react-router-dom'
const userimage = localStorage.getItem("image")
const firstname = localStorage.getItem("firstname")
const username = localStorage.getItem("email")


const Brokersmain = () => {
  const navigate = useNavigate()
  return (
    <div class="add__container">
   
    <div class="add__row">
      <div class="add__left">
        <div class="add__user-info">
          <div class="add__profile">
            <img src={profileimg} alt="profile" />
          </div>
          <div class="add__user-text">
            <div class="add__user-name">
              <span>{firstname}</span>
              <br />
              <span>{username}</span>
          </div>
            <div class="add__user-status">
              <span>Собственник</span>
              <span><img src={Check} alt="check" /></span>
            </div>
          </div>
          <div class="add__user-setings">
            <img onClick={()=>navigate("/settings")} className='navigate-settings' src={setting} alt="setings" />
          </div>
        </div>
        <div class="add__left-bottom">
          <ul class="add__sections">
            <li class="add__section">
              <div class="add__section-icon">
                <img src={chat} alt="icon" />
              </div>
              <div class="add__section-name">Сообщения</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
            <li class="add__section">
              <div class="add__section-icon">
                <img src={heart} alt="icon" />
              </div>
              <div class="add__section-name">Избранное</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>

            <li class="add__section">
              <div class="add__section-icon">
                <img src={star} alt="icon" />
              </div>
              <div class="add__section-name">Сравнить</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>


            <div class="add__mobile-section">
              <div class="add__section-name">Мои объекты</div>
              <div class="add__mobile-add">
                <button onClick={()=>navigate("/addobject")} class="add__btn-add">
                  <img src={pluss} alt="pluss" />
                  <span>Добавить объект</span>
                </button>
               
                
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




            <li class="add__section add__sectionmobb">
              <div class="add__section-icon">
                <div class="add__btn-addhat">
                  <span>2</span>
                 <img src={hat} alt="hat"/>
                </div>
              </div>
              <div class="add__section-name">Черновики</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
            <li onClick={()=>navigate("/addkompleks")} class="add__section add__sectionmobb">
              <div class="add__section-icon">
                <img src={pluss} alt="icon" />
              </div>
              <div class="add__section-name">Добавить комплекс</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
            <li class="add__section">
              <div class="add__section-icon">
                <img src={alert} alt="icon" />
              </div>
              <div class="add__section-name">Настройки уведомлений</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>

            <li class="add__section">
              <div class="add__section-icon">
                <img src={question} alt="icon" />
              </div>
              <div class="add__section-name">Вопрос — ответ</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>

            <li class="add__section">
              <div class="add__section-icon">
                <img src={history} alt="icon" />
              </div>
              <div class="add__section-name">История просмотров</div>
              <div class="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="add__right">
        <div class="add__right-top">
          <button onClick={()=>navigate("/addobject")} class="add__btn-add">
            <img src={pluss} alt="pluss" />
            <span>Добавить объект</span>
          </button>
          <button class="add__btn-add">
            <div class="add__btn-addhat">
              <span>2</span>
             <img src={hat} alt="hat"/>
            </div>
            <span>Черновики</span>
          </button>
          <button onClick={()=>navigate("/addkompleks")} class="add__btn-add">
            <img src={pluss} alt="pluss" />
            <span>Добавить комплекс</span>
          </button>
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
      </div>
    </div>
  </div>
  )
}

export default Brokersmain