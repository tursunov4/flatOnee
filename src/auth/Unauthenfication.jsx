import React from 'react'
import { Route  , Routes} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
const Unauthenfication = () => {
  return (
     <Routes>
     <Route element={<Login/>} path={"/login"}/>
      <Route element={<Register/>} path={"/register"} />  
     </Routes>
  )
}

export default Unauthenfication