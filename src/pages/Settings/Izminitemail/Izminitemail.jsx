import React, { useContext, useState } from 'react'
import http from '../../../axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../../Context/Context';
const id = localStorage.getItem("id")

const Izminitemail = () => {
    const [newemail ,setEmail] = useState('')
    const [oldemail , setOldEmail] = useState("")
    const navigate = useNavigate()
    const {lan} = useContext(Context)

    const handleSubmit =(e)=>{
        e.preventDefault()
        http.put(`/user/update/email/${oldemail}/` ,{
            email: newemail
        }).then((res)=>{
            console.log(res.data) 
            if(res.status ===200){
                toast.success(  `Изменить почту!!!`, {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
               localStorage.setItem("email" , res.data.email)
              navigate("/brokermain")
              window.location.reload()
            }
        }).catch((err)=>{
            if(err.response.status === 404){
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
                } else{
                  
                        toast.error( err.response.data.email && `${err.response.data.email}`, {
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
         
            <div className="noti-container container-options">
                <div className="notifications">
                    <div className="title">
                    {
              lan === "ru" && "Изменить почту"
            }
            {
              lan === "en" && "Change email"
            }
            {
              lan === "ar" && 'تغيير البريد'
            }
                          {
               lan === "china" && '更改郵件'
                }  
                    </div>
                    <div className="edit-input">
                        <label>
                          <input onChange={(e) =>setOldEmail(e.target.value)} required type="email" name="email" className="input" placeholder="Введите старый почту"/>
                        </label>
                    </div>
                    <div  className="edit-input">
                        <label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="input" placeholder="Введите новую почту"/>
                        </label>

                        <div className="button-edit">
                            <button onClick={(e)=>handleSubmit(e)} type="submit" className="button">
                                
                                {
                                lan === "ru" && "Отправить"
                                 }
                                 {
                                 lan === "en" && "Send"
                                  }
                                  {
                                 lan === "ar" && 'يرسل'
                                 }
                                  {
                                 lan === "china" && '发送'
                                   }  
                         </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </main>
  )
}

export default Izminitemail