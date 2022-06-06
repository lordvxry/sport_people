import React from "react";
import s from "./MainPage.module.css";
import star from "../../assets/star.svg";
import search from "../../assets/search.svg";

const MainPage = (props) => {
  const {onConnectToPostById, onDisconnectToPostById} = props;

  const postsElement = props.postData.posts.map((post) => {
    const onPostJoin = () => {
      console.log('Присоединиться', post.id);
      if (post.iConnected) {
        onDisconnectToPostById(post.id);
      } else {
        onConnectToPostById(post.id);
      }
    };

    return (
      <div key={post.id} className={s.content}>
        <div>{post.name}</div>
        <div className={s.contentText}>
          <div>{post.sport}</div>
          <div>
            {post.peopleCount} из {post.allPeopleCount} чел.
          </div>
          <div>
            Уровень: <img src={star} />{" "}
          </div>
          <div>{post.place}</div>
          <div>Дата: {post.date}</div>
          <div>Стоимость: {post.price} руб.</div>
        </div>
        <div className={s.contentBtns}>
          <button onClick={onPostJoin}>
            {
              post.iConnected ? 'Отмена' : 'Присоединиться'
            }
            </button>
          <button>Написать</button>
        </div>
      </div>
    );
  });

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
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MainPage;
