import React, { useState } from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import http from '../../axios'
const Register = () => {
    const [phone , setPhone] = useState('')
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [firstname , setFirsname] = useState("")
    const [password, setPassword] = useState("")
    const [password2 ,setPassword2] = useState('')
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
  )
}

export default Register