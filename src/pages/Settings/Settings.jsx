import React, { useState } from 'react'
import "./settings.css"
import strelka from "../../assets/img/strelka.svg"
import flag from "../../assets/img/flag.png"
import china from "../../assets/img/china.png"
import engflag from "../../assets/img/engflag.png"
import arabflag from "../../assets/img/arabflag.png"
import { Link } from 'react-router-dom'
const Settings = () => {
  const [typelan , setTypelan] = useState(false)
  return (
    <main>
    <div class="noti-container container-options">
      <div class="notifications">
        <div class="title">Настройки</div>
        <div class="list">
          <Link  to={'/izminitparol'} class="item item-options">
            <div>Изменить пароль</div>
          </Link>
          <Link to={'/izminitemail'} class="item item-options">
            <div>Изменить почту</div>
          </Link>

          <Link to={`/izminitphone`} class="item item-options">
            <div>Изменить номер телефона</div>
          </Link>

          <Link to={`/udovlena`} class="item item-options">
            <div>Настройки уведомлений</div>
          </Link>
            <Link class="item item-options">
            <div>Выйти из аккаунта</div>
          </Link>

        </div>
      </div>
         <div class="settins__langule">
         <div onClick={()=>setTypelan(!typelan)} id="choose__language" class="choose__language">
          <p>Выбрать язык</p>
          <img id="strelka" className={typelan ? "strelkarotate" : ""} src={strelka} alt="strelka"/>
         </div>

         <ul  id="choose-form" className={typelan ? "choose__language-form" : "choose__language-form helo"}>
            <li class="list__choose">
              <div>
                <img  width="26" src={flag} alt="flag"/>
                <p>Русский</p>
              </div>
              <input  class="choose__language-input" type="checkbox"/>
            </li>
            <li class="list__choose">
              <div>
                <img width="26" src={engflag} alt="flag"/>
                <p>English</p>
              </div>
              <input class="choose__language-input" type="checkbox"/>
            </li>
            <li className='list__choose'>
              <div>
                <img width="26" src={arabflag} alt="flag"/>
                <p>عرب</p>
              </div>
              <input class="choose__language-input"  type="checkbox"/>
            </li>
             <li className='list__choose' >
              <div>
                <img width="26" src={china} alt="flag"/>
                 <p >China</p>
              </div>
              <input class="choose__language-input"  type="checkbox"/>
            </li>
         </ul>
         <div class="choose__language-line"></div>
      </div>
    </div>

  </main>
  )
}

export default Settings