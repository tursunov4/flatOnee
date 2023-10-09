import React, { useContext, useState } from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'
import profile from "../../assets/img/profile.svg";
import { Context } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const token = localStorage.getItem("token")
const Register = () => {
    const [phone , setPhone] = useState('')
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [firstname , setFirsname] = useState("")
    const [password, setPassword] = useState("")
    const [password2 ,setPassword2] = useState('')
    const {lan , setLan} = useContext(Context)
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
              toast.success(  `Удачливый !!!`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                    navigate("/login")
            }
        }).catch((err)=>{
            console.log(err)
            toast.error( err.response.data.password && `Password ${err.response.data.password}`
            , {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            toast.error( err.response.data.password2       && `Password2 ${err.response.data.password2}`
            , {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            
            toast.error( err.response.data.username && `Username ${err.response.data.username}`
            , {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            toast.error( err.response.data.email     && `${err.response.data.email}`
            , {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            toast.error( err.response.data.message       && `${err.response.data.message  }`
            , {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            
        
        })
    }
    const handleReload =(id)=>{
      navigate(`/catalog/${id}`)
      setMenu(false)
      window.location.reload()
    }
  return (
    <>
          <ToastContainer/>
          <header className={ "header "}>

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
      {
        lan === "china" && "學院"
      }
         {
            lan === "ar" && "الأكاديمية"
          }   
    
    </Link>
    <Link onClick={()=>handleReload(1)} to={`/catalog/1`} className="header-nav__item1" href="">
     {
        lan === "ru" && "ОАЭ"
      }
      {
        lan === "en" && "UAE"
      }
      {
        lan === "china" && "阿聯酋"
      }
        {
            lan === "ar" && `الإمارات العربية المتحدة`
          } 
  
    </Link>
    <Link  onClick={()=>handleReload(2)} to={`/catalog/2`} className="header-nav__item1" href="">
     {
        lan === "ru" && "Тайланд"
      }
      {
        lan === "en" && "Thailand"
      }      
      {
        lan === "china" && '泰國'
      }
       {
            lan === "ar" && `تايلاند`
          } 
    </Link>
    <Link onClick={()=>handleReload(3)}  to={`/catalog/3`} className="header-nav__item1" href="">
    {
        lan === "ru" && "Бали"
      }
      {
        lan === "en" && "Bali"
      }  
      {
        lan === "china" && "峇里島"
      }   
         {
            lan === "ar" && `بالي`
          } 
    </Link>
    <Link onClick={()=>handleReload(4)}  to={`/catalog/4`} className="header-nav__item1" href="">
     {
         lan === "ru" && "Турция"
      }
      {
        lan === "en" && "Turkiye"
      } 
        {
        lan === "china" && "土耳其"
      }   
         {
            lan === "ar" && `تركيا`
          } 
      
    </Link>
    <Link to={`/savedlist`} className="header-nav__item1" href="">
    {
        lan === "ru" && "Избранное"
      }
      {
        lan === "en" && "Favorites "
      }   
         {
        lan === "china" && "收藏夾"
      }   
       {
            lan === "ar" && `المفضلة`
          } 
    </Link>
    <Link to={'/articlemain'} className="header-nav__item1" href="">
     {
        lan === "ru" && "Статьи"
      }
      {
        lan === "en" && "Tenor"
      }   
         {
        lan === "china" && "文章"
      }  
        {
            lan === "ar" && `مقالات`
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
          {
        lan === "china" && "輪廓"
      }   
       {
            lan === "ar" && `حساب تعريفي`
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
           {
        lan === "china" && "輪廓"
      }   
       {
            lan === "ar" && `حساب تعريفي`
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
       {
        lan === "china" && "學院"
      }
       {
            lan === "ar" && "الأكاديمية"
          }  
      </Link>
      <Link onClick={()=>handleReload(1)}      to={`/catalog/1`} className="header-nav__item1" href="">
      {
        lan === "ru" && "ОАЭ"
      }
      {
        lan === "en" && "UAE"
      }
       {
        lan === "china" && "學院"
      }
      {
            lan === "ar" && `الإمارات العربية المتحدة`
          } 
  
      </Link>
      <Link onClick={()=>handleReload(2)}   to={`/catalog/2`} className="header-nav__item1" href="">
      {
        lan === "ru" && "Тайланд"
      }
      {
        lan === "en" && "Thailand"
      }  
        {
        lan === "china" && '泰國'
      }
       {
            lan === "ar" && `تايلاند`
          } 
      </Link>
      <Link onClick={()=>handleReload(3)}    to={`/catalog/3`} className="header-nav__item1" href="">
      {
        lan === "ru" && "Бали"
      }
      {
        lan === "en" && "Bali"
      }   
         {
        lan === "china" && "峇里島"
      }   
       {
            lan === "ar" && `بالي`
          } 
      </Link>
      <Link onClick={()=>handleReload(4)} to={`/catalog/4`} className="header-nav__item1" href="">
      {
        lan === "ru" && "Турция"
      }
      {
        lan === "en" && "Turkiye"
      } 
       {
        lan === "china" && "土耳其"
      } 
       {
            lan === "ar" && `تركيا`
          } 
      
      </Link>
      <Link onClick={()=>setMenu(false)}   to={`/savedlist`} className="header-nav__item1" href="">
      {
        lan === "ru" && "Избранное"
      }
      {
        lan === "en" && "Favorites "
      }   
      
      {
        lan === "china" && "收藏夾"
      }   
         {
            lan === "ar" && `المفضلة`
          } 
      </Link>
      <Link onClick={()=>setMenu(false)}  to={'/articlemain'} className="header-nav__item1" href="">
      {
        lan === "ru" && "Статьи"
      }
      {
        lan === "en" && "Tenor"
      }   
         {
        lan === "china" && "文章"
      }  
       {
            lan === "ar" && `مقالات`
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
    <form className="form">
       
    <div className="form__content">
            <div className="form__title">
            {
        lan === "ru" && "Регистрация"
      }
      {
        lan === "en" && "Registration"
      }   
         {
        lan === "china" && " 登记"
      }  
       {
            lan === "ar" && `تسجيل  `
          } 
              </div>
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
                    <input onChange={(e)=>setFirsname(e.target.value)} name="first_name"  placeholder="Enter your fullname"/>
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
                <button onClick={(e)=>handleClick(e)} className="btn" type="submit">
                
                  {
        lan === "ru" && " Зарегистрироваться"
      }
      {
        lan === "en" && "Register"
      }   
         {
        lan === "china" && "登记"
      }  
       {
            lan === "ar" && `يسجل`
          } 
                  </button>
                <br/>
                <p>
                {
        lan === "ru" && "  У меня аккаунт есть,"
      }
      {
        lan === "en" && "I have an account"
      }   
         {
        lan === "china" && " 我有一个帐户 "
      }  
       {
            lan === "ar" && `لدي حساب `
          } 
               <Link to={"/login"} >
               {
        lan === "ru" && " Логин"
      }
      {
        lan === "en" && "Login"
      }   
         {
        lan === "china" && "登录"
      }  
       {
            lan === "ar" && `تسجيل الدخول`
          }                 
                </Link></p>
            </div>
        </div>
    </form>
</div>
    </>
  )
}

export default Register