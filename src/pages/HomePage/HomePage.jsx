import React, { useContext, useEffect, useState } from "react";
import apartiment from "../../assets/img/apartament-preview.jpg";
import telefoon from "../../assets/img/telefon.svg";
import phone from "../../assets/img/iphone.png";
import ourmisson from "../../assets/img/our-mission.jpg";
import flatforg from "../../assets/img/faltfrog.svg";
import flatforg2 from "../../assets/img/faltfrog2.svg";
import iphone from "../../assets/img/iphone.png";
import iphone2 from "../../assets/img/iphone2.png";
import img90 from "../../assets/img/90.svg"
import img40 from "../../assets/img/40.svg"
import "./home.css";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import http from "../../axios";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")

const HomePage = () => {
  const [typetitle, setTypetitle] = useState("Москва");
  const [flatabout , setFlatAbout] = useState([])
  const [rekoment1 ,setRekomend1] = useState([])
  const [rekoment2 ,setRekomend2] = useState([])
  const [dataOffices , setDataoffices] = useState([])
  const [refresh , setRefresh] = useState(false)
  const {lan, setLan} = useContext(Context)
   useEffect(()=>{
    flatAbout()
    getFlatRecomend()
    getFlatRecomend2()
   },[refresh])
   const navigate = useNavigate()
  const flatAbout =()=>{
    http.get(`/${lan}/flatone/about/`).then((res)=>{
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
    http.get(`/${lan}/flatone/reconmendation/left/`).then((res)=>{
      setRekomend1(res.data.results)
      if(res.status ===404){
        navigate("/eror404")
    }
    }).catch((err)=>{
      console.log(err)
    })
  }
  const getFlatRecomend2 =()=>{
    http.get(`/${lan}/flatone/reconmendation/right/`).then((res)=>{
      setRekomend2(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getDataOffice()
  },[refresh])
  const getDataOffice =()=>{
    http.get("/catalog/complex/luchshiy/").then((res)=>{
      console.log(res.data)
      setDataoffices(res.data)
      if(res.status ===404){
        navigate("/eror404")
    }
    }).catch((err)=>{
      console.log(err)
    })
  }
  const handleLike =(ids)=>{

    if(token){
      http.post("/catalog/wishlist-complex/" , {
        user: id,
        complex: ids,
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
    const handleDislike =(id)=>{
      if(token){
        http.delete(`/catalog/wishlist-complex/${id}/`).then((res)=>{
          if(res.status === 204){
            setRefresh(!refresh)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }else{
        navigate("/login")
      }
    }
    const handleLanguage =(lang) =>{
      setLan(lang)
      localStorage.setItem("lang" , lang)
      setRefresh(!refresh)
    }
    return (
    <main>
      <section className="main-section__update">
        <div className="container__main">
          <div className="main-section__wrapperu">
            <div className="main-section__language"> <span className="cursorimgg" onClick={()=>handleLanguage("en")}>En </span>| <span className="cursorimgg" onClick={()=>handleLanguage("ru")}>Рус </span> | <span>中國人</span></div>
            <div className="main-seciton__wrapper-inner">
              <h2>
              {
              lan === "ru" && "Меняем мир недвижимости с помощью"
            }
            {
              lan === "en" && "Changing the world of real estate with"
            }
           <span> 
            {
              lan === "ru" && " искусственного интеллекта "
            }
            {
              lan === "en" && " artificial intelligence"
            }
            </span>
              </h2>
              <h4>
              {
              lan === "ru" && "  Упрощаем все процессы: от аренды, покупки и сдачи, до оплаты              коммунальных услуг, за счёт связки из нескольких нейросетей в              единую систему "
            }
            {
              lan === "en" && " We simplify all processes: from rent, purchase and delivery, to payment              utilities, due to a combination of several neural networks in              unified system"
            }
               
              </h4>
              <button onClick={()=>navigate("/catalog")} >Найти объект</button>
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
            {
              lan === "ru" && `Мы — агентсво недвижимости, которое использует`
            }
            {
              lan === "en" && `We are a real estate agency that uses`
            }
              <span> 
              {
              lan === "ru" && ` нейросети`
            }
            {
              lan === "en" && ` neural networks`
            }
              </span>
            </h2>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <div className="our-mission__newtext">
            <p>
            {
              lan === "ru" && ` Заранее подсказываем до 90% ликвидных объектов  `
            }
            {
              lan === "en" && `We suggest up to 90% of liquid objects in advance`
            }              
             </p>
            <div className="our-mission__newwrap">
              <h2>
              {
              lan === "ru" && "«Нейроброкер»"
            }
            {
              lan === "en" && '«Neurobroker»'
            }    
                 <br />
                 {
              lan === "ru" && "от Flat one"
            }
            {
              lan === "en" && 'from Flat one'
            }    
                
              </h2>
              <h5>
              {
              lan === "ru" && `  Создаём инструмент для моментального и точного анализа рынка    недвижимости, который позволяет быть в курсе самых ликвидных и     выгодных лотов.`
            }
            {
              lan === "en" && ` We are creating a tool for instant and accurate analysis of the real estate market, which allows you to be aware of the most liquid and profitable lots.`
            }   
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
              <h2>
              {
              lan === "ru" && `Что такое «Нейроброкер»`
            }
            {
              lan === "en" && `What is Neurobroker?`
            }   
                
              </h2>
              <p>
              {
              lan === "ru" && ` «Нейроброкер» Flat one упрощает все действия в недвижимости: от
              покупки, сдачи, до оплаты коммунальных услуг за счёт связки из
              нескольких нейросетей в единой системе.`
            }
            {
              lan === "en" && `  «Neurobroker»  Flat one simplifies all actions in real estate: from purchase, rental, to payment of utilities due to a combination of several neural networks in a single system.`
            }   

               
              </p>
            </li>
            <li className="ourmis__about-listitem">
              <h2>
              {
              lan === "ru" && "Личный помошник"
            }
            {
              lan === "en" && `Personal assistant`
            }              
             </h2>
              <p>
              {
              lan === "ru" && `   Автоматический анализ финансовых рисков и возможностей при
              покупке объекта помогает клиентам принять обоснованное решение о
              покупке недвижимости, сократив время на анализ рисков и
              инвестиций.`
            }
            {
              lan === "en" && `Automatic analysis of financial risks and opportunities when
              purchasing an object helps clients make an informed decision about
              purchasing real estate, reducing time for risk analysis and
              investments.`
            }      
                
             
              </p>
            </li>
            <li className="ourmis__about-listitem">
              <h2>
              {
              lan === "ru" && "Ваш карманный брокер"
            }
            {
              lan === "en" && `Your pocket broker`
            }           
                </h2>
              <p>
              {
              lan === "ru" && ` Искуственный интеллект в продаже недвижимости прогнозирует для
              вас спрос и собщает о любых изменениях на рынке. Помогает
              принять лучшее решение.`
            }
            {
              lan === "en" && `Artificial intelligence in real estate sales predicts for
              you demand and informs you about any changes in the market. Helps
              make the best decision.`
            }     
           
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="main-cont__tel">
        <div className="container__main">
          <h6>
           {
               lan === "ru" && " Для кого"
            }
            {
              lan === "en" && `For whom`
            }    
           
            </h6>
          <div className="main-cont__wrap">
            <div className="main-cont__text">
              <h2> 
             {
              lan === "ru" && "Кому будет полезен «Нейроброкер»"
            }
            {
              lan === "en" && `Who will benefit from «Neurobroker»`
            }    
                
                </h2>
              <div className="main-cont__wrap-inner">
                <img className="telefonchiziq" src={telefoon} alt="" />
                <ul className="main-cont__wrap-inner-text">
                  <li>
                    <span>01</span>
                    <h5>
                    {
                    lan === "ru" && "Инвестора в недвижимость"
                 }
                {
                 lan === "en" && `Real estate investor`
                }    
           
                      </h5>
                  </li>
                  <li>
                    <span>02</span>
                    <h5>
                    {
                    lan === "ru" && "Собственники сдающие долгосрочно"
                 }
                {
                 lan === "en" && `Owners renting long term`
                }    
                      </h5>
                  </li>
                  <li>
                    <span>03</span>
                    <h5>
                    {
                    lan === "ru" && " Покупатели"
                 }
                {
                 lan === "en" && ` Buyers`
                }    
                     </h5>
                  </li>
                  <li>
                    <span>04 </span>
                    <h5>
                    {
                    lan === "ru" && " Покупатели"
                 }
                {
                 lan === "en" && `  Tenants`
                }    
                     </h5>
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
            <h2>
                  {
                    lan === "ru" && " Наши объекты"
                 }
                {
                 lan === "en" && `Our objects`
                }    
             
              </h2>
            <p>
                 {
                    lan === "ru" &&  ` Отбираем самые выгодные объекты с помощью наших предсказательных
                    нейросетей.`
                 }
                {
                 lan === "en" && `We select the most profitable properties using our predictive tools
                 neural networks.`
                }    
         
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
              <h3>
              {
                    lan === "ru" && "Лучшие предложения"
                 }
                {
                 lan === "en" && `Best deals`
                } 
                </h3>
              <p>
              {
                    lan === "ru" &&  `   Мы также как и вы экономим своё время и для нас важно не просто
                    угадывать все различными предложениями, а находить именно то,
                    что вы давно искали при этом не тратя ваше время на не
                    актуальные или фейковые лоты рынка.`
                 }
                {
                 lan === "en" && `Just like you, we save our time and for us it’s not just important
                 guess everything with different sentences, and find exactly what
                 what you have been looking for for a long time without wasting your time on
                 current or fake market lots.`
                } 
             
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
              <li className="apartament-list__item apartimentts">
                
              <div className="apartament-list__preview">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                {
                  item.image?.map((item , index)=>(
                    <>
                     <SwiperSlide key={index}> <img    src={`http://164.92.172.190:8080${item.image}`} alt="" /></SwiperSlide>
                    </>

                ))
              }
              </Swiper>
              </div>
            
              <div className="apartament-list__header">
                <div>
                  <p  onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address">
                     {item.name}
                  </p>
           
                </div>
                <button onClick={item.like_status ? ()=>handleDislike(item.id)  :()=>handleLike(item.id) } className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
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
          <h2>
                {
                    lan === "ru" && "Мы работаем в 4 странах"
                 }
                {
                 lan === "en" && `We operate in 4 countries`
                } 
            
            </h2>
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
          <h2>  {
                    lan === "ru" && " Flat one это комплекс решений"
                 }
                {
                 lan === "en" && `
                 Flat one is a set of solutions`
                } 
           
            </h2>
          <div className="flarorg__wrap">
            <img className="falatorgimg" src={flatforg} alt="" />
            <img className="falatorgimg2" src={flatforg2} alt="" />
          </div>
          <h3>
               {
                    lan === "ru" && "Меняем рынок уже сейчас"
                 }
                {
                 lan === "en" && ` We are changing the market now`
                } 
            </h3>
        </div>
      </section>

      <section className="telefon2">
        <div className="container__main">
          <div className="telefon2__wrap">
            <div className="telefon2__text">
              <h2>
              {
                    lan === "ru" && "  Скоро вы сможете пользоваться"
                 }
                {
                 lan === "en" && `  Soon you will be able to use`
                } 
              
                <span>
                {
                    lan === "ru" && "  полноценным приложением"
                 }
                {
                 lan === "en" && `
                 full-fledged application`
                } 
                 </span> ,
                 {
                    lan === "ru" && " где будет:"
                 }
                {
                 lan === "en" && `where will:`
                } 
                 
              </h2>
              <ul className="telefon2__list">
                <li>
                  <span>01</span>
                  <h5>
                  {
                    lan === "ru" && "Более точные предсказания динамики цен"
                 }
                {
                 lan === "en" && `More accurate predictions of price movements`
                } 
                    </h5>
                </li>
                <li>
                  <span>02</span>
                  <h5>
                  {
                    lan === "ru" && "    Больше показателей"
                 }
                {
                 lan === "en" && `More indicators`
                } 
                </h5>
                </li>
                <li>
                  <span>03</span>
                  <h5>
                  {
                    lan === "ru" && "Упрощение всех операционных процессов"
                 }
                {
                 lan === "en" && `Simplification of all operational processes`
                } 
                    </h5>
                </li>
                <li>
                  <span>04</span>
                  <h5>
                  {
                    lan === "ru" && " Нейросеть для дизайна интерьеров"
                 }
                {
                 lan === "en" && `Neural network for interior design`
                }
                   </h5>
                </li>
              </ul>
            </div>
            <div className="telfon2__imgs">
              <img className="telfon2__ip" src={iphone} alt="" />
              <img className="telfon2__ip2" src={iphone2} alt="" />
            </div>
          </div>
          <div className="telefon2__btns">
            <p>
               {
                    lan === "ru" && `Следите за развитием нашего продукта в Telegram`
                 }
                {
                 lan === "en" && `
                 Follow the development of our product on Telegram`
                }
              </p>
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
                <img src={img40} alt="" />
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
                <img src={img90} alt="" />
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
