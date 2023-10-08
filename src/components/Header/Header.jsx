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
            {
              lan === "china" && "學院"
            }
               {
                  lan === "ar" && "الأكاديمية"
                }   
          
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
            {
              lan === "china" && "阿聯酋"
            }
              {
                  lan === "ar" && `الإمارات العربية المتحدة`
                } 
        
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
            {
              lan === "china" && '泰國'
            }
             {
                  lan === "ar" && `تايلاند`
                } 
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
          {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }  
            {
              lan === "china" && "峇里島"
            }   
               {
                  lan === "ar" && `بالي`
                } 
          </Link>
          <Link to={`/catalog`} className="header-nav__item1" href="">
           {
               lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
              {
              lan === "china" && "土耳其"
            }   
               {
                  lan === "ar" && `تركيا`
                } 
            
          </Link>
          <Link to={`/savedlist`} className="header-nav__item1" href="">
          {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
               {
              lan === "china" && "收藏夾"
            }   
             {
                  lan === "ar" && `المفضلة`
                } 
          </Link>
          <Link to={'/articlemain'} className="header-nav__item1" href="">
           {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
               {
              lan === "china" && "文章"
            }  
              {
                  lan === "ar" && `مقالات`
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
                {
              lan === "china" && "輪廓"
            }   
             {
                  lan === "ar" && `حساب تعريفي`
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
                 {
              lan === "china" && "輪廓"
            }   
             {
                  lan === "ar" && `حساب تعريفي`
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
             {
              lan === "china" && "學院"
            }
             {
                  lan === "ar" && "الأكاديمية"
                }  
            </Link>
            <Link onClick={()=>setMenu(false)}     to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
             {
              lan === "china" && "學院"
            }
            {
                  lan === "ar" && `الإمارات العربية المتحدة`
                } 
        
            </Link>
            <Link onClick={()=>setMenu(false)}  to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }  
              {
              lan === "china" && '泰國'
            }
             {
                  lan === "ar" && `تايلاند`
                } 
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
               {
              lan === "china" && "峇里島"
            }   
             {
                  lan === "ar" && `بالي`
                } 
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/catalog`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
             {
              lan === "china" && "土耳其"
            } 
             {
                  lan === "ar" && `تركيا`
                } 
            
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/savedlist`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
            
            {
              lan === "china" && "收藏夾"
            }   
               {
                  lan === "ar" && `المفضلة`
                } 
            </Link>
            <Link onClick={()=>setMenu(false)}  to={'/articlemain'} className="header-nav__item1" href="">
            {
              lan === "ru" && "Статьи"
            }
            {
              lan === "en" && "Tenor"
            }   
               {
              lan === "china" && "文章"
            }  
             {
                  lan === "ar" && `مقالات`
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
