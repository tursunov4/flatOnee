import React, { useContext, useEffect, useRef, useState } from "react";
import apartiment from "../../assets/img/apartament-preview.webp";
import telefoon from "../../assets/img/telefon.svg";
import phone from "../../assets/img/iphone.webp";
import ourmisson from "../../assets/img/our-mission.webp";
import flatforg from "../../assets/img/faltfrog.svg";
import flatforg2 from "../../assets/img/faltfrog2.svg";
import iphone from "../../assets/img/iphone.webp";
import iphone2 from "../../assets/img/iphone2.webp";
import img90 from "../../assets/img/90.svg"
import img40 from "../../assets/img/40.svg"
import close from '../../assets/img/close-white.svg'
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
import ReactInstaStories from "react-insta-stories";
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")

const HomePage = () => {
  const [typetitle, setTypetitle] = useState("");
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
    http.get(`/catalog/complex/luchshiy/?country=${typetitle}`).then((res)=>{
      setDataoffices(res.data)
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
    const [story , setStory] = useState([])
    const [storymain , setStorymain ] = useState([])
     useEffect(()=>{
      getHistory()
     },[])
    const getHistory =()=>{
      http.get("/catalog/history/").then((res)=>{
        setStorymain(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    const [ty , setTy] = useState(false)
    const [storyid , setStoryid] = useState("")
  window.onclick = function(event) {
      if (event.target.id == "myModal") {
         setTy(false)
      }
    }
    const handleDatabir =(id)=>{
      setTypetitle(id)
      setRefresh(!refresh)
    }
    const handleStory =(item , id)=>{
      setStory(item)
      setStoryid(id)
      setTy(true)
    }
    const stoyrref = useRef()
    const [sendType  , setSendType] = useState(false)
    const handleSubmit =(e)=>{
      e.preventDefault()
      http.post(`/catalog/comment/history/` , {
        history: storyid,
        text: stoyrref.current.value
      }).then((res)=>{
         if(res.status === 201){
          stoyrref.current.value =""
          setSendType(true)
          setTimeout(()=>{
           setSendType(false)
          },800)
         }
      }).catch((err)=>{
        console.log(err)
      })
    }
    const handlenavigate =(id) =>{
       navigate('/catalog/1')
       window.location.reload()
    }
    return (
    <main>
            {
            ty &&
        <div id="myModal" className='insta-stoooriya'>
          <div onClick={()=>setTy(false)} className="recistorys__img" >
            <img width={30} src={close} alt="" />
          </div>
      <div className='insta-stoooriya__wap'>
      {
        story.length !==0  &&
         <ReactInstaStories
      stories={story.map((item , index)=>({
        url: `http://164.92.172.190:8080${item.video_or_image}` ,
        type: item.image_type, // Ma'lumot turi, bu yerda rasm
      }))}
      defaultInterval={1500}
      width={"100%"}
      height={"90vh"}   
    />
      }
      {
        sendType &&
      <div className="story__sentp">
        {
              lan === "ru" &&  `Отправить`
            }
            {
              lan === "en" && `Send`
            }   
           {
            lan === "zh" && `发送`
           }!
      </div>
      }
      <div className="story__footer" >
        <form className="storr__forrm" onSubmit={(e)=>handleSubmit(e)} action="">
        <input ref={stoyrref} placeholder="text..." type="text" />
        <button onClick={(e)=>handleSubmit(e)} >
        {
              lan === "ru" &&  `Отправить`
            }
            {
              lan === "en" && `Send`
            }   
           {
            lan === "zh" && `发送`
           }
        </button>
        </form>
      </div>
      </div>
          </div>
          }
      
      <section className="main-section__update">
        <div className="container__main">
          <div className="main-section__wrapperu">
            <div className="main-section__language"> <span className="cursorimgg"  onClick={()=>handleLanguage("ru")}>Рус </span> | <span className="cursorimgg" onClick={()=>handleLanguage("en")}>En </span>| <span className="cursorimgg" onClick={()=>handleLanguage("zh")} >中國人</span></div>
            <div className="main-seciton__wrapper-inner">
              <h2>
              {
              lan === "ru" && "Меняем мир недвижимости с помощью"
            }
            {
              lan === "en" && "Changing the world of real estate with"
            }
            {
              lan === "zh" && "用人工智慧改變房地產世界"
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
             {
              lan === "zh" && "我們透過將多個神經網路組合到一個系統中來簡化所有流程：從租賃、購買和出租到支付公用事業費用"
            }
               
              </h4>
              <button onClick={()=>handlenavigate(1)} >
              {
              lan === "ru" && ` Найти объект`
            }
            {
              lan === "en" &&  "Find object"
              }
             {
              lan === "zh" &&  `寻找对象`        
                 }
               
                </button>
            </div>
          </div>
        </div>

       
      </section>

      <section className="stories-section">
        <div className="container">
          <ul className="stories-list">
            {
              storymain?.map((item , index)=>(

            <li key={index} onClick={()=>handleStory(item.images_or_videos , item.id)} className="stories-list__item" data-story="1">
              <div className="stories-list__wrapper">
                <div className="stories-list__border"></div>
                <img
                  className="stories-list__preview"
                  src={apartiment}
                  alt=""
                />
              </div>
              <p className="stories-list__title">{item.title}</p>
            </li>
              ))
            }
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
              {
              lan === "zh" && "我們是一家使用神經網路的房地產機構"
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
             {
              lan === "zh" && "我們是一家使用神經網路的房地產機構"
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
              {
              lan === "zh" && "《第一單元》"
            }   
                 <br />
                 {
              lan === "ru" && "от Flat one"
            }
            {
              lan === "en" && 'from Flat one'
            }    
            
            {
              lan === "zh" && "中的“神經經紀人"
            }  
                
              </h2>
              <h5>
              {
              lan === "ru" && `  Создаём инструмент для моментального и точного анализа рынка    недвижимости, который позволяет быть в курсе самых ликвидных и     выгодных лотов.`
            }
            {
              lan === "en" && ` We are creating a tool for instant and accurate analysis of the real estate market, which allows you to be aware of the most liquid and profitable lots.`
            }   
              {
              lan === "zh" && "我們正在創建一個即時、準確分析房地產市場的工具，讓您了解最具流動性和利潤最高的土地。"
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
              {
              lan === "zh" && "什麼是神經經紀人？"
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
              {
              lan === "zh" && "「Neurobroker」Flat one 簡化了房地產中的所有操作：由於單一系統中結合了多個神經網絡，從購買、租賃到水電費支付。"
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
             {
              lan === "zh" && "私人助理"
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
              {
              lan === "zh" && "購買房產時自動分析財務風險和機會可以幫助客戶做出購買房地產的明智決策，減少分析風險和投資的時間。"
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
            {
              lan === "zh" && "您的袖珍经纪人"
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
               {
              lan === "zh" && "房地產銷售中的人工智慧可以預測您的需求並告知您市場的任何變化。 幫助您做出更好的決定。"
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
              {
              lan === "zh" && "為了誰"
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
                {
              lan === "zh" && "誰將從 Neurobroker 中受益？"
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
                 {
              lan === "zh" && "房地產投資者"
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
                         {
              lan === "zh" && "房地產投資者"
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
                   {
                 lan === "zh" && "買家"
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
                   {
                 lan === "zh" && "買家"
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
                   {
                 lan === "zh" && "我們的對象"
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
                  {
                 lan === "zh" && "我們利用神經網路分析以及與頂級開發商的合作來選擇最有利可圖的房產"
                 }  
         
            </p>
          </div>
        </div>
        <ul className="section-list">
          <li className="section-list__item baclist1 ">
            <a className="container" href="">
              <div className="section-list__title">
              {
               lan === "ru" && " Москва"
            }
            {
              lan === "en" && "Moscow"
            } 
              {
              lan === "zh" && "莫斯科"
            }   
               {
                  lan === "ar" && `موسكو`
                } 
               
                </div>
            </a>
          </li>
          <li className="section-list__item  baclist2 ">
            <a className="container" href="">
              <div className="section-list__title">
              {
               lan === "ru" && "  Дубай"
            }
            {
              lan === "en" && "Dubai"
            } 
              {
              lan === "zh" && "迪拜"
            }   
               {
                  lan === "ar" && `دبي`
                } 
              
                </div>
            </a>
          </li>
          <li className="section-list__item baclist3">
            <a className="container" href="">
              <div className="section-list__title">
              {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
            {
              lan === "zh" && '泰國'
            }
             {
                  lan === "ar" && `تايلاند`
                } 
                </div>
            </a>
          </li>
          <li className="section-list__item  baclist4 ">
            <a className="container" href="">
              <div className="section-list__title">
              {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }  
            {
              lan === "zh" && "峇里島"
            }   
               {
                  lan === "ar" && `بالي`
                } 
              </div>
            </a>
          </li>
          <li className="section-list__item  baclist5">
            <a className="container" href="">
              <div className="section-list__title">
              {
               lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
              {
              lan === "zh" && "土耳其"
            }   
               {
                  lan === "ar" && `تركيا`
                } 
              </div>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <div className="container__main">
          <div className="offer-section__mwrap">
            <ul className="offer-section__bar">
              <li
                onClick={() => handleDatabir(1)}
                className={typetitle === 1 && "offer-section__activeli"}
              >
                {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
            {
              lan === "zh" && "阿聯酋"
            }
              {
                  lan === "ar" && `الإمارات العربية المتحدة`
                } 
              </li>
              <li
                onClick={() => handleDatabir(2)}
                className={typetitle === 2 && "offer-section__activeli"}
              >
                 {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
            {
              lan === "zh" && '泰國'
            }
             {
                  lan === "ar" && `تايلاند`
                } 
              </li>
              <li
                onClick={() => handleDatabir(3)}
                className={typetitle === 3 && "offer-section__activeli"}
              >
                 {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }  
            {
              lan === "zh" && "峇里島"
            }   
               {
                  lan === "ar" && `بالي`
                } 
              </li>
              <li
                onClick={() => handleDatabir(4)}
                className={typetitle === 4 && "offer-section__activeli"}
              >
                   {
               lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
              {
              lan === "zh" && "土耳其"
            }   
               {
                  lan === "ar" && `تركيا`
                } 
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
                {
                  lan === 'zh' && `就像您一样，我们节省了时间，这对我们来说不仅重要
                  用不同的句子猜测一切，并准确找到什么
                  你一直在寻找的东西，而不是浪费你的时间
                  当前或假的市场批次`
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
                {
                  lan === 'zh' && "我們在 4 個國家開展業務"
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
                <Placemark  geometry={[55.6, 37.7]} />
      
                
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
                  {
                  lan === 'zh' && "Flat one 是一組解決方案"
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
                  {
                  lan === 'zh' && '  我们现在正在改变市场'
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
                  {
                  lan === 'zh' && ' 很快您將能夠使用成熟的應用程序，：'
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
                {
                  lan === 'zh' && "其中包括"
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
                {
                  lan === "zh" && "更準確預測價格走勢"
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
                  {
                  lan === "zh" &&  `更多指標`
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
                  {
                  lan === "zh" &&  `簡化所有操作流程`
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
                   {
                  lan === "zh" &&  `室內設計的神經網絡`
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
                    {
                  lan === "zh" &&  `在 Telegram 上關注我們產品的開發`
                }
              </p>
            <button>
            {
              lan === "ru" && ` Подписаться`
            }
            {
              lan === "en" &&  "Subscribe"
                          }
             {
              lan === "zh" && "订阅"
            }
             </button>
          </div>
        </div>
      </section>

      <section className="bistro-section">
        <div className="container__main">
          <div className="bistro-text">
            <h2>
            {
                    lan === "ru" && "Точно и быстро"
                 }
                {
                 lan === "en" && `Accurate and fast`
                } 
                  {
                  lan === "zh" &&  `
                  准确快速`
                }
              </h2>
            <p>
              {
                    lan === "ru" && `  Точность нейросетей превосходит человеческую. Обработка больших
                    объёмов информации происходит за секунды.`
                 }
                {
                 lan === "en" && `The accuracy of neural networks exceeds that of humans. Processing large
                 volumes of information happen in seconds.`
                }
                  {
                  lan === "zh" &&  `神经网络的准确性超过了人类。加工量大
                  大量信息在几秒钟内发生`
                }
            
            </p>
          </div>
          <ul className="bistro-section__list">
            
            <li>
              <span className="bistro-foiz">
                <img src={img40} alt="" />
                <p>
                {
                    lan === "ru" && " Секунд"
                 }
                {
                 lan === "en" && `Seconds`
                } 
                 {
                  lan === "zh" &&  `秒数`
                }
                 </p>
              </span>
            </li>
            <li>
              <p className="bistro-text__p">
              {
                    lan === "ru" && `   Необходимы нейросети чтобы создать подборку выгодных для
                    инвестиции объектов, когда человеку на это потребуется около
                    часа.`
                 }
                {
                 lan === "en" && `Neural networks are needed to create a selection of profitable
                 investment of objects when a person will need about
                 hours.`
                } 
               {
                  lan === "zh" &&  `需要神经网络来创建一系列有利可图的
                  当一个人需要时进行物品投资
                  小时。`
                }
              </p>
            </li>
            <li className="bistro__line"></li>
            <li>
              <span className="bistro-foiz">
                <img src={img90} alt="" />
                <p>
                {
                    lan === "ru" && "Точност"
                 }
                {
                 lan === "en" && `Accuracy`
                } 
                 {
                  lan === "zh" &&`      准确性`
                }
                  </p>
              </span>
            </li>
            <li>
              <p className="bistro-text__p">
              {
                    lan === "ru" && `  Точность предсказаний превышает 90% и сопоставима с точностью
                    профессионального инвестиционного брокера`
                 }
                {
                 lan === "en" && `The accuracy of predictions exceeds 90% and is comparable to the accuracy
                 professional investment broker`
                } 
                  {
                  lan === "zh" &&`
                  预测准确率超过90%，媲美准确度
                                      专业投资经纪人`
                }
              
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-h2">
          {
                    lan === "ru" && "Нас рекомендуют"
                 }
                {
                 lan === "en" && `
                 We are recommended`
                } 
                 {
                  lan === "zh" &&`我们被推荐`
                }
            </h2>
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
