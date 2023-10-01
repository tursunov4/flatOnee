import React, { useEffect } from 'react'
import "./academiya.css"
import http from '../../axios'
const Academiya = () => {
    useEffect(()=>{
      getData()
    }, [])
   const getData =()=>{
    http.get("/academiya/list/").then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
   }
  return (
    <section className='academiya'>
        <div className="container">
         <div className="academiya-wrapper">
         <h2>Академия Flat one AI</h2>
         <p>Это обучение для инвесторов, которые хотят начать инвестировать в зарубежную недвижимость и зарабатывать от 30% годовых</p>
         </div>
         <ul className="academiya-list">
            <li className='academiya-list__item1'>
            <p>  Для брокеров по продаже недвижимости</p>
            </li>
            <li className='academiya-list__item2'>
            <p>  Для брокеров по продаже недвижимости</p>
            </li>
         </ul>
        </div>
    </section>
  )
}

export default Academiya