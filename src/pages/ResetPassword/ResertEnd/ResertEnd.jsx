import React, { useContext, useState } from "react";
import exit from '../../../assets/img/exit.svg'
import { useLocation, useNavigate } from "react-router-dom";
import http from "../../../axios";
import { Context } from "../../../Context/Context";
import Header from "../../../components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResertEnd = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
   const [errorpas , setErrorpas] = useState(false)
   const location = useLocation(); 
   const queryParams = new URLSearchParams(location.search);
   const token = queryParams.get('token');
   const uidb64 = queryParams.get('uidb64');
  const { lan } = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(errorpas ===false){
      http.patch("/user/password-reset-complete/" , {
        password: password,
        token: token,
        uidb64: uidb64
      }).then((res)=>{
        console.log(res.data)
      if(res.status === 200){
        toast.success(  `${res.data.message}`, {
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
            navigate("/login")
          },700)
      }
      }).catch((err)=>{
        console.log(err)
        toast.error( "Something is wrong!!!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
    }
  };
  const changePassword =(e)=>{
    if(e.target.value===password){
      setErrorpas(false)
    }else{
      setErrorpas(true)
    }
    setUsername(e.target.value)
  }
  const changePassword2 =(e)=>{
    if(username===e.target.value){
      setErrorpas(false)
    }else{
      setErrorpas(true)
    }
    setPassword(e.target.value)
  }


  return (
    <>
      <ToastContainer />
       <Header/>
      <div className="wrapper">
        <form className="form">
        <div onClick={()=>navigate("/reset")} className="reset__nazad">
            <img src={exit} alt="" />
        </div>

          <div className="form__content">
            <div className="form__title">
              {lan === "ru" && "Введите новый пароль"}
              {lan === "en" && "Login"}
              {lan === "zh" && "登录"}
              {lan === "ar" && `تسجيل الدخول`}
            </div>

            <div className="form__input">

              <label>
                <input
                  required
                  onChange={(e) => changePassword(e) }
                  name="Пароль"
                  type="password"
                  placeholder="Пароль"
                />
              </label>
              <label>
                <input
                  required
                  type="password"
                  onChange={(e) => changePassword2(e) }
                  name="Повторите пароль"
                  placeholder="Повторите пароль"
                />
              </label>
            </div>
            {
              errorpas &&
            <p className="reset-errorp">Пароли не совпадают</p>
            }
            <div className="form__btn">
              <button
                className="btn"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {lan === "ru" && "Изменить пароль"}
                {lan === "en" && "Login"}
                {lan === "zh" && "进来"}
                {lan === "ar" && `ليأتي`}
              </button>
              <br />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResertEnd;
