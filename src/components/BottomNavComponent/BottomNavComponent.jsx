import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import "./BottomNavComponent.scss";

export default function SimpleBottomNavigation(props) {
  // const [value, setValue] = React.useState(0);
  const routeOptions = ["", "projects", "signin"];
  let routeState = routeOptions.indexOf(props.location.pathname.split("/")[1]) !== -1 ? 
    routeOptions.indexOf(props.location.pathname.split("/")[1]) : 2
  // console.log(routeState, "산소부족해이");

  // console.log(routeState, "동창", props.location.pathname.split("/"));

  const [value, setValue] = React.useState(routeState);
  
  // setValue(1);

  return (
    <div className="bottom-nav">
      <BottomNavigation
        value={routeState}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        onChange={() => {
          setValue(routeState);
        }}
        showLabels
        className="bottom-nav"
      >

        <BottomNavigationAction 
          label="Home"
          icon={<RestoreIcon />}
          onClick={() => props.history.push("/")}
        />
        <BottomNavigationAction
          label="Projects" 
          icon={<FavoriteIcon />}
          onClick={() => props.history.push("/projects")}
        />
        <BottomNavigationAction
          label="Sign In"
          icon={<LocationOnIcon />}
          onClick={() => props.history.push("/signin")}
        />
      </BottomNavigation>
    </div>
  );
}