import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

const el = document.getElementById("app");

const peopleCountHandbook = [
  {
    title: "Количество игроков",
    minCount: 0,
  },
  {
    title: "2 - 4",
    minCount: 2,
    maxCount: 4,
  },
  {
    title: "4 - 6",
    minCount: 4,
    maxCount: 6,
  },
  {
    title: "6 - 10",
    minCount: 6,
    maxCount: 10,
  },
  {
    title: "10 - 12",
    minCount: 10,
    maxCount: 12,
  },
  {
    title: "12+",
    minCount: 12,
  },
];

const priceHandbook = [
  {
    title: "Стоимость",
    minPrice: 0,
  },
  {
    title: "до 500 руб.",
    minPrice: 0,
    maxPrice: 500,
  },
  {
    title: "от 500 до 1000 руб.",
    minPrice: 500,
    maxPrice: 1000,
  },
  {
    title: "от 1000 до 2000 руб.",
    minPrice: 1000,
    maxPrice: 2000,
  },
  {
    title: "от 2000 руб.",
    minPrice: 2000,
  },
];

const levelHandbook = [
  {
    title: "Уровень",
    allLevel: 0,
  },
  {
    title: "Уровень: 1/5",
    level: 1,
  },
  {
    title: "Уровень: 2/5",
    level: 2,
  },
  {
    title: "Уровень: 3/5",
    level: 3,
  },
  {
    title: "Уровень: 4/5",
    level: 4,
  },
  {
    title: "Уровень: 5/5",
    level: 5,
  },
];

const postData = {
  posts: [
    {
      id: 1,
      iConnected: false,
      name: "Андрей Андреев",
      sport: "Баскетбол",
      peopleCount: 6,
      allPeopleCount: 14,
      level: 1,
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
      level: 1,
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
      level: 1,
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
      level: 1,
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
      title: "Баскетбол",
    },
    {
      id: 2,
      title: "Футбол",
    },

    {
      id: 3,
      title: "Волейбол",
    },
  ],
};

const renderPostData = JSON.parse(JSON.stringify(postData));

const onConnectToPostById = (postId) => {
  renderPostData.posts.some((post) => {
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
  renderPostData.posts.some((post) => {
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
  renderPostData.posts.some((post) => {
    for (post.id; post.id === newFood.id; post.id++) {
      newFood.id++;
      break;
    }
  });
  console.log("newId", newFood.id);
  renderPostData.posts.push(newFood);
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

const filter = (sport, countStr, priceStr, levelStr) => {
  if (sport || countStr || priceStr || levelStr) {
    let filteredPosts = JSON.parse(JSON.stringify(postData.posts));
    if (sport) {
      filteredPosts =
        sport === "all"
          ? filteredPosts
          : filteredPosts.filter((item) => item.sport.includes(sport));
    }
    if (countStr) {
      const { maxCount = Infinity, minCount } = JSON.parse(countStr);

      filteredPosts = filteredPosts.filter(
        (item) =>
          item.allPeopleCount >= minCount && item.allPeopleCount <= maxCount
      );
    }
    if (priceStr) {
      const { maxPrice = Infinity, minPrice } = JSON.parse(priceStr);

      filteredPosts = filteredPosts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }
    if (levelStr) {
      const { level, allLevel } = JSON.parse(levelStr);

      filteredPosts = filteredPosts.filter(
        (item) => item.level === level || item.level > allLevel
      );
    }

    renderPostData.posts = filteredPosts;

    renderDom();
  }
};

const renderDom = () => {
  ReactDOM.render(
    <HashRouter>
      <App
        peopleCountHandbook={peopleCountHandbook}
        priceHandbook={priceHandbook}
        levelHandbook={levelHandbook}
        postData={postData}
        posts={renderPostData.posts}
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
