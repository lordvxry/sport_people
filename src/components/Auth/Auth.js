import React from "react";
import s from "./Auth.module.css";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <div className={s.content}>
      <div className={s.auth}>
        <div>
          <div className={s.authText}>Логин:</div>{" "}
          <input className={s.authInput}></input>
        </div>
        <div>
          <div className={s.authText}>Пароль:</div>{" "}
          <input type='password' className={s.authInput}></input>
        </div>
        <div className={s.authBtns}>
          <NavLink to={"/main"} className={s.lkText}>
            <button>Войти</button>
          </NavLink>
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
