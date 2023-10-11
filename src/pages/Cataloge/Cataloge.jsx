import React, { useContext, useEffect, useState } from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from 'react-slider';
import { Context } from "../../Context/Context";
import { queries } from "@testing-library/react";
import  strelka  from "../../assets/img/strelka.svg"
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")

const Cataloge = () => {
  const [typeabout, setAbout] = useState(false);
  const {lan} = useContext(Context)
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
  const [rangenums , setRangeNums] = useState("")
  const [otdelka , setOdelka] = useState("")
  const [comnat , setComnat] = useState("")
  const [count , setCount] = useState(1)  
  const [likePaginate , setLikePaginate] = useState("")
  const navigate = useNavigate()
  const {text} = useParams()
 
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
    http.get("/catalog/complex-range/ ").then((res)=>{
      setRangeNums(res.data)

     setPricemin(res.data.min_price-0)
     setPricemax(res.data.max_price-0)
     setQueremax(res.data.max_square)
     setQueremin(res.data.min_square-0)
     setEtajmax(res.data.max_etaj-0)
     setEtajmin(res.data.min_etaj-0)

    }).catch((err)=>{
      console.log(err)
    })
  }
  const getCatalogOfice =()=>{
    http.get(`/catalog/complex/?name=${name}&square_min=${squeremin}&square_max=${squeremax}&price_min=${pricemin}&price_max=${pricemax}&deadline=${sana}&property_type=${protery}&development_type=${development}&construction_phase=${constraction}&transaction_type=${uslovi}&min_etaj=${etajmin}&max_etaj=${etajmax}&otdelka=${otdelka}&comnat=${comnat}&country=${text}`).then((res)=>{
      setData(res.data.results)
      setPrev(res.data.previous)
      setNext(res.data.next)
      setCount(1)
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  const getTop =()=>{
    http.get("/catalog/complex/top_complex/").then((res)=>{
      setTopData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  const [typefilter , setTypefilter] = useState(false)

  const handleLike =(ids)=>{

  if(token){
    http.post("/catalog/wishlist-complex/" , {
      user: id,
    complex: ids,
    }).then((res)=>{
      if(count===1){
        setRefresh(!refresh)
      }else{
          getlikePaginate()
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
      http.delete(`/catalog/wishlist-complex/${ids}/`).then((res)=>{
        if(res.status === 204){
          if(count===1){
            setRefresh(!refresh)
          }else{
              getlikePaginate()
          }
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
      setCatalogtype(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const [money, setMoney] = useState(pricemax); 

  const handleSliderChange = (value) => {
    setNewMaxsum(value)
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
      setLikePaginate(prev)
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
  const getlikePaginate =()=>{
    axios.get(likePaginate).then(res=>{
      setData(res.data.results)
      setPrev(res.data.previous)
      setNext(res.data.next)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const handleNext =()=>{
    if(next){
      setLikePaginate(next)
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



  
   const handleChange = (newValues) =>{
    setPricemin(newValues[0])
    setPricemax(newValues[1])
    setRefresh(!refresh)
   } ;
   const handleChange2 = (newValues) =>{
    setQueremin(newValues[0])
    setQueremax(newValues[1])
    setRefresh(!refresh)

   } ;
   const handleChange3 = (newValues) =>{
    setEtajmin(newValues[0])
    setEtajmax(newValues[1])
    setRefresh(!refresh)
   } ;
  const handleOdelka =(text)=>{
    setOdelka(text)
    setRefresh(!refresh)
  }
   const handleComnat =(text) =>{
    setComnat(text)
    setRefresh(!refresh)
   }
   const [fil1 , setFil1] = useState(false)
   const [fil2 , setFil2] = useState(false)
   const [fil3 , setFil3] = useState(false)
   const [fil4 , setFil4] = useState(false)
   const [fil5 , setFil5] = useState(false)
   const [fil6, setFil6] = useState(false)
   const [fil7, setFil7] = useState(false)
   const [fil8, setFil8] = useState(false)
   const [fil9, setFil9] = useState(false)
   const [fil10, setFil10] = useState(false)
 
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
              <div onClick={()=>setFil1(!fil1)}  className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && " Тип недвижимости"
            }
            {
              lan === "en" && "Property type"
            }
            {
              lan === "zh" && "财产种类              "
            }
               {
                  lan === "ar" && "نوع الملكية"
                }   
                 
                  </div>
                <div className={fil1 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }>
                </div>
              </div>
              {
                fil1 ? "" : 
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
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil2(!fil2)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && "Вид застройки"
            }
            {
              lan === "en" && "Type of development"
            }
            {
              lan === "zh" && "开发类型 "
            }
               {
                  lan === "ar" && "نوع التطوير"
                }   
                 </div>
                <div className={fil2 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil2 ? "":
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
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil3(!fil3)} className="filter-section__header">
                <div className="filter-section__title">
                 
                  {
              lan === "ru" && "Этап строительства"
            }
            {
              lan === "en" && "Construction phase"
            }
            {
              lan === "zh" && "施工阶段 "
            }
               {
                  lan === "ar" && "مرحلة البناء"
                }   
                  </div>
                <div  className={fil3 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil3 ? "":
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
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil4(!fil4)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && " Отделка"
            }
            {
              lan === "en" && "Finishing"
            }
            {
              lan === "zh" && "精加工  "
            }
               {
                  lan === "ar" && "التشطيب"
                }   
                 
                  </div>
                <div  className={fil4 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil4 ? "":
              <div className="filter-section__content">
                <ul className="filter-list selected">
                <li onClick={()=>handleOdelka("beton")} className={otdelka==="beton" ? "filter-list__item  selected":'filter-list__item'}>
                    Бетон
                  </li>
                  <li onClick={()=>handleOdelka("bez_otdelki")} className={otdelka==="bez_otdelki" ? "filter-list__item selected":'filter-list__item'} >Без отделки</li>
                  <li onClick={()=>handleOdelka("baytboks")} className={otdelka==="baytboks" ? "filter-list__item selected":'filter-list__item'}>Вайтбокс</li>
                  <li onClick={()=>handleOdelka("chistovaya")} className={otdelka==="chistovaya" ? "filter-list__item selected":'filter-list__item'}>Чистовая</li>
                  <li onClick={()=>handleOdelka("chistovaya_mebel")} className={otdelka==="chistovaya_mebel" ? "filter-list__item selected":'filter-list__item'}>Чистовая с мебелью</li>
                      
                
                </ul>
              </div>
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil5(!fil5)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && " Этап строительства"
            }
            {
              lan === "en" && "Construction phase "
            }
            {
              lan === "zh" && "施工阶段  "
            }
               {
                  lan === "ar" && "مرحلة البناء"
                }   
                 
                  </div>
                <div  className={fil5 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil5 ? "":
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
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil6(!fil6)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && " Цена"
            }
            {
              lan === "en" && "Price "
            }
            {
              lan === "zh" && " 价格 "
            }
               {
                  lan === "ar" && "سعر"
                }   
                  
                  </div>
                <div  className={fil6 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil6 ? "":
              <div className="filter-section__content">
          
              <Slider
              step={100}
           className="slider"
            value={[pricemin ,pricemax] }
        onChange={handleChange}
        min={rangenums.min_price}
        max={rangenums.max_price}
      />
        <div className="price__change-wrap">
       <p>{pricemin}₽</p>
        <p>{pricemax}₽</p>
        </div>
              </div>
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil7(!fil7)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && "Площадь"
            }
            {
              lan === "en" && "Square"
            }
            {
              lan === "zh" && "正方形"
            }
               {
                  lan === "ar" && "مربع"
                }   
                  
                  </div>
                <div className={fil7 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil7 ? "":
              <div className="filter-section__content">
              <Slider
           className="slider"
            value={[squeremin ,squeremax] }
        onChange={handleChange2}
        min={rangenums.min_square}
        max={rangenums.max_square}
      />
        <div className="price__change-wrap">
       <p>{squeremin}</p>
        <p>{squeremax}</p>
        </div>
              </div>
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil8(!fil8)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && "Этажность"
            }
            {
              lan === "en" && "Number of storeys"
            }
            {
              lan === "zh" && "层数"
            }
               {
                  lan === "ar" && "عدد الطوابق"
                }   
                  </div>
                <div className={fil8 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil8 ?"" :
              <div className="filter-section__content">
              <Slider
           className="slider"
            value={[etajmin ,etajmax] }
        onChange={handleChange3}
        min={rangenums.min_etaj}
        max={rangenums.max_etaj}
      />
        <div className="price__change-wrap">
       <p>{etajmin}</p>
        <p>{etajmax}</p>
        </div>
              </div>
              }
            </div>           
            <div className="filter-section opened">
              <div onClick={()=>setFil9(!fil9)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && " Этап строительства"
            }
            {
              lan === "en" && "Construction phase"
            }
            {
              lan === "zh" && " 施工阶段"
            }
               {
                  lan === "ar" && "مرحلة البناء"
                }   
                 </div>
                <div className={fil9 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil9 ? "" :
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
              }
            </div>
            <div className="filter-section opened">
              <div onClick={()=>setFil10(!fil10)} className="filter-section__header">
                <div className="filter-section__title">
                {
              lan === "ru" && "Количество комнат"
            }
            {
              lan === "en" && "Number of rooms"
            }
            {
              lan === "zh" && "房间的数量"
            }
               {
                  lan === "ar" && "عدد الغرف"
                }   
                  
                  </div>
                <div  className={fil10 ? "filter-section__icon filter-section__icon-rot " :' filter-section__icon' }></div>
              </div>
              {
                fil10 ? "":
              <div className="filter-section__content">
                <ul className="filter-list selected">
                <li  onClick={()=>handleComnat(0)} className={comnat===0 ?  "filter-list__item selected": "filter-list__item"}>
                      Студия
                    </li>
                    <li onClick={()=>handleComnat(1)} className={comnat===1 ?  "filter-list__item selected": "filter-list__item"}>1</li>
                    <li onClick={()=>handleComnat(2)} className={comnat===2 ?  "filter-list__item selected": "filter-list__item"}>2</li>
                    <li onClick={()=>handleComnat(3)} className={comnat===3 ?  "filter-list__item selected": "filter-list__item"}>3</li>
                    <li onClick={()=>handleComnat(4)} className={comnat===4 ?  "filter-list__item selected": "filter-list__item"}>4</li>
                    <li onClick={()=>handleComnat(5)} className={comnat===5 ?  "filter-list__item selected": "filter-list__item"}>5</li>
                </ul>
              </div>
              }
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
                        
                        center:[25.276987, 55.296249] ,
                      
                        zoom: 3,
                      }}
                    >
                      <ZoomControl />
                      {
                       text ==1 && <Placemark geometry={[25.276987, 55.296249]} />
                      }
                      {
                       text ==2 && <Placemark geometry={[13.736717, 100.523186]} />
                      }
                      {
                       text ==3 && <Placemark geometry={[ -8.650000, 115.216667]} />
                      }
                      {
                       text ==4 && <Placemark geometry={[41.0214 ,  28.9948]} />
                      }
                     
                    </Map>
                  </YMaps>
                </div>
              </div>
              <div className="m-catalogue">
                <form className="search">
                  <input
                  onChange={(e)=>handleSearch(e)}
                    className="search__input"
                    placeholder="Поиск"
                    type="text"
                  />
                  <button className="search__btn"></button>
                </form>
                <button onClick={()=>setTypefilter(true)} className="button" id="m-filters">
                {
              lan === "ru" && " Фильтры"
            }
            {
              lan === "en" && "Filters"
            }
            {
              lan === "zh" && "过滤器"
            }
               {
                  lan === "ar" && "المرشحات"
                }                    
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
                  <h2>
                  {
              lan === "ru" && "Подбирайте недвижимость привычным способом"
            }
            {
              lan === "en" && "Select real estate in the usual way"
            }
            {
              lan === "zh" && "按常规方式选择房产"
            }
               {
                  lan === "ar" && "اختر العقارات بالطريقة المعتادة"
                }   
                    </h2>
                  <p>
                  {
              lan === "ru" && " Наш алгоритм подберет"
            }
            {
              lan === "en" && "Our algorithm will select"
            }
            {
              lan === "zh" && "我们的算法将选择"
            }
               {
                  lan === "ar" && "سوف تختار الخوارزمية لدينا"
                }  
                   </p>
                  <button>
                  {
              lan === "ru" && "  Попробовать"
            }
            {
              lan === "en" && "Try it"
            }
            {
              lan === "zh" && "尝试一下"
            }
               {
                  lan === "ar" && "جربها"
                }  
                  </button>
                </div>
              </div>
            </div>

            <section className="offer-section2">
              <h2 className="offer-section2__title">
              {
              lan === "ru" && " Топ 7 объектов Дубай"
            }
            {
              lan === "en" && "Top 7 Dubai properties"
            }
            {
              lan === "zh" && "迪拜 7 佳酒店"
            }
               {
                  lan === "ar" && "أفضل 7 عقارات في دبي"
                } 
               </h2>
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
                    
                    <div className="apartament-list__header">
                      <div>
                        <p  onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address">
                          {item.name}
                        </p>  
                      </div>
                      <button onClick={item.like_status ? ()=>handleDislike(item.id)  :()=>handleLike(item.id) } className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
                    </div>
                    <p onClick={()=>navigate(`/product-item/${item.id}`)}  className="apartament-list__price">{item.price}</p>
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
              <h2>
              {
              lan === "ru" && "  Комплексы Дубай"
            }
            {
              lan === "en" && "Complexes Dubai"
            }
            {
              lan === "zh" && "  Комплексы Дубай"
            }
               {
                  lan === "ar" && "مجمعات دبي"
                } 
              </h2>
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
                  <p onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__price">{item.price}₽/месяц</p>
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
          {
            data.length !== 0 &&
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
          }
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
                 <div onClick={()=>navigate("/articlemain")}  className="catalogue-banner2 catalugbarner2-bag">
              <div  className="catolog-barner__route" href="">
                <div className="catalogue-banner__description">
                  <div className="catalogue-banner__title">
                  {
              lan === "ru" && "Район Дубай марина"
            }
            {
              lan === "en" && "Dubai Marina area"
            }
            {
              lan === "zh" && "迪拜码头区"
            }
               {
                  lan === "ar" && "منطقة دبي مارينا"
                } 
                    
                  </div>
                  <p className="catalogue-banner__text">
                  {
              lan === "ru" && " Перейти к статье"
            }
            {
              lan === "en" && "Go to article"
            }
            {
              lan === "zh" && "前往文章"
            }
               {
                  lan === "ar" && 'انتقل إلى المادة'
                } 
                   </p>
                </div>
                <button className="learn-more">
                {
              lan === "ru" && "  Подробнее"
            }
            {
              lan === "en" && "More details"
            }
            {
              lan === "zh" && "更多细节"
            }
               {
                  lan === "ar" && 'المزيد من التفاصيل'
                } 
                
                  </button>
              </div>
            </div>

         
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cataloge;
