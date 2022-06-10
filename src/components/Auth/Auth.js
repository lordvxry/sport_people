import React from "react";
import s from "./Auth.module.css";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <div className={s.content}>
      <div className={s.auth}>
        <div>
          <div className={s.authText}>Логин:</div>{" "}
          <input
            className={s.authInput}
            placeholder="Введите email"
            name="email"
          ></input>
        </div>
        <div>
          <div className={s.authText}>Пароль:</div>{" "}
          <input
            name="password"
            type="password"
            placeholder="Введите пароль"
            className={s.authInput}
          ></input>
        </div>
        <div className={s.authBtns}>
          <NavLink to={"/main"}>
            <button>Войти</button>
          </NavLink>
          <NavLink to={"/reg"}>
            <button>Регистрация</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Auth;
