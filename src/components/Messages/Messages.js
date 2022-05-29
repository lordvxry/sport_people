import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={s.content}>
      <div className={s.navbar}>
        <div className={s.navbarLinks}>
          <NavLink to={"/profile"} className={s.navbarLinksText}>
            Создать заявку
          </NavLink>
        </div>
        <div className={s.navbarLinks}>
          <NavLink to={"/profile/messages"} className={s.navbarLinksText}>
            Сообщения
          </NavLink>
        </div>
        <div className={s.navbarLinks}>
          <NavLink to={"/"} className={s.navbarLinksText}>
            Выйти
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.name}>Андрей Андреев</div>
        <div className={s.messagesContent}>
          <div>
          <div className={s.userMessages1}>
            <div className={s.userName}>Максим Максим</div>
            Здравствуйте! Можете рассказать подробнее про место встречи?
          </div>
          <div className={s.userMessages2}>
            <div className={s.userName}>Андрей Андреев</div>
            <div>Здравствуйте! Позже вам отпишусь</div>
          </div>
          <div className={s.userMessages2}>
            <div className={s.userName}>Андрей Андреев</div>
            <div>Часов в 7 будет удобно?</div>
          </div>
        </div>
        <div className={s.sendMessages}>
        <div >
          <textarea  placeholder="Введите сообщение"></textarea>
        </div>
        <div>
          <button>Отправить</button>
        </div>
        </div>
        </div>
        
      </div>
      <div className={s.dialogsNavbar}>
        <div className={s.dialogs}>
          <NavLink to={"/profile/messages"} className={s.navbarDialogsText}>
            Андрей Андреев
          </NavLink>
        </div>
        <div className={s.dialogs2}>
          <NavLink to={"/profile/messages"} className={s.navbarDialogsText}>
            Елена Петрова
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Messages;
