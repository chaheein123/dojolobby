import React, {useEffect} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import "./BottomNavComponent.scss";

export default function SimpleBottomNavigation(props) {
  const routeOptions = ["", "projects", "signin"];
  // let [value, setValue] = React.useState(routeOptions.indexOf(props.location.pathname.split("/")[1]) !== -1 ? 
  // routeOptions.indexOf(props.location.pathname.split("/")[1]) : 2);

  let [value, setValue] = React.useState(0);

  useEffect(() => {
    setValue(routeOptions.indexOf(props.location.pathname.split("/")[1]) !== -1 ? 
    routeOptions.indexOf(props.location.pathname.split("/")[1]) : 2);
  });

  return (
    <div className="bottom-nav">
      <BottomNavigation
        value={value}
        // onChange={() => {
        //   setValue(value);
        // }}
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