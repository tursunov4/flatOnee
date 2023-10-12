import React, { useContext, useState } from "react";
import exit from '../../../assets/img/exit.svg'
import { Link, useNavigate } from "react-router-dom";
import http from "../../../axios";
import { Context } from "../../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/Header/Header";

const ResetIner = () => {
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
              {lan === "ru" && "Восстановление пароля"}
              {lan === "en" && "Login"}
              {lan === "zh" && "登录"}
              {lan === "ar" && `تسجيل الدخول`}
            </div>

            <div className="form__input">
              <p className="reset-notp" >Введите код высланный на  <br /> mailbox@example.com</p>
              <label>
                <input
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  name="Код"
                  placeholder="Код"
                />
              </label>
            </div>
            <p className="reset-errorp">Код не подходит</p>
            <div className="form__btn">
              <button
                className="btn"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {lan === "ru" && "Восстановить"}
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

export default ResetIner;
