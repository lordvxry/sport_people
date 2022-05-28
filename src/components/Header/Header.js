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
        <div className={s.lk}>
          <img src={lk} />
          <div>
            {location.pathname === "/main" ? (
              <NavLink to={"/profile"} className={s.lkText}>
                Личный кабинет
              </NavLink>
            ) : location.pathname === "/profile" ? (
              <NavLink to={"/main"} className={s.lkText}>
                Главная
              </NavLink>
            ) : (
              <NavLink to={"/main"} className={s.lkText}>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
