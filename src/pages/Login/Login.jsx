import React, { useContext, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'
import { Context } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
const Login = () => {
    const [username , setUsername ] = useState("")
    const [password , setPassword] = useState("")
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

            if(err?.response?.status === 403){
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
   
  return (
    <>
    <ToastContainer/>
    <Header/>
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
        lan === "zh" && "登录"
      }  
       {
            lan === "ar" && `تسجيل الدخول`
          } 
             </div>
            <div className="form__input">   
                <label>
                    <input type='email' required onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Email "/>
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
        lan === "zh" && "进来"
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
        lan === "zh" && " 我没有账户"
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
                     lan === "zh" && "  登记"
                      }  
                       {
                        lan === "ar" && `  تسجيل`
                       }                    
                    
                    </Link></p>
                <p>
                {
                  lan === "ru" && "Забыли пароль? "
                   }
                   {
                   lan === "en" && "Forgot your password"
                    }   
                    {
                     lan === "zh" && "忘记密码了吗"
                      }  
                       {
                        lan === "ar" && `نسيت كلمة السر`
                       }  
                  
                    <Link to={`/reset`}>
                    {
                  lan === "ru" && "Восстановить"
                   }
                   {
                   lan === "en" && " Here"
                    }   
                    {
                     lan === "zh" && "这里"
                      }  
                       {
                        lan === "ar" && `هنا`
                       }  
                     </Link> </p>
            </div>
        </div>
    </form>
    </div>
    </>
  )
}

export default Login