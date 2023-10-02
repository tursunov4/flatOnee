import React, { useEffect, useState } from "react";
import "./catalog.css";
import izamphone1 from "../../assets/img/izamphone1.svg";
import izamphone2 from "../../assets/img/izamphone2.svg";
import apartmentpriew from "../../assets/img/apartament-preview.jpg";
import strelkasmall from "../../assets/img/strelkasmall.svg";
import strelkatepa from "../../assets/img/strelkatepa.svg";
import arrowleft from "../../assets/img/arrow-left.svg";
import uy from "../../assets/img/uyimg.png";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import http from "../../axios";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")
const Cataloge = () => {
  const [typeabout, setAbout] = useState(false);
  const [select1, setSelect1] = useState(1);
  const [select2, setSelect2] = useState(1);
  const [select3, setSelect3] = useState(1);
  const [countBad, setCaountBad] = useState(1);
  const [next , setNext ] = useState('')
  const [prev , setPrev] = useState("")
  const [data , setData] = useState([])
  const [topData , setTopData] = useState([])
  const [refresh , setRefresh] = useState(false)
  const navigate = useNavigate()

  const category1 = [
    { id: 1, name: "Все башни" },
    { id: 2, name: "Нева" },
    { id: 3, name: "Меркурий" },
    { id: 4, name: "Меркурий" },
    { id: 5, name: "Меркурий" },
    { id: 6, name: "Меркурий" },
  ];
  const category2 = [
    { id: 1, name: "Все башни" },
    { id: 2, name: "Нева" },
    { id: 3, name: "Меркурий" },
    { id: 4, name: "Меркурий" },
    { id: 5, name: "Меркурий" },
    { id: 6, name: "Меркурий" },
  ];
  const category3 = [
    { id: 1, name: "Все башни" },
    { id: 2, name: "Нева" },
    { id: 3, name: "Меркурий" },
    { id: 4, name: "Меркурий" },
    { id: 5, name: "Меркурий" },
    { id: 6, name: "Меркурий" },
  ];
  const countsBad = [
    { count: 1 },
    { count: 2 },
    { count: 3 },
    { count: 4 },
    { count: 5 },
    { count: 6 },
  ];

  useEffect(()=>{
      getCatalogOfice()
  },[refresh])
  useEffect(()=>{
   getTop(  )
  },[refresh])
  const getCatalogOfice =()=>{
    http.get("/catalog/offices/").then((res)=>{
      setData(res.data.results)
      setPrev(res.data.previous)
      setNext(res.data.next)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  const getTop =()=>{
    http.get("/catalog/offices/top_office/").then((res)=>{
      console.log(res.data)
      setTopData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  const [typefilter , setTypefilter] = useState(false)

  const handleLike =(ids)=>{

  if(token){
    http.post("/catalog/wishlist/" , {
      user: id,
    office: ids,
    }).then((res)=>{
    if(res.status === 201){
       setRefresh(!refresh)
    }
    }).catch((err)=>{
      console.log(err)
    })
  }else{
      navigate("/login")
  }
  }
  return (
 
    <main>
      <section className="catalogue">
        <div className="container">
          <aside className={typefilter ? "opened catalogue-sidebar" :'catalogue-sidebar'}>
            <button onClick={()=>setTypefilter(false)} className="catalogue-sidebar__m-close"></button>
            <form className="search">
              <input className="search__input" placeholder="Поиск" type="text" />
              <button className="search__btn"></button>

            </form>
            <div className="catalogue-sidebar__map ">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1587.6732705327015!2d37.61162510615549!3d55.753133013427124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1682358266572!5m2!1sru!2sua"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Москва сити</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list single">
                  {category1.length &&
                    category1.map((i) => (
                      <li
                        key={i.id}
                        className={`filter-list__item ${
                          i.id === select1 ? "selected" : ""
                        }`}
                        onClick={() => setSelect1(i.id)}
                      >
                        {i.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Москва сити</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">
                  {category2.length &&
                    category2.map((i) => (
                      <li
                        key={i.id}
                        className={`filter-list__item ${
                          i.id === select2 ? "selected" : ""
                        }`}
                        onClick={() => setSelect2(i.id)}
                      >
                        {i.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Москва сити</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">
                  {category3.length &&
                    category3.map((i) => (
                      <li
                        key={i.id}
                        className={`filter-list__item ${
                          i.id === select3 ? "selected" : ""
                        }`}
                        onClick={() => setSelect3(i.id)}
                      >
                        {i.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Москва сити</div>
                <div className="filter-section__icon"></div>
              </div>
              {/* <div className="filter-section__content">
                <div className="price-range" data-max="5000" data-min="50000">
                  <span className="price-range__min">50 000₽</span>
                  <span className="price-range__max">57 000₽</span>
                </div>
              </div> */}
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Дата</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <div className="date-picker">
                  <input type="date" name="" id="" />
                  <div className="separator"></div>
                  <input type="date" name="" id="" />
                </div>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Кол-во кроватей</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">
                  {countsBad.length &&
                    countsBad.map((i) => (
                      <li
                        key={i.count}
                        className={`filter-list__item ${
                          i.count === countBad ? "selected" : ""
                        }`}
                        onClick={() => setCaountBad(i.count)}
                      >
                        {i.count}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Удобства</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="checkbox-list">
                  <li className="checkbox-list__item">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <label for="">Wi Fi</label>
                  </li>
                  <li className="checkbox-list__item">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <label for="">Wi Fi</label>
                  </li>
                  <li className="checkbox-list__item">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <label for="">Wi Fi</label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <div className="catalogue-content">
            <div className="catalogue-content__header">
              <div className="catoluge__main-img dadd">
                <div className="main__map-wrp ">
                  <YMaps
                    query={{ apikey: "ca60917c-ba3d-485a-8711-39fad57f4fe2" }}
                  >
                    <Map
                      width="98%"
                      height="100%"
                      defaultState={{
                        center: [55.684758, 37.738521],
                        zoom: 12,
                      }}
                    >
                      <ZoomControl />
                      <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>
                  </YMaps>
                </div>
              </div>
              <div className="m-catalogue">
                <form className="search">
                  <input
                    className="search__input"
                    placeholder="Поиск"
                    type="text"
                  />
                  <button className="search__btn"></button>
                </form>
                <button onClick={()=>setTypefilter(true)} className="button" id="m-filters">
                  Фильтры
                </button>
              </div>
              <div className="">
                <ul className="catalog__hoverimg-list">
                  <li
                  >
                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">ОАЭ</div>
                    </a>
                  </li>
                  <li
                  >
                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Индонезия</div>
                    </a>
                  </li>
                  <li
                  >
                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Тайланд</div>
                    </a>
                  </li>
                  <li
                  >

                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Турция</div>

                    </a>
                  </li>
                  <li
                  >



                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Дубай</div>

                    </a>
                  </li>
                  <li
                  // style="
                  //   background-image: url('./img/moskva.webp');
                  //   background-size: cover;
                  //   background-position: center;
                  // "
                  >


                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Абу-Даби</div>

                    </a>
                  </li>
                </ul>
              </div>

              <div className="catalog__telef-sec">
                <img className="catalog__phone1" src={izamphone1} alt="" />
                <img className="catalog__phone3" src={izamphone2} alt="" />
                <div className="catalog__telef--text">
                  <h2>Подбирайте недвижимость привычным способом</h2>
                  <p>Наш алгоритм подберет</p>
                  <button>Попробовать</button>
                </div>
              </div>
            </div>

            <section className="offer-section2">
              <h2 className="offer-section2__title">Топ 7 объектов Дубай</h2>
              <div className="offer-section__wrapper">
                <ul className="apartament-list"> 
                {
                  topData?.map((item , index)=>(
                    <li className="apartament-list__item">
                    <div className="apartament-list__preview">
                      <img  onClick={()=>navigate(`/product-item/${item.id}`)} className="current" src={`http://164.92.172.190:8080${item.image[0].image}/`} alt="" />
                      <img src="img/apartament-preview.jpg" alt="" />
                      <img src="img/apartament-preview.jpg" alt="" />
                      <img src="img/apartament-preview.jpg" alt="" />
                      <img src="img/apartament-preview.jpg" alt="" />
                    </div>
                    <div className="preview-paggination">
                      <div className="preview-paggination__item selected"></div>
                      <div className="preview-paggination__item"></div>
                      <div className="preview-paggination__item"></div>
                      <div className="preview-paggination__item"></div>
                      <div className="preview-paggination__item"></div>
                    </div>
                    <div className="apartament-list__header">
                      <div>
                        <p  onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address">
                          {item.name}
                        </p>
                      </div>
                      <button onClick={()=>handleLike(item.id)} className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
                    </div>
                    <p className="apartament-list__price">{item.price}</p>
                    <ul className="apartament-list__tags">
                      <li className="apartament-list__tag">{item.etaj1} этажей</li>
                      <li className="apartament-list__tag">от {item.square} м2</li>
                      <li className="apartament-list__tag">Сдача {item.deadline}</li>
                    </ul>
                  </li>
                  ))
                } 
                
                </ul>
              </div>
            </section>

            <section className="categoriya__title-list">
              <h2>Комплексы Дубай</h2>
              <ul className="apartament-list">
                {
                  data?.map((item , index)=>(
                   <li className="apartament-list__item apartimentts">
                  <div className="apartament-list__preview">
                    <img  onClick={()=>navigate(`/product-item/${item.id}`)} className="current" src={`http://164.92.172.190:8080${item.image[0].image}/`} alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                    <img src="img/apartament-preview.jpg" alt="" />
                  </div>
                  <div className="preview-paggination">
                    <div className="preview-paggination__item selected"></div>
                    <div className="preview-paggination__item"></div>
                    <div className="preview-paggination__item"></div>
                    <div className="preview-paggination__item"></div>
                    <div className="preview-paggination__item"></div>
                  </div>
                  <div className="apartament-list__header">
                    <div>
                      <p onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address">
                        {item.name}
                      </p>
                    </div>
                    <button onClick={()=>handleLike(item.id)}  className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
                  </div>
                  <p className="apartament-list__price">{item.price}₽/месяц</p>
                  <ul className="apartament-list__tags">
                    <li className="apartament-list__tag">{item.etaj1} этаж</li>
                    <li className="apartament-list__tag">{item.square} м2</li>
                    <li className="apartament-list__tag">Сдача {item.deadline}</li>
                  </ul>
                
                   </li>
                  ))
                }
            
              </ul>
            </section>
       
   
            {/* <div
              className="catalogue-banner2 catalugbarner2-bag"
              // style="background-image: url(img/categback.png)"
            >
              <a className="catolog-barner__route" href="">
                <div className="catalogue-banner__description">
                  <div className="catalogue-banner__title">Лидмагнит</div>
                  <p className="catalogue-banner__text">Скачайте</p>
                </div>
                <button className="learn-more">Подробнее</button>
              </a>
            </div> */}
                 <div className="catalogue-banner2 catalugbarner2-bag">
              <a className="catolog-barner__route" href="">
                <div className="catalogue-banner__description">
                  <div className="catalogue-banner__title">
                    Район Дубай марина
                  </div>
                  <p className="catalogue-banner__text">Перейти к статье</p>
                </div>
                <button className="learn-more">Подробнее</button>
              </a>
            </div>

            <div className="catalogue-paggination">
              <span className="catalogue-paggination__prev" href="">
                <img src={arrowleft} alt="" />
              </span>
              <ul className="paggination-list">
                <li className="paggination-list__item">1</li>
                <li className="paggination-list__item selected">2</li>
                <li className="paggination-list__item">3</li>
                <li className="paggination-list__item">4</li>
                <li className="paggination-list__item">...</li>
                <li className="paggination-list__item">15</li>
              </ul>
              <span className="catalogue-paggination__next" href="">
                <img src={arrowleft} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cataloge;
