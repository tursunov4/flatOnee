import React, { useContext, useEffect, useState } from 'react'
import "./chervak.css"
import chervak from "../../assets/img/main-header.jpg"
import http from '../../axios'
import { Context } from '../../Context/Context'

const Chervak = () => {
    const [data ,setData] = useState([])
    const [refresh , setRefresh] = useState(false)
    const [data2 , setData2] = useState([])
    const {lan} = useContext(Context)
    useEffect(()=>{
      getData()
      getData2()
    },[refresh])
   const getData =()=>{
    http.get(`/catalog/offices/me_offices/`).then((res)=>{
        setData(res.data)
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
   }
   const getData2 =()=>{
    http.get(`/catalog/complex/me_complex/`).then((res)=>{
          setData2(res.data)
    }).catch((err)=>{
        console.log(err)
    })
   }
   const handleDelete =(id) =>{
    http.delete(`/catalog/offices/${id}/`).then((res)=>{
         if(res.status === 204){
            console.log(res.data)
            setRefresh(!refresh)
         } 
    }).catch((err)=>{
        console.log(err)
    })
   }
   const handeleDelete2 =(id)=>{    
    http.delete(`/catalog/complex/${id}/`).then((res)=>{
        if(res.status === 204){
           console.log(res.data)
           setRefresh(!refresh)
        } 
   }).catch((err)=>{
       console.log(err)
   })
  
   }
  return (
    <div>
          <main>
        <section className="chervak__section">
          <div className="container">
            <div className="chervak__wrapper">
                <div className="chervak__text">
                    <h2>Черновики</h2>
                </div>
                 <div>
                 <ul className="chervak__list">
                    {
                        data?.map((item , index)=>(
                    <li className="chervak__listitem">
                        <div className="chervaklistitem__img">
                            <img src={`http://164.92.172.190:8080${item.image[0].image}/`} alt="rasm"/>
                            <div className="chervaklistitem__img-text">
                                <h4>{item.etaj1} Этаж {item.square}м2 {item.name}</h4>
                                <p>
                                   {item.description}
                                </p>
                            </div>
                        </div>
                        <div className="chervak__btns">
                            <button className="chervak__izmenit">Изменить</button>
                            <p onClick={()=>handleDelete(item.id)} className="chervak__delete">Удалить</p>
                        </div>
                    </li>
                        ))
                    }
              
                </ul>

                <h2  className="addobject-kopleks__h" >объект</h2>
                <ul className="chervak__list">
                    {
                        data2?.map((item , index)=>(
                    <li className="chervak__listitem">
                        <div className="chervaklistitem__img">
                            <img src={`http://164.92.172.190:8080${item.image[0].image}/`} alt="rasm"/>
                            <div className="chervaklistitem__img-text">
                                <h4>{item.etaj1} Этаж {item.square}м2 {item.name}</h4>
                                <p>
                                   {item.description}
                                </p>
                            </div>
                        </div>
                        <div className="chervak__btns">
                            <button className="chervak__izmenit">Изменить</button>
                            <p onClick={()=>handeleDelete2(item.id)} className="chervak__delete">Удалить</p>
                        </div>
                    </li>
                        ))
                    }
              
                </ul>
                 </div>
            </div>
          </div>
        </section>
    </main>
    </div>
  )
}

export default Chervak