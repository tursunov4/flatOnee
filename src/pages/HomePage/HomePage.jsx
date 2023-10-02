import React, { useEffect, useState } from "react";
import apartiment from "../../assets/img/apartament-preview.jpg";
import telefoon from "../../assets/img/telefon.svg";
import phone from "../../assets/img/iphone.png";
import ourmisson from "../../assets/img/our-mission.jpg";
import flatforg from "../../assets/img/faltfrog.svg";
import flatforg2 from "../../assets/img/faltfrog2.svg";
import iphone from "../../assets/img/iphone.png";
import iphone2 from "../../assets/img/iphone2.png";
import "./home.css";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import http from "../../axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")
const HomePage = () => {
  const [typetitle, setTypetitle] = useState("Москва");
  const [flatabout , setFlatAbout] = useState([])
  const [rekoment1 ,setRekomend1] = useState([])
  const [rekoment2 ,setRekomend2] = useState([])
  const [dataOffices , setDataoffices] = useState([])
  const [refresh , setRefresh] = useState(false)
   useEffect(()=>{
    flatAbout()
    getFlatRecomend()
    getFlatRecomend2()
   },[])
   const navigate = useNavigate()
  const flatAbout =()=>{
    http.get("/flatone/about/").then((res)=>{
      console.log(res.data)
      setFlatAbout(res.data)
      if(res.status ===404){
        navigate("/eror404")
    }
    }).catch((err)=>{
      console.log(err)
    })
  }
  const getFlatRecomend =()=>{
    http.get("/flatone/reconmendation/left/").then((res)=>{
      setRekomend1(res.data.results)
      if(res.status ===404){
        navigate("/eror404")
    }
    }).catch((err)=>{
      console.log(err)
    })
  }
  const getFlatRecomend2 =()=>{
    http.get("/flatone/reconmendation/right/").then((res)=>{
      setRekomend2(res.data.results)
    })
  }

  useEffect(()=>{
    getDataOffice()
  },[refresh])
  const getDataOffice =()=>{
    http.get("/catalog/offices/").then((res)=>{
      console.log(res.data)
      setDataoffices(res.data.results)
      if(res.status ===404){
        navigate("/eror404")
    }
    }).catch((err)=>{
      console.log(err)
    })
  }
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
      <section className="main-section__update">
        <div className="container__main">
          <div className="main-section__wrapperu">
            <div className="main-section__language">En | Рус | 中國人</div>
            <div className="main-seciton__wrapper-inner">
              <h2>
                Меняем мир недвижимости с помощью            <span>искусственного интеллекта</span>
              </h2>
              <h4>
                Упрощаем все процессы: от аренды, покупки и сдачи, до оплаты
                коммунальных услуг, за счёт связки из нескольких нейросетей в
                единую систему
              </h4>
              <button>Найти объект</button>
            </div>
          </div>
        </div>

       
      </section>

      <section className="stories-section">
        <div className="container">
          <ul className="stories-list">
            <li className="stories-list__item" data-story="1">
              <div className="stories-list__wrapper">
                <div className="stories-list__border"></div>
                <img
                  className="stories-list__preview"
                  src={apartiment}
                  alt=""
                />
              </div>
              <p className="stories-list__title">История</p>
            </li>
            <li className="stories-list__item" data-story="2">
              <div className="stories-list__wrapper">
                <div className="stories-list__border"></div>
                <img
                  className="stories-list__preview"
                  src={apartiment}
                  alt=""
                />
              </div>
              <p className="stories-list__title">История</p>
            </li>
            <li className="stories-list__item" data-story="3">
              <div className="stories-list__wrapper">
                <div className="stories-list__border"></div>
                <img
                  className="stories-list__preview"
                  src={apartiment}
                  alt=""
                />
              </div>
              <p className="stories-list__title">История</p>
            </li>
            <li className="stories-list__item" data-story="4">
              <div className="stories-list__wrapper">
                <div className="stories-list__border"></div>
                <img
                  className="stories-list__preview"
                  src={apartiment}
                  alt=""
                />
              </div>
              <p className="stories-list__title">История</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="mi-section">
        <div className="container__main">
          <div className="mi__wrapper">
            <h2>
              Мы — агентсво недвижимости, которое использует
              <span> нейросети</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <div className="our-mission__newtext">
            <p>Заранее подсказываем до 90% ликвидных объектов</p>
            <div className="our-mission__newwrap">
              <h2>
                «Нейроброкер» <br />
                от Flat one
              </h2>
              <h5>
                Создаём инструмент для моментального и точного анализа рынка
                недвижимости, который позволяет быть в курсе самых ликвидных и
                выгодных лотов.
              </h5>
            </div>
          </div>
          <div className="our-mission__content">
            <img className="our-mission__img" src={ourmisson} alt="" />
            <div className="our-mission__content-wrapper">
              <div>
                <ul className="mission-stats">
                  {
                    flatabout?.map((item , index)=>(
                      <li className="mission-stats__item">
                      <p className="mission-stats__value">{item.count}+</p>
                      <p className="mission-stats__label">
                         {item.title}
                      </p>
                    </li>
                    ))
                  }
                </ul>
                <form className="search">
                  <input
                    className="search__input"
                    placeholder="Найти объект"
                    type="text"
                  />
                  <button className="search__btn"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-mission__about">
        <div className="container__main">
          <ul className="ourmis__about-list">
            <li className="ourmis__about-listitem">
              <h2>Что такое «Нейроброкер»</h2>
              <p>
                «Нейроброкер» Flat one упрощает все действия в недвижимости: от
                покупки, сдачи, до оплаты коммунальных услуг за счёт связки из
                нескольких нейросетей в единой системе.
              </p>
            </li>
            <li className="ourmis__about-listitem">
              <h2>Личный помошник</h2>
              <p>
                Автоматический анализ финансовых рисков и возможностей при
                покупке объекта помогает клиентам принять обоснованное решение о
                покупке недвижимости, сократив время на анализ рисков и
                инвестиций.
              </p>
            </li>
            <li className="ourmis__about-listitem">
              <h2>Ваш карманный брокер</h2>
              <p>
                Искуственный интеллект в продаже недвижимости прогнозирует для
                вас спрос и собщает о любых изменениях на рынке. Помогает
                принять лучшее решение.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="main-cont__tel">
        <div className="container__main">
          <h6>Для кого</h6>
          <div className="main-cont__wrap">
            <div className="main-cont__text">
              <h2>Кому будет полезен «Нейроброкер»</h2>
              <div className="main-cont__wrap-inner">
                <img className="telefonchiziq" src={telefoon} alt="" />
                <ul className="main-cont__wrap-inner-text">
                  <li>
                    <span>01</span>
                    <h5>Инвестора в недвижимость</h5>
                  </li>
                  <li>
                    <span>02</span>
                    <h5>Собственники сдающие долгосрочно</h5>
                  </li>
                  <li>
                    <span>03</span>
                    <h5>Покупатели</h5>
                  </li>
                  <li>
                    <span>04 </span>
                    <h5>Арендаторы</h5>
                  </li>
                </ul>
              </div>
            </div>
            <img className="iphone__img" src={phone} alt="" />
          </div>
        </div>
      </section>

      <section className="sections">
        <div className="container__main">
          <div className="nashobj__wrap">
            <h2>Наши объекты</h2>
            <p>
              Отбираем самые выгодные объекты с помощью наших предсказательных
              нейросетей.
            </p>
          </div>
        </div>
        <ul className="section-list">
          <li className="section-list__item baclist1 ">
            <a className="container" href="">
              <div className="section-list__title">Москва</div>
            </a>
          </li>
          <li className="section-list__item  baclist2 ">
            <a className="container" href="">
              <div className="section-list__title">Дубай</div>
            </a>
          </li>
          <li className="section-list__item baclist3">
            <a className="container" href="">
              <div className="section-list__title">Тайланд</div>
            </a>
          </li>
          <li className="section-list__item  baclist4 ">
            <a className="container" href="">
              <div className="section-list__title">Бали</div>
            </a>
          </li>
          <li className="section-list__item  baclist5">
            <a className="container" href="">
              <div className="section-list__title">Турция</div>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <div className="container__main">
          <div className="offer-section__mwrap">
            <ul className="offer-section__bar">
              <li
                onClick={() => setTypetitle("Москва")}
                className={typetitle === "Москва" && "offer-section__activeli"}
              >
                Москва
              </li>
              <li
                onClick={() => setTypetitle("Дубаи")}
                className={typetitle === "Дубаи" && "offer-section__activeli"}
              >
                Дубаи
              </li>
              <li
                onClick={() => setTypetitle("Бали")}
                className={typetitle === "Бали" && "offer-section__activeli"}
              >
                Бали
              </li>
              <li
                onClick={() => setTypetitle("Тайланд")}
                className={typetitle === "Тайланд" && "offer-section__activeli"}
              >
                Тайланд
              </li>
            </ul>
            <div className="offer-section__bar2">
              <h3>Лучшие предложения</h3>
              <p>
                Мы также как и вы экономим своё время и для нас важно не просто
                угадывать все различными предложениями, а находить именно то,
                что вы давно искали при этом не тратя ваше время на не
                актуальные или фейковые лоты рынка.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="offer-section">
        <div className="offer-section__wrapper">
          <ul className="apartament-list">
            {
            dataOffices?.map((item , index) =>(
              <li className="apartament-list__item">
              <div className="apartament-list__preview">
                <img  onClick={()=>navigate(`/product-item/${item.id}`)} className="current" src={`http://164.92.172.190:8080${item.image[0].image}`} alt="" />
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
        </div>
      </section>

      <section className="main__map">
        <div className="container__main">
          <h2>Мы работаем в 4 странах</h2>
          <div className="main__map-wrp">
            <YMaps query={{ apikey: "ca60917c-ba3d-485a-8711-39fad57f4fe2" }}>
              <Map
                width="98%"
                height="100%"
                defaultState={{ center: [55.684758, 37.738521], zoom: 12 }}
              >
                <ZoomControl />
                <Placemark geometry={[55.684758, 37.738521]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </section>

      <section className="flarorg">
        <div className="container__main">
          <h2>Flat one это комплекс решений</h2>
          <div className="flarorg__wrap">
            <img className="falatorgimg" src={flatforg} alt="" />
            <img className="falatorgimg2" src={flatforg2} alt="" />
          </div>
          <h3>Меняем рынок уже сейчас</h3>
        </div>
      </section>

      <section className="telefon2">
        <div className="container__main">
          <div className="telefon2__wrap">
            <div className="telefon2__text">
              <h2>
                Скоро вы сможете пользоваться
                <span> полноценным приложением</span> , где будет:
              </h2>
              <ul className="telefon2__list">
                <li>
                  <span>01</span>
                  <h5>Более точные предсказания динамики цен</h5>
                </li>
                <li>
                  <span>02</span>
                  <h5>Больше показателей</h5>
                </li>
                <li>
                  <span>03</span>
                  <h5>Упрощение всех операционных процессов</h5>
                </li>
                <li>
                  <span>04</span>
                  <h5>Нейросеть для дизайна интерьеров</h5>
                </li>
              </ul>
            </div>
            <div className="telfon2__imgs">
              <img className="telfon2__ip" src={iphone} alt="" />
              <img className="telfon2__ip2" src={iphone2} alt="" />
            </div>
          </div>
          <div className="telefon2__btns">
            <p>Следите за развитием нашего продукта в Telegram</p>
            <button>Подписаться</button>
          </div>
        </div>
      </section>

      <section className="bistro-section">
        <div className="container__main">
          <div className="bistro-text">
            <h2>Точно и быстро</h2>
            <p>
              Точность нейросетей превосходит человеческую. Обработка больших
              объёмов информации происходит за секунды.
            </p>
          </div>
          <ul className="bistro-section__list">
            
            <li>
              <span className="bistro-foiz">
                <img src="./img/40.svg" alt="" />
                <p>Секунд</p>
              </span>
            </li>
            <li>
              <p className="bistro-text__p">
                Необходимы нейросети чтобы создать подборку выгодных для
                инвестиции объектов, когда человеку на это потребуется около
                часа.
              </p>
            </li>
            <li className="bistro__line"></li>
            <li>
              <span className="bistro-foiz">
                <img src="./img/90.svg" alt="" />
                <p>Точность</p>
              </span>
            </li>
            <li>
              <p className="bistro-text__p">
                Точность предсказаний превышает 90% и сопоставима с точностью
                профессионального инвестиционного брокера
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-h2">Нас рекомендуют</h2>
          <div className="reviews-wrapper">
            <ul className="reviews-list">
               {
                rekoment1.map((item, index)=>(
              <li className="reviews-list__item">
                <img className="reviews-list__preview" src={item.image} alt="" />
                <div>
                  <div className="reviews-list__name">{item.name}</div>
                  <div className="reviews-list__additional">{item.position}</div>
                  <p className="reviews-list__description">
                   {item.text}
                  </p>
                </div>
              </li>
                ))
               }
        
            </ul>
            <ul className="reviews-list">
              {
                rekoment2.map((item, index)=>(

              <li className="reviews-list__item">
                <img className="reviews-list__preview" src={item.image} alt="" />
                <div>
                  <div className="reviews-list__name">{item.name}</div>
                  <div className="reviews-list__additional">{item.position}</div>
                  <p className="reviews-list__description">
                    {item.text}
                  </p>
                </div>
              </li>
                ))
              }

            </ul>
          </div>
        </div>
      </section>

   
    </main>
  );
};

export default HomePage;
