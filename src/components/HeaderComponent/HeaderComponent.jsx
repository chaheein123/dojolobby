import React from "react";
import { Link } from "react-router-dom";

import "./HeaderComponent.scss";

export const HeaderComponent = (props) => {

  return (
    <div className="HeaderComponent">

      <div className="header-left">
        <Link
          className="Links"
          to={"/"}
        >
          <img
            src="/images/CodingDojoLogo.png" 
            className="dojo-logo"
            alt="Dojo logo"
          />
        </Link>
      </div>

      <div className="header-right">
        <div className={props.history.location.pathname === "/" ? "header-links-wrappers header-links-wrappers-bottomborder" : "header-links-wrappers"}>
          <Link
            className="Links"
            to={"/"}
          >
            <span className="header-links">Home</span>
          </Link>
        </div>

        <div className={props.history.location.pathname === "/projects" ? "header-links-wrappers header-links-wrappers-bottomborder" : "header-links-wrappers"}>
          <Link
            className="Links"
            to={"/projects"}
          >
            <span className="header-links">Projects</span>
          </Link>
        </div>

        <div className={props.history.location.pathname === "/signin" ? "header-links-wrappers header-links-wrappers-bottomborder" : "header-links-wrappers"}>
          <Link
            className="Links"
            to={"/signin"}
          >
            <span className="header-links">Sign In</span>
          </Link>
        </div>
      </div>
    </div >
  );
};