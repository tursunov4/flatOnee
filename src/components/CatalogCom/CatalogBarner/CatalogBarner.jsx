import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../Context/Context'

const CatalogBarner = () => {
    const navigate = useNavigate()
    const {lan} = useContext(Context)
  return (
    <div onClick={()=>navigate("/articlemain")}  className="catalogue-banner2 catalugbarner2-bag">
    <div  className="catolog-barner__route" href="">
      <div className="catalogue-banner__description">
        <div className="catalogue-banner__title">
        {
    lan === "ru" && "Район Дубай марина"
  }
  {
    lan === "en" && "Dubai Marina area"
  }
  {
    lan === "zh" && "迪拜码头区"
  }
     {
        lan === "ar" && "منطقة دبي مارينا"
      } 
          
        </div>
        <p className="catalogue-banner__text">
        {
    lan === "ru" && " Перейти к статье"
  }
  {
    lan === "en" && "Go to article"
  }
  {
    lan === "zh" && "前往文章"
  }
     {
        lan === "ar" && 'انتقل إلى المادة'
      } 
         </p>
      </div>
      <button className="learn-more">
      {
    lan === "ru" && "  Подробнее"
  }
  {
    lan === "en" && "More details"
  }
  {
    lan === "zh" && "更多细节"
  }
     {
        lan === "ar" && 'المزيد من التفاصيل'
      } 
      
        </button>
    </div>
  </div>
  
  )
}

export default CatalogBarner