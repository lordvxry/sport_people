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
  return (
    <div className="page">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/main"
            element={
              <MainPage
                postData={props.postData}
                onConnectToPostById={props.onConnectToPostById}
                onDisconnectToPostById={props.onDisconnectToPostById}
                filter={props.filter}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile pushPost={props.pushPost} />}
          />
          <Route path="/reg" element={<Registration />} />
          <Route path="/profile/messages" element={<Messages postData={props.postData} pushMessage={props.pushMessage} />} />
        </Routes>
      <Footer />
      </div>
    </div>
  );
};

export default App;
