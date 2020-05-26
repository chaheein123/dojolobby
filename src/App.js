import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./views/MainPage/MainPage";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App" >
        {/* Routing here */}
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
        </Switch>
      </div >
    </Router >
  );
}

export default App;