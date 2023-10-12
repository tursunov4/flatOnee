import React, { useContext, useState } from 'react'
import "./style.css"
import lang from '../../assets/img/lang.svg'
import Eng from "../../assets/img/engflag.png"
import Rus from "../../assets/img/flag.png"
import zhn from "../../assets/img/china.png"
import arabflag from "../../assets/img/arabflag.png"
import { Context } from '../../Context/Context'
const Language = ({open , setOpen}) => {

    const {lan , setLan} = useContext(Context)
    const handleLangClick =(text)=>{
        setLan(text)
        localStorage.setItem("lang" ,text)
        setOpen(false)
    }
  return (
    <div className='header__language'>
        <div onClick={()=>setOpen(!open)} className={open ?'haeader__language-head haeader__language-headopen' :'haeader__language-head' }>
        <img src={lang} alt="" />
        <span>
            {
                lan ==="ru" && "Рус"
            }
            {
                lan ==="zh" && "中國人"
            }
            {
                lan ==="en" && "Eng"
            }
            {
                lan ==="ar" && "عرب"
            }
            
        </span>
        </div >
        <ul className={open ? 'header_language-list open-header__language' :'header_language-list' }>
            <li className='header_language-listitem'>
                <input onClick={()=>handleLangClick("en")} checked={lan==='en' ? true : false } type="checkbox" />
                <img src={Eng} alt="" />
                <span>Eng</span>
            </li>
            <li className='header_language-listitem'>
                <input onClick={()=>handleLangClick("ru")} checked={lan==='ru' ? true : false } type="checkbox" />
                <img  src={Rus} alt="" />
                <span>Рус</span>
            </li>
            <li className='header_language-listitem'>
                <input onClick={()=>handleLangClick("zh")} checked={lan ==="zh" ? true : false}  type="checkbox" />
                <img width={26} src={zhn} alt="" />
                <span>中國人</span>
            </li>
            <li className='header_language-listitem'>
                <input onClick={()=>handleLangClick("ru")} checked={lan ==="ar" ? true : false}   type="checkbox" />
                <img src={arabflag} alt="" />
                <span>عرب</span>
            </li>
        </ul>
    </div>
  )
}

export default Language