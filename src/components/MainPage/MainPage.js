import React, { useState } from "react";
import s from "./MainPage.module.css";
import star from "../../assets/star.svg";
import search from "../../assets/search.svg";
import { NavLink } from "react-router-dom";
import Post from "./Post";



const MainPage = (props) => {
  const {
    onConnectToPostById,
    onDisconnectToPostById,
    peopleCountHandbook,
    priceHandbook,
    levelHandbook,
  } = props;
  const [sport, setSport] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("");
  const [level, setLevel] = useState("");

  function addFilter() {
    props.filter(sport, count, price, level);
    // console.log(sport);
  }
  const postsElement = props.posts.map((post) => {
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
          <select
            value={sport}
            onChange={(event) => setSport(event.target.value)}
          >
            <option value="all">Вид спорта</option>
            {props.postData.sports.map((sport) => {
              return <option key={sport.id}>{sport.title}</option>;
            })}
          </select>
        </div>
        <div>
          <select
            name="category-list"
            id="category-list"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          >
            {levelHandbook.map((levelObj, index) => {
              return (
                <option key={index} value={JSON.stringify(levelObj)}>
                  {levelObj.title}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select
            name="category-list"
            id="category-list"
            value={count}
            onChange={(event) => setCount(event.target.value)}
          >
            {peopleCountHandbook.map((countObj, index) => {
              return (
                <option key={index} value={JSON.stringify(countObj)}>
                  {countObj.title}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select
            name="category-list"
            id="category-list"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          >
            {priceHandbook.map((priceObj, index) => {
              return (
                <option key={index} value={JSON.stringify(priceObj)}>
                  {priceObj.title}
                </option>
              );
            })}
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
