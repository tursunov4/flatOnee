import React, { useContext, useEffect, useState } from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Arrowup from '../../components/Arrowup/Arrowup'
import AboutSide from '../../components/AboutSide/AboutSide'
import { Context } from '../../Context/Context'
const MainPage = () => {
  const [scrolling, setScrolling] = useState(false);
  const {aboutside , setAboutSide} = useContext(Context)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
     <div id="he">
      {
        scrolling &&
      <Arrowup/>
      }
      {
        aboutside &&
        <AboutSide/>
      }
      <Header/>
        <Outlet/>
       <Footer/>
     </div>
  )
}

export default MainPage