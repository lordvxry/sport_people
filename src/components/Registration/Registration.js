import React from "react";
import s from "./Registration.module.css";
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className={s.content}>
      <div className={s.reg}>
        <div className={s.regContainer}>
          <input className={s.regInput} placeholder="Введите имя"></input>
        </div>
        <div className={s.regContainer}>
          <input className={s.regInput} placeholder="Введите почту"></input>
        </div>
        <div className={s.regContainer}>
          <input className={s.regInput} type='password' placeholder="Придумайте пароль"></input>
        </div>
        <div className={s.regContainer}>
          <input className={s.regInput} type='password' placeholder="Повторите пароль"></input>
        </div>
        <div className={s.regBtns}>
          <NavLink to={"/main"}>
            <button>Зарегистрироваться</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registration;
