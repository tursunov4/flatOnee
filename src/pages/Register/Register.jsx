import React, { useState } from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'
import profile from "../../assets/img/profile.svg";

const token = localStorage.getItem("token")
const Register = () => {
    const [phone , setPhone] = useState('')
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [firstname , setFirsname] = useState("")
    const [password, setPassword] = useState("")
    const [password2 ,setPassword2] = useState('')
    const [menu ,setMenu] = useState(false)
    const navigate =  useNavigate()
    const handleClick =(e) =>{
        e.preventDefault()
        http.post("/user/register/" , {
            username: username,
            first_name: firstname,
            email: email,
            password: password,
            password2: password2
        }).then((res) =>{
            if(res.status ===201){
                    navigate("/login")
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
    Академия
    </Link>
    <Link to={`/catalog`} className="header-nav__item1" href="">
      ОАЭ
    </Link>
    <Link to={`/catalog`} className="header-nav__item1" href="">
      Тайланд
    </Link>
    <Link to={`/catalog`} className="header-nav__item1" href="">
      Бали
    </Link>
    <Link to={`/catalog`} className="header-nav__item1" href="">
      Турция
    </Link>
    <Link to={`/savedlist`} className="header-nav__item1" href="">
      Избранное
    </Link>
    <Link to={'/articlemain'} className="header-nav__item1" href="">
      Статьи
    </Link>
    <Link to={ token ?  "/brokermain" : "/login"} className="header-nav__item-profile" href="">
      <span>Профиль</span>
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
        <span>Профиль</span>
        <img src={profile} alt="" />
      </Link>
      <Link  onClick={()=>setMenu(false)} to={"/academiya"} className="header-nav__item1" href="">
      Академия
      </Link>
      <Link onClick={()=>setMenu(false)}     to={`/catalog`} className="header-nav__item1" href="">
        ОАЭ
      </Link>
      <Link onClick={()=>setMenu(false)}  to={`/catalog`} className="header-nav__item1" href="">
        Тайланд
      </Link>
      <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
        Бали
      </Link>
      <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
        Турция
      </Link>
      <Link onClick={()=>setMenu(false)}   to={`/savedlist`} className="header-nav__item1" href="">
        Избранное
      </Link>
      <Link onClick={()=>setMenu(false)}  to={'/articlemain'} className="header-nav__item1" href="">
        Статьи
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
    <form className="form">
       
    <div className="form__content">
            <div className="form__title">Регистрация</div>
            <div className="form__input">
                <label>
                    <input onChange={(e) =>setUsername(e.target.value)} name="username"  placeholder="Enter your username"/>
                </label>
            </div>
            <div className="form__input">
                <label>
                    <input onChange={(e)=> setEmail(e.target.value)} name="email"  type='email' placeholder="Enter your email"/>
                </label>
            </div>
            <div className="form__input">
                <label>
                    <input onChange={(e)=>setFirsname(e.target.value)} name="first_name"  placeholder="Enter your firstname"/>
                </label>
            </div>
           
            <div className="form__input">
                <label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder="Пароль"/>
                </label>
            </div>
            <div className="form__input">
                <label>
                    <input onChange={(e)=>setPassword2(e.target.value)} type="password"  placeholder="Повторите пароль"/>
                </label>
            </div>
            <div className="form__btn">
                <button onClick={(e)=>handleClick(e)} className="btn" type="submit">Зарегистрироваться</button>
                <br/>
                <p>У меня аккаунт есть, <Link to={"/login"} >Логин</Link></p>
            </div>
        </div>
    </form>
</div>
    </>
  )
}

export default Register