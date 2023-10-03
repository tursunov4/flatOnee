import React, { useEffect, useState } from 'react'
import "./chervak.css"
import chervak from "../../assets/img/main-header.jpg"
import http from '../../axios'

const Chervak = () => {
    const [data ,setData] = useState([])
    useEffect(()=>{
      getData()
    },[])
   const getData =()=>{
    http.get("/catalog/offices/me_offices/").then((res)=>{
        setData(res.data)
        console.log(res.data)
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
                            <p className="chervak__delete">Изменить</p>
                        </div>
                    </li>
                        ))
                    }
              
                </ul>
            </div>
          </div>
        </section>
    </main>
    </div>
  )
}

export default Chervak