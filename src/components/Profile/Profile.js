import React, { useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import s from "./Profile.module.css";

const Profile = (props) => {
  const auth = useContext(AuthContext);
  const history = useNavigate();
  
  const [sport, setSport] = useState("");
  const [allPeopleCount, setAllPeopleCount] = useState("");
  const [level, setLevel] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState(null);
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");

  function addPost() {
    const newPost = {
      id: 5,
      myPost: true,
      name: "Максим Максим",
      sport,
      peopleCount: 1,
      iConnected: true,
      allPeopleCount,
      level,
      place,
      date,
      price,
      comment,
    };
    props.pushPost(newPost);
  }

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history("/");
  };

  return (
    <div className={s.content}>
      <div className={s.navbar}>
        <li className={s.navbarLinks}>
          <NavLink to={"/profile"} className={s.navbarLinksText}>
            Создать заявку
          </NavLink>
        </li>
        <li className={s.navbarLinks}>
          <NavLink to={"/profile/messages"} className={s.navbarLinksText}>
            Сообщения
          </NavLink>
        </li>
        <li className={s.navbarLinks}>
          <a href="/" onClick={logoutHandler} className={s.navbarLinksText}>
            Выйти
          </a>
        </li>
      </div>
      <div className={s.form}>
        <div className={s.formInputs}>
          <form>
            <input
              className={s.inputs}
              type="text"
              placeholder="Вид спорта"
              value={sport}
              onChange={(event) => setSport(event.target.value)}
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="number"
              placeholder="Кол-во участников"
              onChange={(event) => setAllPeopleCount(event.target.value)}
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="number"
              placeholder="Уровень"
              onChange={(event) => setLevel(event.target.value)}
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="text"
              placeholder="Место и время"
              onChange={(event) => setPlace(event.target.value)}
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="date"
              onChange={(event) => setDate(event.target.value)}
            />
          </form>
          <form>
            <input
              className={s.inputs}
              type="number"
              placeholder="Стоимость"
              onChange={(event) => setPrice(event.target.value)}
            />
          </form>
          <form>
            <input
              className={s.inputs }
              type="text"
              placeholder="Комментарии"
              onChange={(event) => setComment(event.target.value)}
            />
          </form>
        </div>
        <div className={s.btn}>
          <button onClick={addPost}>Разместить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
