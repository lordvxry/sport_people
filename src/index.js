import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

const el = document.getElementById("app");

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  el
);
