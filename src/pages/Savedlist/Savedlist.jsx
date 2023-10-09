import React, { useEffect, useState } from 'react'
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

import { Pagination } from 'swiper/modules';
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
             setCount(1)
            console.log(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleDelet =(id) =>{
      if(token){
        http.delete(`/catalog/wishlist-complex/${id}/`).then((res)=>{
            console.log(res.data)
            if(res.status ===204){
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
                <div className="filter-section__title">Отделка</div>
                <div className="filter-section__icon"></div>
              </div>
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
           className="slider"
            value={[pricemin ,pricemax] }
        onChange={handleChange}
        min={rangenums.min_price}
        max={rangenums.max_price}
      />
        <div className="price__change-wrap">
       <p>{pricemin}</p>
        <p>{pricemax}</p>
        </div>
              </div>
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Площадь</div>
                <div className="filter-section__icon"></div>
              </div>
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
            </div>
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Этажность</div>
                <div className="filter-section__icon"></div>
              </div>
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
            <div className="filter-section opened">
              <div className="filter-section__header">
                <div className="filter-section__title">Количество комнат</div>
                <div className="filter-section__icon"></div>
              </div>
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
            </div>             
          </aside>
            <div className="catalogue-content">
                <div className="catalogue-content__header">
                    <div className="container">
                <img className='mainheader__bavimgg' src={mainHeader} alt="" />

                        <h1 className="catalogue-content__title">Апартаменты Москва Сити долгосрочно </h1>
                        <p className="catalogue-content__text">1 504 из 2 345 вариантов</p>
                    </div>
                </div>
                <div className="m-catalogue">
                    <form className="search">
                        <input className="search__input" placeholder="Поиск" type="text"/>
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
                  modules={[Pagination]}
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
                        <div className="preview-paggination">
                        </div>
                        <div className="apartament-list__header">
                            <div>
                                <p  onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address"> {item.office_info?.name}</p>
                             
                            </div>
                            <button onClick={()=>handleDelet(item.complex)} className="apartament-list__favorite-btn filled"></button>
                        </div>
                        <p onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__price">{item.complex_info?.price}₽/месяц</p>
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
                            <div className="catalogue-banner__title">Москва сити тест-драйв</div>
                            <p className="catalogue-banner__text">Попробуйте пожить в 5 разных апартаментах, чтобы понять что подходит именно вам.</p>
                        </div>
                        <button className="learn-more">Подробнее</button>
                    </a>
                </div>
                
         
            </div>
        </div>
    </section>
</main>
  )
}

export default Savedlist;