import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Felix from "./pages/Layout/Felix";
import Robin from "./pages/Layout/Robin";
import Tony from "./pages/Layout/Tony";
import Welcome from "./pages/Layout/Welcome";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path="felix/:warn" component={Felix}></Route>
      <Route path="robin" component={Robin}></Route>
      <Route path="tony" component={Tony}></Route>
    </Route>
  </Router>,
app);
