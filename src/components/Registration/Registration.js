import React, { useEffect, useState, useContext } from "react";
import s from "./Registration.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";

const Registration = (props) => {
  const registration = useContext(AuthContext);
  const navigate = useNavigate()
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

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("api/auth/register", "POST", { ...form });
      alert(`${data.message}! Теперь вы можете авторизироваться!`)
      navigate("/")
    } catch (err) {}
  };

  return (
    <div className={s.content}>
      <div className={s.reg}>
        <div className={s.errorMessage}>
          {error === null ? <div></div> : <div>{error}</div>}
        </div>
        <div className={s.regContainer}>
          <input className={s.regInput} placeholder="Введите имя"></input>
        </div>
        <div className={s.regContainer}>
          <input
            name="email"
            className={s.regInput}
            placeholder="Введите почту"
            value={form.email}
            onChange={changeHandler}
          ></input>
        </div>
        <div className={s.regContainer}>
          <input
            name="password"
            className={s.regInput}
            type="password"
            placeholder="Придумайте пароль"
            value={form.password}
            onChange={changeHandler}
          ></input>
        </div>
        <div className={s.regContainer}>
          <input
            className={s.regInput}
            type="password"
            placeholder="Повторите пароль"
          ></input>
        </div>
        <div className={s.regBtns}>
          {/* <NavLink to={"/main"}> */}
          <button onClick={registerHandler} disabled={loading}>
            Зарегистрироваться
          </button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
