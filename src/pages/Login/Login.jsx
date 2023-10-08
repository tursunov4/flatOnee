import React, { useContext, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'
import profile from "../../assets/img/profile.svg";
import { Context } from '../../Context/Context';

const token = localStorage.getItem("token")
const Login = () => {
    const [username , setUsername ] = useState("")
    const [password , setPassword] = useState("")
    const [menu ,setMenu] = useState(false)
    const {lan} = useContext(Context)
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        http.post(`/user/login/` , {
            email_or_username: username,
            password: password
        }).then((res)=>{
            if(res.status ===200){
                localStorage.setItem("token" , res.data.tokens.access )
                localStorage.setItem("id" , res.data.id )
                localStorage.setItem("firstname" , res.data.first_name)
                localStorage.setItem("image" , res.data.image_url)
                localStorage.setItem("email" , res.data.email_or_username)
                navigate("/brokermain")
                window.location.reload()
            }
            if(res.status ===404){
                navigate("/eror404")
            }
        }).catch((err)=>{
            console.log(err)
            
        })
    }
  return (
    <>
        <header className="header ">

<div className="container">
  <Link to={'/'} className="logo" href=""></Link>
  <nav className="header-nav2">
          <Link  to={"/academiya"} className="header-nav__item1" href="">
            {
              lan === "ru" && "Академия"
            }
            {
              lan === "en" && "Academy"
            }
          
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
        
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
           
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
          {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
            
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
               lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
          </Link>
          <Link to={`/savedlist`} className="header-nav__item1" href="">
          {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
          </Link>
          <Link to={'/articlemain'} className="header-nav__item1" href="">
           {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
           
          </Link>
          <Link to={ token ?  "/brokermain" : "/login"} className="header-nav__item-profile" href="">
            <span>
            {
              lan === "ru" && "Профиль"
            }
            {
              lan === "en" && "Profile"
            }   
              </span>
            <img src={profile} alt="" />
          </Link>
        </nav>
  <button onClick={() => setMenu(true)} className="mm-btn">
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
<div className={menu ? "m-menu opened" : `m-menu`}>
        <div className="container">
          <button
            onClick={() => setMenu(false)}
            className="m-menu__close"
          ></button>
          <nav className="header-nav">
            <Link onClick={()=>setMenu(false)} to={"/brokermain"} className="header-nav__item-profile" href="">
              <span>
              {
              lan === "ru" && "Профиль"
            }
            {
              lan === "en" && "Profile"
            } 
              </span>
              <img src={profile} alt="" />
            </Link>
            <Link  onClick={()=>setMenu(false)} to={"/academiya"} className="header-nav__item1" href="">
            {
              lan === "ru" && "Академия"
            }
            {
              lan === "en" && "Academy"
            }
            </Link>
            <Link onClick={()=>setMenu(false)}     to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
            </Link>
            <Link onClick={()=>setMenu(false)}  to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }  
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/savedlist`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
            
            </Link>
            <Link onClick={()=>setMenu(false)}  to={'/articlemain'} className="header-nav__item1" href="">
            {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
            </Link>
          </nav>
          <form className="search">
            <input
              className="search__input"
              placeholder="Введите запрос"
              type="text"
            />
            <button className="search__btn"></button>
          </form>
          <a className="faq__yoz" href="">
            FAQ
          </a>
          <a className="faq__yoz" href="">
            Техподдержка
          </a>
        </div>
      </div>
        </header>    
    <div className="wrapper">
          

    <form  className="form">
   
        <div className="form__content">
            <div className="form__title">Логин</div>
            <div className="form__input">   
                <label>
                    <input onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Email or username"/>
                </label>
            </div>
            <div className="form__input">
                <label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Пароль"/>
                </label>
            </div>
            <div className="form__btn">
                <button className="btn" type='submit' onClick={(e)=>handleSubmit(e)} >Войти</button>
                <br />

                <p>У меня нет аккаунт <Link to={'/register'}>Регистрация</Link></p>
                <p> Забыeли пароль <a>Здесь</a> </p>
            </div>
        </div>
    </form>
    </div>
    </>
  )
}

export default Login