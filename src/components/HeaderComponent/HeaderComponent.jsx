import React, { useState } from "react";
import {  NavLink,Link } from "react-router-dom";

import "./HeaderComponent.scss";

export const HeaderComponent = (props) => {
  const [isExpanded,handleToggle] = useState(false);


  return (
    <div className="HeaderComponent">
      <div className="header-left">
        <Link className="Links" to={"/"}>
          <img
            src="/images/CodingDojoLogo.png"
            className="dojo-logo"
            alt="Dojo logo"
          />
        </Link>
      </div>
      
      <nav className={`header-right collapsed ${isExpanded? "is-expanded":""}`}>
      <i
        className="fa fa-bars"
        aria-hidden="true"
        onClick={()=>handleToggle(!isExpanded)}
          />
        <div
          className={
            props.history.location.pathname === "/"
              ? "header-links-wrappers header-links-wrappers-bottomborder"
              : "header-links-wrappers"
          }
        >
          <NavLink activeClassName="active" className="Links" to={"/"}>
            <span className="header-links">Home</span>
          </NavLink>
        </div>

        <div
          className={
            props.history.location.pathname === "/projects"
              ? "header-links-wrappers header-links-wrappers-bottomborder"
              : "header-links-wrappers"
          }
        >
          <NavLink activeClassName="active" to={"/projects"}>
            <span className="header-links">Projects</span>
          </NavLink>
        </div>

        <div
          className={
            props.history.location.pathname === "/signin"
              ? "header-links-wrappers header-links-wrappers-bottomborder"
              : "header-links-wrappers"
          }
        >
          <NavLink activeClassName="active" to={"/signin"}>
            <span className="header-links">Sign In</span>
          </NavLink>
        </div>
      </nav>

    </div>
  );
};
