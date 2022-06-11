import React, { useState, useEffect } from "react";
import s from "./Auth.module.css";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";

const Auth = () => {
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    error;
    setTimeout(() => {
      clearError();
    }, 5000);
  }, [error, clearError]);

  console.log(error);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("api/auth/login", "POST", { ...form });
      console.log("Data", data);
    } catch (err) {}
  };

  return (
    <div className={s.content}>
      <div className={s.auth}>
        <div className={s.errorMessage}>
          {error === null ? <div></div> : <div>{error}</div>}
        </div>
        <div>
          <div className={s.authText}>Логин:</div>{" "}
          <input
            name="email"
            className={s.authInput}
            placeholder="Введите email"
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <div className={s.authText}>Пароль:</div>{" "}
          <input
            name="password"
            type="password"
            placeholder="Введите пароль"
            className={s.authInput}
            onChange={changeHandler}
          ></input>
        </div>
        <div className={s.authBtns}>
          {/* <NavLink to={"/main"}> */}
          <button disabled={loading} onClick={loginHandler}>
            Войти
          </button>
          {/* </NavLink> */}
          <NavLink to={"/reg"}>
            <button>Регистрация</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Auth;
