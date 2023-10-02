import React, { useEffect, useState } from 'react'
import productimg from "../../assets/img/product-image.jpg";
import apartmentprev from "../../assets/img/apartament-preview.jpg"
import strelkasmall from "../../assets/img/strelkasmall.svg"
import strelkatepa from "../../assets/img/strelkatepa.svg"
import arrowleft from "../../assets/img/arrow-left.svg"
import strelkabig from '../../assets/img/strelka.svg'
import uybig from "../../assets/img/uyimgbig.png"
import uy from "../../assets/img/uyimg.png"
import oshxona from "../../assets/img/oshxona.svg"
import spa from "../../assets/img/spa.svg"
import basen from "../../assets/img/basen.svg"
import fitne from "../../assets/img/fitne.svg"
import park from "../../assets/img/park.svg"
import detskiy from "../../assets/img/detskiy.svg"
import ploshad from "../../assets/img/ploshad.svg"
import dedsad from "../../assets/img/dedsad.svg"
import shkola from "../../assets/img/shkola.svg"
import metro2 from "../../assets/img/metro2.svg"
import hospital from "../../assets/img/hospital.svg"
import tts from "../../assets/img/tts.svg"
import magazin from "../../assets/img/magazin.png"
import playj from "../../assets/img/plyaj.png"
import file from "../../assets/img/file.svg"
import pdf from "../../assets/img/pdf2.svg"
import strelka2 from "../../assets/img/strelka2.svg"
import location from '../../assets/img/location.svg'
import telefonproduct from "../../assets/img/telefonproduct.svg"
import chat from "../../assets/img/chat.svg"
import linkarrow from "../../assets/img/link-arrow.svg"
import { useParams } from 'react-router-dom';
import http from '../../axios';
const Productitem = () => {
  const [typevibor , setTypevibor] = useState(false)
  const [typeplan , setTypeplan] = useState(false)
  const [data, setData] = useState({})
  const { id} = useParams()
  useEffect(()=>{
   getData()
  },[])
  const getData = ()=>{
    http.get(`/catalog/offices/${id}/`).then((res)=>{
       data(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <main>
    <div class="product-page">
      <div class="container">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a href="">оаэ</a>
          </li>
          <li class="breadcrumbs__item">
            <a href="">дубай</a>
          </li>
          <li class="breadcrumbs__item">
            <span>дубай марина крик</span>
          </li>
        </ul>
        <div class="product-page__header">
          <h1 class="product-page__title">Дубай Марина крик</h1>
          <div class="product-interactions">
            <button class="wishlist-btn"></button>
            <button class="share-btn"></button>
          </div>
        </div>
        <div class="product-gallery">
          <img src={productimg} alt="" />
          <div class="product-gallery__images">
            <img src={apartmentprev} alt="" />
            <img src={apartmentprev} alt="" />
            <img src={apartmentprev} alt="" />
            <img src={apartmentprev } alt="" />
          </div>
          <button class="product-gallery__see-all">Все фото</button>
        </div>
        <div class="product-content">
          <div>
            <section class="product-section">
              <p class="product-section__p">
                Emaar Business Park 1, Al Thanyah Third area, 602, Дубай ОАЭ.
              </p>
              <div class="product-tags">
                <div class="product-tags__item">#Предстарт продаж</div>
                <div class="product-tags__item">#Комплекс сдан</div>
                <div class="product-tags__item">#Доступна рассрочка</div>
              </div>
            </section>
            <section class="product__about-setion">
              <div onClick={()=>setTypevibor(!typevibor)} id="vibratie-title" class="vibratie-title">
                <h2>Варианты планировок</h2>
                <img className={typevibor ? "pentajstrelka" :''} id="vibratestrelka" src={strelkabig} alt="" />
              </div>
              <ul id="vibrate-section__list" className={typevibor ? "planpetaj-hide" : "vibrate-section__list"}>
                <li class="vibrate-section__list-item">
                  <h4>Студии</h4>
                  <span class="vibrate-section__ulcham">от 40 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    5 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li class="vibrate-section__list-item">
                  <h4>2 комнатные</h4>
                  <span class="vibrate-section__ulcham">от70 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    20 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li class="vibrate-section__list-item">
                  <h4>3 комнатные</h4>
                  <span class="vibrate-section__ulcham">от120 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    2 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li class="vibrate-section__list-item">
                  <h6>
                    Марина крик <img src={strelkatepa} alt="" />
                  </h6>
                  <span class="vibrate-section__ulcham2">Сдан</span>
                  <span class="vibrate-section__ulcham2">380 000$</span>
                  <span class="vibrate-section__ulcham2">209,7 м²</span>
                  <span class="vibrate-section__ulcham2"
                    ><img src={uy} alt=""
                  /></span>
                </li>
                <li class="vibrate-section__list-item">
                  <h6>Корпус 1 <img src={strelkatepa} alt="" /></h6>
                  <span class="vibrate-section__ulcham2">Сдан</span>
                  <span class="vibrate-section__ulcham2">380 000$</span>
                  <span class="vibrate-section__ulcham2">209,7 м²</span>
                  <span class="vibrate-section__ulcham2"
                    ><img src={uy} alt=""
                  /></span>
                </li>
                <li class="vibrate-section__list-item">
                  <h4>3 комнатные</h4>
                  <span class="vibrate-section__ulcham">от70 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    15 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li class="vibrate-section__list-item">
                  <h4>3 комнатные</h4>
                  <span class="vibrate-section__ulcham">от70 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    3 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
              </ul>
            </section>
            <section class="kochestva__knok">
              <h2>Подобрать объект</h2>
              <p>Количество комнат</p>
              <ul class="kochestva__knok-list">
                <li>
                  <span class="kochestve__btn1">студия</span>
                </li>
                <li class="active__kochesbtn">2</li>
                <li>3</li>
                <li>4</li>
                <li>5+</li>
              </ul>
              <div class="uyimg__kochestva">
                <div class="uyimg__kochestva-img">
                  <img src={uybig} alt="" />
                </div>
                <div class="uyimg__kochestva-text">
                  <h3>от 360 000 $</h3>
                  <h2>от 70 м²</h2>
                  <span>от 36 000 $/м2</span>
                  <span class="uyimg__konkurs">Корпус 1</span>
                  <p>2 комнатные</p>
                  <button>Показать предложения</button>
                </div>
              </div>
            </section>
            <section class="kompleks__izab">
              <h2>О комплексе</h2>
              <div class="kompleks__izab-text">
                <ul>
                  <li class="kompleks__izab-textlistitem1">Тип жилья</li>
                  <li class="kompleks__izab-textlistitem1">Первчика</li>
                </ul>
                <ul>
                  <li class="kompleks__izab-textlistitem1">Условия сделки</li>
                  <li class="kompleks__izab-textlistitem1">
                    Покупка в пуле инвесторов
                  </li>
                </ul>
                <ul>
                  <li class="kompleks__izab-textlistitem1">В продаже</li>
                  <li class="kompleks__izab-textlistitem1">55 квартир</li>
                </ul>
                <ul>
                  <li class="kompleks__izab-textlistitem1">Срок сдачи</li>
                  <li class="kompleks__izab-textlistitem1">
                    IV кв 2025 года
                  </li>
                </ul>
                <ul>
                  <li class="kompleks__izab-textlistitem1">Этажность</li>
                  <li class="kompleks__izab-textlistitem1">15 этажей</li>
                </ul>
              </div>
            </section>
            <sectoin class="opesniy">
               <h2>Описание</h2>
               <p>Этот апарт комплекс один из лучших, что может предложить рынок </p>
               {/* <p>✦ Просторная кухня, переходящая в зал <br>
                  ✦ Спальня с видом на Москву <br>
                  ✦ Ванная с прозрачной душевой кабинкой
              </p> */}
              <p>
                  Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. Эти апартаменты одни из лучших, что может предложить рынок
                  Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. </p>
            </sectoin>
            <section class="infraktura__proekt">
              <h2>Инфраструктура проекта</h2>
              <ul class="infraktura__proekt-list">
                  <li class="infraktura__proekt-listitem">
                      <p><img src={oshxona} alt=""/> <span>Ресторан</span></p>
                      <p><img src={spa} alt=""/> <span>Спа центр</span></p>
                      <p><img src={basen} alt=""/> <span>Бассен</span></p>
                      <p><img src={fitne} alt=""/> <span>Фитнес центр</span></p>
                      <p><img src={park} alt=""/> <span>Парк</span></p>
                  </li>
                  <li class="infraktura__proekt-listitem">
                      <p><img src={detskiy} alt=""/> <span>Детская площадка</span></p>
                      <p><img src={ploshad} alt=""/> <span>Спорт площадка</span></p>
                  </li>
                
              </ul>
            </section>
            <section class="infraktura__proekt">
              <h2>Инфраструктура проекта</h2>
              <ul class="infraktura__proekt-list">
                  <li class="infraktura__proekt-listitem">
                      <p><img src={dedsad} alt=""/> <span>Детсад</span></p>
                      <p><img src={shkola} alt=""/> <span>Школа</span></p>
                      <p><img src={metro2} alt=""/> <span>Метро 230м</span></p>
                      <p><img src={hospital} alt=""/> <span>Больница</span></p>
                      <p><img src={tts} alt=""/> <span>ТЦ</span></p>
                  </li>
                  <li class="infraktura__proekt-listitem">
                      <p><img src={detskiy} alt=""/> <span>Детская площадка</span></p>
                      <p><img src={oshxona} alt=""/> <span>Ресторан</span></p>
                      <p><img src={magazin} alt=""/> <span>Магазины</span></p>
                      <p><img src={park} alt=""/> <span>Парк</span></p>
                      <p><img src={playj} alt=""/> <span>Пляж 240м</span></p>
                  </li>
                
              </ul>
            </section>
            <section class="product-section">
              <div class="product-banner">
                  <a class="container" href="">
                      <h4 class="product-banner__title">Район Дубай марина    </h4>
                      <p class="product-banner__text">Перейти к статье</p>
                  </a>
              </div>
            </section>
             <section class="profuct-file">
              <label class="profuct-file__label" for="product">
                <input class="profuct-file__input" id="product"  type="file"/>
                <img src={file} alt=""/>
                <h4>21 планировка в этом ЖК</h4>
                <p>Выбрать</p>
              </label>
             </section>
             <section class="profuct__doc">
              <h2>Документация от застройщика</h2>
              <ul class="profuct-doc__list">
                <li><img src={pdf} alt=""/><span>Документация</span> </li>
                <li><img src={pdf} alt=""/><span>Документация</span> </li>
                <li><img src={pdf} alt=""/><span>Документация</span> </li>
              </ul>
             </section>
             <section class="zastraoy">
              <h2>О застройщике</h2>
              <ul class="zastraoy-wrapper">
                <li>
                  <p class="zastraoy-wrapperp1">Сдано</p>
                  <p class="zastraoy-wrapperp2">4 объекта <img src={strelkatepa} alt=""/></p>
                </li>
                <li>
                  <p class="zastraoy-wrapperp1">Строится </p>
                  <p class="zastraoy-wrapperp2">3 объекта <img src={strelkatepa         } alt=""/></p>
                </li>
               
              </ul>
             </section>
        
             <section class="product-section">
              <div class="product-banner">
                  <a class="container" href="">
                      <h4 class="product-banner__title">Дубай Марина крик</h4>
                      <p class="product-banner__text">Перейти к статье</p>
                  </a>
              </div>
            </section>  
            <section class="planpetaj">
              <h2>План платежей</h2>
             <div class="planpetaj-wrapper">
              <ul class="planpetaj-list">
                <li class="planpetaj-listitem">
                   <span class="planpetaj-number">1</span>
                    <div>
                      <p class="planpetaj-text">10% Первый взнос</p>
                       <p class="planpetaj-text-item"></p>
                    </div>
                </li>
                <li class="planpetaj-line"></li>
                <li class="planpetaj-listitem">
                   <span class="planpetaj-number">2</span>
                    <div>
                      <p class="planpetaj-text">20% Первый взнос</p>
                       <p class="planpetaj-text-item"></p>
                    </div>
                </li>
                <li class="planpetaj-line"></li>
                <li class="planpetaj-listitem">
                   <span class="planpetaj-number">3</span>
                    <div>
                      <p class="planpetaj-text">30% Первый взнос</p>
                       <p class="planpetaj-text-item"></p>
                    </div>
                </li>
                <li class="planpetaj-line"></li>
                <li class="planpetaj-listitem">
                   <span class="planpetaj-number  planpetaj-listactive ">4</span>
                    <div>
                      <p class="planpetaj-text">40% Первый взнос</p>
                       <p class="planpetaj-text-item">Возможно продать</p>
                    </div>
                </li>
                <li class="planpetaj-line"></li>
                <li class="planpetaj-listitem">
                   <span class="planpetaj-number">5</span>
                    <div>
                      <p class="planpetaj-text">50% Первый взнос</p>
                       <p class="planpetaj-text-item"></p>
                    </div>
                </li>
                <li class="planpetaj-line"></li>
                <div id="planpentajhide" class={typeplan ? "" :'planpetaj-hide'}>
                  <li class="planpetaj-listitem">
                    <span class="planpetaj-number">6</span>
                     <div>
                       <p class="planpetaj-text">60% Первый взнос</p>
                        <p class="planpetaj-text-item"></p>
                     </div>
                 </li>
                 <li class="planpetaj-line"></li>
                 <li class="planpetaj-listitem">
                  <span class="planpetaj-number">7</span>
                   <div>
                     <p class="planpetaj-text">70% Первый взнос</p>
                      <p class="planpetaj-text-item"></p>
                   </div>
               </li>
               <li class="planpetaj-line"></li>
               <li class="planpetaj-listitem">
                <span class="planpetaj-number">8</span>
                 <div>
                   <p class="planpetaj-text">80% Первый взнос</p>
                    <p class="planpetaj-text-item"></p>
                 </div>
             </li>
             <li class="planpetaj-line"></li>
             <li class="planpetaj-listitem">
              <span class="planpetaj-number">9</span>
               <div>
                 <p class="planpetaj-text">90% Первый взнос</p>
                  <p class="planpetaj-text-item"></p>
               </div>
           </li>
           <li class="planpetaj-line"></li>
           <li class="planpetaj-listitem">
            <span class="planpetaj-number">10</span>
             <div > 
               <p class="planpetaj-text">100% Первый взнос</p>
                <p class="planpetaj-text-item"></p>
             </div>
         </li>
                </div>
               
               </ul>
               <div onClick={()=>setTypeplan(!typeplan)} id="open__planpetaj" class="open__planpetaj">
                <p>Показать всё</p>
                <img id="pentajstrelka" className={typeplan ? 'pentajstrelka' : ""} src={strelka2} alt=""/>
               </div>
             </div>
            </section>
            <section class="plojkompleks">
              <h2>Похожие комплексы</h2>
              <ul class="apartament-list2">
                <li class="apartament-list__item">
                  <div class="apartament-list__preview">
                    <img class="current" src={apartmentprev} alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
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
                      <p class="apartament-list__address">
                        Emaar Business Park 1, Al Thanyah...
                      </p>
                   
                    </div>
                    <button class="apartament-list__favorite-btn"></button>
                  </div>
                  <p class="apartament-list__price">Creek Heights</p>
                  <ul class="apartament-list__tags">
                    <li class="apartament-list__tag">360 000–590 000 $</li>
                    <li class="apartament-list__tag">от 40 м²</li>
                  </ul>
                </li>
                <li class="apartament-list__item">
                  <div class="apartament-list__preview">
                    <img class="current" src={apartmentprev} alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
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
                      <p class="apartament-list__address">
                        Emaar Business Park 1, Al Thanyah...
                      </p>
                   
                    </div>
                    <button class="apartament-list__favorite-btn"></button>
                  </div>
                  <p class="apartament-list__price">Creek Heights</p>
                  <ul class="apartament-list__tags">
                    <li class="apartament-list__tag">360 000–590 000 $</li>
                    <li class="apartament-list__tag">от 40 м²</li>
                  </ul>
                </li>               
              </ul>
            </section>
          </div>
          <aside class="product-sidebar">
            <div class="product-sidebar__top">
              <div class="product-sidebar__price">
               <div class="product-sidebar__price-wrap">
                <h3>от 360 000 до 590 000 $</h3>
                <p>от 36 000 $/м2 до 59 000 $/м2</p>
               </div>
               <a class="product-sidebar__location" href="">
                <img src={location} alt=""/>
               </a>
              </div>
            
            </div>
            <div class="product-sidebar__buttons">
              <button class="product-btn" id="book-btn">
                <img src={telefonproduct} alt=""/>
                <span>Забронировать</span>
              </button>
             
              <button class="product-btn2">
                <img src={chat} alt="" />
              </button>
            </div>
            <div class="separator"></div>
            <p class="product-sidebar__text">К другому объекту</p>
            <div class="product-sidebar__links">
              <a class="product-sidebar__prev" href="">
                <img src={linkarrow} alt="" />
              </a>
              <a class="product-sidebar__next" href="">
                <img src={linkarrow} alt="" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>      
    <div class="overlay">
      <div class="container">
        <div class="form-overlay">
          <div class="container">
            <button class="form-overlay__close"></button>
            <form action="">
              <p class="form-overlay__text">
                Оставьте контакты и наш специалист свяжется с вами в ближайшее
                время.
              </p>
              <input
                class="form-overlay__input"
                placeholder="Введите имя"
                type="text"
              />
              <input
                class="form-overlay__input"
                placeholder="+7 000 000 00 00"
                type="tel"
              />
              <div class="form-overlay__wrapper">
                <button class="form-overlay__back-btn">Назад</button>
                <button class="form-overlay__confirm-btn">Отправить</button>
              </div>
            </form>
          </div>
        </div>
        <div class="gallery-overlay">
          <div class="container">
            <button class="gallery-overlay__close"></button>
            <div class="gallery-overlay__center">
              <button class="gallery-overlay__prev">
                <img src="img/gallery-arrow.svg" alt="" />
              </button>
              <img
                class="gallery-overlay__current"
                src="img/gallery-overlay.jpg"
                alt=""
              />
              <button class="gallery-overlay__next">
                <img src="img/gallery-arrow.svg" alt="" />
              </button>
            </div>
            <div class="gallery-overlay__wrapper">
              <ul class="gallery-overlay__list">
                <li class="gallery-overlay__item selected">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/apartament-preview.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li class="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Productitem