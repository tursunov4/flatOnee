import React from 'react'

const IzminitPhone = () => {
  return (
    <main>
    <form method="post">
        <div class="noti-container container-options">
            <div class="notifications">
                <div class="title">Изменить номер телефона</div>
                <div class="edit-input">
                    <label>
            
                          <input name="phone_number" type="text" class="input" placeholder="Введите старый номер телефона"/>
                    </label>
                      {/* <div class="error-input active">Неверный номер телефона</div> */}
                </div>
                <div class="edit-input">
                    <label>
                        <input name="phone_number" type="text" class="input" placeholder="Введите новый номер телефона"/>
                    </label>

                             {/* <div class="forgot-password active">Забыли пароль</div> */}
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

export default IzminitPhone