import React, { useEffect, useState } from 'react'
import profileimg from '../../assets/img/profile.png'
import Check from "../../assets/img/check.svg"
import setting from "../../assets/img/setings.svg"
import heart from "../../assets/img/heart-me.svg"
import right from "../../assets/img/right.svg"
import pluss from "../../assets/img/pluss.svg"
import chat from "../../assets/img/chat2.svg"
import alert from "../../assets/img/alert.svg"
import question from "../../assets/img/question.svg"
import history from "../../assets/img/history.svg"
import star from "../../assets/img/star.svg"
import hat from "../../assets/img/hat.svg"
import { useNavigate } from 'react-router-dom'
import http from '../../axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const userimage = localStorage.getItem("image")
const firstname = localStorage.getItem("firstname")
const username = localStorage.getItem("email")
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")

const Brokersmain = () => {
  const navigate = useNavigate()
  const [data , setData] = useState([])
  const [refresh , setRefresh] = useState(false)
  const [chervak , setChervak] = useState("")
  useEffect(()=>{
    getDatao()
  },[refresh])
  useEffect(()=>{
    getChervak()
  },[])

  const getDatao =()=>{
    http.get("/catalog/offices/").then((res)=>{
      setData(res.data.results)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const getChervak =()=>{
    http.get("/catalog/offices/me_offices/").then((res)=>{
      setChervak(res.data)
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



  return (
    <div className="add__container">
   
    <div className="add__row">
      <div className="add__left">
        <div className="add__user-info">
          <div className="add__profile">
            <img src={profileimg} alt="profile" />
          </div>
          <div className="add__user-text">
            <div className="add__user-name">
              <span>{firstname}</span>
              <br />
              <span>{username}</span>
          </div>
            <div className="add__user-status">
              <span>Собственник</span>
              <span><img src={Check} alt="check" /></span>
            </div>
          </div>
          <div className="add__user-setings">
            <img onClick={()=>navigate("/settings")} classNameName='navigate-settings' src={setting} alt="setings" />
          </div>
        </div>
        <div className="add__left-bottom">
          <ul className="add__sections">
            <li className="add__section">
              <div className="add__section-icon">
                <img src={chat} alt="icon" />
              </div>
              <div className="add__section-name">Сообщения</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
            <li className="add__section">
              <div className="add__section-icon">
                <img src={heart} alt="icon" />
              </div>
              <div className="add__section-name">Избранное</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>

            <li className="add__section">
              <div className="add__section-icon">
                <img src={star} alt="icon" />
              </div>
              <div className="add__section-name">Сравнить</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>


            <div className="add__mobile-section">
              <div className="add__section-name">Мои объекты</div>
              <div className="add__mobile-add">
                <button onClick={()=>navigate("/addobject")} className="add__btn-add">
                  <img src={pluss} alt="pluss" />
                  <span>Добавить объект</span>
                </button>
               
                
              </div>
              <div className="add__apartament-list">
                <div className="add__apartament-item">
                  <div className="add__apartament-icon">
                  </div>

                  <div className="add__apartament-count-rooms">
                    2 комнаты, 120м2
                  </div>
                  <div className="add__apartament-price">
                    21 000₽/мес
                  </div>
                  <div className="add__apartament-address">
                    1-й Красногвардейский пр-д, 22 стр. 2
                  </div>
                </div>
                <div className="add__apartament-item">
                  <div className="add__apartament-icon">
                  </div>
                  <div className="add__apartament-count-rooms">
                    2 комнаты, 120м2
                  </div>
                  <div className="add__apartament-price">
                    21 000₽/мес
                  </div>
                  <div className="add__apartament-address">
                    1-й Красногвардейский пр-д, 22 стр. 2
                  </div>
                </div>
                <div className="add__apartament-item">
                  <div className="add__apartament-icon filled">
                  </div>
                  <div className="add__apartament-count-rooms">
                    2 комнаты, 120м2
                  </div>
                  <div className="add__apartament-price">
                    21 000₽/мес
                  </div>
                  <div className="add__apartament-address">
                    1-й Красногвардейский пр-д, 22 стр. 2
                  </div>
                </div>
              </div>
            </div>




            <li onClick={()=>navigate("/chervak")} className="add__section add__sectionmobb">
              <div className="add__section-icon">
                <div className="add__btn-addhat">
                  {
                    chervak.length !== 0 &&
                  <span>{chervak.length}</span>
                  }
                 <img src={hat} alt="hat"/>
                </div>
              </div>
              <div className="add__section-name">Черновики</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
            <li onClick={()=>navigate("/addkompleks")} className="add__section add__sectionmobb">
              <div className="add__section-icon">
                <img src={pluss} alt="icon" />
              </div>
              <div className="add__section-name">Добавить комплекс</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
            <li className="add__section">
              <div className="add__section-icon">
                <img src={alert} alt="icon" />
              </div>
              <div className="add__section-name">Настройки уведомлений</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>

            <li className="add__section">
              <div className="add__section-icon">
                <img src={question} alt="icon" />
              </div>
              <div className="add__section-name">Вопрос — ответ</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>

            <li className="add__section">
              <div className="add__section-icon">
                <img src={history} alt="icon" />
              </div>
              <div className="add__section-name">История просмотров</div>
              <div className="add__section-right">
                <img src={right} alt="to-righ arrow" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="add__right">
        <div className="add__right-top">
          <button onClick={()=>navigate("/addobject")} className="add__btn-add">
            <img src={pluss} alt="pluss" />
            <span>Добавить объект</span>
          </button>
          <button  onClick={()=>navigate("/chervak")} className="add__btn-add">
            <div className="add__btn-addhat">
            {
                    chervak.length !== 0 &&
                  <span>{chervak.length}</span>
                  }
             <img src={hat} alt="hat"/>
            </div>
            <span>Черновики</span>
          </button>
          <button onClick={()=>navigate("/addkompleks")} className="add__btn-add">
            <img src={pluss} alt="pluss" />
            <span>Добавить комплекс</span>
          </button>
        </div>
        <div className="add__right-bottom">
          <div className="add__cards">
            <ul className="apartament-listt">
            {
              data?.map((item , index)=>(                
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
                    <p   onClick={()=>navigate(`/product-item/${item.id}`)}  className="apartament-list__address"> {item.name}</p>
                  </div>
                  <button onClick={item.like_status ? ()=>handleDislike(item.id)  :()=>handleLike(item.id) } className={item.like_status ? "apartament-list__favorite-btn filled" :'apartament-list__favorite-btn'}></button>
                </div>
                <p className="apartament-list__price">250 000₽/месяц</p>
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
        </div>
      </div>
    </div>
  </div>
  )
}

export default Brokersmain