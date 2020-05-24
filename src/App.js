import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./views/MainPage/MainPage";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App" >
        {/* Routing here */}
        <HeaderComponent />
        <Switch>
          <Route path="/" component={MainPage}></Route>
        </Switch>
      </div >
    </Router >
  );
}

export default App;