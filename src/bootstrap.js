import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import NavBar from "./components/NavBar";
import Props from "./components/props";
import State from "./components/state";
import Styling from "./components/styling";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/props">
          <Props />
        </Route>
        <Route path="/state">
          <State />
        </Route>
        <Route path="/styling">
          <Styling />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
