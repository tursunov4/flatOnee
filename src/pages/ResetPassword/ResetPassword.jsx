import React, { useContext, useState } from "react";
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
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  placeholder="Email "
                />
              </label>
            </div>
            <p className="reset-errorp">Email не найден</p>
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
