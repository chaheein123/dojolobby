import React from 'react';

import {top10comments} from "../../data/dummydata";

import "./TopTenComponent.scss";

export const TopTenComponent = () => {
  return (
    <div className="TopTenComponent component-card">
      <h5>Trending tags</h5>
      {
        top10comments.map((comment,index) => (
          <div key={index}>
            {index+1}. #{comment}
          </div>
        ))
      }
    </div>
  )
};