import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RootPage } from "./views/RootPage/RootPage";

import './App.scss';

function App() {
  return (
    <div className="App" >
      {/* Routing here */}
      {/* <Router>
        <Route path="/" component={RootPage} />
      </Router> */}
      <RootPage />
    </div >
  );
};

export default App;