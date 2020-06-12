import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import MainPage from "../MainPage/MainPage";
import SignInPage from "../SignInPage/SignInPage";

import "./RootPage.scss";

export const RootPage = (props) => {

  return (
    <div className="RootPage">
      <Router>
        <Route path="/" component={HeaderComponent} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </Router>
    </div>
  )
};
