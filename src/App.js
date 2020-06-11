import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";

import { RootPage } from "./views/RootPage/RootPage";

import './App.scss';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" >
        <RootPage />
      </div >
    </ApolloProvider>
  );
};

export default App;