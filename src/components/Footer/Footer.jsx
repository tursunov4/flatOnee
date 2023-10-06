import React, { useContext, useState } from 'react'
import http from '../../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
const token = localStorage.getItem("token")
const Footer = () => {
  const [phone, setPhone] = useState("")
  const [text , setText] = useState("")
  const notify = (text) => toast(`${text}`);
  const {lan , setLan} = useContext(Context)

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
        <nav className="footer-nav2">
         <div className="">
         <Link to={"/catalog"} className="footer-nav__item" href="">
            {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
          </Link>
         <Link to={"/catalog"} className="footer-nav__item" href="">
           {
              lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
         </Link>
         <Link to={"/catalog"} className="footer-nav__item" href="">
           {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
           
         </Link>
         <Link to={"/catalog"} className="footer-nav__item" href="">
         {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
         </Link>
         </div>
         <div>
         <Link to={"/savedlist"} className="footer-nav__item" href="">
           {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
         </Link>
         <Link to={"/articlemain"} className="footer-nav__item" href="">
         {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
         </Link>
         <Link to={token ?  "/brokermain" :"/login"} className="footer-nav__item" href="">
         {
              lan === "ru" && "Профиль"
            }
            {
              lan === "en" && "Profile"
            }   
         </Link>
         <Link to={'/academiya'} className="footer-nav__item" href="">
         {
              lan === "ru" && "Академия"
            }
            {
              lan === "en" && "Academy"
            }
         </Link>
         </div>
        </nav>
        <div className="footer__copyright">
          Copyright © 2023 Dossles design | All Rights Reserved
        </div>
      </div>
      <div className="footer__right">
        <form className="footer-form" action="">
          <p className="footer-form__text">
            {
              lan === "ru" && "  Оставте заявку и наш специалист ответит на интересующие вас           вопросы"
            }
            {
              lan === "en" && "Leave a request and our specialist will answer your questions            questions"
            }   
          
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
           {
              lan === "ru" && " Отправляя заявку вы принимаете пользовательское соглашение."
            }
            {
              lan === "en" && " By submitting an application you accept the user agreement."
            } 
           
            <a href="">
            {
              lan === "ru" && "Узнать больше"
            }
            {
              lan === "en" && "To learn more"
            }
            </a>
            
          </p>
        </form>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer