import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Config from "./pages/Config/Config.js";
import Game from "./pages/Game/Game.js";
import Layout from "./Layout/Layout.js"

const app = document.getElementById('lifewarden');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Config}></IndexRoute>
      <Route path="game" component={Game}></Route>
    </Route>
  </Router>,
app);
