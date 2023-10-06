import React, { useContext, useState } from 'react'
import "./settings.css"
import strelka from "../../assets/img/strelka.svg"
import flag from "../../assets/img/flag.png"
import china from "../../assets/img/china.png"
import enflag from "../../assets/img/engflag.png"
import arabflag from "../../assets/img/arabflag.png"
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
const Settings = () => {
  const [typelan , setTypelan] = useState(false)
  const {lan ,setLan} = useContext(Context)
  const navigate = useNavigate()
  const handleClick =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("image")
    localStorage.removeItem("email")
    localStorage.removeItem("firstname")
    navigate("/ ")
    window.location.reload()
  }
  const handleLangClick =(lan)=>{
    setLan(lan)
     localStorage.setItem("lang" ,lan)
  }

  return (
    <main>
    <div className="noti-container container-options">
      <div className="notifications">
        <div className="title">
            {
              lan === "ru" && "Настройки"
            }
            {
              lan === "en" && "Settings"
            }
          
          </div>
        <div className="list">
          <Link  to={'/izminitparol'} className="item item-options">
            <div>
            {
              lan === "ru" && " Изменить пароль"
            }
            {
              lan === "en" && "Change password"
            }
            {
              lan === "ar" && 'تغيير البريد'
            }
            </div>
          </Link>
          <Link to={'/izminitemail'} className="item item-options">
            <div>
            {
              lan === "ru" && "Изменить почту"
            }
            {
              lan === "en" && "Change email"
            }
            {
              lan === "ar" && 'تغيير البريد'
            }
            </div>
          </Link>

          <Link to={`/izminitphone`} className="item item-options">
        
            <div>
            {
              lan === "ru" && "Изменить номер телефона"
            }
            {
              lan === "en" && "Change phone number"
            }
             {
              lan === "ar" && 'غير رقم الهاتف'
            }
            </div>
          </Link>

          <Link to={`/udovlena`} className="item item-options">
            <div>
            {
              lan === "ru" && "Настройки уведомлений"
            }
            {
              lan === "en" && "Notifications settings"
            }
            {
              lan === "ar" && "إعدادات الإشعار"
            }
             
              </div>
          </Link>
            <Link onClick={()=>handleClick()} className="item item-options">
            <div>
            {
              lan === "ru" && "Выйти из аккаунта"
            }
            {
              lan === "en" && "Log out"
            }
           
            </div>
          </Link>

        </div>
      </div>
         <div className="settins__langule">
         <div onClick={()=>setTypelan(!typelan)} id="choose__language" className="choose__language">
          <p>
            {
              lan === "ru" && " Выбрать язык"
            }
            {
              lan === "en" && "Select language"
            }     
           
          </p>
          <img id="strelka" className={typelan ? "strelkarotate" : ""} src={strelka} alt="strelka"/>
         </div>

            <form action="">
            <ul  id="choose-form" className={typelan ? "choose__language-form" : "choose__language-form helo"}>
            <li className="list__choose">
              <div>
                <img  width="26" src={flag} alt="flag"/>
                <p>Русский</p>
              </div>
              <label>
                 <input onClick={()=>handleLangClick("ru")} checked={lan==='ru' ? true : false }  id='nam' name='land'  className="choose__language-input" type="checkbox"/>
              </label>
            </li>
            <li className="list__choose">
              <div>
                <img width="26" src={enflag} alt="flag"/>
                <p>English</p>
              </div>
              <input onClick={()=>handleLangClick("en")}  checked={lan==='en' ? true : false }  id='nam' name='land' className="choose__language-input" type="checkbox"/>
            </li>
            <li className='list__choose'>
              <div>
                <img width="26" src={arabflag} alt="flag"/>
                <p>عرب</p>
              </div>
              <input checked={lan ==="ar" ? true : false} onClick={()=>handleLangClick("ar")}  id='nam' name='lan' className="choose__language-input"  type="checkbox"/>
            </li>
             <li className='list__choose' >
              <div>
                <img width="26" src={china} alt="flag"/>
                 <p >China</p>
              </div>
              <input id='nam' name='lan'  className="choose__language-input"  type="checkbox"/>
            </li>
         </ul>
            </form>
         <div className="choose__language-line"></div>
      </div>
    </div>

  </main>
  )
}

export default Settings