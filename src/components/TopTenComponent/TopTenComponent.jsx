import React from 'react';

import {top10tags} from "../../data/dummydata";

import "./TopTenComponent.scss";

export const TopTenComponent = () => {
  return (
    <div className="TopTenComponent component-card">
      <h5>Trending tags</h5>
      <div className="main-font">
        {
          top10tags.map((comment,index) => (
            <div key={index}>
              {index+1}. #{comment}
            </div>
          ))
        }
      </div>
    </div>
  )
};