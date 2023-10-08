import React, { useState } from 'react'
import "./parol.css"
import http from '../../../axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Izminitparol = () => {
    const [oldp , setOldp] = useState("")
    const [password , setPassword] = useState("")
    const [password1 , setPassword1] = useState("")
    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        http.put('/user/update-password/', {
                password_true: oldp,
                password: password,
            password2: password1
        }).then((res)=>{
            console.log(res.data)
            if(res.status === 200){
             navigate("/brokermain")
             window.location.reload()
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
                } else{
                    toast.error( 'В введенных данных ошибка!!!', {
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

        })
    }
  return (
    <main>
        <form method="post">
            <div class="noti-container container-options">
                <div class="notifications">
                    <div class="title">Изменить пароль</div>
                    <div class="edit-input">
                        <label>
                            <input onChange={(e)=>setOldp(e.target.value)} name="old_password" type="text" class="input"     placeholder="Введите старый пароль"/>
                        </label>
                             {/* <div class="error-input active">Неверный пароль</div> */}
                    </div>
                    <div class="edit-input">
                        <label>
                            <input onChange={(e)=>setPassword(e.target.value)} name="new_password1" type="password" class="input"      placeholder="Введите новый пароль"/>
                        </label>

                                {/* <div class="forgot-password active">Забыли пароль</div> */}
                    </div>
                    <div class="edit-input">
                        <label>
                            <input onChange={(e) => setPassword1(e.target.value)} name="new_password2" type="password" class="input" placeholder="Подвердите пароль"/>
                        </label>

                       {/* <div class="forgot-password active">Забыли пароль</div> */}
                    </div>

                    <div class="button-edit">
                        <button onClick={(e)=>handleSubmit(e)} type="submit" class="button">Отправить</button>
                    </div>
                </div>
            </div>
        </form>
    </main>
  )
}

export default Izminitparol