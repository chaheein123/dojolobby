import React from "react";

import "./HeaderComponent.scss";

export const HeaderComponent = (props) => {

  return (
    <div className="HeaderComponent">

      <div className="header-left">
        <img src="/images/CodingDojoLogo.png" className="dojo-logo" />
      </div>

      <div className="header-right">
        <a className="header-links">Home</a>
        <a className="header-links">Projects</a>
        <a className="header-links"> Sign In</a>
      </div>
    </div>
  );
};