import React from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "react-spinner-animated";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useRoutes } from "./components/routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";

const App = (props) => {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuth = !!token;
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

  const routes = useRoutes(isAuth, props);

  if (!ready) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuth }}>
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
    </AuthContext.Provider>
  );
};

export default App;
