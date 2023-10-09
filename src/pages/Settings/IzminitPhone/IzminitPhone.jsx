import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/Context'

const IzminitPhone = () => {
    const {lan} = useContext(Context)
  return (
    <main>
    <form method="post">
        <div class="noti-container container-options">
            <div class="notifications">
                <div class="title">
                {
              lan === "ru" && "Изменить номер телефона"
            }
            {
              lan === "en" && "Change phone number"
            }
             {
              lan === "ar" && 'غير رقم الهاتف'
            }
                  {
               lan === "china" && '更改電話號碼'
                }  
                </div>
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
                    <button type="submit" class="button">
                              
                    {
              lan === "ru" && "Отправить"
            }
            {
              lan === "en" && "Send"
            }
            {
              lan === "ar" && 'يرسل'
            }
                          {
               lan === "china" && '发送'
                }  
                    </button>
                </div>
            </div>
        </div>
    </form>
</main>
  )
}

export default IzminitPhone