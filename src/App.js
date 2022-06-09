import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";

const App = (props) => {
  const {
    priceHandbook,
    peopleCountHandbook,
    posts,
    postData,
    onConnectToPostById,
    onDisconnectToPostById,
    filter,
    levelHandbook
  } = props;

  return (
    <div className="page">
      <Header />
      <div
        className="content"
        style={{
          display: "grid",
          gridTemplateRows: "1fr 50px",
        }}
      >
        <Routes>
          <Route path="/" element={<Auth />} />
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
          <Route
            path="/profile"
            element={<Profile pushPost={props.pushPost} />}
          />
          <Route path="/reg" element={<Registration />} />
          <Route
            path="/profile/messages"
            element={
              <Messages
                postData={props.postData}
                pushMessage={props.pushMessage}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
