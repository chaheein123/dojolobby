import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import MainPage from "../MainPage/MainPage";
import ProjectPage from "../ProjectPage/ProjectPage";

export const RootPage = () => {
  return (
    <Router>
      {/* <HeaderComponent /> */}
      <Route path="/" component={HeaderComponent} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/projects" component={ProjectPage} />
      </Switch>
    </Router>
  )
}