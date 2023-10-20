import React, { useEffect, useState } from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Arrowup from '../../components/Arrowup/Arrowup'
const MainPage = () => {
  const [scrolling, setScrolling] = useState(false);
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
      <Header/>
        <Outlet/>
       <Footer/>
     </div>
  )
}

export default MainPage