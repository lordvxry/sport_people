import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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

  const routes = useRoutes(false, props);

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
