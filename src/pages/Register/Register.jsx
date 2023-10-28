import React, { useContext, useState } from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'
import { Context } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import openeye from "../../assets/img/openeye.svg"
import closeeye from "../../assets/img/closeeye.svg"
import Header from '../../components/Header/Header';
const Register = () => {
    const [phone , setPhone] = useState('')
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [firstname , setFirsname] = useState("")
    const [password, setPassword] = useState("")
    const [password2 ,setPassword2] = useState('')
    const [openpas1 , setOpenpas1] = useState(false)
    const [openpas2 , setOpenpas2] = useState(false)
    const {lan , setLan} = useContext(Context)
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

  return (
    <>
          <ToastContainer/>
       <Header/>
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
        lan === "zh" && " 登记"
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
                    <input onChange={(e)=>setPassword(e.target.value)} type={openpas1 ? "text" : "password"}  placeholder="Пароль"/>
                    <div onClick={()=>setOpenpas1(!openpas1)} className='openclose__btn'>
                      {
                        openpas1 ? <img width={18} src={closeeye} alt="eyeclose" /> : 
                     <img width={18} src={openeye} alt="eye" />
                      }
                    </div>
                </label>
            </div>
            <div className="form__input">
                <label>
                    <input onChange={(e)=>setPassword2(e.target.value)} type={openpas2 ? "text" : "password"}  placeholder="Повторите пароль"/>
                    <div onClick={()=>setOpenpas2(!openpas2)} className='openclose__btn'>
                      {
                        openpas2 ? <img width={18} src={closeeye} alt="eyeclose" /> : 
                     <img width={18} src={openeye} alt="eye" />
                      }
                    </div>
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
        lan === "zh" && "登记"
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
        lan === "zh" && " 我有一个帐户 "
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
        lan === "zh" && "登录"
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