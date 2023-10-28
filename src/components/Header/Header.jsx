import React, { useContext, useEffect, useState } from "react";
import profile from "../../assets/img/profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import http from "../../axios";
import Language from "../Language/Language";
const token = localStorage.getItem("token")
const Header = () => {
  const [menu ,setMenu] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  const {lan , setLan} =useContext(Context)
  const navigate = useNavigate()
  const {refi} = useContext(Context)
  const [open , setOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
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
  const handleReload =(id)=>{
    navigate(`/catalog/${id}`)
    setMenu(false)
    // window.location.reload()
  }
  const [izab , setIzab] = useState([])
  useEffect(()=>{
    getIzab()
  },[refi])
  const getIzab =()=>{
    http.get(`/catalog/wishlist-complex/`).then((res)=>{
     setIzab(res.data.results)
  }).catch((err)=>{
      console.log(err)
  })
  }

  return (
  
    <header  className={scrolling ? 'scrolled header' : "header "}>

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
              lan === "zh" && "學院"
            }
               {
                  lan === "ar" && "الأكاديمية"
                }   
          
          </Link>
          <Link onClick={()=>handleReload(1)} to={`/catalog/1`} className="header-nav__item1" href="">
           {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
            {
              lan === "zh" && "阿聯酋"
            }
              {
                  lan === "ar" && `الإمارات العربية المتحدة`
                } 
        
          </Link>
          <Link  onClick={()=>handleReload(2)} to={`/catalog/2`} className="header-nav__item1" href="">
           {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }      
            {
              lan === "zh" && '泰國'
            }
             {
                  lan === "ar" && `تايلاند`
                } 
          </Link>
          <Link onClick={()=>handleReload(3)}  to={`/catalog/3`} className="header-nav__item1" href="">
          {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }  
            {
              lan === "zh" && "峇里島"
            }   
               {
                  lan === "ar" && `بالي`
                } 
          </Link>
          <Link onClick={()=>handleReload(4)}  to={`/catalog/4`} className="header-nav__item1" href="">
           {
               lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
              {
              lan === "zh" && "土耳其"
            }   
               {
                  lan === "ar" && `تركيا`
                } 
            
          </Link>
          <Link to={`/savedlist`} className="header-nav__item1 izantop" href="">
          {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
               {
              lan === "zh" && "收藏夾"
            }   
             {
                  lan === "ar" && `المفضلة`
                } 
                {
                  izab.length !==0 &&
                <span>{izab.length}</span>
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
              lan === "zh" && "文章"
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
              lan === "zh" && "輪廓"
            }   
                {
                  lan === "ar" && `حساب تعريفي`
                } 
              </span>

            <img src={profile} alt="" />
          </Link>
          <Language open={open} setOpen={setOpen}/>
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
          <div>
          <Language open={open} setOpen={setOpen}/>
          </div>
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
              lan === "zh" && "輪廓"
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
              lan === "zh" && "學院"
            }
             {
                  lan === "ar" && "الأكاديمية"
                }  
            </Link>
            <Link onClick={()=>handleReload(1)}      to={`/catalog/1`} className="header-nav__item1" href="">
            {
              lan === "ru" && "ОАЭ"
            }
            {
              lan === "en" && "UAE"
            }
             {
              lan === "zh" && "學院"
            }
            {
                  lan === "ar" && `الإمارات العربية المتحدة`
                } 
        
            </Link>
            <Link onClick={()=>handleReload(2)}   to={`/catalog/2`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Тайланд"
            }
            {
              lan === "en" && "Thailand"
            }  
              {
              lan === "zh" && '泰國'
            }
             {
                  lan === "ar" && `تايلاند`
                } 
            </Link>
            <Link onClick={()=>handleReload(3)}    to={`/catalog/3`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Бали"
            }
            {
              lan === "en" && "Bali"
            }   
               {
              lan === "zh" && "峇里島"
            }   
             {
                  lan === "ar" && `بالي`
                } 
            </Link>
            <Link onClick={()=>handleReload(4)} to={`/catalog/4`} className="header-nav__item1" href="">
            {
              lan === "ru" && "Турция"
            }
            {
              lan === "en" && "Turkiye"
            } 
             {
              lan === "zh" && "土耳其"
            } 
             {
                  lan === "ar" && `تركيا`
                } 
            
            </Link>
            <Link onClick={()=>setMenu(false)}   to={`/savedlist`} className="header-nav__item1 izantop" href="">
            {
              lan === "ru" && "Избранное"
            }
            {
              lan === "en" && "Favorites "
            }   
            
            {
              lan === "zh" && "收藏夾"
            }   
               {
                  lan === "ar" && `المفضلة`
                } 
                                {
                  izab.length !==0 &&
                <span>{izab.length}</span>
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
              lan === "zh" && "文章"
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
