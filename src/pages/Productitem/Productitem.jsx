import React, { useEffect, useRef, useState } from 'react'
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import close from "../../assets/img/close-white.svg"
import { toast } from 'react-toastify';

const token = localStorage.getItem("token")
  const Productitem = () => {
  const [typevibor , setTypevibor] = useState(false)
  const [typeplan , setTypeplan] = useState(false)
  const [data, setData] = useState({})
  const [prevnext , setPrevNext] = useState({})
  const [image , setImage] = useState([])
  const [vznos , setVznos] = useState([])
  const [other , setOther] = useState([])
  const [refresh , setRefresh] = useState(false)
  const [overlay , setOverlay] = useState(false)
  const inputRef = useRef()
  const inputRef2 = useRef()
  const [num , setNum] = useState("")
  const [text , setText] = useState("")
  const { id} = useParams()
  const [offiseId , setOfficeId] = useState("")
  const [offiseAr , setOfficeAr] = useState([])
  const [comnat1 ,setComnat1] = useState(false)
  const [comnat2 ,setComnat2] = useState(false)
  const [comnat3 ,setComnat3] = useState(false)
  const [comnat4 ,setComnat4] = useState(false)
  const [comnat5 ,setComnat5] = useState(false)
  const [infraimg , setInfraImg] = useState([])
  useEffect(()=>{
      getData()
      prevNext()
  },[refresh])


  const  navigate = useNavigate()
  const getData = ()=>{
    http.get(`/catalog/complex/${id}/`).then((res)=>{
       setData(res.data)
       setImage(res.data.image)
       setVznos(res.data.vznos)
       setOfficeId(res.data.office)
       getOffices(res.data.office)
       console.log(res.data)
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
  useEffect(()=>{
    getOther()
  },[refresh])
  const getOther = ()=>{
    http.get(`/catalog/complex/${id}/other`).then((res)=>{
      console.log(res.data)
      setOther(res.data)
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

  const handleLike =(ids)=>{

    if(token){
      http.post("/catalog/wishlist-complex/" , {
        user: id-0,
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

  const handleDislike =(ids)=>{
    if(token){
      http.delete(`/catalog/wishlist-complex/${ids}/`).then((res)=>{
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
  const [modal , setModal] = useState(false)
  window.onclick = function(event) {
    if (event.target.id == "myModal") {
       setModal(false)
    }
  }
  window.onclick = function(event) {
    if (event.target.id == "overmy") {
       setOverlay(false)
    }
  }
  const handleOtprativ =(e)=>{
      e.preventDefault()
     if(text !== "" && num !== ""){
      http.post("/contact/post/" ,{
        name: text,
        phone: num
      }).then((res)=>{
        if(res.status === 200){
          toast.success(  `${res.data[0]}`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          inputRef.current.value =""
          inputRef2.current.value =''
          setOverlay(false)
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  
  }
  // useEffect(()=>{
  //   getOffices()
  // },[])
  const getOffices = (id) =>{
   

      http.get(`/catalog/offices/${id}/`).then((res)=>{
        console.log(res.data)
        setOfficeAr(res.data.complex)
        setInfraImg(res.data.image)
      }).catch((err)=>{
        console.log(err)
      })
    }
  
  return (
    <main>
        {
            modal &&
        <div id="myModal" className='insta-stoooriya'>          
       <div onClick={()=>setModal(false)} className="recistorys__img" >
            <img width={30} src={close} alt="" />
          </div>
       <div className='imageModal__wrapper'>
       <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination , Navigation]}
                 navigation={true}
                  className="mySwiperimage"
                >
                  {
                    image?.map((item , index)=>(
                <SwiperSlide>
                    <img  src={`http://164.92.172.190:8080${item?.image}`}alt="" />
                 </SwiperSlide>
                    ))
                  }         
     </Swiper>            
       </div>            
          </div>
          }
      
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
            <button onClick={data.like_status ? ()=>handleDislike(data.id)  :()=>handleLike(data.id) } className={data.like_status ?"wishlist-btn filled" :"wishlist-btn " }></button>
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
          <button onClick={()=>setModal(true)} className="product-gallery__see-all">Все фото</button>
        </div>
        <div className="product-content">
          <div>
            <section id='id' className="product-section">
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
            <section id='id' className="product__about-setion">
              <div onClick={()=>setTypevibor(!typevibor)} id="vibratie-title" className="vibratie-title">
                <h2>Варианты планировок</h2>
                <img className={typevibor ? "pentajstrelka" :''} id="vibratestrelka" src={strelkabig} alt="" />
              </div>
              <ul id="vibrate-section__list" className={typevibor ? "planpetaj-hide" : "vibrate-section__list"}>
                 {
                  offiseAr[0]?.count !==0 &&
                  <>
                  <li className="vibrate-section__list-item">
                  <h4>{offiseAr[0]?.comnat} комнатные</h4>
                  <span className="vibrate-section__ulcham">от {offiseAr[0]?.max_ploshad}  м²</span>
                  <span>{offiseAr[0]?.min_price} $</span>
                  <h6 onClick={()=>setComnat1(!comnat1)}>
                    {offiseAr[0]?.count} предложений <img className={comnat1 && "rotate__strelkaa"} src={strelkasmall} alt="" />
                  </h6>
                  </li>
                    {
                      comnat1 &&
                       <>
                        {
                          offiseAr[0]?.data?.map((item , index)=>(
                            <li className="vibrate-section__list-item">
                            <h6>{item?.name} <img src={strelkatepa} alt="" /></h6>
                            <span className="vibrate-section__ulcham2">{item?.price} $</span>
                            <span className="vibrate-section__ulcham2">{item?.square} м²</span>
                            <span className="vibrate-section__ulcham2"
                              ><img  width={50} height={55} src={`http://164.92.172.190:8080${item?.image}`} alt=""
                            /></span>
                          </li>
                          ))
                        }
                       </>
                    }
                  </>
                 }
                 {
                  offiseAr[1]?.count !==0 &&
                  <>
                  <li className="vibrate-section__list-item">
                  <h4>{offiseAr[1]?.comnat} комнатные</h4>
                  <span className="vibrate-section__ulcham">от {offiseAr[1]?.max_ploshad}  м²</span>
                  <span>{offiseAr[1]?.min_price} $</span>
                  <h6 onClick={()=>setComnat2(!comnat2)}>
                    {offiseAr[1]?.count} предложений <img className={comnat2 && "rotate__strelkaa"} src={strelkasmall} alt="" />
                  </h6>
                  </li>
                    {
                      comnat2 &&
                       <>
                        {
                          offiseAr[1]?.data?.map((item , index)=>(
                            <li className="vibrate-section__list-item">
                            <h6>{item?.name} <img src={strelkatepa} alt="" /></h6>
                            <span className="vibrate-section__ulcham2">{item?.price} $</span>
                            <span className="vibrate-section__ulcham2">{item?.square} м²</span>
                            <span className="vibrate-section__ulcham2"
                              ><img width={50} height={55} src={`http://164.92.172.190:8080${item?.image}`} alt=""
                            /></span>
                          </li>
                          ))
                        }
                       </>
                    }
                  </>
                 }
                 {
                  offiseAr[2]?.count !==0 &&
                  <>
                  <li className="vibrate-section__list-item">
                  <h4>{offiseAr[2]?.comnat} комнатные</h4>
                  <span className="vibrate-section__ulcham">от {offiseAr[2]?.max_ploshad}  м²</span>
                  <span>{offiseAr[2]?.min_price} $</span>
                  <h6 onClick={()=>setComnat3(!comnat3)}>
                    {offiseAr[2]?.count} предложений <img className={comnat3 && "rotate__strelkaa"} src={strelkasmall} alt="" />
                  </h6>
                  </li>
                    {
                      comnat3 &&
                       <>
                        {
                          offiseAr[2]?.data?.map((item , index)=>(
                            <li className="vibrate-section__list-item">
                            <h6>{item?.name} <img src={strelkatepa} alt="" /></h6>
                            <span className="vibrate-section__ulcham2">{item?.price} $</span>
                            <span className="vibrate-section__ulcham2">{item?.square} м²</span>
                            <span className="vibrate-section__ulcham2"
                              ><img width={50} height={55} src={`http://164.92.172.190:8080${item?.image}`} alt=""
                            /></span>
                          </li>
                          ))
                        }
                       </>
                    }
                  </>
                 }
                 {
                  offiseAr[3]?.count !==0 &&
                  <>
                  <li className="vibrate-section__list-item">
                  <h4>{offiseAr[3]?.comnat} комнатные</h4>
                  <span className="vibrate-section__ulcham">от {offiseAr[3]?.max_ploshad}  м²</span>
                  <span>{offiseAr[3]?.min_price} $</span>
                  <h6 onClick={()=>setComnat4(!comnat4)}>
                    {offiseAr[3]?.count} предложений <img className={comnat4 && "rotate__strelkaa"} src={strelkasmall} alt="" />
                  </h6>
                  </li>
                    {
                      comnat4 &&
                       <>
                        {
                          offiseAr[3]?.data?.map((item , index)=>(
                            <li className="vibrate-section__list-item">
                            <h6>{item?.name} <img src={strelkatepa} alt="" /></h6>
                            <span className="vibrate-section__ulcham2">{item?.price} $</span>
                            <span className="vibrate-section__ulcham2">{item?.square} м²</span>
                            <span className="vibrate-section__ulcham2"
                              ><img width={50} height={55} src={`http://164.92.172.190:8080${item?.image}`} alt=""
                            /></span>
                          </li>
                          ))
                        }
                       </>
                    }
                  </>
                 }
                 {
                  offiseAr[4]?.count !==0 &&
                  <>
                  <li className="vibrate-section__list-item">
                  <h4>{offiseAr[4]?.comnat} комнатные</h4>
                  <span className="vibrate-section__ulcham">от {offiseAr[4]?.max_ploshad}  м²</span>
                  <span>{offiseAr[4]?.min_price} $</span>
                  <h6  onClick={()=>setComnat5(!comnat5)}>
                    {offiseAr[4]?.count} предложений <img className={comnat5 && "rotate__strelkaa"} src={strelkasmall} alt="" />
                  </h6>
                  </li>
                    {
                      comnat5 &&
                       <>
                        {
                          offiseAr[4]?.data?.map((item , index)=>(
                            <li className="vibrate-section__list-item">
                            <h6>{item?.name} <img src={strelkatepa} alt="" /></h6>
                            <span className="vibrate-section__ulcham">{item?.price} $</span>
                            <span className="vibrate-section__ulcham">{item?.square} м²</span>
                            <span className="vibrate-section__ulcham  "
                              ><img width={50} height={55} src={`http://164.92.172.190:8080${item?.image}`} alt=""
                            /></span>
                          </li>
                          ))
                        }
                       </>
                    }
                  </>
                 }
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
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                {
                  infraimg?.map((item , index)=>(
                    <>
                    {
                      item?.image_type ==="infra" &&
                     <SwiperSlide key={index}> <img    src={`http://164.92.172.190:8080${item.image}`} alt="" /></SwiperSlide>
                    }
                    </>

                ))
              }
              </Swiper>
                  {/* <img src={uybig} alt="" /> */}
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
              <div onClick={()=>navigate('/articlemain')} className="product-banner">
                  <a  className="container" href="">
                      <h4 className="product-banner__title">Район Дубай марина    </h4>
                      <p className="product-banner__text">Перейти к статье</p>
                  </a>
              </div>
            </section>
             <a href='#id'  className="profuct-file">
              <label className="profuct-file__label" for="product">
                {/* <input className="profuct-file__input" id="product"  type="file"/> */}
                <img src={file} alt=""/>
                <h4>21 планировка в этом ЖК</h4>
                <p>Выбрать</p>
              </label>
             </a>
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
                  vznos?.map((item , index)=>(
                     <>
                        <li className="planpetaj-listitem">
                    <span className="planpetaj-number">{index+1}</span>
                     <div>
                       <p className="planpetaj-text">{item}%  {index+1}-взнос</p>
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
            <section className="plojkompleks">
              <h2>Похожие комплексы</h2>
              <ul className="apartament-listt">
            {
              other?.map((item , index)=>(                
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
                     <SwiperSlide key={index}> <img    src={`http://164.92.172.190:8080${item?.image}`} alt="" /></SwiperSlide>
                    </>
                ))
              }
              </Swiper>
                </div>
             
                <div className="apartament-list__header">
                  <div>
                    <p   onClick={()=>navigate(`/product-item/${item.id}`)}  className="apartament-list__address"> {item.name}</p>
                  </div>
                  <button onClick={item.like_status ? ()=>handleDislike(item.id)  :()=>handleLike(item.id) } className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
                </div>
                <p onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__price">250 000₽/месяц</p>
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
              <button onClick={()=>setOverlay(true)} className="product-btn" id="book-btn">
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
    <div id='overmy' className={overlay ?'overlay opened' :"overlay" }>
      <div id='overmy' className="container">
        <div id='overmy' className={overlay ? 'form-overlay opened' :'form-overlay '}>
          <div className="container">
            <button onClick={()=>setOverlay(false)} className="form-overlay__close"></button>
            <form onSubmit={(e)=>handleOtprativ(e)} action="">
              <p className="form-overlay__text">
                Оставьте контакты и наш специалист свяжется с вами в ближайшее
                время.
              </p>
              <input
                ref={inputRef}
                onChange={(e)=>setText(e.target.value)}
                className="form-overlay__input"
                placeholder="Введите имя"
                type="text"
              />
              <input
                ref={inputRef2}
                onChange={(e)=>setNum(e.target.value)}
                className="form-overlay__input"
                placeholder="+7 000 000 00 00"
                type="tel"
              />
              <div className="form-overlay__wrapper">
                <button onClick={()=>setOverlay(false)} className="form-overlay__back-btn">Назад</button>
                <button onClick={(e)=>handleOtprativ(e)} className="form-overlay__confirm-btn">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    </div>
  </main>
  )
}

export default Productitem