import React from 'react';

import {TopTenComponent} from "../../../components/TopTenComponent/TopTenComponent";
import {AnnoucementComponent} from "../../../components/AnnoucementComponent/AnnoucementComponent";
import {TopProjectsComponent} from "../../../components/TopProjectsComponent/TopProjectsComponent";

import "./MainLeftPage.scss";

export const MainLeftPage = () => {
  return (
    <div className="MainLeftPage">
      <AnnoucementComponent />
      <TopProjectsComponent />
      <TopTenComponent />
    </div>
  )
};