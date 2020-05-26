import React from "react";

import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";

import "./MainPage.scss";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        Main Page!!!
      </div>
    )
  };
};