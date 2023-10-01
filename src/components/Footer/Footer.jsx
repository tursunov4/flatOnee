import React, { useState } from 'react'
import http from '../../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  const [phone, setPhone] = useState("")
  const [text , setText] = useState("")
  const notify = (text) => toast(`${text}`);
  const handleClick =(e) =>{
    e.preventDefault()
    if(phone !== "" && text !== ""){
      http.post("/contact/post/" ,{
        name: text,
        phone: phone
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
         setTimeout(()=>{
          window.location.reload()
         }, 2000)
        }
      })
    }
  
  }
  return (
    <>
        <ToastContainer
              autoClose={1500}           
       />
      <footer className="footer">
    <div className="container">
      <div className="footer__left">
        <div className="footer__title">Flat one</div>
        <nav className="footer-nav">
          <a className="footer-nav__item" href="">Раздел</a>
          <a className="footer-nav__item" href="">Раздел</a>
          <a className="footer-nav__item" href="">Раздел</a>
          <a className="footer-nav__item" href="">Раздел</a>
        </nav>
        <div className="footer__copyright">
          Copyright © 2023 Dossles design | All Rights Reserved
        </div>
      </div>
      <div className="footer__right">
        <form className="footer-form" action="">
          <p className="footer-form__text">
            Оставте заявку и наш специалист ответит на интересующие вас
            вопросы
          </p>
          <input
            onChange={(e)=>setText(e.target.value)}
            className="footer-form__input"
            placeholder="Как к вам обращаться"
            type="text"
          />
          <input
            onChange={(e)=>setPhone(e.target.value)}
            className="footer-form__input"
            placeholder="+7 000 000 00 00"
            type="tel"
          />
          {/* <input
            className="footer-form__input"
            placeholder="Введите интересующий вас вопрос"
            type="text"
          /> */}
          <button onClick={(e) =>handleClick(e)} className="footer-form__button">Отправить</button>
          <p className="footer-form__disclaimer">
            Отправляя заявку вы принимаете пользовательское соглашение.
            <a href="">Узнать больше</a>
          </p>
        </form>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer