import React from 'react';

import {TopTenComponent} from "../../../components/TopTenComponent/TopTenComponent";
import {TopPostsComponent} from "../../../components/TopPostsComponent/TopPostsComponent";
import {TopProjectsComponent} from "../../../components/TopProjectsComponent/TopProjectsComponent";

import "./MainLeftPage.scss";

export const MainLeftPage = () => {
  return (
    <div className="MainLeftPage">
      <TopPostsComponent />
      <TopProjectsComponent />
      <TopTenComponent />
    </div>
  )
};