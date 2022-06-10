import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import { useRoutes } from "./components/routes";

const App = (props) => {
  const {
    priceHandbook,
    peopleCountHandbook,
    posts,
    postData,
    onConnectToPostById,
    onDisconnectToPostById,
    filter,
    levelHandbook,
  } = props;

  const routes = useRoutes(true, props);

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
        {routes}
        <Footer />
      </div>
    </div>
  );
};

export default App;
