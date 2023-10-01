import React from 'react'
import "./parol.css"
const Izminitparol = () => {
  return (
    <main>
        <form method="post">
            <div class="noti-container container-options">
                <div class="notifications">
                    <div class="title">Изменить пароль</div>
                    <div class="edit-input">
                        <label>
                            <input name="old_password" type="text" class="input"     placeholder="Введите старый пароль"/>
                        </label>
                             <div class="error-input active">Неверный пароль</div>
                    </div>
                    <div class="edit-input">
                        <label>
                            <input name="new_password1" type="text" class="input"      placeholder="Введите новый пароль"/>
                        </label>

                                <div class="forgot-password active">Забыли пароль</div>
                    </div>
                    <div class="edit-input">
                        <label>
                            <input name="new_password2" type="text" class="input" placeholder="Подвердите пароль"/>
                        </label>

                       <div class="forgot-password active">Забыли пароль</div>
                    </div>

                    <div class="button-edit">
                        <button type="submit" class="button">Отправить</button>
                    </div>
                </div>
            </div>
        </form>
    </main>
  )
}

export default Izminitparol