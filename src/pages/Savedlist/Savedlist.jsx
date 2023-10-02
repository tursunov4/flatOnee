import React, { useEffect, useState } from 'react'
import './savedlist.css'
import arrowleft from "../../assets/img/arrow-left.svg"
import axios from 'axios'
import http from '../../axios'
import { useNavigate } from 'react-router-dom'
const token  = localStorage.getItem("token")
const Savedlist = () => {
    const [typefilter , setTypefilter] = useState(false)
    const [data ,setData] = useState([])
    const [refresh , setRefresh] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
    getData()
    },[refresh])
    const getData =()=>{
        http.get("/catalog/wishlist/").then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleDelet =(id) =>{
        http.delete(`/catalog/wishlist/${id}/`).then((res)=>{
            console.log(res.data)
            if(res.status ===204){
                setRefresh(!refresh) 
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <main>
        <section className="catalogue">
        <div className="container">
            <aside className={typefilter ?  "opened catalogue-sidebar " : "catalogue-sidebar" }>
                <button onClick={()=>setTypefilter(false)} className="catalogue-sidebar__m-close"></button>
                <form className="search">
                    <input className="search__input" placeholder="Поиск" type="text"/>
                    <button className="search__btn"></button>
                </form>
                <div className="catalogue-sidebar__map">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1587.6732705327015!2d37.61162510615549!3d55.753133013427124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1682358266572!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
                <div className="filter-section opened">
                    <div className="filter-section__header">
                        <div className="filter-section__title">Москва сити</div>
                        <div className="filter-section__icon"></div>
                    </div>
                    <div className="filter-section__content">
                        <ul className="filter-list single">
                            <li className="filter-list__item selected">Все башни</li>
                            <li className="filter-list__item">Нева</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                        </ul>
                    </div>
                </div>
                <div className="filter-section opened">
                    <div className="filter-section__header">
                        <div className="filter-section__title">Москва сити</div>
                        <div className="filter-section__icon"></div>
                    </div>
                    <div className="filter-section__content">
                        <ul className="filter-list selected">
                            <li className="filter-list__item selected">Все башни</li>
                            <li className="filter-list__item">Нева</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                        </ul>
                    </div>
                </div>
                <div className="filter-section opened">
                    <div className="filter-section__header">
                        <div className="filter-section__title">Москва сити</div>
                        <div className="filter-section__icon"></div>
                    </div>
                    <div className="filter-section__content">
                        <ul className="filter-list selected">
                            <li className="filter-list__item selected">Все башни</li>
                            <li className="filter-list__item">Нева</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                            <li className="filter-list__item">Меркурий</li>
                        </ul>
                    </div>
                </div>
                <div className="filter-section opened">
                    <div className="filter-section__header">
                        <div className="filter-section__title">Москва сити</div>
                        <div className="filter-section__icon"></div>
                    </div>
                    <div className="filter-section__content">
                        {/* <div className="price-range" data-max="5000" data-min="50000">
                            <span className="price-range__min">50 000₽</span>
                            <span className="price-range__max">57 000₽</span>
                        </div> */}
                    </div>
                </div>
                <div className="filter-section opened">
                    <div className="filter-section__header">
                        <div className="filter-section__title">Дата</div>
                        <div className="filter-section__icon"></div>
                    </div>
                    <div className="filter-section__content">
                        <div className="date-picker">
                            <input type="date" name="" id=""/>
                            <div className="separator"></div>
                            <input type="date" name="" id=""/>
                        </div>
                    </div>
                </div>
                <div className="filter-section opened">
                    <div className="filter-section__header">
                        <div className="filter-section__title">Кол-во кроватей</div>
                        <div className="filter-section__icon"></div>
                    </div>
                    <div className="filter-section__content">
                        <ul className="filter-list selected">
                            <li className="filter-list__item selected">1</li>
                            <li className="filter-list__item">2</li>
                            <li className="filter-list__item">3</li>
                            <li className="filter-list__item">4</li>
                            <li className="filter-list__item">5</li>
                            <li className="filter-list__item">6</li>
                        </ul>
                    </div>
                </div>
                <div className="filter-section opened">
                    <div className="filter-section__header">
                        <div className="filter-section__title">Удобства</div>
                        <div className="filter-section__icon"></div>
                    </div>
                    <div className="filter-section__content">
                        <ul className="checkbox-list">
                            <li className="checkbox-list__item">
                                <input className="checkbox" type="checkbox" name="" id=""/>
                                <label for="">Wi Fi</label>
                            </li>
                            <li className="checkbox-list__item">
                                <input className="checkbox" type="checkbox" name="" id=""/>
                                <label for="">Wi Fi</label>
                            </li>
                            <li className="checkbox-list__item">
                                <input className="checkbox" type="checkbox" name="" id=""/>
                                <label for="">Wi Fi</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            <div className="catalogue-content">
                <div className="catalogue-content__header">
                    <div className="container">
                        <h1 className="catalogue-content__title">Апартаменты Москва Сити долгосрочно </h1>
                        <p className="catalogue-content__text">1 504 из 2 345 вариантов</p>
                    </div>
                </div>
                <div className="m-catalogue">
                    <form className="search">
                        <input className="search__input" placeholder="Поиск" type="text"/>
                        <button className="search__btn"></button>
                    </form>

                    <button onClick={()=>setTypefilter(true)} class="button" id="m-filters">Фильтры</button>
                </div>
                <ul className="apartament-list"> 
                {
                    data?.map((item , index)=>(
                        <li className="apartament-list__item">
                        <div className="apartament-list__preview">
                            <img  onClick={()=>navigate(`/product-item/${item.id}`)} className="current" src={`http://164.92.172.190:8080${item.office_info.image[0].image}/`}  alt=""/>
                            <img src="img/apartament-preview.jpg" alt=""/>
                            <img src="img/apartament-preview.jpg" alt=""/>
                            <img src="img/apartament-preview.jpg" alt=""/>
                            <img src="img/apartament-preview.jpg" alt=""/>
                        </div>
                        <div className="preview-paggination">
                            <div className="preview-paggination__item selected"></div>
                            <div className="preview-paggination__item"></div>
                            <div className="preview-paggination__item"></div>
                            <div className="preview-paggination__item"></div>
                            <div className="preview-paggination__item"></div>
                        </div>
                        <div className="apartament-list__header">
                            <div>
                                <p  onClick={()=>navigate(`/product-item/${item.id}`)} className="apartament-list__address"> {item.office_info.name}</p>
                             
                            </div>
                            <button onClick={()=>handleDelet(item.office)} className="apartament-list__favorite-btn filled"></button>
                        </div>
                        <p className="apartament-list__price">{item.office_info.price}₽/месяц</p>
                        <ul className="apartament-list__tags">
                            <li className="apartament-list__tag">{item.office_info.etaj1} этаж</li>
                            <li className="apartament-list__tag">{item.office_info.square} м2</li>
                            <li className="apartament-list__tag">Сдача {item.office_info.deadline}</li>
                        </ul>
                        <p className="apartament-list__location">NEVA TOWERS</p>
                    </li>
                    ))
                }                 
                   
                  
                
                </ul>

               

                <div className="catalogue-banner"
                //  style="background-image: url(img/catalogue-header.jpg);"
                 >
                    <a className="container" href="">
                        <div className="catalogue-banner__description">
                            <div className="catalogue-banner__title">Москва сити тест-драйв</div>
                            <p className="catalogue-banner__text">Попробуйте пожить в 5 разных апартаментах, чтобы понять что подходит именно вам.</p>
                        </div>
                        <button className="learn-more">Подробнее</button>
                    </a>
                </div>
                
                <div className="catalogue-paggination">
                    <span className="catalogue-paggination__prev" href="">
                        <img src={arrowleft} alt=""/>
                    </span>
                    <ul className="paggination-list">
                        <li className="paggination-list__item">1</li>
                        <li className="paggination-list__item selected">2</li>
                        <li className="paggination-list__item">3</li>
                        <li className="paggination-list__item">4</li>
                        <li className="paggination-list__item">...</li>
                        <li className="paggination-list__item">15</li>
                    </ul>
                    <span className="catalogue-paggination__next" href="">
                        <img src={arrowleft} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default Savedlist;