import React from "react";
import s from "./MainPage.module.css";
import star from "../../assets/star.svg";
import search from "../../assets/search.svg";

const MainPage = (props) => {
  return (
    <div className={s.main}>
      <div className={s.dropDowns}>
        <div>
          <select name="category-list" id="category-list">
            <option value="">Вид спорта</option>
            <option value="Outdoor">Волейбол</option>
            <option value="Indoor">Футбол</option>
          </select>
        </div>
        <div>
          <select name="category-list" id="category-list">
            <option value="">Уровень</option>
            <option value="Outdoor">Уровень: 1/5</option>
            <option value="Indoor">Уровень: 2/5</option>
          </select>
        </div>
        <div>
          <select name="category-list" id="category-list">
            <option value="">Количество игроков</option>
            <option value="Outdoor">до 6 чел.</option>
            <option value="Indoor">до 10 чел.</option>
            <option value="Indoor">до 14 чел.</option>
          </select>
        </div>
        <div>
          <select name="category-list" id="category-list">
            <option value="">Стоимость</option>
            <option value="Outdoor">до 500 руб.</option>
            <option value="Indoor">от 500 до 1000 руб.</option>
          </select>
        </div>
        <div className={s.search}>
          <button>
            <img src={search} />
          </button>
        </div>
      </div>
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
