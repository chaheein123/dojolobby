import React from 'react';

import {TopTenComponent} from "../../../components/TopTenComponent/TopTenComponent";
import {TopPostsComponent} from "../../../components/TopPostsComponent/TopPostsComponent";

import "./MainLeftPage.scss";

export const MainLeftPage = () => {
  return (
    <div className="MainLeftPage">
      <TopTenComponent />
      <TopPostsComponent />
    </div>
  )
};