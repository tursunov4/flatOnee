import React, { useContext, useRef, useState } from "react";
import "./reset.css"
import { Link, useNavigate } from "react-router-dom";
import http from "../../axios";
import { Context } from "../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import exit from '../../assets/img/exit.svg'
import Header from "../../components/Header/Header";

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const { lan } = useContext(Context);
  const [erroremail , setErroremail] = useState(false)
  const navigate = useNavigate();
  const inputref = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    http.post("/user/request-reset-email/" , {
        email:username,     
        redirect_url: "string"
    }).then((res)=>{
  
         inputref.current.value = ""
        toast.success( `${res.data.success}`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });      
    }).catch((err)=>{
      console.log(err)   
        toast.error( `${err.response.data.detail} `, {
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
  };
  const changeUsername =(e) =>{
    setErroremail(false)
    setUsername(e.target.value)
  }
  return (
    <>
      <ToastContainer />
      <Header/>
      <div className="wrapper">
     
        <form  onSubmit={(e) => handleSubmit(e)}  className="form">
        <div onClick={()=>navigate("/login")} className="reset__nazad">
            <img src={exit} alt="" />
        </div>

          <div className="form__content">
            <div className="form__title">
              {lan === "ru" && " Восстановление пароля"}
              {lan === "en" && "Login"}
              {lan === "zh" && "登录"}
              {lan === "ar" && `تسجيل الدخول`}
            </div>

            <div className="form__input">
              <p className="reset-notp">Введите свой email и мы вышлем вам код для восстановления</p>
              <label>
                <input
                  required
                  ref={inputref}
                  onChange={(e) => changeUsername(e)}
                  name="username"
                  placeholder="Email "
                />
              </label>
            </div>
            {
              erroremail &&
            <p  className="reset-errorp">Email не найден</p>
            }
            <div className="form__btn">
              <button
                className="btn"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {lan === "ru" && "Отправить"}
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

export default ResetPassword;
