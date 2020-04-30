import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
// import "./styles.css";
import App from "./components/App";

ReactDOM.render(
  <HashRouter basename="goit-react-hw-04-movie">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
