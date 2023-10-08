import React, { useContext, useEffect } from 'react'
import "./academiya.css"
import http from '../../axios'
import { Context } from '../../Context/Context'
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
   const {lan } = useContext(Context)
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
                 lan === "china" && ` 平一人工智能学院`
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
                 lan === "en" && `该培训面向想要开始投资外国房地产并年利率 30% 起的投资者`
                } 
        </p>
         </div>
         <ul className="academiya-list">
            <li className='academiya-list__item1'>
            <p> {
                    lan === "ru" && "Для брокеров по продаже недвижимости"
                 }
                {
                 lan === "en" && `
                 For real estate brokers`
                } 
                {
                 lan === "china" && `
                 对于房地产经纪人`
                } 
                
                  </p>
            </li>
            <li className='academiya-list__item2'>
            <p> 
                 {
                    lan === "ru" && "Для брокеров по продаже недвижимости"
                 }
                {
                 lan === "en" && `For real estate brokers`
                } 
                {
                 lan === "china" && `对于房地产经纪人`
                } 
               </p>
            </li>
         </ul>
        </div>
    </section>
  )
}

export default Academiya