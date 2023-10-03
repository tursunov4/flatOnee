import React, { useEffect, useState } from 'react'
import './savedlist.css'
import arrowleft from "../../assets/img/arrow-left.svg"
import axios from 'axios'
import http from '../../axios'
import { useNavigate } from 'react-router-dom'
import Slider from 'rc-slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'rc-slider/assets/index.css';
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
    const [officeimg , setOfficeImage] = useState([])
    const [prev ,setPrev] = useState("")
    const [next , setNext] = useState("")
    const [count ,setCount] = useState(1)
    const navigate = useNavigate()
    useEffect(()=>{
    getData()
    },[refresh])
    useEffect(()=>{
        getCatalogtypes()
        getRange()
      },[])
    const getRange =()=>{
        http.get(`/catalog/range/`).then((res)=>{
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
        http.get(`/catalog/wishlist/?name=${name}&square_min=${squeremin}&square_max=${squeremax}&price_min=${pricemin}&price_max=${newMaxsum}&deadline=${sana}&property_type=${protery}&development_type=${development}&construction_phase=${constraction}&transaction_type=${uslovi}&coutry=`).then((res)=>{
            setData(res.data)
            setOfficeImage(res.data.office_info.image)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleDelet =(id) =>{
        http.delete(`/catalog/wishlist/${id}/`).then((res)=>{
            console.log(res.data)
            if(res.status ===204){
                setRefresh(!refresh) 
            }
        }).catch((err)=>{
            console.log(err)
        })
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

        min={pricemin-0} // Minimum qiymat
        max={pricemax-0} // Maksimum qiymat
        step={10} // Qadam miqdori (masalan, 10 dan 10 gacha o'zgartirish)
        // tipFormatter={(value) => `${value}H`}
        
        
        onChange={handleSliderChange} // Slider o'zgarganda chaqiriladigan funksiya
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
                    <div className="container">
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
                  item.office_info.image?.map((item , index)=>(
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
                                <p  onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address"> {item.office_info.name}</p>
                             
                            </div>
                            <button onClick={()=>handleDelet(item.office)} className="apartament-list__favorite-btn filled"></button>
                        </div>
                        <p className="apartament-list__price">{item.office_info.price}₽/месяц</p>
                        <ul className="apartament-list__tags">
                            <li className="apartament-list__tag">{item.office_info.etaj1} этаж</li>
                            <li className="apartament-list__tag">{item.office_info.square} м2</li>
                            <li className="apartament-list__tag">Сдача {item.office_info.deadline}</li>
                        </ul>
                        <p className="apartament-list__location">NEVA TOWERS</p>
                    </li>
                    ))
                }                 
                   
                  
                
                </ul>

               

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
                
                <div className="catalogue-paggination">
                    <span className="catalogue-paggination__prev" href="">
                        <img src={arrowleft} alt=""/>
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
                        <img src={arrowleft} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default Savedlist;