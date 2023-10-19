import React, { useContext, useEffect, useState } from 'react'
import './savedlist.css'
import arrowleft from "../../assets/img/arrow-left.svg"
import axios from 'axios'
import http from '../../axios'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import mainHeader from "../../assets/img/main-header.jpg"
// import 'rc-slider/assets/index.css';
// import "rsuite/dist/rsuite.css";

import { Navigation, Pagination } from 'swiper/modules';
import { Context } from '../../Context/Context'
const token  = localStorage.getItem("token")
const Savedlist = () => {
    const [typefilter , setTypefilter] = useState(false)
    const [data ,setData] = useState([])
    const [refresh , setRefresh] = useState(false)
    const [constraction , setConstraction] = useState("")
    const [development ,setDevelopment] = useState("")
    const [protery , setProtery] = useState("")
    const [sana , setSana] = useState("")
    const [uslovi , setUslovi] = useState("")
    const [name , setName] = useState("")
    const [catalogtype , setCatalogtype] = useState([])
    const [squeremin , setQueremin] = useState("")
    const [squeremax , setQueremax] = useState("")
    const [pricemin ,setPricemin] = useState("")
    const [pricemax , setPricemax] = useState("")
    const [etajmin ,setEtajmin] = useState("")
    const [etajmax , setEtajmax] = useState("")
    const [newMaxsum , setNewMaxsum] = useState("")
    const [rangenums , setRangeNums] = useState("")
    const [officeimg , setOfficeImage] = useState([])
    const [otdelka , setOdelka] = useState("")
    const [comnat , setComnat] = useState("")
    const [prev ,setPrev] = useState("")

    const [next , setNext] = useState("")
     const [count ,setCount ] = useState(1)
     const {refi , setRefi} = useContext(Context)
    const navigate = useNavigate()
    useEffect(()=>{
    getData()
    },[refresh])
    useEffect(()=>{
        getCatalogtypes()
        getRange()
      },[])
    const getRange =()=>{
        http.get(`/catalog/complex-range/`).then((res)=>{
          setRangeNums(res.data)
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
    
    const getData =()=>{
        http.get(`/catalog/wishlist-complex/?name=${name}&square_min=${squeremin}&square_max=${squeremax}&price_min=${pricemin}&price_max=${pricemax}&deadline=${sana}&property_type=${protery}&development_type=${development}&construction_phase=${constraction}&transaction_type=${uslovi}&otdelka=${otdelka}&comnat=${comnat}&coutry=`).then((res)=>{
            setData(res.data.results)
            setNext(res.data.next)
            setPrev(res.data.previous)
            console.log(res.data.results)
             setCount(1)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleDelet =(id) =>{
      if(token){
        http.delete(`/catalog/wishlist-complex/${id}/`).then((res)=>{
            if(res.status ===204){
                setRefresh(!refresh) 
                setRefi(!refi)
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
            setCount(prev => prev-1)
            setData(res.data.results)
            setPrev(res.data.previous)
            setNext(res.data.next)
            setOfficeImage(res.data.office_info.image)
          
          }).catch((err)=>{
            console.log(err)
          })
        }
      }
      const handleNext =()=>{
        if(next){
          axios.get(next).then((res)=>{
            setCount(prev=>prev+1)
            setData(res.data.results)
            setPrev(res.data.previous)
            setNext(res.data.next)
            
            // setOfficeImage(res.data.office_info.image)
   
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
       const {lan} = useContext(Context)
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
              lan === "ru" && "Формат оплаты"
            }
            {
              lan === "en" && "Payment format "
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
                    <div className="container">
                <img className='mainheader__bavimgg' src={mainHeader} alt="" />

                        <h1 className="catalogue-content__title">
                        {
              lan === "ru" && " Апартаменты Москва Сити долгосрочно"
            }
            {
              lan === "en" && "Moscow City apartments for long term"
            }
            {
              lan === "zh" && "莫斯科市长期公寓"
            }
               {
                  lan === "ar" && 'شقق مدينة موسكو على المدى الطويل'
                }   
                          </h1>
                        <p className="catalogue-content__text">
                        {
              lan === "ru" && " 1 504 из 2 345 вариантов"
            }
            {
              lan === "en" && "1,504 of 2,345 options"
            }
            {
              lan === "zh" && "2,345 个选项中的 1,504 个"
            }
               {
                  lan === "ar" && '1,504 من 2,345 خيارًا'
                }   
                         </p>
                    </div>
                </div>
                <div className="m-catalogue">
                    <form className="search">
                        <input onChange={(e)=>handleSearch(e)} q className="search__input" placeholder="Поиск" type="text"/>
                        <button className="search__btn"></button>
                    </form>

                    <button onClick={()=>setTypefilter(true)} class="button" id="m-filters">Фильтры</button>
                </div>
                <ul className="apartament-list"> 
                {
                    data?.map((item , index)=>(
                        <li className="apartament-list__item">
                        <div className="apartament-list__preview">
                        <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  navigation
                  modules={[Pagination , Navigation]}
                  className="mySwiper2" 
                >

                {
                  item.complex_info.image?.map((item , index)=>(
                    <>
                     <SwiperSlide key={index}> <img    src={`http://164.92.172.190:8080${item?.image}`} alt="" /></SwiperSlide>
                    </>

                ))
              }
              </Swiper>
                        </div>
                        
                        <div className="apartament-list__header">
                            <div>
                                <p  onClick={()=>navigate(`/product-item/${item.complex_info.id}`)} className="apartament-list__address"> {item.office_info?.name}</p>
                             
                            </div>
                            <button onClick={()=>handleDelet(item.complex)} className="apartament-list__favorite-btn filled"></button>
                        </div>
                        <p onClick={()=>navigate(`/product-item/${item.complex_info.id}`)} className="apartament-list__price">{item.complex_info?.price} $</p>
                        <ul className="apartament-list__tags">
                            <li className="apartament-list__tag">{item.complex_info?.etaj1} этаж</li>
                            <li className="apartament-list__tag">{item.complex_info?.square} м2</li>
                            <li className="apartament-list__tag">Сдача {item.complex_info?.deadline}</li>
                        </ul>
                        <p className="apartament-list__location">NEVA TOWERS</p>
                    </li>
                    ))
                }                 
                   
                  
                
                </ul>
                 {
                  data.length !== 0  &&
                <div className="catalogue-paggination">
                    <span onClick={()=>handlePrev()} className="catalogue-paggination__prev" href="">
                        <img src={arrowleft} alt=""/>
                    </span>
                    <ul className="paggination-list">
                        <li className="paggination-list__item">{count}</li>
                    </ul>
                    <span onClick={()=>handleNext()} className="catalogue-paggination__next" href="">
                        <img src={arrowleft} alt=""/>
                    </span>
                </div>
                 }

                <div className="catalogue-banner"
                //  style="background-image: url(img/catalogue-header.jpg);"
                 >
                    <a className="container" href="">
                        <div className="catalogue-banner__description">
                            <div className="catalogue-banner__title">
                            {
              lan === "ru" && " Москва сити тест-драйв"
            }
            {
              lan === "en" && "Moscow city test drive"
            }
            {
              lan === "zh" && "莫斯科市试驾"
            }
               {
                  lan === "ar" && "اختبار القيادة في مدينة موسكو"
                }   
                              
                              </div>
                            <p className="catalogue-banner__text">
                            {
              lan === "ru" && "           Попробуйте пожить в 5 разных апартаментах, чтобы понять что подходит именно вам"
            }
            {
              lan === "en" && " in 5 different apartments to see what's right for you"
            }
            {
              lan === "zh" && "尝试住在 5 套不同的公寓，看看什么适合您"
            }
               {
                  lan === "ar" && "جرب العيش في 5 شقق مختلفة لتعرف ما هو المناسب لك"
                }   
                        .</p>
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
                    </a>
                </div>
                
         
            </div>
        </div>
    </section>
</main>
  )
}

export default Savedlist;