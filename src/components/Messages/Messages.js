import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import s from "./Messages.module.css";

const Messages = (props) => {
  const auth = useContext(AuthContext);
  const history = useNavigate();
  const [message, setMessage] = useState("");

  function sendMessage() {
    console.log(message);
    const newMessage = {
      user: "Вы",
      id: 5,
      message1: message,
    };
    if (message !== "") {
      props.pushMessage(newMessage);
    }
    setMessage("");
  }

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history("/");
  };

  const messagesElement = props.postData.messages.map((message) => {
    return (
      <div key={message.id} className={s.messagesContent}>
        {message.message1 === undefined ? (
          <></>
        ) : (
          <div className={s.userMessages1}>
            <div className={s.userName}>{message.user}</div>
            <div>{message.message1}</div>
          </div>
        )}
        {message.message2 === undefined ? (
          <></>
        ) : (
          <div className={s.userMessages2}>
            <div className={s.userName}>{message.name}</div>
            <div>{message.message2}</div>
          </div>
        )}
      </div>
    );
  });

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesElement]);

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
      <div className={s.messages}>
        <div className={s.name}>Андрей Андреев</div>
        <div className={s.scroll}>
          {messagesElement}
          <div ref={messagesEndRef} />
        </div>
        <div className={s.sendMessages}>
          <div>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Введите сообщение"
            ></textarea>
          </div>
          <div>
            <button onClick={sendMessage}>Отправить</button>
          </div>
        </div>
      </div>
      <div className={s.dialogsNavbar}>
        <div className={s.dialogs}>
          <NavLink to={"/profile/messages"} className={s.navbarDialogsText}>
            Андрей Андреев
          </NavLink>
        </div>
        <div className={s.dialogs2}>
          <NavLink to={"/profile/messages"} className={s.navbarDialogsText}>
            Елена Петрова
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Messages;
