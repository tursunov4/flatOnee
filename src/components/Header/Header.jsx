import React, { useContext, useEffect, useState } from "react";
import profile from "../../assets/img/profile.svg";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
const token = localStorage.getItem("token")
const Header = () => {
  const [menu ,setMenu] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  const {lan , setLan} =useContext(Context)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
    <header className={scrolling ? 'scrolled header' : "header "}>

      <div className="container">
        <Link to={'/'} className="logo" href=""></Link>
        <nav className="header-nav2">
          <Link  to={"/academiya"} className="header-nav__item1" href="">
            {
              lan === "ru" && "Академия"
            }
            {
              lan === "en" && "Academy"
            }
          
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
        
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
           
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
          {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
            
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
               lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
          </Link>
          <Link to={`/savedlist`} className="header-nav__item1" href="">
          {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
          </Link>
          <Link to={'/articlemain'} className="header-nav__item1" href="">
           {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
           
          </Link>
          <Link to={ token ?  "/brokermain" : "/login"} className="header-nav__item-profile" href="">
            <span>
            {
              lan === "ru" && "Профиль"
            }
            {
              lan === "en" && "Profile"
            }   
              </span>
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
              <span>
              {
              lan === "ru" && "Профиль"
            }
            {
              lan === "en" && "Profile"
            } 
              </span>
              <img src={profile} alt="" />
            </Link>
            <Link  onClick={()=>setMenu(false)} to={"/academiya"} className="header-nav__item1" href="">
            {
              lan === "ru" && "Академия"
            }
            {
              lan === "en" && "Academy"
            }
            </Link>
            <Link onClick={()=>setMenu(false)}     to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
            </Link>
            <Link onClick={()=>setMenu(false)}  to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }  
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/savedlist`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
            
            </Link>
            <Link onClick={()=>setMenu(false)}  to={'/articlemain'} className="header-nav__item1" href="">
            {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
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
