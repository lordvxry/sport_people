import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.navbar}>
        <div className={s.navbarLinks}>
          <NavLink to={"/profile"} className={s.navbarLinksText} >
            Создать заявку
          </NavLink>
        </div>
        <div className={s.navbarLinks}>
          <NavLink to={"/profile/messages"} className={s.navbarLinksText} >
            Сообщения
          </NavLink>
        </div>
      </div>
      <div className={s.form}>
        <div className={s.formInputs}>
          <form>
            <input
              className={s.inputs}
              type="text"
              placeholder=" Вид спорта"
              name="name"
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="number"
              placeholder="Кол-во участников"
              name="name"
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="number"
              placeholder="Уровень"
              name="name"
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="text"
              placeholder="Место и время"
              name="name"
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="number"
              placeholder="Стоимость"
              name="name"
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="text"
              placeholder="Комментарии"
              name="name"
            />
          </form>
        </div>
        <div className={s.btn}>
          <button>Разместить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
