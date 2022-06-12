import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Auth from "./Auth/Auth";
import Registration from "./Registration/Registration";

export const useRoutes = (isAuth, props) => {
  const {
    priceHandbook,
    peopleCountHandbook,
    posts,
    postData,
    onConnectToPostById,
    onDisconnectToPostById,
    filter,
    levelHandbook,
    pushPost,
    pushMessage,
  } = props;
  console.log(isAuth);
  if (isAuth) {
    return (
      <Routes>
        <Route
          path="/main"
          element={
            <MainPage
              peopleCountHandbook={peopleCountHandbook}
              priceHandbook={priceHandbook}
              levelHandbook={levelHandbook}
              posts={posts}
              postData={postData}
              onConnectToPostById={onConnectToPostById}
              onDisconnectToPostById={onDisconnectToPostById}
              filter={filter}
            />
          }
        />
        <Route path="/profile" element={<Profile pushPost={pushPost} />} />
        <Route
          path="/profile/messages"
          element={<Messages postData={postData} pushMessage={pushMessage} />}
        />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/reg" element={<Registration />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
