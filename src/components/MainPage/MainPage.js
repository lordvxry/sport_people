import React, { useState } from "react";
import s from "./MainPage.module.css";
import star from "../../assets/star.svg";
import search from "../../assets/search.svg";
import { NavLink } from "react-router-dom";
import Post from "./Post";

const MainPage = (props) => {
  const { onConnectToPostById, onDisconnectToPostById } = props;
  const [sport, setSport] = useState("");

  function addFilter() {
    props.filter(sport)
    // console.log(sport);
  }

  const postsElement = props.postData.posts.map((post) => {
    return (
      <Post
        post={post}
        key={post.id}
        onConnectToPostById={onConnectToPostById}
        onDisconnectToPostById={onDisconnectToPostById}
      />
    );
  });

  return (
    <div className={s.main}>
      <div className={s.dropDowns}>
        <div>
          <select value={sport}  onChange={(event) => setSport(event.target.value)}>
            <option value="">Вид спорта</option>
            {props.postData.sports.map((sport) => {
              return (
                <option
                  key={sport.id}
                >
                  {sport.title}
                </option>
              );
            })}
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
          <button onClick={addFilter}>
            <img src={search} />
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MainPage;
