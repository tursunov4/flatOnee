import React, { useContext, useEffect, useRef, useState } from "react";
import "./article.css";
import aricon from "../../assets/img/articleug.svg"
import articleform from "../../assets/img/article-form.jpg";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import http from "../../axios";
import { Context } from "../../Context/Context";
const Article = () => {
  const { id} = useParams()
  const [data , setData] = useState([])
  const [phone, setPhone] = useState("")
  const [text , setText] = useState("")
  const {lan , setLan} = useContext(Context)
  const inputRef = useRef()
  const inputRef2 = useRef()
  useEffect(()=>{
    getData()
  },[])
  
  const handleClick =(e) =>{
    e.preventDefault()
    if(phone !== "" && text !== ""){
      http.post("/contact/post/" ,{
        name: text,
        phone: phone
      }).then((res)=>{
        if(res.status === 200){
          toast.success(  `${res.data[0]}`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light", 
            });
          inputRef.current.value =""
          inputRef2.current.value =""
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  
  }
  const getData =() =>{
    http.get(`/${lan}/articles/detail/${id}/`).then((res)=>{
      console.log(res.data)
       setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <main>
            <ToastContainer
              autoClose={1500}           
       />
      <div className="article-page">
        <div className="container">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a href="">статьи</a>
            </li>
            <li className="breadcrumbs__item">
              <a href="">москва сити</a>
            </li>
            <li className="breadcrumbs__item">
              <span>Жизнь в сити</span>
            </li>
          </ul>
        
          <h1 className="article-h1">{data.title}</h1>
          <h2 className="article-h2">
            {data?.description}
          </h2>
          <div className="article-banner">
            <img src={data?.banner} alt="" />
          </div>
          <section className="articlenew-section">
            <h2>Как риелтор может контролировать процесс?</h2>
            <p>Creek Heights — жилой комплекс в Dubai Creek Harbour от Emaar Properties, одной из лучших застройщиков в эмирате Дубай.
             Комплекс состоит из высотных башен-близнецов. Башня будет иметь 38 этажей. Жилой проект предлагает 1-, 2- и 3-комнатные квартиры премиум-класса. Резиденции будут иметь прекрасный вид на башню Dubai Creek Tower и Дубайский канал. Площадь квартир колеблется от 72 до 152 кв. м., а планировка каждой собственности в комплексе включает спальню/и, гардеробную, ванную/ые, кухню, гостиную/столовую и 1 или 2 балкона.</p>
          </section>
          <section className="article-section">
            <h4 className="article-h4">О комплексе</h4>
            <h3 className="article-h3">Жизнь в Дубае</h3>
            <div className="text-wrapper">
              <p className="article-p">
                {data?.about_complex}
              </p>
             
            </div>
          </section>
          <section className="article-section">
            <h4 className="article-h4">О проекте</h4>
            
            <div dangerouslySetInnerHTML={{ __html: data.about_project }} className="article-section__newimg"></div>
          

          </section>
           <section className="article-ug">
            <h2>Удобства</h2>
              <ul className="acticle-ug__list">
                <li className="acticle-ul__list-item">
                  {
                    data.balkon &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Балкон</p>
                 </div>
                  }
                  {
                    data.basseyn &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Бассейн</p>
                 </div>
                  }
                  {
                    data.begovie_dorojki && 
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Беговые дорожки</p>
                 </div>
                  }
                  {
                    data.butiki_magazini &&
                 <div className="acticle-ul__wrap">
                      <img src={aricon} alt="" />
                      <p>Бутики и магазины</p>
                  </div>
                  }
                  {
                    data.valet_parking &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Валет паркинг</p>
                 </div>
                  }
                  {
                    data.vid_kanal &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Вид на канал</p>
                 </div>
                  }
                  {
                    data.detskiy_basseyn &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Детская игровая площадка</p>
                 </div>
                  }
                  {
                     data.detskiy_basseyn &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Детский бассейн</p>
                 </div>
                  }
                 
                </li>
                <li className="acticle-ul__list-item">
                  {
                    data.domashniy_jivotnie &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Домашние животные</p>
                 </div>
                  }
                  {
                    data.zelenaya_zona &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Зеленые насаждения</p>
                 </div>
                  }
                  {
                    data.zona_barbekyu &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Зона барбекю</p>
                 </div>
                  }
                  {
                    data.kofe_restorani &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Кафе и рестораны</p>
                 </div>
                  }
                  {
                    data.konditsioner &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Кондиционер</p>
                 </div>
                  }
                  {
                    data.lift &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Лифт</p>
                 </div>
                  }
                  {
                    data.oxrana &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Охрана и видеонаблюдение</p>
                 </div>
                  }
                  {
                    data.parkovniy_mesta &&
                  <div className="acticle-ul__wrap">
                      <img src={aricon} alt="" />
                      <p>Парковочные места</p>
                  </div>
                  }
                </li>
                <li className="acticle-ul__list-item">
                  {
                    data.park &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Парк</p>
                 </div>
                  }
                  {
                    data.pole_golfa &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Поле для гольфа</p>
                 </div>
                  }
                  {
                    data.spa_zona &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>СПА зона</p>
                 </div>
                  }
                  {
                    data.sportivnie_ploshadeki &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Спортивные площадки</p>
                 </div>
                  }
                  {
                    data.tenisniy_kort &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Теннисный корт</p>
                 </div>
                  }
                  {
                    data.fitnes_sentr &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Фитнес-центр и тренажерный зал</p>
                 </div>
                  }
                  {
                    data.chastniy_plazh  &&
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Частный пляж</p>
                 </div>
                  }
                </li>
              </ul>
           </section>
        {/* <div className="dadddd">
        <Swiper       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div> */}
     
          <section className="article-section">
      
            <div className="article-gallery">
              {
                data?.images?.map((item, index)=>(
                  <div key={index} className="article-gallery__item">
                  <h4>{item.title}</h4>
                  
                   <img src={item.images} alt="" />
              </div>
                ))
              }
             
            
            </div>
          </section>
          <div className="article-form">
            <img src={articleform} alt="" />
            <form action="">
              <div className="article-form__title">Название</div>
              <p className="article-form__text">
                Наша главная цель - удовлетворить все потребности наших
                клиентов. Мы считаем, что каждый клиент имеет индивидуальные
                потребности и наша задача заключается в том, чтобы найти
                подходящий объект недвижимости для каждого из клиентов. Мы
                готовы предоставить нашим клиентам все необходимые услуги,
                начиная от поиска жилья и заканчивая оформлением сделки о
                покупке или аренде.
              </p>
              <input
                ref={inputRef}
                onChange={(e)=>setText(e.target.value)}
                className="input"
                placeholder="Как к вам обращаться"
                type="text"
              />
              <input
                ref={inputRef2}
                onChange={(e)=>setPhone(e.target.value)}
                className="input"
                placeholder="+7 000 000 00 00"
                type="tel"
              />
              <button onClick={(e)=>handleClick(e)} className="button">Отправить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Article;
