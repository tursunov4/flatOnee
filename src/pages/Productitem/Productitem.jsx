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
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../axios';
  const Productitem = () => {
  const [typevibor , setTypevibor] = useState(false)
  const [typeplan , setTypeplan] = useState(false)
  const [data, setData] = useState({})
  const [prevnext , setPrevNext] = useState({})
  const [image , setImage] = useState([])
  const [vznos , setVznos] = useState([])
  const { id} = useParams()
  useEffect(()=>{
      getData()
         prevNext()
  },[])
  // useEffect(()=>{
  //  getData()
  //  prevNext()
  // },[])
  const  navigate = useNavigate()
  const getData = ()=>{
    http.get(`/catalog/complex/${id}/`).then((res)=>{
       setData(res.data)
       setImage(res.data.image)
       setVznos(res.data.vznos)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const prevNext =()=>{
    http.get(`/catalog/next-prev/${id}/?obj=complex`).then((res)=>{
      setPrevNext(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const handleNavigate =()=>{
    if(prevnext.prev){
      navigate(`/product-item/${prevnext.prev}`)
      window.location.reload()
    }
  }
  const handleNavigate2 =()=>{
    if(prevnext.next){
      navigate(`/product-item/${prevnext.next}`)
      window.location.reload()
    }
  }

  return (
    <main>
    
    <div className="product-page">
      <div className="container">
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <a href="">оаэ</a>
          </li>
          <li className="breadcrumbs__item">
            <a href="">дубай</a>
          </li>
          <li className="breadcrumbs__item">
            <span>дубай марина крик</span>
          </li>
        </ul>
        <div className="product-page__header">
          <h1 className="product-page__title">Дубай Марина крик</h1>
          <div className="product-interactions">
            <button className={data.like_status ?"wishlist-btn filled" :"wishlist-btn " }></button>
            <button className="share-btn"></button>
          </div>
        </div>
        <div className="product-gallery">
          {
            image[0] &&       <img  src={`http://164.92.172.190:8080${image[0].image}`}alt="" />
          }
   
          <div className="product-gallery__images">
          {
            image[1] &&       <img  src={`http://164.92.172.190:8080${image[1].image}`}alt="" />
          }
             {
            image[2] &&       <img  src={`http://164.92.172.190:8080${image[2].image}`}alt="" />
          }
            {
            image[3] &&       <img  src={`http://164.92.172.190:8080${image[3].image}`}alt="" />
          }
            {
            image[4] &&       <img  src={`http://164.92.172.190:8080${image[4].image}`}alt="" />
          }
           
          </div>
          <button className="product-gallery__see-all">Все фото</button>
        </div>
        <div className="product-content">
          <div>
            <section className="product-section">
              <p className="product-section__p">
                {data.name}
              </p>
              <div className="product-tags">
                {
                  data?.tags?.map((item, index)=>(
                    <p className="product-tags__item" >#{item.name}</p>
                  ))
                }              
              </div>  
            </section>
            <section className="product__about-setion">
              <div onClick={()=>setTypevibor(!typevibor)} id="vibratie-title" className="vibratie-title">
                <h2>Варианты планировок</h2>
                <img className={typevibor ? "pentajstrelka" :''} id="vibratestrelka" src={strelkabig} alt="" />
              </div>
              <ul id="vibrate-section__list" className={typevibor ? "planpetaj-hide" : "vibrate-section__list"}>
                <li className="vibrate-section__list-item">
                  <h4>Студии</h4>
                  <span className="vibrate-section__ulcham">от 40 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    5 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li className="vibrate-section__list-item">
                  <h4>2 комнатные</h4>
                  <span className="vibrate-section__ulcham">от70 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    20 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li className="vibrate-section__list-item">
                  <h4>3 комнатные</h4>
                  <span className="vibrate-section__ulcham">от120 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    2 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li className="vibrate-section__list-item">
                  <h6>
                    Марина крик <img src={strelkatepa} alt="" />
                  </h6>
                  <span className="vibrate-section__ulcham2">Сдан</span>
                  <span className="vibrate-section__ulcham2">380 000$</span>
                  <span className="vibrate-section__ulcham2">209,7 м²</span>
                  <span className="vibrate-section__ulcham2"
                    ><img src={uy} alt=""
                  /></span>
                </li>
                <li className="vibrate-section__list-item">
                  <h6>Корпус 1 <img src={strelkatepa} alt="" /></h6>
                  <span className="vibrate-section__ulcham2">Сдан</span>
                  <span className="vibrate-section__ulcham2">380 000$</span>
                  <span className="vibrate-section__ulcham2">209,7 м²</span>
                  <span className="vibrate-section__ulcham2"
                    ><img src={uy} alt=""
                  /></span>
                </li>
                <li className="vibrate-section__list-item">
                  <h4>3 комнатные</h4>
                  <span className="vibrate-section__ulcham">от70 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    15 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
                <li className="vibrate-section__list-item">
                  <h4>3 комнатные</h4>
                  <span className="vibrate-section__ulcham">от70 м²</span>
                  <span>360 000–380 000$</span>
                  <h6>
                    3 предложений <img src={strelkasmall} alt="" />
                  </h6>
                </li>
              </ul>
            </section>
            <section className="kochestva__knok">
              <h2>Подобрать объект</h2>
              <p>Количество комнат</p>
              <ul className="kochestva__knok-list">
                <li>
                  <span className="kochestve__btn1">студия</span>
                </li>
                <li className="active__kochesbtn">2</li>
                <li>3</li>
                <li>4</li>
                <li>5+</li>
              </ul>
              <div className="uyimg__kochestva">
                <div className="uyimg__kochestva-img">
                  <img src={uybig} alt="" />
                </div>
                <div className="uyimg__kochestva-text">
                  <h3>от 360 000 $</h3>
                  <h2>от 70 м²</h2>
                  <span>от 36 000 $/м2</span>
                  <span className="uyimg__konkurs">Корпус 1</span>
                  <p>2 комнатные</p>
                  <button>Показать предложения</button>
                </div>
              </div>
            </section>
            <section className="kompleks__izab">
              <h2>О комплексе</h2>
              <div className="kompleks__izab-text">
                <ul>
                  <li className="kompleks__izab-textlistitem1">Тип жилья</li>
                  <li className="kompleks__izab-textlistitem1">Первчика</li>
                </ul>
                <ul>
                  <li className="kompleks__izab-textlistitem1">Условия сделки</li>
                  <li className="kompleks__izab-textlistitem1">
                    Покупка в пуле инвесторов
                  </li>
                </ul>
                <ul>
                  <li className="kompleks__izab-textlistitem1">В продаже</li>
                  <li className="kompleks__izab-textlistitem1">55 квартир</li>
                </ul>
                <ul>
                  <li className="kompleks__izab-textlistitem1">Срок сдачи</li>
                  <li className="kompleks__izab-textlistitem1">
                    IV кв 2025 года
                  </li>
                </ul>
                <ul>
                  <li className="kompleks__izab-textlistitem1">Этажность</li>
                  <li className="kompleks__izab-textlistitem1">15 этажей</li>
                </ul>
              </div>
            </section>
            <sectoin className="opesniy">
               <h2>Описание</h2>
               
              <p>{data.description}</p>
            </sectoin>
            <section className="infraktura__proekt">
              <h2>Инфраструктура проекта</h2>
              <ul className="infraktura__proekt-list">
                  <li className="infraktura__proekt-listitem">
                    {
                      data.projectinfrastructure?.map((item , index)=>(
                        <>
                        {
                        item === "restaran" &&    <p><img src={oshxona} alt=""/> <span>Ресторан</span></p> 
                        }
                        {
                          item === "spa"  &&   <p><img src={spa} alt=""/> <span>Спа центр</span></p>
                        }
                        {
                          item === 'bassen' && <p><img src={basen} alt=""/> <span>Бассен</span></p>
                        }
                        {
                          item === 'fitnes' &&  <p><img src={fitne} alt=""/> <span>Фитнес центр</span></p>
                        }
                        {
                          item === 'park' &&  <p><img src={park} alt=""/> <span>Парк</span></p>
                        }
                        </>
                      ))
                    }
                  </li>
                  <li className="infraktura__proekt-listitem">
                  {
                      data.projectinfrastructure
                      ?.map((item , index)=>(
                        <>
                        {
                        item === "kids" && <p><img src={detskiy} alt=""/> <span>Детская площадка</span></p> 
                        }
                        {
                          item === "sport" && <p><img src={ploshad} alt=""/> <span>Спорт площадка</span></p>
                        }                       
                        </>
                      ))
                    }
                     
                  </li>
                
              </ul>
            </section>
            <section className="infraktura__proekt">
              <h2>Инфраструктура района</h2>
              <ul className="infraktura__proekt-list">
                  <li className="infraktura__proekt-listitem">
                  {
                      data.projectinfrastructure
                      ?.map((item , index)=>(
                        <>
                        {
                        item === "kids" && <p><img src={dedsad} alt=""/> <span>Детсад</span></p>
                        }
                        {
                          item === "school" && <p><img src={shkola} alt=""/> <span>Школа</span></p>
                        }                       
                        {
                          item === "metro" &&  <p><img src={metro2} alt=""/> <span>Метро 230м</span></p>
                        }
                        {
                          item === "hospital" &&                        <p><img src={hospital} alt=""/> <span>Больница</span></p>
                        }
                        {
                          item === "tz" && <p><img src={tts} alt=""/> <span>ТЦ</span></p>
                        }
                        </>
                      ))
                    }
                  
                  </li>
                  <li className="infraktura__proekt-listitem">
                  {
                      data.projectinfrastructure
                      ?.map((item , index)=>(
                        <>
                        {
                        item === "kids" &&  <p><img src={detskiy} alt=""/> <span>Детская площадка</span></p>
                        }
                        {
                          item === "restaran" && <p><img src={oshxona} alt=""/> <span>Ресторан</span></p>
                        }                       
                        {
                          item === "magazin" &&  <p><img src={magazin} alt=""/> <span>Магазины</span></p>
                        }
                        {
                          item === "park" && <p><img src={park} alt=""/> <span>Парк</span></p>
                        }
                        {
                          item === "plyaj" && <p><img src={playj} alt=""/> <span>Пляж 240м</span></p>
                        }
                        </>
                      ))
                    }
                     
                  </li>
                
              </ul>
            </section>
            <section className="product-section">
              <div className="product-banner">
                  <a className="container" href="">
                      <h4 className="product-banner__title">Район Дубай марина    </h4>
                      <p className="product-banner__text">Перейти к статье</p>
                  </a>
              </div>
            </section>
             <section className="profuct-file">
              <label className="profuct-file__label" for="product">
                <input className="profuct-file__input" id="product"  type="file"/>
                <img src={file} alt=""/>
                <h4>21 планировка в этом ЖК</h4>
                <p>Выбрать</p>
              </label>
             </section>
             <section className="profuct__doc">
              <h2>Документация от застройщика</h2>
              <ul className="profuct-doc__list">
                <li><img src={pdf} alt=""/><span>Документация</span> </li>
                <li><img src={pdf} alt=""/><span>Документация</span> </li>
                <li><img src={pdf} alt=""/><span>Документация</span> </li>
              </ul>
             </section>
             <section className="zastraoy">
              <h2>О застройщике</h2>
              <ul className="zastraoy-wrapper">
                <li>
                  <p className="zastraoy-wrapperp1">Сдано</p>
                  <p className="zastraoy-wrapperp2">4 объекта <img src={strelkatepa} alt=""/></p>
                </li>
                <li>
                  <p className="zastraoy-wrapperp1">Строится </p>
                  <p className="zastraoy-wrapperp2">3 объекта <img src={strelkatepa         } alt=""/></p>
                </li>
               
              </ul>
             </section>
        
             <section className="product-section">
              <div className="product-banner">
                  <a className="container" href="">
                      <h4 className="product-banner__title">Дубай Марина крик</h4>
                      <p className="product-banner__text">Перейти к статье</p>
                  </a>
              </div>
            </section>  
            <section className="planpetaj">
              <h2>План платежей</h2>
             <div className="planpetaj-wrapper">
              <ul className="planpetaj-list">
                {
                  vznos.map((item , index)=>(
                     <>
                        <li className="planpetaj-listitem">
                    <span className="planpetaj-number">{index+1}</span>
                     <div>
                       <p className="planpetaj-text">{item} Первый взнос</p>
                        <p className="planpetaj-text-item"></p>
                     </div>
                    </li>
                <li className="planpetaj-line"></li>
                     </>
                  ))
                }
              
               
               
              </ul>
               <div onClick={()=>setTypeplan(!typeplan)} id="open__planpetaj" className="open__planpetaj">
                <p>Показать всё</p>
                <img id="pentajstrelka" className={typeplan ? 'pentajstrelka' : ""} src={strelka2} alt=""/>
               </div>
             </div>
            </section>
            {/* <section className="plojkompleks">
              <h2>Похожие комплексы</h2>
              <ul className="apartament-list2">
                <li className="apartament-list__item">
                  <div className="apartament-list__preview">
                    <img className="current" src={apartmentprev} alt="" />
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
                      <p className="apartament-list__address">
                        Emaar Business Park 1, Al Thanyah...
                      </p>
                   
                    </div>
                    <button className="apartament-list__favorite-btn"></button>
                  </div>
                  <p className="apartament-list__price">Creek Heights</p>
                  <ul className="apartament-list__tags">
                    <li className="apartament-list__tag">360 000–590 000 $</li>
                    <li className="apartament-list__tag">от 40 м²</li>
                  </ul>
                </li>
                <li className="apartament-list__item">
                  <div className="apartament-list__preview">
                    <img className="current" src={apartmentprev} alt="" />
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
                      <p className="apartament-list__address">
                        Emaar Business Park 1, Al Thanyah...
                      </p>
                   
                    </div>
                    <button className="apartament-list__favorite-btn"></button>
                  </div>
                  <p className="apartament-list__price">Creek Heights</p>
                  <ul className="apartament-list__tags">
                    <li className="apartament-list__tag">360 000–590 000 $</li>
                    <li className="apartament-list__tag">от 40 м²</li>
                  </ul>
                </li>               
              </ul>
            </section> */}
          </div>
          <aside className="product-sidebar">
            <div className="product-sidebar__top">
              <div className="product-sidebar__price">
               <div className="product-sidebar__price-wrap">
                <h3>от 360 000 до 590 000 $</h3>
                <p>от 36 000 $/м2 до 59 000 $/м2</p>
               </div>
               <a className="product-sidebar__location" href="">
                <img src={location} alt=""/>
               </a>
              </div>
            
            </div>
            <div className="product-sidebar__buttons">
              <button className="product-btn" id="book-btn">
                <img src={telefonproduct} alt=""/>
                <span>Забронировать</span>
              </button>
             
              <button className="product-btn2">
                <img src={chat} alt="" />
              </button>
            </div>
            <div className="separator"></div>
            <p className="product-sidebar__text">К другому объекту</p>
            <div className="product-sidebar__links">
              <button onClick={()=>handleNavigate()} className="product-sidebar__prev" href="">
                <img src={linkarrow} alt="" />
              </button>
              <button onClick={()=>handleNavigate2()} className="product-sidebar__next" href="">
                <img src={linkarrow} alt="" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>      
    <div className="overlay">
      <div className="container">
        <div className="form-overlay">
          <div className="container">
            <button className="form-overlay__close"></button>
            <form action="">
              <p className="form-overlay__text">
                Оставьте контакты и наш специалист свяжется с вами в ближайшее
                время.
              </p>
              <input
                className="form-overlay__input"
                placeholder="Введите имя"
                type="text"
              />
              <input
                className="form-overlay__input"
                placeholder="+7 000 000 00 00"
                type="tel"
              />
              <div className="form-overlay__wrapper">
                <button className="form-overlay__back-btn">Назад</button>
                <button className="form-overlay__confirm-btn">Отправить</button>
              </div>
            </form>
          </div>
        </div>
        <div className="gallery-overlay">
          <div className="container">
            <button className="gallery-overlay__close"></button>
            <div className="gallery-overlay__center">
              <button className="gallery-overlay__prev">
                <img src="img/gallery-arrow.svg" alt="" />
              </button>
              <img
                className="gallery-overlay__current"
                src="img/gallery-overlay.jpg"
                alt=""
              />
              <button className="gallery-overlay__next">
                <img src="img/gallery-arrow.svg" alt="" />
              </button>
            </div>
            <div className="gallery-overlay__wrapper">
              <ul className="gallery-overlay__list">
                <li className="gallery-overlay__item selected">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/apartament-preview.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
                  <img src="img/gallery-overlay.jpg" alt="" />
                </li>
                <li className="gallery-overlay__item">
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