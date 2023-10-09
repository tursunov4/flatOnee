import React from 'react'
import { Route , Routes } from 'react-router-dom'
import MainPage from '../pages/MianPage/MainPage'
import HomePage from '../pages/HomePage/HomePage'
import Cataloge from '../pages/Cataloge/Cataloge'
import Productitem from '../pages/Productitem/Productitem'
import Article from '../pages/Article/Article'
import Articlemain from '../pages/Articlemain/Articlemain'
import Savedlist from '../pages/Savedlist/Savedlist'
import Settings from '../pages/Settings/Settings'
import Izminitparol from '../pages/Settings/Izminitparol/Izminitparol'
import Izminitemail from '../pages/Settings/Izminitemail/Izminitemail'
import IzminitPhone from '../pages/Settings/IzminitPhone/IzminitPhone'
import Uvodemla from '../pages/Settings/Uvodemla/Uvodemla'
import Empty from '../pages/Settings/Empty/Empty'
import Brokers from '../pages/Brokers/Brokers'
import Chervak from '../pages/Chervak/Chervak'
import Addobject from '../pages/Addobject/Addobject'
import Addkompleks from '../pages/Addkompleks/Addkompleks'
import Brokersitem from '../pages/Brokersitem/Brokersitem'
import Brokersmain from '../pages/Brokersmain/Brokersmain'
import Academiya from '../pages/Academiya/Academiya'
import Noudfound from '../pages/Notfound/Noudfound'

const authenfication = () => {
  return (
    <Routes>
        <Route element={<MainPage/>} >
      <Route element={<HomePage/>} index/>
      <Route element={<Cataloge/>} path={`/catalog/:text`} />
      <Route element={<Productitem/>} path={`/product-item/:id`}/>
      <Route element={<Article/>} path={`/article/:id`} />
      <Route element={<Articlemain/>} path={`/articlemain`} /> 
      <Route element={<Savedlist/>} path={`/savedlist`} />
      <Route element={<Academiya/>} path='/academiya' />
      {/* <Route element={<Ourstaff/>} path={`/ourstaff`} /> */}
      <Route element={<Settings/>} path={`/settings`}/>
      <Route element={<Izminitparol/>} path={`/izminitparol`} />
      <Route element={<Izminitemail/>} path={`/izminitemail`} />
      <Route element={<IzminitPhone/>} path={`/izminitphone`} />
      <Route element={<Uvodemla/>} path={`/udovlena`} />
      <Route element={<Empty/>} path={`/empty`} />
      <Route element={<Brokers/>} path={`/brokers`} />
      <Route element={<Chervak/>} path={`/chervak`} />
      <Route element={<Addobject/>} path={`/addobject`} />
      <Route element={<Addkompleks/>} path={"/addkompleks"} />
      <Route element={<Brokersitem/>} path={`/brokersitem`} /> 
      <Route element={<Brokersmain/>} path={`/brokermain`} /> 
    </Route>
  
    <Route path='*' element={<Noudfound/>}  /> 
   
    </Routes>
  )
}

export default authenfication