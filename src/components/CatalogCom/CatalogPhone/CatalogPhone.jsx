import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
import izamphone1 from "../../../assets/img/izamphone1.svg";
import izamphone2 from "../../../assets/img/izamphone2.svg";

const CatalogPhone = () => {
    const {lan} = useContext(Context)
  return (
    <div className="catalog__telef-sec">
    <img className="catalog__phone1" src={izamphone1} alt="" />
    <img className="catalog__phone3" src={izamphone2} alt="" />
    <div className="catalog__telef--text">
      <h2>
      {
  lan === "ru" && "Подбирайте недвижимость привычным способом"
}
{
  lan === "en" && "Select real estate in the usual way"
}
{
  lan === "zh" && "按常规方式选择房产"
}
   {
      lan === "ar" && "اختر العقارات بالطريقة المعتادة"
    }   
        </h2>
      <p>
      {
  lan === "ru" && " Наш алгоритм подберет"
}
{
  lan === "en" && "Our algorithm will select"
}
{
  lan === "zh" && "我们的算法将选择"
}
   {
      lan === "ar" && "سوف تختار الخوارزمية لدينا"
    }  
       </p>
      <button>
      {
  lan === "ru" && "  Попробовать"
}
{
  lan === "en" && "Try it"
}
{
  lan === "zh" && "尝试一下"
}
   {
      lan === "ar" && "جربها"
    }  
      </button>
    </div>
  </div>
  )
}

export default CatalogPhone