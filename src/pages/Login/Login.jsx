import React, { useContext, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'
import profile from "../../assets/img/profile.svg";
import { Context } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            if(err.response.status === 403){
              toast.error( err.response.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              } 
            toast.error( err.response.data.password && `Password ${err.response.data.password}`, {
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
          

    <form  className="form">
   
        <div className="form__content">
            <div className="form__title">
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
             </div>
            <div className="form__input">   
                <label>
                    <input required onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Email "/>
                </label>
            </div>
            <div className="form__input">
                <label>
                    <input required onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Пароль"/>
                </label>
            </div>
            <div className="form__btn">
                <button className="btn" type='submit' onClick={(e)=>handleSubmit(e)} >
                
                  
                  {
        lan === "ru" && "   Войти"
      }
      {
        lan === "en" && "Login"
      }   
         {
        lan === "china" && "进来"
      }  
       {
            lan === "ar" && `ليأتي`
          } 
                  </button>
                <br />

                <p>
                {
        lan === "ru" && " У меня нет аккаунт"
      }
      {
        lan === "en" && "I don't have an account"
      }   
         {
        lan === "china" && " 我没有账户"
      }  
       {
            lan === "ar" && `ليس لدي حساب`
          } 
                  <Link to={'/register'}>
                  {
                  lan === "ru" && " Регистрация"
                   }
                   {
                   lan === "en" && " Registration"
                    }   
                    {
                     lan === "china" && "  登记"
                      }  
                       {
                        lan === "ar" && `  تسجيل`
                       }                    
                    
                    </Link></p>
                <p>
                {
                  lan === "ru" && "Забыeли пароль"
                   }
                   {
                   lan === "en" && "Forgot your password"
                    }   
                    {
                     lan === "china" && "忘记密码了吗"
                      }  
                       {
                        lan === "ar" && `نسيت كلمة السر`
                       }  
                  
                    <a>
                    {
                  lan === "ru" && " Здесь"
                   }
                   {
                   lan === "en" && " Here"
                    }   
                    {
                     lan === "china" && "这里"
                      }  
                       {
                        lan === "ar" && `هنا`
                       }  
                     </a> </p>
            </div>
        </div>
    </form>
    </div>
    </>
  )
}

export default Login