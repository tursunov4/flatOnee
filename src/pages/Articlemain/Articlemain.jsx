import React, { useContext, useEffect, useState } from "react";
import "./articlemain.css";

import http from "../../axios";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
const Articlemain = () => {
  const [data , setData] = useState([])
  const [name , setName] = useState("")
  const [refresh , setRefresh] = useState(false)
  const {lan} = useContext(Context)
  useEffect(()=>{
    getData()
  }, [refresh])
  const getData = ()=>{
      http.get(`/${lan}/articles/list/?search=${name}`).then((res) =>{
        setData(res.data.results)
      }).catch((err) =>[
        console.log(err)
      ])
  }
  const handleSearch =(e) =>{
      setName(e.target.value)
      setRefresh(!refresh)
  }
  return (
    <main>
      <section className="articles-section">
        <div className="container">
          <aside className="articles-sidebar">
            <form className="search">
              <input
                onChange={(e)=>handleSearch(e)}
                className="search__input"
                placeholder="Поиск"
                type="text"
              />
              <button className="search__btn"></button>
            </form>
          </aside>
          <ul className="articles-list">
          {
            data?.map((item , index) =>(

            <li key={index}
              className="articles-list__item articles-list__itembag"
              //  style="background-image: url(img/article-preview.jpg);"
            >
              <img className="articlebag__img-post" src={item?.photo} alt="" />
              <div className="container">
                <Link to={`/article/${item.id}`} className="articles-list__link" href="">
                  Подробнее
                </Link>
                <div>
                  <div className="articles-list__title">{item.title}</div>
                  <p className="articles-list__text">
                    {item.title}
                  </p>
                </div>
              </div>
            </li>
            ))
          }
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Articlemain;
