import React from 'react'
import "./chervak.css"
import chervak from "../../assets/img/main-header.jpg"
const Chervak = () => {
  return (
    <div>
          <main>
        <section className="chervak__section">
          <div className="container">
            <div className="chervak__wrapper">
                <div className="chervak__text">
                    <h2>Черновики</h2>
                </div>
                <ul className="chervak__list">
                    <li className="chervak__listitem">
                        <div className="chervaklistitem__img">
                            <img src={chervak} alt=""/>
                            <div className="chervaklistitem__img-text">
                                <h4>64 Этаж 80м2 ОКО</h4>
                                <p>
                                    Эти апартаменты одни из лучших, что может предложить рынок
                                    Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. Эти апартаменты одни из лучших, что может предложить рынок
                                    Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. 
                                </p>
                            </div>
                        </div>
                        <div className="chervak__btns">
                            <button className="chervak__izmenit">Изменить</button>
                            <p className="chervak__delete">Изменить</p>
                        </div>
                    </li>
                    <li className="chervak__listitem">
                        <div className="chervaklistitem__img">
                        <img src={chervak} alt=""/>
                            <div className="chervaklistitem__img-text">
                                <h4>64 Этаж 80м2 ОКО</h4>
                                <p>
                                    Эти апартаменты одни из лучших, что может предложить рынок
                                    Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. Эти апартаменты одни из лучших, что может предложить рынок
                                    Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. 
                                </p>
                            </div>
                        </div>
                        <div className="chervak__btns">
                            <button className="chervak__izmenit">Изменить</button>
                            <p className="chervak__delete">Изменить</p>
                        </div>
                    </li>
                    <li className="chervak__listitem">
                        <div className="chervaklistitem__img">
                        <img src={chervak} alt=""/>
                            <div className="chervaklistitem__img-text">
                                <h4>64 Этаж 80м2 ОКО</h4>
                                <p>
                                    Эти апартаменты одни из лучших, что может предложить рынок
                                    Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. Эти апартаменты одни из лучших, что может предложить рынок
                                    Жить на такой высоте— быть в шаге от свободного полёта. Лучший выбор для тех любит жить в неброских, но роскошных апартаментах. 
                                </p>
                            </div>
                        </div>
                        <div className="chervak__btns">
                            <button className="chervak__izmenit">Изменить</button>
                            <p className="chervak__delete">Изменить</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </section>
    </main>
    </div>
  )
}

export default Chervak