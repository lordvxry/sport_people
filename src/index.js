import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

const el = document.getElementById("app");

const postData = {
  posts: [
    {
      id: 1,
      iConnected: false,
      name: "Андрей Андреев",
      sport: "Волейбол",
      peopleCount: 6,
      allPeopleCount: 14,
      level: "",
      place: "г. Томск, 14:00 - 17:00",
      date: "",
      price: 300,
    },
    {
      id: 2,
      iConnected: false,
      name: "Андрей Андреев",
      sport: "Волейбол",
      peopleCount: 6,
      allPeopleCount: 14,
      level: "",
      place: "г. Томск, 14:00 - 17:00",
      date: "",
      price: 500,
    },
    {
      id: 3,
      iConnected: false,
      name: "Андрей Андреев",
      sport: "Волейбол",
      peopleCount: 3,
      allPeopleCount: 14,
      level: "",
      place: "г. Томск, 14:00 - 17:00",
      date: "25.06",
      price: 300,
    },
    {
      id: 4,
      iConnected: false,
      name: "Дима Андреев",
      sport: "Футбол",
      peopleCount: 0,
      allPeopleCount: 12,
      level: "",
      place: "г. Томск, 14:00 - 17:00",
      date: "",
      price: 300,
    },
  ],

  messages: [
    {
      id: 1,
      name: "Андрей Андреев",
      user: "Вы",
      message1: "Здравствуйте! Можете рассказать подробнее про место встречи",
      message2: "Здравствуйте! Позже вам отпишусь",
    },
    {
      id: 2,
      name: "Андрей Андреев",
      message2: "Часов в 7 будет удобно?",
    },
    {
      id: 3,
      user: "Вы",
      name: "Андрей Андреев",
      message1: "Здравствуйте!",
      message2: ["Здравствуйте!", "Часов в 7 будет удобно?"],
    },
  ],

  sports: [
    {
      id: 1,
      title: "Футбол",
    },

    {
      id: 2,
      title: "Волейбол",
    },
  ],
};

const onConnectToPostById = (postId) => {
  postData.posts.some((post) => {
    if (post.id === postId) {
      post.peopleCount++;
      post.iConnected = true;
      return true;
    }
    return false;
  });
  renderDom();
};
const onDisconnectToPostById = (postId) => {
  postData.posts.some((post) => {
    if (post.id === postId) {
      post.peopleCount--;
      post.iConnected = false;
      return true;
    }
    return false;
  });
  renderDom();
};

const pushPost = (newFood) => {
  console.log("push", postData.posts);
  postData.posts.some((post) => {
    for (post.id; post.id === newFood.id; post.id++) {
      newFood.id++;
      break;
    }
  });
  console.log("newId", newFood.id);
  postData.posts.push(newFood);
};

const pushMessage = (newMessage) => {
  postData.messages.some((message) => {
    for (message.id; message.id === newMessage.id; newMessage.user = null) {
      newMessage.user = null;
      break;
    }
  });
  postData.messages.push(newMessage);
};

const result = { posts: [] };
console.log("res", result);

const filter = (sport) => {
  const a = postData.posts.filter((item) => item.sport.includes(sport));
  console.log("aaa", a);
  result.posts.push(a);
};

const renderDom = () => {
  ReactDOM.render(
    <HashRouter>
      <App
        postData={postData}
        onConnectToPostById={onConnectToPostById}
        onDisconnectToPostById={onDisconnectToPostById}
        pushPost={pushPost}
        pushMessage={pushMessage}
        filter={filter}
      />
    </HashRouter>,
    el
  );
};

renderDom();
