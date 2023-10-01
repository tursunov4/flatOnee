import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'

const Login = () => {
    const [username , setUsername ] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        http.post("/user/login/" , {
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
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className="wrapper">
    <form  className="form">
   
        <div className="form__content">
            <div className="form__title">Логин</div>
            <div className="form__input">   
                <label>
                    <input type="tel" onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Email or username"/>
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
  )
}

export default Login