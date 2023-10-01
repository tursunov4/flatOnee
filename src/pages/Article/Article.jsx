import React, { useEffect, useState } from "react";
import "./article.css";
import aricon from "../../assets/img/articleug.svg"
import articleform from "../../assets/img/article-form.jpg";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../axios";
const Article = () => {
  const { id} = useParams()
  const [data , setData] = useState([])
  const [phone, setPhone] = useState("")
  const [text , setText] = useState("")


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
         setTimeout(()=>{
          window.location.reload()
         }, 2000)
        }
      })
    }
  
  }
  const getData =() =>{
    http.get(`/articles/detail/${id}/`).then((res)=>{
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
          <aside className="article-sidebar">
            <nav className="article-nav">
              <a className="article-nav__item heading" href="">
                Инфраструктура
              </a>
              <a className="article-nav__item" href="">
                Башни
              </a>
              <a className="article-nav__item" href="">
                Развлечения
              </a>
              <a className="article-nav__item heading" href="">
                Жизнь в сити
              </a>
              <a className="article-nav__item" href="">
                Инфраструктура
              </a>
              <a className="article-nav__item" href="">
                Заведения
              </a>
              <a className="article-nav__item heading" href="">
                Выгодные предложения
              </a>
              <a className="article-nav__item" href="">
                Тест драйв
              </a>
              <a className="article-nav__item" href="">
                а
              </a>
            </nav>
          </aside>
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
            <p className="article-p">
              Добро пожаловать на сайт компании, которая специализируется на
              предоставлении недвижимости в районе Москва-Сити. Наша команда
              состоит из профессионалов, которые имеют многолетний опыт работы в
              сфере недвижимости. Мы предлагаем широкий выбор объектов
              недвижимости в районе Москва-Сити, среди которых квартиры, офисные
              помещения, коммерческие здания, а также продажу и аренду земельных
              участков. Добро пожаловать на сайт компании, которая
              специализируется на предоставлении недвижимости в районе
              Москва-Сити. Наша команда состоит из профессионалов, которые имеют
              многолетний опыт работы в сфере недвижимости. Мы предлагаем
              широкий выбор объектов недвижимости в районе Москва-Сити, среди
              которых квартиры, офисные помещения, коммерческие здания, а также
              продажу и аренду земельных участков. Добро пожаловать на сайт
              компании, которая специализируется на предоставлении недвижимости
              в районе Москва-Сити. Наша команда состоит из профессионалов,
              которые имеют многолетний опыт работы в сфере недвижимости. Мы
              предлагаем широкий выбор объектов недвижимости в районе
              Москва-Сити, среди которых квартиры, офисные помещения,
              коммерческие здания, а также продажу и аренду земельных участков.
            </p>

          </section>
           <section className="article-ug">
            <h2>Удобства</h2>
              <ul className="acticle-ug__list">
                <li className="acticle-ul__list-item">
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Балкон</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Бассейн</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Беговые дорожки</p>
                 </div>
                 <div className="acticle-ul__wrap">
                      <img src={aricon} alt="" />
                      <p>Бутики и магазины</p>
                  </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Валет паркинг</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Вид на канал</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Детская игровая площадка</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Детский бассейн</p>
                 </div>
                 
                </li>
                <li className="acticle-ul__list-item">
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Домашние животные</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Зеленые насаждения</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Зона барбекю</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Кафе и рестораны</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Кондиционер</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Лифт</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Охрана и видеонаблюдение</p>
                 </div>
                  <div className="acticle-ul__wrap">
                      <img src={aricon} alt="" />
                      <p>Парковочные места</p>
                  </div>
                </li>
                <li className="acticle-ul__list-item">
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Парк</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Поле для гольфа</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>СПА зона</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Спортивные площадки</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Теннисный корт</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Фитнес-центр и тренажерный зал</p>
                 </div>
                 <div className="acticle-ul__wrap">
                    <img src={aricon} alt="" />
                    <p>Частный пляж</p>
                 </div>
                </li>
              </ul>
           </section>

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
                onChange={(e)=>setText(e.target.value)}
                className="input"
                placeholder="Как к вам обращаться"
                type="text"
              />
              <input
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
