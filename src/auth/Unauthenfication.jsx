import React from 'react'
import { Route  , Routes} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import MainPage from '../pages/MianPage/MainPage'
import HomePage from '../pages/HomePage/HomePage'
import Cataloge from '../pages/Cataloge/Cataloge'
import Productitem from '../pages/Productitem/Productitem'
import Article from '../pages/Article/Article'
import Articlemain from '../pages/Articlemain/Articlemain'
import Savedlist from '../pages/Savedlist/Savedlist'
import Academiya from '../pages/Academiya/Academiya'
import Noudfound from '../pages/Notfound/Noudfound'
const Unauthenfication = () => {
  return (
     <Routes>
     <Route element={<Login/>} path={"/login"}/>
      <Route element={<Register/>} path={"/register"} /> 
      <Route element={<MainPage/>} >
      <Route element={<HomePage/>} index/>
      <Route element={<Academiya/>} path='/academiya' />
      <Route element={<Cataloge/>} path={`/catalog/:text`} />
      <Route element={<Productitem/>} path={`/product-item`}/>
      <Route element={<Article/>} path={`/article/:id`} />
      <Route element={<Articlemain/>} path={`/articlemain`} /> 
      <Route element={<Savedlist/>} path={`/savedlist`} />
      <Route  path={`/brokermain`} /> 
      </Route>
      <Route element={<Noudfound/>} path='/eror404' /> 
      <Route path='*' element={<Noudfound/>}  /> 
     </Routes>
  )
}

export default Unauthenfication