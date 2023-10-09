import React, { useContext, useRef, useState } from 'react'
import http from '../../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
const token = localStorage.getItem("token")
const Footer = () => {
  const [phone, setPhone] = useState("")
  const [text , setText] = useState("")
  const notify = (text) => toast(`${text}`);
  const {lan , setLan} = useContext(Context)
  const inputRef = useRef()
  const inputRef2 = useRef()
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
          inputRef.current.value =""
          inputRef2.current.value =''
        }
      }).catch((err)=>{
        
      })
    }
  
  } 
  const navigate = useNavigate()
  const handleReload =(id)=>{
    navigate(`/catalog/${id}`)
    window.location.reload()
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
         <Link onClick={()=>handleReload(1)} to={"/catalog/1"} className="footer-nav__item" href="">
            {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
             {
              lan === "china" && "阿聯酋"
            }
          </Link>
         <Link onClick={()=>handleReload(2)} to={"/catalog/2"} className="footer-nav__item" href="">
           {
              lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
               {
              lan === "china" && "土耳其"
            }  
         </Link>
         <Link onClick={()=>handleReload(3)} to={"/catalog/3"} className="footer-nav__item" href="">
           {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
             {
              lan === "china" && '泰國'
            }
           
         </Link>
         <Link onClick={()=>handleReload(4)} to={"/catalog/4"} className="footer-nav__item" href="">
         {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
             {
              lan === "china" && "峇里島"
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
              {
              lan === "china" && "收藏夾"
            }   
         </Link>
         <Link to={"/articlemain"} className="footer-nav__item" href="">
         {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
              {
              lan === "china" && "文章"
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
              {
              lan === "china" && "輪廓"
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
           {
            lan === "china" && `
            留下请求，我们的专家将回答您的问题`
           }
          </p>
          <input
           ref={inputRef}
            onChange={(e)=>setText(e.target.value)}
            className="footer-form__input"
            placeholder="Как к вам обращаться"
            type="text"
          />
     
          <input
          ref={inputRef2}
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
               {
            lan === "china" && `
            提交申请即表示您接受用户协议。`
           }
           
            <a href="">
            {
              lan === "ru" && "Узнать больше"
            }
            {
              lan === "en" && "To learn more"
            }
                 {
            lan === "china" && `    了解更多`
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