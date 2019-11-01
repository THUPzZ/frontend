import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/custom-css/custom.css";
// pages
import Index from "views/Index.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={  props => <Index { ...props  } />  } />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
