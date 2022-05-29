import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Header.module.css";
import lk from "../../assets/lk.svg";

const Header = (props) => {
  const location = useLocation();
  return (
    <nav>
      <div className={s.content}>
        <h1 className={s.headerText}>SportPeople</h1>
        <div>
          {location.pathname === "/main" ? (
            <div className={s.lk}>
              <img src={lk} />
              <NavLink to={"/profile"} className={s.lkText}>
                Личный кабинет
              </NavLink>
            </div>
          ) : location.pathname === "/profile" ? (
            <div className={s.lk}>
              <NavLink to={"/main"} className={s.lkText}>
                Главная
              </NavLink>
            </div>
          ) : location.pathname === "/profile/messages" ? (
            <div className={s.lk}>
              <NavLink to={"/main"} className={s.lkText}>
                Главная
              </NavLink>
            </div>
          ) : (
            <NavLink to={"/main"} className={s.lkText}></NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
