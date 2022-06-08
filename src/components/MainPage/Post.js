import React from "react";
import s from "./MainPage.module.css";
import star from "../../assets/star.svg";
import { NavLink } from "react-router-dom";

const Post = (props) => {
  const onPostJoin = () => {
    console.log("Присоединиться", props.post.id);
    if (props.post.iConnected) {
      props.onDisconnectToPostById(props.post.id);
    } else {
      props.onConnectToPostById(props.post.id);
    }
  };

  return (
    <div className={s.content}>
      <div>{props.post.name}</div>
      <div className={s.contentText}>
        <div>{props.post.sport}</div>
        <div>
          {props.post.peopleCount} из {props.post.allPeopleCount} чел.
        </div>
        <div>
          Уровень: <img src={star} />{" "}
        </div>
        <div>{props.post.place}</div>
        <div>Дата: {props.post.date}</div>
        <div>Стоимость: {props.post.price} руб.</div>
      </div>
      <div className={s.contentBtns}>
        <button onClick={onPostJoin}>
          {props.post.iConnected ? "Отмена" : "Присоединиться"}
        </button>
        {props.post.myPost ? (
          <></>
        ) : (
          <NavLink to={"/profile/messages"}>
            <button>Написать</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Post;
