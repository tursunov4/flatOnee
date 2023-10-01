import React, { useState } from 'react'
import http from '../../../axios'
import { useNavigate } from 'react-router-dom'
const id = localStorage.getItem("id")

const Izminitemail = () => {
    const [newemail ,setEmail] = useState('')
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        http.put(`/user/update/email/${id}/` ,{
            email: newemail
        }).then((res)=>{
            console.log(res.data) 
            if(res.status ===200){
               localStorage.setItem("email" , res.data.email)
              navigate("/brokermain")
              window.location.reload()
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <main>
        <form method="post">
         
            <div class="noti-container container-options">
                <div class="notifications">
                    <div class="title">Изменить почту</div>
                    {/* <div class="edit-input">
                        <label>
                                     
                       <input type="email" name="email" class="input" placeholder="Введите старый почту"/>
                        </label>
                    </div> */}
                    <div  class="edit-input">
                        <label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" class="input" placeholder="Введите новую почту"/>
                        </label>

                        <div class="button-edit">
                            <button onClick={(e)=>handleSubmit(e)} type="submit" class="button">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </main>
  )
}

export default Izminitemail