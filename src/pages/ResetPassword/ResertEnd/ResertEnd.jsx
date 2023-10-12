import React, { useContext, useState } from "react";
import exit from '../../../assets/img/exit.svg'
import { Link, useNavigate } from "react-router-dom";
import http from "../../../axios";
import { Context } from "../../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../components/Header/Header";
import "react-toastify/dist/ReactToastify.css";

const ResertEnd = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  const { lan } = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <>
      <ToastContainer />
       <Header/>
      <div className="wrapper">
        <form className="form">
        <div onClick={()=>navigate(-1)} className="reset__nazad">
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
                  onChange={(e) => setUsername(e.target.value)}
                  name="Пароль"
                  type="password"
                  placeholder="Пароль"
                />
              </label>
              <label>
                <input
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="Повторите пароль"
                  placeholder="Повторите пароль"
                />
              </label>
            </div>
            <p className="reset-errorp">Пароли не совпадают</p>
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
