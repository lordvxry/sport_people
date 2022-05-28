import React from "react";
import s from "./MainPage.module.css";
import star from "../../assets/star.svg";

const MainPage = (props) => {
  return (
    <div className={s.main}>
      <div className={s.content}>
        <div>Андрей Андреев</div>
        <div className={s.contentText}>
          <div>Волейбол</div>
          <div>6 из 14 чел.</div>
          <div>
            Уровень: <img src={star} />{" "}
          </div>
          <div>г. Томск, 14:00 - 17:00</div>
          <div>Стоимость: 300 руб.</div>
        </div>
        <div className={s.contentBtns}>
          <button>Присоединиться</button>
          <button>Написать</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
