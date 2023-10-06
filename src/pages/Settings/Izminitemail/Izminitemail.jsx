import React, { useContext, useState } from 'react'
import http from '../../../axios'
import { useNavigate } from 'react-router-dom'
const id = localStorage.getItem("id")

const Izminitemail = () => {
    const [newemail ,setEmail] = useState('')
    const [oldemail , setOldEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        http.put(`/user/update/email/${oldemail}/` ,{
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
         
            <div className="noti-container container-options">
                <div className="notifications">
                    <div className="title">Изменить почту</div>
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
                            <button onClick={(e)=>handleSubmit(e)} type="submit" className="button">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </main>
  )
}

export default Izminitemail