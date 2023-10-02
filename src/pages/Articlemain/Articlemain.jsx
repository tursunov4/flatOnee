import React, { useEffect, useState } from "react";
import "./articlemain.css";

import http from "../../axios";
import { Link } from "react-router-dom";
const Articlemain = () => {
  const [data , setData] = useState([])
  useEffect(()=>{
    getData()
  }, [])
  const getData = ()=>{
      http.get("/articles/list/").then((res) =>{
        console.log(res.data)
        setData(res.data.results)
      }).catch((err) =>[
        console.log(err)
      ])
  }
  const handleSearch =(e) =>{
    http.get(`/articles/list/?search=${e.target.value}`).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
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
