import React, { useContext, useEffect, useState } from 'react'
import "./academiya.css"
import http from '../../axios'
import { Context } from '../../Context/Context'
const Academiya = () => {
    useEffect(()=>{
      getData()
    }, [])
    const {lan} = useContext(Context)
    const [data , setData] = useState([])
   const getData =()=>{
    http.get(`/${lan}/academiya/list/`).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
   }
  return (
    <section className='academiya'>
        <div className="container">
         <div className="academiya-wrapper">
         <h2>
                 {
                    lan === "ru" && "Академия Flat one AI"
                 }
                {
                 lan === "en" && `Flat one AI Academy`
                } 
                {
                 lan === "zh" && ` 平一人工智能学院`
                } 
          </h2>
         <p>
              {
                    lan === "ru" && "  Это обучение для инвесторов, которые хотят начать инвестировать в зарубежную недвижимость и зарабатывать от 30% годовых"
                 }
                {
                 lan === "en" && `This training is for investors who want to start investing in foreign real estate and earn from 30% per annum`
                } 
                {
                 lan === "china" && `该培训面向想要开始投资外国房地产并年利率 30% 起的投资者`
                } 
        </p>
         </div>
         <ul className="academiya-list">
          {
            data?.map((item ,index) =>(
            <li className='academiya-list__item1'>
            <p>{item?.title} </p>
            <img className='academiya-list__item1pos' src={`http://164.92.172.190:8080${item?.image}`} alt="" />
            </li>

            ))
          }
            {/* <li className='academiya-list__item2'>
            <p> 
                 {
                    lan === "ru" && "Для инвесторов в недвижимость"
                 }
                {
                 lan === "en" && `For real estate investors`
                } 
                {
                 lan === "zh" && ` 对于房地产投资者`
                } 
               </p>
            </li> */}
         </ul>
        </div>
    </section>
  )
}

export default Academiya