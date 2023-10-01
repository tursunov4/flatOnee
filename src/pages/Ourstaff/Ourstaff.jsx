import React from "react";
import instagram from "../../assets/img/instagram.svg";
import whatsup from "../../assets/img/whatsup.svg";
import vk from "../../assets/img/vk.svg";
const Ourstaff = () => {
  return (
    <main>
      <section className="our-staff">
        <div className="container">
          <aside className="staff-sidebar">
            <div className="container">
              <div className="logo"></div>
              <div className="staff-sidebar__description">
                <h2 className="staff-sidebar__title">Наша команда</h2>
                <p className="staff-sidebar__text">Кок</p>
              </div>
              <ul className="staff-socials">
                <li className="staff-socials__item">
                  <a href="">
                    <img
                      className="staff-socials__icon"
                      src={instagram}
                      alt=""
                    />
                  </a>
                </li>
                <li className="staff-socials__item">
                  <a href="">
                    <img className="staff-socials__icon" src={whatsup} alt="" />
                  </a>
                </li>
                <li className="staff-socials__item">
                  <a href="">
                    <img className="staff-socials__icon" src={vk} alt="/" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <ul className="staff-list">
            <li className="staff-list__item">
              <img className="staff-list__preview" src="" alt="" />
              <div className="staff-list__title">Наша команда</div>
              <p className="staff-list__text">CEO</p>
            </li>
            <li className="staff-list__item">
              <img className="staff-list__preview" src="" alt="" />
              <div className="staff-list__title">Наша команда</div>
              <p className="staff-list__text">CEO</p>
            </li>
            <li className="staff-list__item">
              <img className="staff-list__preview" src="" alt="" />
              <div className="staff-list__title">Наша команда</div>
              <p className="staff-list__text">CEO</p>
            </li>
            <li className="staff-list__item">
              <img className="staff-list__preview" src="" alt="" />
              <div className="staff-list__title">Наша команда</div>
              <p className="staff-list__text">CEO</p>
            </li>
            <li className="staff-list__item">
              <img className="staff-list__preview" src="" alt="" />
              <div className="staff-list__title">Наша команда</div>
              <p className="staff-list__text">CEO</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Ourstaff;
