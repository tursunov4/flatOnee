import React, { useEffect, useState } from "react";
import "./catalog.css";
import izamphone1 from "../../assets/img/izamphone1.svg";
import izamphone2 from "../../assets/img/izamphone2.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import arrowleft from "../../assets/img/arrow-left.svg";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import http from "../../axios";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")

const Cataloge = () => {
  const [typeabout, setAbout] = useState(false);

  const [next , setNext ] = useState('')
  const [prev , setPrev] = useState("")
  const [data , setData] = useState([])
  const [topData , setTopData] = useState([])
  const [refresh , setRefresh] = useState(false)
  const [catalogtype , setCatalogtype] = useState([])
  const [constraction , setConstraction] = useState("")
  const [development ,setDevelopment] = useState("")
  const [protery , setProtery] = useState("")
  const [sana , setSana] = useState("")
  const [uslovi , setUslovi] = useState("")
  const [name , setName] = useState("")
  const [squeremin , setQueremin] = useState("")
  const [squeremax , setQueremax] = useState("")
  const [pricemin ,setPricemin] = useState("")
  const [pricemax , setPricemax] = useState("")
  const [etajmin ,setEtajmin] = useState("")
  const [etajmax , setEtajmax] = useState("")
  const [newMaxsum , setNewMaxsum] = useState("")
  const [count , setCount] = useState(1)
  
  const navigate = useNavigate()

  useEffect(()=>{
      getCatalogOfice()
  },[refresh])

  useEffect(()=>{
   getTop( )
  },[refresh])
  useEffect(()=>{
    getCatalogtypes()
    getRange()
  },[])
  const getRange =()=>{
    http.get("/catalog/range/").then((res)=>{
     setPricemin(res.data.min_price-0)
     setPricemax(res.data.max_price-0)
     setQueremax(res.data.max_square-0)
     setQueremin(res.data.min_square-0)
     setEtajmax(res.data.max_etaj-0)
     setEtajmin(res.data.min_etaj-0)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const getCatalogOfice =()=>{
    http.get(`/catalog/offices/?name=${name}&square_min=${squeremin}&square_max=${squeremax}&price_min=${pricemin}&price_max=${newMaxsum}&deadline=${sana}&property_type=${protery}&development_type=${development}&construction_phase=${constraction}&transaction_type=${uslovi}&coutry=`).then((res)=>{
      setData(res.data.results)
      setPrev(res.data.previous)
      setNext(res.data.next)
      console.log(res.data)
      setCount(1)
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

  const handleDislike =(ids)=>{
    if(token){
      http.delete(`/catalog/wishlist/${ids}/`).then((res)=>{
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
  
  const getCatalogtypes =()=>{
    http.get('/catalog/types/').then((res)=>{
      console.log(res.data)
      setCatalogtype(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const [money, setMoney] = useState(pricemax); 

  const handleSliderChange = (value) => {
    setNewMaxsum(value)
    console.log(value)
    setRefresh(!refresh)
  };
  const handleCanstruction =(id) =>{
    setConstraction(id)
    setRefresh(!refresh)
  }
  const handeDevelopment = (id) =>{
    setDevelopment(id)
    setRefresh(!refresh)
  }
  const handleProperty =(id)=>{
    setProtery(id)
    setRefresh(!refresh)
  }
  const handleSana =(id)=>{
    setSana(id)
    setRefresh(!refresh)
  }
  const handleUslovi =(text) =>{
    setUslovi(text)
    setRefresh(!refresh)
  }
  const handleSearch =(e)=>{
    setName(e.target.value)
    setRefresh(!refresh)
  }
  const handlePrev =()=>{
    if(prev){
      axios.get(prev).then((res)=>{
        setData(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
        setCount(prev => prev-1)
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
  const handleNext =()=>{
    if(next){
      axios.get(next).then((res)=>{
        setData(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
        setCount(prev => prev+1)
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
  return (
 
    <main>
      <section className="catalogue">
        <div className="container">
          <aside className={typefilter ? "opened catalogue-sidebar" :'catalogue-sidebar'}>
            <button onClick={()=>setTypefilter(false)} className="catalogue-sidebar__m-close"></button>
            <form className="search">
              <input onChange={(e)=>handleSearch(e)} className="search__input" placeholder="Поиск" type="text" />
              <button className="search__btn"></button>
            </form>
           
         
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Тип недвижимости</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">
                  {
                    catalogtype.construction_phase?.map((item  , index) =>(
                      <li className={constraction=== item.id ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleCanstruction(item.id)} key={index}>
                         {item.name}
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Вид застройки</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">
                  {
                    catalogtype.development_type?.map((item  , index) =>(
                      <li className={development=== item.id ? "filter-list__item selected": "filter-list__item"} onClick={()=>handeDevelopment(item.id)} key={index}>
                         {item.name}
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Этап строительства</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">
                  {
                    catalogtype.property_type?.map((item  , index) =>(
                      <li className={protery=== item.id ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleProperty(item.id)} key={index}>
                         {item.name}
                      </li>
                    ))
                  }                  
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Этап строительства</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">

                      <li className={sana=== "" ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleSana("")} >
                         Сдан
                      </li>
                      <li className={sana=== 2023 ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleSana(2023)} >
                         2023
                      </li>
                      <li className={sana=== 2024 ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleSana(2024)} >
                         2024
                      </li>
                      <li className={sana=== 2025 ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleSana(2025)} >
                         2025
                      </li>
                      <li className={sana=== 2026 ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleSana(2026)} >
                         2026
                      </li>
                      <li className={sana=== 2027 ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleSana(2027)} >
                         2027
                      </li>
                      <li className={sana=== 2028 ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleSana(2028)} >
                         2028
                      </li>
                                 
                </ul>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Цена</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
              <Slider

        min={pricemin-0} 
        max={pricemax-0} 
        step={10} 
        
        
        
        onChange={handleSliderChange} 
      />
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Площадь</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
              <Slider
        min={0} 
        max={1000} 
        step={10} 
        value={money} 
        onChange={handleSliderChange} 
      />
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Этажность</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
              <Slider
        min={0} // Minimum qiymat
        max={1000} // Maksimum qiymat
        step={10} // Qadam miqdori (masalan, 10 dan 10 gacha o'zgartirish)
        value={money} // Slider qiymati
        onChange={handleSliderChange} // Slider o'zgarganda chaqiriladigan funksiya
      />
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Этап строительства</div>
                <div className="filter-section__icon"></div>
              </div>
              <div className="filter-section__content">
                <ul className="filter-list selected">

                      <li className={uslovi=== "sale" ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleUslovi("sale")} >
                      Полная оплата
                      </li>
                      <li className={uslovi=== "rent" ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleUslovi("rent")} >
                      Рассрочка
                      </li>
                      <li className={uslovi=== "sale_rent" ? "filter-list__item selected": "filter-list__item"} onClick={()=>handleUslovi("sale_rent")} >
                      В пуле инвесторов
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
                  className="baclist1"
                  >
                    <a className="catalog__hovera1  " href="">
                      <div className="catalog__hover-text">ОАЭ</div>
                    </a>
                  </li>
                  <li
                  className=" baclist4 "
                  >
                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Индонезия</div>
                    </a>
                  </li>
                  <li
                  className=" baclist3"
                  >
                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Тайланд</div>
                    </a>
                  </li>
                  <li
                  className="baclist5"
                  >

                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Турция</div>

                    </a>
                  </li>
                  <li
                   className=" baclist2 "
                  >
                    <a className="catalog__hovera1" href="">
                      <div className="catalog__hover-text">Дубай</div>

                    </a>
                  </li>
                  <li
                    className=" baclist4 "
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
                    <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper3"
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
                    <div className="preview-paggination">
                   
                    </div>
                    <div className="apartament-list__header">
                      <div>
                        <p  onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address">
                          {item.name}
                        </p>  
                      </div>
                      <button onClick={item.like_status ? ()=>handleDislike(item.id)  :()=>handleLike(item.id) } className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
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
                   <li className="apartament-list__item ">
                  <div className="apartament-list__preview">
                  <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper2"
                >
                {
                  item.image.map((item , index)=>(
                    <>
                     <SwiperSlide key={index}> <img    src={`http://164.92.172.190:8080${item.image}`} alt="" /></SwiperSlide>
                    </>
                ))
              }
              </Swiper>
                  </div>
                  <div className="apartament-list__header">
                    <div>
                      <p onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address">
                        {item.name}
                      </p>
                    </div>
                    <button onClick={item.like_status ? ()=>handleDislike(item.id)  :()=>handleLike(item.id) }  className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
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
       
            <div className="catalogue-paggination">
              <span onClick={()=>handlePrev()} className="catalogue-paggination__prev" href="">
                <img src={arrowleft} alt="" />
              </span>
              <ul className="paggination-list">
                <li className="paggination-list__item">{count}</li>
              </ul>
              <span onClick={()=>handleNext()} className="catalogue-paggination__next" href="">
                <img src={arrowleft} alt="" />
              </span>
            </div>
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

         
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cataloge;
