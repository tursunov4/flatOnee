import React, { useState } from "react";
import profile from "../../assets/img/profile.svg";
import { Link } from "react-router-dom";
const Header = () => {

  const [menu ,setMenu] = useState(false)
 
  return (
  
    <header className="header ">

      <div className="container">
        <Link to={'/'} className="logo" href=""></Link>
        <nav className="header-nav2">
          <Link  to={"/academiya"} className="header-nav__item1" href="">
          Академия
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
            ОАЭ
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
            Тайланд
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
            Бали
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
            Турция
          </Link>
          <Link to={`/savedlist`} className="header-nav__item1" href="">
            Избранное
          </Link>
          <Link to={'/articlemain'} className="header-nav__item1" href="">
            Статьи
          </Link>
          <Link to={"/brokermain"} className="header-nav__item-profile" href="">
            <span>Профиль</span>
            <img src={profile} alt="" />
          </Link>
        </nav>
        <button onClick={() => setMenu(true)} className="mm-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={menu ? "m-menu opened" : `m-menu`}>
        <div className="container">
          <button
            onClick={() => setMenu(false)}
            className="m-menu__close"
          ></button>
          <nav className="header-nav">
            <Link onClick={()=>setMenu(false)} to={"/brokermain"} className="header-nav__item-profile" href="">
              <span>Профиль</span>
              <img src={profile} alt="" />
            </Link>
            <Link  onClick={()=>setMenu(false)} to={"/academiya"} className="header-nav__item1" href="">
            Академия
            </Link>
            <Link onClick={()=>setMenu(false)}     to={`/catalog`} className="header-nav__item1" href="">
              ОАЭ
            </Link>
            <Link onClick={()=>setMenu(false)}  to={`/catalog`} className="header-nav__item1" href="">
              Тайланд
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
              Бали
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
              Турция
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/savedlist`} className="header-nav__item1" href="">
              Избранное
            </Link>
            <Link onClick={()=>setMenu(false)}  to={'/articlemain'} className="header-nav__item1" href="">
              Статьи
            </Link>
          </nav>
          <form className="search">
            <input
              className="search__input"
              placeholder="Введите запрос"
              type="text"
            />
            <button className="search__btn"></button>
          </form>
          <a className="faq__yoz" href="">
            FAQ
          </a>
          <a className="faq__yoz" href="">
            Техподдержка
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
